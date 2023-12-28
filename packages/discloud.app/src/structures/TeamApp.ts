import type { ApiStatusApp, ApiTeamApps, BaseApiApp } from "@discloudapp/api-types/v2";
import type { ModPermissionsString } from "@discloudapp/util";
import type DiscloudApp from "../discloudApp/DiscloudApp";
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
  readonly perms = new Set<ModPermissionsString>();
  /**
   * If your team's app stopped due to low RAM
   */
  declare ramKilled: boolean;

  declare readonly status: TeamAppStatus;

  constructor(discloudApp: DiscloudApp, data: BaseApiApp) {
    super(discloudApp, data);

    Object.defineProperty(this, "status", { value: new TeamAppStatus(this.discloudApp, data) });

    this._patch(data);
  }

  protected _patch(data: Partial<ApiTeamApps | ApiStatusApp>): this {
    if ("exitCode" in data)
      this.exitCode = data.exitCode!;

    if ("lang" in data)
      this.lang = data.lang!;

    if ("name" in data)
      this.name = data.name!;

    if ("online" in data)
      this.online = data.online!;

    if ("perms" in data) 
      if (Array.isArray(data.perms)) {
        this.perms.clear();

        for (const perm of <ModPermissionsString[]>data.perms) {
          this.perms.add(perm);
        }
      }

    if ("ramKilled" in data)
      this.ramKilled = data.ramKilled!;

    // @ts-expect-error ts(2445)
    this.status._patch(data);

    return super._patch(data);
  }
}