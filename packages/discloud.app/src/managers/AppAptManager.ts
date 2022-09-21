import { RESTDeleteApiAppAptResult, RESTPutApiAppAptResult, Routes } from "@discloudapp/api-types/v2";
import { AptString } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import BaseApp from "../structures/BaseApp";
import BaseManager from "./BaseManager";

export default class AppAptManager<T extends BaseApp> extends BaseManager {
  constructor(discloudApp: DiscloudApp, public app: T) {
    super(discloudApp);
  }

  async install(apt: AptString): Promise<RESTPutApiAppAptResult> {
    const data = await this.discloudApp.rest.put<RESTPutApiAppAptResult>(Routes.appApt(this.app.id), {
      body: {
        apt,
      },
    });

    return data;
  }

  async uninstall(apt: AptString): Promise<RESTDeleteApiAppAptResult> {
    const data = await this.discloudApp.rest.delete<RESTDeleteApiAppAptResult>(Routes.appApt(this.app.id), {
      body: {
        apt,
      },
    });

    return data;
  }
}