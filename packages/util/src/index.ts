import "source-map-support/register";
import "./@prototypes";

export * from "./BitField";
export * from "./config";
export * from "./errors";
export * from "./FileResolver";
export * from "./FlexibleBuffer";
export * from "./glob";
/** @deprecated */
export * from "./JSON";
export * from "./ModPermissionsBF";
/** @deprecated */
export * from "./utils";

export const version: string = "__PACKAGE_VERSION__";
