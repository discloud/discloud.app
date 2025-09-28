import { mergeDefaults } from "@discloudapp/util";
import EventEmitter from "events";
import { setTimeout as sleep } from "timers/promises";
import { RequestMethod, RESTEvents } from "./@enum";
import type { InternalRequest, RateLimitData, RequestData, RequestOptions, RestEvents, RESTOptions, RouteLike } from "./@types";
import { DiscloudAPIError } from "./errors";
import { DefaultRestOptions } from "./utils";

export class REST extends EventEmitter<RestEvents> {
  #token!: string;
  readonly options: RESTOptions;

  /**
   * The number of requests limit on the global bucket
   */
  globalLimit = 60;

  /**
   * The number of requests remaining in the global bucket
   */
  globalRemaining = 0;

  /**
   * The seconds that the global bucket is reset
   */
  globalReset = 0;

  /**
   * The time at which the last request was made
   */
  globalTime = 0;

  constructor(options: Partial<RESTOptions> = {}) {
    super({ captureRejections: true });
    this.options = mergeDefaults(DefaultRestOptions, options);
    this.globalLimit = this.options.globalRequestsPerMinute;
    this.globalRemaining = this.options.globalRequestsPerMinute;
  }

  private get baseURL() {
    return this.options.api + "/v" + this.options.version;
  }

  /**
   * If the rate limit bucket is currently limited by its limit
   */
  get globalLimited() {
    return this.globalRemaining < 1;
  }

  /**
   * The time until queued requests can continue
   */
  get globalTimeToReset(): number {
    return this.globalReset * 1000 + this.globalTime - Date.now();
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
   * Runs a get request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  get<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.#raw(Object.assign(options, { fullRoute, method: RequestMethod.Get }));
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

    return this.#resolveResponseBody(response);
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

    this.globalRemaining--;
    const response = await fetch(url, options);

    queueMicrotask(() => this.#resolveResponseHeaders(response.headers));

    if (!response.ok) {
      const responseBody = await this.#resolveResponseBody<any>(response);

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
    const formData = new FormData();

    if (request.query) url.search = new URLSearchParams(request.query).toString();

    if (request.file) {
      if (request.file instanceof File) {
        formData.append(request.file.name, request.file);
      } else {
        if (request.file.data instanceof File) {
          request.file.name ??= request.file.data.name;
        } else {
          request.file.data = new File([request.file.data], request.file.name);
        }

        formData.append(request.file.name, request.file.data);
      }
    }

    if (request.body) {
      if (request.file) {
        if (typeof request.body === "string") {
          try {
            request.body = JSON.parse(request.body);
          } catch {
            request.body = {};
          }
        }

        for (const key in request.body ?? {})
          formData.append(key, request.body![key as keyof InternalRequest["body"]]);
      } else {
        headers.set("Content-Type", "application/json");

        if (typeof request.body === "string") {
          options.body = request.body;
        } else {
          options.body = JSON.stringify(request.body);
        }
      }
    }

    if (request.file) options.body = formData;

    options.headers = Object.fromEntries(headers.entries());

    return { url, options };
  }

  #resolveResponseBody<T>(response: Response): Promise<T>
  #resolveResponseBody(response: Response) {
    const contentType = response.headers.get("content-type");

    if (typeof contentType === "string") {
      if (contentType.includes("application/json"))
        return response.json();

      if (contentType.includes("text/"))
        return response.text();
    }

    return response.arrayBuffer();
  }

  #resolveResponseHeaders(headers: Headers) {
    this.globalTime = Date.now();

    const Limit = parseInt(headers.get("ratelimit-limit")!);
    const Remaining = parseInt(headers.get("ratelimit-remaining")!);
    const Reset = parseInt(headers.get("ratelimit-reset")!);
    if (!isNaN(Limit)) this.globalLimit = Math.max(Limit, 0);
    if (!isNaN(Remaining)) this.globalRemaining = Math.max(Remaining, 0);
    if (!isNaN(Reset)) this.globalReset = Math.max(Reset, 0);

    this.#initRateLimitResetTimer();
  }

  // eslint-disable-next-line no-unused-private-class-members
  #timer!: NodeJS.Timeout | null;
  #initRateLimitResetTimer() {
    this.#timer ??= setTimeout(() => {
      this.#timer = null;
      this.globalRemaining = this.globalLimit;
    }, this.globalTimeToReset);
  }
}