import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const curatedIngredientMap = {
  // 1. 基酒 (Base Spirits)
  'gin': 'https://www.thecocktaildb.com/images/ingredients/Gin-Medium.png',
  'vodka': 'https://www.thecocktaildb.com/images/ingredients/Vodka-Medium.png',
  'rum-white': 'https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png',
  'rum-dark': 'https://www.thecocktaildb.com/images/ingredients/Dark%20rum-Medium.png',
  'whiskey-bourbon': 'https://www.thecocktaildb.com/images/ingredients/Bourbon-Medium.png',
  'whiskey-scotch': 'https://www.thecocktaildb.com/images/ingredients/Scotch-Medium.png',
  'whiskey-rye': 'https://www.thecocktaildb.com/images/ingredients/Rye%20whiskey-Medium.png',
  'tequila': 'https://www.thecocktaildb.com/images/ingredients/Tequila-Medium.png',
  'brandy-cognac': 'https://www.thecocktaildb.com/images/ingredients/Cognac-Medium.png',
  'mezcal': 'https://www.thecocktaildb.com/images/ingredients/Mezcal-Medium.png',
  'cachaca': 'https://www.thecocktaildb.com/images/ingredients/Cachaca-Medium.png',
  'pisco': 'https://www.thecocktaildb.com/images/ingredients/Pisco-Medium.png',
  'calvados': 'https://www.thecocktaildb.com/images/ingredients/Calvados-Medium.png',
  'whiskey-irish': 'https://www.thecocktaildb.com/images/ingredients/Irish%20whiskey-Medium.png',
  'whiskey-japanese': 'https://www.thecocktaildb.com/images/ingredients/Whiskey-Medium.png',
  'rum-overproof': 'https://www.thecocktaildb.com/images/ingredients/151%20proof%20rum-Medium.png',
  'rhum-agricole': 'https://www.thecocktaildb.com/images/ingredients/Rum-Medium.png',
  'baijiu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jiugui.jpg/960px-Jiugui.jpg',

  // 2. 利口酒与加强酒 (Liqueurs, Vermouth & Fortified Wines)
  'cointreau': 'https://www.thecocktaildb.com/images/ingredients/Cointreau-Medium.png',
  'campari': 'https://www.thecocktaildb.com/images/ingredients/Campari-Medium.png',
  'sweet-vermouth': 'https://www.thecocktaildb.com/images/ingredients/Sweet%20Vermouth-Medium.png',
  'dry-vermouth': 'https://www.thecocktaildb.com/images/ingredients/Dry%20Vermouth-Medium.png',
  'kahlua': 'https://www.thecocktaildb.com/images/ingredients/Kahlua-Medium.png',
  'baileys': 'https://www.thecocktaildb.com/images/ingredients/Baileys%20irish%20cream-Medium.png',
  'chartreuse-green': 'https://www.thecocktaildb.com/images/ingredients/Green%20Chartreuse-Medium.png',
  'chartreuse-yellow': 'https://www.thecocktaildb.com/images/ingredients/Yellow%20Chartreuse-Medium.png',
  'maraschino': 'https://www.thecocktaildb.com/images/ingredients/Maraschino%20liqueur-Medium.png',
  'blue-curacao': 'https://www.thecocktaildb.com/images/ingredients/Blue%20Curacao-Medium.png',
  'amaretto': 'https://www.thecocktaildb.com/images/ingredients/Amaretto-Medium.png',
  'st-germain': 'https://www.thecocktaildb.com/images/ingredients/Elderflower%20cordial-Medium.png',
  'absinthe': 'https://www.thecocktaildb.com/images/ingredients/Absinthe-Medium.png',
  'aperol': 'https://www.thecocktaildb.com/images/ingredients/Aperol-Medium.png',
  'prosecco-champagne': 'https://www.thecocktaildb.com/images/ingredients/Champagne-Medium.png',
  'lillet-blanc': 'https://www.thecocktaildb.com/images/ingredients/Lillet%20Blanc-Medium.png',
  'sherry-fino': 'https://www.thecocktaildb.com/images/ingredients/Sherry-Medium.png',
  'port-wine': 'https://www.thecocktaildb.com/images/ingredients/Port-Medium.png',
  'amaro-nonino': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Amaro_Lucano_Bottle.jpg/960px-Amaro_Lucano_Bottle.jpg',
  'fernet-branca': 'https://www.thecocktaildb.com/images/ingredients/Fernet-Branca-Medium.png',
  'suze': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Liqueurs_gentiane.jpg/960px-Liqueurs_gentiane.jpg',
  'cynar': 'https://www.thecocktaildb.com/images/ingredients/Cynar-Medium.png',
  'benedictine': 'https://www.thecocktaildb.com/images/ingredients/Benedictine-Medium.png',
  'drambuie': 'https://www.thecocktaildb.com/images/ingredients/Drambuie-Medium.png',
  'grand-marnier': 'https://www.thecocktaildb.com/images/ingredients/Grand%20Marnier-Medium.png',
  'creme-de-cacao': 'https://www.thecocktaildb.com/images/ingredients/Creme%20de%20Cacao-Medium.png',
  'creme-de-menthe': 'https://www.thecocktaildb.com/images/ingredients/Green%20Creme%20de%20Menthe-Medium.png',
  'creme-de-violette': 'https://www.thecocktaildb.com/images/ingredients/Creme%20de%20Violette-Medium.png',
  'creme-de-mure': 'https://www.thecocktaildb.com/images/ingredients/Blackberry%20brandy-Medium.png',
  'creme-de-cassis': 'https://www.thecocktaildb.com/images/ingredients/Creme%20de%20Cassis-Medium.png',
  'passoa': 'https://www.thecocktaildb.com/images/ingredients/Passoa-Medium.png',
  'peach-schnapps': 'https://www.thecocktaildb.com/images/ingredients/Peach%20schnapps-Medium.png',
  'midori': 'https://www.thecocktaildb.com/images/ingredients/Midori%20melon%20liqueur-Medium.png',
  'galliano': 'https://www.thecocktaildb.com/images/ingredients/Galliano-Medium.png',
  'falernum': 'https://www.thecocktaildb.com/images/ingredients/Falernum-Medium.png',

  // 3. 糖浆与甜味剂 (Syrups & Sweeteners)
  'simple-syrup': 'https://www.thecocktaildb.com/images/ingredients/Sugar%20syrup-Medium.png',
  'grenadine': 'https://www.thecocktaildb.com/images/ingredients/Grenadine-Medium.png',
  'honey-syrup': 'https://www.thecocktaildb.com/images/ingredients/Honey-Medium.png',
  'orgeat-syrup': 'https://www.thecocktaildb.com/images/ingredients/Orgeat%20syrup-Medium.png',
  'ginger-syrup': 'https://www.thecocktaildb.com/images/ingredients/Ginger-Medium.png',
  'agave-nectar': 'https://www.thecocktaildb.com/images/ingredients/Agave%20syrup-Medium.png',

  // 4. 果汁与酸味剂 (Juices & Acid Agents)
  'fresh-lime-juice': 'https://www.thecocktaildb.com/images/ingredients/Lime%20juice-Medium.png',
  'fresh-lemon-juice': 'https://www.thecocktaildb.com/images/ingredients/Lemon%20juice-Medium.png',
  'cranberry-juice': 'https://www.thecocktaildb.com/images/ingredients/Cranberry%20juice-Medium.png',
  'grapefruit-juice': 'https://www.thecocktaildb.com/images/ingredients/Grapefruit%20juice-Medium.png',
  'pineapple-juice': 'https://www.thecocktaildb.com/images/ingredients/Pineapple%20juice-Medium.png',
  'fresh-orange-juice': 'https://www.thecocktaildb.com/images/ingredients/Orange%20juice-Medium.png',
  'tomato-juice': 'https://www.thecocktaildb.com/images/ingredients/Tomato%20juice-Medium.png',
  'passion-fruit-juice': 'https://www.thecocktaildb.com/images/ingredients/Passion%20fruit%20juice-Medium.png',
  'apple-juice': 'https://www.thecocktaildb.com/images/ingredients/Apple%20juice-Medium.png',
  'grape-juice-white': 'https://www.thecocktaildb.com/images/ingredients/Grape%20juice-Medium.png',
  'grape-juice-red': 'https://www.thecocktaildb.com/images/ingredients/Grape%20juice-Medium.png',
  'peach-juice': 'https://www.thecocktaildb.com/images/ingredients/Peach%20nectar-Medium.png',
  'mango-juice': 'https://www.thecocktaildb.com/images/ingredients/Mango-Medium.png',
  'guava-juice': 'https://www.thecocktaildb.com/images/ingredients/Guava%20juice-Medium.png',

  // 5. 苦精 (Bitters)
  'angostura-bitters': 'https://www.thecocktaildb.com/images/ingredients/Angostura%20Bitters-Medium.png',
  'orange-bitters': 'https://www.thecocktaildb.com/images/ingredients/Orange%20bitters-Medium.png',
  'peychauds-bitters': 'https://www.thecocktaildb.com/images/ingredients/Peychaud%20bitters-Medium.png',

  // 6. 汽水与软饮辅料 (Mixers & Carbonated Sodas)
  'tonic-water': 'https://www.thecocktaildb.com/images/ingredients/Tonic%20water-Medium.png',
  'club-soda': 'https://www.thecocktaildb.com/images/ingredients/Club%20soda-Medium.png',
  'ginger-beer': 'https://www.thecocktaildb.com/images/ingredients/Ginger%20beer-Medium.png',
  'ginger-ale': 'https://www.thecocktaildb.com/images/ingredients/Ginger%20ale-Medium.png',
  'coca-cola': 'https://www.thecocktaildb.com/images/ingredients/Coca-Cola-Medium.png',
  'sprite-lemon-soda': 'https://www.thecocktaildb.com/images/ingredients/Sprite-Medium.png',
  'coconut-water': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Green_coconut_fruit.jpg/960px-Green_coconut_fruit.jpg',
  'iced-black-tea': 'https://www.thecocktaildb.com/images/ingredients/Tea-Medium.png',
  'espresso': 'https://www.thecocktaildb.com/images/ingredients/Espresso-Medium.png',

  // 7. 装饰物与生鲜 (Garnishes & Fresh Produce)
  'fresh-mint': 'https://www.thecocktaildb.com/images/ingredients/Mint-Medium.png',
  'fresh-basil': 'https://www.thecocktaildb.com/images/ingredients/Basil-Medium.png',
  'maraschino-cherry': 'https://www.thecocktaildb.com/images/ingredients/Maraschino%20cherry-Medium.png',
  'green-olives': 'https://www.thecocktaildb.com/images/ingredients/Olive-Medium.png',
  'cocktail-onion': 'https://www.thecocktaildb.com/images/ingredients/Cocktail%20onion-Medium.png',
  'fresh-grapes': 'https://www.thecocktaildb.com/images/ingredients/Grapes-Medium.png',

  // 8. 其他关键原料 (Dairy & Specialty)
  'egg-white': 'https://www.thecocktaildb.com/images/ingredients/Egg%20white-Medium.png',
  'heavy-cream': 'https://www.thecocktaildb.com/images/ingredients/Heavy%20cream-Medium.png',
  'coconut-cream': 'https://www.thecocktaildb.com/images/ingredients/Coconut%20cream-Medium.png',
  'orange-flower-water': '' // Niche specialty flavoring, left blank as reportable
};

