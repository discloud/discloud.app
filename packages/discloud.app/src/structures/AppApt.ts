import type { APTString } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class AppApt extends Base {
  constructor(discloudApp: DiscloudApp, readonly appId: string) {
    super(discloudApp);
  }

  install(apt: APTString | APTString[]) {
    return this.discloudApp.apps.apts.install(this.appId, apt);
  }

  uninstall(apt: APTString | APTString[]) {
    return this.discloudApp.apps.apts.uninstall(this.appId, apt);
  }
}