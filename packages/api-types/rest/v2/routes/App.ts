import { type OmitNewableFunctionKeys } from "../../../util/types";

export type App = OmitNewableFunctionKeys<typeof AppRoutes>

abstract class AppRoutes {
  /**
   * - GET - `/app/{appID}`
   */
  static app<appID extends string>(appID: appID): `/app/${appID}` {
    return `/app/${appID}`;
  }

  /**
   * - PUT - `/app/{appID}/apt`
   * - DELETE - `/app/{appID}/apt`
   */
  static apt<appID extends string>(appID: appID): `/app/${appID}/apt` {
    return `/app/${appID}/apt`;
  }

  /**
   * - GET - `/app/{appID}/backup`
   */
  static backup<appID extends string>(appID: appID): `/app/${appID}/backup` {
    return `/app/${appID}/backup`;
  }

  /**
   * - PUT - `/app/{appID}/commit`
   */
  static commit<appID extends string>(appID: appID): `/app/${appID}/commit` {
    return `/app/${appID}/commit`;
  }

  /**
   * - PUT - `/app/{appID}/console`
   */
  static console<appID extends string>(appID: appID): `/app/${appID}/console` {
    return `/app/${appID}/console`;
  }

  /**
   * - DELETE - `/app/{appID}/delete`
   */
  static delete<appID extends string>(appID: appID): `/app/${appID}/delete` {
    return `/app/${appID}/delete`;
  }

  /**
   * - GET - `/app/{appID}/logs`
   */
  static logs<appID extends string>(appID: appID): `/app/${appID}/logs` {
    return `/app/${appID}/logs`;
  }

  /**
   * - PUT - `/app/{appID}/profile`
   */
  static profile<appID extends string>(appID: appID): `/app/${appID}/profile` {
    return `/app/${appID}/profile`;
  }

  /**
   * - PUT - `/app/{appID}/ram`
   */
  static ram<appID extends string>(appID: appID): `/app/${appID}/ram` {
    return `/app/${appID}/ram`;
  }

  /**
   * - PUT - `/app/{appID}/restart`
   */
  static restart<appID extends string>(appID: appID): `/app/${appID}/restart` {
    return `/app/${appID}/restart`;
  }

  /**
   * - PUT - `/app/{appID}/start`
   */
  static start<appID extends string>(appID: appID): `/app/${appID}/start` {
    return `/app/${appID}/start`;
  }

  /**
   * - GET - `/app/{appID}/status`
   */
  static status<appID extends string>(appID: appID): `/app/${appID}/status` {
    return `/app/${appID}/status`;
  }

  /**
   * - PUT - `/app/{appID}/stop`
   */
  static stop<appID extends string>(appID: appID): `/app/${appID}/stop` {
    return `/app/${appID}/stop`;
  }

  /**
   * - GET - `/app/{appID}/team`
   * - POST - `/app/{appID}/team`
   * - PUT - `/app/{appID}/team`
   * - DELETE - `/app/{appID}/team/{modID}`
   */
  static team<appID extends string>(appID: appID): `/app/${appID}/team`
  static team<appID extends string, modID extends string>(appID: appID, modID: modID): `/app/${appID}/team/${modID}`
  static team<appID extends string, modID extends string>(appID: appID, modID?: modID) {
    return modID ? `/app/${appID}/team/${modID}` : `/app/${appID}/team`;
  }
}

export const App: App = AppRoutes;
