import { type OmitNewableFunctionKeys } from "../../../util/types";
import { App } from "./App";
import { Customdomain } from "./Customdomain";
import { Locale } from "./Locale";
import { Subdomain } from "./Subdomain";
import { Team } from "./Team";
import { Upload } from "./Upload";
import { User } from "./User";

export type Routes = OmitNewableFunctionKeys<typeof RoutesIndexer>

abstract class RoutesIndexer {
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

  // customdomain
  static customdomain = Customdomain.customdomain;
  static customdomainCreate = Customdomain.customdomainCreate;
  static customdomainEdit = Customdomain.customdomainEdit;
  static customdomainRemove = Customdomain.customdomainRemove;
  static customdomainVerify = Customdomain.customdomainVerify;

  // locale
  static locale = Locale.locale;

  // subdmain
  static subdmain = Subdomain.subdomain;

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

export const Routes: Routes = RoutesIndexer;
