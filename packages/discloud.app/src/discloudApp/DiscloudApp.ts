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
  options: DiscloudAppOptions;
  rest: REST;
  team: TeamManager;
  user: User;

  constructor(options: DiscloudAppOptions = {}) {
    this.options = { ...DefaultDiscloudAppOptions, ...options };
    this.rest = new REST();

    if (this.options.token)
      this.#setToken(this.options.token);

    this.apps = new AppManager(this);
    this.team = new TeamManager(this);
    this.user = new User(this, <ApiUser>{});
  }

  #setToken(token: string) {
    this.rest.setToken(env.DISCLOUD_TOKEN = this.#token = token);
    return this;
  }

  get token() {
    return this.#token;
  }

  async login(token = this.token || env.DISCLOUD_TOKEN) {
    if (typeof token !== "string") throw new Error("[DISCLOUD API] Missing token.");

    this.#setToken(token);

    await this.user.fetch();

    return "[DISCLOUD API] Logged.";
  }
}