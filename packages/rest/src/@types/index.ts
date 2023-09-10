import { RawFile } from "@discloudapp/util";
import { Agent, BodyInit, Dispatcher, File, request, HeadersInit } from "undici";
import { RequestMethod } from "../@enum";

export type RouteLike = `/${string}`

export type RequestOptions = Parameters<typeof request>[1]

export interface RESTOptions {
  /**
   * The base api path, without version
   * @defaultValue `'https://api.discloud.app'`
   */
  api: string
  /**
   * The agent to set globally
   */
  agent: Dispatcher;
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
	headers: Record<string, string>;
  /**
   * The version of the API to use
   *
   * @defaultValue `{APIVersion}`
   */
  version: string
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
  body?: BodyInit | unknown
  /**
   * The {@link https://undici.nodejs.org/#/docs/api/Agent | Agent} to use for the request.
   */
  dispatcher?: Agent;
  /**
   * File to be attached to this request
   */
  file?: File | RawFile
  /**
   * Additional headers to add to this request
   */
  headers?: Record<string, string>
  /**
   * Query string parameters to append to the called endpoint
   */
  query?: URLSearchParams
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
  timeToReset: number
  method: `${RequestMethod}`,
  url: string
  global: boolean
}

export interface RestEvents {
  rateLimited: [rateLimitData: RateLimitData]
}
