import { ApiStatusApp, ApiTeamApps } from "@discloudapp/api-types/v2";
import { ModPermissionsBF, ModPermissionsFlags } from "@discloudapp/util";
import DiscloudApp from "../discloudApp/DiscloudApp";
import BaseTeamApp from "./BaseTeamApp";
import TeamAppStatus from "./TeamAppStatus";

export default class TeamApp extends BaseTeamApp {
  /**
   * Your team's app exit code on stop
   */
  declare exitCode: number;
  /**
   * Your team's app programming language
   */
  declare lang: string;
  /**
   * Your team application name
   */
  declare name: string;
  /**
   * If your team application is online
   */
  declare online: boolean;
  /**
   * Your permissions to manage this application.
   */
  readonly perms = new Set<ModPermissionsFlags>();
  /**
   * If your team's app stopped due to low RAM
   */
  declare ramKilled: boolean;

  declare status: TeamAppStatus;

  constructor(discloudApp: DiscloudApp, data: ApiTeamApps) {
    super(discloudApp, data);

    this._patch(data);
  }

  protected _patch(data: ApiTeamApps | ApiStatusApp): this {
    if ("exitCode" in data)
      this.exitCode = data.exitCode;

    if ("lang" in data)
      this.lang = data.lang;

    if ("name" in data)
      this.name = data.name;

    if ("online" in data)
      this.online = data.online;

    if ("perms" in data) 
      if (Array.isArray(data.perms)) {
        this.perms.clear();

        for (const perm of new ModPermissionsBF(<ModPermissionsFlags[]>data.perms).toArray()) {
          this.perms.add(perm);
        }
      }

    if ("ramKilled" in data)
      this.ramKilled = data.ramKilled;

    this.status ??= new TeamAppStatus(this.discloudApp, <ApiStatusApp>data);

    return super._patch(data);
  }
}