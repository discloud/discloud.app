import { type OmitNewableFunctionKeys } from "../../../util/types";

export type User = OmitNewableFunctionKeys<typeof UserRoutes>

abstract class UserRoutes {
  /**
   * - GET - `/user`
   */
  static user(): "/user" {
    return "/user";
  }
}

export const User: User = UserRoutes;
