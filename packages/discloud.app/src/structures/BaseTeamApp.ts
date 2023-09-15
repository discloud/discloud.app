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

    if ("id" in data)
      this.id = data.id;
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
    return this.discloudApp.teamApps.backup(this.id);
  }

  /**
   * Set the quantity of ram to application of your team
   * 
   * @param quantity - Minimum values is `100` to `bot` or `512` for `site`
   */
  setRam(quantity: number) {
    return this.discloudApp.teamApps.ram(this.id, quantity);
  }

  /**
   * Get logs for the app of your team on Discloud
   */
  terminal() {
    return this.discloudApp.teamApps.terminal(this.id);
  }

  /**
   * Update an of your team apps on Discloud
   * 
   * @param options - Options to update your app.
   */
  update(options: UpdateAppOptions) {
    return this.discloudApp.teamApps.update(this.id, options);
  }

  /**
   * Restart your team application on Discloud
   */
  async restart() {
    return this.discloudApp.teamApps.restart(this.id);
  }

  /**
   * Start your team application on Discloud
   */
  start() {
    return this.discloudApp.teamApps.start(this.id);
  }

  /**
   * Stop your team application on Discloud
   */
  stop() {
    return this.discloudApp.teamApps.stop(this.id);
  }

  /**
   */
  toString() {
    return this.id;
  }
}