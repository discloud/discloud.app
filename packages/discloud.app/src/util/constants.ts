import { DefaultRestOptions } from "@discloudapp/rest";
import { readFileSync } from "fs";
import { join } from "path";
import { env } from "process";
import type { DiscloudAppOptions } from "../@types";

export const version: string = JSON.parse(readFileSync(join(__dirname, "..", "..", "package.json"), "utf8")).version;

/**
 * Library default options
 */
export const DefaultDiscloudAppOptions: DiscloudAppOptions & { token?: string } = {
  rest: DefaultRestOptions,
  /** The token to authenticate on Discloud API */
  token: env.DISCLOUD_TOKEN,
};
