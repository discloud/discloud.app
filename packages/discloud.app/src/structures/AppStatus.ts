import { ApiAppStatus } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import { calculatePercentage } from "../util";
import Base from "./Base";

export default class AppStatus extends Base {
  container;
  cpu;
  id;
  last_restart;
  memory;
  memoryUsage;
  netIO;
  ssd;
  startedAt;
  startedAtTimestamp;

  constructor(discloudApp: DiscloudApp, data: ApiAppStatus) {
    super(discloudApp);

    this.container = data.container;
    this.cpu = data.cpu;
    this.id = data.id;
    this.last_restart = data.last_restart;
    if (data.memory) {
      this.memory = data.memory;
      const matched = data.memory.match(/[\d.]+/g) ?? [];
      this.memoryUsage = calculatePercentage(matched[0], matched[1]);
    }

    this.netIO = data.netIO;
    this.ssd = data.ssd;

    if (data.startedAt) {
      this.startedAt = new Date(data.startedAt);
      this.startedAtTimestamp = this.startedAt.valueOf();
    }
  }
}