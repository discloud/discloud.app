import { ApiSnapshotVersion } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default abstract class BaseSnapshot extends Base {
  constructor(discloudApp: DiscloudApp, readonly appId: string, data: ApiSnapshotVersion) {
    super(discloudApp);

    this.version = data.version;
  }

  declare readonly version: string;
  declare size: number | string;
  declare date: number | string;

  protected _path(data: Partial<ApiSnapshotVersion>): this {
    if (data.size !== undefined) this.size = data.size;

    if (data.date !== undefined) this.date = data.date;

    return super._patch(data);
  }
}