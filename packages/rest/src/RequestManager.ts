import { setTimeout as sleep } from "node:timers/promises";
import { Dispatcher, File, FormData, request } from "undici";
import type { InternalRequest, RequestHeaders, RequestOptions, RESTOptions } from "./@types";
import { DefaultRestOptions, DefaultUserAgent } from "./utils/contants";

export class RequestManager {
  #token!: string;
  options: RESTOptions;

  /**
   * The {@link https://undici.nodejs.org/#/docs/api/Agent | Agent} for all requests
   * performed by this manager.
   */
  agent?: Dispatcher;

  /**
	 * The number of requests remaining in the global bucket
	 */
  globalRemaining: number;

  /**
	 * The timestamp at which the global bucket resets
	 */
  globalReset = 0;

  constructor(options: Partial<RESTOptions>) {
    this.options = { ...DefaultRestOptions, ...options };
    this.globalRemaining = this.options.globalRequestsPerMinute;
    this.agent = this.options.agent;
  }

  /**
   * If the rate limit bucket is currently limited by its limit
   */
  get globalLimited() {
    return this.globalRemaining < 1 && Date.now() < this.globalReset;
  }

  /**
   * The time until queued requests can continue
   */
  get globalTimeToReset(): number {
    return this.globalReset - Date.now();
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
      ...this.options.headers,
      "api-token": this.#token,
      "User-Agent": DefaultUserAgent,
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
      headers: { ...(request.headers ?? {}), ...additionalHeaders, ...headers },
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

    // Prioritize setting an agent per request, use the agent for this instance otherwise.
    fetchOptions.dispatcher = request.dispatcher ?? this.agent;

    return { url, fetchOptions };
  }

  async request(url: string, options: RequestOptions) {
    while (this.globalLimited)
      await sleep(this.globalTimeToReset);

    const res = await request(url, options);

    this.globalRemaining = Number(res.headers["ratelimit-remaining"]);
    this.globalReset = Date.now() + (Number(res.headers["ratelimit-reset"]) * 1000);

    if (res.statusCode > 399 && res.statusCode < 600) {
      const body = await res.body.json();
      throw new Error(`\x1b[31m[DISCLOUD API] ${body.message}\x1b[0m`);
    }

    return res;
  }
}