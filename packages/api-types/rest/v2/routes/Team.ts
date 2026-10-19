import { type OmitNewableFunctionKeys } from "../../../util/types";

const _team = "/team" as const;

export type Team = OmitNewableFunctionKeys<typeof TeamRoutes>

abstract class TeamRoutes {
  /**
   * - GET - `/team`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static team() {
    return _team;
  }

  /**
   * - GET - `/team/{appID}/backup`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static backup<appID extends string>(appID: appID): `/team/${appID}/backup` {
    return `${_team}/${appID}/backup`;
  }

  /**
   * - PUT - `/team/{appID}/commit`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static commit<appID extends string>(appID: appID): `/team/${appID}/commit` {
    return `${_team}/${appID}/commit`;
  }

  /**
   * - GET - `/team/{appID}/logs`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static logs<appID extends string>(appID: appID): `/team/${appID}/logs` {
    return `${_team}/${appID}/logs`;
  }

  /**
   * - PUT - `/team/{appID}/ram`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static ram<appID extends string>(appID: appID): `/team/${appID}/ram` {
    return `${_team}/${appID}/ram`;
  }

  /**
   * - PUT - `/team/{appID}/restart`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static restart<appID extends string>(appID: appID): `/team/${appID}/restart` {
    return `${_team}/${appID}/restart`;
  }

  /**
   * - PUT - `/team/{appID}/start`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static start<appID extends string>(appID: appID): `/team/${appID}/start` {
    return `${_team}/${appID}/start`;
  }

  /**
   * - PUT - `/team/{appID}/status`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static status<appID extends string>(appID: appID): `/team/${appID}/status` {
    return `${_team}/${appID}/status`;
  }

  /**
   * - PUT - `/team/{appID}/stop`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static stop<appID extends string>(appID: appID): `/team/${appID}/stop` {
    return `${_team}/${appID}/stop`;
  }
}

export const Team: Team = TeamRoutes;
