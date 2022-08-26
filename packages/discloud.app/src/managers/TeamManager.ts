import { RESTGetApiTeamResult, Routes } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Team from "../structures/Team";
import BaseManager from "./BaseManager";

export default class TeamManager extends BaseManager {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp);
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