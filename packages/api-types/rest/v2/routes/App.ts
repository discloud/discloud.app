export const App = new class App {
  /**
   * - GET - `/app/${appID}`
   */
  app<appID extends string>(appID: appID): `/app/${appID}` {
    return `/app/${appID}`;
  }

  /**
   * - PUT - `/app/${appID}/apt`
   * - DELETE - `/app/${appID}/apt`
   */
  apt<appID extends string>(appID: appID): `/app/${appID}/apt` {
    return `/app/${appID}/apt`;
  }

  /**
   * - GET - `/app/${appID}/backup`
   */
  backup<appID extends string>(appID: appID): `/app/${appID}/backup` {
    return `/app/${appID}/backup`;
  }

  /**
   * - PUT - `/app/${appID}/commit`
   */
  commit<appID extends string>(appID: appID): `/app/${appID}/commit` {
    return `/app/${appID}/commit`;
  }

  /**
   * - DELETE - `/app/{appID}/delete`
   */
  delete<appID extends string>(appID: appID): `/app/${appID}/delete` {
    return `/app/${appID}/delete`;
  }

  /**
   * - GET - `/app/{appID}/logs`
   */
  logs<appID extends string>(appID: appID): `/app/${appID}/logs` {
    return `/app/${appID}/logs`;
  }

  /**
   * - PUT - `/app/{appID}/ram`
   */
  ram<appID extends string>(appID: appID): `/app/${appID}/ram` {
    return `/app/${appID}/ram`;
  }

  /**
   * - PUT - `/app/{appID}/restart`
   */
  restart<appID extends string>(appID: appID): `/app/${appID}/restart` {
    return `/app/${appID}/restart`;
  }

  /**
   * - PUT - `/app/{appID}/start`
   */
  start<appID extends string>(appID: appID): `/app/${appID}/start` {
    return `/app/${appID}/start`;
  }

  /**
   * - GET - `/app/{appID}/status`
   */
  status<appID extends string>(appID: appID): `/app/${appID}/status` {
    return `/app/${appID}/status`;
  }

  /**
   * - PUT - `/app/{appID}/stop`
   */
  stop<appID extends string>(appID: appID): `/app/${appID}/stop` {
    return `/app/${appID}/stop`;
  }

  /**
   * - GET - `/app/{appID}/team`
   * - POST - `/app/{appID}/team`
   * - PUT - `/app/{appID}/team`
   * - DELETE - `/app/{appID}/team/{modID}`
   */
  team<appID extends string>(appID: appID): `/app/${appID}/team`
  team<appID extends string, modID extends string>(appID: appID, modID: modID): `/app/${appID}/team/${modID}`
  team<appID extends string, modID extends string>(appID: appID, modID?: modID) {
    return modID ? `/app/${appID}/team/${modID}` : `/app/${appID}/team`;
  }
};