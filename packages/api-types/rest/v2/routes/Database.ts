import { type OmitNewableFunctionKeys } from "../../../util/types";

const _database = "/database" as const;
const _databasePresets = `${_database}/presets` as const;
const _databasePresetsRandomNames = `${_databasePresets}/random-names` as const;

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
    return dbID ? `${_database}/${dbID}` : _database;
  }

  /**
   * - POST - `/database/{dbID}/backup`
   */
  static backup<dbID extends string>(dbID: dbID): `/database/${dbID}/backup` {
    return `${_database}/${dbID}/backup`;
  }

  /**
   * - GET - `/database/{dbID}/backups`
   * - GET - `/database/{dbID}/backups/{backupID}/download`
   */
  static backups<dbID extends string>(dbID: dbID): `/database/${dbID}/backups`
  static backups<dbID extends string, backupID extends string>(dbID: dbID, backupID: backupID): `/database/${dbID}/backups/${backupID}/download`
  static backups<dbID extends string, backupID extends string>(dbID: dbID, backupID?: backupID) {
    return backupID ? `${_database}/${dbID}/backups/${backupID}/download` : `${_database}/${dbID}/backups`;
  }

  /**
   * - GET - `/database/{dbID}/logs`
   * - DELETE - `/database/{dbID}/logs`
   */
  static logs<dbID extends string>(dbID: dbID): `/database/${dbID}/logs` {
    return `${_database}/${dbID}/logs`;
  }

  /**
   * - PUT - `/database/{dbID}/restart`
   */
  static restart<dbID extends string>(dbID: dbID): `/database/${dbID}/restart` {
    return `${_database}/${dbID}/restart`;
  }

  /**
   * - POST - `/database/{dbID}/restore`
   */
  static restore<dbID extends string>(dbID: dbID): `/database/${dbID}/restore` {
    return `${_database}/${dbID}/restore`;
  }

  /**
   * - PUT - `/database/{dbID}/start`
   */
  static start<dbID extends string>(dbID: dbID): `/database/${dbID}/start` {
    return `${_database}/${dbID}/start`;
  }

  /**
   * - PUT - `/database/{dbID}/stop`
   */
  static stop<dbID extends string>(dbID: dbID): `/database/${dbID}/stop` {
    return `${_database}/${dbID}/stop`;
  }

  /**
   * - GET - `/database/presets`
   */
  static presets() {
    return _databasePresets;
  }

  /**
   * - GET - `/database/presets/random-names`
   */
  static presetsRandomNames() {
    return _databasePresetsRandomNames;
  }
}

export const Database: Database = DatabaseRoutes;
