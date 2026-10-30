export type * from "./app";
export type * from "./base";
export type * from "./customdomain";
export type * from "./database";
export type * from "./env";
export type * from "./locale";
export type * from "./projects";
export type * from "./snapshot";
export type * from "./subdomain";
export type * from "./team";
export type * from "./teams";
export type * from "./upload";
export type * from "./user";

export * from "./routes";

/**
 * API version
 * 
 * @defaultValue "2"
 */
export const APIVersion = "2";

export const RouteBases = {
  api: `https://api.discloud.app/v${APIVersion}`,
} as const;