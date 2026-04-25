import type { ApiTeamApp } from "@discloudapp/api-types/v2";
import type { ModPermissionsString } from "@discloudapp/util";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import SharedAppStatusManager from "../managers/SharedAppStatusManager";
import BaseSharedApp from "./BaseSharedApp";
import SharedAppOwner from "./SharedAppOwner";

export default class SharedApp extends BaseSharedApp {
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

  readonly owner: SharedAppOwner;
  readonly status: SharedAppStatusManager;

  constructor(discloudApp: DiscloudApp, data: ApiTeamApp) {
    super(discloudApp, data);

    this.owner = new SharedAppOwner(this.discloudApp, data.owner);
    this.status = new SharedAppStatusManager(this.discloudApp, data.id);

    this._patch(data);
  }

  protected _patch(data: Partial<ApiTeamApp>): this {
    if (data.exitCode !== undefined)
      this.exitCode = data.exitCode;

    if (data.lang !== undefined)
      this.lang = data.lang;

    if (data.name !== undefined)
      this.name = data.name;

    if (data.online !== undefined)
      this.online = data.online;

    if (Array.isArray(data.perms)) {
      this.perms.clear();

      for (const perm of <ModPermissionsString[]>data.perms) {
        this.perms.add(perm);
      }
    }

    if (data.ramKilled !== undefined)
      this.ramKilled = data.ramKilled;

    return super._patch(data);
  }
}