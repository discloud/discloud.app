import { RestEvents, RESTOptions } from "@discloudapp/rest";
import { FileResolvable } from "@discloudapp/util";
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
  avatarURL: z.coerce.string().url().regex(/^(\S+\.(?:gif|jpe?g|png))(?:\?\S*)?$/),
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

export interface ClientEvents extends RestEvents { }
