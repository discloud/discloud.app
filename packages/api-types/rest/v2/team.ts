import { RESTApiBaseResult } from "./base";

export interface RESTGetApiTeamResult extends RESTApiBaseResult {
  apps: ApiTeamApps[]
}

export interface ApiTeamApps {
  id: string
  perms: string[]
}