import { ApiAppManagerRemovedAll, ApiAppManagerRestartedAll, ApiAppManagerStartedAll, ApiAppManagerStopedAll, ApiTerminal, RESTDeleteApiAppAllDeleteResult, RESTDeleteApiAppDeleteResult, RESTGetApiAppAllBackupResult, RESTGetApiAppAllLogResult, RESTGetApiAppAllResult, RESTGetApiAppAllStatusResult, RESTGetApiAppBackupResult, RESTGetApiAppLogResult, RESTGetApiAppResult, RESTGetApiAppStatusResult, RESTPostApiUploadResult, RESTPutApiAppAllRestartResult, RESTPutApiAppAllStartResult, RESTPutApiAppAllStopResult, RESTPutApiAppCommitResult, RESTPutApiAppRamResult, RESTPutApiAppRestartResult, RESTPutApiAppStartResult, RESTPutApiAppStopResult, Routes } from "@discloudapp/api-types/v2";
import { CreateAppOptions, UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import App from "../structures/App";
import { AppBackup } from "../structures/AppBackup";
import AppStatus from "../structures/AppStatus";
import AppUploaded from "../structures/AppUploaded";
import { resolveFile } from "../util";
import CachedManager from "./CachedManager";

export default class AppManager extends CachedManager<App> {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp, App);
  }

  async status(appID: string): Promise<AppStatus>
  async status(appID?: "all"): Promise<Map<string, AppStatus>>
  async status(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppStatusResult
      | RESTGetApiAppAllStatusResult
    >(Routes.appStatus(appID));

    if (Array.isArray(data.apps)) {
      const status = new Map<string, AppStatus>();

      for (let i = 0; i < data.apps.length; i++) {
        const app = data.apps[i];

        status.set(app.id, new AppStatus(this.discloudApp, app));
      }

      return status;
    }

    return new AppStatus(this.discloudApp, data.apps);
  }

  async terminal(appID: string): Promise<ApiTerminal>
  async terminal(appID?: "all"): Promise<Map<string, ApiTerminal>>
  async terminal(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppLogResult
      | RESTGetApiAppAllLogResult
    >(Routes.appLogs(appID));
    if (Array.isArray(data.apps)) {
      const logs = new Map<string, ApiTerminal>();

      for (let i = 0; i < data.apps.length; i++) {
        const app = data.apps[i];

        logs.set(app.id, app.terminal);
      }

      return logs;
    } else {
      return data.apps.terminal;
    }
  }

  async backup(appID: string): Promise<AppBackup>
  async backup(appID?: "all"): Promise<Map<string, AppBackup<true>>>
  async backup(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppBackupResult
      | RESTGetApiAppAllBackupResult
    >(Routes.appBackup(appID));

    if (Array.isArray(data.backups)) {
      const backups = new Map<string, AppBackup<true>>();

      for (let i = 0; i < data.backups.length; i++) {
        const backup = data.backups[i];

        backups.set(backup.id, new AppBackup<true>(this.discloudApp, backup));
      }

      return backups;
    }

    return new AppBackup(this.discloudApp, data.backups);
  }

  async ram(appID: string, quantity: number) {
    if (!appID) throw new Error("App ID is missing.");

    if (quantity < 100) throw new Error("RAM quantity must be more than 100.");

    const data = await this.discloudApp.rest.put<RESTPutApiAppRamResult>(Routes.appRam(appID), {
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

  async create(options: CreateAppOptions) {
    options.file = await resolveFile(options.file);

    const data = await this.discloudApp.rest.post<RESTPostApiUploadResult>(Routes.upload(), {
      file: options.file,
    });

    if ("app" in data)
      return { ...data, app: new AppUploaded(this.discloudApp, data.app) };

    return data;
  }

  async update(appID: string, options: UpdateAppOptions) {
    options.file = await resolveFile(options.file);

    const data = await this.discloudApp.rest.put<RESTPutApiAppCommitResult>(Routes.appCommit(appID), {
      file: options.file,
    });

    return data;
  }

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