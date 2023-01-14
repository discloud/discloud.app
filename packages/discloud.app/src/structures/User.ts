import { ApiUser, RESTGetApiUserResult, RESTPutApiLocaleResult, Routes } from "@discloudapp/api-types/v2";
import { LocaleString } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class User extends Base {
  /**
   * Your applications ID
   */
  appIDs: string[];
  /**
   * Your custom domains on Discloud
   */
  customdomains: string[];
  /**
   * Your id
   */
  id: string;
  /**
   * Your locale
   */
  locale: string;
  /**
   * Your plan
   */
  plan: string;
  /**
   * Date of when will your plan end
   */
  planDataEnd?: Date;
  /**
   * Timestamp of when will your plan end
   */
  planDataEndTimestamp?: number;
  /**
   * Quantity of RAM was used for your applications
   */
  ramUsedMb: number;
  /**
   * Your subdomains on Discloud
   */
  subdomains: string[];
  /**
   * Your total RAM quantity
   */
  totalRamMb: number;

  constructor(discloudApp: DiscloudApp, data: ApiUser) {
    super(discloudApp);

    this.appIDs = data.apps ?? [];
    this.customdomains = data.customdomains ?? [];
    this.id = data.userID;
    this.locale = data.locale;
    this.plan = data.plan;

    if (data.planDataEnd) {
      this.planDataEnd = new Date(data.planDataEnd);
      this.planDataEndTimestamp = this.planDataEnd.valueOf();
    }

    this.ramUsedMb = data.ramUsedMb;

    this.subdomains = data.subdomains ?? [];
    this.totalRamMb = data.totalRamMb;
  }

  get apps() {
    return this.discloudApp.apps;
  }

  /**
   * Set your locale on Discloud
   * 
   * @param locale - Your locale like "en-US".
   * @see {@link LocaleString}
   * @returns Promise {@link Boolean}
   */
  async setLocale<L extends LocaleString>(locale: L): Promise<boolean> {
    const data = await this.discloudApp.rest.put<RESTPutApiLocaleResult>(Routes.locale(locale));

    if ("locale" in data)
      this.locale = data.locale;

    return data.locale === locale;
  }

  /**
   * Fetch a user from Discloud API
   * 
   * @returns Promise {@link User}
   */
  async fetch() {
    const data = await this.discloudApp.rest.get<RESTGetApiUserResult>(Routes.user());

    return this._patch(data.user);
  }

  /**
   * @returns user id
   */
  toString() {
    return this.id;
  }
}