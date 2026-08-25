import { describe, it, expect } from 'vitest';
import { 
  simulateCustomCocktail, 
  synthesizeCocktail, 
  generateSmartPartyMenu 
} from '../src/utils/mixologyEngine';

describe('Mixology Flavor & Synthesizer Engine (调配物理与风味推演引擎)', () => {
  
  it('should accurately simulate balanced classic sour ratio (2:1:1 Gimlet/Sour balance)', () => {
    const items = [
      { id: 'gin', name: '金酒', amountMl: 50 },
      { id: 'fresh-lemon-juice', name: '新鲜柠檬汁', amountMl: 25 },
      { id: 'simple-syrup', name: '单倍糖浆', amountMl: 18 }
    ];

    const result = simulateCustomCocktail(items, 'shake', '蝶形香槟杯 (Coupe)');

    expect(result.totalRawMl).toBe(93);
    expect(result.waterDilutionMl).toBeGreaterThan(15);
    expect(result.finishedMl).toBe(result.totalRawMl + result.waterDilutionMl);
    expect(result.finishedAbv).toBeGreaterThan(12);
    expect(result.finishedAbv).toBeLessThan(25);
    expect(result.balanceStatus).toBe('perfect');
    expect(result.balanceScore).toBeGreaterThanOrEqual(90);
    expect(result.flavorRadar.sour).toBeGreaterThan(2);
    expect(result.flavorRadar.sweet).toBeGreaterThan(2);
  });

  it('should diagnose sweet-heavy imbalance when sugar exceeds acid', () => {
    const items = [
      { id: 'vodka', name: '伏特加', amountMl: 40 },
      { id: 'fresh-lemon-juice', name: '新鲜柠檬汁', amountMl: 10 },
      { id: 'rich-syrup', name: '双倍糖浆', amountMl: 35 }
    ];

    const result = simulateCustomCocktail(items, 'shake');

    expect(result.balanceStatus).toBe('sweet-forward');
    expect(result.balanceLabel).toContain('偏甜');
    expect(result.bartenderTips.some(t => t.includes('糖度偏高') || t.includes('柠檬汁'))).toBe(true);
  });

  it('should synthesize a complete Highball cocktail when requested', () => {
    const inventory = ['whiskey-bourbon', 'fresh-lemon-juice', 'simple-syrup', 'club-soda', 'lemon-peel'];
    const recipe = synthesizeCocktail(inventory, {
      targetAbvRange: 'low',
      aromaPreference: 'citrus',
      style: 'highball'
    });

    expect(recipe).toBeDefined();
    expect(recipe.technique).toBe('build');
    expect(recipe.glass).toContain('高球杯');
    expect(recipe.ingredients.length).toBeGreaterThanOrEqual(3);
    expect(recipe.instructions.length).toBeGreaterThanOrEqual(3);
    expect(recipe.abv).toBeGreaterThan(0);
  });

  it('should synthesize a Spirit-Forward stirred cocktail with rock glass and stir technique', () => {
    const inventory = ['gin', 'sweet-vermouth', 'campari', 'orange-peel'];
    const recipe = synthesizeCocktail(inventory, {
      targetAbvRange: 'high',
      aromaPreference: 'bittersweet',
      style: 'spirit-forward'
    });

    expect(recipe).toBeDefined();
    expect(recipe.technique).toBe('stir');
    expect(recipe.glass).toContain('古典杯');
    expect(recipe.garnish).toContain('橙皮');
  });

  it('should generate a curated party menu and auto-fill with AI synthesized recipes when needed', () => {
    const limitedInventory = ['gin', 'fresh-lime-juice', 'simple-syrup'];
    const menu = generateSmartPartyMenu(limitedInventory, 4, true, 'craft-speakeasy');

    expect(menu.length).toBe(4);
    // Unique IDs across all 4 items
    const ids = new Set(menu.map(m => m.id));
    expect(ids.size).toBe(4);
  });

  it('should generate diverse, unique recipes across multiple invocations with available inventory', () => {
    const richInventory = [
      'gin', 'whiskey-bourbon', 'rum-white', 'vodka', 'tequila',
      'cointreau', 'campari', 'sweet-vermouth',
      'fresh-lemon-juice', 'fresh-lime-juice', 'apple-juice', 'grapefruit-juice',
      'simple-syrup', 'honey-syrup', 'rich-syrup',
      'club-soda', 'tonic-water', 'sprite-lemon-soda',
      'orange-peel', 'lemon-peel', 'fresh-mint'
    ];

    const results = Array.from({ length: 5 }, () => synthesizeCocktail(richInventory, {
      targetAbvRange: 'medium',
      aromaPreference: 'citrus',
      style: 'sour'
    }));

    const slugs = new Set(results.map(r => r.slug));
    expect(slugs.size).toBe(5);
  });

});
