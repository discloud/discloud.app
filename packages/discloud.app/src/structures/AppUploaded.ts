import { ApiUploadApp } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import BaseApp from "./BaseApp";

export default class AppUploaded extends BaseApp {
  // ApiUploadApp
  addedAtTimestamp;
  avatarURL;
  type;
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