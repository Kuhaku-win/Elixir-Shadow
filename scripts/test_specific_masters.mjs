import fs from 'fs';

const masterTitles = [
  { name: 'Jerry Thomas (bartender)', zh: '杰里·托马斯', title: '美国现代鸡尾酒之父 / “教授”', bar: 'Occidental Hotel (旧金山/纽约)', country: '美国' },
  { name: 'Dale DeGroff', zh: '戴尔·戴格罗夫', title: '现代精调鸡尾酒复兴教父 / “鸡尾酒之王”', bar: 'Rainbow Room (彩虹厅·纽约)', country: '美国' },
  { name: 'Sasha Petraske', zh: '萨沙·佩特拉斯克', title: '地下酒吧与现代经典守夜人', bar: 'Milk & Honey (纽约/伦敦)', country: '美国' },
  { name: 'Harry Craddock', zh: '哈里·克拉多克', title: '《萨伏伊鸡尾酒书》编撰宗师', bar: 'The Savoy American Bar (伦敦)', country: '英国 / 美国' },
  { name: 'Salvatore Calabrese', zh: '萨尔瓦托雷·卡拉布雷斯', title: '“名匠 (The Maestro)” / 早餐马天尼创制者', bar: 'The Donovan Bar (伦敦)', country: '意大利 / 英国' },
  { name: 'Audrey Saunders', zh: '奥黛丽·桑德斯', title: 'Pegu Club 创始人 / 现代鸡尾酒教母', bar: 'Pegu Club (纽约)', country: '美国' },
  { name: 'Jim Meehan (bartender)', zh: '吉姆·米汉', title: 'PDT (Please Don\'t Tell) 创始人 / 《PDT调酒手册》作者', bar: 'PDT (纽约)', country: '美国' },
  { name: 'David Wondrich', zh: '大卫·旺德里奇', title: '全球权威鸡尾酒历史学家 / 《Imbibe!》作者', bar: 'Esquire 专栏 / 鸡尾酒史泰斗', country: '美国' },
  { name: 'Donn Beach', zh: '唐·埃尔文·比奇', title: '提基 (Tiki) 鸡尾酒文化鼻祖 / 僵尸鸡尾酒创制者', bar: 'Don the Beachcomber (好莱坞)', country: '美国' },
  { name: 'Victor Jules Bergeron', zh: '维克多·“维克商人”·伯杰龙', title: 'Trader Vic\'s 创始人 / 迈泰 (Mai Tai) 缔造者', bar: 'Trader Vic\'s (旧金山)', country: '美国' }
];

async function fetchWikiPages() {
  const titles = masterTitles.map(m => m.name).join('|');
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=extracts|pageimages|info&exintro=1&explaintext=1&pithumbsize=600&inprop=url&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'CooktailBot/1.0 (info@cooktail.local)' } });
  const data = await res.json();
  const pages = Object.values(data.query.pages);
  
  for (const p of pages) {
    console.log(`[${p.title}] -> Image: ${p.thumbnail ? p.thumbnail.source : 'No Image'}`);
    console.log(`   Extract: ${p.extract ? p.extract.slice(0, 120) : 'None'}...`);
  }
}

fetchWikiPages();
