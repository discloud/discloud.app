import { type OmitNewableFunctionKeys } from "../../../util/types";

const _app = "/app" as const;

export type App = OmitNewableFunctionKeys<typeof AppRoutes>

abstract class AppRoutes {
  /**
   * - GET - `/app/{appID}`
   */
  static app<appID extends string>(appID: appID): `/app/${appID}` {
    return `${_app}/${appID}`;
  }

  /**
   * - PUT - `/app/{appID}/apt`
   * - DELETE - `/app/{appID}/apt`
   */
  static apt<appID extends string>(appID: appID): `/app/${appID}/apt` {
    return `${_app}/${appID}/apt`;
  }

  /**
   * - GET - `/app/{appID}/backup`
   */
  static backup<appID extends string>(appID: appID): `/app/${appID}/backup` {
    return `${_app}/${appID}/backup`;
  }

  /**
   * - PUT - `/app/{appID}/commit`
   */
  static commit<appID extends string>(appID: appID): `/app/${appID}/commit` {
    return `${_app}/${appID}/commit`;
  }

  /**
   * - PUT - `/app/{appID}/console`
   */
  static console<appID extends string>(appID: appID): `/app/${appID}/console` {
    return `${_app}/${appID}/console`;
  }

  /**
   * - DELETE - `/app/{appID}/delete`
   */
  static delete<appID extends string>(appID: appID): `/app/${appID}/delete` {
    return `${_app}/${appID}/delete`;
  }

  /**
   * - PUT `/app/{appID}/exec`
   */
  static exec<appID extends string>(appID: appID): `/app/${appID}/exec` {
    return `${_app}/${appID}/exec`;
  }

  /**
   * - GET `/app/{appID}/explorer`
   * - POST `/app/{appID}/explorer`
   */
  static explorer<appID extends string>(appID: appID): `/app/${appID}/explorer` {
    return `${_app}/${appID}/explorer`;
  }

  /**
   * - PUT `/app/{appID}/explorer/edit`
   */
  static explorerEdit<appID extends string>(appID: appID): `/app/${appID}/explorer/edit` {
    return `${_app}/${appID}/explorer/edit`;
  }

  /**
   * - GET `/app/{appID}/explorer/open`
   */
  static explorerOpen<appID extends string>(appID: appID): `/app/${appID}/explorer/open` {
    return `${_app}/${appID}/explorer/open`;
  }

  /**
   * - GET - `/app/{appID}/logs`
   */
  static logs<appID extends string>(appID: appID): `/app/${appID}/logs` {
    return `${_app}/${appID}/logs`;
  }

  /**
   * - PUT - `/app/{appID}/profile`
   */
  static profile<appID extends string>(appID: appID): `/app/${appID}/profile` {
    return `${_app}/${appID}/profile`;
  }

  /**
   * - PUT - `/app/{appID}/ram`
   */
  static ram<appID extends string>(appID: appID): `/app/${appID}/ram` {
    return `${_app}/${appID}/ram`;
  }

  /**
   * - PUT - `/app/{appID}/restart`
   */
  static restart<appID extends string>(appID: appID): `/app/${appID}/restart` {
    return `${_app}/${appID}/restart`;
  }

  /**
   * - PUT - `/app/{appID}/start`
   */
  static start<appID extends string>(appID: appID): `/app/${appID}/start` {
    return `${_app}/${appID}/start`;
  }

  /**
   * - GET - `/app/{appID}/status`
   */
  static status<appID extends string>(appID: appID): `/app/${appID}/status` {
    return `${_app}/${appID}/status`;
  }

  /**
   * - PUT - `/app/{appID}/stop`
   */
  static stop<appID extends string>(appID: appID): `/app/${appID}/stop` {
    return `${_app}/${appID}/stop`;
  }

  /**
   * - GET - `/app/{appID}/team`
   * - POST - `/app/{appID}/team`
   * - PUT - `/app/{appID}/team`
   * - DELETE - `/app/{appID}/team/{modID}`
   * 
   * @deprecated Removed from the docs and will be deactivated soon.
   */
  static team<appID extends string>(appID: appID): `/app/${appID}/team`
  /** @deprecated Removed from the docs and will be deactivated soon. */
  static team<appID extends string, modID extends string>(appID: appID, modID: modID): `/app/${appID}/team/${modID}`
  /** @deprecated Removed from the docs and will be deactivated soon. */
  static team<appID extends string, modID extends string>(appID: appID, modID?: modID) {
    return modID ? `${_app}/${appID}/team/${modID}` : `${_app}/${appID}/team`;
  }
}

export const App: App = AppRoutes;
