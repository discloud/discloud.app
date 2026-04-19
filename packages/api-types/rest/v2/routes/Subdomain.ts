import { type OmitNewableFunctionKeys } from "../../../util/types";

export type Subdomain = OmitNewableFunctionKeys<typeof SubdomainRoutes>

abstract class SubdomainRoutes {
  /**
   * - GET - `/subdomain/{Subdomain}`
   * - POST - `/subdomain/{Subdomain}`
   * - DELETE - `/subdomain/{Subdomain}`
   */
  static subdomain<Subdomain extends string>(Subdomain: Subdomain): `/subdomain/${Subdomain}` {
    return `/subdomain/${Subdomain}`;
  }

  /**
   * - GET - `/subdomain/list`
   */
  static subdomainList(): "/subdomain/list" {
    return "/subdomain/list";
  }
}

export const Subdomain: Subdomain = SubdomainRoutes;
