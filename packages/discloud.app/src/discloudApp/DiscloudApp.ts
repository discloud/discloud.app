import type { ApiUser } from "@discloudapp/api-types/v2";
import { REST, RESTEvents } from "@discloudapp/rest";
import { mergeDefaults } from "@discloudapp/util";
import EventEmitter from "events";
import { env } from "process";
import type { ClientEvents, DiscloudAppOptions } from "../@types";
import AppAptManager from "../managers/AppAptManager";
import AppManager from "../managers/AppManager";
import AppTeamManager from "../managers/AppTeamManager";
import TeamAppManager from "../managers/TeamAppManager";
import User from "../structures/User";
import { DefaultDiscloudAppOptions } from "../util";

/**
 * Client for Discloud API
 */
interface DiscloudApp extends EventEmitter {
  emit: (<K extends keyof ClientEvents>(event: K, ...args: ClientEvents[K]) => boolean) &
  (<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, ...args: unknown[]) => boolean);
  off: (<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void) => this) &
  (<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => void) => this);
  on: (<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void) => this) &
  (<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => void) => this);
  once: (<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void) => this) &
  (<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, listener: (...args: any[]) => void) => this);
  removeAllListeners: (<K extends keyof ClientEvents>(event?: K) => this) &
  (<S extends string | symbol>(event?: Exclude<S, keyof ClientEvents>) => this);
}

class DiscloudApp extends EventEmitter {
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
  login(token = this.token ?? env.DISCLOUD_TOKEN) {
    if (typeof token !== "string") throw new Error("[DISCLOUD API] Missing token.");

    this.#setToken(token);

    return this.user.fetch();
  }
}

export default DiscloudApp;
