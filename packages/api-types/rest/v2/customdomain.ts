import { type BaseApiApp } from "./app";
import { type RESTApiBaseResult } from "./base";

export interface ApiDomain {
  id: string
  dns_status: string
  date: number
  isLegacy: boolean
  app: ApiDomainApp
  instructions: ApiDomainInstruction[]
}

export interface ApiDomainApp extends BaseApiApp {
  name: string
  online: boolean
  type: number
}

export interface ApiDomainInstruction {
  type: string
  name: string
  content: string
}

export interface RESTGetApiCustomdomainListResult extends RESTApiBaseResult {
  domains: ApiDomain[]
}

export interface RESTGetApiCustomdomainResult extends RESTApiBaseResult {
  domain: ApiDomain
}

export type RESTPostApiCustomdomainCreateResult = RESTGetApiCustomdomainResult

export type RESTPutApiCustomdomainEditResult = RESTApiBaseResult

export type RESTDeleteApiCustomdomainResult = RESTApiBaseResult

export type RESTGetApiCustomdomainVerifyResult = RESTGetApiCustomdomainResult
