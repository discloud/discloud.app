import DiscloudApp from "./discloudApp/DiscloudApp";
import AppAptManager from "./managers/AppAptManager";
import AppManager from "./managers/AppManager";
import AppTeamManager from "./managers/AppTeamManager";
import BaseManager from "./managers/BaseManager";
import CachedManager from "./managers/CachedManager";
import DataManager from "./managers/DataManager";
import TeamManager from "./managers/TeamManager";
import App from "./structures/App";
import AppBackup from "./structures/AppBackup";
import AppStatus from "./structures/AppStatus";
import AppUploaded from "./structures/AppUploaded";
import Base from "./structures/Base";
import BaseApp from "./structures/BaseApp";
import Team from "./structures/Team";
import User from "./structures/User";

export * from "@discloudapp/api-types/v2";
export * from "@discloudapp/rest";
export * from "@discloudapp/util";
export * from "./@types";
export * from "./util";
export {
  App,
  AppAptManager,
  AppBackup,
  AppManager,
  AppStatus,
  AppTeamManager,
  AppUploaded,
  Base,
  BaseApp,
  BaseManager,
  CachedManager,
  DataManager,
  DiscloudApp,
  Team,
  TeamManager,
  User,
};

/**
 * This is an instance of {@link DiscloudApp}
 * 
 * Use this instead of instantiating the {@link DiscloudApp} class to use the library.
 * 
 * @example
 * 
 * ```js
 * // index.js
 * // Get instanced discloud
 * const { discloud } = require("discloud.app");
 * 
 * // Set token
 * discloud.login("DISCLOUD_TOKEN");
 * 
 * // Other file
 * // Get instanced discloud
 * const { discloud } = require("discloud.app");
 * 
 * // ...
 * 
 * async function () {
 *   await discloud.apps.fetch("ID"); // Promise<App>
 * }
 * ```
 */
export const discloud = new DiscloudApp();