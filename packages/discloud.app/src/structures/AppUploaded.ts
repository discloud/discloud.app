import { ApiUploadApp } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import BaseApp from "./BaseApp";

export default class AppUploaded extends BaseApp {
  /**
   * The timestamp of the upload of your application
   */
  addedAtTimestamp!: number;
  /**
   * If your app has auto-restart enabled
   */
  autoRestart!: boolean;
  /**
   * Your app's avatar url
   */
  avatarURL!: string;
  /**
   * Your app programming language
   */
  lang!: string;
  /**
   * The main file of your application
   */
  mainFile!: string;
  /**
   * The name of your application
   */
  name!: string;
  /**
   * The ram quantity for your application
   */
  ram!: number;
  /**
   * Your app's type
   */
  type!: string;
  /**
   * The version of the package
   */
  version!: string;

  constructor(
    discloudApp: DiscloudApp,
    data: ApiUploadApp,
  ) {
    super(discloudApp, data);

    this._patch(data);
  }

  protected _patch(data: ApiUploadApp): this {
    if ("addedAtTimestamp" in data)
      this.addedAtTimestamp = data.addedAtTimestamp;

    if ("avatarURL" in data)
      this.avatarURL = data.avatarURL;

    if ("autoRestart" in data)
      this.autoRestart = data.autoRestart;

    if ("lang" in data)
      this.lang = data.lang;

    if ("mainFile" in data)
      this.mainFile = data.mainFile;

    if ("name" in data)
      this.name = data.name;

    if ("ram" in data)
      this.ram = data.ram;

    if ("type" in data)
      this.type = data.type;

    if ("version" in data)
      this.version = data.version;

    return super._patch(data);
  }
}