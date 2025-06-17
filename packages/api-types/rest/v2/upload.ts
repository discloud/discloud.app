import type { RESTApiBaseResult } from "./base";

export type RESTPostApiUploadResult = RESTPostApiUploadOkResult | RESTPostApiUploadErrorResult

export interface RESTPostApiUploadOkResult extends RESTApiBaseResult {
  status: "ok"
  /**
   * Status code from API
   */
  statusCode: number
  /**
   * Your uploaded app
   */
  app: ApiUploadApp
  /**
   * API logs in case your app fails on launch
   */
  logs?: string
}

export interface RESTPostApiUploadErrorResult extends RESTApiBaseResult {
  status: "error"
  /**
   * Status code from API
   */
  statusCode: number
  /**
   * API logs in case your app fails on launch
   */
  logs?: string
}

export interface ApiUploadApp {
  /**
   * Your app id
   */
  id: string,
  /**
   * Your app's type
   */
  type: number,
  /**
   * Your app's name
   */
  name: string,
  /**
   * Your app's avatar url
   */
  avatarURL: string,
  /**
   * RAM quantity for your app
   */
  ram: number,
  /**
   * The main file path of your app
   */
  mainFile: string,
  /**
   * The programming language of your app
   */
  lang: string,
  /**
   * The version of the package
   */
  version: string,
  /**
   * The timestamp of the upload of your application
   */
  addedAtTimestamp: number,
  /**
   * If your application has auto-restart enabled
   */
  autoRestart: boolean
}