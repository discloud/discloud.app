import { type RESTGetApiAppStatusResult, Routes } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import BaseSharedAppStatus from "../structures/BaseSharedAppStatus";
import SharedAppStatus from "../structures/SharedAppStatus";
import { validateNonEmptyString } from "../util/assertions";
import BaseSharedAppsStatusManager from "./BaseSharedAppsStatusManager";

export default class SharedAppsStatusManager extends BaseSharedAppsStatusManager<typeof BaseSharedAppStatus> {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp, BaseSharedAppStatus);
  }

  /**
   * Get the status for the app of your team on Discloud
   * 
   * @param appID - Your shared app id
   */
  async fetch(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.get<RESTGetApiAppStatusResult>(Routes.teamStatus(appID));

    return new SharedAppStatus(this.discloudApp, data.apps);
  }
}
