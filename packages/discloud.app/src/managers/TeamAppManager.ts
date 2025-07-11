import { Routes, type ApiAppManagerRestartedAll, type ApiAppManagerStartedAll, type ApiAppManagerStopedAll, type ApiTerminal, type RESTGetApiAppAllBackupResult, type RESTGetApiAppAllLogResult, type RESTGetApiAppBackupResult, type RESTGetApiAppLogResult, type RESTGetApiAppStatusResult, type RESTGetApiTeamResult, type RESTPutApiAppAllRestartResult, type RESTPutApiAppAllStartResult, type RESTPutApiAppAllStopResult, type RESTPutApiAppCommitResult, type RESTPutApiAppRamResult, type RESTPutApiAppRestartResult, type RESTPutApiAppStartResult, type RESTPutApiAppStopResult } from "@discloudapp/api-types/v2";
import { DiscloudAPIError } from "@discloudapp/rest";
import { resolveFile } from "@discloudapp/util";
import { constants } from "http2";
import type { UpdateAppOptions } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import AppBackup from "../structures/AppBackup";
import TeamApp from "../structures/TeamApp";
import type TeamAppStatus from "../structures/TeamAppStatus";
import { validateNumberType, validateStringType } from "../util/assertions";
import CachedManager from "./CachedManager";

/**
 * Manager for your team on Discloud
 */
export default class TeamAppManager extends CachedManager<typeof TeamApp> {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp, TeamApp);
  }

  /**
   * Get the status for the app of your team on Discloud
   * 
   * @param appID - Your team app id
   */
  async status(appID: string): Promise<TeamAppStatus>
  async status(appID: string) {
    validateStringType(appID);

    const data = await this.discloudApp.rest.get<RESTGetApiAppStatusResult>(Routes.teamStatus(appID));

    return this._add(data.apps).status;
  }

  /**
   * Get logs for the app of your team on Discloud
   * 
   * @param appID - Your team app id
   */
  async terminal(appID: string): Promise<ApiTerminal>
  async terminal(appID: "all"): Promise<Map<string, ApiTerminal>>
  async terminal(appID: string) {
    validateStringType(appID);

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
    } else {
      return data.apps.terminal;
    }
  }

  /**
   * Get backups for the app of your team on Discloud
   * 
   * @param appID - Your team app id
   */
  async backup(appID: string): Promise<AppBackup>
  async backup(appID: "all"): Promise<Map<string, AppBackup>>
  async backup(appID: string) {
    validateStringType(appID);

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
    validateStringType(appID);
    validateNumberType(quantity);

    const data = await this.discloudApp.rest.put<RESTPutApiAppRamResult>(Routes.teamRam(appID), {
      body: {
        ramMB: quantity,
      },
    });

    if (data.statusCode === 200)
      this._add({
        id: appID,
        ram: quantity,
      });

    return data;
  }

  /**
   * Update an of your team apps on Discloud
   * 
   * @param appID - Your team app id
   * @param options - Options to update your app.
   */
  async update(appID: string, options: UpdateAppOptions) {
    validateStringType(appID);

    options.file = await resolveFile(options.file);

    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppCommitResult
    >(Routes.teamCommit(appID), {
      file: <File>options.file,
    });

    return data;
  }

  /**
   * Restart your team application on Discloud
   * 
   * @param appID - Your team app id
   */
  async restart(appID: string): Promise<RESTPutApiAppRestartResult>
  async restart(appID: "all"): Promise<ApiAppManagerRestartedAll>
  async restart(appID: string) {
    validateStringType(appID);

    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppRestartResult
      | RESTPutApiAppAllRestartResult
    >(Routes.teamRestart(appID));

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
   * Start your team application on Discloud
   * 
   * @param appID - Your team app id
   */
  async start(appID: string): Promise<RESTPutApiAppStartResult>
  async start(appID: "all"): Promise<ApiAppManagerStartedAll>
  async start(appID: string) {
    validateStringType(appID);

    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppStartResult
      | RESTPutApiAppAllStartResult
    >(Routes.teamStart(appID));

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
   * Stop your team application on Discloud
   * 
   * @param appID - Your team app id
   */
  async stop(appID: string): Promise<RESTPutApiAppStopResult>
  async stop(appID: "all"): Promise<ApiAppManagerStopedAll>
  async stop(appID: string) {
    validateStringType(appID);

    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppStopResult
      | RESTPutApiAppAllStopResult
    >(Routes.teamStop(appID));

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
