import { env } from "node:process";
import { DiscloudAppOptions } from "../@types";

export const DefaultDiscloudAppOptions: DiscloudAppOptions = {
  token: env.DISCLOUD_TOKEN,
};

export const ModPermissions = {
  backup_app: 1,
  commit_app: 2,
  edit_ram: 4,
  logs_app: 8,
  restart_app: 16,
  start_app: 32,
  status_app: 64,
  stop_app: 128,
};

export const fileNamePattern = /.*\/+([^?#]+)(?:[?#].*)?/;