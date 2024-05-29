import EventEmitter from "events";
import { RequestMethod, RESTEvents } from "./@enum";
import type { InternalRequest, RequestData, RestEvents, RESTOptions, RouteLike } from "./@types";
import { RequestManager } from "./RequestManager";

export class REST extends EventEmitter<RestEvents> {
  readonly requestManager: RequestManager;

  constructor(options: Partial<RESTOptions> = {}) {
    super({ captureRejections: true });

    this.requestManager = new RequestManager(options)
      .on(RESTEvents.Error, this.emit.bind(this, RESTEvents.Error))
      .on(RESTEvents.RateLimited, this.emit.bind(this, RESTEvents.RateLimited));
  }

  get token() {
    return this.requestManager.token;
  }

  /**
   * Sets the authorization token that should be used for requests
   *
   * @param token - The authorization token to use
   */
  setToken(token: string) {
    this.requestManager.setToken(token);
    return this;
  }

  /**
   * Runs a get request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  get<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.request(Object.assign(options, { fullRoute, method: RequestMethod.Get }));
  }

  /**
   * Runs a delete request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  delete<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.request(Object.assign(options, { fullRoute, method: RequestMethod.Delete }));
  }

  /**
   * Runs a post request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  post<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.request(Object.assign(options, { fullRoute, method: RequestMethod.Post }));
  }

  /**
   * Runs a put request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  put<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.request(Object.assign(options, { fullRoute, method: RequestMethod.Put }));
  }

  /**
   * Runs a request from the api
   *
   * @param options - Request options
   */
  async request<T = any>(options: InternalRequest): Promise<T> {
    const res = await this.raw(options);

    const contentType = res.headers.get("content-type");

    if (contentType?.includes("application/json"))
      return res.json() as T;

    if (contentType?.includes("text/"))
      return res.text() as T;

    return res.arrayBuffer() as T;
  }

  /**
   * Runs a request from the API, yielding the raw Response object
   *
   * @param options - Request options
   */
  raw(options: InternalRequest) {
    const request = this.requestManager.resolveRequest(options);
    return this.requestManager.request(request.url, request.options);
  }
}