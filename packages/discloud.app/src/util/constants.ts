import { env } from "node:process";
import { DiscloudAppOptions } from "../@types";

export const DefaultDiscloudAppOptions: DiscloudAppOptions = {
  token: env.DISCLOUD_TOKEN,
};
