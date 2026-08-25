import { RECIPES_DATABASE } from '../src/data/recipes.ts';

const gimlet = RECIPES_DATABASE.find(r => r.slug === 'gimlet');
console.log('Gimlet:', gimlet);

// Check all recipes in RECIPES_DATABASE to find any undefined fields
for (const r of RECIPES_DATABASE) {
  if (!r.flavorProfiles || !Array.isArray(r.flavorProfiles)) {
    console.error(`Recipe [${r.slug}] missing flavorProfiles`);
  }
  if (!r.ingredients || !Array.isArray(r.ingredients)) {
    console.error(`Recipe [${r.slug}] missing ingredients`);
  }
  if (!r.steps || !Array.isArray(r.steps)) {
    console.error(`Recipe [${r.slug}] missing steps`);
  }
  if (!r.proTips || !Array.isArray(r.proTips)) {
    console.error(`Recipe [${r.slug}] missing proTips`);
  }
  if (!r.flavorRadar) {
    console.error(`Recipe [${r.slug}] missing flavorRadar`);
  }
}
console.log('Finished checking all recipes in RECIPES_DATABASE');
