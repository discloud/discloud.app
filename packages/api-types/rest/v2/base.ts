export interface RESTApiBaseResult {
  /**
   * The status of API response
   */
  status: "ok" | "error"
  /**
   * Message of the API
   * - It is useful to use as logs
   */
  message: string
  /**
   * Responses may contain logs
   */
  logs?: string
}
