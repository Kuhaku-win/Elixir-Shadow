import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const text = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'ingredients.ts'), 'utf8');
const blocks = text.split(/(?=\{\s*id:\s*['"])/).slice(1);
console.log('Total ingredients:', blocks.length);

const list = [];
const sources = {};
const counts = {};

for (const b of blocks) {
  const id = (b.match(/id:\s*['"]([^'"]+)['"]/) || [])[1];
  const name = (b.match(/name:\s*['"]([^'"]+)['"]/) || [])[1];
  const nameEn = (b.match(/nameEn:\s*['"]([^'"]+)['"]/) || [])[1];
  const category = (b.match(/category:\s*['"]([^'"]+)['"]/) || [])[1];
  const categoryZh = (b.match(/categoryZh:\s*['"]([^'"]+)['"]/) || [])[1];
  const image = (b.match(/image:\s*['"]([^'"]*)['"]/) || [])[1];
  list.push({ id, name, nameEn, category, categoryZh, image });
  
  const domain = image ? (image.startsWith('http') ? new URL(image).hostname : 'local') : 'empty';
  sources[domain] = (sources[domain] || 0) + 1;
  counts[image] = (counts[image] || 0) + 1;
}

console.log('Image domains in ingredients:', sources);
console.log('Unique images:', Object.keys(counts).length);
console.log('\nTop repeated images in ingredients:');
for (const [img, cnt] of Object.entries(counts).sort((a,b) => b[1] - a[1])) {
  if (cnt > 1) {
    const items = list.filter(x => x.image === img).map(x => x.name);
    console.log(`${cnt} times: ${img}`);
    console.log('  Items:', items.slice(0, 6).join(', ') + (items.length > 6 ? `... and ${items.length - 6} more` : ''));
  }
}

fs.writeFileSync(path.join(projectRoot, 'scripts', 'ingredients_list.json'), JSON.stringify(list, null, 2));
console.log('Saved list to scripts/ingredients_list.json');
