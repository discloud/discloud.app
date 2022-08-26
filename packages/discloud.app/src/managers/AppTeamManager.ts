import { RESTGetApiAppTeamResult, Routes } from "@discloudapp/api-types/v2";
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

  async create(modID: string, perms: ModPermissionsResolvable): Promise<unknown> {
    const data = await this.discloudApp.rest.post(Routes.appTeam(this.app.id), {
      body: {
        modID,
        perms: new ModPermissionsBF(perms).toArray()
      }
    });

    return data;
  }

  async edit(modID: string, perms: ModPermissionsResolvable): Promise<unknown> {
    const data = await this.discloudApp.rest.put(Routes.appTeam(this.app.id), {
      body: {
        modID,
        perms: new ModPermissionsBF(perms).toArray()
      }
    });

    return data;
  }

  async delete(modID: string): Promise<unknown> {
    const data = await this.discloudApp.rest.delete(Routes.appTeam(this.app.id, modID));

    return data;
  }

  async fetch() {
    const data = await this.discloudApp.rest.get<RESTGetApiAppTeamResult>(Routes.appTeam(this.app.id));

    return data.team;
  }
}