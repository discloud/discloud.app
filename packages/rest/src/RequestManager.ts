import { Blob } from "node:buffer";
import { Dispatcher, FormData, request, RequestInit } from "undici";
import { InternalRequest, RequestHeaders, RequestOptions, RESTOptions } from "./@types";
import { DefaultRestOptions } from "./utils/contants";

export class RequestManager {
  #token!: string;
  options: RESTOptions;

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
      "api-token": this.#token
    };

    const query = request.query?.toString() ? `?${request.query}` : "";

    const url = `${this.options.api}/v${this.options.version}${request.fullRoute}${query}`;

    let finalBody: RequestInit["body"];

    if (request.file) {
      const formData = new FormData();

      const file = new Blob([request.file.data]);

      formData.append(request.file.key ?? "file", file, request.file.name);

      if (request.body)
        for (const [key, value] of Object.entries(request.body as Record<string, unknown>)) {
          formData.append(key, value);
        }

      finalBody = formData;
    }

    const fetchOptions: RequestOptions = {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      headers: { ...(request.headers ?? {}), ...headers } as Record<string, string>,
      method: request.method.toUpperCase() as Dispatcher.HttpMethod,
    };

    if (finalBody)
      fetchOptions.body = finalBody as Exclude<RequestOptions["body"], undefined>;

    return { url, fetchOptions };
  }

  async request(url: string, options: RequestOptions) {
    let res!: Dispatcher.ResponseData;

    try {
      res = await request(url, { ...options });
    } catch (error) {
      console.error(error);
    }

    return res;
  }
}