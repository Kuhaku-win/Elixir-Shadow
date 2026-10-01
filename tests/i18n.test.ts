import { describe, it, expect, beforeEach } from 'vitest';
import { 
  SUPPORTED_LOCALES, 
  detectBrowserLocale, 
  getLocale, 
  setLocale, 
  cycleNextLocale, 
  getBaseSpiritName, 
  getTechniqueName, 
  getGlasswareName, 
  getFlavorTagName, 
  getDifficultyName,
  getRadarDimensionName
} from '../src/i18n';
import { zhCN } from '../src/i18n/locales/zh-CN';
import { en } from '../src/i18n/locales/en';
import { ja } from '../src/i18n/locales/ja';
import { fr } from '../src/i18n/locales/fr';
import { es } from '../src/i18n/locales/es';
import type { SupportedLocale } from '../src/i18n/types';

// Mock localStorage and window for vitest node environment
const storageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(globalThis, 'localStorage', {
  value: storageMock,
  writable: true
});

if (typeof window === 'undefined') {
  (globalThis as any).window = {
    dispatchEvent: () => true
  };
}

describe('Internationalization (i18n) Engine', () => {
  beforeEach(() => {
    localStorage.clear();
    setLocale('zh-CN');
  });

  describe('Locale dictionary structural integrity', () => {
    const dictionaries = {
      'zh-CN': zhCN,
      'en': en,
      'ja': ja,
      'fr': fr,
      'es': es,
    };

    it('contains all 5 supported locales in constants', () => {
      expect(SUPPORTED_LOCALES).toHaveLength(5);
      const codes = SUPPORTED_LOCALES.map(l => l.code);
      expect(codes).toEqual(['zh-CN', 'en', 'ja', 'fr', 'es']);
    });

    it('has identical dictionary top-level keys across all 5 languages', () => {
      const topKeysZh = Object.keys(zhCN);
      for (const [code, dict] of Object.entries(dictionaries)) {
        expect(Object.keys(dict), `Locale ${code} top keys match`).toEqual(topKeysZh);
      }
    });

    it('has matching subkeys in nav and common categories', () => {
      for (const [code, dict] of Object.entries(dictionaries)) {
        expect(Object.keys(dict.nav), `Locale ${code} nav keys match`).toEqual(Object.keys(zhCN.nav));
        expect(Object.keys(dict.common), `Locale ${code} common keys match`).toEqual(Object.keys(zhCN.common));
        expect(Object.keys(dict.recipes), `Locale ${code} recipes keys match`).toEqual(Object.keys(zhCN.recipes));
        expect(Object.keys(dict.myBar), `Locale ${code} myBar keys match`).toEqual(Object.keys(zhCN.myBar));
        expect(Object.keys(dict.lab), `Locale ${code} lab keys match`).toEqual(Object.keys(zhCN.lab));
        expect(Object.keys(dict.partyMenu), `Locale ${code} partyMenu keys match`).toEqual(Object.keys(zhCN.partyMenu));
      }
    });
  });

  describe('Locale switching and cycling', () => {
    it('defaults to zh-CN when no stored preference exists', () => {
      expect(getLocale()).toBe('zh-CN');
    });

    it('sets and retrieves locale via setLocale', () => {
      setLocale('en');
      expect(getLocale()).toBe('en');
      expect(localStorage.getItem('elixir_preferred_lang')).toBe('en');

      setLocale('ja');
      expect(getLocale()).toBe('ja');
      expect(localStorage.getItem('elixir_preferred_lang')).toBe('ja');
    });

    it('cycles sequentially through all 5 languages: zh-CN -> en -> ja -> fr -> es -> zh-CN', () => {
      setLocale('zh-CN');
      expect(cycleNextLocale()).toBe('en');
      expect(cycleNextLocale()).toBe('ja');
      expect(cycleNextLocale()).toBe('fr');
      expect(cycleNextLocale()).toBe('es');
      expect(cycleNextLocale()).toBe('zh-CN');
    });
  });

  describe('Browser locale auto-detection', () => {
    it('detects English locales properly', () => {
      expect(detectBrowserLocale('en-US')).toBe('en');
      expect(detectBrowserLocale('en-GB')).toBe('en');
    });

    it('detects Japanese locales properly', () => {
      expect(detectBrowserLocale('ja-JP')).toBe('ja');
      expect(detectBrowserLocale('ja')).toBe('ja');
    });

    it('detects French and Spanish locales properly', () => {
      expect(detectBrowserLocale('fr-FR')).toBe('fr');
      expect(detectBrowserLocale('es-ES')).toBe('es');
      expect(detectBrowserLocale('es-MX')).toBe('es');
    });

    it('defaults unknown languages to zh-CN', () => {
      expect(detectBrowserLocale('de-DE')).toBe('zh-CN');
      expect(detectBrowserLocale('ru-RU')).toBe('zh-CN');
      expect(detectBrowserLocale(null)).toBe('zh-CN');
    });
  });

  describe('Domain terminology resolution across all 5 languages', () => {
    const locales: SupportedLocale[] = ['zh-CN', 'en', 'ja', 'fr', 'es'];

    it('resolves base spirits in all 5 languages', () => {
      expect(getBaseSpiritName('Gin', 'zh-CN')).toBe('金酒');
      expect(getBaseSpiritName('Gin', 'en')).toBe('Gin');
      expect(getBaseSpiritName('Gin', 'ja')).toBe('ジン');
      expect(getBaseSpiritName('Gin', 'fr')).toBe('Gin');
      expect(getBaseSpiritName('Gin', 'es')).toBe('Ginebra');

      expect(getBaseSpiritName('Whiskey', 'zh-CN')).toBe('威士忌');
      expect(getBaseSpiritName('Whiskey', 'ja')).toBe('ウイスキー');
      expect(getBaseSpiritName('Whiskey', 'fr')).toBe('Whisky');
    });

    it('resolves techniques in all 5 languages', () => {
      expect(getTechniqueName('Shake', 'zh-CN')).toBe('摇荡法 (Shake)');
      expect(getTechniqueName('Shake', 'en')).toBe('Shake');
      expect(getTechniqueName('Shake', 'ja')).toBe('シェイク (Shake)');
      expect(getTechniqueName('Shake', 'fr')).toBe('Shaker');
      expect(getTechniqueName('Shake', 'es')).toBe('Agitar (Shake)');
    });

    it('resolves difficulties in all 5 languages', () => {
      for (const loc of locales) {
        expect(getDifficultyName('easy', loc)).toBeTruthy();
        expect(getDifficultyName('medium', loc)).toBeTruthy();
        expect(getDifficultyName('advanced', loc)).toBeTruthy();
      }
    });

    it('resolves flavor tags in all 5 languages', () => {
      expect(getFlavorTagName('柑橘系', 'zh-CN')).toBe('柑橘系');
      expect(getFlavorTagName('柑橘系', 'en')).toBe('Citrus');
      expect(getFlavorTagName('柑橘系', 'ja')).toBe('シトラス');
      expect(getFlavorTagName('柑橘系', 'fr')).toBe('Agrumes');
      expect(getFlavorTagName('柑橘系', 'es')).toBe('Cítrico');
    });

    it('resolves radar dimensions in all 5 languages', () => {
      for (const loc of locales) {
        expect(getRadarDimensionName('sweet', loc)).toBeTruthy();
        expect(getRadarDimensionName('sour', loc)).toBeTruthy();
        expect(getRadarDimensionName('bitter', loc)).toBeTruthy();
        expect(getRadarDimensionName('strong', loc)).toBeTruthy();
      }
    });
  });
});
