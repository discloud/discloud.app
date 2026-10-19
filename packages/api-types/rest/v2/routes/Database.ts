import { type OmitNewableFunctionKeys } from "../../../util/types";

export type Database = OmitNewableFunctionKeys<typeof DatabaseRoutes>

abstract class DatabaseRoutes {
  /**
   * - GET - `/database`
   * - POST - `/database`
   * - GET - `/database/{dbID}`
   * - PATCH - `/database/{dbID}`
   * - DELETE - `/database/{dbID}`
   */
  static database(): "/database"
  static database<dbID extends string>(dbID: dbID): `/database/${dbID}`
  static database<dbID extends string>(dbID?: dbID) {
    return dbID ? `/database/${dbID}` : "/database";
  }

  /**
   * - POST - `/database/{dbID}/backup`
   */
  static backup<dbID extends string>(dbID: dbID): `/database/${dbID}/backup` {
    return `/database/${dbID}/backup`;
  }

  /**
   * - GET - `/database/{dbID}/backups`
   */
  static backups<dbID extends string>(dbID: dbID): `/database/${dbID}/backups`
  static backups<dbID extends string, backupID extends string>(dbID: dbID, backupID: backupID): `/database/${dbID}/backups/${backupID}/download`
  static backups<dbID extends string, backupID extends string>(dbID: dbID, backupID?: backupID) {
    return backupID ? `/database/${dbID}/backups/${backupID}/download` : `/database/${dbID}/backups`;
  }

  /**
   * - GET - `/database/{dbID}/logs`
   * - DELETE - `/database/{dbID}/logs`
   */
  static logs<dbID extends string>(dbID: dbID): `/database/${dbID}/logs` {
    return `/database/${dbID}/logs`;
  }

  /**
   * - PUT - `/database/{dbID}/restart`
   */
  static restart<dbID extends string>(dbID: dbID): `/database/${dbID}/restart` {
    return `/database/${dbID}/restart`;
  }

  /**
   * - POST - `/database/{dbID}/restore`
   */
  static restore<dbID extends string>(dbID: dbID): `/database/${dbID}/restore` {
    return `/database/${dbID}/restore`;
  }

  /**
   * - PUT - `/database/{dbID}/start`
   */
  static start<dbID extends string>(dbID: dbID): `/database/${dbID}/start` {
    return `/database/${dbID}/start`;
  }

  /**
   * - PUT - `/database/{dbID}/stop`
   */
  static stop<dbID extends string>(dbID: dbID): `/database/${dbID}/stop` {
    return `/database/${dbID}/stop`;
  }

  /**
   * - GET - `/database/presets`
   */
  static presets(): "/database/presets" {
    return "/database/presets";
  }

  /**
   * - GET - `/database/presets/random-names`
   */
  static presetsRandomNames(): "/database/presets/random-names" {
    return "/database/presets/random-names";
  }
}

export const Database: Database = DatabaseRoutes;
