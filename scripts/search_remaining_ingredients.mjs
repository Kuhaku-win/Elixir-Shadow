import fs from 'fs';

async function searchCommons(q) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(q) + '&gsrnamespace=6&prop=imageinfo&iiprop=url|mime&iiurlwidth=800&format=json';
  const res = await fetch(url, { headers: { 'User-Agent': 'CooktailBot/1.0 (info@cooktail.local)' } });
  const data = await res.json();
  if (!data.query || !data.query.pages) return [];
  return Object.values(data.query.pages)
    .filter(p => p.imageinfo && p.imageinfo[0].mime && p.imageinfo[0].mime.startsWith('image/'))
    .map(p => ({
      title: p.title,
      url: p.imageinfo[0].thumburl || p.imageinfo[0].url
    }));
}

async function testTCDBIng(name) {
  const url = `https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(name)}-Medium.png`;
  const res = await fetch(url, { headers: { 'User-Agent': 'CooktailBot/1.0 (info@cooktail.local)' } });
  return { name, url, ok: res.ok, status: res.status };
}

async function run() {
  console.log('TCDB Mint:', await testTCDBIng('Green Creme de Menthe'));
  console.log('TCDB Peppermint:', await testTCDBIng('Peppermint schnapps'));
  console.log('TCDB Coconut:', await testTCDBIng('Coconut milk'));
  console.log('TCDB Blossom:', await testTCDBIng('Orange blossom water'));

  console.log('\n--- COMMONS SEARCH ---');
  console.log('Baijiu:', (await searchCommons('Baijiu bottle')).slice(0, 2));
  console.log('Amaro Nonino:', (await searchCommons('Amaro Nonino')).slice(0, 2));
  console.log('Suze:', (await searchCommons('Suze gentiane bouteille')).slice(0, 2));
  console.log('Orange flower water:', (await searchCommons('Orange flower water bottle')).slice(0, 2));
  console.log('Coconut water:', (await searchCommons('Coconut water glass drink')).slice(0, 2));
  console.log('Creme de menthe:', (await searchCommons('Creme de menthe bottle')).slice(0, 2));
}

run();
