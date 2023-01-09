import { ApiApp } from "@discloudapp/api-types/v2";
import { UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import BaseApp from "./BaseApp";

export default class App extends BaseApp {
  // ApiApp
  autoDeployGit;
  exitCode;
  mods;
  online;
  ramKilled;

  constructor(
    discloudApp: DiscloudApp,
    data: ApiApp,
  ) {
    super(discloudApp, data);

    this.autoDeployGit = data.autoDeployGit;
    this.exitCode = data.exitCode;
    this.mods = data.mods ?? [];
    this.online = data.online ?? false;
    this.ramKilled = data.ramKilled;
  }

  async restart() {
    const data = await super.restart();

    this.online = data.status === "ok";

    return data;
  }

  async start() {
    const data = await super.start();

    this.online = data.status === "ok";

    return data;
  }

  async stop() {
    const data = await super.stop();

    this.online = data.status === "ok";

    return data;
  }

  async update(options: UpdateAppOptions) {
    const data = await super.update(options);

    this.online = data.statusCode === 200;

    return data;
  }
}