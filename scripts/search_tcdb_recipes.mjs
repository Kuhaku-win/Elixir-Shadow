async function searchTCDB(name) {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(name)}`);
  const data = await res.json();
  if (data.drinks) {
    return data.drinks.map(d => ({ name: d.strDrink, img: d.strDrinkThumb }));
  }
  return [];
}

async function run() {
  console.log('Highball:', await searchTCDB('Highball'));
  console.log('Fog Cutter:', await searchTCDB('Fog'));
  console.log('Mule / Cucumber:', await searchTCDB('Cucumber'));
  console.log('Champagne:', await searchTCDB('Champagne'));
  console.log('Old Cuban:', await searchTCDB('Cuban'));
}

run();
