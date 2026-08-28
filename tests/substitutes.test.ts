import { describe, it, expect } from 'vitest';
import { INGREDIENTS_DATABASE } from '../src/data/ingredients';
import { RECIPES_DATABASE } from '../src/data/recipes';

describe('Smart Ingredient Substitution Engine Suite', () => {
  it('should verify that all configured substitutes have valid tiers, positive multipliers, and non-empty notes', () => {
    const validTiers = new Set(['perfect', 'flavor-tweak', 'emergency']);

    let totalSubstitutesCount = 0;
    INGREDIENTS_DATABASE.forEach(ing => {
      if (ing.substitutes) {
        ing.substitutes.forEach(sub => {
          totalSubstitutesCount++;
          expect(validTiers.has(sub.tier)).toBe(true);
          expect(sub.ratioMultiplier).toBeGreaterThan(0);
          expect(sub.substituteName.length).toBeGreaterThan(0);
          expect(sub.flavorImpactNote.length).toBeGreaterThan(0);
        });
      }
    });

    expect(totalSubstitutesCount).toBeGreaterThan(20);
  });

  it('should verify key classical substitutes exist', () => {
    const cointreau = INGREDIENTS_DATABASE.find(i => i.id === 'cointreau');
    expect(cointreau).toBeDefined();
    expect(cointreau?.substitutes?.some(s => s.targetIngredientId === 'grand-marnier')).toBe(true);

    const campari = INGREDIENTS_DATABASE.find(i => i.id === 'campari');
    expect(campari).toBeDefined();
    expect(campari?.substitutes?.some(s => s.targetIngredientId === 'aperol')).toBe(true);

    const bourbon = INGREDIENTS_DATABASE.find(i => i.id === 'whiskey-bourbon');
    expect(bourbon).toBeDefined();
    expect(bourbon?.substitutes?.some(s => s.targetIngredientId === 'whiskey-rye')).toBe(true);

    const lime = INGREDIENTS_DATABASE.find(i => i.id === 'fresh-lime-juice');
    expect(lime).toBeDefined();
    expect(lime?.substitutes?.some(s => s.targetIngredientId === 'fresh-lemon-juice')).toBe(true);
  });

  it('should correctly deduce a cocktail as ready when user has an exact substitute', () => {
    // User has gin, sweet-vermouth, and aperol (substitute for campari)
    const userCabinet = ['gin', 'sweet-vermouth', 'aperol'];
    const negroni = RECIPES_DATABASE.find(r => r.slug === 'negroni');
    expect(negroni).toBeDefined();

    const campari = INGREDIENTS_DATABASE.find(i => i.id === 'campari');
    const hasAperolSub = campari?.substitutes?.some(s => userCabinet.includes(s.targetIngredientId));
    expect(hasAperolSub).toBe(true);
  });
});
