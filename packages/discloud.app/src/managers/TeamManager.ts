import { ApiAppManagerRestartedAll, ApiAppManagerStartedAll, ApiAppManagerStopedAll, ApiAppStatus, ApiTerminal, RESTGetApiAppAllBackupResult, RESTGetApiAppAllLogResult, RESTGetApiAppAllStatusResult, RESTGetApiAppBackupResult, RESTGetApiAppLogResult, RESTGetApiAppStatusResult, RESTGetApiTeamResult, RESTPutApiAppAllRestartResult, RESTPutApiAppAllStartResult, RESTPutApiAppAllStopResult, RESTPutApiAppCommitResult, RESTPutApiAppRamResult, RESTPutApiAppRestartResult, RESTPutApiAppStartResult, RESTPutApiAppStopResult, Routes } from "@discloudapp/api-types/v2";
import { resolveFile } from "@discloudapp/util";
import { File } from "undici";
import { UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import AppBackup from "../structures/AppBackup";
import AppStatus from "../structures/AppStatus";
import Team from "../structures/Team";
import BaseManager from "./BaseManager";

export default class TeamManager extends BaseManager {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp);
  }

  async status(appID: string): Promise<ApiAppStatus>
  async status(appID?: "all"): Promise<Map<string, AppStatus>>
  async status(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppStatusResult
      | RESTGetApiAppAllStatusResult
    >(Routes.teamStatus(appID));

    if (Array.isArray(data.apps)) {
      const status = new Map<string, AppStatus>();

      for (let i = 0; i < data.apps.length; i++) {
        const app = data.apps[i];

        status.set(app.id, new AppStatus(this.discloudApp, app));
      }

      return status;
    }

    return data.apps;
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
  async backup(appID?: "all"): Promise<Map<string, AppBackup>>
  async backup(appID = "all") {
    const data = await this.discloudApp.rest.get<
      | RESTGetApiAppBackupResult
      | RESTGetApiAppAllBackupResult
    >(Routes.teamBackup(appID));

    if (Array.isArray(data.backups)) {
      const backups = new Map<string, AppBackup>();

      for (let i = 0; i < data.backups.length; i++) {
        const backup = data.backups[i];

        backups.set(backup.id, new AppBackup(this.discloudApp, backup));
      }

      return backups;
    }

    return new AppBackup(this.discloudApp, data.backups);
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
    options.file = await resolveFile(options.file);

    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppCommitResult
    >(Routes.teamCommit(appID), {
      file: <File>options.file,
    });

    return data;
  }

  async restart(appID: string): Promise<RESTPutApiAppRestartResult>
  async restart(appID?: "all"): Promise<ApiAppManagerRestartedAll>
  async restart(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppRestartResult
      | RESTPutApiAppAllRestartResult
    >(Routes.teamRestart(appID));

    if ("apps" in data) return data.apps;

    return data;
  }

  async start(appID: string): Promise<RESTPutApiAppStartResult>
  async start(appID?: "all"): Promise<ApiAppManagerStartedAll>
  async start(appID = "all") {
    const data = await this.discloudApp.rest.put<
      | RESTPutApiAppStartResult
      | RESTPutApiAppAllStartResult
    >(Routes.teamStart(appID));

    if ("apps" in data) return data.apps;

    return data;
  }

  async stop(appID: string): Promise<RESTPutApiAppStopResult>
  async stop(appID?: "all"): Promise<ApiAppManagerStopedAll>
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