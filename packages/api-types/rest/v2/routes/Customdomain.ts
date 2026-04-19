import { type OmitNewableFunctionKeys } from "../../../util/types";

export type Customdomain = OmitNewableFunctionKeys<typeof CustomdomainRoutes>

abstract class CustomdomainRoutes {
  /**
   * - GET - `/customdomain/{Customdomain}`
   * - DELETE - `/customdomain/{Customdomain}`
   */
  static customdomain<Customdomain extends string>(Customdomain: Customdomain): `/customdomain/${Customdomain}` {
    return `/customdomain/${Customdomain}`;
  }

  /**
   * - POST - `/customdomain/create`
   */
  static customdomainCreate(): "/customdomain/create" {
    return "/customdomain/create";
  }

  /**
   * - PUT - `/customdomain/edit`
   */
  static customdomainEdit(): "/customdomain/edit" {
    return "/customdomain/edit";
  }

  /**
   * - GET - `/customdomain/list`
   */
  static customdomainList(): "/customdomain/list" {
    return "/customdomain/list";
  }

  /**
   * - GET - `/customdomain/verify/${Customdomain}`
   */
  static customdomainVerify<Customdomain extends string>(Customdomain: Customdomain): `/customdomain/verify/${Customdomain}` {
    return `/customdomain/verify/${Customdomain}`;
  }
}

export const Customdomain: Customdomain = CustomdomainRoutes;
