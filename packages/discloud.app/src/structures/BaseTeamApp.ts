import { BaseApiApp } from "@discloudapp/api-types/v2";
import { UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

/**
 * Base for app structures
 */
export default abstract class BaseTeamApp extends Base {
  /**
   * Your app id
   */
  declare id: string;

  constructor(
    discloudApp: DiscloudApp,
    data: BaseApiApp,
  ) {
    super(discloudApp);

    this._patch(data);
  }

  protected _patch(data: BaseApiApp) {
    if ("id" in data)
      this.id = data.id;

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
    return this.discloudApp.team.restart(this.id);
  }

  /**
   * Start your team application on Discloud
   */
  async start() {
    return this.discloudApp.team.start(this.id);
  }

  /**
   * Stop your team application on Discloud
   */
  async stop() {
    return this.discloudApp.team.stop(this.id);
  }

  /**
   * @returns app id
   */
  toString() {
    return this.id;
  }
}