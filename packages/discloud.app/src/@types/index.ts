import { FileResolvable } from "@discloudapp/util";

export interface Constructor<T = any> {
  new(...args: any[]): T
}

export interface DiscloudAppOptions {
  token?: string
}

export interface CreateAppOptions {
  file: FileResolvable
}

export interface UpdateAppOptions {
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