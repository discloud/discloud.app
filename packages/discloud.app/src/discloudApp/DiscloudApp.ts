import type { ApiUser } from "@discloudapp/api-types/v2";
import { REST, RESTEvents } from "@discloudapp/rest";
import { mergeDefaults } from "@discloudapp/util";
import EventEmitter from "events";
import type { ClientEvents, DiscloudAppOptions } from "../@types";
import AppAptManager from "../managers/AppAptManager";
import AppManager from "../managers/AppManager";
import AppTeamManager from "../managers/AppTeamManager";
import TeamAppManager from "../managers/TeamAppManager";
import User from "../structures/User";
import { DefaultDiscloudAppOptions } from "../util/constants";

class DiscloudApp extends EventEmitter<ClientEvents> {
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
    if (!process.env.DISCLOUD_TOKEN && token) process.env.DISCLOUD_TOKEN = token;
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

export default DiscloudApp;
