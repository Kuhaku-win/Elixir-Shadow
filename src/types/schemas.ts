import { z } from 'zod';

export const baseSpiritEnum = z.enum([
  'Gin',
  'Vodka',
  'Rum',
  'Whiskey',
  'Tequila',
  'Brandy',
  'Baijiu',
  'Liqueur',
  'None'
]);

export const flavorTagEnum = z.enum([
  '柑橘系',
  '甜系',
  '苦系',
  '烟熏系',
  '草本系',
  '果香系',
  '辛辣系',
  '清爽系',
  '烈酒感',
  '奶香系'
]);

export const techniqueEnum = z.enum([
  'Shake',
  'Stir',
  'Build',
  'Muddle',
  'Blend',
  'Layer',
  'Float'
]);

export const difficultyEnum = z.enum(['easy', 'medium', 'advanced']);

export const flavorRadarSchema = z.object({
  sour: z.number().min(0).max(5),
  sweet: z.number().min(0).max(5),
  bitter: z.number().min(0).max(5),
  strong: z.number().min(0).max(5),
  fruity: z.number().min(0).max(5),
  herbal: z.number().min(0).max(5)
});

export const recipeIngredientSchema = z.object({
  name: z.string().min(1),
  nameEn: z.string().optional(),
  amountMl: z.number().nonnegative(),
  amountOz: z.string().optional(),
  unit: z.string().optional(),
  isGarnish: z.boolean().optional(),
  rawId: z.string().optional()
});

export const recipeCategoryEnum = z.enum([
  'classic',
  'contemporary',
  'new-era',
  'master',
  'competition',
  'signature',
  'mocktail',
  'creative',
  'modern',
  'tiki'
]);

export const recipeSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  nameEn: z.string().min(1),
  category: recipeCategoryEnum,
  categoryZh: z.string().min(1),
  baseSpirit: baseSpiritEnum,
  baseSpiritZh: z.string().min(1),
  flavorProfiles: z.array(flavorTagEnum).min(1),
  flavorRadar: flavorRadarSchema,
  difficulty: difficultyEnum,
  difficultyZh: z.string().min(1),
  glass: z.string().min(1),
  garnish: z.string().min(1),
  ice: z.string().min(1),
  technique: techniqueEnum,
  techniqueZh: z.string().min(1),
  abv: z.number().min(0).max(100),
  description: z.string().min(1),
  story: z.string().min(1),
  proTips: z.array(z.string()).min(1),
  image: z.string(),
  ingredients: z.array(recipeIngredientSchema).min(1),
  steps: z.array(z.string()).min(1),
  isIbaCertified: z.boolean().optional(),
  ibaCategory: z.enum(['The Unforgettables', 'Contemporary Classics', 'New Era Drinks']).optional(),
  masterInfo: z.object({
    name: z.string(),
    quote: z.string().optional(),
    bar: z.string().optional()
  }).optional(),
  competitionInfo: z.object({
    name: z.string(),
    year: z.number(),
    award: z.string(),
    bartender: z.string(),
    country: z.string().optional()
  }).optional()
});

export const ingredientCategoryEnum = z.enum([
  'base-spirit',
  'liqueur',
  'syrup',
  'juice',
  'bitters',
  'garnish',
  'mixer',
  'other'
]);

export const ingredientSubstituteSchema = z.object({
  targetIngredientId: z.string().min(1),
  substituteName: z.string().min(1),
  tier: z.enum(['perfect', 'flavor-tweak', 'emergency']),
  ratioMultiplier: z.number().positive(),
  flavorImpactNote: z.string().min(1),
  difficultyRating: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional()
});

export const ingredientSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  nameEn: z.string().min(1),
  category: ingredientCategoryEnum,
  categoryZh: z.string().min(1),
  abv: z.number().min(0).max(100),
  origin: z.string().min(1),
  flavorDescription: z.string().min(1),
  commonUsage: z.array(z.string()),
  buyingGuide: z.string().min(1),
  storageMethod: z.string().min(1),
  image: z.string(),
  colorBadge: z.string(),
  substitutes: z.array(ingredientSubstituteSchema).optional()
});
