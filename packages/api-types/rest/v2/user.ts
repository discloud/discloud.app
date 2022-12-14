import { RESTApiBaseResult } from "./base";

export interface RESTGetApiUserResult extends RESTApiBaseResult {
  user: ApiUser
}

export interface ApiUser {
  apps: string[]
  customdomains: string[]
  locale: string
  plan: string
  ramUsedMb: number
  subdomains: string[]
  totalRamMb: number
  userID: string
  lastDataLeft?: LastDataLeft,
  planDataEnd?: string
}

export interface ApiUserAppStatus {
  id: string
  name: string
  online: boolean
  ramKilled: boolean
  exitCode: number
}

export interface LastDataLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}