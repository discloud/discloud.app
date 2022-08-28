export const Locale = new class Locale {
  /**
   * - GET - `/locale/{locale}`
   */
  locale<locale extends string>(locale: locale): `/locale/${locale}` {
    return `/locale/${locale}`;
  }
};