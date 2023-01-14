import { ApiAppStatus, ApiNetIO } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import { calculatePercentage } from "@discloudapp/util";
import Base from "./Base";

export default class AppStatus extends Base {
  /**
   * Status of your application
   * - It can be `Online` or `Offline` for example
   */
  container: string;
  /**
   * CPU usage as percentage
   */
  cpu: string;
  /**
   * Your app id
   */
  id: string;
  /**
   * Relative time of the last restart
   */
  lastRestart: string;
  /**
   * RAM usage
   */
  memory?: string;
  /**
   * Percentage of memory usage
   */
  memoryUsage?: number;
  /**
   * Internet usage
   */
  netIO: ApiNetIO;
  /**
   * Storage space
   */
  ssd: string;
  /**
   * Date of your application has started
   */
  startedAt?: Date;
  /**
   * Timestamp of when your app started
   */
  startedAtTimestamp?: number;

  constructor(discloudApp: DiscloudApp, data: ApiAppStatus) {
    super(discloudApp);

    this.container = data.container;
    this.cpu = data.cpu;
    this.id = data.id;
    this.lastRestart = data.last_restart;

    if (data.memory) {
      this.memory = data.memory;
      const matched = data.memory.match(/[\d.]+/g) ?? [];
      this.memoryUsage = calculatePercentage(matched[0]!, matched[1]);
    }

    this.netIO = data.netIO;
    this.ssd = data.ssd;

    if (data.startedAt) {
      this.startedAt = new Date(data.startedAt);
      this.startedAtTimestamp = this.startedAt.valueOf();
    }
  }
}