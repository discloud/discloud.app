export const Locale = new class Locale {
  locale<locale extends string>(locale: locale): `/locale/${locale}` {
    return `/locale/${locale}`;
  }
};