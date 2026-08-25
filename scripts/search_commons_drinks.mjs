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

async function run() {
  console.log('Fog Cutter:', (await searchCommons('Fog Cutter cocktail Tiki')).slice(0, 2));
  console.log('Cucumber cocktail:', (await searchCommons('Cucumber cocktail glass')).slice(0, 2));
  console.log('Calvados cocktail:', (await searchCommons('Cocktail glass mint garnish')).slice(0, 2));
}

run();
