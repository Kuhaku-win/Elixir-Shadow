import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const verifiedMap = JSON.parse(fs.readFileSync(path.join(__dirname, 'final_verified_map.json'), 'utf8'));
let content = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'recipes.ts'), 'utf8');

// We split by recipe id blocks
const blocks = content.split(/(?=\{\s*id:\s*['"])/);
console.log('Total blocks found:', blocks.length);

let updatedBlocks = [];
let updateCount = 0;

for (const block of blocks) {
  const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
  if (idMatch && verifiedMap.hasOwnProperty(idMatch[1])) {
    const id = idMatch[1];
    const newImage = verifiedMap[id];
    const updated = block.replace(/(image:\s*['"])([^'"]*)(['"])/, `$1${newImage}$3`);
    updatedBlocks.push(updated);
    updateCount++;
  } else {
    updatedBlocks.push(block);
  }
}

console.log(`Updated ${updateCount} recipes.`);
fs.writeFileSync(path.join(projectRoot, 'src', 'data', 'recipes.ts'), updatedBlocks.join(''), 'utf8');
console.log('Successfully saved to src/data/recipes.ts');
