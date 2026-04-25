import { type RESTApiBaseResult } from "./base";

export interface ApiSubdomain {
  id: string
  userID: string
  /** `1=available` `2=using` */
  status: number
  date: number
}

export interface RESTGetApiSubdomainListResult extends RESTApiBaseResult {
  subdomains: ApiSubdomain[]
}

export interface RESTGetApiSubdomainResult extends RESTApiBaseResult {
  subdomain: ApiSubdomain
}

export type RESTPostApiSubdomainResult = RESTGetApiSubdomainResult;

export type RESTDeleteApiSubdomainResult = RESTApiBaseResult
