import { type OmitNewableFunctionKeys } from "../../../util/types";

export type Teams = OmitNewableFunctionKeys<typeof TeamsRoutes>

abstract class TeamsRoutes {
  /**
   * - GET - `/teams/apps`
   */
  static apps(): "/teams/apps" {
    return "/teams/apps";
  }

  /**
   * - POST - `/teams/{teamID}/leave`
   */
  static leave<teamID extends string>(teamID: teamID): `/teams/${teamID}/leave` {
    return `/teams/${teamID}/leave`;
  }

  /**
   * - GET - `/teams/{teamID}/members`
   * - POST - `/teams/{teamID}/members`
   * - PATCH - `/teams/{teamID}/members/{memberID}`
   * - DELETE - `/teams/{teamID}/members/{memberID}`
   */
  static members<teamID extends string>(teamID: teamID): `/teams/${teamID}/members`
  static members<teamID extends string, memberID extends string>(teamID: teamID, memberID: memberID): `/teams/${teamID}/members/${memberID}`
  static members<teamID extends string, memberID extends string>(teamID: teamID, memberID?: memberID) {
    return memberID ? `/teams/${teamID}/members/${memberID}` : `/teams/${teamID}/members`;
  }

  /**
   * - GET - `/teams/roles/{roleId}/permissions`
   */
  static rolesPermissions<roleId extends string>(roleId: roleId): `/teams/roles/${roleId}/permissions` {
    return `/teams/roles/${roleId}/permissions`;
  }

  /**
   * - GET - `/teams`
   * - POST - `/teams`
   * - GET - `/teams/{teamID}`
   * - PATCH - `/teams/{teamID}`
   * - DELETE - `/teams/{teamID}`
   */
  static teams(): "/teams"
  static teams<teamID extends string>(teamID: teamID): `/teams/${teamID}`
  static teams<teamID extends string>(teamID?: teamID) {
    return teamID ? `/teams/${teamID}` : "/teams";
  }
}

export const Teams: Teams = TeamsRoutes;
