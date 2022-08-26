import { RESTApiBaseResult } from "./base";

export interface BaseApiApp {
  id: string
}

export interface ApiApp extends BaseApiApp {
  online: boolean
  ramKilled: boolean
  ram: number
  mainFile: string
  lang: string
  mods: string[]
  autoDeployGit: string
  autoRestart: boolean
}

export interface ApiAppBackup extends BaseApiApp {
  status: string
  url: string
}

export interface ApiAppLog extends BaseApiApp {
  terminal: ApiTerminal
}

export interface ApiAppManager {
  alreadyInProcess: string[]
  alreadyOffline: string[]
}

export interface ApiAppStatus extends BaseApiApp {
  container: string
  cpu: string
  last_restart: string
  memory: string
  netIO: ApiNetIO
  ssd: string
  startedAt: string
}

export interface ApiAppTeam {
  modID: string
  perms: string[]
}

export interface ApiNetIO {
  down: string
  up: string
}

export interface ApiTerminal {
  big: string
  small: string
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

export interface RESTApiAppManagerResult extends RESTApiBaseResult {
  apps: ApiAppManager
}

export interface RESTDeleteApiAppAllDeleteResult extends RESTApiAppManagerResult {
  removealled: string[]
}

export interface RESTPutApiAppAllRestartResult extends RESTApiAppManagerResult {
  restarted: string[]
}

export interface RESTPutApiAppAllStartResult extends RESTApiAppManagerResult {
  started: string[]
}

export interface RESTPutApiAppAllStopResult extends RESTApiAppManagerResult {
  stoped: string[]
}

export type RESTDeleteApiAppDeleteResult = RESTApiBaseResult

export type RESTPutApiAppRestartResult = RESTApiBaseResult

export type RESTPutApiAppStartResult = RESTApiBaseResult

export type RESTPutApiAppStopResult = RESTApiBaseResult

export interface RESTPutApiAppCommitResult extends RESTApiBaseResult {
  statusCode: string
}

export interface RESTPutApiAppRamResult extends RESTApiBaseResult {
  statusCode: number
}

export interface RESTGetApiAppTeamResult {
  status: string
  team: ApiAppTeam[]
}