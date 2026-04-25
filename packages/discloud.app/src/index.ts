/* eslint-disable comma-dangle */
import "source-map-support/register";

import DiscloudApp from "./discloudApp/DiscloudApp";
import AppsAptsManager from "./managers/AppsAptsManager";
import AppsManager from "./managers/AppsManager";
import AppsModeratorsManager from "./managers/AppsModeratorsManager";
import AppStatusManager from "./managers/AppStatusManager";
import BaseAppsManager from "./managers/BaseAppsManager";
import BaseAppsStatusManager from "./managers/BaseAppsStatusManager";
import BaseCustomdomainsManager from "./managers/BaseCustomdomainsManager";
import BaseManager from "./managers/BaseManager";
import BaseSharedAppsManager from "./managers/BaseSharedAppsManager";
import BaseSharedAppsStatusManager from "./managers/BaseSharedAppsStatusManager";
import BaseSubdomainsManager from "./managers/BaseSubdomainsManager";
import CachedManager from "./managers/CachedManager";
import CustomdomainsManager from "./managers/CustomdomainsManager";
import DataManager from "./managers/DataManager";
import SharedAppsManager from "./managers/SharedAppsManager";
import SharedAppStatusManager from "./managers/SharedAppStatusManager";
import SubdomainsManager from "./managers/SubdomainsManager";
import App from "./structures/App";
import AppApt from "./structures/AppApt";
import AppBackup from "./structures/AppBackup";
import AppModerator from "./structures/AppModerator";
import AppStatus from "./structures/AppStatus";
import AppUploaded from "./structures/AppUploaded";
import Base from "./structures/Base";
import BaseApp from "./structures/BaseApp";
import BaseAppStatus from "./structures/BaseAppStatus";
import BaseCustomdomain from "./structures/BaseCustomdomain";
import BaseSharedApp from "./structures/BaseSharedApp";
import BaseSharedAppStatus from "./structures/BaseSharedAppStatus";
import BaseSubdomain from "./structures/BaseSubdomain";
import Customdomain from "./structures/Customdomain";
import CustomdomainApp from "./structures/CustomdomainApp";
import CustomdomainInstruction from "./structures/CustomdomainInstruction";
import SharedApp from "./structures/SharedApp";
import SharedAppStatus from "./structures/SharedAppStatus";
import Subdomain from "./structures/Subdomain";
import User from "./structures/User";

export * from "@discloudapp/api-types/v2";
export * from "@discloudapp/rest";
export * from "@discloudapp/util";
export * from "./@enum";
export * from "./@types";
export * from "./errors/http";
export * from "./util/constants";

export {
  App,
  AppApt,
  /** @deprecated use {@link AppsAptsManager} instead */
  AppsAptsManager as AppAptManager,
  AppBackup,
  /** @deprecated use {@link AppsManager} instead */
  AppsManager as AppManager,
  AppModerator,
  AppsAptsManager,
  AppsManager,
  AppsModeratorsManager,
  AppStatus,
  AppStatusManager,
  /** @deprecated use {@link AppModerator} instead */
  AppModerator as AppTeam,
  /** @deprecated use {@link AppsModeratorsManager} instead */
  AppsModeratorsManager as AppTeamManager,
  AppUploaded,
  Base,
  BaseApp,
  BaseAppsManager,
  BaseAppsStatusManager,
  BaseAppStatus,
  BaseCustomdomain,
  BaseCustomdomainsManager,
  BaseManager,
  BaseSharedApp,
  BaseSharedAppsManager,
  BaseSharedAppsStatusManager,
  BaseSharedAppStatus,
  BaseSubdomain,
  BaseSubdomainsManager,
  /** @deprecated use {@link BaseSharedApp} instead */
  BaseSharedApp as BaseTeamApp,
  CachedManager,
  Customdomain,
  CustomdomainApp,
  CustomdomainInstruction,
  CustomdomainsManager,
  DataManager,
  DiscloudApp,
  SharedApp,
  SharedAppsManager,
  SharedAppStatus,
  SharedAppStatusManager,
  Subdomain,
  SubdomainsManager,
  /** @deprecated use {@link SharedApp} instead */
  SharedApp as TeamApp,
  /** @deprecated use {@link SharedAppsManager} instead */
  SharedAppsManager as TeamAppManager,
  /** @deprecated use {@link SharedAppStatus} instead */
  SharedAppStatus as TeamAppStatus,
  User
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

export const version: string = "__PACKAGE_VERSION__";
