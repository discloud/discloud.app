import type { ApiUploadApp } from "@discloudapp/api-types/v2";
import type DiscloudApp from "../discloudApp/DiscloudApp";
import Base from "./Base";

export default class AppUploaded extends Base {
  /**
   * Your app id
   */
  readonly appId: string;
  /**
   * The timestamp of the upload of your application
   */
  declare addedAtTimestamp: number;
  /**
   * If your app has auto-restart enabled
   */
  declare autoRestart: boolean;
  /**
   * Your app's avatar url
   */
  declare avatarURL: string;
  /**
   * Your app programming language
   */
  declare lang: string;
  /**
   * The main file of your application
   */
  declare mainFile: string;
  /**
   * The name of your application
   */
  declare name: string;
  /**
   * The ram quantity for your application
   */
  declare ram: number;
  /**
   * Your app's type
   */
  declare type: string;
  /**
   * The version of the package
   */
  declare version: string;

  constructor(discloudApp: DiscloudApp, data: ApiUploadApp) {
    super(discloudApp);

    this.appId = data.id;

    this._patch(data);
  }

  protected _patch(data: Partial<ApiUploadApp>): this {
    if ("addedAtTimestamp" in data)
      this.addedAtTimestamp = data.addedAtTimestamp!;

    if ("avatarURL" in data)
      this.avatarURL = data.avatarURL!;

    if ("autoRestart" in data)
      this.autoRestart = data.autoRestart!;

    if ("lang" in data)
      this.lang = data.lang!;

    if ("mainFile" in data)
      this.mainFile = data.mainFile!;

    if ("name" in data)
      this.name = data.name!;

    if ("ram" in data)
      this.ram = data.ram!;

    if ("type" in data)
      this.type = data.type!;

    if ("version" in data)
      this.version = data.version!;

    return super._patch(data);
  }

  get app() {
    return this.discloudApp.apps.cache.get(this.appId);
  }
}