import { DefaultRestOptions } from "@discloudapp/rest";
import UserAgent from "@discloudapp/rest/out/UserAgent";
import { importJSON } from "@discloudapp/util";
import { join } from "path";
import type { DiscloudAppOptions } from "../@types";

const PackageLocation = join(__dirname, "../../package.json");

export const version: string = importJSON<{ version: string }>(PackageLocation).version;

/**
 * Library default options
 */
export const DefaultDiscloudAppOptions: DiscloudAppOptions & { token?: string } = {
  rest: Object.assign({}, DefaultRestOptions, { userAgent: new UserAgent("DiscloudApp", version) }),
  /** The token to authenticate on Discloud API */
  token: process.env.DISCLOUD_TOKEN,
};
