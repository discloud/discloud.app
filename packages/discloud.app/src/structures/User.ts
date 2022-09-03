import { ApiUser, RESTGetApiUserResult, RESTPutApiLocaleResult, Routes } from "@discloudapp/api-types/v2";
import { LocaleString } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class User extends Base {
  appIDs;
  customdomains;
  id;
  locale;
  plan;
  planDataEnd;
  planDataEndTimestamp;
  ramUsedMb;
  subdomains;
  totalRamMb;

  constructor(discloudApp: DiscloudApp, data: ApiUser) {
    super(discloudApp);

    this.appIDs = data.apps;
    this.customdomains = data.customdomains;
    this.id = data.userID;
    this.locale = data.locale;
    this.plan = data.plan;

    if (data.planDataEnd) {
      this.planDataEnd = new Date(data.planDataEnd);
      this.planDataEndTimestamp = this.planDataEnd.valueOf();
    }

    this.ramUsedMb = data.ramUsedMb;

    this.subdomains = data.subdomains;
    this.totalRamMb = data.totalRamMb;
  }

  async setLocale<L extends LocaleString>(locale: L): Promise<boolean> {
    const data = await this.discloudApp.rest.put<RESTPutApiLocaleResult>(Routes.locale(locale));

    this.locale = data.locale;

    return data.locale === locale;
  }

  async fetch() {
    const data = await this.discloudApp.rest.get<RESTGetApiUserResult>(Routes.user());

    return this.discloudApp.user = new User(this.discloudApp, data.user);
  }

  toString() {
    return this.id;
  }
}