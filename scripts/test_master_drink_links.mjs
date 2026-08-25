import { MASTERS_DATABASE } from '../src/data/masters.ts';
import { ONLINE_MASTERS_CATALOG } from '../src/services/mastersService.ts';
import { RECIPES_DATABASE } from '../src/data/recipes.ts';

function findRecipeForDrink(drinkName) {
  const cleanName = drinkName.toLowerCase();
  const directSlug = cleanName.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const bySlug = RECIPES_DATABASE.find(r => r.slug === directSlug);
  if (bySlug) return bySlug;

  const enPart = drinkName.split('(')[0].trim().toLowerCase();
  const zhMatch = drinkName.match(/\((.*?)\)/);
  const zhPart = zhMatch ? zhMatch[1].trim() : '';

  return (
    RECIPES_DATABASE.find(r => 
      (enPart && r.nameEn.toLowerCase() === enPart) ||
      (enPart && r.name.toLowerCase() === enPart) ||
      (enPart && r.slug === enPart.replace(/\s+/g, '-')) ||
      (enPart && r.nameEn.toLowerCase().includes(enPart) && enPart.length > 4) ||
      (zhPart && r.name.includes(zhPart)) ||
      (zhPart && r.nameEn.toLowerCase().includes(zhPart.toLowerCase()))
    ) || null
  );
}

const allMasters = [...MASTERS_DATABASE, ...ONLINE_MASTERS_CATALOG];
console.log(`Total Masters to check: ${allMasters.length}`);

for (const m of allMasters) {
  console.log(`\n[${m.name} / ${m.nameEn}]:`);
  for (const drink of m.signatureCocktails) {
    const matched = findRecipeForDrink(drink);
    if (matched) {
      console.log(`  ✅ "${drink}" -> /recipes/${matched.slug} (${matched.name})`);
    } else {
      console.log(`  🔍 "${drink}" -> search fallback: /recipes?search=${encodeURIComponent(drink.split('(')[0].trim())}`);
    }
  }
}
