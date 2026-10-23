import { APIVersion } from "@discloudapp/api-types/v2";
import type { RawFile } from "@discloudapp/util";
import EventEmitter from "events";
import _ from "lodash";
import { setTimeout as sleep } from "timers/promises";
import { RequestMethod, RESTEvents } from "./@enum";
import type { InternalRequest, RateLimitData, RequestData, RequestOptions, RestEvents, RESTOptions, RouteLike } from "./@types";
import { DiscloudAPIError } from "./errors";
import { UserAgent } from "./UserAgent";

const _baseApiUrl = "https://api.discloud.app";
const _defaultLimit = 60;
const _one = 1;
const _sInMs = 1_000;
const _v = "/v";
const _zero = 0;

function _defaultOptions(): Required<RESTOptions> {
  return {
    api: _baseApiUrl,
    globalRequestsPerMinute: 60,
    headers: {},
    version: APIVersion,
    userAgent: new UserAgent(),
  };
}

export class REST extends EventEmitter<RestEvents> {
  constructor(options: Partial<RESTOptions> = {}) {
    super({ captureRejections: true });
    this.options = _.defaultsDeep(options, _defaultOptions());
    this.#globalLimit = this.options.globalRequestsPerMinute;
    this.#globalRemaining = this.options.globalRequestsPerMinute;
  }

  #token!: string;
  readonly options: RESTOptions;

  /** The number of requests limit on the global bucket */
  #globalLimit = _defaultLimit;

  /** The number of requests remaining in the global bucket */
  #globalRemaining = _zero;

  /** The seconds that the global bucket is reset */
  #globalReset = _zero;

  /** The time at which the last request was made */
  #globalTime = _zero;

  private get baseURL() {
    return this.options.api + _v + this.options.version;
  }

  /**
   * If the rate limit bucket is currently limited by its limit
   */
  get globalLimited() {
    return this.#globalRemaining < _one;
  }

  /**
   * The time until queued requests can continue
   */
  get globalTimeToReset(): number {
    return this.#globalReset * _sInMs + this.#globalTime - Date.now();
  }

  get token() {
    return this.#token;
  }

  /**
   * Sets the authorization token that should be used for requests
   *
   * @param token - The authorization token to use
   */
  setToken(token: string) {
    this.#token = token;
    return this;
  }

  /**
   * Runs a delete request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  delete<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.#raw(Object.assign(options, { fullRoute, method: RequestMethod.Delete }));
  }

  /**
   * Runs a get request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  get<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.#raw(Object.assign(options, { fullRoute, method: RequestMethod.Get }));
  }

  /**
   * Runs a patch request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  patch<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.#raw(Object.assign(options, { fullRoute, method: RequestMethod.Patch }));
  }

  /**
   * Runs a post request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  post<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.#raw(Object.assign(options, { fullRoute, method: RequestMethod.Post }));
  }

  /**
   * Runs a put request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  put<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.#raw(Object.assign(options, { fullRoute, method: RequestMethod.Put }));
  }

  async #raw<T>(options: InternalRequest): Promise<T> {
    const request = this.#resolveRequest(options);

    const response = await this.#request(request.url, request.options);

    return _resolveResponseBody(response);
  }

  async #request(url: URL, options: RequestOptions) {
    while (this.globalLimited) {
      this.emit(RESTEvents.RateLimited, <RateLimitData>{
        global: this.globalLimited,
        method: options.method,
        path: url.pathname,
        timeToReset: this.globalTimeToReset,
        url: url.toString(),
      });

      await sleep(this.globalTimeToReset);
    }

    this.#globalRemaining--;
    const response = await fetch(url, options);

    queueMicrotask(() => this.#resolveResponseHeaders(response.headers));

    if (!response.ok) {
      const responseBody = await _resolveResponseBody<any>(response);

      throw new DiscloudAPIError(
        responseBody.message ?? responseBody,
        response.status,
        options?.method ?? "GET",
        url.pathname,
        options?.body,
      );
    }

    return response;
  }

  #resolveRequest(request: InternalRequest) {
    const url = new URL(this.baseURL + request.fullRoute);
    const options: RequestOptions = { method: request.method };
    const headers = new Headers(Object.assign({}, request.headers, this.options.headers, {
      "api-token": this.#token,
      "User-Agent": this.options.userAgent,
    }));

    if (request.query) url.search = new URLSearchParams(request.query).toString();

    if (request.file != null) {
      const formData = new FormData();

      request.file = _resolveRequestFile(request.file);

      formData.append(request.file.name, request.file);

      if (request.body != null) {
        if (typeof request.body === "string")
          try { request.body = JSON.parse(request.body); } catch { request.body = {}; }

        for (const key in request.body!)
          formData.append(key, request.body![key as keyof InternalRequest["body"]]);
      }

      options.body = formData;
    } else if (request.body != null) {
      headers.set("Content-Type", "application/json");

      if (typeof request.body === "string") {
        options.body = request.body;
      } else {
        options.body = JSON.stringify(request.body);
      }
    }

    options.headers = Object.fromEntries(headers.entries());

    return { url, options };
  }

  #resolveResponseHeaders(headers: Headers) {
    this.#globalTime = Date.now();

    const Limit = parseInt(headers.get("ratelimit-limit")!);
    const Remaining = parseInt(headers.get("ratelimit-remaining")!);
    const Reset = parseInt(headers.get("ratelimit-reset")!);
    if (!isNaN(Limit)) this.#globalLimit = Math.max(Limit, 0);
    if (!isNaN(Remaining)) this.#globalRemaining = Math.max(Remaining, 0);
    if (!isNaN(Reset)) this.#globalReset = Math.max(Reset, 0);

    this.#initRateLimitResetTimer();
  }

  // eslint-disable-next-line no-unused-private-class-members
  #timer!: NodeJS.Timeout | null;
  #initRateLimitResetTimer() {
    this.#timer ??= setTimeout(() => {
      this.#timer = null;
      this.#globalRemaining = this.#globalLimit;
    }, this.globalTimeToReset);
  }
}

function _resolveRequestFile(file: File | RawFile) {
  if (file instanceof File) return file;
  if (file.data instanceof File) return file.data;
  return new File([file.data], file.name);
}

function _resolveResponseBody<T>(response: Response): Promise<T>
async function _resolveResponseBody(response: Response) {
  const contentType = response.headers.get("content-type");

  if (typeof contentType === "string") {
    if (contentType.includes("application/json"))
      return response.json();

    if (contentType.includes("text/"))
      return response.text();
  }

  return response.arrayBuffer();
}
