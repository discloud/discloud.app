import type { RESTApiBaseResult } from "./base";

export interface RESTGetApiTeamResult extends RESTApiBaseResult {
  apps: ApiTeamApps[]
}

export interface ApiTeamApps {
  /**
   * Your team application id
   */
  id: string
  /**
   * Your team application name
   */
  name: string
  /**
   * If your team application is online
   */
  online: boolean
  /**
   * If your team's app stopped due to low RAM
   */
  ramKilled: boolean
  /**
   * Your team's app exit code on stop
   */
  exitCode: number
  /**
   * Your team's app programming language
   */
  lang: string
  /**
   * Your permissions to manage this application.
   */
  perms: string[]
  /**
   * Your team's app type
   */
  type: number
}