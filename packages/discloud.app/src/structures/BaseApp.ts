import { BaseApiApp } from "@discloudapp/api-types/v2";
import { ProfileOptions, UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

/**
 * Base for app structures
 */
export default abstract class BaseApp extends Base {
  /**
   * Your app id
   */
  declare readonly id: string;

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
   * Set the quantity of ram to your application
   * 
   * @param quantity - Minimum values is `100` to `bot` or `512` for `site`
   */
  setRam(quantity: number) {
    return this.discloudApp.apps.ram(this.id, quantity);
  }

  /**
   * Get backups of your application on Discloud
   */
  backup() {
    return this.discloudApp.apps.backup(this.id);
  }

  /**
   * Send a command to your app's terminal
   * 
   * @param command - The command
   */
  console(command: string) {
    return this.discloudApp.apps.console(this.id, command);
  }

  /**
   * Get logs of your application on Discloud
   */
  terminal() {
    return this.discloudApp.apps.terminal(this.id);
  }

  /**
   * Delete your application from Discloud.
   */
  delete() {
    return this.discloudApp.apps.delete(this.id);
  }

  profile(options: ProfileOptions) {
    return this.discloudApp.apps.profile(this.id, options);
  }

  /**
   * Restart your application on Discloud
   */
  restart() {
    return this.discloudApp.apps.restart(this.id);
  }

  /**
   * Start your application on Discloud
   */
  start() {
    return this.discloudApp.apps.start(this.id);
  }

  /**
   * Stop your application on Discloud
   * 
   * @param appID - You app id
   */
  stop() {
    return this.discloudApp.apps.stop(this.id);
  }

  /**
   * Update an of your apps on Discloud.
   * 
   * @param options - Options to update your app.
   */
  update(options: UpdateAppOptions) {
    return this.discloudApp.apps.update(this.id, options);
  }

  /**
   */
  toString() {
    return this.id;
  }
}