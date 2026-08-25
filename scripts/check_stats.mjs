import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const text = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'recipes.ts'), 'utf8');
const blocks = text.split(/(?=\{\s*id:\s*['"])/).slice(1);

const stats = { total: blocks.length, filled: 0, empty: 0, sources: {} };
const emptyList = [];

for (const b of blocks) {
  const id = (b.match(/id:\s*['"]([^'"]+)['"]/) || [])[1];
  const name = (b.match(/name:\s*['"]([^'"]+)['"]/) || [])[1];
  const nameEn = (b.match(/nameEn:\s*['"]([^'"]+)['"]/) || [])[1];
  const img = (b.match(/image:\s*['"]([^'"]*)['"]/) || [])[1];
  
  if (img && img.trim().length > 0) {
    stats.filled++;
    const domain = new URL(img).hostname;
    stats.sources[domain] = (stats.sources[domain] || 0) + 1;
  } else {
    stats.empty++;
    emptyList.push({ id, name, nameEn });
  }
}

console.log('--- STATS AFTER UPDATE ---');
console.log('Total Recipes in recipes.ts:', stats.total);
console.log('Filled Real Images:', stats.filled);
console.log('Empty Images (reported):', stats.empty);
console.log('Image Sources:', stats.sources);
console.log('\n--- EMPTY RECIPES LIST (' + emptyList.length + ') ---');
emptyList.forEach((r, i) => console.log(`${i+1}. [${r.id}] ${r.name} (${r.nameEn})`));
