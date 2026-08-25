import { describe, it, expect } from 'vitest';
import { parseMeasureToMl, mapBaseSpirit, type TheCocktailDBRawDrink } from '../src/services/cocktaildb';

describe('TheCocktailDB Service Parser & Transformation', () => {
  describe('parseMeasureToMl', () => {
    it('should correctly parse standard ounce measures', () => {
      expect(parseMeasureToMl('1 oz')).toBe(30);
      expect(parseMeasureToMl('1 1/2 oz')).toBe(45);
      expect(parseMeasureToMl('2 oz')).toBe(60);
      expect(parseMeasureToMl('3/4 oz')).toBe(23);
      expect(parseMeasureToMl('1/2 oz')).toBe(15);
      expect(parseMeasureToMl('1/4 oz')).toBe(8);
    });

    it('should correctly parse metric ml and cl units', () => {
      expect(parseMeasureToMl('50 ml')).toBe(50);
      expect(parseMeasureToMl('45ml')).toBe(45);
      expect(parseMeasureToMl('3 cl')).toBe(30);
      expect(parseMeasureToMl('6 cl')).toBe(60);
    });

    it('should correctly parse culinary and bar spoon measures', () => {
      expect(parseMeasureToMl('1 dash')).toBe(1);
      expect(parseMeasureToMl('2 dashes')).toBe(1);
      expect(parseMeasureToMl('1 drop')).toBe(1);
      expect(parseMeasureToMl('1 tsp')).toBe(5);
      expect(parseMeasureToMl('1 bar spoon')).toBe(5);
      expect(parseMeasureToMl('1 tbsp')).toBe(15);
      expect(parseMeasureToMl('1 part')).toBe(30);
    });

    it('should return default fallback 30ml on empty or null measure', () => {
      expect(parseMeasureToMl(null)).toBe(30);
      expect(parseMeasureToMl('')).toBe(30);
    });
  });

  describe('mapBaseSpirit', () => {
    const createMockDrink = (ingredients: string[]): TheCocktailDBRawDrink => {
      const mock: any = {
        idDrink: '12345',
        strDrink: 'Test Drink',
        strDrinkAlternate: null,
        strTags: null,
        strCategory: 'Cocktail',
        strIBA: null,
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions: 'Mix all ingredients',
        strInstructionsZH_HANS: null,
        strDrinkThumb: ''
      };
      for (let i = 1; i <= 15; i++) {
        mock[`strIngredient${i}`] = ingredients[i - 1] || null;
        mock[`strMeasure${i}`] = null;
      }
      return mock;
    };

    it('should detect Gin base', () => {
      const drink = createMockDrink(['London Dry Gin', 'Dry Vermouth']);
      expect(mapBaseSpirit(drink)).toBe('Gin');
    });

    it('should detect Vodka base', () => {
      const drink = createMockDrink(['Vodka', 'Lime Juice', 'Ginger Beer']);
      expect(mapBaseSpirit(drink)).toBe('Vodka');
    });

    it('should detect Whiskey base from Bourbon or Scotch', () => {
      const bourbonDrink = createMockDrink(['Bourbon', 'Sugar', 'Angostura Bitters']);
      expect(mapBaseSpirit(bourbonDrink)).toBe('Whiskey');

      const scotchDrink = createMockDrink(['Scotch Whisky', 'Sweet Vermouth']);
      expect(mapBaseSpirit(scotchDrink)).toBe('Whiskey');
    });

    it('should detect Rum base', () => {
      const drink = createMockDrink(['White Rum', 'Mint', 'Lime Juice', 'Soda']);
      expect(mapBaseSpirit(drink)).toBe('Rum');
    });

    it('should detect Tequila base', () => {
      const drink = createMockDrink(['Tequila Blanco', 'Lime Juice', 'Triple Sec']);
      expect(mapBaseSpirit(drink)).toBe('Tequila');
    });

    it('should detect Brandy base', () => {
      const drink = createMockDrink(['Cognac', 'Cointreau', 'Lemon Juice']);
      expect(mapBaseSpirit(drink)).toBe('Brandy');
    });

    it('should fallback to Liqueur for drinks without primary spirits', () => {
      const drink = createMockDrink(['Amaretto', 'Lemon Juice', 'Egg White']);
      expect(mapBaseSpirit(drink)).toBe('Liqueur');
    });
  });
});
