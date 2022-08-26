import { RawFile } from "@discloudapp/rest";
import { ModPermissions } from "../util/constants";

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