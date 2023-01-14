export interface RESTApiBaseResult {
  /**
   * The status of API response
   */
  status: RESTApiStatusResponse
  /**
   * Message of the API
   * - It is useful to use as logs
   */
  message: string
}

/**
 * - `ok`
 * - `error`
 */
export type RESTApiStatusResponse =
  | "ok"
  | "error"