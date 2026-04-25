import type { RESTApiBaseResult } from "./base";

export interface RESTGetApiTeamResult extends RESTApiBaseResult {
  apps: ApiTeamApp[]
}

export interface ApiTeamApp {
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
   * The RAM quantity for your team's app
   */
  ram: number
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
  /** The app owner */
  owner: ApiTeamAppOwner
  /**
   * Your permissions to manage this application.
   */
  perms: string[]
  /**
   * Your team's app type
   */
  type: number
}

/** @deprecated use {@link ApiTeamApp} instead */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ApiTeamApps extends ApiTeamApp { }

export interface ApiTeamAppOwner {
  /** Owner name */
  name: string
  /** Owner avatar url */
  avatar: string
}
