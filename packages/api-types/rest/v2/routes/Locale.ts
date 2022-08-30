export const Locale = new class Locale {
  /**
   * - PUT - `/locale/{locale}`
   */
  locale<locale extends string>(locale: locale): `/locale/${locale}` {
    return `/locale/${locale}`;
  }
};