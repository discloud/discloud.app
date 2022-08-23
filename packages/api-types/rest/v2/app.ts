import { RESTApiBaseResult } from "./base";

export interface RESTGetApiApp extends RESTApiBaseResult {
  apps: ApiApp
}

export interface RESTGetApiApps extends RESTApiBaseResult {
  apps: ApiApp[]
}

export interface ApiApp {
  id: string,
  online: boolean,
  ramKilled: boolean,
  ram: number,
  mainFile: string,
  lang: string,
  mods: string[],
  autoDeployGit: string,
  autoRestart: boolean
}