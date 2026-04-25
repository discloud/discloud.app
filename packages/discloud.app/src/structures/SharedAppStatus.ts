import type { ApiNetIO, ApiStatusApp } from "@discloudapp/api-types/v2";
import { calculatePercentage } from "@discloudapp/util";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import BaseSharedAppStatus from "./BaseSharedAppStatus";

export default class SharedAppStatus extends BaseSharedAppStatus {
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
    super(discloudApp, data);

    this._patch(data);
  }

  protected _patch(data: Partial<ApiStatusApp>): this {
    if (data.container !== undefined)
      this.container = data.container!;

    if (data.cpu !== undefined)
      this.cpu = data.cpu!;

    if (data.last_restart !== undefined)
      this.lastRestart = data.last_restart!;

    if (data.memory !== undefined) {
      this.memory = data.memory!;
      const matched = data.memory?.match(/[\d.]+/g) ?? [];
      this.memoryUsage = calculatePercentage(matched[0]!, matched[1]);
    }

    if (data.netIO !== undefined)
      this.netIO = data.netIO!;

    if (data.ssd !== undefined)
      this.ssd = data.ssd!;

    if (data.startedAt !== undefined) {
      this.startedAt = new Date(data.startedAt!);
      this.startedAtTimestamp = this.startedAt.valueOf();
    }

    return super._patch(data);
  }

  get app() {
    return this.discloudApp.sharedApps.cache.get(this.appId);
  }
}