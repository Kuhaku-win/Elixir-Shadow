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
    expect(recipe.steps.length).toBeGreaterThanOrEqual(3);
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
    // Limited inventory only matches Gimlet / Gin Sour
    const limitedInventory = ['gin', 'fresh-lime-juice', 'simple-syrup'];
    const menu = generateSmartPartyMenu(limitedInventory, 4, true, 'craft-speakeasy');

    expect(menu.length).toBe(4);
    // Unique IDs across all 4 items
    const ids = new Set(menu.map(m => m.id));
    expect(ids.size).toBe(4);

    // First items should be matched real classics, remaining should be AI synthesized
    const classicCount = menu.filter(m => !m.id.startsWith('custom-')).length;
    const aiCount = menu.filter(m => m.id.startsWith('custom-')).length;
    expect(classicCount).toBeGreaterThanOrEqual(1);
    expect(aiCount).toBeGreaterThanOrEqual(1);
    expect(classicCount + aiCount).toBe(4);
  });

  it('should prioritize 100% classic recipes first when inventory is abundant', () => {
    // Rich inventory capable of making Daiquiri, Mojito, Gin Tonic, Gimlet, Margarita, Negroni, Old Fashioned...
    const fullInventory = [
      'gin', 'rum-white', 'whiskey-bourbon', 'campari', 'sweet-vermouth', 'cointreau', 'tequila',
      'fresh-lime-juice', 'fresh-lemon-juice', 'simple-syrup', 'tonic-water', 'club-soda', 'fresh-mint', 'angostura-bitters'
    ];
    const menu = generateSmartPartyMenu(fullInventory, 4, true, 'craft-speakeasy');

    expect(menu.length).toBe(4);
    // When inventory satisfies enough classics, all 4 items should be real classics without needing AI fill
    const classicCount = menu.filter(m => !m.id.startsWith('custom-')).length;
    expect(classicCount).toBe(4);
  });

  it('should strictly respect user style preference even when low ABV is selected', () => {
    const inventory = [
      'gin', 'whiskey-bourbon', 'rum-white', 'cointreau', 'sweet-vermouth',
      'fresh-lemon-juice', 'fresh-lime-juice', 'pineapple-juice',
      'simple-syrup', 'club-soda', 'orange-peel', 'fresh-mint'
    ];

    // 1. Low ABV + Sour -> should be Shake and Coupe glass
    const sourLow = synthesizeCocktail(inventory, { targetAbvRange: 'low', aromaPreference: 'citrus', style: 'sour' });
    expect(sourLow.technique).toBe('shake');
    expect(sourLow.glass).toContain('碟形香槟杯');
    expect(sourLow.abv).toBeLessThanOrEqual(14);

    // 2. Low ABV + Smash -> should be Muddle and Rocks/Highball
    const smashLow = synthesizeCocktail(inventory, { targetAbvRange: 'low', aromaPreference: 'herbal', style: 'smash' });
    expect(smashLow.technique).toBe('muddle');
    expect(smashLow.abv).toBeLessThanOrEqual(14);

    // 3. Low ABV + Tiki -> should be Shake and Hurricane
    const tikiLow = synthesizeCocktail(inventory, { targetAbvRange: 'low', aromaPreference: 'fruity', style: 'tiki' });
    expect(tikiLow.technique).toBe('shake');
    expect(tikiLow.glass).toContain('飓风杯');
    expect(tikiLow.abv).toBeLessThanOrEqual(14);

    // 4. Low ABV + Equal Parts -> should be Stir and Nick & Nora / Coupe
    const equalLow = synthesizeCocktail(inventory, { targetAbvRange: 'low', aromaPreference: 'bittersweet', style: 'equal-parts' });
    expect(equalLow.technique).toBe('stir');
    expect(equalLow.abv).toBeLessThanOrEqual(16);

    // 5. Low ABV + Spirit Forward -> should be Stir and Rocks glass
    const spiritLow = synthesizeCocktail(inventory, { targetAbvRange: 'low', aromaPreference: 'bittersweet', style: 'spirit-forward' });
    expect(spiritLow.technique).toBe('stir');
    expect(spiritLow.glass).toContain('古典杯');
  });

});
