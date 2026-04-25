import { type ApiSubdomain } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import BaseSubdomain from "./BaseSubdomain";

export default class Subdomain extends BaseSubdomain {
  constructor(discloudApp: DiscloudApp, data: ApiSubdomain) {
    super(discloudApp, data);

    this.userID = data.userID;

    this._patch(data);
  }

  declare readonly userID: string;
  declare status: number;
  declare date: number;

  protected _patch(data: Partial<ApiSubdomain>): this {
    if (data.status !== undefined)
      this.status = data.status;

    if (data.date !== undefined)
      this.date = data.date;

    return super._patch(data);
  }
}
