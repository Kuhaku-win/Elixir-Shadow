import { RECIPES_DATABASE } from '../data/recipes';
import { INGREDIENTS_DATABASE } from '../data/ingredients';
import { recipeSchema } from '../types/schemas';
import type { Recipe, BaseSpiritType } from '../types/cocktail';

export interface SmartMatchResult {
  readyRecipes: Recipe[];
  missingOneRecipes: Array<{
    recipe: Recipe;
    missingIngredient: string;
    missingId: string;
  }>;
}

export class CocktailService {
  private static instance: CocktailService;
  private recipes: Recipe[] = RECIPES_DATABASE;

  public static getInstance(): CocktailService {
    if (!CocktailService.instance) {
      CocktailService.instance = new CocktailService();
    }
    return CocktailService.instance;
  }

  public getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  public getRecipeBySlug(slug: string): Recipe | undefined {
    return this.recipes.find((r) => r.slug === slug);
  }

  public getRecipeById(id: string): Recipe | undefined {
    return this.recipes.find((r) => r.id === id);
  }

  public getRecipesByBaseSpirit(spirit: BaseSpiritType | string): Recipe[] {
    if (spirit === 'all' || !spirit) return this.recipes;
    return this.recipes.filter((r) => r.baseSpirit.toLowerCase() === spirit.toLowerCase());
  }

  public getRecipesByCategory(category: string): Recipe[] {
    if (category === 'all' || !category) return this.recipes;
    return this.recipes.filter((r) => r.category === category);
  }

  public getRelatedRecipes(currentRecipe: Recipe, limit: number = 3): Recipe[] {
    return this.recipes
      .filter(
        (r) =>
          r.id !== currentRecipe.id &&
          (r.baseSpirit === currentRecipe.baseSpirit || r.difficulty === currentRecipe.difficulty)
      )
      .slice(0, limit);
  }

  /**
   * Smart Bar matching engine:
   * Finds recipes where user has all required ingredients (ignoring garnish),
   * or is missing exactly 1 ingredient.
   */
  public findMatchingRecipes(selectedIngredientIds: string[]): SmartMatchResult {
    const ready: Recipe[] = [];
    const missingOne: Array<{
      recipe: Recipe;
      missingIngredient: string;
      missingId: string;
    }> = [];

    const selectedSet = new Set(selectedIngredientIds);

    this.recipes.forEach((recipe) => {
      const neededRawIds = recipe.ingredients
        .filter((ing) => !ing.isGarnish && ing.rawId)
        .map((ing) => ing.rawId as string);

      if (neededRawIds.length === 0) return;

      const missing = neededRawIds.filter((id) => !selectedSet.has(id));

      if (missing.length === 0) {
        ready.push(recipe);
      } else if (missing.length === 1) {
        const missingId = missing[0];
        const missingIng = INGREDIENTS_DATABASE.find((i) => i.id === missingId);
        missingOne.push({
          recipe,
          missingIngredient: missingIng ? missingIng.name.split('/')[0].trim() : '特定配料',
          missingId
        });
      }
    });

    return { readyRecipes: ready, missingOneRecipes: missingOne };
  }

  /**
   * Validates all recipes against the Zod schema and verifies rawId integrity.
   */
  public validateAllRecipes(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    const validIngredientIds = new Set(INGREDIENTS_DATABASE.map((i) => i.id));
    const seenIds = new Set<string>();
    const seenSlugs = new Set<string>();

    this.recipes.forEach((recipe, index) => {
      // 1. Zod schema validation
      const parseResult = recipeSchema.safeParse(recipe);
      if (!parseResult.success) {
        errors.push(
          `Recipe #${index} (${recipe.name || 'unnamed'}): ${parseResult.error.message}`
        );
      }

      // 2. ID and Slug uniqueness
      if (seenIds.has(recipe.id)) {
        errors.push(`Duplicate Recipe ID: ${recipe.id}`);
      }
      seenIds.add(recipe.id);

      if (seenSlugs.has(recipe.slug)) {
        errors.push(`Duplicate Recipe Slug: ${recipe.slug}`);
      }
      seenSlugs.add(recipe.slug);

      // 3. rawId existence check
      recipe.ingredients.forEach((ing) => {
        if (ing.rawId && !validIngredientIds.has(ing.rawId)) {
          errors.push(
            `Recipe "${recipe.name}" has invalid rawId "${ing.rawId}" for ingredient "${ing.name}"`
          );
        }
      });
    });

    return {
      valid: errors.length === 0,
      errors
    };
  }
}

export const cocktailService = CocktailService.getInstance();
