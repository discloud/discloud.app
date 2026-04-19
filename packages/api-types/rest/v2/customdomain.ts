import { type RESTApiBaseResult } from "./base";

export interface RESTGetApiCustomdomainListResult extends RESTApiBaseResult {
  domains: unknown[]
}

export interface RESTGetApiCustomdomainResult extends RESTApiBaseResult {
  domain: unknown
}

export type RESTPostApiCustomdomainCreateResult = RESTGetApiCustomdomainResult

export type RESTPutApiCustomdomainEditResult = RESTApiBaseResult

export type RESTDeleteApiCustomdomainResult = RESTApiBaseResult

export type RESTGetApiCustomdomainVerifyResult = RESTApiBaseResult
