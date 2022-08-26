import { App } from "./App";
import { Locale } from "./Locale";
import { Team } from "./Team";
import { Upload } from "./Upload";
import { User } from "./User";

export * from "./RouteBases";

export const Routes = new class Routes {
  /** app */
  app = App.app;
  appBackup = App.backup;
  appCommit = App.commit;
  appDelete = App.delete;
  appLogs = App.logs;
  appRam = App.ram;
  appRestart = App.restart;
  appStart = App.start;
  appStatus = App.status;
  appStop = App.stop;
  appTeam = App.team;

  /** locale */
  locale = Locale.locale;

  /** team */
  team = Team.team;
  teamBackup = Team.backup;
  teamCommit = Team.commit;
  teamRestart = Team.restart;
  teamStart = Team.start;
  teamStop = Team.stop;

  /** upload */
  upload = Upload.upload;

  /** user */
  user = User.user;
};