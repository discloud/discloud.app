import { ApiUser } from "@discloudapp/api-types/v2";
import { REST, RESTEvents } from "@discloudapp/rest";
import EventEmitter from "node:events";
import { env } from "node:process";
import { DiscloudAppOptions } from "../@types";
import AppAptManager from "../managers/AppAptManager";
import AppManager from "../managers/AppManager";
import AppTeamManager from "../managers/AppTeamManager";
import TeamAppManager from "../managers/TeamAppManager";
import User from "../structures/User";
import { DefaultDiscloudAppOptions, mergeDefaults } from "../util";

/**
 * Client for Discloud API
 */
export default class DiscloudApp extends EventEmitter {
  readonly options: DiscloudAppOptions;
  readonly rest: REST;
  readonly appApt = new AppAptManager(this);
  readonly apps = new AppManager(this);
  readonly appTeam = new AppTeamManager(this);
  readonly teamApps = new TeamAppManager(this);
  readonly user = new User(this, <ApiUser>{});

  constructor(options: DiscloudAppOptions = {}) {
    super({ captureRejections: true });

    options = mergeDefaults(DefaultDiscloudAppOptions, options);

    if ("token" in options) {
      this.#setToken(<string>options.token);
      delete options.token;
    }

    this.options = options;

    this.rest = new REST(options.rest)
      .on(RESTEvents.RateLimited, this.emit.bind(this, RESTEvents.RateLimited));
  }

  #setToken(token: string) {
    if (!env.DISCLOUD_TOKEN && token) env.DISCLOUD_TOKEN = token;
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
  async login(token = this.token ?? env.DISCLOUD_TOKEN) {
    if (typeof token !== "string") throw new Error("[DISCLOUD API] Missing token.");

    this.#setToken(token);

    await this.user.fetch();

    return "[DISCLOUD API] Logged.";
  }
}