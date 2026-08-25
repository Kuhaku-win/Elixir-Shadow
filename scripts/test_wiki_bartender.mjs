import fs from 'fs';

async function searchWikipediaBartender(query) {
  try {
    // 1. Search Wikipedia for pages
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query + ' bartender mixologist cocktail')}&utf8=&format=json`;
    const res = await fetch(searchUrl, { headers: { 'User-Agent': 'CooktailBot/1.0 (info@cooktail.local)' } });
    const data = await res.json();
    if (!data.query || !data.query.search || data.query.search.length === 0) return [];
    
    const pageTitles = data.query.search.slice(0, 3).map(s => s.title);
    
    // 2. Fetch page extracts and pageimages
    const detailsUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitles.join('|'))}&prop=extracts|pageimages|info&exintro=1&explaintext=1&pithumbsize=600&inprop=url&format=json`;
    const detailRes = await fetch(detailsUrl, { headers: { 'User-Agent': 'CooktailBot/1.0 (info@cooktail.local)' } });
    const detailData = await detailRes.json();
    
    return Object.values(detailData.query.pages).map(p => ({
      pageid: p.pageid,
      title: p.title,
      extract: p.extract ? p.extract.slice(0, 200) + '...' : '',
      image: p.thumbnail ? p.thumbnail.source : null,
      url: p.fullurl
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function run() {
  console.log('--- Search Jerry Thomas ---');
  console.log(await searchWikipediaBartender('Jerry Thomas'));
  console.log('--- Search Dale DeGroff ---');
  console.log(await searchWikipediaBartender('Dale DeGroff'));
  console.log('--- Search Harry Craddock ---');
  console.log(await searchWikipediaBartender('Harry Craddock'));
}

run();
