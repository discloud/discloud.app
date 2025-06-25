import type { ApiUploadApp } from "@discloudapp/api-types/v2";

export interface SocketEventUploadData {
  app?: ApiUploadApp
  logs?: string
  message: string | null
  progress: SocketProgressData
  status: "ok" | "error"
  statusCode: number
}

export interface SocketProgressData {
  /** `0 - 100` */
  bar: number
  log: string
}

export interface ProgressData {
  chunk: Buffer
  current: number
  offset: number
  pending: boolean
  total: number
}

export type OnProgressCallback = (data: ProgressData) => unknown | Promise<unknown>
