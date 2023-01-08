import { RawFile } from "@discloudapp/rest";
import { PathLike } from "node:fs";
import { Readable } from "node:stream";
import { File } from "undici";
import { ModPermissions } from "../util";

export interface Constructor<T = any> {
  new(...args: any[]): T
}

export interface DiscloudAppOptions {
  token?: string
}

export interface CreateAppOptions {
  file: File | PathLike | RawFile | Readable
}

export interface UpdateAppOptions {
  file: File | PathLike | RawFile | Readable
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