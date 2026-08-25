import { INGREDIENTS_DATABASE } from '../data/ingredients';
import { ingredientSchema } from '../types/schemas';
import type { Ingredient } from '../types/cocktail';

export class IngredientService {
  private static instance: IngredientService;
  private ingredients: Ingredient[] = INGREDIENTS_DATABASE;

  public static getInstance(): IngredientService {
    if (!IngredientService.instance) {
      IngredientService.instance = new IngredientService();
    }
    return IngredientService.instance;
  }

  public getAllIngredients(): Ingredient[] {
    return this.ingredients;
  }

  public getIngredientById(id: string): Ingredient | undefined {
    return this.ingredients.find((i) => i.id === id);
  }

  public getIngredientBySlug(slug: string): Ingredient | undefined {
    return this.ingredients.find((i) => i.slug === slug);
  }

  public getIngredientsByCategory(category: string): Ingredient[] {
    if (category === 'all' || !category) return this.ingredients;
    return this.ingredients.filter((i) => i.category === category);
  }

  public validateAllIngredients(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    const seenIds = new Set<string>();
    const seenSlugs = new Set<string>();

    this.ingredients.forEach((ingredient, index) => {
      // 1. Zod schema validation
      const parseResult = ingredientSchema.safeParse(ingredient);
      if (!parseResult.success) {
        errors.push(
          `Ingredient #${index} (${ingredient.name || 'unnamed'}): ${parseResult.error.message}`
        );
      }

      // 2. ID and Slug uniqueness
      if (seenIds.has(ingredient.id)) {
        errors.push(`Duplicate Ingredient ID: ${ingredient.id}`);
      }
      seenIds.add(ingredient.id);

      if (seenSlugs.has(ingredient.slug)) {
        errors.push(`Duplicate Ingredient Slug: ${ingredient.slug}`);
      }
      seenSlugs.add(ingredient.slug);
    });

    return {
      valid: errors.length === 0,
      errors
    };
  }
}

export const ingredientService = IngredientService.getInstance();
