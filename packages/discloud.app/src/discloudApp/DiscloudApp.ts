import { ApiUser, Routes } from "@discloudapp/api-types/v2";
import { REST } from "@discloudapp/rest";
import { env } from "node:process";
import { DiscloudAppOptions } from "../@types";
import AppManager from "../managers/AppManager";
import TeamManager from "../managers/TeamManager";
import User from "../structures/User";

export default class DiscloudApp {
  #token?: string;
  apps: AppManager;
  options: DiscloudAppOptions;
  rest: REST;
  team: TeamManager;
  user: User;

  constructor(options: DiscloudAppOptions = {}) {
    this.options = options;
    this.rest = new REST();

    if ("DISCLOUD_TOKEN" in env) {
      this.#token = env.DISCLOUD_TOKEN;
    } else {
      env.DISCLOUD_TOKEN = this.#token = options.token;
    }

    if (this.#token)
      this.#setToken(this.#token);

    this.apps = new AppManager(this);
    this.team = new TeamManager(this);
    this.user = new User(this, <ApiUser>{});
  }

  #setToken(token: string) {
    this.rest.setToken(token);
    return this;
  }

  get token() {
    return this.#token;
  }

  async login(token = this.#token) {
    if (!token || typeof token !== "string") throw new Error("[DISCLOUD API] Missing token.");

    if (!this.#token) env.DISCLOUD_TOKEN = this.#token = token;

    this.user = new User(this, await this.rest.get(Routes.user()).then(data => data.user));

    return "[DISCLOUD API] Logged.";
  }
}