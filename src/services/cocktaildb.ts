import type { Recipe, RecipeIngredient, BaseSpiritType, GlassType } from '../types/cocktail';

export interface TheCocktailDBRawDrink {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsZH_HANS: string | null;
  strDrinkThumb: string;
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
}

export interface TheCocktailDBSearchResponse {
  drinks: TheCocktailDBRawDrink[] | null;
}

export function parseMeasureToMl(measure: string | null): number {
  if (!measure) return 30; // 默认 30ml
  const m = measure.toLowerCase().trim();
  
  if (m.includes('oz')) {
    const numPart = m.replace(/oz.*/, '').trim();
    if (numPart.includes('/')) {
      const parts = numPart.split(' ');
      let val = 0;
      if (parts.length === 2) {
        val += parseFloat(parts[0]);
        const frac = parts[1].split('/');
        val += parseFloat(frac[0]) / parseFloat(frac[1]);
      } else {
        const frac = parts[0].split('/');
        val += parseFloat(frac[0]) / parseFloat(frac[1]);
      }
      return Math.round(val * 30);
    }
    const val = parseFloat(numPart);
    return isNaN(val) ? 30 : Math.round(val * 30);
  }
  
  if (m.includes('ml') || m.includes('cl')) {
    const val = parseFloat(m);
    if (m.includes('cl')) return Math.round(val * 10);
    return isNaN(val) ? 30 : Math.round(val);
  }
  
  if (m.includes('dash') || m.includes('drop')) return 1;
  if (m.includes('tsp') || m.includes('bar spoon')) return 5;
  if (m.includes('tbsp')) return 15;
  if (m.includes('part')) return 30;
  
  return 30;
}

export function mapBaseSpirit(drink: TheCocktailDBRawDrink): BaseSpiritType {
  const allIngredients: string[] = [];
  for (let i = 1; i <= 15; i++) {
    const ing = drink[`strIngredient${i}`];
    if (ing) allIngredients.push(ing.toLowerCase());
  }

  const hasWord = (word: string) => {
    return allIngredients.some(ing => new RegExp(`\\b${word}\\b`, 'i').test(ing));
  };

  if (hasWord('gin') || allIngredients.some(i => i.includes('london dry') || i.includes('plymouth') || i.includes('old tom'))) return 'Gin';
  if (hasWord('vodka')) return 'Vodka';
  if (hasWord('rum') || hasWord('cachaca') || allIngredients.some(i => i.includes('bacardi') || i.includes('havana club'))) return 'Rum';
  if (hasWord('whiskey') || hasWord('whisky') || hasWord('bourbon') || hasWord('scotch') || hasWord('rye')) return 'Whiskey';
  if (hasWord('tequila') || hasWord('mezcal')) return 'Tequila';
  if (hasWord('brandy') || hasWord('cognac') || hasWord('pisco') || hasWord('calvados') || hasWord('armagnac')) return 'Brandy';
  return 'Liqueur';
}

export function transformCocktailDbDrink(drink: TheCocktailDBRawDrink): Recipe {
  const ingredients: RecipeIngredient[] = [];
  for (let i = 1; i <= 15; i++) {
    const ing = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (ing && ing.trim()) {
      const ml = parseMeasureToMl(measure);
      const oz = measure ? measure.trim() : `${(ml / 30).toFixed(1)} oz`;
      ingredients.push({
        name: ing.trim(),
        nameEn: ing.trim(),
        amountMl: ml,
        amountOz: oz
      });
    }
  }

  const baseSpirit = mapBaseSpirit(drink);
  const baseSpiritMap: Record<BaseSpiritType, string> = {
    Gin: '金酒',
    Vodka: '伏特加',
    Rum: '朗姆酒',
    Whiskey: '威士忌',
    Tequila: '龙舌兰',
    Brandy: '白兰地',
    Baijiu: '中国白酒',
    Liqueur: '利口酒',
    None: '无酒精'
  };

  const steps = drink.strInstructionsZH_HANS 
    ? drink.strInstructionsZH_HANS.split(/\r?\n|\.\s+/).filter(Boolean)
    : drink.strInstructions.split(/\r?\n|\.\s+/).filter(Boolean);

  return {
    id: `cocktaildb-${drink.idDrink}`,
    slug: `api-${drink.idDrink}-${drink.strDrink.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name: drink.strDrink,
    nameEn: drink.strDrink,
    category: drink.strIBA ? 'classic' : 'contemporary',
    categoryZh: drink.strIBA ? 'IBA 国际认证' : '全球收录',
    baseSpirit: baseSpirit,
    baseSpiritZh: baseSpiritMap[baseSpirit],
    flavorProfiles: ['清爽系', '果香系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 1, strong: 3, fruity: 3, herbal: 2 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: (drink.strGlass || '马天尼杯 / Martini Glass') as GlassType,
    garnish: '柠檬轮或果皮',
    ice: '加冰或无冰',
    technique: 'Shake',
    techniqueZh: '摇荡法 / 调和',
    abv: 20,
    description: `收录自 TheCocktailDB 国际配方库。类别：${drink.strCategory || 'Cocktail'}，类型：${drink.strAlcoholic || '含酒精'}。`,
    story: `TheCocktailDB 官方登记编号 #${drink.idDrink}。${drink.strIBA ? `IBA 认证分类：${drink.strIBA}` : '国际流行特调酒款。'}`,
    proTips: ['根据个人口味可微调酸甜比与基酒用量。'],
    image: drink.strDrinkThumb || 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    ingredients: ingredients,
    steps: steps.length > 0 ? steps : [drink.strInstructions],
    isIbaCertified: Boolean(drink.strIBA)
  };
}

export async function searchCocktailDbByName(query: string): Promise<Recipe[]> {
  if (!query || query.trim().length === 0) return [];
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query.trim())}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data: TheCocktailDBSearchResponse = await res.json();
    if (!data.drinks) return [];
    return data.drinks.slice(0, 10).map(transformCocktailDbDrink);
  } catch (err) {
    console.error('Failed to fetch from TheCocktailDB:', err);
    return [];
  }
}
