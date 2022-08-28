import { ApiApp, ApiUploadApp } from "@discloudapp/api-types/v2";
import DiscloudApp from "../discloudApp/DiscloudApp";
import AppTeamManager from "../managers/AppTeamManager";
import Base from "./Base";

export default class App extends Base {
  addedAtTimestamp;
  autoDeployGit;
  autoRestart;
  avatarURL;
  id;
  lang;
  mainFile;
  mods;
  name;
  online;
  ram;
  ramKilled;
  type;
  version;

  team: AppTeamManager;

  constructor(
    discloudApp: DiscloudApp,
    data: (ApiApp | ApiUploadApp) & Partial<ApiApp & ApiUploadApp>
  ) {
    super(discloudApp);

    this.addedAtTimestamp = data.addedAtTimestamp;
    this.autoDeployGit = data.autoDeployGit;
    this.autoRestart = data.autoRestart;
    this.avatarURL = data.avatarURL;
    this.id = data.id;
    this.lang = data.lang;
    this.mainFile = data.mainFile;
    this.mods = data.mods;
    this.name = data.name;
    this.online = data.online;
    this.ram = data.ram;
    this.ramKilled = data.ramKilled;
    this.type = data.type;
    this.version = data.version;

    this.team = new AppTeamManager(this.discloudApp, this);
  }

  toString() {
    return this.id;
  }
}