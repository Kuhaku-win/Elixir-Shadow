import fs from 'fs';

const masterNewRecipes = JSON.parse(fs.readFileSync('scripts/master_new_recipes.json', 'utf8'));

async function testImages() {
  for (const r of masterNewRecipes) {
    if (!r.image) continue;
    try {
      const res = await fetch(r.image, { headers: { 'User-Agent': 'CooktailBot/1.0 (info@cooktail.local)' } });
      console.log(`[${r.name}] -> status: ${res.status}, ok: ${res.ok}`);
    } catch(e) {
      console.log(`[${r.name}] -> ERROR: ${e.message}`);
    }
  }
}

testImages();
