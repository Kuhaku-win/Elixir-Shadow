export type BaseSpiritType = 
  | 'Gin' 
  | 'Vodka' 
  | 'Rum' 
  | 'Whiskey' 
  | 'Tequila' 
  | 'Brandy' 
  | 'Baijiu' 
  | 'Liqueur' 
  | 'None';

export type FlavorTag = 
  | '柑橘系' 
  | '甜系' 
  | '苦系' 
  | '烟熏系' 
  | '草本系' 
  | '果香系' 
  | '辛辣系' 
  | '清爽系' 
  | '烈酒感' 
  | '奶香系';

export type TechniqueType = 
  | 'Shake' 
  | 'Stir' 
  | 'Build' 
  | 'Muddle' 
  | 'Blend' 
  | 'Layer' 
  | 'Float';

export type DifficultyLevel = 'easy' | 'medium' | 'advanced';

export type GlassType = 
  | '马天尼杯 / Martini Glass'
  | '古典杯 / Rocks Glass'
  | '高球杯 / Highball Glass'
  | '碟形香槟杯 / Coupe Glass'
  | '笛形香槟杯 / Flute Glass'
  | '柯林杯 / Collins Glass'
  | '尼克诺拉杯 / Nick & Nora Glass'
  | '铜制马克杯 / Copper Mule Mug'
  | '飓风杯 / Hurricane Glass'
  | '雪莉杯 / Sherry Glass'
  | '爱尔兰咖啡杯 / Irish Coffee Glass'
  | '子弹杯 / 一口杯 / Shot Glass';

export interface FlavorRadar {
  sour: number;    // 酸度 0-5
  sweet: number;   // 甜度 0-5
  bitter: number;  // 苦度 0-5
  strong: number;  // 烈度 0-5
  fruity: number;  // 果香 0-5
  herbal: number;  // 草本/烟熏 0-5
}

export interface RecipeIngredient {
  name: string;
  nameEn?: string;
  amountMl: number;
  amountOz?: string;
  unit?: string; // 默认 ml，滴 (dash)、撮 (pinch)、块 (piece) 等
  isGarnish?: boolean;
  rawId?: string; // 关联到 ingredients 数据
}

export interface Recipe {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  category: 'classic' | 'contemporary' | 'new-era' | 'master' | 'competition' | 'signature' | 'mocktail' | 'creative' | 'modern' | 'tiki';
  categoryZh: string;
  baseSpirit: BaseSpiritType;
  baseSpiritZh: string;
  flavorProfiles: FlavorTag[];
  flavorRadar: FlavorRadar;
  difficulty: DifficultyLevel;
  difficultyZh: string;
  glass: GlassType;
  garnish: string;
  ice: string;
  technique: TechniqueType;
  techniqueZh: string;
  abv: number; // 预估饮用酒精度
  description: string;
  story: string;
  proTips: string[];
  image: string;
  ingredients: RecipeIngredient[];
  steps: string[];
  isIbaCertified?: boolean;
  ibaCategory?: 'The Unforgettables' | 'Contemporary Classics' | 'New Era Drinks';
  masterInfo?: {
    name: string;
    quote?: string;
    bar?: string;
  };
  competitionInfo?: {
    name: string;
    year: number;
    award: string;
    bartender: string;
    country?: string;
  };
}

export interface IngredientSubstitute {
  targetIngredientId: string;       // 平替目标原料 ID (如 'triple-sec')
  substituteName: string;           // 平替原料名称 (如 '普通白橙皮利口酒 / 柑橘利口酒')
  tier: 'perfect' | 'flavor-tweak' | 'emergency'; 
  // perfect: 几乎无缝替代
  // flavor-tweak: 风味微调替代
  // emergency: 应急平替
  ratioMultiplier: number;          // 剂量换算比例 (默认 1.0)
  flavorImpactNote: string;         // 风味变化提示与调酒师避坑建议
  difficultyRating?: 1 | 2 | 3;     // 调配宽容度 (1 极高, 3 需精准微调)
}

export interface Ingredient {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  category: 'base-spirit' | 'liqueur' | 'syrup' | 'juice' | 'bitters' | 'garnish' | 'mixer' | 'other';
  categoryZh: string;
  abv: number;
  origin: string;
  flavorDescription: string;
  commonUsage: string[];
  buyingGuide: string;
  storageMethod: string;
  image: string;
  colorBadge: string;
  substitutes?: IngredientSubstitute[];
}

export interface Master {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  avatar: string;
  bar: string;
  country: string;
  bio: string;
  philosophy: string;
  famousQuote: string;
  signatureCocktails: string[];
  isOnlineSource?: boolean;
  era?: string;
  gender?: 'male' | 'female';
}

export interface Competition {
  id: string;
  title: string;
  titleEn: string;
  year: number;
  competitionName: string;
  award: string;
  bartender: string;
  country: string;
  recipeSlug: string;
  inspiration: string;
  image: string;
}

export interface Quote {
  id: string;
  content: string;
  author: string;
  authorTitle: string;
  source: string;
}

export interface LoreStory {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  era: string;
  summary: string;
  fullStory: string;
  relatedRecipeSlug?: string;
  relatedRecipeName?: string;
  image: string;
}

export interface BartenderTrivia {
  id: string;
  question: string;
  answer: string;
  category: string;
}
