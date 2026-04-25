import { type ApiDomainApp } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class CustomdomainApp extends Base {
  constructor(discloudApp: DiscloudApp, data: ApiDomainApp) {
    super(discloudApp);

    this._patch(data);
  }

  declare name: string;
  declare online: boolean;
  declare type: number;
  declare id: string;

  protected _patch(data: Partial<ApiDomainApp>): this {
    if (data.name !== undefined)
      this.name = data.name;

    if (data.online !== undefined)
      this.online = data.online;

    if (data.type !== undefined)
      this.type = data.type;

    if (data.id !== undefined)
      this.id = data.id;

    return super._patch(data);
  }
}
