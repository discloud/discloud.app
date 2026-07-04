import { type ApiSnapshotApp } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class SnapshotApp extends Base {
  constructor(discloudApp: DiscloudApp, data: ApiSnapshotApp) {
    super(discloudApp);

    this.id = data.id;
  }

  declare readonly id: string;
}