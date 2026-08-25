import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { newIngredients } from './new_ingredients.mjs';
import { newRecipes } from './new_recipes.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// 1. Process ingredients.ts
const ingredientsFilePath = path.join(projectRoot, 'src', 'data', 'ingredients.ts');
let ingredientsContent = fs.readFileSync(ingredientsFilePath, 'utf8');

// Find where the array closes
const lastBracketIndex = ingredientsContent.lastIndexOf('];');
if (lastBracketIndex !== -1) {
  // Check which ingredients already exist
  const existingIds = new Set();
  for (const m of ingredientsContent.matchAll(/id:\s*'([^']+)'/g)) {
    existingIds.add(m[1]);
  }
  
  const toAdd = newIngredients.filter(ing => !existingIds.has(ing.id));
  console.log(`Found ${toAdd.length} new ingredients to append.`);

  if (toAdd.length > 0) {
    const serialized = toAdd.map(item => '  ' + JSON.stringify(item, null, 2).replace(/"([^"]+)":/g, '$1:').split('\n').join('\n  ')).join(',\n');
    
    // Check if previous ended with comma
    const beforeBracket = ingredientsContent.slice(0, lastBracketIndex).trimEnd();
    const needComma = !beforeBracket.endsWith(',');
    
    const newIngredientsContent = beforeBracket + (needComma ? ',\n' : '\n') + serialized + '\n];\n';
    fs.writeFileSync(ingredientsFilePath, newIngredientsContent, 'utf8');
    console.log('Successfully updated src/data/ingredients.ts');
  }
}

// 2. Process recipes.ts
const recipesFilePath = path.join(projectRoot, 'src', 'data', 'recipes.ts');
let recipesContent = fs.readFileSync(recipesFilePath, 'utf8');

const lastRecipeBracketIndex = recipesContent.lastIndexOf('];');
if (lastRecipeBracketIndex !== -1) {
  const existingRecipeIds = new Set();
  for (const m of recipesContent.matchAll(/id:\s*'([^']+)'/g)) {
    existingRecipeIds.add(m[1]);
  }

  const recipesToAdd = newRecipes.filter(r => !existingRecipeIds.has(r.id));
  console.log(`Found ${recipesToAdd.length} new recipes to append.`);

  if (recipesToAdd.length > 0) {
    const serialized = recipesToAdd.map(item => '  ' + JSON.stringify(item, null, 2).replace(/"([^"]+)":/g, '$1:').split('\n').join('\n  ')).join(',\n');
    
    const beforeBracket = recipesContent.slice(0, lastRecipeBracketIndex).trimEnd();
    const needComma = !beforeBracket.endsWith(',');
    
    const newRecipesContent = beforeBracket + (needComma ? ',\n' : '\n') + serialized + '\n];\n';
    fs.writeFileSync(recipesFilePath, newRecipesContent, 'utf8');
    console.log('Successfully updated src/data/recipes.ts');
  }
}
