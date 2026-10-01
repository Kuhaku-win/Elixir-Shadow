import { useState, useEffect } from 'react';
import type { SupportedLocale, LocaleMeta, I18nDictionary } from './types';
import { zhCN } from './locales/zh-CN';
import { en } from './locales/en';
import { ja } from './locales/ja';
import { fr } from './locales/fr';
import { es } from './locales/es';
import { 
  BASE_SPIRIT_NAMES, 
  TECHNIQUE_NAMES, 
  DIFFICULTY_NAMES, 
  FLAVOR_TAG_NAMES, 
  RADAR_DIMENSION_NAMES, 
  GLASSWARE_NAMES 
} from './terms';
import type { BaseSpiritType, TechniqueType, DifficultyLevel, FlavorTag } from '../types/cocktail';

export const STORAGE_KEY = 'elixir_preferred_lang';
export const EVENT_NAME = 'elixir_lang_changed';

export const SUPPORTED_LOCALES: LocaleMeta[] = [
  {
    code: 'zh-CN',
    name: '简体中文',
    englishName: 'Simplified Chinese',
    flag: '🇨🇳',
    tagline: '专业现代鸡尾酒百科与数字吧台'
  },
  {
    code: 'en',
    name: 'English',
    englishName: 'English',
    flag: '🇺🇸',
    tagline: 'Modern Cocktail Codex & Digital Home Bar'
  },
  {
    code: 'ja',
    name: '日本語',
    englishName: 'Japanese',
    flag: '🇯🇵',
    tagline: '本格カクテル百科事典＆デジタルホームバー'
  },
  {
    code: 'fr',
    name: 'Français',
    englishName: 'French',
    flag: '🇫🇷',
    tagline: 'Codex Moderne des Cocktails & Bar Numérique'
  },
  {
    code: 'es',
    name: 'Español',
    englishName: 'Spanish',
    flag: '🇪🇸',
    tagline: 'Códice Moderno de Coctelería & Bar Digital'
  }
];

export const DICTIONARIES: Record<SupportedLocale, I18nDictionary> = {
  'zh-CN': zhCN,
  'en': en,
  'ja': ja,
  'fr': fr,
  'es': es
};

/**
 * Detect browser preferred language, matching against our 5 supported languages
 */
export function detectBrowserLocale(preferredInput?: string | string[] | null): SupportedLocale {
  const browserLangs: string[] = preferredInput
    ? (Array.isArray(preferredInput) ? preferredInput : [preferredInput])
    : (typeof window !== 'undefined' && window.navigator
        ? (navigator.languages ? Array.from(navigator.languages) : [navigator.language || 'zh-CN'])
        : ['zh-CN']);

  for (const lang of browserLangs) {
    if (!lang) continue;
    const lower = lang.toLowerCase();
    if (lower.startsWith('zh')) return 'zh-CN';
    if (lower.startsWith('en')) return 'en';
    if (lower.startsWith('ja')) return 'ja';
    if (lower.startsWith('fr')) return 'fr';
    if (lower.startsWith('es')) return 'es';
  }

  return 'zh-CN';
}

/**
 * Get current active locale (client-safe)
 */
export function getLocale(): SupportedLocale {
  if (typeof window === 'undefined') return 'zh-CN';
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as SupportedLocale | null;
    if (saved && DICTIONARIES[saved]) return saved;
  } catch (e) {}
  return detectBrowserLocale();
}

/**
 * Change locale, persist to localStorage, and broadcast event to all components
 */
export function setLocale(newLocale: SupportedLocale) {
  if (!DICTIONARIES[newLocale]) return;
  try {
    localStorage.setItem(STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
  } catch (e) {}

  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(EVENT_NAME, {
        detail: { locale: newLocale }
      })
    );
  }
}

/**
 * Cycle to the next language in order
 */
export function cycleNextLocale(): SupportedLocale {
  const current = getLocale();
  const index = SUPPORTED_LOCALES.findIndex(l => l.code === current);
  const nextIndex = (index + 1) % SUPPORTED_LOCALES.length;
  const nextLocale = SUPPORTED_LOCALES[nextIndex].code;
  setLocale(nextLocale);
  return nextLocale;
}

// Standalone terminology resolver helpers (usable outside hooks)
export function getBaseSpiritName(spirit: BaseSpiritType, locale: SupportedLocale = getLocale()): string {
  return BASE_SPIRIT_NAMES[spirit]?.[locale] || spirit;
}

export function getTechniqueName(technique: TechniqueType, locale: SupportedLocale = getLocale()): string {
  return TECHNIQUE_NAMES[technique]?.[locale] || technique;
}

export function getDifficultyName(diff: DifficultyLevel, locale: SupportedLocale = getLocale()): string {
  return DIFFICULTY_NAMES[diff]?.[locale] || diff;
}

export function getFlavorTagName(tag: FlavorTag, locale: SupportedLocale = getLocale()): string {
  return FLAVOR_TAG_NAMES[tag]?.[locale] || tag;
}

export function getRadarDimensionName(dim: 'sour' | 'sweet' | 'bitter' | 'strong' | 'fruity' | 'herbal', locale: SupportedLocale = getLocale()): string {
  return RADAR_DIMENSION_NAMES[dim]?.[locale] || dim;
}

export function getGlasswareName(glass: string, locale: SupportedLocale = getLocale()): string {
  return GLASSWARE_NAMES[glass]?.[locale] || glass;
}

/**
 * React hook to consume reactive i18n dictionary and state
 */
export function useI18n() {
  const [locale, setCurrentLocale] = useState<SupportedLocale>('zh-CN');

  useEffect(() => {
    // Initialize with detected / saved locale
    const active = getLocale();
    setCurrentLocale(active);
    try {
      document.documentElement.lang = active;
    } catch (e) {}

    const handleLocaleChange = (e: any) => {
      const updated = e.detail?.locale;
      if (updated && DICTIONARIES[updated as SupportedLocale]) {
        setCurrentLocale(updated as SupportedLocale);
      }
    };

    window.addEventListener(EVENT_NAME, handleLocaleChange);
    return () => window.removeEventListener(EVENT_NAME, handleLocaleChange);
  }, []);

  const dict = DICTIONARIES[locale] || DICTIONARIES['zh-CN'];

  return {
    locale,
    t: dict,
    setLocale,
    cycleNextLocale,
    locales: SUPPORTED_LOCALES,
    // Terminology getters
    getBaseSpiritName: (spirit: BaseSpiritType) => getBaseSpiritName(spirit, locale),
    getTechniqueName: (technique: TechniqueType) => getTechniqueName(technique, locale),
    getDifficultyName: (diff: DifficultyLevel) => getDifficultyName(diff, locale),
    getFlavorTagName: (tag: FlavorTag) => getFlavorTagName(tag, locale),
    getRadarDimensionName: (dim: 'sour' | 'sweet' | 'bitter' | 'strong' | 'fruity' | 'herbal') => getRadarDimensionName(dim, locale),
    getGlasswareName: (glass: string) => getGlasswareName(glass, locale)
  };
}

export * from './types';
export * from './terms';
