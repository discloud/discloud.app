import type { RESTApiBaseResult } from "./base";

export interface RESTGetApiUserResult extends RESTApiBaseResult {
  /**
   * The user
   */
  user: ApiUser
}

export interface ApiUser {
  /**
   * Your applications ID
   */
  apps: string[]
  /**
   * Your custom domains on Discloud
   */
  customdomains: string[]
  /**
   * Your locale
   */
  locale: string
  /**
   * Your plan
   */
  plan: string
  /**
   * Quantity of RAM was used for your applications
   */
  ramUsedMb: number
  /**
   * Your subdomains on Discloud
   */
  subdomains: string[]
  /**
   * Your total RAM quantity
   */
  totalRamMb: number
  /**
   * Your id
   */
  userID: string
  /**
   * When will your plan end
   */
  lastDataLeft?: LastDataLeft,
  /**
   * Date of when will your plan end
   * | "Subscription"
   */
  planDataEnd?: "Subscription" | string
}

export interface ApiUserAppStatus {
  /**
   * Your app id
   */
  id: string
  /**
   * Your application's name
   */
  name: string
  /**
   * If your application is online
   */
  online: boolean
  /**
   * If your application was stopped due to lack of RAM
   */
  ramKilled: boolean
  /**
   * Your app's exit code on stopping
   */
  exitCode: number
}

export interface LastDataLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}