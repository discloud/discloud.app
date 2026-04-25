import type { BaseApiApp } from "@discloudapp/api-types/v2";
import type { UpdateAppOptions } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

/**
 * Base for app structures
 */
export default abstract class BaseSharedApp extends Base {
  /**
   * Your app id
   */
  readonly id: string;

  constructor(
    discloudApp: DiscloudApp,
    data: BaseApiApp,
  ) {
    super(discloudApp);

    this.id = data.id;
  }

  protected _patch(data: Partial<BaseApiApp>) {
    return super._patch(data);
  }

  /**
   * Get backups for the app of your team on Discloud
   */
  backup() {
    return this.discloudApp.sharedApps.backup(this.id);
  }

  /**
   * Set the quantity of ram to application of your team
   * 
   * @param quantity - Minimum values is `100` to `bot` or `512` for `site`
   */
  setRam(quantity: number) {
    return this.discloudApp.sharedApps.ram(this.id, quantity);
  }

  /**
   * Get logs for the app of your team on Discloud
   */
  terminal() {
    return this.discloudApp.sharedApps.terminal(this.id);
  }

  /**
   * Update an of your team apps on Discloud
   * 
   * @param options - Options to update your app.
   */
  update(options: UpdateAppOptions) {
    return this.discloudApp.sharedApps.update(this.id, options);
  }

  /**
   * Restart your team application on Discloud
   */
  restart() {
    return this.discloudApp.sharedApps.restart(this.id);
  }

  /**
   * Start your team application on Discloud
   */
  start() {
    return this.discloudApp.sharedApps.start(this.id);
  }

  /**
   * Stop your team application on Discloud
   */
  stop() {
    return this.discloudApp.sharedApps.stop(this.id);
  }

  /**
   */
  toString() {
    return this.id;
  }
}