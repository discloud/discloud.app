import { APIVersion } from "@discloudapp/api-types/v2";
import { version } from "..";
import type { RESTOptions } from "../@types";
import { UserAgent } from "../UserAgent";

export const DefaultRestOptions: Required<RESTOptions> = {
  api: "https://api.discloud.app",
  globalRequestsPerMinute: 60,
  headers: {},
  version: APIVersion,
  userAgent: new UserAgent("DiscloudApp", version),
} as const;
