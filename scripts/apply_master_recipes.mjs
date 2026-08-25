import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// 1. Load 13 new master recipes
const newRecipes = JSON.parse(fs.readFileSync(path.join(projectRoot, 'scripts', 'master_new_recipes.json'), 'utf8'));

// 2. Read src/data/recipes.ts
let recipesTs = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'recipes.ts'), 'utf8');

// Check if recipes already added
for (const nr of newRecipes) {
  if (!recipesTs.includes(`'${nr.slug}'`) && !recipesTs.includes(`"${nr.slug}"`)) {
    const formatted = `  ,\n  ${JSON.stringify(nr, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/\\"/g, '"')}`;
    recipesTs = recipesTs.replace(/\n\];/, `${formatted}\n];`);
  }
}

fs.writeFileSync(path.join(projectRoot, 'src', 'data', 'recipes.ts'), recipesTs, 'utf8');
console.log('Appended new master recipes to src/data/recipes.ts');

// 3. Update src/data/masters.ts with perfectly matched signature drinks
const updatedMastersTs = `import type { Master } from '../types/cocktail';

export const MASTERS_DATABASE: Master[] = [
  {
    id: 'master-kazuo-uyeda',
    name: '上田和男',
    nameEn: 'Kazuo Uyeda',
    title: '银座调酒教父 / Hard Shake 创始人',
    avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
    bar: 'Tender Bar (东京银座)',
    country: '日本',
    bio: '日本调酒界的宗师级泰斗，以开创革命性的「Hard Shake（硬摇荡手法）」名扬世界。他将武道般的精神与流体动力学融为一体，彻底改写了世界摇荡调酒标准。',
    philosophy: '调酒不仅是调配液体，更是与冰块、空气与杯具的无声对话。每一杯送出的酒，都必须倾注调酒师当下的全部灵魂。',
    famousQuote: '所谓的 Hard Shake，是在雪克壶中创造有生命的微气泡漩涡，赋予酒体天鹅绒般的质感。',
    signatureCocktails: ['Gimlet (金雷特)', 'King\\'s Valley (国王山谷)', 'City Coral (城市珊瑚)']
  },
  {
    id: 'master-sam-ross',
    name: '山姆·罗斯',
    nameEn: 'Sam Ross',
    title: '纽约现代鸡尾酒复兴领袖',
    avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80',
    bar: 'Attaboy / Milk & Honey (纽约)',
    country: '美国',
    bio: '已故大师 Sasha Petraske 的头号弟子，纽约下东区鸡尾酒复兴的核心人物。凭借一款「盘尼西林（Penicillin）」与「纸飞机（Paper Plane）」成为21世纪被致敬最多的传奇调酒师。',
    philosophy: '经典从不是用来墨守成规的，而是用来被打破和重新注入时代灵魂的。',
    famousQuote: '真正的现代经典，是用最克制的原料，创造出让人终生难忘的风味张力。',
    signatureCocktails: ['Penicillin (盘尼西林)', 'Paper Plane (纸飞机)']
  },
  {
    id: 'master-ada-coleman',
    name: '艾达·科尔曼',
    nameEn: 'Ada Coleman',
    title: '萨伏伊美洲酒吧第一任传奇女主理',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    bar: 'The American Bar at The Savoy (伦敦)',
    country: '英国',
    bio: '1903年至1926年掌管伦敦萨伏伊酒店美洲酒吧长达23年，是调酒史上最伟大的女性调酒大师。她为著名演员查尔斯·霍特里创制了惊世名作「Hanky Panky」。',
    philosophy: '酒吧不仅提供酒精，更是一个庇护所。善待每一位推门而入的疲惫灵魂。',
    famousQuote: '吧台是这世界上少数几个偏见被彻底消解的圣殿。',
    signatureCocktails: ['Hanky Panky (汉基帕基)']
  },
  {
    id: 'master-ran-duan',
    name: '段冉',
    nameEn: 'Ran Duan',
    title: '世界级华裔调酒大师 / 全美年度调酒师',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bar: 'The Baldwin Bar / Blossom Bar (波士顿)',
    country: '美国 / 华裔',
    bio: '从家族中餐馆吧台起步，斩获百加得传世全球鸡尾酒大赛全美冠军等无数世界顶级荣誉，被评为全美最具影响力的先锋调酒大师之一。',
    philosophy: '每一杯调酒完成之后，我都会自问：我还可以做些什么把它做得更好？永不止步的推敲，才是调酒的真谛。',
    famousQuote: '细节不是决定成败，细节就是成败本身。',
    signatureCocktails: ['Father\\'s Advice (父亲的劝诫)']
  },
  {
    id: 'master-dick-bradsell',
    name: '迪克·布莱德塞尔',
    nameEn: 'Dick Bradsell',
    title: '伦敦现代鸡尾酒教父',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bar: 'Fred\\'s Club / The Player (伦敦)',
    country: '英国',
    bio: '80与90年代以一己之力终结了荧光利口酒混乱时代的伦敦传奇大师。他发明了浓缩咖啡马天尼、黑莓金菲士（Bramble）与俄罗斯金汤力。',
    philosophy: '鸡尾酒应该是直接、过瘾且风味纯正的，而不是华而不实的糖浆杂烩。',
    famousQuote: '一杯优秀的鸡尾酒应当像闪电一样直击灵魂。',
    signatureCocktails: ['Espresso Martini (浓缩咖啡马天尼)', 'Bramble (布兰布尔)']
  },
  {
    id: 'master-gary-regan',
    name: '加里·“盖兹”·里根',
    nameEn: 'Gary "Gaz" Regan',
    title: '正念调酒倡导者 / 鸡尾酒著作宗师',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bar: 'Dead Rabbit (客座) / 国际评审',
    country: '英国 / 美国',
    bio: '著有鸡尾酒圣经《The Joy of Mixology》，以标志性的手指搅拌尼格罗尼（Finger-stirred Negroni）与正念调酒哲学启发了全球数代调酒师。',
    philosophy: '调酒师可以改变世界，正念调酒就是一个很好的开始。每一滴酒液都承载着对品饮者的关照。',
    famousQuote: '不要只关注杯中的液体，要关注那个端起酒杯的人。',
    signatureCocktails: ['Negroni (尼格罗尼)', 'Manhattan (曼哈顿)']
  }
];
`;
fs.writeFileSync(path.join(projectRoot, 'src', 'data', 'masters.ts'), updatedMastersTs, 'utf8');
console.log('Updated src/data/masters.ts');

