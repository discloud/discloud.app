import { ApiTeamApps } from "@discloudapp/api-types/v2";
import { ModPermissionsFlags } from "@discloudapp/util";
import { UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class Team extends Base {
  /**
   * Your team application id
   */
  id!: string;
  /**
   * Your team's app exit code on stop
   */
  exitCode!: number;
  /**
   * Your team's app programming language
   */
  lang!: string;
  /**
   * Your team application name
   */
  name!: string;
  /**
   * If your team application is online
   */
  online!: boolean;
  /**
   * Your permissions to manage this application.
   */
  perms: string[] = [];
  /**
   * If your team's app stopped due to low RAM
   */
  ramKilled!: boolean;

  constructor(discloudApp: DiscloudApp, data: ApiTeamApps) {
    super(discloudApp);

    this._patch(data);
  }

  protected _patch(data: ApiTeamApps): this {
    if ("id" in data)
      this.id = data.id;

    if ("exitCode" in data)
      this.exitCode = data.exitCode;

    if ("lang" in data)
      this.lang = data.lang;

    if ("name" in data)
      this.name = data.name;

    if ("online" in data)
      this.online = data.online;

    if ("perms" in data)
      this.perms = data.perms as ModPermissionsFlags[];

    if ("ramKilled" in data)
      this.ramKilled = data.ramKilled;

    return super._patch(data);
  }

  /**
   * Get backups for the app of your team on Discloud
   */
  backup() {
    return this.discloudApp.team.backup(this.id);
  }

  /**
   * Set the quantity of ram to application of your team
   * 
   * @param quantity - Minimum values is `100` to `bot` or `512` for `site`
   * @returns Promise {@link RESTPutApiAppRamResult}
   */
  setRam(quantity: number) {
    return this.discloudApp.team.ram(this.id, quantity);
  }

  /**
   * Get the status for the app of your team on Discloud
   */
  status() {
    return this.discloudApp.team.status(this.id);
  }

  /**
   * Get logs for the app of your team on Discloud
   */
  terminal() {
    return this.discloudApp.team.terminal(this.id);
  }

  /**
   * Update an of your team apps on Discloud
   * 
   * @param options - Options to update your app.
   * @returns Promise {@link RESTPutApiAppCommitResult}
   */
  update(options: UpdateAppOptions) {
    return this.discloudApp.team.update(this.id, options);
  }

  /**
   * Restart your team application on Discloud
   */
  async restart() {
    const data = await this.discloudApp.team.restart(this.id);

    this.online = data.status === "ok";

    return data;
  }

  /**
   * Start your team application on Discloud
   */
  async start() {
    const data = await this.discloudApp.team.start(this.id);

    this.online = data.status === "ok";

    return data;
  }

  /**
   * Stop your team application on Discloud
   */
  async stop() {
    const data = await this.discloudApp.team.stop(this.id);

    this.online = !(data.status === "ok");

    return data;
  }

  /**
   * @returns app id
   */
  toString() {
    return this.id;
  }
}