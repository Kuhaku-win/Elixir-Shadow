import { describe, it, expect } from 'vitest';
import { cocktailService } from '../src/services/cocktailService';
import { ingredientService } from '../src/services/ingredientService';

describe('Cocktail & Ingredient Service DAO Unit Tests', () => {
  describe('CocktailService', () => {
    it('should retrieve all recipes', () => {
      const recipes = cocktailService.getAllRecipes();
      expect(recipes.length).toBeGreaterThanOrEqual(107);
    });

    it('should retrieve recipe by slug and id', () => {
      const recipe = cocktailService.getRecipeBySlug('old-fashioned');
      expect(recipe).toBeDefined();
      expect(recipe?.name).toContain('古典');

      const byId = cocktailService.getRecipeById('old-fashioned');
      expect(byId?.slug).toBe('old-fashioned');
    });

    it('should filter recipes by base spirit', () => {
      const ginDrinks = cocktailService.getRecipesByBaseSpirit('Gin');
      expect(ginDrinks.length).toBeGreaterThan(0);
      ginDrinks.forEach((d) => {
        expect(d.baseSpirit).toBe('Gin');
      });
    });

    it('should filter recipes by category', () => {
      const classicDrinks = cocktailService.getRecipesByCategory('classic');
      expect(classicDrinks.length).toBeGreaterThan(0);
      classicDrinks.forEach((d) => {
        expect(d.category).toBe('classic');
      });
    });

    it('should retrieve related recipes excluding the current recipe', () => {
      const martini = cocktailService.getRecipeBySlug('dry-martini')!;
      const related = cocktailService.getRelatedRecipes(martini, 3);
      expect(related.length).toBeLessThanOrEqual(3);
      related.forEach((r) => {
        expect(r.id).not.toBe(martini.id);
      });
    });
  });

  describe('IngredientService', () => {
    it('should retrieve all ingredients', () => {
      const ingredients = ingredientService.getAllIngredients();
      expect(ingredients.length).toBeGreaterThanOrEqual(95);
    });

    it('should retrieve ingredient by id and slug', () => {
      const gin = ingredientService.getIngredientById('gin');
      expect(gin).toBeDefined();
      expect(gin?.category).toBe('base-spirit');

      const bySlug = ingredientService.getIngredientBySlug('gin');
      expect(bySlug?.id).toBe('gin');
    });

    it('should filter ingredients by category', () => {
      const juices = ingredientService.getIngredientsByCategory('juice');
      expect(juices.length).toBeGreaterThan(0);
      juices.forEach((j) => {
        expect(j.category).toBe('juice');
      });
    });
  });
});
