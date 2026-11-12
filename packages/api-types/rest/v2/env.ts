import type { RESTApiBaseResult } from "./base";

interface BaseRESTGetApiEnvResult {
  data: {
    vars: Record<string, string>
  }
}

interface BaseRESTDeleteApiEnvResult {
  data: {
    removed: number
  }
}

export interface RESTGetApiEnvAccountResult extends RESTApiBaseResult, BaseRESTGetApiEnvResult { }

export interface RESTPutApiEnvAccountResult extends RESTApiBaseResult, BaseRESTGetApiEnvResult { }

export interface RESTDeleteApiEnvAccountResult extends RESTApiBaseResult, BaseRESTDeleteApiEnvResult { }

export interface RESTGetApiEnvProjectResult extends RESTApiBaseResult, BaseRESTGetApiEnvResult { }

export interface RESTPutApiEnvProjectResult extends RESTApiBaseResult, BaseRESTGetApiEnvResult { }

export interface RESTDeleteApiEnvProjectResult extends RESTApiBaseResult, BaseRESTDeleteApiEnvResult { }

export interface RESTGetApiEnvAppResult extends RESTApiBaseResult, BaseRESTGetApiEnvResult { }

export interface RESTPutApiEnvAppResult extends RESTApiBaseResult, BaseRESTGetApiEnvResult { }

export interface RESTDeleteApiEnvAppResult extends RESTApiBaseResult, BaseRESTDeleteApiEnvResult { }
