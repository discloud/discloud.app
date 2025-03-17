import type { RawFile } from "@discloudapp/util";
import type { RequestMethod } from "../@enum";
import { type IUserAgent } from "../UserAgent";

export type RouteLike = `/${string}`

export type RequestOptions = NonNullable<Parameters<typeof fetch>[1]>

export interface RESTOptions {
  /**
   * The base api path, without version
   * @defaultValue `'https://api.discloud.app'`
   */
  api: string
  /**
   * How many requests to allow sending per second (Infinity for unlimited, 60 for the standard global limit used by Discloud)
   *
   * @defaultValue `60`
   */
  globalRequestsPerMinute: number
  /**
   * Additional headers to send for all API requests
   *
   * @defaultValue `{}`
   */
  headers: RequestInit["headers"];
  /**
   * The version of the API to use
   *
   * @defaultValue `{APIVersion}`
   */
  version: string

  userAgent: IUserAgent
}

/**
 * Possible headers for an API call
 */
export interface RequestHeaders {
  "api-token": string
  contentType?: string
  "User-Agent"?: string
}

/**
 * Represents possible data to be given to an endpoint
 */
export interface RequestData {
  /**
   * The body to send to this request.
   */
  body?: RequestInit["body"] | unknown
  /**
   * File to be attached to this request
   */
  file?: File | RawFile
  /**
   * Additional headers to add to this request
   */
  headers?: RequestInit["headers"]
  /**
   * Query string parameters to append to the called endpoint
   */
  query?: ConstructorParameters<typeof URLSearchParams>[0]
}

/**
 * Internal request options
 *
 * @internal
 */
export interface InternalRequest extends RequestData {
  fullRoute: RouteLike
  method: RequestMethod
}

export interface RateLimitData {
  global: boolean
  method: `${RequestMethod}`,
  path: string,
  timeToReset: number
  url: string
}

export interface RestEvents {
  error: [error: Error]
  rateLimited: [rateLimitData: RateLimitData]
}
