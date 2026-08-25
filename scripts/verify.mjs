import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const ingredientsContent = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'ingredients.ts'), 'utf8');
const recipesContent = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'recipes.ts'), 'utf8');

const ingIds = new Set();
for (const m of ingredientsContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)) {
  ingIds.add(m[1]);
}

const recIds = new Set();
for (const m of recipesContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)) {
  recIds.add(m[1]);
}

console.log('--- DATABASE INVENTORY ---');
console.log('Total unique Ingredients in database:', ingIds.size);
console.log('Total unique Recipes in database:', recIds.size);

// Check juices & mixers specifically
const fruitKeywords = ['雪碧', '苹果', '橙', '葡萄', '提子', '桃', '芭乐', '芒果', '西柚', '青柠', '柠檬', '百香果', '蔓越莓', '番茄', '椰子'];
console.log('\n--- FRUIT JUICE & MIXER RELEVANT RECIPES ---');
let fruitRecipeCount = 0;
for (const line of recipesContent.split('\n')) {
  if (line.includes('name:') && fruitKeywords.some(kw => line.includes(kw))) {
    fruitRecipeCount++;
    console.log(line.trim());
  }
}
console.log('\nFruit / Mixer Relevant Recipes count:', fruitRecipeCount);
