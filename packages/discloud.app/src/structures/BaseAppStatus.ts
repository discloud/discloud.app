import { type BaseApiApp } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default abstract class BaseAppStatus extends Base {
  /**
   * Your app id
   */
  readonly appId: string;

  constructor(
    discloudApp: DiscloudApp,
    data: BaseApiApp,
  ) {
    super(discloudApp);

    this.appId = data.id;
  }

  protected _patch(data: Partial<BaseApiApp>) {
    return super._patch(data);
  }
}
