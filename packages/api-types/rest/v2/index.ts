export * from "./app";
export * from "./base";
export * from "./locale";
export * from "./routes";
export * from "./team";
export * from "./upload";
export * from "./user";

/**
 * API version
 * 
 * @defaultValue "2"
 */
export const APIVersion = "2";

export const RouteBases = {
  api: `https://api.discloud.app/v${APIVersion}`,
} as const;