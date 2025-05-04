import { type RESTApiBaseResult } from "./base";

export interface RESTPutApiLocaleResult extends Omit<RESTApiBaseResult, "message"> {
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