import { readFileSync } from "node:fs";
import { join } from "node:path";
import { env } from "node:process";
import { DiscloudAppOptions } from "../@types";

export const version: string = JSON.parse(readFileSync(join(__dirname, "package.json"), "utf8")).version;

/**
 * Library default options
 */
export const DefaultDiscloudAppOptions: DiscloudAppOptions = {
  /** The token to authenticate on Discloud API */
  token: env.DISCLOUD_TOKEN,
};
