import { ApiAppBackup, ApiAppManager, ApiAppStatus, ApiTerminal, RESTGetApiAppAllBackupResult, RESTGetApiAppAllLogResult, RESTGetApiAppAllStatusResult, RESTGetApiAppBackupResult, RESTGetApiAppLogResult, RESTGetApiAppStatusResult, RESTGetApiTeamResult, RESTPutApiAppAllRestartResult, RESTPutApiAppAllStartResult, RESTPutApiAppAllStopResult, RESTPutApiAppRamResult, RESTPutApiAppRestartResult, RESTPutApiAppStartResult, RESTPutApiAppStopResult, Routes } from "@discloudapp/api-types/v2";
import { UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Team from "../structures/Team";
import { resolveFile } from "../util";
import BaseManager from "./BaseManager";

export default class TeamManager extends BaseManager {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp);
  }

  async status(appID: string): Promise<ApiAppStatus>
  async status(appID?: "all"): Promise<ApiAppStatus[]>
  async status(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppStatusResult
      | RESTGetApiAppAllStatusResult
    >(Routes.teamStatus(appID));

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
    >(Routes.teamBackup(appID));

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

  async update(appID: string, options: UpdateAppOptions) {
    if (typeof options.file === "string")
      options.file = await resolveFile(options.file);

    const data = await this.discloudApp.rest.put(Routes.teamCommit(appID), {
      file: options.file,
    });

    return data;
  }

  async restart(appID: string): Promise<RESTPutApiAppRestartResult>
  async restart(appID?: "all"): Promise<ApiAppManager & { restarted: string[] }>
  async restart(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppRestartResult
      | RESTPutApiAppAllRestartResult
    >(Routes.teamRestart(appID));

    if ("apps" in data) return data.apps;

    return data;
  }

  async start(appID: string): Promise<RESTPutApiAppStartResult>
  async start(appID?: "all"): Promise<ApiAppManager & { started: string[] }>
  async start(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppStartResult
      | RESTPutApiAppAllStartResult
    >(Routes.teamStart(appID));

    if ("apps" in data) return data.apps;

    return data;
  }

  async stop(appID: string): Promise<RESTPutApiAppStopResult>
  async stop(appID?: "all"): Promise<ApiAppManager & { stoped: string[] }>
  async stop(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppStopResult
      | RESTPutApiAppAllStopResult
    >(Routes.teamStop(appID));

    if ("apps" in data) return data.apps;

    return data;
  }

  async fetch() {
    const data = await this.discloudApp.rest.get<RESTGetApiTeamResult>(Routes.team());

    const apps = new Map<string, Team>();

    for (let i = 0; i < data.apps.length; i++) {
      const app = data.apps[i];

      apps.set(app.id, new Team(this.discloudApp, app));
    }

    return apps;
  }
}