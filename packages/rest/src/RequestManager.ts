import { setTimeout as sleep } from "node:timers/promises";
import { Dispatcher, File, FormData, request } from "undici";
import { InternalRequest, RequestHeaders, RequestOptions, RESTOptions } from "./@types";
import { DefaultRestOptions } from "./utils/contants";

export class RequestManager {
  #token!: string;
  options: RESTOptions;

  /**
   * If the rate limit bucket is currently limited
   */
  get #limited() {
    return this.#localLimited;
  }

  /**
   * If the rate limit bucket is currently limited by its limit
   */
  get #localLimited() {
    return this.#remaining < 1 && Date.now() < this.#reset;
  }

  /**
   * The remaining requests that can be made before we are rate limited
   */
  #remaining = 1;

  /**
   * The time this rate limit bucket will reset
   */
  #reset = 0;

  /**
   * The time until queued requests can continue
   */
  get #timeToReset(): number {
    return this.#reset - Date.now();
  }

  constructor(options: Partial<RESTOptions>) {
    this.options = { ...DefaultRestOptions, ...options };
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
    const headers: RequestHeaders = {
      "api-token": this.#token,
    };

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

    const fetchOptions: RequestOptions = {
      headers: { ...(request.headers ?? {}), ...headers, ...additionalHeaders },
      method: request.method.toUpperCase() as Dispatcher.HttpMethod,
      ...additionalOptions,
    };

    if (request.body)
      if (request.file) {
        for (const [key, value] of Object.entries(request.body as Record<string, unknown>))
          formData.append(key, value);
      } else {
        fetchOptions.body = JSON.stringify(request.body);
      }

    if (request.file) fetchOptions.body = formData;

    return { url, fetchOptions };
  }

  async request(url: string, options: RequestOptions) {
    while (this.#limited) {
      await sleep(this.#timeToReset);
    }

    const res = await request(url, { ...options });

    this.#remaining = Number(res.headers["ratelimit-remaining"]);
    this.#reset = Date.now() + (Number(res.headers["ratelimit-reset"]) * 1000);

    if (res.statusCode > 399 && res.statusCode < 600) {
      const body = await res.body.json();
      throw new Error(`\x1b[31m[DISCLOUD API] ${body.message}\x1b[0m`);
    }

    return res;
  }
}