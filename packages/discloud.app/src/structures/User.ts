import { ApiUser, RESTGetApiUserResult, RESTPutApiLocaleResult, Routes } from "@discloudapp/api-types/v2";
import { calculatePercentage } from "..";
import { LocaleString } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class User extends Base {
  /**
   * Your applications ID
   */
  readonly appIDs = new Set<string>();
  /**
   * Your custom domains on Discloud
   */
  readonly customdomains = new Set<string>();
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
  readonly subdomains = new Set<string>();
  /**
   * Your total RAM quantity
   */
  declare totalRamMb: number;

  declare ramUsage: number;

  constructor(discloudApp: DiscloudApp, data: ApiUser) {
    super(discloudApp);

    this._patch(data);
  }

  protected _patch(data: ApiUser): this {
    if ("apps" in data)
      if (Array.isArray(data.apps)) {
        this.appIDs.clear();

        for (const appId of data.apps) {
          this.appIDs.add(appId);
        }
      }

    if ("customdomains" in data)
      if (Array.isArray(data.customdomains)) {
        this.customdomains.clear();

        for (const customdomain of data.customdomains) {
          this.customdomains.add(customdomain);
        }
      }

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
      if (Array.isArray(data.subdomains)) {
        this.subdomains.clear();

        for (const subdomain of data.subdomains) {
          this.subdomains.add(subdomain);
        }
      }

    if ("totalRamMb" in data)
      this.totalRamMb = data.totalRamMb;

    if ("ramUsedMb" in this && "totalRamMb" in this)
      this.ramUsage = calculatePercentage(this.ramUsedMb, this.totalRamMb);

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
   */
  async setLocale<L extends LocaleString>(locale: L): Promise<boolean> {
    const data = await this.discloudApp.rest.put<RESTPutApiLocaleResult>(Routes.locale(locale));

    if ("locale" in data)
      this.locale = data.locale;

    return data.locale === locale;
  }

  /**
   * Fetch a user from Discloud API
   */
  async fetch() {
    const data = await this.discloudApp.rest.get<RESTGetApiUserResult>(Routes.user());

    return this._patch(data.user);
  }

  toString() {
    return this.id;
  }
}