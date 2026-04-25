import { type ApiDomain } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default abstract class BaseCustomdomain extends Base {
  constructor(discloudApp: DiscloudApp, data: ApiDomain) {
    super(discloudApp);

    this.id = data.id;
  }

  declare readonly id: string;

  protected _patch(data: Partial<ApiDomain>): this {
    return super._patch(data);
  }
}
