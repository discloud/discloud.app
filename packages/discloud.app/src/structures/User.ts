import { Routes, type ApiUser, type RESTGetApiUserResult, type RESTPutApiLocaleResult } from "@discloudapp/api-types/v2";
import { calculatePercentage } from "@discloudapp/util";
import type { LocaleString } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
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
  planDataEnd: Date | null = null;
  /**
   * Timestamp of when will your plan end
   */
  planDataEndTimestamp: number | null = null;
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

  avatar: string | null = null;
  username: string | null = null;

  constructor(discloudApp: DiscloudApp, data: ApiUser) {
    super(discloudApp);

    this._patch(data);
  }

  protected _patch(data: Partial<ApiUser>): this {
    if ("userID" in data && typeof data.userID === "string")
      this.id = data.userID;

    if ("apps" in data)
      if (Array.isArray(data.apps)) {
        this.appIDs.clear();

        for (const appId of data.apps) {
          this.appIDs.add(appId);
        }
      }

    if ("avatar" in data)
      this.avatar = data.avatar ?? null;

    if ("customdomains" in data)
      if (Array.isArray(data.customdomains)) {
        this.customdomains.clear();

        for (const customdomain of data.customdomains) {
          this.customdomains.add(customdomain);
        }
      }

    if ("locale" in data)
      this.locale = data.locale!;

    if ("plan" in data)
      this.plan = data.plan!;

    if ("planDataEnd" in data) {
      const planDataEndTimestamp = Date.parse(data.planDataEnd!);

      if (isNaN(planDataEndTimestamp)) {
        this.planDataEnd = this.planDataEndTimestamp = null;
      } else {
        this.planDataEnd = new Date(planDataEndTimestamp);
        this.planDataEndTimestamp = planDataEndTimestamp;
      }
    }

    if ("ramUsedMb" in data)
      this.ramUsedMb = data.ramUsedMb!;

    if ("subdomains" in data)
      if (Array.isArray(data.subdomains)) {
        this.subdomains.clear();

        for (const subdomain of data.subdomains) {
          this.subdomains.add(subdomain);
        }
      }

    if ("totalRamMb" in data)
      this.totalRamMb = data.totalRamMb!;

    if ("ramUsedMb" in this && "totalRamMb" in this)
      this.ramUsage = calculatePercentage(this.ramUsedMb, this.totalRamMb);

    if ("username" in data)
      this.username = data.username ?? null;

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