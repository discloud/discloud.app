import "source-map-support/register";

export * from "./@enum";
export * from "./@types";
export * from "./errors";
export * from "./REST";
export * from "./utils";

export const version: string = "[VI]{{inject}}[/VI]";
