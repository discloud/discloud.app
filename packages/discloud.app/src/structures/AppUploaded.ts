import { ApiUploadApp } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import BaseApp from "./BaseApp";

export default class AppUploaded extends BaseApp {
  /**
   * The timestamp of the upload of your application
   */
  addedAtTimestamp;
  /**
   * Your app's avatar url
   */
  avatarURL;
  /**
   * Your app's type
   */
  type;
  /**
   * The version of the package
   */
  version;

  constructor(
    discloudApp: DiscloudApp,
    data: ApiUploadApp,
  ) {
    super(discloudApp, data);

    this.addedAtTimestamp = data.addedAtTimestamp;
    this.avatarURL = data.avatarURL;
    this.type = data.type;
    this.version = data.version;
  }
}