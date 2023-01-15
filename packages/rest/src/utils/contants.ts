import { APIVersion } from "@discloudapp/api-types/v2";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { Agent } from "undici";
import { RESTOptions } from "../@types";

export const DefaultRestOptions: Required<RESTOptions> = {
  agent: new Agent(),
  api: "https://api.discloud.app",
  globalRequestsPerMinute: 60,
  headers: {},
  version: APIVersion,
} as const;

const DiscloudAppPackageLocation = join(__dirname, "..", "..", "..", "..", "discloud.app", "package.json");

let discloudAppVersion = "";
if (existsSync(DiscloudAppPackageLocation))
  discloudAppVersion = ` v${JSON.parse(readFileSync(DiscloudAppPackageLocation, "utf8")).version}`;

export const DefaultUserAgent = `DiscloudApp${discloudAppVersion}`;
