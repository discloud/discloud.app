import { APIVersion } from "@discloudapp/api-types/v2";
import { existsSync, readFileSync } from "fs";
import { arch, platform, release, type } from "os";
import { join } from "path";
import { Agent } from "undici";
import type { RESTOptions } from "../@types";

export const os_name = type();
export const os_release = release().split?.(".").slice(0, 2).join(".") ?? release();
export const os_platform = platform();
export const cpu_arch = arch();

const DiscloudAppPackageLocation = join(__dirname, "..", "..", "..", "..", "discloud.app", "package.json");
let discloudAppVersion = "";
if (existsSync(DiscloudAppPackageLocation))
  discloudAppVersion = `/${JSON.parse(readFileSync(DiscloudAppPackageLocation, "utf8")).version}`;

export const DefaultUserAgent = `DiscloudApp${discloudAppVersion} (${os_name} ${os_release}; ${os_platform}; ${cpu_arch})`;

export const DefaultRestOptions: Required<RESTOptions> = {
  api: "https://api.discloud.app",
  dispatcher: new Agent(),
  globalRequestsPerMinute: 60,
  headers: {
    "User-Agent": DefaultUserAgent,
  },
  version: APIVersion,
} as const;
