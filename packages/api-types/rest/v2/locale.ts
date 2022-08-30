import { RESTApiStatusResponse } from "./base";

export interface RESTPutApiLocaleResult {
  status: RESTApiStatusResponse
  locale: string
  message?: string
  localeList?: string[]
}