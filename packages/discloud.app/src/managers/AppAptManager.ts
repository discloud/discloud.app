import { APTString, RESTDeleteApiAppAptResult, RESTPutApiAppAptResult, Routes } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import BaseApp from "../structures/BaseApp";
import BaseManager from "./BaseManager";

/**
 * Manager for APT on your application on Discloud
 */
export default class AppAptManager<T extends BaseApp> extends BaseManager {
  constructor(discloudApp: DiscloudApp, public readonly app: T) {
    super(discloudApp);
  }

  /**
   * Install APTs for your application on Discloud
   * 
   * @param apt - One or more APTs to install. See {@link AptString}.
   * @returns Promise {@link RESTPutApiAppAptResult}
   */
  async install(apt: APTString | APTString[]): Promise<RESTPutApiAppAptResult> {
    if (Array.isArray(apt)) apt = <APTString>apt.join();

    const data = await this.discloudApp.rest.put<RESTPutApiAppAptResult>(Routes.appApt(this.app.id), {
      body: {
        apt,
      },
    });

    return data;
  }


  /**
   * Uninstall APTs for your application on Discloud
   * 
   * @param apt - One or more APTs to uninstall. See {@link AptString}.
   * @returns Promise {@link RESTDeleteApiAppAptResult}
   */
  async uninstall(apt: APTString | APTString[]): Promise<RESTDeleteApiAppAptResult> {
    if (Array.isArray(apt)) apt = <APTString>apt.join();

    const data = await this.discloudApp.rest.delete<RESTDeleteApiAppAptResult>(Routes.appApt(this.app.id), {
      body: {
        apt,
      },
    });

    return data;
  }
}