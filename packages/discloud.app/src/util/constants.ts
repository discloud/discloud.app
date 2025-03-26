import { DefaultRestOptions, UserAgent } from "@discloudapp/rest";
import { version } from "..";
import type { DiscloudAppOptions } from "../@types";

/**
 * Library default options
 */
export const DefaultDiscloudAppOptions: DiscloudAppOptions & { token?: string } = {
  rest: Object.assign({}, DefaultRestOptions, { userAgent: new UserAgent("DiscloudApp", version) }),
  /** The token to authenticate on Discloud API */
  token: process.env.DISCLOUD_TOKEN,
};
