import { Routes, type ApiUser, type RESTGetApiUserResult, type RESTPutApiLocaleResult } from "@discloudapp/api-types/v2";
import { calculatePercentage } from "@discloudapp/util";
import type { LocaleString } from "../@types";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

// eslint-disable-next-line func-style
let emitWarning = () => {
  process.emitWarning("Use fetch() method before it.");
};

function noop() { }

export default class User extends Base {
  private readonly _appIDs = new Set<string>();
  private readonly _customdomains = new Set<string>();
  private readonly _subdomains = new Set<string>();

  declare private _id: string;
  declare private _locale: string;
  declare private _plan: string;
  private _planDataEnd: Date | null = null;
  private _planDataEndTimestamp: number | null = null;
  declare private _ramUsedMb: number;
  declare private _totalRamMb: number;
  declare private _ramUsage: number;
  private _avatar: string | null = null;
  private _username: string | null = null;

  /**
   * Your applications ID
   * @readonly
   */
  get appIDs() {
    emitWarning();
    return this._appIDs;
  }
  /**
   * Your custom domains on Discloud
   * @readonly
   */
  get customdomains() {
    emitWarning();
    return this._customdomains;
  }
  /**
   * Your id
   * @readonly
   */
  get id() {
    emitWarning();
    return this._id;
  }
  /**
   * Your locale
   * @readonly
   */
  get locale() {
    emitWarning();
    return this._locale;
  }
  /**
   * Your plan
   * @readonly
   */
  get plan() {
    emitWarning();
    return this._plan;
  }
  /**
   * Date of when will your plan end
   * @readonly
   */
  get planDataEnd() {
    emitWarning();
    return this._planDataEnd;
  }
  /**
   * Timestamp of when will your plan end
   * @readonly
   */
  get planDataEndTimestamp() {
    emitWarning();
    return this._planDataEndTimestamp;
  }
  /**
   * Quantity of RAM was used for your applications
   * @readonly
   */
  get ramUsedMb() {
    emitWarning();
    return this._ramUsedMb;
  }
  /**
   * Your subdomains on Discloud
   * @readonly
   */
  get subdomains() {
    emitWarning();
    return this._subdomains;
  }
  /**
   * Your total RAM quantity
   * @readonly
   */
  get totalRamMb() {
    emitWarning();
    return this._totalRamMb;
  }
  /**
   * @readonly
   */
  get avatar() {
    emitWarning();
    return this._avatar;
  }
  /**
   * @readonly
   */
  get username() {
    emitWarning();
    return this._username;
  }

  constructor(discloudApp: DiscloudApp) {
    super(discloudApp);
  }

  get loaded() { return emitWarning === noop; }

  protected _patch(data: Partial<ApiUser>): this {
    if (data.userID !== undefined)
      this._id ??= data.userID;

    if (Array.isArray(data.apps)) {
      this._appIDs.clear();

      for (const appId of data.apps) {
        this._appIDs.add(appId);
      }
    }

    if (data.avatar !== undefined)
      this._avatar = data.avatar;

    if (Array.isArray(data.customdomains)) {
      this._customdomains.clear();

      for (const customdomain of data.customdomains) {
        this._customdomains.add(customdomain);
      }
    }

    if (data.locale !== undefined)
      this._locale = data.locale;

    if (data.plan !== undefined)
      this._plan = data.plan;

    if (data.planDataEnd !== undefined) {
      const planDataEndTimestamp = Date.parse(data.planDataEnd);

      if (isNaN(planDataEndTimestamp)) {
        this._planDataEnd = this._planDataEndTimestamp = null;
      } else {
        this._planDataEnd = new Date(planDataEndTimestamp);
        this._planDataEndTimestamp = planDataEndTimestamp;
      }
    }

    if (data.ramUsedMb !== undefined)
      this._ramUsedMb = data.ramUsedMb;

    if (Array.isArray(data.subdomains)) {
      this._subdomains.clear();

      for (const subdomain of data.subdomains) {
        this._subdomains.add(subdomain);
      }
    }

    if (data.totalRamMb !== undefined)
      this._totalRamMb = data.totalRamMb;

    if (this.ramUsedMb !== undefined && this.totalRamMb !== undefined)
      this._ramUsage = calculatePercentage(this.ramUsedMb, this.totalRamMb);

    if (data.username !== undefined)
      this._username = data.username;

    // disable warn
    emitWarning = noop;

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

    if (data.locale !== undefined)
      this._locale = data.locale;

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
