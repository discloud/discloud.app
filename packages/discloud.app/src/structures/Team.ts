import { ApiTeamApps } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class Team extends Base {
  id;
  perms;

  constructor(discloudApp: DiscloudApp, data: ApiTeamApps) {
    super(discloudApp);

    this.id = data.id;
    this.perms = data.perms;
  }

  toString() {
    return this.id;
  }
}