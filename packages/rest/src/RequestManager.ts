import { mergeDefaults } from "@discloudapp/util";
import EventEmitter from "node:events";
import { setTimeout as sleep } from "node:timers/promises";
import { File, FormData, request } from "undici";
import { RESTEvents } from "./@enum";
import type { InternalRequest, RESTOptions, RateLimitData, RequestHeaders, RequestOptions, RestEvents } from "./@types";
import { DiscloudAPIError } from "./errors";
import { DefaultRestOptions } from "./utils";

export interface RequestManager extends EventEmitter {
  emit: (<K extends keyof RestEvents>(event: K, ...args: RestEvents[K]) => boolean) &
  (<S extends string | symbol>(event: Exclude<S, keyof RestEvents>, ...args: unknown[]) => boolean);
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

    const url = new URL(request.fullRoute, this.baseURL);

    if (request.query) {
      url.search = new URLSearchParams(request.query).toString();
    }

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
      method: request.method.toUpperCase(),
    }, additionalOptions);

    if (request.body)
      if (request.file) {
        if (typeof request.body === "string")
          try {
            request.body = JSON.parse(request.body);
          } catch {
            request.body = {};
          }

        for (const [key, value] of Object.entries(<any>request.body))
          formData.append(key, value);
      } else {
        if (typeof request.body === "string") {
          fetchOptions.body = request.body;
        } else {
          fetchOptions.body = JSON.stringify(request.body);
        }
      }

    if (request.file) fetchOptions.body = formData;

    // Prioritize setting an agent per request, use the agent for this instance otherwise.
    fetchOptions.dispatcher = request.dispatcher ?? this.options.dispatcher;

    return { url, fetchOptions };
  }

  async request(url: string | URL, options: RequestOptions) {
    if (!options) options = {};

    while (this.globalLimited) {
      this.emit(RESTEvents.RateLimited, <RateLimitData>{
        global: this.globalLimited,
        method: options.method ?? "GET",
        timeToReset: this.globalTimeToReset,
        url: url.toString(),
      });

      await sleep(this.globalTimeToReset);
    }

    const res = await request(url, options);

    this.globalTime = Date.now();
    const limit = Number(res.headers["ratelimit-limit"]);
    const remaining = Number(res.headers["ratelimit-remaining"]);
    const reset = Number(res.headers["ratelimit-reset"]);
    if (!isNaN(limit)) this.globalLimit = limit;
    if (!isNaN(remaining)) this.globalRemaining = remaining;
    if (!isNaN(reset)) this.globalReset = reset;

    url = url.toString();
    const path = url.replace(this.baseURL, "") || `/${url.split("/").slice(4).join("/") ?? url.split("/").at(-1)}`;

    if (this.globalLimited) {
      this.emit(RESTEvents.RateLimited, <RateLimitData>{
        global: this.globalLimited,
        method: options.method ?? "GET",
        timeToReset: this.globalTimeToReset,
        path,
        url,
      });
    }

    if (res.statusCode > 399) {
      const body = options.body;
      const code = res.statusCode;
      const message = await res.body.json().then((body: any) => body.message).catch(() => res.body.text());
      const method = options.method ?? "GET";
      throw new DiscloudAPIError(message, code, method, path, body);
    }

    return res;
  }
}