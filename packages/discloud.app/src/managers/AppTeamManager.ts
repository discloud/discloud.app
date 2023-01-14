import { ApiAppTeamManager, RESTDeleteApiAppTeamResult, RESTGetApiAppTeamResult, RESTPostApiAppTeamResult, RESTPutApiAppTeamResult, Routes } from "@discloudapp/api-types/v2";
import { ModPermissionsBF, ModPermissionsResolvable } from "@discloudapp/util";
import DiscloudApp from "../discloudApp/DiscloudApp";
import BaseApp from "../structures/BaseApp";
import BaseManager from "./BaseManager";

/**
 * Manager for Team on your application on Discloud
 */
export default class AppTeamManager<T extends BaseApp> extends BaseManager {
  constructor(discloudApp: DiscloudApp, public readonly app: T) {
    super(discloudApp);
  }

  /**
   * Add a mod for you application on Discloud
   * 
   * @param modID - The mod id
   * @param perms - The permissions for the mod. See {@link ModPermissionsResolvable}
   * @returns Promise {@link ApiAppTeamManager}
   */
  async create(modID: string, perms: ModPermissionsResolvable): Promise<ApiAppTeamManager> {
    const data = await this.discloudApp.rest.post<RESTPostApiAppTeamResult>(Routes.appTeam(this.app.id), {
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
   * @param modID - The mod id
   * @param perms - The permissions for the mod. See {@link ModPermissionsResolvable}
   * @returns Promise {@link ApiAppTeamManager}
   */
  async edit(modID: string, perms: ModPermissionsResolvable): Promise<ApiAppTeamManager> {
    const data = await this.discloudApp.rest.put<RESTPutApiAppTeamResult>(Routes.appTeam(this.app.id), {
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
   * @param modID - The mod id
   * @returns Promise {@link RESTDeleteApiAppTeamResult}
   */
  async delete(modID: string): Promise<RESTDeleteApiAppTeamResult> {
    const data = await this.discloudApp.rest.delete<
      RESTDeleteApiAppTeamResult
    >(Routes.appTeam(this.app.id, modID));

    return data;
  }

  /**
   * Get mods information for your app on Discloud
   * 
   * @returns Promise {@link RESTGetApiAppTeamResult}
   */
  async fetch() {
    const data = await this.discloudApp.rest.get<RESTGetApiAppTeamResult>(Routes.appTeam(this.app.id));

    return data.team;
  }
}