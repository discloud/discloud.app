import { Routes, type ApiAppTeamManager, type RESTDeleteApiAppTeamResult, type RESTGetApiAppTeamResult, type RESTPostApiAppTeamResult, type RESTPutApiAppTeamResult } from "@discloudapp/api-types/v2";
import { ModPermissionsBF, type ModPermissionsResolvable } from "@discloudapp/util";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import { validateNonEmptyString } from "../util/assertions";
import BaseManager from "./BaseManager";

/**
 * Manager for Team on your application on Discloud
 */
export default class AppTeamManager extends BaseManager {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp);
  }

  /**
   * Add a mod for you application on Discloud
   * 
   * @param appID - The app id
   * @param modID - The mod id
   * @param perms - The permissions for the mod. See {@link ModPermissionsResolvable}
   */
  async create(appID: string, modID: string, perms: ModPermissionsResolvable): Promise<ApiAppTeamManager> {
    validateNonEmptyString(appID);
    validateNonEmptyString(modID);

    const data = await this.discloudApp.rest.post<RESTPostApiAppTeamResult>(Routes.appTeam(appID), {
      body: {
        modID,
        perms: new ModPermissionsBF(perms).toArray(),
      },
    });

    return data.app;
  }

  /**
   * Edit permissions of a mod for you application on Discloud
   * 
   * @param appID - The app id
   * @param modID - The mod id
   * @param perms - The permissions for the mod. See {@link ModPermissionsResolvable}
   */
  async edit(appID: string, modID: string, perms: ModPermissionsResolvable): Promise<ApiAppTeamManager> {
    validateNonEmptyString(appID);
    validateNonEmptyString(modID);

    const data = await this.discloudApp.rest.put<RESTPutApiAppTeamResult>(Routes.appTeam(appID), {
      body: {
        modID,
        perms: new ModPermissionsBF(perms).toArray(),
      },
    });

    return data.app;
  }


  /**
   * Remove a mod from you application on Discloud
   * 
   * @param appID - The app id
   * @param modID - The mod id
   */
  async delete(appID: string, modID: string): Promise<RESTDeleteApiAppTeamResult> {
    validateNonEmptyString(appID);
    validateNonEmptyString(modID);

    const data = await this.discloudApp.rest.delete<
      RESTDeleteApiAppTeamResult
    >(Routes.appTeam(appID, modID));

    return data;
  }

  /**
   * Get mods information for your app on Discloud
   */
  async fetch(appID: string) {
    validateNonEmptyString(appID);

    const data = await this.discloudApp.rest.get<RESTGetApiAppTeamResult>(Routes.appTeam(appID));

    return data.team;
  }
}