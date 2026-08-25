import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const tcdbIngredientMap = {
  'gin': 'Gin',
  'vodka': 'Vodka',
  'rum-white': 'Light rum',
  'rum-dark': 'Dark rum',
  'whiskey-bourbon': 'Bourbon',
  'whiskey-scotch': 'Scotch',
  'whiskey-rye': 'Rye whiskey',
  'tequila': 'Tequila',
  'brandy-cognac': 'Cognac',
  'cointreau': 'Cointreau',
  'campari': 'Campari',
  'sweet-vermouth': 'Sweet Vermouth',
  'dry-vermouth': 'Dry Vermouth',
  'kahlua': 'Kahlua',
  'baileys': 'Baileys irish cream',
  'chartreuse-green': 'Green Chartreuse',
  'maraschino': 'Maraschino liqueur',
  'blue-curacao': 'Blue Curacao',
  'amaretto': 'Amaretto',
  'st-germain': 'Elderflower cordial',
  'absinthe': 'Absinthe',
  'aperol': 'Aperol',
  'simple-syrup': 'Sugar syrup',
  'grenadine': 'Grenadine',
  'honey-syrup': 'Honey',
  'orgeat-syrup': 'Orgeat syrup',
  'ginger-syrup': 'Ginger',
  'agave-nectar': 'Agave syrup',
  'fresh-lime-juice': 'Lime juice',
  'fresh-lemon-juice': 'Lemon juice',
  'cranberry-juice': 'Cranberry juice',
  'grapefruit-juice': 'Grapefruit juice',
  'pineapple-juice': 'Pineapple juice',
  'angostura-bitters': 'Angostura Bitters',
  'orange-bitters': 'Orange bitters',
  'peychauds-bitters': 'Peychaud bitters',
  'tonic-water': 'Tonic water',
  'club-soda': 'Club soda',
  'ginger-beer': 'Ginger beer',
  'egg-white': 'Egg white',
  'fresh-mint': 'Mint',
  'maraschino-cherry': 'Maraschino cherry',
  'fresh-orange-juice': 'Orange juice',
  'tomato-juice': 'Tomato juice',
  'coca-cola': 'Coca-Cola',
  'ginger-ale': 'Ginger ale',
  'passion-fruit-juice': 'Passion fruit juice',
  'green-olives': 'Olive',
  'mezcal': 'Mezcal',
  'cachaca': 'Cachaca',
  'pisco': 'Pisco',
  'calvados': 'Calvados',
  'whiskey-irish': 'Irish whiskey',
  'whiskey-japanese': 'Whiskey',
  'rum-overproof': '151 proof rum',
  'rhum-agricole': 'Rum',
  'baijiu': '',
  'prosecco-champagne': 'Champagne',
  'lillet-blanc': 'Lillet Blanc',
  'sherry-fino': 'Sherry',
  'port-wine': 'Port',
  'chartreuse-yellow': 'Yellow Chartreuse',
  'amaro-nonino': 'Amaro Nonino',
  'fernet-branca': 'Fernet-Branca',
  'suze': 'Suze',
  'cynar': 'Cynar',
  'benedictine': 'Benedictine',
  'drambuie': 'Drambuie',
  'grand-marnier': 'Grand Marnier',
  'creme-de-cacao': 'Creme de Cacao',
  'creme-de-menthe': 'Creme de Menthe',
  'creme-de-violette': 'Creme de Violette',
  'creme-de-mure': 'Blackberry brandy',
  'creme-de-cassis': 'Creme de Cassis',
  'passoa': 'Passoa',
  'peach-schnapps': 'Peach schnapps',
  'midori': 'Midori melon liqueur',
  'galliano': 'Galliano',
  'falernum': 'Falernum',
  'heavy-cream': 'Heavy cream',
  'coconut-cream': 'Coconut cream',
  'espresso': 'Espresso',
  'fresh-basil': 'Basil',
  'cocktail-onion': 'Cocktail onion',
  'orange-flower-water': 'Orange flower water',
  'sprite-lemon-soda': 'Sprite',
  'apple-juice': 'Apple juice',
  'grape-juice-white': 'Grape juice',
  'grape-juice-red': 'Grape juice',
  'peach-juice': 'Peach nectar',
  'mango-juice': 'Mango',
  'guava-juice': 'Guava juice',
  'fresh-grapes': 'Grapes',
  'coconut-water': 'Coconut water',
  'iced-black-tea': 'Tea'
};

async function testEndpoints() {
  const results = [];
  for (const [id, tcdbName] of Object.entries(tcdbIngredientMap)) {
    if (!tcdbName) {
      results.push({ id, tcdbName, ok: false, status: 'NONE' });
      continue;
    }
    const url = `https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(tcdbName)}-Medium.png`;
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'CooktailBot/1.0 (info@cooktail.local)' } });
      results.push({ id, tcdbName, url, ok: res.ok, status: res.status, contentType: res.headers.get('content-type') });
    } catch(e) {
      results.push({ id, tcdbName, url, ok: false, status: 'ERROR', error: e.message });
    }
  }

  const passed = results.filter(r => r.ok);
  const failed = results.filter(r => !r.ok);
  console.log(`Tested ${results.length} ingredients:`);
  console.log(`Passed (200 OK): ${passed.length}`);
  console.log(`Failed: ${failed.length}`);

  if (failed.length > 0) {
    console.log('\nFailed ingredients:');
    failed.forEach(f => console.log(`  [${f.id}] query: "${f.tcdbName}" -> status: ${f.status}`));
  }

  fs.writeFileSync(path.join(projectRoot, 'scripts', 'tcdb_ing_results.json'), JSON.stringify(results, null, 2));
}

testEndpoints();
