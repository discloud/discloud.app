import { APIVersion } from "@discloudapp/api-types/v2";
import { join } from "path";
import type { RESTOptions } from "../@types";
import UserAgent from "../UserAgent";

export const PackageLocation = join(__dirname, "../../package.json");

export const DefaultRestOptions: Required<RESTOptions> = {
  api: "https://api.discloud.app",
  globalRequestsPerMinute: 60,
  headers: {},
  version: APIVersion,
  userAgent: new UserAgent("DiscloudApp"),
} as const;
