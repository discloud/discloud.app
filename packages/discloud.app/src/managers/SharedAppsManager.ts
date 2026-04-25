import { Routes, type ApiAppManagerRestartedAll, type ApiAppManagerStartedAll, type ApiAppManagerStopedAll, type ApiTeamApp, type ApiTerminal, type BaseApiApp, type RESTGetApiAppAllBackupResult, type RESTGetApiAppAllLogResult, type RESTGetApiAppBackupResult, type RESTGetApiAppLogResult, type RESTGetApiTeamResult, type RESTPutApiAppAllRestartResult, type RESTPutApiAppAllStartResult, type RESTPutApiAppAllStopResult, type RESTPutApiAppCommitResult, type RESTPutApiAppRamResult } from "@discloudapp/api-types/v2";
import { DiscloudAPIError } from "@discloudapp/rest";
import { resolveFile } from "@discloudapp/util";
import { constants } from "http2";
import type { UpdateAppOptions } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import AppBackup from "../structures/AppBackup";
import SharedApp from "../structures/SharedApp";
import { validateNonEmptyString, validateNumberType } from "../util/assertions";
import BaseSharedAppsManager from "./BaseSharedAppsManager";
import SharedAppsStatusManager from "./SharedAppsStatusManager";

type PartialApiSharedApp = BaseApiApp & ApiTeamApp;

/**
 * Manager for your team on Discloud
 */
export default class SharedAppsManager extends BaseSharedAppsManager<typeof SharedApp> {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp, SharedApp);
  }

  readonly status = new SharedAppsStatusManager(this.discloudApp);

  /**
   * Get logs for the app of your team on Discloud
   * 
   * @param appID - Your team app id
   */
  async terminal(appID: string): Promise<ApiTerminal>
  async terminal(appID: "all"): Promise<Map<string, ApiTerminal>>
  async terminal(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppLogResult
      | RESTGetApiAppAllLogResult
    >(Routes.teamLogs(appID));
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
   * Get backups for the app of your team on Discloud
   * 
   * @param appID - Your team app id
   */
  async backup(appID: string): Promise<AppBackup>
  async backup(appID: "all"): Promise<Map<string, AppBackup>>
  async backup(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppBackupResult
      | RESTGetApiAppAllBackupResult
    >(Routes.teamBackup(appID));

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
   * Set the quantity of ram to application of your team
   * 
   * @param appID - Your team app id
   * @param quantity - Minimum values is `100` to `bot` or `512` for `site`
   */
  async ram(appID: string, quantity: number) {
    validateNonEmptyString(appID);
    validateNumberType(quantity);

    await this.discloudApp.rest.put<RESTPutApiAppRamResult>(Routes.teamRam(appID), {
      body: {
        ramMB: quantity,
      },
    });

    this._add({
      id: appID,
      ram: quantity,
    } as PartialApiSharedApp);
  }

  /**
   * Update an of your team apps on Discloud
   * 
   * @param appID - Your team app id
   * @param options - Options to update your app.
   */
  async update(appID: string, options: UpdateAppOptions) {
    validateNonEmptyString(appID);

    options.file = await resolveFile(options.file);

    const data = await this.discloudApp.rest.put<RESTPutApiAppCommitResult>(Routes.teamCommit(appID), {
      file: <File>options.file,
    });

    return data;
  }

  /**
   * Restart your team application on Discloud
   * 
   * @param appID - Your team app id
   */
  async restart(appID: string): Promise<void>
  async restart(appID: "all"): Promise<ApiAppManagerRestartedAll>
  async restart(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.put<RESTPutApiAppAllRestartResult>(Routes.teamRestart(appID));

    if (appID === "all") {
      if (Array.isArray(data.apps.restarted))
        for (let i = 0; i < data.apps.restarted.length; i++) {
          const appId = data.apps.restarted[i];
          this._patch(appId, { online: true } as PartialApiSharedApp);
        }

      return data.apps as unknown;
    }

    this._add({
      id: appID,
      online: true,
    } as PartialApiSharedApp);
  }

  /**
   * Start your team application on Discloud
   * 
   * @param appID - Your team app id
   */
  async start(appID: string): Promise<void>
  async start(appID: "all"): Promise<ApiAppManagerStartedAll>
  async start(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.put<RESTPutApiAppAllStartResult>(Routes.teamStart(appID));

    if (appID === "all") {
      if (Array.isArray(data.apps.started))
        for (let i = 0; i < data.apps.started.length; i++) {
          const appId = data.apps.started[i];
          this._patch(appId, { online: true } as PartialApiSharedApp);
        }

      return data.apps as unknown;
    }

    this._add({
      id: appID,
      online: true,
    } as PartialApiSharedApp);
  }

  /**
   * Stop your team application on Discloud
   * 
   * @param appID - Your team app id
   */
  async stop(appID: string): Promise<void>
  async stop(appID: "all"): Promise<ApiAppManagerStopedAll>
  async stop(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.put<RESTPutApiAppAllStopResult>(Routes.teamStop(appID));

    if (appID === "all") {
      if (Array.isArray(data.apps.stoped))
        for (let i = 0; i < data.apps.stoped.length; i++) {
          const appId = data.apps.stoped[i];
          this._patch(appId, { online: true } as PartialApiSharedApp);
        }

      return data.apps as unknown;
    }

    this._add({
      id: appID,
      online: false,
    } as PartialApiSharedApp);
  }

  /**
   * Get information of your team application on Discloud.
   */
  async fetch() {
    try {
      const data = await this.discloudApp.rest.get<RESTGetApiTeamResult>(Routes.team());

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
