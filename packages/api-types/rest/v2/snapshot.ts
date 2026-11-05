import type { RESTApiBaseResult } from "./base";

export interface ApiSnapshot {
  size: number
  url: string
  version: string
  allVersions: ApiSnapshotVersion[]
}

export interface ApiSnapshotVersion {
  expiresAt: string
  size: number
  url: string
  version: string
}

export interface ApiSnapshotVersion {
  date: number
  size: number
  version: string
}

export interface RESTGetApiSnapshotsResult extends RESTApiBaseResult {
  backups: ApiSnapshot[]
  limit: number
  page: number
  total: number
}

export interface RESTGetApiSnapshotResult extends RESTApiBaseResult {
  versions: ApiSnapshotVersion[]
}

export interface RESTGetApiSnapshotVersionResult extends RESTApiBaseResult {
  download: ApiSnapshotVersion
}

export interface RESTDeleteApiSnapshotVersionResult extends RESTApiBaseResult {
  deleted: string
}

export interface RESTPostApiSnapshotResult extends RESTApiBaseResult {
  snapshot: ApiSnapshot
}
