import { Routes, type ApiAppManagerRemovedAll, type ApiAppManagerRestartedAll, type ApiAppManagerStartedAll, type ApiAppManagerStopedAll, type ApiConsoleAppShell, type ApiTerminal, type RESTApiBaseResult, type RESTDeleteApiAppAllDeleteResult, type RESTDeleteApiAppDeleteResult, type RESTGetApiAppAllBackupResult, type RESTGetApiAppAllLogResult, type RESTGetApiAppAllResult, type RESTGetApiAppBackupResult, type RESTGetApiAppLogResult, type RESTGetApiAppResult, type RESTGetApiAppStatusResult, type RESTPostApiUploadResult, type RESTPutApiAppAllRestartResult, type RESTPutApiAppAllStartResult, type RESTPutApiAppAllStopResult, type RESTPutApiAppCommitResult, type RESTPutApiAppConsoleResult, type RESTPutApiAppRamResult, type RESTPutApiAppRestartResult, type RESTPutApiAppStartResult, type RESTPutApiAppStopResult } from "@discloudapp/api-types/v2";
import { DiscloudAPIError } from "@discloudapp/rest";
import { resolveFile } from "@discloudapp/util";
import { constants } from "http2";
import { ProfileOptions, type CreateAppOptions, type UpdateAppOptions } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import App from "../structures/App";
import AppBackup from "../structures/AppBackup";
import type AppStatus from "../structures/AppStatus";
import AppUploaded from "../structures/AppUploaded";
import { validateNumberType, validateStringType } from "../util/assertions";
import CachedManager from "./CachedManager";

/**
 * Manager for apps on Discloud
 */
export default class AppManager extends CachedManager<typeof App> {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp, App);
  }

  /**
   * Get the status of your application on Discloud
   * 
   * @param appID - Your app id
   */
  async status(appID: string): Promise<AppStatus>
  async status(appID: string) {
    validateStringType(appID);

    const data = await this.discloudApp.rest.get<RESTGetApiAppStatusResult>(Routes.appStatus(appID));

    return this._add(data.apps).status;
  }

  /**
   * Send a command to your app's terminal
   * 
   * @param appID - Your app id
   * @param command - The command
   */
  async console(appID: string, command: string): Promise<ApiConsoleAppShell> {
    validateStringType(appID);
    validateStringType(command);

    const data = await this.discloudApp.rest.put<RESTPutApiAppConsoleResult>(Routes.appConsole(appID), {
      body: { command },
    });

    return data.apps.shell;
  }

  /**
   * Get logs of your application on Discloud
   * 
   * @param appID - Your app id
   */
  async terminal(appID: string): Promise<ApiTerminal>
  async terminal(appID: "all"): Promise<Map<string, ApiTerminal>>
  async terminal(appID: string) {
    validateStringType(appID);

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
  async backup(appID: "all"): Promise<Map<string, AppBackup>>
  async backup(appID: string) {
    validateStringType(appID);

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
   */
  async ram(appID: string, quantity: number) {
    validateStringType(appID);
    validateNumberType(quantity);

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
   */
  async create(options: CreateAppOptions) {
    options.file = await resolveFile(options.file);

    const data = await this.discloudApp.rest.post<RESTPostApiUploadResult>(Routes.upload(), {
      file: <File>options.file,
    });

    if ("app" in data) {
      this._add(data.app);

      return Object.assign({}, data, { app: new AppUploaded(this.discloudApp, data.app) });
    }

    return data;
  }

  /**
   * Update an of your apps on Discloud.
   * 
   * @param appID - Your app id
   * @param options - Options to update your app.
   */
  async update(appID: string, options: UpdateAppOptions) {
    validateStringType(appID);

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
  async delete(appID: "all"): Promise<ApiAppManagerRemovedAll>
  async delete(appID: string) {
    validateStringType(appID);

    const data = await this.discloudApp.rest.delete<
      | RESTDeleteApiAppDeleteResult
      | RESTDeleteApiAppAllDeleteResult
    >(Routes.appDelete(appID));

    if ("apps" in data) {
      this._deleteMany(data.apps.removealled);

      return data.apps;
    }

    if (data.status === "ok")
      this._delete(appID);

    return data;
  }


  /**
   * Update the profile of your apps on Discloud.
   * 
   * @param appID - Your app id
   * @param options - Options to update your app.
   */
  async profile(appID: string, options: ProfileOptions) {
    validateStringType(appID);
    ProfileOptions.parse(options);

    const data = await this.discloudApp.rest.put<RESTApiBaseResult>(Routes.appProfile(appID), {
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
  async restart(appID: "all"): Promise<ApiAppManagerRestartedAll>
  async restart(appID: string) {
    validateStringType(appID);

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
  async start(appID: "all"): Promise<ApiAppManagerStartedAll>
  async start(appID: string) {
    validateStringType(appID);

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
  async stop(appID: "all"): Promise<ApiAppManagerStopedAll>
  async stop(appID: string) {
    validateStringType(appID);

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
  async fetch(appID: "all"): Promise<Map<string, App>>
  async fetch(appID: string) {
    validateStringType(appID);

    if (appID === "all") return this.#fetchMany();

    try {
      const data = await this.discloudApp.rest.get<RESTGetApiAppResult>(Routes.app(appID));

      return this._add(data.apps);
    } catch (error) {
      if (error instanceof DiscloudAPIError) {
        switch (error.code) {
          case constants.HTTP_STATUS_NOT_FOUND:
            this._delete(appID);
            break;

          default: throw error;
        }
      }

      throw error;
    }
  }

  async #fetchMany() {
    try {
      const data = await this.discloudApp.rest.get<RESTGetApiAppAllResult>(Routes.app("all"));

      this._clear(data.apps);

      return this._addMany(data.apps);
    } catch (error) {
      if (error instanceof DiscloudAPIError) {
        switch (error.code) {
          case constants.HTTP_STATUS_NOT_FOUND:
            this._clear();
            break;

          default: throw error;
        }
      }

      throw error;
    }
  }
}