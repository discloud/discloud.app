export const Team = new class Team {
  /**
   * - GET - `/team`
   */
  team(): "/team" {
    return "/team";
  }

  /**
   * - GET - `/app/${appID}/backup`
   */
  backup<appID extends string>(appID: appID): `/team/${appID}/backup` {
    return `/team/${appID}/backup`;
  }

  /**
   * - PUT - `/app/{appID}/commit`
   */
  commit<appID extends string>(appID: appID): `/team/${appID}/commit` {
    return `/team/${appID}/commit`;
  }

  /**
   * - PUT - `/app/{appID}/restart`
   */
  restart<appID extends string>(appID: appID): `/team/${appID}/restart` {
    return `/team/${appID}/restart`;
  }

  /**
   * - PUT - `/app/{appID}/start`
   */
  start<appID extends string>(appID: appID): `/team/${appID}/start` {
    return `/team/${appID}/start`;
  }

  /**
   * - PUT - `/app/{appID}/stop`
   */
  stop<appID extends string>(appID: appID): `/team/${appID}/stop` {
    return `/team/${appID}/stop`;
  }
};