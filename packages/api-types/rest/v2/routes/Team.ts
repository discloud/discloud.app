import { type OmitNewableFunctionKeys } from "../../../util/types";

export type Team = OmitNewableFunctionKeys<typeof TeamRoutes>

abstract class TeamRoutes {
  /**
   * - GET - `/team`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static team(): "/team" {
    return "/team";
  }

  /**
   * - GET - `/team/{appID}/backup`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static backup<appID extends string>(appID: appID): `/team/${appID}/backup` {
    return `/team/${appID}/backup`;
  }

  /**
   * - PUT - `/team/{appID}/commit`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static commit<appID extends string>(appID: appID): `/team/${appID}/commit` {
    return `/team/${appID}/commit`;
  }

  /**
   * - GET - `/team/{appID}/logs`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static logs<appID extends string>(appID: appID): `/team/${appID}/logs` {
    return `/team/${appID}/logs`;
  }

  /**
   * - PUT - `/team/{appID}/ram`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static ram<appID extends string>(appID: appID): `/team/${appID}/ram` {
    return `/team/${appID}/ram`;
  }

  /**
   * - PUT - `/team/{appID}/restart`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static restart<appID extends string>(appID: appID): `/team/${appID}/restart` {
    return `/team/${appID}/restart`;
  }

  /**
   * - PUT - `/team/{appID}/start`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static start<appID extends string>(appID: appID): `/team/${appID}/start` {
    return `/team/${appID}/start`;
  }

  /**
   * - PUT - `/team/{appID}/status`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static status<appID extends string>(appID: appID): `/team/${appID}/status` {
    return `/team/${appID}/status`;
  }

  /**
   * - PUT - `/team/{appID}/stop`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static stop<appID extends string>(appID: appID): `/team/${appID}/stop` {
    return `/team/${appID}/stop`;
  }
}

export const Team: Team = TeamRoutes;
