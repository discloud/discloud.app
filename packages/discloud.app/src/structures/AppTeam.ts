import { BaseApiApp } from "@discloudapp/api-types/v2";
import { ModPermissionsResolvable } from "@discloudapp/util";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class AppTeam extends Base {
  declare readonly appId: string;

  constructor(discloudApp: DiscloudApp, data: BaseApiApp) {
    super(discloudApp);

    this.appId = data.id;
  }

  protected _patch(data: BaseApiApp): this {
    return super._patch(data);
  }

  create(modID: string, perms: ModPermissionsResolvable) {
    return this.discloudApp.appTeam.create(this.appId, modID, perms);
  }

  edit(modID: string, perms: ModPermissionsResolvable) {
    return this.discloudApp.appTeam.edit(this.appId, modID, perms);
  }

  delete(modID: string) {
    return this.discloudApp.appTeam.delete(this.appId, modID);
  }

  fetch() {
    return this.discloudApp.appTeam.fetch(this.appId);
  }
}