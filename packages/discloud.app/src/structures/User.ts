import { ApiUser, RESTGetApiUserResult, RESTPutApiLocaleResult, Routes } from "@discloudapp/api-types/v2";
import { calculatePercentage } from "..";
import { LocaleString } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class User extends Base {
  /**
   * Your applications ID
   */
  appIDs: string[] = [];
  /**
   * Your custom domains on Discloud
   */
  customdomains: string[] = [];
  /**
   * Your id
   */
  declare id: string;
  /**
   * Your locale
   */
  declare locale: string;
  /**
   * Your plan
   */
  declare plan: string;
  /**
   * Date of when will your plan end
   */
  declare planDataEnd: Date;
  /**
   * Timestamp of when will your plan end
   */
  declare planDataEndTimestamp: number;
  /**
   * Quantity of RAM was used for your applications
   */
  declare ramUsedMb: number;
  /**
   * Your subdomains on Discloud
   */
  subdomains: string[] = [];
  /**
   * Your total RAM quantity
   */
  declare totalRamMb: number;

  declare RamUsage: number;

  constructor(discloudApp: DiscloudApp, data: ApiUser) {
    super(discloudApp);

    this._patch(data);
  }

  protected _patch(data: ApiUser): this {
    if ("apps" in data)
      this.appIDs = data.apps;

    if ("customdomains" in data)
      this.customdomains = data.customdomains;

    if ("userID" in data)
      this.id = data.userID;

    if ("locale" in data)
      this.locale = data.locale;

    if ("plan" in data)
      this.plan = data.plan;

    if ("planDataEnd" in data) {
      this.planDataEnd = new Date(data.planDataEnd!);
      this.planDataEndTimestamp = this.planDataEnd.valueOf();
    }

    if ("ramUsedMb" in data)
      this.ramUsedMb = data.ramUsedMb;

    if ("subdomains" in data)
      this.subdomains = data.subdomains;

    if ("totalRamMb" in data)
      this.totalRamMb = data.totalRamMb;

    if ("ramUsedMb" in this && "totalRamMb" in this)
      this.RamUsage = calculatePercentage(this.ramUsedMb, this.totalRamMb);

    return super._patch(data);
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