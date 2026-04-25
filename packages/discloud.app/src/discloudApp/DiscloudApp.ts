import { REST, RESTEvents } from "@discloudapp/rest";
import EventEmitter from "events";
import _ from "lodash";
import type { ClientEvents, DiscloudAppOptions } from "../@types";
import AppsManager from "../managers/AppsManager";
import CustomdomainsManager from "../managers/CustomdomainsManager";
import SharedAppsManager from "../managers/SharedAppsManager";
import SubdomainsManager from "../managers/SubdomainsManager";
import User from "../structures/User";
import { DefaultDiscloudAppOptions } from "../util/constants";
import Deprecation from "../util/deprecation";

const appAptDeprecation = new Deprecation("The appApt property is deprecated. Use apps.apts instead.");
const appTeamDeprecation = new Deprecation("The appTeam property is deprecated. Use apps.moderators instead.");
const teamAppsDeprecation = new Deprecation("The teamApps property is deprecated. Use sharedApps instead.");

export default class DiscloudApp extends EventEmitter<ClientEvents> {
  readonly options: DiscloudAppOptions;
  readonly rest: REST;
  readonly apps = new AppsManager(this);
  readonly sharedApps = new SharedAppsManager(this);
  readonly customdomains = new CustomdomainsManager(this);
  readonly subdomains = new SubdomainsManager(this);
  readonly user = new User(this);

  /** @deprecated use appsApts instead */
  get appApt() {
    appAptDeprecation.emit();
    return this.apps.apts;
  }

  /** @deprecated use appsModerators instead */
  get appTeam() {
    appTeamDeprecation.emit();
    return this.apps.moderators;
  }

  get teamApps() {
    teamAppsDeprecation.emit();
    return this.sharedApps;
  }

  constructor(options: DiscloudAppOptions = {}) {
    super({ captureRejections: true });

    options = _.defaultsDeep(options, DefaultDiscloudAppOptions);

    this.rest = new REST(options.rest)
      .on(RESTEvents.Error, this.emit.bind(this, RESTEvents.Error))
      .on(RESTEvents.RateLimited, this.emit.bind(this, RESTEvents.RateLimited));

    if ("token" in options) {
      this.#setToken(<string>options.token);
      delete options.token;
    }

    this.options = options;
  }

  #setToken(token: string) {
    process.env.DISCLOUD_TOKEN = token;
    this.rest.setToken(token);
    return this;
  }

  get token() {
    return this.rest.token;
  }

  /**
   * Login on Discloud API
   * 
   * @param token - Your Discloud token
   */
  login(token = this.token ?? process.env.DISCLOUD_TOKEN) {
    if (typeof token !== "string") throw new Error("[DISCLOUD API] Missing token.");

    this.#setToken(token);

    return this.user.fetch();
  }
}
