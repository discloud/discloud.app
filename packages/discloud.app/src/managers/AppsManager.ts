import { Routes, type ApiApp, type ApiAppManagerRemovedAll, type ApiAppManagerRestartedAll, type ApiAppManagerStartedAll, type ApiAppManagerStopedAll, type ApiConsoleAppShell, type ApiTerminal, type BaseApiApp, type RESTApiBaseResult, type RESTDeleteApiAppAllDeleteResult, type RESTGetApiAppAllBackupResult, type RESTGetApiAppAllLogResult, type RESTGetApiAppAllResult, type RESTGetApiAppBackupResult, type RESTGetApiAppLogResult, type RESTGetApiAppResult, type RESTPostApiUploadResult, type RESTPutApiAppAllRestartResult, type RESTPutApiAppAllStartResult, type RESTPutApiAppAllStopResult, type RESTPutApiAppCommitResult, type RESTPutApiAppConsoleResult, type RESTPutApiAppRamResult } from "@discloudapp/api-types/v2";
import { DiscloudAPIError } from "@discloudapp/rest";
import { resolveFile } from "@discloudapp/util";
import { constants } from "http2";
import { type CreateAppOptions, type UpdateAppOptions } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import App from "../structures/App";
import AppBackup from "../structures/AppBackup";
import AppUploaded from "../structures/AppUploaded";
import { validateNonEmptyString, validateNumberType } from "../util/assertions";
import { ProfileOptions } from "../util/validations";
import AppsAptsManager from "./AppsAptsManager";
import AppsModeratorsManager from "./AppsModeratorsManager";
import AppsStatusManager from "./AppsStatusManager";
import BaseAppsManager from "./BaseAppsManager";

type PartialApiApp = BaseApiApp & Partial<ApiApp>

/**
 * Manager for apps on Discloud
 */
export default class AppsManager extends BaseAppsManager<typeof App> {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp, App);
  }

  readonly apts = new AppsAptsManager(this.discloudApp);
  readonly moderators = new AppsModeratorsManager(this.discloudApp);
  readonly status = new AppsStatusManager(this.discloudApp);

  /**
   * Send a command to your app's terminal
   * 
   * @param appID - Your app id
   * @param command - The command
   */
  async console(appID: string, command: string): Promise<ApiConsoleAppShell> {
    validateNonEmptyString(appID);
    validateNonEmptyString(command);

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
    validateNonEmptyString(appID);

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
    validateNonEmptyString(appID);

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
    validateNonEmptyString(appID);
    validateNumberType(quantity);

    await this.discloudApp.rest.put<RESTPutApiAppRamResult>(Routes.appRam(appID), {
      body: {
        ramMB: quantity,
      },
    });

    this._patch(appID, { ram: quantity } as PartialApiApp);
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
      const app = new AppUploaded(this.discloudApp, data.app);

      return Object.assign({}, data, { app });
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
    validateNonEmptyString(appID);

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
  async delete(appID: string): Promise<void>
  async delete(appID: "all"): Promise<ApiAppManagerRemovedAll>
  async delete(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.delete<RESTDeleteApiAppAllDeleteResult>(Routes.appDelete(appID));

    if (appID === "all") {
      if (Array.isArray(data.apps.removealled))
        this._deleteMany(data.apps.removealled);

      return data.apps as unknown;
    }

    this._delete(appID);
  }


  /**
   * Update the profile of your apps on Discloud.
   * 
   * @param appID - Your app id
   * @param options - Options to update your app.
   */
  async profile(appID: string, options: ProfileOptions) {
    validateNonEmptyString(appID);
    ProfileOptions.parse(options);

    await this.discloudApp.rest.put<RESTApiBaseResult>(Routes.appProfile(appID), {
      body: options,
    });

    this._patch(appID, { avatarURL: options.avatarURL, name: options.name } as PartialApiApp);
  }

  /**
   * Restart your application on Discloud
   * 
   * @param appID - You app id
   */
  async restart(appID: string): Promise<void>
  async restart(appID: "all"): Promise<ApiAppManagerRestartedAll>
  async restart(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.put<RESTPutApiAppAllRestartResult>(Routes.appRestart(appID));

    if (appID === "all") {
      if (Array.isArray(data.apps.restarted))
        for (let i = 0; i < data.apps.restarted.length; i++) {
          const appId = data.apps.restarted[i];
          this._patch(appId, { online: true } as PartialApiApp);
        }

      return data.apps as unknown;
    }

    this._patch(appID, { online: true } as PartialApiApp);
  }

  /**
   * Start your application on Discloud
   * 
   * @param appID - You app id
   */
  async start(appID: string): Promise<void>
  async start(appID: "all"): Promise<ApiAppManagerStartedAll>
  async start(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.put<RESTPutApiAppAllStartResult>(Routes.appStart(appID));

    if (appID === "all") {
      if (Array.isArray(data.apps.started))
        for (let i = 0; i < data.apps.started.length; i++) {
          const appId = data.apps.started[i];
          this._patch(appId, { online: true } as PartialApiApp);
        }

      return data.apps as unknown;
    }

    this._patch(appID, { online: true } as PartialApiApp);
  }

  /**
   * Stop your application on Discloud
   * 
   * @param appID - You app id
   */
  async stop(appID: string): Promise<void>
  async stop(appID: "all"): Promise<ApiAppManagerStopedAll>
  async stop(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.put<RESTPutApiAppAllStopResult>(Routes.appStop(appID));

    if (appID === "all") {
      if (Array.isArray(data.apps.stoped))
        for (let i = 0; i < data.apps.stoped.length; i++) {
          const appId = data.apps.stoped[i];
          this._patch(appId, { online: false } as PartialApiApp);
        }

      return data.apps as unknown;
    }

    this._patch(appID, { online: false } as PartialApiApp);
  }

  /**
   * Get information of your application on Discloud.
   * 
   * @param appID - You app id.
   */
  async fetch(appID: string): Promise<App>
  async fetch(appID?: "all"): Promise<Map<string, App>>
  async fetch(appID: string = "all") {
    if (appID === "all") return this.#fetchMany();

    validateNonEmptyString(appID);

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