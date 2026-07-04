import { type BaseApiApp } from "./app";
import { type RESTApiBaseResult } from "./base";

export type ApiSnapshotApp = BaseApiApp

export interface ApiSnapshotVersion {
  version: string
  size: number | string
  date: number | string
}

export interface ApiSnapshotDownload {
  url: string
  expiresAt: string
  version: string
  size: number
}

export interface ApiSnapshotCreated {
  version: string
  size: string
  url: string
  allVersions: ApiSnapshotVersion[]
}

export interface ApiSnapshotListItem extends ApiSnapshotVersion {
  appID: string
}

export interface RESTGetApiSnapshotListResult extends RESTApiBaseResult {
  page: number
  limit: number
  total: number
  backups: ApiSnapshotListItem[]
}

export interface RESTGetApiSnapshotResult extends RESTApiBaseResult {
  app: ApiSnapshotApp
  versions: ApiSnapshotVersion[]
}

export interface RESTGetApiSnapshotVersionResult extends RESTApiBaseResult {
  app: ApiSnapshotApp
  download: ApiSnapshotDownload
}

export interface RESTPostApiSnapshotResult extends RESTApiBaseResult {
  app: ApiSnapshotApp
  snapshot: ApiSnapshotCreated
}