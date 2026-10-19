import { type OmitNewableFunctionKeys } from "../../../util/types";

const _env = "/env" as const;
const _envAccount = `${_env}/account` as const;
const _envApp = `${_env}/app` as const;
const _envProject = `${_env}/project` as const;

export type Env = OmitNewableFunctionKeys<typeof EnvRoutes>

abstract class EnvRoutes {
  /**
   * - GET - `/env/account`
   * - PUT - `/env/account`
   * - DELETE - `/env/account`
   */
  static account() {
    return _envAccount;
  }

  /**
   * - GET - `/env/app/{appID}`
   * - PUT - `/env/app/{appID}`
   * - DELETE - `/env/app/{appID}`
   */
  static app<appID extends string>(appID: appID): `/env/app/${appID}` {
    return `${_envApp}/${appID}`;
  }

  /**
   * - GET - `/env/project/{projectID}`
   * - PUT - `/env/project/{projectID}`
   * - DELETE - `/env/project/{projectID}`
   */
  static project<projectID extends string>(projectID: projectID): `/env/project/${projectID}` {
    return `${_envProject}/${projectID}`;
  }
}

export const Env: Env = EnvRoutes;
