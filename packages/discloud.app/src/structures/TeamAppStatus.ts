import { ApiNetIO, ApiStatusApp } from "@discloudapp/api-types/v2";
import { calculatePercentage } from "@discloudapp/util";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class TeamAppStatus extends Base {
  /**
   * Your app id
   */
  declare appId: string;
  /**
   * Status of your application
   * - It can be `Online` or `Offline` for example
   */
  declare container: string;
  /**
   * CPU usage as percentage
   */
  declare cpu: string;
  /**
   * Relative time of the last restart
   */
  declare lastRestart: string;
  /**
   * RAM usage
   */
  declare memory: string;
  /**
   * Percentage of memory usage
   */
  declare memoryUsage: number;
  /**
   * Internet usage
   */
  declare netIO: ApiNetIO;
  /**
   * Storage space
   */
  declare ssd: string;
  /**
   * Date of your application has started
   */
  declare startedAt: Date;
  /**
   * Timestamp of when your app started
   */
  declare startedAtTimestamp: number;

  constructor(discloudApp: DiscloudApp, data: ApiStatusApp) {
    super(discloudApp);

    this._patch(data);
  }

  protected _patch(data: ApiStatusApp): this {
    if ("container" in data)
      this.container = data.container;

    if ("cpu" in data)
      this.cpu = data.cpu;

    if ("id" in data)
      this.appId = data.id;

    if ("last_restart" in data)
      this.lastRestart = data.last_restart;

    if ("memory" in data) {
      this.memory = data.memory;
      const matched = data.memory.match(/[\d.]+/g) ?? [];
      this.memoryUsage = calculatePercentage(matched[0]!, matched[1]);
    }

    if ("netIO" in data)
      this.netIO = data.netIO;

    if ("ssd" in data)
      this.ssd = data.ssd;

    if ("startedAt" in data) {
      this.startedAt = new Date(data.startedAt);
      this.startedAtTimestamp = this.startedAt.valueOf();
    }

    return super._patch(data);
  }

  get app() {
    return this.discloudApp.teamApps.cache.get(this.appId);
  }

  fetch() {
    return this.discloudApp.teamApps.status(this.appId);
  }
}