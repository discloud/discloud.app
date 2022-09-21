import { RawFile } from "@discloudapp/rest";
import { ModPermissions } from "../util/constants";

export interface Constructor<T = any> {
  new(...args: any[]): T
}

export interface DiscloudAppOptions {
  token?: string
}

export interface CreateAppOptions {
  file: string | RawFile
}

export interface UpdateAppOptions {
  file: string | RawFile
}

export type ModPermissionsFlags = keyof typeof ModPermissions

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