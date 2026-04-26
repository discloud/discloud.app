import type { RestEvents, RESTOptions } from "@discloudapp/rest";
import type { FileResolvable } from "@discloudapp/util";

export type Instanciable<T extends NewableFunction & (abstract new (...args: any) => any)>
  = new (...args: any) => InstanceType<T>;

export interface DiscloudAppOptions {
  rest?: Partial<RESTOptions>
}

export type CreateAppOptions = UploadAppOptions

export type UpdateAppOptions = UploadAppOptions

export interface UploadAppOptions {
  file: FileResolvable
}

export type LocaleString =
  | "en-US"
  | "pt-BR"

export type ClientEvents = RestEvents
