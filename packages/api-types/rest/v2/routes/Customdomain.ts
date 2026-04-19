import { type OmitNewableFunctionKeys } from "../../../util/types";

export type Customdomain = OmitNewableFunctionKeys<typeof CustomdomainRoutes>

abstract class CustomdomainRoutes {
  /**
   * - GET - `/customdomain/{Domain}`
   * - DELETE - `/customdomain/{Domain}`
   */
  static customdomain<Domain extends string>(Domain: Domain): `/customdomain/${Domain}` {
    return `/customdomain/${Domain}`;
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
   * - DELETE - `/customdomain/remove/${Domain}`
   */
  static customdomainRemove<Domain extends string>(Domain: Domain): `/customdomain/remove/${Domain}` {
    return `/customdomain/remove/${Domain}`;
  }

  /**
   * - GET - `/customdomain/verify/${Domain}`
   */
  static customdomainVerify<Customdomain extends string>(Customdomain: Customdomain): `/customdomain/verify/${Customdomain}` {
    return `/customdomain/verify/${Customdomain}`;
  }
}

export const Customdomain: Customdomain = CustomdomainRoutes;
