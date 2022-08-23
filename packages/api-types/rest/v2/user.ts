import { RESTApiBaseResult } from "./base";

export interface RESTGetApiUser extends RESTApiBaseResult {
  user: ApiUser
}

export interface ApiUser {
  userID: string
  totalRamMb: number
  ramUsedMb: number
  apps: string[]
  plan: string
}