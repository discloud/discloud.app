import { RESTApiBaseResult, RESTApiStatusResponse } from "./base";

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
  url: string
}

export interface ApiAppBackupAll extends ApiAppBackup {
  status: string
}

export interface ApiAppLog extends BaseApiApp {
  terminal: ApiTerminal
}

export interface ApiAppManager {
  alreadyInProcess: string[]
  alreadyOffline: string[]
  alreadyOnline: string[]
}

export interface ApiAppManagerRemovedAll extends Omit<ApiAppManager, "alreadyOnline"> {
  removealled: string[]
}

export interface ApiAppManagerRestartedAll extends Omit<ApiAppManager, "alreadyOnline"> {
  restarted: string[]
}

export interface ApiAppManagerStartedAll extends Omit<ApiAppManager, "alreadyOffline"> {
  started: string[]
}

export interface ApiAppManagerStopedAll extends Omit<ApiAppManager, "alreadyOnline"> {
  stoped: string[]
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
  url: string
}

export interface RESTGetApiAppAllResult extends RESTApiBaseResult {
  apps: ApiApp[]
}

export interface RESTGetApiAppAllBackupResult extends RESTApiBaseResult {
  backups: ApiAppBackupAll[]
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
  apps: Partial<ApiAppManager>
}

export interface RESTDeleteApiAppAllDeleteResult extends RESTApiAppManagerResult {
  apps: ApiAppManagerRemovedAll
}

export interface RESTPutApiAppAllRestartResult extends RESTApiAppManagerResult {
  apps: ApiAppManagerRestartedAll
}

export interface RESTPutApiAppAllStartResult extends RESTApiAppManagerResult {
  apps: ApiAppManagerStartedAll
}

export interface RESTPutApiAppAllStopResult extends RESTApiAppManagerResult {
  apps: ApiAppManagerStopedAll
}

export type RESTDeleteApiAppDeleteResult = RESTApiBaseResult

export type RESTPutApiAppRestartResult = RESTApiBaseResult

export type RESTPutApiAppStartResult = RESTApiBaseResult

export type RESTPutApiAppStopResult = RESTApiBaseResult

export interface RESTPutApiAppCommitResult extends RESTApiBaseResult {
  statusCode: number
  logs?: string
}

export interface RESTPutApiAppRamResult extends RESTApiBaseResult {
  statusCode: number
}

export interface RESTGetApiAppTeamResult {
  status: RESTApiStatusResponse
  message?: string
  team: ApiAppTeam[]
}

export type RESTDeleteApiAppTeamResult = RESTApiBaseResult

export interface ApiAppTeamManager extends ApiAppTeam {
  appID: string
}

export interface RESTPostApiAppTeamResult extends RESTApiBaseResult {
  app: ApiAppTeamManager
}

export interface RESTPutApiAppTeamResult extends RESTApiBaseResult {
  app: ApiAppTeamManager
}