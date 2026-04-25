import { type ApiSubdomain } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default abstract class BaseSubdomain extends Base {
  constructor(discloudApp: DiscloudApp, data: ApiSubdomain) {
    super(discloudApp);

    this.id = data.id;
  }

  declare readonly id: string;

  protected _patch(data: Partial<ApiSubdomain>): this {
    return super._patch(data);
  }
}
