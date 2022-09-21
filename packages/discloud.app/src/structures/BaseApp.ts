import { ApiApp, ApiUploadApp } from "@discloudapp/api-types/v2";
import { Constructor, UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import AppAptManager from "../managers/AppAptManager";
import AppTeamManager from "../managers/AppTeamManager";
import Base from "./Base";

interface BaseApp {
  constructor: Constructor<this>
}

abstract class BaseApp extends Base {
  // both
  autoRestart;
  id;
  lang;
  mainFile;
  name;
  ram;

  apt: AppAptManager<this>;
  team: AppTeamManager<this>;

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

  protected _patch(data: ApiApp | ApiUploadApp) {
    super._patch(data);
    Object.assign(this, { ...this, ...new this.constructor(this.discloudApp, data) });
    return this;
  }

  async setRam(quantity: number) {
    const data = await this.discloudApp.apps.ram(this.id, quantity);

    if (data.statusCode === 200)
      this.ram = quantity;

    return data;
  }

  backup() {
    return this.discloudApp.apps.backup(this.id);
  }

  terminal() {
    return this.discloudApp.apps.terminal(this.id);
  }

  delete() {
    return this.discloudApp.apps.delete(this.id);
  }

  status() {
    return this.discloudApp.apps.status(this.id);
  }

  toString() {
    return this.id;
  }

  restart() {
    return this.discloudApp.apps.restart(this.id);
  }

  start() {
    return this.discloudApp.apps.start(this.id);
  }

  stop() {
    return this.discloudApp.apps.stop(this.id);
  }

  update(options: UpdateAppOptions) {
    return this.discloudApp.apps.update(this.id, options);
  }
}

export default BaseApp;