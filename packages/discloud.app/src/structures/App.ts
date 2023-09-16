import { ApiApp, ApiStatusApp, BaseApiApp } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import AppApt from "./AppApt";
import AppStatus from "./AppStatus";
import AppTeam from "./AppTeam";
import BaseApp from "./BaseApp";

export default class App extends BaseApp {
  /**
   * If your app has auto deploy on github enabled
   */
  declare autoDeployGit: string;
  /**
   * If your app has auto-restart enabled
   */
  declare autoRestart: boolean;
  /**
   * Your app's avatar url
   */
  declare avatarURL: string;
  /**
   * Your app's exit code on stopping
   */
  declare exitCode: number;
  /**
   * Your app programming language
   */
  declare lang: string;
  /**
   * The main file of your application
   */
  declare mainFile: string;
  /**
   * Moderators IDs of your app
   */
  readonly mods = new Set<string>();
  /**
   * The name of your application
   */
  declare name: string;
  /**
   * If your app is online
   */
  declare online: boolean;
  /**
   * The ram quantity for your application
   */
  declare ram: number;
  /**
   * If your application was stopped due to lack of RAM
   */
  declare ramKilled: boolean;

  declare readonly apt: AppApt;
  declare readonly status: AppStatus;
  declare readonly team: AppTeam;

  constructor(discloudApp: DiscloudApp, data: BaseApiApp) {
    super(discloudApp, data);

    this.apt = new AppApt(this.discloudApp, data);
    this.status = new AppStatus(this.discloudApp, data);
    this.team = new AppTeam(this.discloudApp, data);

    this._patch(data);
  }

  protected _patch(data: Partial<ApiApp | ApiStatusApp>) {
    if ("autoDeployGit" in data)
      this.autoDeployGit = data.autoDeployGit!;

    if ("autoRestart" in data)
      this.autoRestart = data.autoRestart!;

    if ("avatarURL" in data)
      this.avatarURL = data.avatarURL!;

    if ("exitCode" in data)
      this.exitCode = data.exitCode!;

    if ("lang" in data)
      this.lang = data.lang!;

    if ("mainFile" in data)
      this.mainFile = data.mainFile!;

    if ("mods" in data)
      if (Array.isArray(data.mods)) {
        this.mods.clear();

        for (const mod of data.mods) {
          this.mods.add(mod);
        }
      }

    if ("name" in data)
      this.name = data.name!;

    if ("online" in data)
      this.online = data.online!;

    if ("ram" in data)
      this.ram = data.ram!;

    if ("ramKilled" in data)
      this.ramKilled = data.ramKilled!;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    this.apt._patch(data); this.status._patch(data); this.team._patch(data);

    return super._patch(data);
  }
}