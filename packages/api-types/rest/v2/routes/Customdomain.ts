import { type OmitNewableFunctionKeys } from "../../../util/types";

export type Customdomain = OmitNewableFunctionKeys<typeof CustomdomainRoutes>

abstract class CustomdomainRoutes {
  /**
   * - GET - `/customdomain/{domain}`
   * - DELETE - `/customdomain/{domain}`
   */
  static customdomain<domain extends string>(domain: domain): `/customdomain/${domain}` {
    return `/customdomain/${domain}`;
  }

  /**
   * - POST - `/customdomain/create`
   */
  static customdomainCreate(): "/customdomain/create" {
    return "/customdomain/create";
  }

  /**
   * - PUT - `/customdomain/{domain}/edit`
   */
  static customdomainEdit<domain extends string>(domain: domain): `/customdomain/${domain}/edit` {
    return `/customdomain/${domain}/edit`;
  }

  /**
   * - DELETE - `/customdomain/${domain}/remove`
   */
  static customdomainRemove<domain extends string>(domain: domain): `/customdomain/${domain}/remove` {
    return `/customdomain/${domain}/remove`;
  }

  /**
   * - GET - `/customdomain/${domain}/verify`
   */
  static customdomainVerify<domain extends string>(domain: domain): `/customdomain/${domain}/verify` {
    return `/customdomain/${domain}/verify`;
  }
}

export const Customdomain: Customdomain = CustomdomainRoutes;
