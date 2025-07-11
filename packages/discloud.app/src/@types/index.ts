import type { RestEvents, RESTOptions } from "@discloudapp/rest";
import type { FileResolvable } from "@discloudapp/util";
import z from "zod";

export type Constructable<T extends new (...args: any) => InstanceType<T> = any> = new (...args: any) => InstanceType<T>;

export interface Constructor<T> {
  new(...args: any): T
}

export type If<T extends boolean, A, B = undefined> = T extends true ? A : T extends false ? B : A | B;

export interface DiscloudAppOptions {
  rest?: Partial<RESTOptions>
}

export const ProfileOptions = z.object({
  avatarURL: z.url().regex(/^((?:https?):\/\/\S+\.(?:gif|jpe?g|png|webp))(?:[?#]\S*)?$/),
  name: z.string().max(30),
}).partial();

export type ProfileOptions = z.infer<typeof ProfileOptions>

export type CreateAppOptions = UploadAppOptions

export type UpdateAppOptions = UploadAppOptions

export interface UploadAppOptions {
  file: FileResolvable
}

export type LocaleString =
  | "en-US"
  | "pt-BR"

export type ClientEvents = RestEvents
