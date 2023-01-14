import { FileResolvable } from "@discloudapp/util";

export interface Constructor<T = any> {
  new(...args: any[]): T
}

export interface DiscloudAppOptions {
  token?: string
}

export type CreateAppOptions = UploadAppOptions

export type UpdateAppOptions = UploadAppOptions

export interface UploadAppOptions {
  file: FileResolvable
}

export type LocaleString =
  | "en-US"
  | "pt-BR"

export type AptString =
  | "canvas"
  | "puppeteer"
  | "java"
  | "ffmpeg"
  | "libgl"
  | "openssl"
  | "tools"