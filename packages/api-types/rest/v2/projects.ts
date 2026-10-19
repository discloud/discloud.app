import type { RESTApiBaseResult } from "./base";

export interface ApiProject {
  _id: string
  clusterName: string
  description: string
  name: string
  ownerID: string
  teamID: string | null
}

export interface RESTGetApiProjectsAllResult extends RESTApiBaseResult {
  data: ApiProject[]
}

export interface RESTGetApiProjectsResult extends RESTApiBaseResult {
  data: {
    apps: {
      _id: string
      nameTAG: string
    }[]
    project: {
      _id: string
      name: string
      memberRole: string
    }
    team: unknown | null
  }
}

export interface RESTPostApiProjectsResult extends RESTApiBaseResult {
  data: ApiProject
}

export type RESTDeleteApiProjectsResult = RESTApiBaseResult

export interface RESTPatchApiProjectsResult extends RESTApiBaseResult {
  data: {
    _id: string
    name: string
  }
}

export interface RESTPatchApiProjectsTeamResult extends RESTApiBaseResult {
  data: {
    _id: string
    teamID: string
  }
}

export interface RESTGetApiProjectsAppsResult extends RESTApiBaseResult {
  data: {
    _id: string
    nameTAG: string
    clusterName: string
  }[]
}

export interface RESTPutApiProjectsAppsResult extends RESTApiBaseResult {
  data: {
    _id: string
    projectID: string
    clusterName: string
  }
}

export type RESTDeleteApiProjectsAppResult = RESTApiBaseResult
