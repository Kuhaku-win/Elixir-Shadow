import { describe, it, expect } from 'vitest';
import { cocktailService } from '../src/services/cocktailService';
import { ingredientService } from '../src/services/ingredientService';
import { RECIPES_DATABASE } from '../src/data/recipes';
import { INGREDIENTS_DATABASE } from '../src/data/ingredients';

describe('Data Integrity & Schema Validation Suite', () => {
  it('should validate all recipes against Zod schema and rawId foreign keys', () => {
    const report = cocktailService.validateAllRecipes();
    if (!report.valid) {
      console.error('Validation errors:', report.errors);
    }
    expect(report.errors).toEqual([]);
    expect(report.valid).toBe(true);
  });

  it('should validate all ingredients against Zod schema and uniqueness constraints', () => {
    const report = ingredientService.validateAllIngredients();
    if (!report.valid) {
      console.error('Ingredient validation errors:', report.errors);
    }
    expect(report.errors).toEqual([]);
    expect(report.valid).toBe(true);
  });

  it('should ensure all recipes have valid 6-dimensional flavor radar scores (0-5)', () => {
    RECIPES_DATABASE.forEach((recipe) => {
      const { sour, sweet, bitter, strong, fruity, herbal } = recipe.flavorRadar;
      [sour, sweet, bitter, strong, fruity, herbal].forEach((score) => {
        expect(score).toBeGreaterThanOrEqual(0);
        expect(score).toBeLessThanOrEqual(5);
      });
    });
  });

  it('should ensure all ingredients referenced in recipes exist in INGREDIENTS_DATABASE', () => {
    const validIds = new Set(INGREDIENTS_DATABASE.map((i) => i.id));
    const missingRawIds: string[] = [];

    RECIPES_DATABASE.forEach((recipe) => {
      recipe.ingredients.forEach((ing) => {
        if (ing.rawId && !validIds.has(ing.rawId)) {
          missingRawIds.push(`Recipe "${recipe.name}": missing rawId "${ing.rawId}"`);
        }
      });
    });

    expect(missingRawIds).toEqual([]);
  });

  it('should ensure zero duplicate IDs across recipes and ingredients', () => {
    const recipeIds = new Set<string>();
    RECIPES_DATABASE.forEach((r) => {
      expect(recipeIds.has(r.id)).toBe(false);
      recipeIds.add(r.id);
    });

    const ingredientIds = new Set<string>();
    INGREDIENTS_DATABASE.forEach((i) => {
      expect(ingredientIds.has(i.id)).toBe(false);
      ingredientIds.add(i.id);
    });
  });

  it('should ensure all recipes use standardized GlassType and valid BaseSpirit', () => {
    const validGlasses = new Set([
      '马天尼杯 / Martini Glass',
      '古典杯 / Rocks Glass',
      '高球杯 / Highball Glass',
      '碟形香槟杯 / Coupe Glass',
      '笛形香槟杯 / Flute Glass',
      '柯林杯 / Collins Glass',
      '尼克诺拉杯 / Nick & Nora Glass',
      '铜制马克杯 / Copper Mule Mug',
      '飓风杯 / Hurricane Glass',
      '雪莉杯 / Sherry Glass',
      '爱尔兰咖啡杯 / Irish Coffee Glass',
      '子弹杯 / 一口杯 / Shot Glass'
    ]);

    const validSpirits = new Set([
      'Gin', 'Vodka', 'Rum', 'Whiskey', 'Tequila', 'Brandy', 'Baijiu', 'Liqueur', 'None'
    ]);

    RECIPES_DATABASE.forEach((r) => {
      expect(validGlasses.has(r.glass)).toBe(true);
      expect(validSpirits.has(r.baseSpirit)).toBe(true);
      expect(r.steps.length).toBeGreaterThan(0);
      expect(r.proTips.length).toBeGreaterThan(0);
    });
  });

  it('should ensure all ingredient substitutes point to existing ingredients', () => {
    const ingredientIds = new Set(INGREDIENTS_DATABASE.map(i => i.id));
    INGREDIENTS_DATABASE.forEach(ing => {
      if (ing.substitutes) {
        ing.substitutes.forEach(sub => {
          expect(ingredientIds.has(sub.targetIngredientId)).toBe(true);
        });
      }
    });
  });
});
