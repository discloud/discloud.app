import EventEmitter from "node:events";
import { setTimeout as sleep } from "node:timers/promises";
import { Dispatcher, File, FormData, request } from "undici";
import { RESTEvents } from "./@enum";
import type { InternalRequest, RESTOptions, RateLimitData, RequestHeaders, RequestOptions, RestEvents } from "./@types";
import DiscloudAPIError from "./errors/DiscloudAPIError";
import { DefaultRestOptions } from "./utils/contants";

export interface RequestManager {
  emit: (<K extends keyof RestEvents>(event: K, ...args: RestEvents[K]) => boolean) &
  (<S extends string | symbol>(event: Exclude<S, keyof RestEvents>, ...args: any[]) => boolean);

  off: (<K extends keyof RestEvents>(event: K, listener: (...args: RestEvents[K]) => void) => this) &
  (<S extends string | symbol>(event: Exclude<S, keyof RestEvents>, listener: (...args: any[]) => void) => this);

  on: (<K extends keyof RestEvents>(event: K, listener: (...args: RestEvents[K]) => void) => this) &
  (<S extends string | symbol>(event: Exclude<S, keyof RestEvents>, listener: (...args: any[]) => void) => this);

  once: (<K extends keyof RestEvents>(event: K, listener: (...args: RestEvents[K]) => void) => this) &
  (<S extends string | symbol>(event: Exclude<S, keyof RestEvents>, listener: (...args: any[]) => void) => this);

  removeAllListeners: (<K extends keyof RestEvents>(event?: K) => this) &
  (<S extends string | symbol>(event?: Exclude<S, keyof RestEvents>) => this);
}

export class RequestManager extends EventEmitter {
  #token!: string;
  options: RESTOptions;

  /**
   * The {@link https://undici.nodejs.org/#/docs/api/Agent | Agent} for all requests
   * performed by this manager.
   */
  agent?: Dispatcher;

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

  constructor(options: Partial<RESTOptions>) {
    super();
    this.options = Object.assign({}, DefaultRestOptions, options);
    this.globalRemaining = this.options.globalRequestsPerMinute;
    this.agent = this.options.agent;
  }

  /**
   * If the rate limit bucket is currently limited by its limit
   */
  get globalLimited() {
    return !this.globalRemaining && this.globalTimeToReset > -1;
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
  public setToken(token: string) {
    this.#token = token;
    return this;
  }

  resolveRequest(request: InternalRequest) {
    const headers: RequestHeaders = Object.assign({}, this.options.headers, { "api-token": this.#token });

    const query = request.query?.toString() ? `?${request.query}` : "";

    const url = `${this.options.api}/v${this.options.version}${request.fullRoute}${query}`;

    const additionalHeaders: Record<string, string> = {};
    const additionalOptions: Partial<RequestOptions> = {};
    const formData = new FormData();

    if (request.file) {
      if (request.file instanceof File) {
        formData.append("file", request.file);
      } else {
        if (request.file.data instanceof File) {
          request.file.name = request.file.name ?? request.file.data.name;
        } else {
          request.file.data = new File([request.file.data], request.file.name);
        }

        formData.append(request.file.key ?? "file", request.file.data);
      }

      additionalOptions.headersTimeout = 300000;
    } else if (request.body) {
      additionalHeaders["Content-Type"] = "application/json";
    }

    const fetchOptions: RequestOptions = Object.assign({
      headers: Object.assign({}, request.headers, additionalHeaders, headers),
      method: request.method.toUpperCase() as Dispatcher.HttpMethod,
    }, additionalOptions);

    if (request.body)
      if (request.file) {
        for (const [key, value] of Object.entries(request.body as Record<string, unknown>))
          formData.append(key, value);
      } else {
        fetchOptions.body = JSON.stringify(request.body);
      }

    if (request.file) fetchOptions.body = formData;

    // Prioritize setting an agent per request, use the agent for this instance otherwise.
    fetchOptions.dispatcher = request.dispatcher ?? this.agent;

    return { url, fetchOptions };
  }

  async request(url: string, options: RequestOptions) {
    while (this.globalLimited) {
      this.emit(RESTEvents.RateLimited, <RateLimitData>{
        global: this.globalLimited,
        method: options.method ?? "GET",
        timeToReset: this.globalTimeToReset,
        url,
      });

      await sleep(this.globalTimeToReset);
    }

    const res = await request(url, options);

    this.globalTime = Date.now();
    const limit = Number(res.headers["ratelimit-limit"]);
    const remaining = Number(res.headers["ratelimit-remaining"]);
    const reset = Number(res.headers["ratelimit-reset"]);
    if (!isNaN(limit)) this.globalLimit = Number(res.headers["ratelimit-limit"]);
    if (!isNaN(remaining)) this.globalRemaining = Number(res.headers["ratelimit-remaining"]);
    if (!isNaN(reset)) this.globalReset = Number(res.headers["ratelimit-reset"]);

    if (this.globalLimited) {
      this.emit(RESTEvents.RateLimited, <RateLimitData>{
        global: this.globalLimited,
        method: options.method,
        timeToReset: this.globalTimeToReset,
        url,
      });
    }

    if (res.statusCode > 399) {
      const body = options.body;
      const code = res.statusCode;
      const message = await res.body.json().then((body: any) => body.message);
      const method = options.method ?? "GET";
      const path = `/${url.split("/").slice(4).join("/") ?? url.split("/").at(-1)}`;
      throw new DiscloudAPIError(message, code, method, path, body);
    }

    return res;
  }
}