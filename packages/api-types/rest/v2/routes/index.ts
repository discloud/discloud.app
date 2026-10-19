import { type OmitNewableFunctionKeys } from "../../../util/types";
import { App } from "./App";
import { Customdomain } from "./Customdomain";
import { Database } from "./Database";
import { Env } from "./Env";
import { Locale } from "./Locale";
import { Projects } from "./Projects";
import { Snapshot } from "./Snapshot";
import { Subdomain } from "./Subdomain";
import { Team } from "./Team";
import { Teams } from "./Teams";
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
  static appExec = App.exec;
  static appExplorer = App.explorer;
  static appExplorerEdit = App.explorerEdit;
  static appExplorerOpen = App.explorerOpen;
  static appLogs = App.logs;
  static appProfile = App.profile;
  static appRam = App.ram;
  static appRestart = App.restart;
  static appStart = App.start;
  static appStatus = App.status;
  static appStop = App.stop;
  /** @deprecated Removed from the docs and will be deactivated soon. */
  static appTeam = App.team;

  // customdomain
  static customdomain = Customdomain.customdomain;
  static customdomainCreate = Customdomain.customdomainCreate;
  static customdomainEdit = Customdomain.customdomainEdit;
  static customdomainRemove = Customdomain.customdomainRemove;
  static customdomainVerify = Customdomain.customdomainVerify;

  // database
  static database = Database.database;
  static databaseBackup = Database.backup;
  static databaseBackups = Database.backups;
  static databaseLogs = Database.logs;
  static databaseRestart = Database.restart;
  static databaseRestore = Database.restore;
  static databaseStart = Database.start;
  static databaseStop = Database.stop;

  // env
  static envAccount = Env.account;
  static envApp = Env.app;
  static envProject = Env.project;

  // locale
  static locale = Locale.locale;

  // projects
  static projects = Projects.projects;
  static projectsApps = Projects.apps;
  static projectsTeam = Projects.team;

  // snapshot
  static snapshot = Snapshot.snapshot;

  // subdmain
  static subdmain = Subdomain.subdomain;

  // team
  /** @deprecated Removed from the docs and will be deactivated soon. */
  static team = Team.team;
  /** @deprecated Removed from the docs and will be deactivated soon. */
  static teamBackup = Team.backup;
  /** @deprecated Removed from the docs and will be deactivated soon. */
  static teamCommit = Team.commit;
  /** @deprecated Removed from the docs and will be deactivated soon. */
  static teamLogs = Team.logs;
  /** @deprecated Removed from the docs and will be deactivated soon. */
  static teamRam = Team.ram;
  /** @deprecated Removed from the docs and will be deactivated soon. */
  static teamRestart = Team.restart;
  /** @deprecated Removed from the docs and will be deactivated soon. */
  static teamStart = Team.start;
  /** @deprecated Removed from the docs and will be deactivated soon. */
  static teamStatus = Team.status;
  /** @deprecated Removed from the docs and will be deactivated soon. */
  static teamStop = Team.stop;

  // teams
  static teams = Teams.teams;
  static teamsApps = Teams.apps;
  static teamsLeave = Teams.leave;
  static teamsMembers = Teams.members;
  static teamsRolesPermissions = Teams.rolesPermissions;

  // upload
  static upload = Upload.upload;

  // user
  static user = User.user;
}

export const Routes: Routes = RoutesIndexer;
