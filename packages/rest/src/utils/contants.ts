import { APIVersion } from "@discloudapp/api-types/v2";
import { RESTOptions } from "../@types";

export const DefaultRestOptions: Required<RESTOptions> = {
  api: "https://api.discloud.app",
  globalRequestsPerMinute: 60,
  version: APIVersion,
};