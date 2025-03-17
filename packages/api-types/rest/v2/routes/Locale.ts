import { type OmitNewableFunctionKeys } from "../../../util/types";

export type Locale = OmitNewableFunctionKeys<typeof LocaleRoutes>

abstract class LocaleRoutes {
  /**
   * - PUT - `/locale/{locale}`
   */
  static locale<locale extends string>(locale: locale): `/locale/${locale}` {
    return `/locale/${locale}`;
  }
}

export const Locale: Locale = LocaleRoutes;
