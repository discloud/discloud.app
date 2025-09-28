import { Routes, type APTString, type RESTDeleteApiAppAptResult, type RESTPutApiAppAptResult } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import { validateNonEmptyString } from "../util/assertions";
import BaseManager from "./BaseManager";

/**
 * Manager for APT on your application on Discloud
 */
export default class AppAptManager extends BaseManager {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp);
  }

  /**
   * Install APTs for your application on Discloud
   * 
   * @param appID - The app id
   * @param apt - One or more APTs to install. See {@link AptString}.
   */
  async install(appID: string, apt: APTString | APTString[]): Promise<RESTPutApiAppAptResult> {
    validateNonEmptyString(appID);

    if (Array.isArray(apt)) apt = <APTString>apt.join();

    const data = await this.discloudApp.rest.put<RESTPutApiAppAptResult>(Routes.appApt(appID), { body: { apt } });

    return data;
  }

  /**
   * Uninstall APTs for your application on Discloud
   * 
   * @param appID - The app id
   * @param apt - One or more APTs to uninstall. See {@link AptString}.
   */
  async uninstall(appID: string, apt: APTString | APTString[]): Promise<RESTDeleteApiAppAptResult> {
    validateNonEmptyString(appID);

    if (Array.isArray(apt)) apt = <APTString>apt.join();

    const data = await this.discloudApp.rest.delete<RESTDeleteApiAppAptResult>(Routes.appApt(appID), {
      body: {
        apt,
      },
    });

    return data;
  }
}