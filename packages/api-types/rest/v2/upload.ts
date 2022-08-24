import { RESTApiBaseResult } from "./base";

export interface RESTPostApiUploadResult extends RESTApiBaseResult {
  statusCode: string
  app: ApiAppUpload
}

export interface ApiAppUpload {
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