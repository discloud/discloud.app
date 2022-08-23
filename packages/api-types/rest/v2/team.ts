import { RESTApiBaseResult } from "./base";

export interface RESTGetApiTeam extends RESTApiBaseResult {
  apps: ApiTeamApps[]
}

export interface ApiTeamApps {
  id: string
  perms: string[]
}