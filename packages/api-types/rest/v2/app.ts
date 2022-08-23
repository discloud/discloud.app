import { RESTApiBaseResult } from "./base";

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

export interface ApiAppBackup {
  id: string
  status: string
  url: string
}

export interface ApiAppLog {
  id: string
  terminal: ApiTerminal
}

export interface ApiTerminal {
  big: string
  small: string
}

export interface ApiAppCRUD {
  alreadyInProcess: string[]
  alreadyOffline: string[]
  restarted: string[]
}

export interface ApiAppStatus {
  id: string
  container: string
  cpu: string
  last_restart: string
  memory: string
  netIO: ApiNetIO
  ssd: string
}

export interface ApiNetIO {
  down: string
  up: string
}

export interface RESTGetApiAppAllResult extends RESTApiBaseResult {
  apps: ApiApp[]
}

export interface RESTGetApiAppAllBackupResult extends RESTApiBaseResult {
  backups: ApiAppBackup[]
}

export interface RESTGetApiAppAllLogResult extends RESTApiBaseResult {
  apps: ApiAppLog[]
}

export interface RESTGetApiAppAllStatusResult extends RESTApiBaseResult {
  apps: ApiAppStatus[]
}

export interface RESTGetApiAppResult extends RESTApiBaseResult {
  apps: ApiApp
}

export interface RESTGetApiAppBackupResult extends RESTApiBaseResult {
  backups: ApiAppBackup
}

export interface RESTGetApiAppLogResult extends RESTApiBaseResult {
  apps: ApiAppLog
}

export interface RESTGetApiAppStatusResult extends RESTApiBaseResult {
  apps: ApiAppStatus
}

export interface RESTApiAppCRUDResult extends RESTApiBaseResult {
  apps: ApiAppCRUD
}

export type RESTDeleteApiAppAllDeleteResult = RESTApiAppCRUDResult

export type RESTPutApiAppAllRestartResult = RESTApiAppCRUDResult

export type RESTPutApiAppAllStartResult = RESTApiAppCRUDResult

export type RESTPutApiAppAllStopResult = RESTApiAppCRUDResult

export type RESTDeleteApiAppDeleteResult = RESTApiBaseResult

export type RESTPutApiAppRestartResult = RESTApiBaseResult

export type RESTPutApiAppStartResult = RESTApiBaseResult

export type RESTPutApiAppStopResult = RESTApiBaseResult