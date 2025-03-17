import { type OmitNewableFunctionKeys } from "../../../util/types";

export type Team = OmitNewableFunctionKeys<typeof TeamRoutes>

abstract class TeamRoutes {
  /**
   * - GET - `/team`
   */
  static team(): "/team" {
    return "/team";
  }

  /**
   * - GET - `/app/{appID}/backup`
   */
  static backup<appID extends string>(appID: appID): `/team/${appID}/backup` {
    return `/team/${appID}/backup`;
  }

  /**
   * - PUT - `/app/{appID}/commit`
   */
  static commit<appID extends string>(appID: appID): `/team/${appID}/commit` {
    return `/team/${appID}/commit`;
  }

  /**
   * - GET - `/team/{appID}/logs`
   */
  static logs<appID extends string>(appID: appID): `/team/${appID}/logs` {
    return `/team/${appID}/logs`;
  }

  /**
   * - PUT - `/team/{appID}/ram`
   */
  static ram<appID extends string>(appID: appID): `/team/${appID}/ram` {
    return `/team/${appID}/ram`;
  }

  /**
   * - PUT - `/app/{appID}/restart`
   */
  static restart<appID extends string>(appID: appID): `/team/${appID}/restart` {
    return `/team/${appID}/restart`;
  }

  /**
   * - PUT - `/app/{appID}/start`
   */
  static start<appID extends string>(appID: appID): `/team/${appID}/start` {
    return `/team/${appID}/start`;
  }

  /**
   * - PUT - `/app/{appID}/status`
   */
  static status<appID extends string>(appID: appID): `/team/${appID}/status` {
    return `/team/${appID}/status`;
  }

  /**
   * - PUT - `/app/{appID}/stop`
   */
  static stop<appID extends string>(appID: appID): `/team/${appID}/stop` {
    return `/team/${appID}/stop`;
  }
}

export const Team: Team = TeamRoutes;
