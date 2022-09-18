import { ApiTeamApps } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class Team extends Base {
  id;
  exitCode;
  lang;
  name;
  online;
  perms;
  ramKilled;

  constructor(discloudApp: DiscloudApp, data: ApiTeamApps) {
    super(discloudApp);

    this.id = data.id;
    this.exitCode = data.exitCode;
    this.lang = data.lang;
    this.name = data.name;
    this.online = data.online;
    this.perms = data.perms;
    this.ramKilled = data.ramKilled;
  }

  toString() {
    return this.id;
  }
}