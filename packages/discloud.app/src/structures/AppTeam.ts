import type { BaseApiApp } from "@discloudapp/api-types/v2";
import type { ModPermissionsResolvable } from "@discloudapp/util";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class AppTeam extends Base {
  constructor(discloudApp: DiscloudApp, data: BaseApiApp) {
    super(discloudApp);

    this.appId = data.id;
  }

  readonly appId: string;
  declare avatar: string | null;
  declare username: string | null;

  protected _patch(data: BaseApiApp): this {
    if ("avatar" in data) this.avatar = data.avatar as string | null;

    if ("username" in data) this.username = data.username as string | null;

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