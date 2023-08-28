export abstract class Locale {
  /**
   * - PUT - `/locale/{locale}`
   */
  static locale<locale extends string>(locale: locale): `/locale/${locale}` {
    return `/locale/${locale}`;
  }
}
