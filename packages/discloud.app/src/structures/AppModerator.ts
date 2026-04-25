import type { ApiAppTeam } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class AppModerator extends Base {
  constructor(discloudApp: DiscloudApp, readonly appId: string, data: ApiAppTeam) {
    super(discloudApp);

    this.modID = data.modID;

    this._patch(data);
  }

  protected _patch(data: Partial<ApiAppTeam>): this {
    if (Array.isArray(data.perms)) {
      this.perms.clear();

      for (const mod of data.perms) {
        this.perms.add(mod);
      }
    }

    if (data.avatar !== undefined)
      this.avatar = data.avatar!;

    if (data.username !== undefined)
      this.username = data.username!;

    return super._patch(data);
  }

  declare readonly modID: string;
  readonly perms = new Set<string>();
  declare avatar: string | null;
  declare username: string | null;

  get app() {
    return this.discloudApp.apps.cache.get(this.appId);
  }
}