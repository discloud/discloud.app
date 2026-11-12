import { type ApiAppLog } from "./app";
import type { RESTApiBaseResult } from "./base";

export interface ApiDatabase {
  _id: string
  userID: string
  displayName: string
  projectID: string | null
  db: ApiDatabaseDb,
  clusterName: string
  totalRam: number
  hostname: string
  addedAtTimestamp: number
}

export interface ApiDatabaseDb {
  type: string
  version: string
  port: number
}

export interface ApiDatabasePreset {
  type: string
  version: number[]
  extensions: string[]
  defaultPort: number
  suggestedDisplayName: string
  suggestedDbName: string
  suggestedUser: string
  suggestedPassword: string
  vars: ApiDatabasePresetVars
}

export interface ApiDatabasePresetVars {
  required: string[]
  optional: string[]
  fromSuggestions: Record<string, string>
}

export interface ApiDatabaseBackup {
  backupId: number
  downloadUrl: string
}

export interface ApiDatabaseBackupItem {
  backupId: number
  createdAt: string
  size: number
}

export interface RESTGetApiDatabaseResult extends RESTApiBaseResult {
  database: ApiDatabase
}

export interface RESTGetApiDatabasesResult extends RESTApiBaseResult {
  data: ApiDatabase[]
}

export interface RESTPostApiDatabaseResult extends RESTApiBaseResult {
  id: string
}

export interface RESTPatchApiDatabaseResult extends RESTApiBaseResult {
  rebuilding: boolean
  data: {
    _id: string
    displayName: string
    hostname: string
    totalRam: number
  }
}

export interface RESTGetApiDatabaseBackupDownloadResult extends RESTApiBaseResult {
  data: {
    downloadUrl: string
    expiresAt: string
  }
}

export interface RESTGetApiDatabaseBackupLogsResult extends RESTApiBaseResult {
  app: ApiAppLog
}

export type RESTDeleteApiDatabaseBackupLogsResult = RESTApiBaseResult;

export interface RESTPostApiDatabaseBackupRestoreResult extends RESTApiBaseResult {
  id: string
}

export interface RESTGetApiDatabaseBackupsResult extends RESTApiBaseResult {
  data: {
    backups: ApiDatabaseBackupItem[]
    nextCursor: string | null
  }
}

export interface RESTPostApiDatabaseBackupResult extends RESTApiBaseResult {
  data: ApiDatabaseBackup
}

export type RESTDeleteApiDatabaseResult = RESTApiBaseResult

export type RESTPutApiDatabaseRestartResult = RESTApiBaseResult

export type RESTPutApiDatabaseStartResult = RESTApiBaseResult

export type RESTPutApiDatabaseStopResult = RESTApiBaseResult

export interface RESTGetApiDatabasePresetsResult extends RESTApiBaseResult {
  data: {
    databases: ApiDatabasePreset[]
  }
}

export interface RESTGetApiDatabaseRandomNamesResult extends RESTApiBaseResult {
  data: {
    suggestedDisplayName: string
    suggestedDbName: string
    suggestedUser: string
  }
}
