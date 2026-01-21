import { type ApiTeamAppOwner } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class TeamAppOwner extends Base implements ApiTeamAppOwner {
  constructor(discloudApp: DiscloudApp) {
    super(discloudApp);
  }

  declare name: string;
  declare avatar: string;

  protected _patch(data: Partial<ApiTeamAppOwner>) {
    if (typeof data.name === "string") this.name = data.name;

    if (typeof data.avatar === "string") this.avatar = data.avatar;

    return this;
  }
}
