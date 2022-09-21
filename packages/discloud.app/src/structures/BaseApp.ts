import { ApiApp, ApiUploadApp } from "@discloudapp/api-types/v2";
import { UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import AppAptManager from "../managers/AppAptManager";
import AppTeamManager from "../managers/AppTeamManager";
import Base from "./Base";

abstract class BaseApp extends Base {
  // both
  autoRestart;
  id;
  lang;
  mainFile;
  name;
  ram;

  #apt: AppAptManager<this>;
  #team: AppTeamManager<this>;

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

    this.#apt = new AppAptManager(discloudApp, this);
    this.#team = new AppTeamManager(discloudApp, this);
  }

  get apt() {
    return this.#apt;
  }

  get team() {
    return this.#team;
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