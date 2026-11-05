import type { RESTApiBaseResult } from "./base";

export interface ApiTeamMember {
  userID: string
  role: string
  username: string
}

export interface RESTGetApiTeamsAllResult extends RESTApiBaseResult {
  data: {
    _id: string
    name: string
    isOwner: boolean
  }[]
}

export interface RESTPostApiTeamsResult extends RESTApiBaseResult {
  data: {
    _id: string
    ownerID: string
    name: string
  }
}

export interface RESTGetApiTeamsAppsResult extends RESTApiBaseResult {
  data: {
    _id: string
    nameTAG: string
    teamID: string
  }[]
}

export interface RESTGetApiTeamsRolesPermissionsResult extends RESTApiBaseResult {
  data: {
    role: string
    permissions: string[]
  }
}

export interface RESTGetApiTeamsResult extends RESTApiBaseResult {
  data: {
    team: {
      _id: string
      name: string
    }
    members: {
      userID: string
      role: string
    }[]
    projects: {
      _id: string
      name: string
    }[]
  }
}

export type RESTDeleteApiTeamsResult = RESTApiBaseResult

export interface RESTPatchApiTeamsResult extends RESTApiBaseResult {
  data: {
    _id: string
    name: string
  }
}

export interface RESTGetApiTeamsMembersResult extends RESTApiBaseResult {
  data: ApiTeamMember[]
}

export interface RESTPostApiTeamsMembersResult extends RESTApiBaseResult {
  data: ApiTeamMember
}

export type RESTDeleteApiTeamsMembersResult = RESTApiBaseResult

export interface RESTPatchApiTeamsMembersResult extends RESTApiBaseResult {
  data: {
    userID: string,
    role: string
  }
}

export type RESTPostApiTeamsLeaveResult = RESTApiBaseResult
