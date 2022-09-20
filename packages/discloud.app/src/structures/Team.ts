import { ApiTeamApps } from "@discloudapp/api-types/v2";
import { ModPermissionsFlags, UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class Team extends Base {
  id;
  exitCode;
  lang;
  name;
  online;
  perms: ModPermissionsFlags[];
  ramKilled;

  constructor(discloudApp: DiscloudApp, data: ApiTeamApps) {
    super(discloudApp);

    this.id = data.id;
    this.exitCode = data.exitCode;
    this.lang = data.lang;
    this.name = data.name;
    this.online = data.online;
    this.perms = data.perms as ModPermissionsFlags[];
    this.ramKilled = data.ramKilled;
  }

  backup() {
    return this.discloudApp.team.backup(this.id);
  }

  setRam(quantity: number) {
    return this.discloudApp.team.ram(this.id, quantity);
  }

  status() {
    return this.discloudApp.team.status(this.id);
  }

  terminal() {
    return this.discloudApp.team.terminal(this.id);
  }

  update(options: UpdateAppOptions) {
    return this.discloudApp.team.update(this.id, options);
  }

  async restart() {
    const data = await this.discloudApp.team.restart(this.id);

    this.online = data.status === "ok";

    return data;
  }

  async start() {
    const data = await this.discloudApp.team.start(this.id);

    this.online = data.status === "ok";

    return data;
  }

  async stop() {
    const data = await this.discloudApp.team.stop(this.id);

    this.online = data.status === "ok";

    return data;
  }

  toString() {
    return this.id;
  }
}