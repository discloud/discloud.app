import { type RESTApiBaseResult } from "./base";

export interface ApiSubdomain {
  _id: string
  userID: string
  status: number
  date: number
}

export interface RESTGetApiSubdomainListResult extends RESTApiBaseResult {
  subdomains: ApiSubdomain[]
}

export interface RESTGetApiSubdomainResult extends RESTApiBaseResult {
  subdomains: ApiSubdomain
}

export type RESTPostApiSubdomainResult = RESTGetApiSubdomainResult;

export type RESTDeleteApiSubdomainResult = RESTApiBaseResult
