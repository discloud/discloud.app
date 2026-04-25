import type { ApiApp } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import AppModeratorsManager from "../managers/AppModeratorsManager";
import AppStatusManager from "../managers/AppStatusManager";
import Deprecation from "../util/deprecation";
import AppApt from "./AppApt";
import BaseApp from "./BaseApp";

const aptDeprecation = new Deprecation("The apt property is deprecated. Use apts instead.");

export default class App extends BaseApp {
  /**
   * When your app was uploaded
   */
  declare addedTimestamp: number;
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
  /**
   * Your app's type
   */
  declare type: number;

  /** @deprecated use apts instead. */
  get apt() {
    aptDeprecation.emit();
    return this.apts;
  }

  readonly apts: AppApt;
  readonly moderators: AppModeratorsManager;
  readonly status: AppStatusManager;

  constructor(discloudApp: DiscloudApp, data: ApiApp) {
    super(discloudApp, data);

    this.apts = new AppApt(this.discloudApp, this.id);
    this.moderators = new AppModeratorsManager(this.discloudApp, this.id);
    this.status = new AppStatusManager(this.discloudApp, this.id);

    this._patch(data);
  }

  protected _patch(data: Partial<ApiApp>) {
    if (data.addedTimestamp !== undefined)
      this.addedTimestamp = data.addedTimestamp;

    if (data.autoRestart !== undefined)
      this.autoRestart = data.autoRestart;

    if (data.avatarURL !== undefined)
      this.avatarURL = data.avatarURL;

    if (data.exitCode !== undefined)
      this.exitCode = data.exitCode;

    if (data.lang !== undefined)
      this.lang = data.lang;

    if (data.mainFile !== undefined)
      this.mainFile = data.mainFile;

    if (Array.isArray(data.mods)) {
      this.mods.clear();

      for (const mod of data.mods) {
        this.mods.add(mod);
      }
    }

    if (data.name !== undefined)
      this.name = data.name;

    if (data.online !== undefined)
      this.online = data.online;

    if (data.ram !== undefined)
      this.ram = data.ram;

    if (data.ramKilled !== undefined)
      this.ramKilled = data.ramKilled;

    if (data.type !== undefined)
      this.type = data.type;

    return super._patch(data);
  }
}