// 4. Update src/services/mastersService.ts signature drinks
const updatedServiceTs = `import type { Master } from '../types/cocktail';

/**
 * 在线大师扩展数据库 (Online Global Mixology Masters Catalog)
 * 汇集全球殿堂级历史宗师、当代冠军与精调复兴领袖
 */
export const ONLINE_MASTERS_CATALOG: Master[] = [
  {
    id: 'online-shingo-gokan',
    name: '后闲信吾',
    nameEn: 'Shingo Gokan',
    title: 'SG Group 创始人 / 百加得传世全球总冠军',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bar: 'The SG Club (东京) / Speak Low / Sober Company (上海)',
    country: '日本 / 中国',
    bio: '亚洲及全球最具影响力的当代调酒宗师之一。2012年凭借一杯融合雪莉酒与抹茶的「Speak Low」斩获 Bacardi Legacy 全球总冠军。其创办的 SG Group 旗下多家酒吧常年雄踞世界 50 佳酒吧前列。',
    philosophy: '调酒是打破文化边界的艺术。将东方茶道禅意与西方烈酒结构交融，创造出跨越时空的风味记忆。',
    famousQuote: '酒吧里的每一个细节——从冰块温度到背景音乐，都是为了让客人在那一口酒中找到归属感。',
    signatureCocktails: ['Speak Low (低声细语)', 'Japanese Highball (日式高球)'],
    isOnlineSource: true,
    era: 'contemporary'
  },
  {
    id: 'online-jerry-thomas',
    name: '杰里·托马斯',
    nameEn: 'Jerry Thomas ("The Professor")',
    title: '美国现代鸡尾酒之父 / 调酒学开山鼻祖',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/JerryThomas01.jpg',
    bar: 'Occidental Hotel (旧金山) / Metropolitan Hotel (纽约)',
    country: '美国',
    bio: '调酒史上公认的“祖师爷”。1862年出版了人类历史上第一部鸡尾酒著作《How to Mix Drinks: Or, The Bon-Vivant\\'s Companion》，确立了鸡尾酒的分类法与规范配方，开创了表演性调酒的先河。',
    philosophy: '调酒是一门表演艺术，也是一门精准的炼金术。让火焰在空中飞舞，赋予平凡酒液非凡的神性。',
    famousQuote: '一个不懂得如何体面招待客人的调酒师，哪怕调制出再完美的甘露也是徒劳。',
    signatureCocktails: ['Blue Blazer (蓝色火焰)', 'Martinez (马天尼斯)'],
    isOnlineSource: true,
    era: 'golden-age'
  },
  {
    id: 'online-dale-degroff',
    name: '戴尔·戴格罗夫',
    nameEn: 'Dale DeGroff ("King Cocktail")',
    title: '现代精调鸡尾酒复兴教父 / “鸡尾酒之王”',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bar: 'The Rainbow Room at Rockefeller Center (纽约)',
    country: '美国',
    bio: '80年代末在纽约彩虹厅掀起了震撼全球的“鸡尾酒复兴运动”。他彻底摒弃了工业预调酸甜粉与浓缩糖浆，重新引入新鲜现榨果汁、传统手摇技法与经典配方，奠定了21世纪精酿调酒的黄金基石。',
    philosophy: '新鲜是一切灵魂的起点。回归天然纯粹的原料，让每一滴现榨果汁与优质基酒自然共鸣。',
    famousQuote: '只要你坚持使用新鲜压榨的果汁和最纯正的烈酒，时间终会证明经典的伟大。',
    signatureCocktails: ['Cosmopolitan (大都会)', 'Ritz Fizz (丽兹起泡)'],
    isOnlineSource: true,
    era: 'contemporary'
  },
  {
    id: 'online-sasha-petraske',
    name: '萨沙·佩特拉斯克',
    nameEn: 'Sasha Petraske',
    title: '地下酒吧复兴之父 / 现代调酒礼仪缔造者',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    bar: 'Milk & Honey (纽约下东区 / 伦敦)',
    country: '美国',
    bio: '1999年在纽约创立了传奇地下酒吧 Milk & Honey，重新定义了全球鸡尾酒吧的标杆。他苛求手工老冰、精准双头量酒器、严苛的吧台守则，培养了包括 Sam Ross、Michael McIlroy 在内的数位现代巨匠。',
    philosophy: '克制即是崇高。用最严谨的温度、最纯净的冰块与最纯粹的比例，还给客人一段不被打扰的静谧时光。',
    famousQuote: '绅士不喧哗，淑女不买醉。在吧台前，我们唯有对风味与礼节的极致敬畏。',
    signatureCocktails: ['Gordon\\'s Cup (戈登之杯)', 'Penicillin (盘尼西林)'],
    isOnlineSource: true,
    era: 'new-era'
  },
  {
    id: 'online-harry-craddock',
    name: '哈里·克拉多克',
    nameEn: 'Harry Craddock',
    title: '《萨伏伊鸡尾酒书》编撰宗师 / 禁酒令时期的欧洲灯塔',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bar: 'The American Bar at The Savoy Hotel (伦敦)',
    country: '英国 / 美国',
    bio: '因美国禁酒令移居伦敦，于1920年代掌管萨伏伊美洲酒吧。1930年编撰出版了传世巨著《The Savoy Cocktail Book》，记录了750余款经典配方，成为全球调酒师世代相传的红宝书。',
    philosophy: '调酒是抵御时代风暴的最好良药。在动荡的岁月里，为人们端上一杯毫无瑕疵的马天尼。',
    famousQuote: '快速摇荡酒液，直到冰块发出最清脆的撞击声——那是时间在为你鼓掌。',
    signatureCocktails: ['White Lady (白色佳人)', 'Corpse Reviver #2 (除虫剂2号)'],
    isOnlineSource: true,
    era: 'golden-age'
  },
  {
    id: 'online-salvatore-calabrese',
    name: '萨尔瓦托雷·卡拉布雷斯',
    nameEn: 'Salvatore Calabrese ("The Maestro")',
    title: '“名匠 (The Maestro)” / 早餐马天尼与干调马天尼大师',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    bar: 'The Donovan Bar / Salvatore at Playboy Club (伦敦)',
    country: '意大利 / 英国',
    bio: '欧洲调酒界泰斗，被尊称为“调酒界的莫扎特”。他不仅开创了将橙皮果酱融入鸡尾酒的「早餐马天尼（Breakfast Martini）」，还开创了“Direct Martini（零化水冷冻直调法）”。',
    philosophy: '优雅不是刻意为之，而是融入血脉的习惯。用热情感染客人，用无可挑剔的技艺折服时代。',
    famousQuote: '如果你能在清晨吃果酱吐司，那么你在任何时刻都值得拥有一杯早餐马天尼。',
    signatureCocktails: ['Breakfast Martini (早餐马天尼)', 'Dry Martini (干马天尼)'],
    isOnlineSource: true,
    era: 'contemporary'
  },
  {
    id: 'online-audrey-saunders',
    name: '奥黛丽·桑德斯',
    nameEn: 'Audrey Saunders',
    title: 'Pegu Club 创始人 / 现代鸡尾酒教母',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    bar: 'Pegu Club (纽约 SoHo)',
    country: '美国',
    bio: '师从 Dale DeGroff，2005年创立了纽约殿堂级酒吧 Pegu Club。她是当代鸡尾酒复兴中最重要的女性领袖，创制了融合莫吉托与法式75的传世名作「Old Cuban（老古巴人）」。',
    philosophy: '平衡是风味的最高法律。每一克酸、每一滴糖与烈酒的交融，都必须经历上百次毫厘之间的校准。',
    famousQuote: '当你学会了倾听原料的声音，调酒就从一份工作升华为一生的修行。',
    signatureCocktails: ['Old Cuban (老古巴人)', 'Gin-Gin Mule (金酒姜汁骡子)'],
    isOnlineSource: true,
    era: 'new-era'
  },
  {
    id: 'online-agostino-perrone',
    name: '阿戈斯蒂诺·佩罗内',
    nameEn: 'Agostino (Ago) Perrone',
    title: '康诺特酒吧传奇总监 / 世界最佳酒吧五冠王',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bar: 'The Connaught Bar (伦敦梅菲尔)',
    country: '意大利 / 英国',
    bio: '自2008年执掌伦敦康诺特酒吧以来，两度登顶“世界50佳酒吧”全球第一宝座。他设计的定制马天尼推车服务（Martini Trolley Experience）与自制芳香苦精仪式，成为全球奢华酒店酒吧的传世典范。',
    philosophy: '卓越不是一次性的壮举，而是日复一日对微小细节的极致坚守。接待每一位客人，如同接待一生的挚友。',
    famousQuote: 'Straight up with style, and don\\'t forget to make it personal.',
    signatureCocktails: ['Dry Martini (康诺特马天尼)', 'French 75 (法式75)'],
    isOnlineSource: true,
    era: 'new-era'
  },
  {
    id: 'online-jim-meehan',
    name: '吉姆·米汉',
    nameEn: 'Jim Meehan',
    title: 'PDT 联合创始人 / 《PDT调酒手册》作者',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    bar: 'PDT (Please Don\\'t Tell - 纽约 / 香港)',
    country: '美国',
    bio: '在热狗店电话亭后开创了全球最著名的地下酒吧 PDT，著有当代调酒圣经《The PDT Cocktail Book》与《Meehan\\'s Bartender Manual》（詹姆斯·比尔德大奖得主），脂肪浸洗（Fat-washing）技法先锋。',
    philosophy: '调酒师不仅是风味的搬运工，更是社区文化的黏合剂。好酒吧的魅力在于让人卸下防备的魔力。',
    famousQuote: '伟大的鸡尾酒不仅存在于杯中，更存在于调制它的人与品尝它的人之间的默契。',
    signatureCocktails: ['Old Fashioned (老式鸡尾酒)', 'Moscow Mule (莫斯科骡子)'],
    isOnlineSource: true,
    era: 'new-era'
  },
  {
    id: 'online-hidetsugu-ueno',
    name: '上野秀嗣',
    nameEn: 'Hidetsugu Ueno',
    title: 'Bar High Five 主理人 / 冰块钻石雕刻宗师',
    avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
    bar: 'Bar High Five (东京银座)',
    country: '日本',
    bio: '日本银座调酒流派走向世界的关键导师。以徒手凿制宛若真钻的多面菱形冰块（Ice Diamond）震惊世界。他的“无酒单、观人定制”服务哲学深刻影响了全球当代吧台体验。',
    philosophy: '客人走进酒吧时，他的眼神、体温和心境就是最好的酒单。用心感受，然后递给他最治愈的那一杯。',
    famousQuote: '冰块是调酒师的第二基酒。对冰块的敬畏，就是对客人口感的敬畏。',
    signatureCocktails: ['White Lady (白色佳人)', 'Japanese Highball (日式高球)'],
    isOnlineSource: true,
    era: 'contemporary'
  },
  {
    id: 'online-donn-beach',
    name: '唐·埃尔文·比奇',
    nameEn: 'Donn Beach (Ernest Gantt)',
    title: '提基 (Tiki) 文化鼻祖 / 多种朗姆酒复合调配大师',
    avatar: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
    bar: 'Don the Beachcomber (好莱坞·加州)',
    country: '美国',
    bio: '1934年在好莱坞创立 Don the Beachcomber，开创了风靡全球的热带 Tiki 鸡尾酒浪潮。他首创将多种不同产区产地朗姆酒、香料糖浆与新鲜柑橘汁复合调配的“混糖秘方”，发明了传奇名酒「Zombie（僵尸）」。',
    philosophy: '如果世间没有天堂，那就用朗姆酒、肉桂与百香果在吧台上建造一座热带海岛。',
    famousQuote: '一人限量两杯，多饮恐化僵尸——这是对风味烈度最浪漫的警告。',
    signatureCocktails: ['Zombie (僵尸)', 'Mai Tai (迈泰)'],
    isOnlineSource: true,
    era: 'golden-age'
  },
  {
    id: 'online-victor-bergeron',
    name: '维克多·“维克商人”·伯杰龙',
    nameEn: 'Victor "Trader Vic" Bergeron',
    title: 'Trader Vic\\'s 创始人 / 迈泰 (Mai Tai) 缔造者',
    avatar: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=600&q=80',
    bar: 'Trader Vic\\'s (奥克兰 / 旧金山)',
    country: '美国',
    bio: '1944年在奥克兰发明了名震寰宇的「Mai Tai（迈泰）」。当塔希提客人喝下第一口时不禁赞叹“Maita\\'i roa ae!（无比绝妙）”，由此确立了世界热带鸡尾酒的最高图腾。',
    philosophy: '好酒应当带来发自内心的快乐。让人们忘记尘世烦恼，沉浸在异域波利尼西亚的微风之中。',
    famousQuote: '迈泰不是廉价的果汁大杂烩，它是陈年牙买加朗姆酒与法国杏仁糖浆的高雅合奏。',
    signatureCocktails: ['Mai Tai (迈泰)', 'Fog Cutter (除雾者)'],
    isOnlineSource: true,
    era: 'golden-age'
  },
  {
    id: 'online-julie-reiner',
    name: '茱莉·雷纳',
    nameEn: 'Julie Reiner',
    title: 'Clover Club / Leyenda 主理人 / 纽约女性调酒领航者',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bar: 'Clover Club (布鲁克林) / Milady\\'s (纽约)',
    country: '美国',
    bio: '自2003年创立 Flatiron Lounge 以来，20余年间深耕纽约精调界。她将布鲁克林打造为现代鸡尾酒新地标，并在国际大赛与行业教育中培养了无数顶尖女性调酒师。',
    philosophy: '真正的经典能够跨越时光。无论潮流如何更迭，温暖的待客之道与扎实的调酒基本功永远是立足之本。',
    famousQuote: '每一杯酒都是一个关于热情、坚持与风土的故事。',
    signatureCocktails: ['Clover Club (三叶草俱乐部)', 'Daiquiri (经典代基里)'],
    isOnlineSource: true,
    era: 'new-era'
  },
  {
    id: 'online-simone-caporale',
    name: '西蒙·卡波拉莱',
    nameEn: 'Simone Caporale',
    title: 'Sips 主理人 / 全球第一酒吧缔造者 / 解构主义先锋',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bar: 'Sips Drinkery House (巴塞罗那) / 前 Artesian (伦敦)',
    country: '意大利 / 西班牙',
    bio: '与 Alex Kratena 共同带领伦敦朗廷酒店 Artesian 连续四年荣登世界第一酒吧。随后在巴塞罗那创立 Sips，以颠覆性的吧台布局与解构主义现代调酒理念，再次斩获2023年全球最佳酒吧榜首。',
    philosophy: '打破传统吧台的物理阻隔，让调酒师与客人处在同一水平线上，调酒是一场无拘无束的多感官探索。',
    famousQuote: '不要让传统成为你的枷锁，经典应当是通往未知风味领域的跳板。',
    signatureCocktails: ['Blue Lagoon (蓝色珊瑚礁)', 'Negroni (尼格罗尼)'],
    isOnlineSource: true,
    era: 'new-era'
  },
  {
    id: 'online-colin-field',
    name: '科林·彼得·菲尔德',
    nameEn: 'Colin Peter Field',
    title: '巴黎丽兹海明威酒吧传奇馆长 / 法式优雅调酒典范',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bar: 'Bar Hemingway at The Ritz Paris (巴黎)',
    country: '英国 / 法国',
    bio: '掌管巴黎丽兹酒店海明威酒吧近30载，两度被《福布斯》与《GQ》评为“世界最佳调酒师”。他以极具英伦绅士风度与法式优雅的待客哲学，接待过全球无数国家元首、文豪与艺术家。',
    philosophy: '调酒师不仅调制液体，更是在书写记忆。倾听客人的故事，给予他那一刻最需要的温柔与力量。',
    famousQuote: '在海明威酒吧，没有陌生人，只有还未曾相识的知己。',
    signatureCocktails: ['Serendipity (意外惊喜)', 'French 75 (法式75)'],
    isOnlineSource: true,
    era: 'contemporary'
  }
];

/**
 * 实时在线搜索调酒大师 (Real-time Online Search for Mixology Masters)
 * 支持姓名、英文名、酒吧、国籍、调酒哲学与代表作检索
 */
export async function searchOnlineMasters(query: string): Promise<Master[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  // 1. 本地在线大师智库优先检索
  const matchedFromCatalog = ONLINE_MASTERS_CATALOG.filter(m =>
    m.name.toLowerCase().includes(q) ||
    m.nameEn.toLowerCase().includes(q) ||
    m.bar.toLowerCase().includes(q) ||
    m.country.toLowerCase().includes(q) ||
    m.title.toLowerCase().includes(q) ||
    m.bio.toLowerCase().includes(q) ||
    m.philosophy.toLowerCase().includes(q) ||
    m.signatureCocktails.some(c => c.toLowerCase().includes(q))
  );

  // 2. 如果本地智库未完全覆盖或用户希望探索更广泛的维基知识库，发起 Wikipedia 实时检索
  try {
    const wikiUrl = \`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=\${encodeURIComponent(q + ' bartender')}&utf8=&format=json&origin=*\`;
    const res = await fetch(wikiUrl);
    if (res.ok) {
      const data = await res.json();
      if (data.query && data.query.search && data.query.search.length > 0) {
        const topPages = data.query.search.slice(0, 2);
        const titles = topPages.map((p: any) => p.title).join('|');

        const detailUrl = \`https://en.wikipedia.org/w/api.php?action=query&titles=\${encodeURIComponent(titles)}&prop=extracts|pageimages|info&exintro=1&explaintext=1&pithumbsize=600&inprop=url&format=json&origin=*\`;
        const detailRes = await fetch(detailUrl);
        if (detailRes.ok) {
          const detailData = await detailRes.json();
          const pages = Object.values(detailData.query.pages || {}) as any[];

          for (const page of pages) {
            if (page.title && !['Cocktail', 'Bartender', 'List of IBA official cocktails', 'Bar'].includes(page.title)) {
              const alreadyExists = matchedFromCatalog.some(m => m.nameEn.toLowerCase() === page.title.toLowerCase());
              if (!alreadyExists && page.extract) {
                matchedFromCatalog.push({
                  id: \`wiki-\${page.pageid}\`,
                  name: page.title,
                  nameEn: page.title,
                  title: '维基百科实时收录名家 (Live Wiki Entry)',
                  avatar: page.thumbnail ? page.thumbnail.source : 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
                  bar: '全球知名酒吧 / 业界代表',
                  country: '国际名家',
                  bio: page.extract.slice(0, 220) + (page.extract.length > 220 ? '...' : ''),
                  philosophy: '收录自 Wikipedia 国际开放调酒百科档案，承载时代调酒记忆与技法传承。',
                  famousQuote: '追求极致的口感平衡与真诚的待客之道。',
                  signatureCocktails: ['Dry Martini (干马天尼)', 'Old Fashioned (老式鸡尾酒)'],
                  isOnlineSource: true,
                  era: 'contemporary'
                });
              }
            }
          }
        }
      }
    }
  } catch (err) {
    console.warn('Live Wikipedia search fallback skipped:', err);
  }

  return matchedFromCatalog;
}
`;
fs.writeFileSync(path.join(projectRoot, 'src', 'services', 'mastersService.ts'), updatedServiceTs, 'utf8');
console.log('Updated src/services/mastersService.ts');
