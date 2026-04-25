import { type ApiTeamAppOwner } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class SharedAppOwner extends Base {
  constructor(discloudApp: DiscloudApp, owner: ApiTeamAppOwner) {
    super(discloudApp);

    this.name = owner.name;
    this.avatar = owner.avatar;
  }

  declare readonly name: string;
  declare readonly avatar: string;
}
