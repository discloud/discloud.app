import { type OmitNewableFunctionKeys } from "../../../util/types";

const _customdomain = "/customdomain" as const;
const _customdomainCreate = "/customdomain/create" as const;

export type Customdomain = OmitNewableFunctionKeys<typeof CustomdomainRoutes>

abstract class CustomdomainRoutes {
  /**
   * - GET - `/customdomain/{domain}`
   * - DELETE - `/customdomain/{domain}`
   */
  static customdomain<domain extends string>(domain: domain): `/customdomain/${domain}` {
    return `${_customdomain}/${domain}`;
  }

  /**
   * - POST - `/customdomain/create`
   */
  static customdomainCreate() {
    return _customdomainCreate;
  }

  /**
   * - PUT - `/customdomain/{domain}/edit`
   */
  static customdomainEdit<domain extends string>(domain: domain): `/customdomain/${domain}/edit` {
    return `${_customdomain}/${domain}/edit`;
  }

  /**
   * - DELETE - `/customdomain/${domain}/remove`
   */
  static customdomainRemove<domain extends string>(domain: domain): `/customdomain/${domain}/remove` {
    return `${_customdomain}/${domain}/remove`;
  }

  /**
   * - GET - `/customdomain/${domain}/verify`
   */
  static customdomainVerify<domain extends string>(domain: domain): `/customdomain/${domain}/verify` {
    return `${_customdomain}/${domain}/verify`;
  }
}

export const Customdomain: Customdomain = CustomdomainRoutes;
