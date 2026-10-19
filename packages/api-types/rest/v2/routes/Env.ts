import { type OmitNewableFunctionKeys } from "../../../util/types";

export type Env = OmitNewableFunctionKeys<typeof EnvRoutes>

abstract class EnvRoutes {
  /**
   * - GET - `/env/account`
   * - PUT - `/env/account`
   * - DELETE - `/env/account`
   */
  static account(): "/env/account" {
    return "/env/account";
  }

  /**
   * - GET - `/env/app/{appID}`
   * - PUT - `/env/app/{appID}`
   * - DELETE - `/env/app/{appID}`
   */
  static app<appID extends string>(appID: appID): `/env/app/${appID}` {
    return `/env/app/${appID}`;
  }

  /**
   * - GET - `/env/project/{projectID}`
   * - PUT - `/env/project/{projectID}`
   * - DELETE - `/env/project/{projectID}`
   */
  static project<projectID extends string>(projectID: projectID): `/env/project/${projectID}` {
    return `/env/project/${projectID}`;
  }
}

export const Env: Env = EnvRoutes;
