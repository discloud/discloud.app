import { RESTApiBaseResult } from "./base";

export interface RESTPostApiUploadResult extends RESTApiBaseResult {
  statusCode: number
  app: ApiUploadApp
  logs?: string
}

export interface ApiUploadApp {
  id: string,
  type: string,
  name: string,
  avatarURL: string,
  ram: number,
  mainFile: string,
  lang: string,
  version: string,
  addedAtTimestamp: number,
  autoRestart: boolean
}