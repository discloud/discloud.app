import { ApiAppManagerRemovedAll, ApiAppManagerRestartedAll, ApiAppManagerStartedAll, ApiAppManagerStopedAll, ApiTerminal, RESTApiBaseResult, RESTDeleteApiAppAllDeleteResult, RESTDeleteApiAppDeleteResult, RESTGetApiAppAllBackupResult, RESTGetApiAppAllLogResult, RESTGetApiAppAllResult, RESTGetApiAppAllStatusResult, RESTGetApiAppBackupResult, RESTGetApiAppLogResult, RESTGetApiAppResult, RESTGetApiAppStatusResult, RESTPostApiUploadResult, RESTPutApiAppAllRestartResult, RESTPutApiAppAllStartResult, RESTPutApiAppAllStopResult, RESTPutApiAppCommitResult, RESTPutApiAppRamResult, RESTPutApiAppRestartResult, RESTPutApiAppStartResult, RESTPutApiAppStopResult, Routes } from "@discloudapp/api-types/v2";
import { FileResolvable, resolveFile } from "@discloudapp/util";
import { File } from "undici";
import { CreateAppOptions, ProfileOptions, UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import App from "../structures/App";
import AppBackup from "../structures/AppBackup";
import AppStatus from "../structures/AppStatus";
import AppUploaded from "../structures/AppUploaded";
import CachedManager from "./CachedManager";

/**
 * Manager for apps on Discloud
 */
export default class AppManager extends CachedManager<App> {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp, App);
  }

  /**
   * Get the status of your application on Discloud
   * 
   * @param appID - Your app id
   */
  async status(appID: string): Promise<AppStatus>
  async status(appID?: "all"): Promise<Map<string, AppStatus>>
  async status(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppStatusResult
      | RESTGetApiAppAllStatusResult
    >(Routes.appStatus(appID));

    if (Array.isArray(data.apps)) {
      const cache = new Map<string, AppStatus>();

      for (const app of this._addMany(data.apps).values()) {
        cache.set(app.id, app.status);
      }

      return cache;
    }

    return this._add(data.apps).status;
  }

  /**
   * Get logs of your application on Discloud
   * 
   * @param appID - Your app id
   */
  async terminal(appID: string): Promise<ApiTerminal>
  async terminal(appID?: "all"): Promise<Map<string, ApiTerminal>>
  async terminal(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppLogResult
      | RESTGetApiAppAllLogResult
    >(Routes.appLogs(appID));

    if (Array.isArray(data.apps)) {
      const cache = new Map<string, ApiTerminal>();

      for (const app of data.apps) {
        cache.set(app.id, app.terminal);
      }

      return cache;
    }

    return data.apps.terminal;
  }

  /**
   * Get backups of your application on Discloud
   * 
   * @param appID - Your app id
   */
  async backup(appID: string): Promise<AppBackup>
  async backup(appID?: "all"): Promise<Map<string, AppBackup>>
  async backup(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppBackupResult
      | RESTGetApiAppAllBackupResult
    >(Routes.appBackup(appID));

    if (Array.isArray(data.backups)) {
      const cache = new Map<string, AppBackup>();

      for (const backup of data.backups) {
        cache.set(backup.id, new AppBackup(this.discloudApp, backup));
      }

      return cache;
    }

    return new AppBackup(this.discloudApp, data.backups);
  }

  /**
   * Set the quantity of ram to your application
   * 
   * @param appID - Your app id
   * @param quantity - Minimum values is `100` to `bot` or `512` for `site`
   * @returns Promise {@link RESTPutApiAppRamResult}
   */
  async ram(appID: string, quantity: number) {
    if (!appID) throw new Error("App ID is missing.");

    if (quantity < 100) throw new Error("RAM quantity must be more than 100.");

    const data = await this.discloudApp.rest.put<RESTPutApiAppRamResult>(Routes.appRam(appID), {
      body: {
        ramMB: quantity,
      },
    });

    if (data.status === "ok")
      this._add({
        id: appID,
        ram: quantity,
      });

    return data;
  }

  /**
   * Upload a new app or site to Discloud
   * 
   * @param options - Options for create a new app. A {@link FileResolvable} is required.
   * @returns Promise {@link RESTPostApiUploadResult}
   */
  async create(options: CreateAppOptions) {
    options.file = await resolveFile(options.file);

    const data = await this.discloudApp.rest.post<RESTPostApiUploadResult>(Routes.upload(), {
      file: <File>options.file,
    });

    this._add(data.app);

    if ("app" in data)
      return Object.assign(data, { app: new AppUploaded(this.discloudApp, data.app) });

    return data;
  }

  /**
   * Update an of your apps on Discloud.
   * 
   * @param appID - Your app id
   * @param options - Options to update your app.
   * @returns Promise {@link RESTPutApiAppCommitResult}
   */
  async update(appID: string, options: UpdateAppOptions) {
    options.file = await resolveFile(options.file);

    const data = await this.discloudApp.rest.put<RESTPutApiAppCommitResult>(Routes.appCommit(appID), {
      file: <File>options.file,
    });

    return data;
  }

  /**
   * Delete your application from Discloud.
   * 
   * @param appID - Your app id
   */
  async delete(appID: string): Promise<RESTDeleteApiAppDeleteResult>
  async delete(appID?: "all"): Promise<ApiAppManagerRemovedAll>
  async delete(appID = "all") {
    const data = await this.discloudApp.rest.delete<
      | RESTDeleteApiAppDeleteResult
      | RESTDeleteApiAppAllDeleteResult
    >(Routes.appDelete(appID));

    if ("apps" in data) {
      this._removeMany(data.apps.removealled);

      return data.apps;
    }

    if (data.status === "ok")
      this._remove(appID);

    return data;
  }


  /**
   * Update the profile of your apps on Discloud.
   * 
   * @param appID - Your app id
   * @param options - Options to update your app.
   * @returns Promise {@link REST}
   */
  async profile(appID: string, options: ProfileOptions) {
    ProfileOptions.parse(options);

    const data = await this.discloudApp.rest.put<RESTApiBaseResult>(Routes.appCommit(appID), {
      body: options,
    });

    if (data.status === "ok")
      this._add(options);

    return data;
  }

  /**
   * Restart your application on Discloud
   * 
   * @param appID - You app id
   */
  async restart(appID: string): Promise<RESTPutApiAppRestartResult>
  async restart(appID?: "all"): Promise<ApiAppManagerRestartedAll>
  async restart(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppRestartResult
      | RESTPutApiAppAllRestartResult
    >(Routes.appRestart(appID));

    if ("apps" in data) {
      this._addMany(data.apps.restarted.map(app => ({
        id: app,
        online: true,
      })));

      return data.apps;
    }

    this._add({
      id: appID,
      online: data.status === "ok",
    });

    return data;
  }

  /**
   * Start your application on Discloud
   * 
   * @param appID - You app id
   */
  async start(appID: string): Promise<RESTPutApiAppStartResult>
  async start(appID?: "all"): Promise<ApiAppManagerStartedAll>
  async start(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppStartResult
      | RESTPutApiAppAllStartResult
    >(Routes.appStart(appID));

    if ("apps" in data) {
      this._addMany(data.apps.started.map(app => ({
        id: app,
        online: true,
      })));

      return data.apps;
    }

    this._add({
      id: appID,
      online: data.status === "ok",
    });

    return data;
  }

  /**
   * Stop your application on Discloud
   * 
   * @param appID - You app id
   */
  async stop(appID: string): Promise<RESTPutApiAppStopResult>
  async stop(appID?: "all"): Promise<ApiAppManagerStopedAll>
  async stop(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppStopResult
      | RESTPutApiAppAllStopResult
    >(Routes.appStop(appID));

    if ("apps" in data) {
      this._addMany(data.apps.stoped.map(app => ({
        id: app,
        online: false,
      })));

      return data.apps;
    }

    this._add({
      id: appID,
      online: !(data.status === "ok"),
    });

    return data;
  }

  /**
   * Get information of your application on Discloud.
   * 
   * @param appID - You app id.
   */
  async fetch(appID: string): Promise<App>
  async fetch(appID?: "all"): Promise<Map<string, App>>
  async fetch(appID = "all") {
    if (appID === "all") return this.#fetchMany();

    const data = await this.discloudApp.rest.get<RESTGetApiAppResult>(Routes.app(appID));

    return this._add(data.apps);
  }

  async #fetchMany() {
    const data = await this.discloudApp.rest.get<RESTGetApiAppAllResult>(Routes.app("all"));

    return this._addMany(data.apps);
  }
}