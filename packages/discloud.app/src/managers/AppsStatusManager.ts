import { type RESTGetApiAppStatusResult, Routes } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import AppStatus from "../structures/AppStatus";
import { validateNonEmptyString } from "../util/assertions";
import BaseAppsStatusManager from "./BaseAppsStatusManager";

export default class AppsStatusManager extends BaseAppsStatusManager<typeof AppStatus> {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp, AppStatus);
  }

  /**
   * Get the status of your application on Discloud
   * 
   * @param appID - Your app id
   */
  async fetch(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.get<RESTGetApiAppStatusResult>(Routes.appStatus(appID));

    return this._add(data.apps);
  }
}