async function verifyAndUpdate() {
  const ingredientsList = JSON.parse(fs.readFileSync(path.join(projectRoot, 'scripts', 'ingredients_list.json'), 'utf8'));
  console.log(`Starting verification for all ${ingredientsList.length} ingredients...`);

  const results = [];
  for (const ing of ingredientsList) {
    const url = curatedIngredientMap[ing.id] || '';
    if (!url) {
      results.push({ id: ing.id, name: ing.name, url: '', status: 'BLANK', ok: true });
      continue;
    }
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'CooktailBot/1.0 (info@cooktail.local)' } });
      const ct = res.headers.get('content-type') || '';
      if (res.ok && (ct.includes('image') || ct.includes('octet-stream'))) {
        results.push({ id: ing.id, name: ing.name, url, status: res.status, ok: true, contentType: ct });
      } else {
        results.push({ id: ing.id, name: ing.name, url, status: res.status, ok: false, contentType: ct });
      }
    } catch(e) {
      results.push({ id: ing.id, name: ing.name, url, status: 'ERROR', ok: false, error: e.message });
    }
  }

  const passed = results.filter(r => r.ok && r.url);
  const failed = results.filter(r => !r.ok);
  const blank = results.filter(r => !r.url);

  console.log('\n--- INGREDIENTS VERIFICATION SUMMARY ---');
  console.log(`Total Ingredients: ${results.length}`);
  console.log(`✅ Validated 200 OK Image URLs: ${passed.length}`);
  console.log(`❌ Failed URLs: ${failed.length}`);
  console.log(`⚪ Intentionally Empty / Reported: ${blank.length}`);

  if (failed.length > 0) {
    console.log('\nFailed details:', failed);
    return;
  }

  // Update src/data/ingredients.ts
  let content = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'ingredients.ts'), 'utf8');
  const blocks = content.split(/(?=\{\s*id:\s*['"])/);
  let updatedBlocks = [];
  let updateCount = 0;

  for (const block of blocks) {
    const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
    if (idMatch && curatedIngredientMap.hasOwnProperty(idMatch[1])) {
      const id = idMatch[1];
      const newImg = curatedIngredientMap[id];
      const updated = block.replace(/(image:\s*['"])([^'"]*)(['"])/, `$1${newImg}$3`);
      updatedBlocks.push(updated);
      updateCount++;
    } else {
      updatedBlocks.push(block);
    }
  }

  console.log(`Updated ${updateCount} ingredients in src/data/ingredients.ts`);
  fs.writeFileSync(path.join(projectRoot, 'src', 'data', 'ingredients.ts'), updatedBlocks.join(''), 'utf8');
  fs.writeFileSync(path.join(projectRoot, 'scripts', 'ingredients_verification_report.json'), JSON.stringify(results, null, 2));
}

verifyAndUpdate();
