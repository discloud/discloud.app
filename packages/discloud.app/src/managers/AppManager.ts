import { ApiAppBackup, ApiAppManager, ApiAppStatus, ApiTerminal, RESTDeleteApiAppAllDeleteResult, RESTDeleteApiAppDeleteResult, RESTGetApiAppAllBackupResult, RESTGetApiAppAllLogResult, RESTGetApiAppAllResult, RESTGetApiAppAllStatusResult, RESTGetApiAppBackupResult, RESTGetApiAppLogResult, RESTGetApiAppResult, RESTGetApiAppStatusResult, RESTPostApiUploadResult, RESTPutApiAppAllRestartResult, RESTPutApiAppAllStartResult, RESTPutApiAppAllStopResult, RESTPutApiAppCommitResult, RESTPutApiAppRestartResult, RESTPutApiAppStartResult, RESTPutApiAppStopResult, Routes } from "@discloudapp/api-types/v2";
import { readFileSync } from "fs";
import { CreateAppOptions, UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import App from "../structures/App";
import BaseManager from "./BaseManager";

export default class AppManager extends BaseManager {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp);
  }

  async status(appID: string): Promise<ApiAppStatus>
  async status(appID?: "all"): Promise<ApiAppStatus[]>
  async status(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppStatusResult
      | RESTGetApiAppAllStatusResult
    >(Routes.appStatus(appID));

    return data.apps;
  }

  async terminal(appID: string): Promise<ApiTerminal>
  async terminal(appID?: "all"): Promise<Map<string, ApiTerminal>>
  async terminal(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppLogResult
      | RESTGetApiAppAllLogResult
    >(Routes.appLogs(appID));
    const logs = new Map<string, ApiTerminal>();

    if (Array.isArray(data.apps)) {
      for (let i = 0; i < data.apps.length; i++) {
        const app = data.apps[i];

        logs.set(app.id, app.terminal);
      }
    } else {
      return data.apps.terminal;
    }

    return logs;
  }

  async backup(appID: string): Promise<ApiAppBackup>
  async backup(appID?: "all"): Promise<ApiAppBackup[]>
  async backup(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppBackupResult
      | RESTGetApiAppAllBackupResult
    >(Routes.appBackup(appID));

    return data.backups;
  }

  async ram(appID: string, quantity: number) {
    const data = await this.discloudApp.rest.put(Routes.appRam(appID), {
      body: {
        ramMB: quantity
      }
    });

    return data.status === "ok";
  }

  async create(options: CreateAppOptions) {
    if (typeof options.file === "string")
      options.file = {
        data: readFileSync(options.file),
        name: options.file.split("/").pop()!,
        key: "file"
      };

    const data = await this.discloudApp.rest.post<RESTPostApiUploadResult>(Routes.upload(), {
      file: options.file
    });

    if ("app" in data) {
      const app = new App(this.discloudApp, data.app);

      return { ...data, app };
    }

    return data;
  }

  async update(appID: string, options: UpdateAppOptions) {
    if (typeof options.file === "string")
      options.file = {
        data: readFileSync(options.file),
        name: options.file.split("/").pop()!,
        key: "file"
      };

    const data = await this.discloudApp.rest.put<RESTPutApiAppCommitResult>(Routes.appCommit(appID), {
      file: options.file
    });

    return data;
  }

  async delete(appID: string): Promise<boolean>
  async delete(appID?: "all"): Promise<ApiAppManager>
  async delete(appID = "all") {
    const data = await this.discloudApp.rest.delete<
      | RESTDeleteApiAppDeleteResult
      | RESTDeleteApiAppAllDeleteResult
    >(Routes.appDelete(appID));

    if ("apps" in data) return data.apps;

    return data.status === "ok";
  }

  async restart(appID: string): Promise<boolean>
  async restart(appID?: "all"): Promise<ApiAppManager>
  async restart(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppRestartResult
      | RESTPutApiAppAllRestartResult
    >(Routes.appRestart(appID));

    if ("apps" in data) return data.apps;

    return data.status === "ok";
  }

  async start(appID: string): Promise<boolean>
  async start(appID?: "all"): Promise<ApiAppManager>
  async start(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppStartResult
      | RESTPutApiAppAllStartResult
    >(Routes.appStart(appID));

    if ("apps" in data) return data.apps;

    return data.status === "ok";
  }

  async stop(appID: string): Promise<boolean>
  async stop(appID?: "all"): Promise<ApiAppManager>
  async stop(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppStopResult
      | RESTPutApiAppAllStopResult
    >(Routes.appStop(appID));

    if ("apps" in data) return data.apps;

    return data.status === "ok";
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