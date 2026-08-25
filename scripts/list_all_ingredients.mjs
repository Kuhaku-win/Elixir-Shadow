import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const list = JSON.parse(fs.readFileSync(path.join(projectRoot, 'scripts', 'ingredients_list.json'), 'utf8'));
list.forEach((item, idx) => {
  console.log(`${idx + 1}. [${item.id}] ${item.name} / ${item.nameEn} (cat: ${item.category})`);
});
