import { env } from "node:process";
import { DiscloudAppOptions } from "../@types";

/**
 * Library default options
 */
export const DefaultDiscloudAppOptions: DiscloudAppOptions = {
  /** The token to authenticate on Discloud API */
  token: env.DISCLOUD_TOKEN,
};
