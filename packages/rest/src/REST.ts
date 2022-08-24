import { RequestMethod } from "./@enum";
import { InternalRequest, RequestData, RESTOptions, RouteLike } from "./@types";
import { RequestManager } from "./RequestManager";

export class REST {
  readonly requestManager: RequestManager;

  constructor(options: Partial<RESTOptions> = {}) {
    this.requestManager = new RequestManager(options);
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
    return this.request({ ...options, fullRoute, method: RequestMethod.Get });
  }

  /**
   * Runs a delete request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  delete<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.request({ ...options, fullRoute, method: RequestMethod.Delete });
  }

  /**
   * Runs a post request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  post<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.request({ ...options, fullRoute, method: RequestMethod.Post });
  }

  /**
   * Runs a put request from the api
   *
   * @param fullRoute - The full route to query
   * @param options - Optional request options
   */
  put<T = any>(fullRoute: RouteLike, options: RequestData = {}): Promise<T> {
    return this.request({ ...options, fullRoute, method: RequestMethod.Put });
  }

  /**
   * Runs a request from the api
   *
   * @param options - Request options
   */
  async request(options: InternalRequest) {
    const response = await this.raw(options);
    return response.body.json();
  }

  /**
   * Runs a request from the API, yielding the raw Response object
   *
   * @param options - Request options
   */
  raw(options: InternalRequest) {
    const { fetchOptions, url } = this.requestManager.resolveRequest(options);
    return this.requestManager.request(url, fetchOptions);
  }
}