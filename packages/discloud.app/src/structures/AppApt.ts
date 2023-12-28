import type { APTString, BaseApiApp } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class AppApt extends Base {
  readonly appId: string;

  constructor(discloudApp: DiscloudApp, data: BaseApiApp) {
    super(discloudApp);

    this.appId = data.id;
  }

  protected _patch(data: BaseApiApp): this {
    return super._patch(data);
  }

  install(apt: APTString | APTString[]) {
    return this.discloudApp.appApt.install(this.appId, apt);
  }

  uninstall(apt: APTString | APTString[]) {
    return this.discloudApp.appApt.uninstall(this.appId, apt);
  }
}