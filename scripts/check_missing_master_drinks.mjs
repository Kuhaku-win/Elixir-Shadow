import fs from 'fs';
import { MASTERS_DATABASE } from '../src/data/masters.ts';
import { ONLINE_MASTERS_CATALOG } from '../src/services/mastersService.ts';
import { RECIPES_DATABASE } from '../src/data/recipes.ts';

const allMasters = [...MASTERS_DATABASE, ...ONLINE_MASTERS_CATALOG];
const missing = [];
const found = [];

for (const m of allMasters) {
  for (const drink of m.signatureCocktails) {
    const enPart = drink.split('(')[0].trim().toLowerCase();
    const zhMatch = drink.match(/\((.*?)\)/);
    const zhPart = zhMatch ? zhMatch[1].trim() : '';

    const matched = RECIPES_DATABASE.find(r => 
      r.slug === enPart.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') ||
      r.nameEn.toLowerCase() === enPart ||
      r.name.toLowerCase() === enPart ||
      (enPart && r.nameEn.toLowerCase().includes(enPart) && enPart.length > 4) ||
      (zhPart && r.name.includes(zhPart)) ||
      (zhPart && r.nameEn.toLowerCase().includes(zhPart.toLowerCase()))
    );

    if (matched) {
      found.push({ master: m.name, drink, slug: matched.slug, recipeName: matched.name });
    } else {
      missing.push({ master: m.name, masterEn: m.nameEn, drink, enPart, zhPart });
    }
  }
}

console.log(`Found exact recipes in RECIPES_DATABASE: ${found.length}`);
console.log(`Missing from RECIPES_DATABASE: ${missing.length}`);
console.log('\n--- MISSING SIGNATURE DRINKS ---');
missing.forEach(m => console.log(`[${m.master} (${m.masterEn})]: "${m.drink}"`));

fs.writeFileSync('scripts/missing_master_drinks.json', JSON.stringify(missing, null, 2));
