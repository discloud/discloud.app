import { ApiUser } from "@discloudapp/api-types/v2";
import { REST } from "@discloudapp/rest";
import { env } from "node:process";
import { DiscloudAppOptions } from "../@types";
import AppAptManager from "../managers/AppAptManager";
import AppManager from "../managers/AppManager";
import AppTeamManager from "../managers/AppTeamManager";
import TeamAppManager from "../managers/TeamAppManager";
import User from "../structures/User";
import { DefaultDiscloudAppOptions } from "../util";

/**
 * Client for Discloud API
 */
export default class DiscloudApp {
  readonly options: Omit<DiscloudAppOptions, "token">;
  readonly rest = new REST();
  readonly appApt = new AppAptManager(this);
  readonly apps = new AppManager(this);
  readonly appTeam = new AppTeamManager(this);
  readonly team = new TeamAppManager(this);
  readonly user = new User(this, <ApiUser>{});

  constructor(options: DiscloudAppOptions = {}) {
    options = { ...DefaultDiscloudAppOptions, ...options };

    if (options.token) {
      this.#setToken(options.token);
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
  async login(token = this.token ?? env.DISCLOUD_TOKEN) {
    if (typeof token !== "string") throw new Error("[DISCLOUD API] Missing token.");

    this.#setToken(token);

    await this.user.fetch();

    return "[DISCLOUD API] Logged.";
  }
}