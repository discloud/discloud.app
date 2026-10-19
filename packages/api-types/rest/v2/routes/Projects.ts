import { type OmitNewableFunctionKeys } from "../../../util/types";

const _projects = "/projects" as const;

export type Projects = OmitNewableFunctionKeys<typeof ProjectsRoutes>

abstract class ProjectsRoutes {
  /**
   * - GET - `/projects`
   * - POST - `/projects`
   * - GET - `/projects/{projectID}`
   * - PATCH - `/projects/{projectID}`
   * - DELETE - `/projects/{projectID}`
   */
  static projects(): "/projects"
  static projects<projectID extends string>(projectID: projectID): `/projects/${projectID}`
  static projects<projectID extends string>(projectID?: projectID) {
    return projectID ? `${_projects}/${projectID}` : _projects;
  }

  /**
   * - PATCH - `/projects/{projectID}/team`
   */
  static team<projectID extends string>(projectID: projectID): `/projects/${projectID}/team` {
    return `${_projects}/${projectID}/team`;
  }

  /**
   * - GET - `/projects/{projectID}/apps`
   * - PUT - `/projects/{projectID}/apps/{appID}`
   * - DELETE - `/projects/{projectID}/apps/{appID}`
   */
  static apps<projectID extends string>(projectID: projectID): `/projects/${projectID}/apps`
  static apps<projectID extends string, appID extends string>(projectID: projectID, appID: appID): `/projects/${projectID}/apps/${appID}`
  static apps<projectID extends string, appID extends string>(projectID: projectID, appID?: appID) {
    return appID ? `${_projects}/${projectID}/apps/${appID}` : `${_projects}/${projectID}/apps`;
  }
}

export const Projects: Projects = ProjectsRoutes;
