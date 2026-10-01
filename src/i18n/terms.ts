import type { SupportedLocale } from './types';
import type { BaseSpiritType, TechniqueType, DifficultyLevel, FlavorTag } from '../types/cocktail';

export const BASE_SPIRIT_NAMES: Record<BaseSpiritType, Record<SupportedLocale, string>> = {
  Gin: {
    'zh-CN': '金酒',
    en: 'Gin',
    ja: 'ジン',
    fr: 'Gin',
    es: 'Ginebra'
  },
  Vodka: {
    'zh-CN': '伏特加',
    en: 'Vodka',
    ja: 'ウォッカ',
    fr: 'Vodka',
    es: 'Vodka'
  },
  Rum: {
    'zh-CN': '朗姆酒',
    en: 'Rum',
    ja: 'ラム',
    fr: 'Rhum',
    es: 'Ron'
  },
  Whiskey: {
    'zh-CN': '威士忌',
    en: 'Whiskey',
    ja: 'ウイスキー',
    fr: 'Whisky',
    es: 'Whisky'
  },
  Tequila: {
    'zh-CN': '龙舌兰',
    en: 'Tequila',
    ja: 'テキーラ',
    fr: 'Tequila',
    es: 'Tequila'
  },
  Brandy: {
    'zh-CN': '白兰地',
    en: 'Brandy',
    ja: 'ブランデー',
    fr: 'Cognac / Brandy',
    es: 'Brandy / Coñac'
  },
  Baijiu: {
    'zh-CN': '中国白酒',
    en: 'Chinese Baijiu',
    ja: '白酒 (バイジウ)',
    fr: 'Baijiu chinois',
    es: 'Baijiu chino'
  },
  Liqueur: {
    'zh-CN': '利口酒 / 开胃酒',
    en: 'Liqueur / Aperitif',
    ja: 'リキュール',
    fr: 'Liqueur / Apéritif',
    es: 'Licor / Aperitivo'
  },
  None: {
    'zh-CN': '无酒精 / 软饮',
    en: 'Non-Alcoholic',
    ja: 'ノンアルコール',
    fr: 'Sans alcool',
    es: 'Sin alcohol'
  }
};

export const TECHNIQUE_NAMES: Record<TechniqueType, Record<SupportedLocale, string>> = {
  Shake: {
    'zh-CN': '摇荡法 (Shake)',
    en: 'Shake',
    ja: 'シェイク (Shake)',
    fr: 'Shaker',
    es: 'Agitar (Shake)'
  },
  Stir: {
    'zh-CN': '搅拌法 (Stir)',
    en: 'Stir',
    ja: 'ステア (Stir)',
    fr: 'Mélanger au verre (Stir)',
    es: 'Remover (Stir)'
  },
  Build: {
    'zh-CN': '直调法 (Build)',
    en: 'Build in Glass',
    ja: 'ビルド (Build)',
    fr: 'Construire au verre',
    es: 'Construir directo (Build)'
  },
  Muddle: {
    'zh-CN': '捣压法 (Muddle)',
    en: 'Muddle',
    ja: 'マドル (Muddle)',
    fr: 'Pilonner (Muddle)',
    es: 'Majar (Muddle)'
  },
  Blend: {
    'zh-CN': '搅打法 (Blend)',
    en: 'Blend',
    ja: 'ブレンド (Blend)',
    fr: 'Mixer (Blend)',
    es: 'Licuar (Blend)'
  },
  Layer: {
    'zh-CN': '分层法 (Layer)',
    en: 'Layer',
    ja: 'フロート / レイヤー',
    fr: 'Superposer (Layer)',
    es: 'Capas (Layer)'
  },
  Float: {
    'zh-CN': '漂浮法 (Float)',
    en: 'Float',
    ja: 'フロート (Float)',
    fr: 'Faire flotter',
    es: 'Flotar (Float)'
  }
};

export const DIFFICULTY_NAMES: Record<DifficultyLevel, Record<SupportedLocale, string>> = {
  easy: {
    'zh-CN': '简单',
    en: 'Easy',
    ja: '初級',
    fr: 'Facile',
    es: 'Fácil'
  },
  medium: {
    'zh-CN': '中等',
    en: 'Medium',
    ja: '中級',
    fr: 'Moyen',
    es: 'Medio'
  },
  advanced: {
    'zh-CN': '进阶',
    en: 'Advanced',
    ja: '上級',
    fr: 'Avancé',
    es: 'Avanzado'
  }
};

