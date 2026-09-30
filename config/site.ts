/**
 * Все ссылки лендинга — только здесь.
 * Замените заглушки на реальные адреса; компоненты трогать не нужно.
 */

// TODO: подставить реальные URL
export const CONSULTATION_URL = 'https://example.com/consultation';
export const CATALOG_URL = 'https://example.com/catalog';

/**
 * Языки. Каждый открывается по своему адресу: /pl, /cs, /sk, /en.
 * На главной ("/") показывается DEFAULT_LOCALE.
 */
export const LOCALES = ['pl', 'cs', 'sk', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Языки в переключателе на картинке (слева направо). */
export const SWITCHER_LOCALES = ['pl', 'cs', 'sk', 'en'] as const;

export const LOCALE_NAMES: Record<Locale, string> = {
  pl: 'Polski',
  cs: 'Čeština',
  sk: 'Slovenčina',
  en: 'English',
};
