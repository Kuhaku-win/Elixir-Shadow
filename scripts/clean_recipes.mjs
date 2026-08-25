import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

let content = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'recipes.ts'), 'utf8');

// Find where recipe-gimlet starts
const gimletIndex = content.indexOf('recipe-gimlet');
if (gimletIndex !== -1) {
  // Find preceding "  ," or "  {"
  const startCut = content.lastIndexOf('  ,', gimletIndex);
  if (startCut !== -1) {
    content = content.substring(0, startCut) + '\n];\n';
    fs.writeFileSync(path.join(projectRoot, 'src', 'data', 'recipes.ts'), content, 'utf8');
    console.log('Cleaned unformatted additions from recipes.ts');
  }
}
