import type { OmitNewableFunctionKeys } from "../../../util/types";

const _subdomain = "/subdomain" as const;

export type Subdomain = OmitNewableFunctionKeys<typeof SubdomainRoutes>

abstract class SubdomainRoutes {
  /**
   * - GET - `/subdomain/{subdomain}`
   * - POST - `/subdomain/{subdomain}`
   * - DELETE - `/subdomain/{subdomain}`
   */
  static subdomain<subdomain extends string>(subdomain: subdomain): `/subdomain/${subdomain}` {
    return `${_subdomain}/${subdomain}`;
  }
}

export const Subdomain: Subdomain = SubdomainRoutes;
