import { type OmitNewableFunctionKeys } from "../../../util/types";

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
    return projectID ? `/projects/${projectID}` : "/projects";
  }

  /**
   * - PATCH - `/projects/{projectID}/team`
   */
  static team<projectID extends string>(projectID: projectID): `/projects/${projectID}/team` {
    return `/projects/${projectID}/team`;
  }

  /**
   * - GET - `/projects/{projectID}/apps`
   * - PUT - `/projects/{projectID}/apps/{appID}`
   * - DELETE - `/projects/{projectID}/apps/{appID}`
   */
  static apps<projectID extends string>(projectID: projectID): `/projects/${projectID}/apps`
  static apps<projectID extends string, appID extends string>(projectID: projectID, appID: appID): `/projects/${projectID}/apps/${appID}`
  static apps<projectID extends string, appID extends string>(projectID: projectID, appID?: appID) {
    return appID ? `/projects/${projectID}/apps/${appID}` : `/projects/${projectID}/apps`;
  }
}

export const Projects: Projects = ProjectsRoutes;
