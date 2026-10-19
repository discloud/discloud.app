import type { OmitNewableFunctionKeys } from "../../../util/types";

const _user = "/user" as const;

export type User = OmitNewableFunctionKeys<typeof UserRoutes>

abstract class UserRoutes {
  /**
   * - GET - `/user`
   */
  static user() {
    return _user;
  }
}

export const User: User = UserRoutes;
