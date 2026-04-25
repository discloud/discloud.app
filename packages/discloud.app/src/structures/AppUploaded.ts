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
  declare type: number;
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
    if (data.addedAtTimestamp !== undefined)
      this.addedAtTimestamp = data.addedAtTimestamp!;

    if (data.avatarURL !== undefined)
      this.avatarURL = data.avatarURL!;

    if (data.autoRestart !== undefined)
      this.autoRestart = data.autoRestart!;

    if (data.lang !== undefined)
      this.lang = data.lang!;

    if (data.mainFile !== undefined)
      this.mainFile = data.mainFile!;

    if (data.name !== undefined)
      this.name = data.name!;

    if (data.ram !== undefined)
      this.ram = data.ram!;

    if (data.type !== undefined)
      this.type = data.type!;

    if (data.version !== undefined)
      this.version = data.version!;

    return super._patch(data);
  }

  get app() {
    return this.discloudApp.apps.cache.get(this.appId);
  }
}