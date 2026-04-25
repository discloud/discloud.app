import type DiscloudApp from "../discloudApp/DiscloudApp";
import BaseManager from "./BaseManager";

export default class SharedAppStatusManager extends BaseManager {
  constructor(discloudApp: DiscloudApp, readonly appId: string) {
    super(discloudApp);
  }

  get cache() { return this.discloudApp.apps.status.cache.get(this.appId); }

  /**
   * Get the status of your application on Discloud
   */
  async fetch() {
    await this.discloudApp.apps.status.fetch(this.appId);
  }
}
