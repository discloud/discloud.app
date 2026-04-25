import { type ApiDomainInstruction } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class CustomdomainInstruction extends Base {
  constructor(discloudApp: DiscloudApp, data: ApiDomainInstruction) {
    super(discloudApp);

    this.content = data.content;
    this.name = data.name;
    this.type = data.type;
  }

  declare readonly content: string;
  declare readonly name: string;
  declare readonly type: string;
}
