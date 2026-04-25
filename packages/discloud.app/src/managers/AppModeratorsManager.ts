import { type ModPermissionsResolvable } from "@discloudapp/util";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import type AppModerator from "../structures/AppModerator";
import BaseManager from "./BaseManager";

/**
 * Manager for Team on your application on Discloud
 */
export default class AppModeratorsManager extends BaseManager {
  constructor(discloudApp: DiscloudApp, readonly appID: string) {
    super(discloudApp);
  }

  /**
   * Add a mod for you application on Discloud
   * 
   * @param modID - The mod id
   * @param perms - The permissions for the mod. See {@link ModPermissionsResolvable}
   */
  create(modID: string, perms: ModPermissionsResolvable): Promise<AppModerator> {
    return this.discloudApp.apps.moderators.create(this.appID, modID, perms);
  }

  /**
   * Edit permissions of a mod for you application on Discloud
   * 
   * @param modID - The mod id
   * @param perms - The permissions for the mod. See {@link ModPermissionsResolvable}
   */
  edit(modID: string, perms: ModPermissionsResolvable): Promise<AppModerator> {
    return this.discloudApp.apps.moderators.edit(this.appID, modID, perms);
  }


  /**
   * Remove a mod from you application on Discloud
   * 
   * @param modID - The mod id
   */
  delete(modID: string): Promise<void> {
    return this.discloudApp.apps.moderators.delete(this.appID, modID);
  }

  /**
   * Get mods information for your app on Discloud
   */
  fetch(): Promise<Map<string, AppModerator>> {
    return this.discloudApp.apps.moderators.fetch(this.appID);
  }
}
