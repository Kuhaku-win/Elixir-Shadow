import { describe, it, expect } from 'vitest';
import { cocktailService } from '../src/services/cocktailService';

describe('MyBarCabinet Smart Matching Engine', () => {
  it('should return Dry Martini when user has Gin, Dry Vermouth, and Orange Bitters', () => {
    const cabinet = ['gin', 'dry-vermouth', 'orange-bitters'];
    const result = cocktailService.findMatchingRecipes(cabinet);
    
    const martini = result.readyRecipes.find((r) => r.slug === 'dry-martini');
    expect(martini).toBeDefined();
    expect(martini?.name).toBe('干马天尼');
  });

  it('should return Negroni when user has Gin, Sweet Vermouth, and Campari', () => {
    const cabinet = ['gin', 'sweet-vermouth', 'campari'];
    const result = cocktailService.findMatchingRecipes(cabinet);

    const negroni = result.readyRecipes.find((r) => r.slug === 'negroni');
    expect(negroni).toBeDefined();
    expect(negroni?.name).toBe('尼格罗尼');
  });

  it('should identify Missing One ingredient for Negroni when user lacks Campari', () => {
    const cabinet = ['gin', 'sweet-vermouth'];
    const result = cocktailService.findMatchingRecipes(cabinet);

    const negroniMissing = result.missingOneRecipes.find((item) => item.recipe.slug === 'negroni');
    expect(negroniMissing).toBeDefined();
    expect(negroniMissing?.missingId).toBe('campari');
  });

  it('should identify Gimlet when user has Gin, Lime Juice, and Simple Syrup', () => {
    const cabinet = ['gin', 'fresh-lime-juice', 'simple-syrup'];
    const result = cocktailService.findMatchingRecipes(cabinet);

    const gimlet = result.readyRecipes.find((r) => r.slug === 'gimlet');
    expect(gimlet).toBeDefined();
    expect(gimlet?.name).toContain('金雷特');
  });

  it('should handle zero selected ingredients gracefully', () => {
    const result = cocktailService.findMatchingRecipes([]);
    expect(result.readyRecipes.length).toBe(0);
  });

  it('should find ready drinks when user has everyday mixers and juices', () => {
    const cabinet = ['vodka', 'blue-curacao', 'fresh-lemon-juice', 'sprite-lemon-soda'];
    const result = cocktailService.findMatchingRecipes(cabinet);

    const blueLagoon = result.readyRecipes.find((r) => r.slug === 'blue-lagoon');
    expect(blueLagoon).toBeDefined();
    expect(blueLagoon?.name).toBe('蓝色泄湖');
  });
});
