import { RestEvents, RESTOptions } from "@discloudapp/rest/dist";
import { FileResolvable } from "@discloudapp/util";

export type Constructor<T> = new (...args: any[]) => T;

export type If<T extends boolean, A, B = undefined> = T extends true ? A : T extends false ? B : A | B;

export interface DiscloudAppOptions {
  rest?: RESTOptions
}

export type CreateAppOptions = UploadAppOptions

export type UpdateAppOptions = UploadAppOptions

export interface UploadAppOptions {
  file: FileResolvable
}

export type LocaleString =
  | "en-US"
  | "pt-BR"

export interface ClientEvents extends RestEvents { }
