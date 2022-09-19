import { ApiApp, ApiUploadApp } from "@discloudapp/api-types/v2";
import { UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import AppAptManager from "../managers/AppAptManager";
import AppTeamManager from "../managers/AppTeamManager";
import Base from "./Base";

export default class App extends Base {
  // both
  autoRestart;
  id;
  lang;
  mainFile;
  name;
  ram;

  // ApiApp
  autoDeployGit;
  mods;
  online;
  ramKilled;

  // ApiUploadApp
  addedAtTimestamp;
  avatarURL;
  type;
  version;

  team: AppTeamManager;
  apt: AppAptManager;

  constructor(
    discloudApp: DiscloudApp,
    data: (ApiApp | ApiUploadApp) & Partial<ApiApp & ApiUploadApp>,
  ) {
    super(discloudApp);

    this.addedAtTimestamp = data.addedAtTimestamp;
    this.autoDeployGit = data.autoDeployGit;
    this.autoRestart = data.autoRestart;
    this.avatarURL = data.avatarURL;
    this.id = data.id;
    this.lang = data.lang;
    this.mainFile = data.mainFile;
    this.mods = data.mods ?? [];
    this.name = data.name;
    this.online = data.online ?? true;
    this.ram = data.ram;
    this.ramKilled = data.ramKilled;
    this.type = data.type;
    this.version = data.version;

    this.team = new AppTeamManager(this.discloudApp, this);
    this.apt = new AppAptManager(this.discloudApp, this);
  }

  backup() {
    return this.discloudApp.apps.backup(this.id);
  }

  async setRam(quantity: number) {
    const data = await this.discloudApp.apps.ram(this.id, quantity);

    if (data.statusCode === 200)
      this.ram = quantity;

    return data;
  }

  terminal() {
    return this.discloudApp.apps.terminal(this.id);
  }

  delete() {
    return this.discloudApp.apps.delete(this.id);
  }

  async update(options: UpdateAppOptions) {
    const data = await this.discloudApp.apps.update(this.id, options);

    this.online = data.statusCode === 200;

    return data;
  }

  status() {
    return this.discloudApp.apps.status(this.id);
  }

  async restart() {
    const data = await this.discloudApp.apps.restart(this.id);

    this.online = data.status === "ok";

    return data;
  }

  async start() {
    const data = await this.discloudApp.apps.start(this.id);

    this.online = data.status === "ok";

    return data;
  }

  async stop() {
    const data = await this.discloudApp.apps.stop(this.id);

    this.online = data.status === "ok";

    return data;
  }

  toString() {
    return this.id;
  }
}