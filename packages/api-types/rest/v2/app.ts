import { RESTApiBaseResult, RESTApiStatusResponse } from "./base";

export interface BaseApiApp {
  /**
   * Your app id
   */
  id: string
}

export interface ApiApp extends BaseApiApp {
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
   * The RAM quantity for your application
   */
  ram: number
  /**
   * The main file path
   */
  mainFile: string
  /**
   * Your app's exit code on stopping
   */
  exitCode: number
  /**
   * Your application's programming language
   */
  lang: string
  /**
   * The IDs of your application's moderators
   */
  mods: string[]
  /**
   * Your app's avatar url
   */
  avatarURL: string
  /**
   * If your app has auto deploy on github enabled
   */
  autoDeployGit: string
  /**
   * If your app has auto-restart enabled
   */
  autoRestart: boolean
}

export interface ApiAppBackup extends BaseApiApp {
  /**
   * The backup url.
   * - You can access it `only once`.
   */
  url: string
}

export interface ApiAppBackupAll extends ApiAppBackup {
  /**
   * The backup status
   */
  status: string
}

export interface ApiAppLog extends BaseApiApp {
  /**
   * Here you can see your application `logs`
   */
  terminal: ApiTerminal
}

export interface ApiAppManager {
  /**
   * Which of your applications are currently `processing`
   */
  alreadyInProcess: string[]
  /**
   * Which of your applications are currently `offline`
   */
  alreadyOffline: string[]
  /**
   * Which of your applications are currently `online`
   */
  alreadyOnline: string[]
}

export interface ApiAppManagerRemovedAll extends Omit<ApiAppManager, "alreadyOnline"> {
  /**
   * Which of your applications have been `removed`
   */
  removealled: string[]
}

export interface ApiAppManagerRestartedAll extends Omit<ApiAppManager, "alreadyOnline"> {
  /**
   * Which of your applications have been `restarted`
   */
  restarted: string[]
}

export interface ApiAppManagerStartedAll extends Omit<ApiAppManager, "alreadyOffline"> {
  /**
   * Which of your applications have been `started`
   */
  started: string[]
}

export interface ApiAppManagerStopedAll extends Omit<ApiAppManager, "alreadyOnline"> {
  /**
   * Which of your applications have been `stoped`
   */
  stoped: string[]
}

export interface ApiStatusApp extends BaseApiApp {
  /**
   * Status of your application
   * - It can be `Online` or `Offline` for example
   */
  container: string
  /**
   * CPU usage as percentage
   */
  cpu: string
  /**
   * Relative time of the last restart
   */
  last_restart: string
  /**
   * RAM usage
   */
  memory: string
  /**
   * Internet usage
   */
  netIO: ApiNetIO
  /**
   * Storage space
   */
  ssd: string
  /**
   * Date of your application has started
   */
  startedAt: string
}

export interface ApiAppTeam {
  /**
   * Moderator ID
   */
  modID: string
  /**
   * Moderator permissions
   */
  perms: string[]
}

export interface ApiNetIO {
  /**
   * Amount of downloaded to container
   */
  down: string
  /**
   * Amount of uploaded from container
   */
  up: string
}

export interface ApiTerminal {
  /**
   * Bigger log of your application
   */
  big: string
  /**
   * Smaller log of your application
   */
  small: string
}

export interface ApiConsoleApp {
  id: string
  shell: ApiConsoleAppShell
}

export interface ApiConsoleAppShell {
  online: boolean
  cmd: string
}

export interface RESTGetApiAppAllResult extends RESTApiBaseResult {
  /**
   * All of your applications
   */
  apps: ApiApp[]
}

export interface RESTGetApiAppAllBackupResult extends RESTApiBaseResult {
  /**
   * Backup of all of your applications
   */
  backups: ApiAppBackupAll[]
}

export interface RESTGetApiAppAllLogResult extends RESTApiBaseResult {
  /**
   * Logs of all of your applications
   */
  apps: ApiAppLog[]
}

export interface RESTGetApiAppAllStatusResult extends RESTApiBaseResult {
  /**
   * Status of all of your applications
   */
  apps: ApiStatusApp[]
}

export interface RESTGetApiAppResult extends RESTApiBaseResult {
  /**
   * Your application
   */
  apps: ApiApp
}

export interface RESTGetApiAppBackupResult extends RESTApiBaseResult {
  /**
   * Backup of your application
   */
  backups: ApiAppBackup
}

export interface RESTGetApiAppLogResult extends RESTApiBaseResult {
  /**
   * Log of your application
   */
  apps: ApiAppLog
}

export interface RESTGetApiAppStatusResult extends RESTApiBaseResult {
  /**
   * Status of your application
   */
  apps: ApiStatusApp
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

export interface RESTPutApiAppAptResult extends RESTApiBaseResult {
  /**
   * Status code from API
   */
  statusCode: number
}

export interface RESTDeleteApiAppAptResult extends RESTApiBaseResult {
  /**
   * Status code from API
   */
  statusCode: number
}

export interface RESTPutApiAppCommitResult extends RESTApiBaseResult {
  /**
   * Status code from API
   */
  statusCode: number
  /**
   * API logs in case your app fails on launch
   */
  logs?: string
}

export interface RESTPutApiAppConsoleResult extends RESTApiBaseResult {
  apps: ApiConsoleApp
}

export interface RESTPutApiAppRamResult extends RESTApiBaseResult {
  /**
   * Status code from API
   */
  statusCode: number
}

export interface RESTGetApiAppTeamResult {
  /**
   * API status response
   */
  status: RESTApiStatusResponse
  /**
   * API message response
   */
  message?: string
  /**
   * App of your team
   */
  team: ApiAppTeam[]
}

export type RESTDeleteApiAppTeamResult = RESTApiBaseResult

export interface ApiAppTeamManager extends ApiAppTeam {
  /**
   * Your team application id
   */
  appID: string
}

export interface RESTPostApiAppTeamResult extends RESTApiBaseResult {
  app: ApiAppTeamManager
}

export interface RESTPutApiAppTeamResult extends RESTApiBaseResult {
  app: ApiAppTeamManager
}