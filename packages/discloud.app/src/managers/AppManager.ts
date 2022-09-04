import { ApiAppBackup, ApiAppManagerRemovedAll, ApiAppManagerRestartedAll, ApiAppManagerStartedAll, ApiAppManagerStopedAll, ApiTerminal, RESTDeleteApiAppAllDeleteResult, RESTDeleteApiAppDeleteResult, RESTGetApiAppAllBackupResult, RESTGetApiAppAllLogResult, RESTGetApiAppAllResult, RESTGetApiAppAllStatusResult, RESTGetApiAppBackupResult, RESTGetApiAppLogResult, RESTGetApiAppResult, RESTGetApiAppStatusResult, RESTPostApiUploadResult, RESTPutApiAppAllRestartResult, RESTPutApiAppAllStartResult, RESTPutApiAppAllStopResult, RESTPutApiAppCommitResult, RESTPutApiAppRamResult, RESTPutApiAppRestartResult, RESTPutApiAppStartResult, RESTPutApiAppStopResult, Routes } from "@discloudapp/api-types/v2";
import { CreateAppOptions, UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import App from "../structures/App";
import AppStatus from "../structures/AppStatus";
import { resolveFile } from "../util";
import BaseManager from "./BaseManager";

export default class AppManager extends BaseManager {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp);
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

  async backup(appID: string): Promise<ApiAppBackup>
  async backup(appID?: "all"): Promise<Map<string, ApiAppBackup>>
  async backup(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppBackupResult
      | RESTGetApiAppAllBackupResult
    >(Routes.appBackup(appID));

    if (Array.isArray(data.backups)) {
      const backups = new Map<string, ApiAppBackup>();

      for (let i = 0; i < data.backups.length; i++) {
        const backup = data.backups[i];

        backups.set(backup.id, backup);
      }

      return backups;
    }

    return data.backups;
  }

  async ram(appID: string, quantity: number) {
    const data = await this.discloudApp.rest.put<RESTPutApiAppRamResult>(Routes.appRam(appID), {
      body: {
        ramMB: quantity,
      },
    });

    return data;
  }

  async create(options: CreateAppOptions) {
    if (typeof options.file === "string")
      options.file = await resolveFile(options.file);

    const data = await this.discloudApp.rest.post<RESTPostApiUploadResult>(Routes.upload(), {
      file: options.file,
    });

    if ("app" in data) {
      const app = new App(this.discloudApp, data.app);

      return { ...data, app };
    }

    return data;
  }

  async update(appID: string, options: UpdateAppOptions) {
    if (typeof options.file === "string")
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

    if ("apps" in data) return data.apps;

    return data;
  }

  async restart(appID: string): Promise<RESTPutApiAppRestartResult>
  async restart(appID?: "all"): Promise<ApiAppManagerRestartedAll>
  async restart(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppRestartResult
      | RESTPutApiAppAllRestartResult
    >(Routes.appRestart(appID));

    if ("apps" in data) return data.apps;

    return data;
  }

  async start(appID: string): Promise<RESTPutApiAppStartResult>
  async start(appID?: "all"): Promise<ApiAppManagerStartedAll>
  async start(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppStartResult
      | RESTPutApiAppAllStartResult
    >(Routes.appStart(appID));

    if ("apps" in data) return data.apps;

    return data;
  }

  async stop(appID: string): Promise<RESTPutApiAppStopResult>
  async stop(appID?: "all"): Promise<ApiAppManagerStopedAll>
  async stop(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppStopResult
      | RESTPutApiAppAllStopResult
    >(Routes.appStop(appID));

    if ("apps" in data) return data.apps;

    return data;
  }

  async fetch(appID: string): Promise<App>
  async fetch(appID?: "all"): Promise<Map<string, App>>
  async fetch(appID = "all") {
    if (appID === "all") return this.#fetchMany();

    const data = await this.discloudApp.rest.get<RESTGetApiAppResult>(Routes.app(appID));

    return new App(this.discloudApp, data.apps);
  }

  async #fetchMany() {
    const data = await this.discloudApp.rest.get<RESTGetApiAppAllResult>(Routes.app("all"));

    const apps = new Map<string, App>();

    for (let i = 0; i < data.apps.length; i++) {
      const app = data.apps[i];

      apps.set(app.id, new App(this.discloudApp, app));
    }

    return apps;
  }
}