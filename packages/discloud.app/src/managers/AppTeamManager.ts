import { ApiAppTeamManager, RESTDeleteApiAppTeamResult, RESTGetApiAppTeamResult, RESTPostApiAppTeamResult, RESTPutApiAppTeamResult, Routes } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import App from "../structures/App";
import ModPermissionsBF, { ModPermissionsResolvable } from "../util/ModPermissionsBF";
import BaseManager from "./BaseManager";

export default class AppTeamManager extends BaseManager {
  app;

  constructor(discloudApp: DiscloudApp, app: App) {
    super(discloudApp);

    this.app = app;
  }

  async create(modID: string, perms: ModPermissionsResolvable): Promise<ApiAppTeamManager> {
    const data = await this.discloudApp.rest.post<RESTPostApiAppTeamResult>(Routes.appTeam(this.app.id), {
      body: {
        modID,
        perms: new ModPermissionsBF(perms).toArray()
      }
    });

    return data.app;
  }

  async edit(modID: string, perms: ModPermissionsResolvable): Promise<ApiAppTeamManager> {
    const data = await this.discloudApp.rest.put<RESTPutApiAppTeamResult>(Routes.appTeam(this.app.id), {
      body: {
        modID,
        perms: new ModPermissionsBF(perms).toArray()
      }
    });

    return data.app;
  }

  async delete(modID: string): Promise<RESTDeleteApiAppTeamResult> {
    const data = await this.discloudApp.rest.delete<
      RESTDeleteApiAppTeamResult
    >(Routes.appTeam(this.app.id, modID));

    return data;
  }

  async fetch() {
    const data = await this.discloudApp.rest.get<RESTGetApiAppTeamResult>(Routes.appTeam(this.app.id));

    return data.team;
  }
}