export const FLAVOR_TAG_NAMES: Record<FlavorTag, Record<SupportedLocale, string>> = {
  '柑橘系': { 'zh-CN': '柑橘系', en: 'Citrus', ja: 'シトラス', fr: 'Agrumes', es: 'Cítrico' },
  '甜系': { 'zh-CN': '甜系', en: 'Sweet', ja: 'スウィート', fr: 'Doux', es: 'Dulce' },
  '苦系': { 'zh-CN': '苦系', en: 'Bitter', ja: 'ビター', fr: 'Amer', es: 'Amargo' },
  '烟熏系': { 'zh-CN': '烟熏系', en: 'Smoky', ja: 'スモーキー', fr: 'Fumé', es: 'Ahumado' },
  '草本系': { 'zh-CN': '草本系', en: 'Herbal', ja: 'ハーバル', fr: 'Herbacé', es: 'Herbal' },
  '果香系': { 'zh-CN': '果香系', en: 'Fruity', ja: 'フルーティー', fr: 'Fruité', es: 'Frutal' },
  '辛辣系': { 'zh-CN': '辛辣系', en: 'Spicy', ja: 'スパイシー', fr: 'Épicé', es: 'Especiado' },
  '清爽系': { 'zh-CN': '清爽系', en: 'Refreshing', ja: '爽快 / リフレッシュ', fr: 'Rafraîchissant', es: 'Refrescante' },
  '烈酒感': { 'zh-CN': '烈酒感', en: 'Spirit-Forward', ja: 'ストロング / 濃厚', fr: 'Corsé', es: 'Fuerte' },
  '奶香系': { 'zh-CN': '奶香系', en: 'Creamy', ja: 'クリーミー', fr: 'Crémeux', es: 'Cremoso' }
};

export const RADAR_DIMENSION_NAMES: Record<'sour' | 'sweet' | 'bitter' | 'strong' | 'fruity' | 'herbal', Record<SupportedLocale, string>> = {
  sour: { 'zh-CN': '酸度', en: 'Sour', ja: '酸味', fr: 'Acidité', es: 'Acidez' },
  sweet: { 'zh-CN': '甜度', en: 'Sweet', ja: '甘味', fr: 'Douceur', es: 'Dulzura' },
  bitter: { 'zh-CN': '苦度', en: 'Bitter', ja: '苦味', fr: 'Amertume', es: 'Amargor' },
  strong: { 'zh-CN': '烈度', en: 'Strength', ja: 'アルコール感', fr: 'Puissance', es: 'Potencia' },
  fruity: { 'zh-CN': '果香', en: 'Fruity', ja: 'フルーティー', fr: 'Fruit', es: 'Frutal' },
  herbal: { 'zh-CN': '草本', en: 'Herbal', ja: 'ハーブ・スパイス', fr: 'Herbes', es: 'Hierbas' }
};

export const GLASSWARE_NAMES: Record<string, Record<SupportedLocale, string>> = {
  '马天尼杯 / Martini Glass': {
    'zh-CN': '马天尼杯',
    en: 'Martini Glass',
    ja: 'マティーニグラス',
    fr: 'Verre à martini',
    es: 'Copa de martini'
  },
  '古典杯 / Rocks Glass': {
    'zh-CN': '古典杯 / 低球杯',
    en: 'Rocks / Old Fashioned Glass',
    ja: 'ロックグラス',
    fr: 'Verre à l’ancienne (Rocks)',
    es: 'Vaso Old Fashioned (Rocks)'
  },
  '高球杯 / Highball Glass': {
    'zh-CN': '高球杯',
    en: 'Highball Glass',
    ja: 'ハイボールグラス',
    fr: 'Verre highball',
    es: 'Vaso Highball'
  },
  '碟形香槟杯 / Coupe Glass': {
    'zh-CN': '碟形香槟杯',
    en: 'Coupe Glass',
    ja: 'クープグラス',
    fr: 'Coupe de champagne',
    es: 'Copa Coupe'
  },
  '笛形香槟杯 / Flute Glass': {
    'zh-CN': '笛形香槟杯',
    en: 'Flute Glass',
    ja: 'フルートグラス',
    fr: 'Flûte de champagne',
    es: 'Copa Flauta'
  },
  '柯林杯 / Collins Glass': {
    'zh-CN': '柯林杯',
    en: 'Collins Glass',
    ja: 'コリンズグラス',
    fr: 'Verre Collins',
    es: 'Vaso Collins'
  },
  '尼克诺拉杯 / Nick & Nora Glass': {
    'zh-CN': '尼克诺拉杯',
    en: 'Nick & Nora Glass',
    ja: 'ニック＆ノラ グラス',
    fr: 'Verre Nick & Nora',
    es: 'Copa Nick & Nora'
  },
  '铜制马克杯 / Copper Mule Mug': {
    'zh-CN': '铜制骡子马克杯',
    en: 'Copper Mule Mug',
    ja: '銅製マグカップ',
    fr: 'Chope en cuivre',
    es: 'Taza de cobre'
  },
  '飓风杯 / Hurricane Glass': {
    'zh-CN': '飓风杯',
    en: 'Hurricane Glass',
    ja: 'ハリケーングラス',
    fr: 'Verre ouragan',
    es: 'Vaso Hurricane'
  },
  '雪莉杯 / Sherry Glass': {
    'zh-CN': '雪莉杯',
    en: 'Sherry Glass',
    ja: 'シェリーグラス',
    fr: 'Verre à xérès',
    es: 'Copa de jerez'
  },
  '爱尔兰咖啡杯 / Irish Coffee Glass': {
    'zh-CN': '爱尔兰咖啡杯',
    en: 'Irish Coffee Glass',
    ja: 'アイリッシュコーヒーグラス',
    fr: 'Verre Irish Coffee',
    es: 'Copa café irlandés'
  },
  '子弹杯 / 一口杯 / Shot Glass': {
    'zh-CN': '子弹杯 / 一口杯',
    en: 'Shot Glass',
    ja: 'ショットグラス',
    fr: 'Verre à shooter',
    es: 'Vaso de chupito'
  }
};
