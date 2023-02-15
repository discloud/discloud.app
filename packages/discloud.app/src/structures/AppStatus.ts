import { ApiAppStatus, ApiNetIO } from "@discloudapp/api-types/v2";
import { calculatePercentage } from "@discloudapp/util";
import DiscloudApp from "../discloudApp/DiscloudApp";
import BaseApp from "./BaseApp";

export default class AppStatus extends BaseApp {
  /**
   * Status of your application
   * - It can be `Online` or `Offline` for example
   */
  container!: string;
  /**
   * CPU usage as percentage
   */
  cpu!: string;
  /**
   * Relative time of the last restart
   */
  lastRestart!: string;
  /**
   * RAM usage
   */
  memory!: string;
  /**
   * Percentage of memory usage
   */
  memoryUsage!: number;
  /**
   * Internet usage
   */
  netIO!: ApiNetIO;
  /**
   * Storage space
   */
  ssd!: string;
  /**
   * Date of your application has started
   */
  startedAt!: Date;
  /**
   * Timestamp of when your app started
   */
  startedAtTimestamp!: number;

  constructor(discloudApp: DiscloudApp, data: ApiAppStatus) {
    super(discloudApp, data);

    this._patch(data);
  }

  protected _patch(data: ApiAppStatus): this {
    if ("container" in data)
      this.container = data.container;

    if ("cpu" in data)
      this.cpu = data.cpu;

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
}