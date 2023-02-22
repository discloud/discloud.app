import { APTString, BaseApiApp } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class AppApt extends Base {
  declare appId: string;

  constructor(discloudApp: DiscloudApp, data: BaseApiApp) {
    super(discloudApp);

    this._patch(data);
  }

  install(apt: APTString | APTString[]) {
    return this.discloudApp.appApt.install(this.appId, apt);
  }

  uninstall(apt: APTString | APTString[]) {
    return this.discloudApp.appApt.uninstall(this.appId, apt);
  }

  protected _patch(data: BaseApiApp): this {
    this.appId = data.id;

    return super._patch(data);
  }
}