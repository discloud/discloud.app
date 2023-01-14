import { RESTApiStatusResponse } from "./base";

export interface RESTPutApiLocaleResult {
  /**
   * API status response
   */
  status: RESTApiStatusResponse
  /**
   * Your locale
   */
  locale: string
  /**
   * API message response
   */
  message?: string
  /**
   * List of locales in case you choose a wrong locale
   */
  localeList?: string[]
}