import { RESTApiBaseResult } from "./base";

export interface RESTGetApiTeamResult extends RESTApiBaseResult {
  apps: ApiTeamApps[]
}

export interface ApiTeamApps {
  id: string
  name: string
  online: boolean
  ramKilled: boolean
  exitCode: number
  lang: string
  perms: string[]
}