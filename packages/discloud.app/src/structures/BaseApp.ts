import { ApiApp, ApiUploadApp } from "@discloudapp/api-types/v2";
import { UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import AppAptManager from "../managers/AppAptManager";
import AppTeamManager from "../managers/AppTeamManager";
import Base from "./Base";

/**
 * Base for app structures
 */
abstract class BaseApp extends Base {
  /**
   * If your app has auto-restart enabled
   */
  autoRestart: boolean;
  /**
   * Your app id
   */
  id: string;
  /**
   * Your app programming language
   */
  lang: string;
  /**
   * The main file of your application
   */
  mainFile: string;
  /**
   * The name of your application
   */
  name: string;
  /**
   * The ram quantity for your application
   */
  ram: number;

  readonly apt: AppAptManager<this>;
  readonly team: AppTeamManager<this>;

  constructor(
    discloudApp: DiscloudApp,
    data: ApiApp | ApiUploadApp,
  ) {
    super(discloudApp);

    this.autoRestart = data.autoRestart;
    this.id = data.id;
    this.lang = data.lang;
    this.mainFile = data.mainFile;
    this.name = data.name;
    this.ram = data.ram;

    this.apt = new AppAptManager(discloudApp, this);
    this.team = new AppTeamManager(discloudApp, this);
  }

  /**
   * Set the quantity of ram to your application
   * 
   * @param quantity - Minimum values is `100` to `bot` or `512` for `site`
   * @returns Promise {@link RESTPutApiAppRamResult}
   */
  async setRam(quantity: number) {
    const data = await this.discloudApp.apps.ram(this.id, quantity);

    if (data.statusCode === 200)
      this.ram = quantity;

    return data;
  }

  /**
   * Get backups of your application on Discloud
   */
  backup() {
    return this.discloudApp.apps.backup(this.id);
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

  /**
   * Get the status of your application on Discloud
   */
  status() {
    return this.discloudApp.apps.status(this.id);
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
   * @returns Promise {@link RESTPutApiAppCommitResult}
   */
  update(options: UpdateAppOptions) {
    return this.discloudApp.apps.update(this.id, options);
  }

  /**
   * @returns app id
   */
  toString() {
    return this.id;
  }
}

export default BaseApp;