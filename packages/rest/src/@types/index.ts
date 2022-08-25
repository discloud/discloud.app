import { BinaryLike } from "crypto";
import { BodyInit, request } from "undici";
import { RequestMethod } from "../@enum";

export type RouteLike = `/${string}`

export type RequestOptions = Exclude<Parameters<typeof request>[1], undefined>

export interface RESTOptions {
  /**
   * The base api path, without version
   * @defaultValue `'https://api.discloud.app'`
   */
  api: string
  /**
   * The version of the API to use
   *
   * @defaultValue `'2'`
   */
  version: string
}

/**
 * Possible headers for an API call
 */
export interface RequestHeaders {
  "api-token": string
  contentType?: string
}

export interface RawFile {
  /**
   * The name of the file
   */
  name: string
  /**
   * An explicit key to use for key of the formdata field for this file.
   * When not provided, the index of the file in the files array is used in the form `files[${index}]`.
   * If you wish to alter the placeholder snowflake, you must provide this property in the same form (`files[${placeholder}]`)
   */
  key?: string
  /**
   * The actual data for the file
   */
  data: Blob | BinaryLike | Buffer
  /**
   * Content-Type of the file
   */
  contentType?: string
}

/**
 * Represents possible data to be given to an endpoint
 */
export interface RequestData {
	/**
	 * Whether to append JSON data to form data instead of `payload_json` when sending files
	 */
	appendToFormData?: boolean;
  /**
   * The body to send to this request.
   */
  body?: BodyInit | unknown
  /**
   * Files to be attached to this request
   */
  file?: RawFile
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