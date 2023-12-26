import { App } from "./App";
import { Locale } from "./Locale";
import { Team } from "./Team";
import { Upload } from "./Upload";
import { User } from "./User";

export abstract class Routes {
  // app
  static app = App.app;
  static appApt = App.apt;
  static appBackup = App.backup;
  static appCommit = App.commit;
  static appConsole = App.console;
  static appDelete = App.delete;
  static appLogs = App.logs;
  static appProfile = App.profile;
  static appRam = App.ram;
  static appRestart = App.restart;
  static appStart = App.start;
  static appStatus = App.status;
  static appStop = App.stop;
  static appTeam = App.team;

  // locale
  static locale = Locale.locale;

  // team
  static team = Team.team;
  static teamBackup = Team.backup;
  static teamCommit = Team.commit;
  static teamLogs = Team.logs;
  static teamRam = Team.ram;
  static teamRestart = Team.restart;
  static teamStart = Team.start;
  static teamStatus = Team.status;
  static teamStop = Team.stop;

  // upload
  static upload = Upload.upload;

  // user
  static user = User.user;
}