import { type ApiDomain } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import BaseCustomdomain from "./BaseCustomdomain";
import CustomdomainApp from "./CustomdomainApp";
import CustomdomainInstruction from "./CustomdomainInstruction";

export default class Customdomain extends BaseCustomdomain {
  constructor(discloudApp: DiscloudApp, data: ApiDomain) {
    super(discloudApp, data);

    this.app = new CustomdomainApp(this.discloudApp, data.app);
    // @ts-expect-error ts(2790)
    delete data.app;

    this._patch(data);
  }

  declare readonly app: CustomdomainApp;
  readonly instructions: CustomdomainInstruction[] = [];

  declare dns_status: string;
  declare date: number;
  declare isLegacy: boolean;

  protected _patch(data: Partial<ApiDomain>): this {
    if (data.dns_status !== undefined)
      this.dns_status = data.dns_status;

    if (data.date !== undefined)
      this.date = data.date;

    if (data.isLegacy !== undefined)
      this.isLegacy = data.isLegacy;

    if (data.app !== undefined)
      //@ts-expect-error ts(2446)
      this.app._patch(data.app);

    if (Array.isArray(data.instructions)) {
      this.instructions.splice(0, this.instructions.length);

      for (let i = 0; i < data.instructions.length; i++) {
        const instruction = data.instructions[i];
        this.instructions.push(new CustomdomainInstruction(this.discloudApp, instruction));
      }
    }

    return super._patch(data);
  }
}
