import { ApiUser } from "@discloudapp/api-types/v2";
import { REST } from "@discloudapp/rest";
import { env } from "node:process";
import { DiscloudAppOptions } from "../@types";
import AppManager from "../managers/AppManager";
import TeamManager from "../managers/TeamManager";
import User from "../structures/User";
import { DefaultDiscloudAppOptions } from "../util/constants";

export default class DiscloudApp {
  #token?: string;
  apps: AppManager;
  options: Omit<DiscloudAppOptions, "token">;
  rest: REST;
  team: TeamManager;
  user: User;

  constructor(options: DiscloudAppOptions = {}) {
    options = { ...DefaultDiscloudAppOptions, ...options };

    this.rest = new REST();

    if (options.token) {
      this.#setToken(options.token);
      delete options.token;
    }

    this.options = options;

    this.apps = new AppManager(this);
    this.team = new TeamManager(this);
    this.user = new User(this, <ApiUser>{});
  }

  #setToken(token: string) {
    if (!env.DISCLOUD_TOKEN && token) env.DISCLOUD_TOKEN = token;
    this.rest.setToken(this.#token = token);
    return this;
  }

  get token() {
    return this.#token;
  }

  async login(token = this.token ?? env.DISCLOUD_TOKEN) {
    if (typeof token !== "string") throw new Error("[DISCLOUD API] Missing token.");

    this.#setToken(token);

    await this.user.fetch();

    return "[DISCLOUD API] Logged.";
  }
}