import { type OmitNewableFunctionKeys } from "../../../util/types";

const _locale = "/locale" as const;

export type Locale = OmitNewableFunctionKeys<typeof LocaleRoutes>

abstract class LocaleRoutes {
  /**
   * - PUT - `/locale/{locale}`
   */
  static locale<locale extends string>(locale: locale): `/locale/${locale}` {
    return `${_locale}/${locale}`;
  }
}

export const Locale: Locale = LocaleRoutes;
