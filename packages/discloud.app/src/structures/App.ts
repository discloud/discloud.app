import { ApiApp } from "@discloudapp/api-types/v2";
import { UpdateAppOptions } from "../@types";
import DiscloudApp from "../discloudApp/DiscloudApp";
import BaseApp from "./BaseApp";

export default class App extends BaseApp {
  /**
   * If your app has auto deploy on github enabled
   */
  autoDeployGit!: string;
  /**
   * If your app has auto-restart enabled
   */
  autoRestart!: boolean;
  /**
   * Your app's exit code on stopping
   */
  exitCode!: number;
  /**
   * Your app programming language
   */
  lang!: string;
  /**
   * The main file of your application
   */
  mainFile!: string;
  /**
   * Moderators IDs of your app
   */
  mods: string[] = [];
  /**
   * The name of your application
   */
  name!: string;
  /**
   * If your app is online
   */
  online!: boolean;
  /**
   * The ram quantity for your application
   */
  ram!: number;
  /**
   * If your application was stopped due to lack of RAM
   */
  ramKilled!: boolean;

  constructor(
    discloudApp: DiscloudApp,
    data: ApiApp,
  ) {
    super(discloudApp, data);

    this._patch(data);
  }

  protected _patch(data: ApiApp): this {
    if ("autoDeployGit" in data)
      this.autoDeployGit = data.autoDeployGit;

    if ("autoRestart" in data)
      this.autoRestart = data.autoRestart;

    if ("exitCode" in data)
      this.exitCode = data.exitCode;

    if ("lang" in data)
      this.lang = data.lang;

    if ("mainFile" in data)
      this.mainFile = data.mainFile;

    if ("mods" in data)
      this.mods = data.mods;

    if ("name" in data)
      this.name = data.name;

    if ("online" in data)
      this.online = data.online;

    if ("ram" in data)
      this.ram = data.ram;

    if ("ramKilled" in data)
      this.ramKilled = data.ramKilled;

    return super._patch(data);
  }
}