import "source-map-support/register";

import DiscloudApp from "./discloudApp/DiscloudApp";
import AppAptManager from "./managers/AppAptManager";
import AppManager from "./managers/AppManager";
import AppTeamManager from "./managers/AppTeamManager";
import BaseManager from "./managers/BaseManager";
import CachedManager from "./managers/CachedManager";
import DataManager from "./managers/DataManager";
import TeamAppManager from "./managers/TeamAppManager";
import App from "./structures/App";
import AppApt from "./structures/AppApt";
import AppBackup from "./structures/AppBackup";
import AppStatus from "./structures/AppStatus";
import AppTeam from "./structures/AppTeam";
import AppUploaded from "./structures/AppUploaded";
import Base from "./structures/Base";
import BaseApp from "./structures/BaseApp";
import BaseTeamApp from "./structures/BaseTeamApp";
import TeamApp from "./structures/TeamApp";
import TeamAppStatus from "./structures/TeamAppStatus";
import User from "./structures/User";

export * from "@discloudapp/api-types/v2";
export * from "@discloudapp/rest";
export * from "@discloudapp/util";
export * from "./@enum";
export * from "./@types";
export * from "./util/constants";
export {
  App,
  AppApt,
  AppAptManager,
  AppBackup,
  AppManager,
  AppStatus,
  AppTeam,
  AppTeamManager,
  AppUploaded,
  Base,
  BaseApp,
  BaseManager,
  BaseTeamApp,
  CachedManager,
  DataManager,
  DiscloudApp,
  TeamApp,
  TeamAppManager,
  TeamAppStatus,
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

export const version: string = "[VI]{{inject}}[/VI]";
