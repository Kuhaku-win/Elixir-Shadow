import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

export const fruitJuiceIngredients = [
  {
    id: 'sprite-lemon-soda',
    slug: 'sprite-lemon-soda',
    name: '雪碧 / 柠檬青柠汽水 / 七喜',
    nameEn: 'Sprite / 7-Up / Lemon-Lime Soda',
    category: 'mixer',
    categoryZh: '汽水与辅料',
    abv: 0,
    origin: '美国 / 全球通用',
    flavorDescription: '充满活力的高碳酸清澈汽水，兼具清亮黄柠檬酸爽与青柠精油清香，甜酸平衡，气泡持久，是家庭与酒吧调制果味 Highball、长岛冰茶变体及夏日低度酒的万能伴侣。',
    commonUsage: ['蓝色泄湖 (Blue Lagoon)', '夏日红酒汽水 (Tinto de Verano)', '带电长岛冰茶 (Electric Iced Tea)', '蜜多丽雪碧 (Midori Sprite)', '金雪碧 (Gin & Sprite)'],
    buyingGuide: '选用冰镇经典原味雪碧（罐装或玻璃瓶装最佳），亦可选用七喜（7-Up）或怡泉柠檬味苏打水。',
    storageMethod: '常温避光保存，使用前必须充分冷藏冰镇以保气泡充足。',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    colorBadge: 'border-emerald-400/40 text-emerald-300'
  },
  {
    id: 'apple-juice',
    slug: 'apple-juice',
    name: '纯苹果汁 / 苹果西打',
    nameEn: '100% Pure Apple Juice / Fresh Apple Cider',
    category: 'juice',
    categoryZh: '果汁与酸味剂',
    abv: 0,
    origin: '欧洲 / 中国 / 全球通用',
    flavorDescription: '压榨苹果纯果汁，兼具清脆果酸与天然果糖甜香，冷饮清甜解腻，与波本威士忌、白兰地、朗姆酒的焦糖橡木桶香气有着天然绝配的共鸣。',
    commonUsage: ['经典苹果马天尼 (Appletini)', '威士忌苹果高球 (Whiskey Apple)', '苹果西打骡子 (Apple Cider Mule)', '秋季苹果杰克 (Autumn Apple Jack)'],
    buyingGuide: '调酒首选 100% NFC 非浓缩还原纯苹果汁（如树顶 Tree Top、大湖），制作秋季热特调可选用未过滤混浊苹果西打汁 (Apple Cider)。',
    storageMethod: '开封后必须 4°C 冷藏，并在 3-5 天内饮用完毕。',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=600&q=80',
    colorBadge: 'border-amber-400/40 text-amber-300'
  },
  {
    id: 'grape-juice-white',
    slug: 'grape-juice-white',
    name: '白葡萄汁 / 白提子汁',
    nameEn: '100% Pure White Grape Juice',
    category: 'juice',
    categoryZh: '果汁与酸味剂',
    abv: 0,
    origin: '地中海 / 欧洲 / 美国',
    flavorDescription: '金黄澄澈的白葡萄压榨汁，散发优雅的麝香葡萄花香、白桃与青苹果香气，酸度柔和清脆，能为金酒、伏特加及白桑格利亚带来高贵清新的花果底色。',
    commonUsage: ['地中海白桑格利亚 (White Sangria)', '金酒白葡萄晨光 (Gin White Grape Spritzer)', '白葡萄莫吉托', '无酒精香槟特调'],
    buyingGuide: '选用 100% 纯白葡萄原汁（如 Welch\'s 纯白葡萄汁），避免选用含香精防腐剂勾兑果汁饮料。',
    storageMethod: '常温避光，开封后冷藏。',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
    colorBadge: 'border-lime-400/40 text-lime-300'
  },
  {
    id: 'grape-juice-red',
    slug: 'grape-juice-red',
    name: '红葡萄汁 / 康科德紫葡萄汁',
    nameEn: '100% Red / Concord Grape Juice',
    category: 'juice',
    categoryZh: '果汁与酸味剂',
    abv: 0,
    origin: '美国东北部 / 欧洲',
    flavorDescription: '选用深紫色康科德葡萄压榨，色泽深邃如红宝石，饱含浓郁的深色浆果香、天然多酚单宁感与平衡酸甜，是调配输血高球（Transfusion）及经典桑格利亚的灵魂。',
    commonUsage: ['输血高球 (The Transfusion)', '西班牙经典桑格利亚 (Red Sangria)', '紫提莫吉托', '红葡萄金汤力'],
    buyingGuide: '推荐美国原产 Welch\'s 100% Concord Grape Juice 纯紫葡萄汁。',
    storageMethod: '开瓶后冷藏密封保存。',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
    colorBadge: 'border-purple-800/40 text-purple-400'
  },
  {
    id: 'peach-juice',
    slug: 'peach-juice',
    name: '水蜜桃纯果汁 / 桃肉浓浆',
    nameEn: '100% White & Yellow Peach Juice / Puree',
    category: 'juice',
    categoryZh: '果汁与酸味剂',
    abv: 0,
    origin: '中国 / 意大利 / 日本',
    flavorDescription: '以成熟多汁的水蜜桃果肉打浆制成，散发极富亲和力的高雅蜜桃甜香与微酸，口感稠滑温润，能与起泡酒、红茶、波本威士忌及伏特加完美交织出春夏季节感。',
    commonUsage: ['贝利尼 (Bellini)', '波本蜜桃冰茶 (Bourbon Peach Tea)', '模糊的肚脐 (Fuzzy Navel)', '水蜜桃伏特加酸 (Peach Sour)'],
    buyingGuide: '调酒推荐法国宝茸 (Boiron) 冷冻白桃果泥，日常可用 100% 水蜜桃 NFC 原果汁或日本三得利桃汁。',
    storageMethod: '果泥冷冻，解冻后 4°C 冷藏并在 3 天内用完。',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    colorBadge: 'border-pink-400/40 text-pink-300'
  },
  {
    id: 'mango-juice',
    slug: 'mango-juice',
    name: '芒果汁 / 芒果纯果泥',
    nameEn: 'Mango Juice / Mango Puree',
    category: 'juice',
    categoryZh: '果汁与酸味剂',
    abv: 0,
    origin: '印度 / 东南亚 / 墨西哥',
    flavorDescription: '浓稠金黄的热带芒果泥，带有无可比拟的热烈阳光气息与浓郁熟果香甜，是热带 Tiki 鸡尾酒与冰沙特调的无敌基底。',
    commonUsage: ['芒果朗姆潘趣 (Mango Rum Punch)', '冰冻芒果玛格丽特 (Frozen Mango Margarita)', '热带芒果代基里'],
    buyingGuide: '首选印度阿方索芒果泥 (Alphonso Mango Puree) 或法国 Boiron 纯芒果果泥。',
    storageMethod: '冷藏冷冻保存。',
    image: 'https://images.unsplash.com/photo-1534856966150-c832f7b7a005?auto=format&fit=crop&w=600&q=80',
    colorBadge: 'border-amber-500/40 text-amber-400'
  },
  {
    id: 'guava-juice',
    slug: 'guava-juice',
    name: '芭乐汁 / 红心番石榴汁',
    nameEn: 'Pink Guava Juice / Nectar',
    category: 'juice',
    categoryZh: '果汁与酸味剂',
    abv: 0,
    origin: '台湾 / 东南亚 / 墨西哥',
    flavorDescription: '粉红色的热带奇迹！散发着野性而优雅的麝香、草莓、百香果与青草复合芬芳，微涩回甘，赋予酒体梦幻的珊瑚粉色与夏日海风气息。',
    commonUsage: ['芭乐金酒冷饮 (Guava Gin Cooler)', '粉红番石榴莫吉托', '夏威夷芭乐玛格丽特'],
    buyingGuide: '选用红心芭乐（Pink Guava）NFC 纯果汁或冷冻果泥。',
    storageMethod: '冷藏保存。',
    image: 'https://images.unsplash.com/photo-1534856966150-c832f7b7a005?auto=format&fit=crop&w=600&q=80',
    colorBadge: 'border-rose-400/40 text-rose-300'
  },
  {
    id: 'fresh-grapes',
    slug: 'fresh-grapes',
    name: '新鲜无籽青提 / 红提',
    nameEn: 'Fresh Seedless Green & Red Grapes',
    category: 'garnish',
    categoryZh: '装饰与香草',
    abv: 0,
    origin: '全球通用',
    flavorDescription: '爽脆爆汁的新鲜无籽葡萄，经捣棒轻轻压榨可释放纯净单宁果酸与鲜活果汁，在杯中既作为风味来源也是绝佳的高雅装饰。',
    commonUsage: ['恩佐尼 (Enzoni)', '青提金汤力', '水果桑格利亚'],
    buyingGuide: '选用颗粒饱满硬挺的晴王无籽青提或阳光玫瑰青提。',
    storageMethod: '保鲜袋冷藏。',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
    colorBadge: 'border-lime-500/40 text-lime-400'
  },
  {
    id: 'coconut-water',
    slug: 'coconut-water',
    name: '天然椰子水',
    nameEn: '100% Pure Natural Coconut Water',
    category: 'mixer',
    categoryZh: '汽水与辅料',
    abv: 0,
    origin: '泰国 / 海南 / 东南亚',
    flavorDescription: '新鲜青椰抽取的天然清澈电解质椰水，带有淡淡的清甜与海风矿物质微咸，轻盈无负担，能完美提升朗姆酒与龙舌兰的清爽感。',
    commonUsage: ['椰水朗姆高球 (Coconut Rum Highball)', '热带椰水金雷特', '运动后电解质特调'],
    buyingGuide: '选用 100% 纯椰子水（如 Vita Coco、IF 椰子水、佳果源）。',
    storageMethod: '常温避光，开封后冷藏并在24小时内饮用。',
    image: 'https://images.unsplash.com/photo-1534856966150-c832f7b7a005?auto=format&fit=crop&w=600&q=80',
    colorBadge: 'border-teal-400/40 text-teal-300'
  },
  {
    id: 'iced-black-tea',
    slug: 'iced-black-tea',
    name: '冷萃红茶 / 经典红茶液',
    nameEn: 'Fresh Brewed Iced Black Tea',
    category: 'mixer',
    categoryZh: '咖啡与汽水辅料',
    abv: 0,
    origin: '斯里兰卡 / 中国 / 英国',
    flavorDescription: '优质大吉岭或锡兰红茶冷萃而成，汤色红艳明亮，具有优雅的麦芽香、佛手柑果香与轻柔茶单宁，是调和威士忌、桃汁与柠檬的绝妙桥梁。',
    commonUsage: ['波本蜜桃冰茶 (Bourbon Peach Tea)', '红茶金汤力', '无酒精蜜桃冰茶'],
    buyingGuide: '使用优质锡兰红茶或伯爵红茶原叶自制冷萃（常温水浸泡冷藏8小时过滤）。',
    storageMethod: '密封冷藏，建议在 2 天内用完以保持茶香清澈。',
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=600&q=80',
    colorBadge: 'border-amber-800/40 text-amber-500'
  }
];

export const fruitJuiceRecipes = [
  // ---------------- 雪碧 / 柠檬汽水 系列 ----------------
  {
    id: 'blue-lagoon',
    slug: 'blue-lagoon',
    name: '蓝色泄湖',
    nameEn: 'Blue Lagoon',
    category: 'contemporary',
    categoryZh: '当代流行经典',
    baseSpirit: 'Vodka',
    baseSpiritZh: '伏特加',
    flavorProfiles: ['柑橘系', '清爽系', '果香系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 2, fruity: 4, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '飓风杯 / Hurricane Glass',
    garnish: '新鲜柠檬轮片与鸡尾酒红樱桃',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '摇荡与雪碧注顶 (Shake & Top)',
    abv: 14,
    description: '梦幻透亮的加勒比湛蓝海洋！伏特加与蓝柑桂酒的柑橘橙香在新鲜柠檬汁激发下，注入滋滋作响的冰镇雪碧，气泡清脆，酸甜冰爽，夏日派对绝对焦点。',
    story: '1960年代由巴黎 Harry\'s New York Bar 创始人 Harry MacElhone 之子 Andy MacElhone 创作，以其耀眼的蔚蓝色泽风靡全球海岸酒吧。',
    proTips: ['雪碧一定要最后贴着杯壁缓缓倒入，避免剧烈冲刷导致气泡散逸，保留最强劲的碳酸跳跃感。'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '纯净伏特加', nameEn: 'Vodka', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'vodka' },
      { name: '蓝柑桂酒 (Blue Curaçao)', nameEn: 'Blue Curaçao', amountMl: 25, amountOz: '3/4 oz', rawId: 'blue-curacao' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'fresh-lemon-juice' },
      { name: '冰镇雪碧 / 柠檬汽水 (注顶)', nameEn: 'Chilled Sprite / Lemon-Lime Soda', amountMl: 100, amountOz: '3 1/3 oz', rawId: 'sprite-lemon-soda' }
    ],
    steps: [
      '在摇酒壶中倒入伏特加、蓝柑桂酒与新鲜柠檬汁。',
      '加冰摇荡 10 秒。',
      '在飓风杯或高球杯中加满方冰，将酒液过滤倒入杯中。',
      '注入冰镇雪碧至满杯，用吧勺轻柔提拉一次。',
      '插上柠檬轮片与红樱桃装饰。'
    ],
    isIbaCertified: false
  },
  {
    id: 'tinto-de-verano',
    slug: 'tinto-de-verano',
    name: '夏日红酒汽水',
    nameEn: 'Tinto de Verano',
    category: 'contemporary',
    categoryZh: '西班牙国民夏日酒',
    baseSpirit: 'Liqueur',
    baseSpiritZh: '红葡萄酒/汽水',
    flavorProfiles: ['果香系', '柑橘系', '清爽系', '甜系'],
    flavorRadar: { sour: 2, sweet: 3, bitter: 1, strong: 1, fruity: 4, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜柠檬片与橙片',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '直调法 (1:1 黄金比例)',
    abv: 6,
    description: '西班牙人在炎炎夏日最爱的国民解暑神器！果香浓郁的干红葡萄酒与冰镇雪碧按 1:1 比例对调，红宝石般的酒液中气泡升腾，清爽怡人，低酒精无负担。',
    story: '20世纪初发源于西班牙科尔多瓦（Córdoba）的 Venta de Vargas 斗牛士酒馆，如今是整个伊比利亚半岛沙滩与餐吧的夏日代名词。',
    proTips: ['选用果香奔放、单宁适中的西班牙年轻干红（如丹魄 Tempranillo 或歌海娜 Garnacha），搭配冰镇雪碧口感绝佳。'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '西班牙干红葡萄酒 (Tempranillo / Garnacha)', nameEn: 'Spanish Red Wine', amountMl: 90, amountOz: '3 oz', rawId: 'port-wine' },
      { name: '冰镇雪碧 / 柠檬汽水 (1:1)', nameEn: 'Chilled Sprite / Lemon-Lime Soda', amountMl: 90, amountOz: '3 oz', rawId: 'sprite-lemon-soda' },
      { name: '新鲜柠檬汁 (可选提鲜)', nameEn: 'Fresh Lemon Juice', amountMl: 10, amountOz: '1/3 oz', rawId: 'fresh-lemon-juice' }
    ],
    steps: [
      '在高球杯或大型大肚红酒杯中加满方冰。',
      '先倒入 90ml 干红葡萄酒。',
      '注入 90ml 冰镇雪碧与少许柠檬汁。',
      '用吧勺轻柔搅拌一次，放入新鲜柠檬轮片。'
    ],
    isIbaCertified: false
  },
  {
    id: 'electric-iced-tea',
    slug: 'electric-iced-tea',
    name: '带电长岛冰茶 / 蓝色长岛',
    nameEn: 'Electric Iced Tea / Blue Long Island',
    category: 'contemporary',
    categoryZh: '派对狂欢特调',
    baseSpirit: 'Vodka',
    baseSpiritZh: '五重烈酒基底',
    flavorProfiles: ['柑橘系', '烈酒感', '清爽系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 5, fruity: 3, herbal: 2 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '柯林杯 / Collins Glass',
    garnish: '新鲜柠檬角与薄荷嫩芽',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '摇荡与雪碧注顶',
    abv: 22,
    description: '长岛冰茶的霓虹电光升级版！以蓝柑桂酒替代君度橙酒，以冰镇雪碧替代可乐注顶，呈现出摄人心魄的通透荧光海蓝色，口感酸甜清冽，酒力深藏不露。',
    story: '1980年代美国西海岸俱乐部为了打造视觉与口感双重冲击的派对终极短饮而风靡一时。',
    proTips: ['五大基酒各取 15ml 保持等比，充分摇荡后再倒入杯中加雪碧注顶，保持清透蓝宝石色泽。'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '伏特加', nameEn: 'Vodka', amountMl: 15, amountOz: '1/2 oz', rawId: 'vodka' },
      { name: '白朗姆酒', nameEn: 'White Rum', amountMl: 15, amountOz: '1/2 oz', rawId: 'rum-white' },
      { name: '银龙舌兰酒', nameEn: 'Tequila Blanco', amountMl: 15, amountOz: '1/2 oz', rawId: 'tequila' },
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 15, amountOz: '1/2 oz', rawId: 'gin' },
      { name: '蓝柑桂酒 (Blue Curaçao)', nameEn: 'Blue Curaçao', amountMl: 15, amountOz: '1/2 oz', rawId: 'blue-curacao' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 25, amountOz: '3/4 oz', rawId: 'fresh-lemon-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'simple-syrup' },
      { name: '冰镇雪碧 (注顶调色)', nameEn: 'Chilled Sprite', amountMl: 60, amountOz: '2 oz', rawId: 'sprite-lemon-soda' }
    ],
    steps: [
      '在摇酒壶中加入除雪碧外的所有五大烈酒、蓝柑酒、柠檬汁与糖浆。',
      '加冰剧烈摇荡 10 秒。',
      '在柯林杯中装满方冰，过滤倒入酒液。',
      '用冰镇雪碧注顶至杯口，用吧勺轻提一次。',
      '在杯缘夹入新鲜柠檬角。'
    ],
    isIbaCertified: false
  },

  // ---------------- 苹果汁 / 苹果西打 系列 ----------------
  {
    id: 'appletini-classic',
    slug: 'appletini-classic',
    name: '经典苹果马天尼',
    nameEn: 'Classic Apple Martini (Appletini)',
    category: 'contemporary',
    categoryZh: '当代流行经典',
    baseSpirit: 'Vodka',
    baseSpiritZh: '伏特加/苹果白兰地',
    flavorProfiles: ['果香系', '酸甜系', '清爽系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 3, fruity: 5, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '马天尼杯 / Martini Glass',
    garnish: '新鲜青苹果扇形薄片三片 (Apple Fan)',
    ice: '摇荡滤冰 (Up)',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 20,
    description: '好莱坞千禧年代最受追捧的果香马天尼！纯净伏特加与纯苹果汁、卡尔瓦多斯苹果白兰地摇出青翠芬芳，口感如咬下一口刚摘下的多汁清脆绿苹果。',
    story: '1996年诞生于西好莱坞著名的 Lola\'s 酒吧，后因在《社交网络》、《实习医生风云》等影视作品中频繁出镜而红遍全球。',
    proTips: ['使用 100% 纯苹果汁搭配少许法国卡尔瓦多斯苹果白兰地（Calvados），比廉价人工青苹果香精糖浆风味层次高级百倍。'],
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '纯净伏特加', nameEn: 'Vodka', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'vodka' },
      { name: '100% 纯苹果汁 (NFC)', nameEn: '100% Pure Apple Juice', amountMl: 40, amountOz: '1 1/3 oz', rawId: 'apple-juice' },
      { name: '卡尔瓦多斯苹果白兰地', nameEn: 'Calvados / Apple Brandy', amountMl: 15, amountOz: '1/2 oz', rawId: 'calvados' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lemon-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 10, amountOz: '1/3 oz', rawId: 'simple-syrup' }
    ],
    steps: [
      '在摇酒壶中倒入伏特加、纯苹果汁、苹果白兰地、柠檬汁与单糖浆。',
      '加满方冰，剧烈摇荡 12-15 秒至极冷。',
      '双重过滤倒入冷冻马天尼杯中。',
      '将三片薄切青苹果片串成扇形插在杯边装饰。'
    ],
    isIbaCertified: false
  },
  {
    id: 'whiskey-apple-highball',
    slug: 'whiskey-apple-highball',
    name: '威士忌苹果高球',
    nameEn: 'Whiskey Apple Highball (Big Apple)',
    category: 'contemporary',
    categoryZh: '轻松高球特调',
    baseSpirit: 'Whiskey',
    baseSpiritZh: '波本威士忌',
    flavorProfiles: ['果香系', '甜系', '烈酒感', '清爽系'],
    flavorRadar: { sour: 2, sweet: 3, bitter: 0, strong: 3, fruity: 4, herbal: 2 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜红苹果切片与肉桂棒',
    ice: '满杯老冰块',
    technique: 'Build',
    techniqueZh: '直调法 (Build)',
    abv: 12,
    description: '波本威士忌与苹果汁的天作之合！肯塔基波本的香草、焦糖与橡木桶气息，被纯苹果汁的甜美果酸彻底激发，伴随苏打水气泡，清甜易饮，秋意盎然。',
    story: '纽约调酒师为致敬“大苹果（The Big Apple）”纽约市创作的常青树高球配方，如今是全球美式酒吧最受欢迎的威士忌日常特调之一。',
    proTips: ['加几滴鲜柠檬汁能完美平衡苹果汁的甜度，最后插上一根肉桂棒搅拌，会随着时间释放温暖香料气息。'],
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '肯塔基波本威士忌', nameEn: 'Bourbon Whiskey', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'whiskey-bourbon' },
      { name: '100% 纯苹果汁', nameEn: '100% Pure Apple Juice', amountMl: 80, amountOz: '2 2/3 oz', rawId: 'apple-juice' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 10, amountOz: '1/3 oz', rawId: 'fresh-lemon-juice' },
      { name: '强气泡苏打水 (注顶)', nameEn: 'Club Soda', amountMl: 40, amountOz: '1 1/3 oz', rawId: 'club-soda' }
    ],
    steps: [
      '在高球杯中放入整条老冰柱或满杯方冰。',
      '注入波本威士忌、纯苹果汁与柠檬汁。',
      '轻轻搅拌 10 秒使其混合冰镇。',
      '注入少量苏打水增添清脆气泡感。',
      '放入两片红苹果切片与一根肉桂棒装饰。'
    ],
    isIbaCertified: false
  },
  {
    id: 'apple-cider-mule',
    slug: 'apple-cider-mule',
    name: '苹果西打骡子',
    nameEn: 'Apple Cider Mule',
    category: 'contemporary',
    categoryZh: '秋季限定特调',
    baseSpirit: 'Vodka',
    baseSpiritZh: '伏特加',
    flavorProfiles: ['辛辣系', '果香系', '柑橘系', '清爽系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 2, fruity: 4, herbal: 2 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '铜制马克杯 / Copper Mule Mug',
    garnish: '苹果扇片、肉桂棒与八角茴香',
    ice: '满杯碎冰 (Crushed Ice)',
    technique: 'Build',
    techniqueZh: '直调法 (Build in Copper Mug)',
    abv: 11,
    description: '莫斯科骡子在秋收季节的华丽蜕变！伏特加与纯苹果汁的清甜遇上发酵姜啤的辛辣与青柠的酸爽，在冰霜铜杯中激发出多层次的热烈滋味。',
    story: '起源于美国新英格兰地区的苹果采摘季，迅速成为全球各大鸡尾酒吧秋冬季节酒单上的销量王。',
    proTips: ['选用带有浑浊果肉的鲜榨苹果西打原汁（Apple Cider），搭配辛辣感强的姜汁啤酒（Ginger Beer），风味最地道。'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '纯净伏特加', nameEn: 'Vodka', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'vodka' },
      { name: '纯苹果汁 / 苹果西打', nameEn: 'Apple Juice / Fresh Cider', amountMl: 60, amountOz: '2 oz', rawId: 'apple-juice' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' },
      { name: '辛辣发酵姜汁啤酒 (注顶)', nameEn: 'Spicy Ginger Beer', amountMl: 80, amountOz: '2 2/3 oz', rawId: 'ginger-beer' }
    ],
    steps: [
      '在经典铜制马克杯中装满碎冰。',
      '注入伏特加、苹果汁与新鲜青柠汁。',
      '用吧勺快速搅拌均匀。',
      '注入冰镇辛辣姜汁啤酒注顶。',
      '插入苹果薄片、一根肉桂棒与一颗八角装饰。'
    ],
    isIbaCertified: false
  },

  // ---------------- 橙汁系列强化 ----------------
  {
    id: 'harvey-wallbanger',
    slug: 'harvey-wallbanger',
    name: '哈维撞墙',
    nameEn: 'Harvey Wallbanger',
    category: 'contemporary',
    categoryZh: 'IBA 当代经典',
    baseSpirit: 'Vodka',
    baseSpiritZh: '伏特加/加利安诺',
    flavorProfiles: ['柑橘系', '草本系', '甜系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 1, strong: 3, fruity: 4, herbal: 3 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜橙轮片与马拉斯奇诺黑樱桃',
    ice: '满杯方冰',
    technique: 'Float',
    techniqueZh: '直调与加利安诺草本酒漂浮 (Build & Float)',
    abv: 16,
    description: '螺丝起子（Screwdriver）的黄金升级版！伏特加与鲜甜橙汁的经典组合上，缓缓漂浮一层金黄色加利安诺利口酒，茴芹、香草与橙香在唇齿间层层绽放。',
    story: '1950年代诞生于加州日落大道酒吧，相传一位名叫 Harvey 的冲浪冠军在喝下多杯这款特调后在酒馆里晕头转向“撞墙而出”，因而得名。',
    proTips: ['加利安诺（Galliano L\'Autentico）务必最后顺着吧勺背面淋在橙汁顶层，形成金黄光环般的视觉漂浮层。'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '纯净伏特加', nameEn: 'Vodka', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'vodka' },
      { name: '新鲜现榨甜橙汁', nameEn: 'Fresh Squeezed Orange Juice', amountMl: 100, amountOz: '3 1/3 oz', rawId: 'fresh-orange-juice' },
      { name: '加利安诺香草草本利口酒 (漂浮)', nameEn: 'Galliano L\'Autentico', amountMl: 15, amountOz: '1/2 oz', rawId: 'galliano' }
    ],
    steps: [
      '在高球杯中加满冰块。',
      '倒入伏特加与新鲜橙汁，用吧勺搅拌均匀。',
      '反转吧勺贴近酒面，缓缓将 15ml 加利安诺利口酒淋在勺背上形成顶部金黄漂浮层。',
      '用鸡尾酒竹签串上橙片与红樱桃插在杯顶。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'fuzzy-navel',
    slug: 'fuzzy-navel',
    name: '模糊的肚脐',
    nameEn: 'Fuzzy Navel',
    category: 'contemporary',
    categoryZh: '80年代经典果香',
    baseSpirit: 'Liqueur',
    baseSpiritZh: '桃味利口酒/橙汁',
    flavorProfiles: ['果香系', '甜系', '柑橘系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 0, strong: 1, fruity: 5, herbal: 0 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜橙片与水蜜桃切片',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '直调法 (1:1 调配)',
    abv: 10,
    description: '80年代果香调酒时代的标志性代表！多汁多甜的桃子利口酒（Fuzzy）与新鲜现榨甜橙汁（Navel Orange）按 1:1 完美交融，入口犹如刚咬下一颗爆汁甜桃与脐橙。',
    story: '1980年代由 DeKuyper 桃味甜酒推出时由美国调酒师 Ray Foley 命名推广，因“Fuzzy（桃毛）”与“Navel（脐橙）”双关语幽默而迅速风靡全美。',
    proTips: ['追求更高烈度的聚会喝法可额外加入 30ml 纯伏特加（此变体被称为“毛茸茸的肚脐穿孔 Hairy Navel”）。'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '蜜桃利口酒 (Peach Schnapps)', nameEn: 'Peach Schnapps', amountMl: 60, amountOz: '2 oz', rawId: 'peach-schnapps' },
      { name: '新鲜现榨甜橙汁', nameEn: 'Fresh Squeezed Orange Juice', amountMl: 90, amountOz: '3 oz', rawId: 'fresh-orange-juice' },
      { name: '新鲜水蜜桃汁 (可选提稠)', nameEn: 'Fresh Peach Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'peach-juice' }
    ],
    steps: [
      '在高球杯中装满方冰。',
      '倒入蜜桃利口酒、水蜜桃汁与新鲜橙汁。',
      '用吧勺充分搅拌 15 秒至酒液冰透融合。',
      '饰以新鲜橙片。'
    ],
    isIbaCertified: false
  },
  {
    id: 'golden-dream',
    slug: 'golden-dream',
    name: '金色梦乡',
    nameEn: 'Golden Dream',
    category: 'contemporary',
    categoryZh: 'IBA 当代经典',
    baseSpirit: 'Liqueur',
    baseSpiritZh: '加利安诺/君度',
    flavorProfiles: ['奶香系', '柑橘系', '草本系', '甜系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 0, strong: 2, fruity: 3, herbal: 3 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '碟形香槟杯 / Coupe Glass',
    garnish: '现磨肉豆蔻碎或橙皮丝',
    ice: '摇荡滤冰 (Up)',
    technique: 'Shake',
    techniqueZh: '剧烈乳化摇荡法',
    abv: 18,
    description: '柔美华贵的丝滑乳化梦境！加利安诺的草本香草与君度的橙皮精油，在鲜橙汁与新鲜淡奶油的高速剧烈摇荡下形成如融化香草香橙冰淇淋般的醇美天鹅绒质感。',
    story: '1960年代由迈阿密调酒师 Raimundo Alvarez 为向好莱坞著名女星琼·克劳馥致敬而创，后在全美鸡尾酒锦标赛中夺冠并列入 IBA 官方名录。',
    proTips: ['橙汁与淡奶油的比例一定要精准，加冰剧烈摇荡至少 15 秒使动物乳脂与果酸彻底乳化成绵密泡状。'],
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '加利安诺草本香草利口酒', nameEn: 'Galliano L\'Autentico', amountMl: 20, amountOz: '2/3 oz', rawId: 'galliano' },
      { name: '君度橙酒 (Cointreau)', nameEn: 'Cointreau', amountMl: 20, amountOz: '2/3 oz', rawId: 'cointreau' },
      { name: '新鲜现榨甜橙汁', nameEn: 'Fresh Orange Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'fresh-orange-juice' },
      { name: '新鲜淡奶油', nameEn: 'Fresh Heavy Cream', amountMl: 10, amountOz: '1/3 oz', rawId: 'heavy-cream' }
    ],
    steps: [
      '在摇酒壶中倒入加利安诺、君度、鲜橙汁与淡奶油。',
      '加满冰块，高强度剧烈摇荡 15 秒直至充分乳化起泡。',
      '双重过滤倒入预冷碟形香槟杯中。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },

  // ---------------- 葡萄汁 & 提子 系列 ----------------
  {
    id: 'enzoni',
    slug: 'enzoni',
    name: '恩佐尼',
    nameEn: 'Enzoni',
    category: 'new-era',
    categoryZh: '现代新经典',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒/金巴利',
    flavorProfiles: ['果香系', '苦系', '柑橘系', '草本系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 3, strong: 3, fruity: 4, herbal: 3 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '古典杯 / Rocks Glass',
    garnish: '鸡尾酒竹签串入 3 颗新鲜绿提子',
    ice: '大块老冰',
    technique: 'Muddle',
    techniqueZh: '捣果摇荡法 (Muddle & Shake)',
    abv: 22,
    description: '现代调酒史上最惊艳的提子杰作！整颗新鲜无籽绿提在壶底捣碎，青提的鲜甜多汁与柔和单宁，不可思议地化解了金巴利的强烈苦涩，碰撞出令人上瘾的清脆果香。',
    story: '2000年代由纽约传奇酒吧 Milk & Honey 著名调酒师 Vincenzo Errico 创作，被视为金酸酒（Gin Sour）与尼格罗尼（Negroni）在现代的最美结合。',
    proTips: ['选用脆甜多汁的无籽青提（如阳光玫瑰或晴王），先与糖浆柠檬汁用力捣烂出汁，再双重过滤保留清澈酒体。'],
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 30, amountOz: '1 oz', rawId: 'gin' },
      { name: '金巴利苦酒 (Campari)', nameEn: 'Campari', amountMl: 30, amountOz: '1 oz', rawId: 'campari' },
      { name: '新鲜无籽青提子', nameEn: 'Fresh Seedless Green Grapes', amountMl: 5, amountOz: '5 whole grapes', unit: '颗', rawId: 'fresh-grapes' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'fresh-lemon-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'simple-syrup' }
    ],
    steps: [
      '在摇酒壶底放入 5 颗新鲜青提与单糖浆。',
      '用捣棒（Muddler）用力捣烂，挤出所有葡萄果肉与汁液。',
      '注入金酒、金巴利与新鲜柠檬汁。',
      '加满冰块强力摇荡 12 秒。',
      '使用细滤网双重过滤倒入装有老冰的古典杯中。',
      '串上 3 颗青提子横跨杯口装饰。'
    ],
    isIbaCertified: false
  },
  {
    id: 'classic-sangria',
    slug: 'classic-sangria',
    name: '西班牙传统桑格利亚',
    nameEn: 'Classic Spanish Red Sangria',
    category: 'contemporary',
    categoryZh: '西班牙派对国宝潘趣',
    baseSpirit: 'Liqueur',
    baseSpiritZh: '红葡萄酒/白兰地',
    flavorProfiles: ['果香系', '柑橘系', '甜系', '清爽系'],
    flavorRadar: { sour: 3, sweet: 4, bitter: 1, strong: 2, fruity: 5, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '浸泡浸润的苹果丁、橙片与肉桂棒',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '水果浸渍与直调潘趣 (Macerate & Pour)',
    abv: 12,
    description: '西班牙风情聚会第一名酒！干红葡萄酒、纯红葡萄汁、白兰地与君度橙酒，在新鲜切片苹果、甜橙与柠檬中浸渍出深邃果香，倒入杯中加雪碧或苏打水注顶，欢畅无匹。',
    story: '起源于古罗马时期伊比利亚半岛的水果葡萄酒潘趣（Ponche），1964年纽约世界博览会西班牙展馆将其引介给全球后成为国际派对图腾。',
    proTips: ['水果切丁后与白兰地、橙酒、糖浆先冷藏浸渍 2 小时以上（Maceration），让水果充分吸收烈酒并释放浓郁果汁。'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '西班牙干红葡萄酒', nameEn: 'Spanish Red Wine', amountMl: 90, amountOz: '3 oz', rawId: 'port-wine' },
      { name: '纯红葡萄汁 (Concord Grape Juice)', nameEn: '100% Red Grape Juice', amountMl: 30, amountOz: '1 oz', rawId: 'grape-juice-red' },
      { name: '干邑白兰地 (Brandy)', nameEn: 'Brandy / Cognac', amountMl: 20, amountOz: '2/3 oz', rawId: 'brandy-cognac' },
      { name: '君度橙酒 (Cointreau)', nameEn: 'Cointreau / Triple Sec', amountMl: 15, amountOz: '1/2 oz', rawId: 'cointreau' },
      { name: '新鲜甜橙汁', nameEn: 'Fresh Orange Juice', amountMl: 30, amountOz: '1 oz', rawId: 'fresh-orange-juice' },
      { name: '新鲜苹果丁、橙片与柠檬片', nameEn: 'Diced Apples, Oranges & Lemons', amountMl: 30, amountOz: 'Mixed Fruits', unit: '适量', rawId: 'apple-juice' },
      { name: '冰镇雪碧或苏打水 (注顶)', nameEn: 'Sprite or Club Soda', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'sprite-lemon-soda' }
    ],
    steps: [
      '在公杯或大水罐中加入切碎的苹果丁、橙片，倒入白兰地、橙酒与葡萄汁轻轻压出香味。',
      '注入干红葡萄酒与橙汁搅拌均匀。',
      '在装满冰块的玻璃杯中倒入浸渍好的水果与红酒潘趣液。',
      '最后注入少许冰雪碧或苏打水激发出丰盈果味气泡。'
    ],
    isIbaCertified: false
  },
  {
    id: 'transfusion',
    slug: 'transfusion',
    name: '输血高球',
    nameEn: 'The Transfusion',
    category: 'contemporary',
    categoryZh: '全美俱乐部传奇高球',
    baseSpirit: 'Vodka',
    baseSpiritZh: '伏特加/紫葡萄汁',
    flavorProfiles: ['果香系', '辛辣系', '清爽系'],
    flavorRadar: { sour: 2, sweet: 3, bitter: 0, strong: 2, fruity: 5, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜紫葡萄串与青柠角',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '直调法 (Build)',
    abv: 12,
    description: '美国高尔夫俱乐部无可替代的“19号洞”国饮！伏特加与浓郁紫红色的康科德纯葡萄汁注入杯中，青柠汁提酸，最后倒入生姜汽水，清凉解渴、复苏活力，宛如味觉上的“急速输血”。',
    story: '相传诞生于20世纪中期美国名流高尔夫乡村俱乐部，专为球手在烈日下完成18洞比赛后迅速补充体力与电解质而特调，据说也是艾森豪威尔总统的最爱。',
    proTips: ['务必使用纯正的康科德紫葡萄汁（Concord Grape Juice），其特有的浓郁深浆果甜味与姜汁汽水的辛辣是灵魂绝配。'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '纯净伏特加', nameEn: 'Vodka', amountMl: 60, amountOz: '2 oz', rawId: 'vodka' },
      { name: '康科德纯红/紫葡萄汁 (Concord)', nameEn: 'Concord Grape Juice', amountMl: 60, amountOz: '2 oz', rawId: 'grape-juice-red' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' },
      { name: '冰镇姜汁汽水 (Ginger Ale 注顶)', nameEn: 'Chilled Ginger Ale', amountMl: 90, amountOz: '3 oz', rawId: 'ginger-ale' }
    ],
    steps: [
      '在高球杯中加满方冰。',
      '注入伏特加、康科德葡萄汁与新鲜青柠汁。',
      '用吧勺顺滑搅拌 15 秒。',
      '注入冰镇姜汁汽水至满杯。',
      '在杯缘挂上一小串新鲜紫葡萄与青柠角装饰。'
    ],
    isIbaCertified: false
  },

  // ---------------- 桃子汁 系列 ----------------
  {
    id: 'bourbon-peach-sweet-tea',
    slug: 'bourbon-peach-sweet-tea',
    name: '波本蜜桃冰茶',
    nameEn: 'Bourbon Peach Sweet Tea',
    category: 'contemporary',
    categoryZh: '美南阳光庄园特调',
    baseSpirit: 'Whiskey',
    baseSpiritZh: '波本威士忌',
    flavorProfiles: ['果香系', '甜系', '草本系', '清爽系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 1, strong: 3, fruity: 4, herbal: 3 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜水蜜桃切片与大朵薄荷冠',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '直调法 (Build over Ice)',
    abv: 13,
    description: '美国南部庄园夏日最惬意的微醺体验！波本威士忌的焦糖香草气息与纯水蜜桃汁的丝滑香甜，融入现泡冷萃红茶与柠檬汁中，茶香清冽，果汁丰满，消暑神饮。',
    story: '融合了美南两大经典——乔治亚州著名多汁蜜桃（Georgia Peach）与南部传统甜冰茶（Sweet Tea），是户外野餐与音乐节的最佳拍档。',
    proTips: ['使用冷萃锡兰或伯爵红茶，茶汤清亮不涩，与水蜜桃汁 1:1 调配茶果平衡感达到巅峰。'],
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '肯塔基波本威士忌', nameEn: 'Bourbon Whiskey', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'whiskey-bourbon' },
      { name: '纯水蜜桃汁 / 桃肉浓浆', nameEn: 'Pure Peach Juice', amountMl: 60, amountOz: '2 oz', rawId: 'peach-juice' },
      { name: '现泡冷萃纯红茶 (无糖)', nameEn: 'Fresh Brewed Iced Black Tea', amountMl: 60, amountOz: '2 oz', rawId: 'iced-black-tea' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lemon-juice' },
      { name: '蜂蜜糖浆 (或单糖浆)', nameEn: 'Honey Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'honey-syrup' }
    ],
    steps: [
      '在高球杯中放入满杯冰块。',
      '依序倒入波本威士忌、纯水蜜桃汁、冷萃红茶、柠檬汁与蜂蜜糖浆。',
      '用吧勺充分搅拌 20 秒使所有原料与冰块深度交融。',
      '在杯顶插上两片新鲜水蜜桃切片与拍醒的鲜薄荷枝叶。'
    ],
    isIbaCertified: false
  },
  {
    id: 'peach-vodka-sour',
    slug: 'peach-vodka-sour',
    name: '水蜜桃伏特加酸',
    nameEn: 'Peach Vodka Sour',
    category: 'contemporary',
    categoryZh: '当代果香特调',
    baseSpirit: 'Vodka',
    baseSpiritZh: '伏特加/蜜桃',
    flavorProfiles: ['果香系', '柑橘系', '清爽系', '甜系'],
    flavorRadar: { sour: 4, sweet: 3, bitter: 0, strong: 3, fruity: 5, herbal: 1 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '古典杯 / Rocks Glass',
    garnish: '水蜜桃薄片与安哥斯图拉苦精拉花',
    ice: '大块老冰',
    technique: 'Shake',
    techniqueZh: '双重摇荡法 (Dry & Wet Shake)',
    abv: 18,
    description: '如同天鹅绒般的粉桃云朵！纯净伏特加、纯水蜜桃汁与新鲜柠檬汁在蛋白乳化下产生丰盈细腻的粉白泡沫，酸甜多汁，桃香馥郁，口感轻盈如云雾。',
    story: '现代鸡尾酒大师将经典酸酒框架与高浓度水蜜桃泥结合的杰作，深受女性与年轻调酒爱好者喜爱。',
    proTips: ['采用 Dry Shake（先不加冰干摇 15 秒打发蛋清）再加冰湿摇，能让蜜桃果汁与蛋白产生如舒芙蕾般的持久泡沫顶层。'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '纯净伏特加', nameEn: 'Vodka', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'vodka' },
      { name: '纯水蜜桃汁 / 白桃果泥', nameEn: 'Pure Peach Juice / Puree', amountMl: 40, amountOz: '1 1/3 oz', rawId: 'peach-juice' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 25, amountOz: '3/4 oz', rawId: 'fresh-lemon-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'simple-syrup' },
      { name: '新鲜蛋清', nameEn: 'Fresh Egg White', amountMl: 20, amountOz: '1 egg white', rawId: 'egg-white' }
    ],
    steps: [
      '在摇酒壶中倒入伏特加、水蜜桃汁、柠檬汁、糖浆与蛋清（不加冰）。',
      '高强度干摇 15 秒打发泡沫。',
      '加入满杯方冰，剧烈湿摇 15 秒至极冷。',
      '细滤网过滤倒入放有整块老冰的古典杯中。',
      '在泡沫顶层轻轻放上一片薄桃片。'
    ],
    isIbaCertified: false
  },
  {
    id: 'virgin-sunrise',
    slug: 'virgin-sunrise',
    name: '无酒精橙香日出',
    nameEn: 'Virgin Sunrise (Mocktail)',
    category: 'mocktail',
    categoryZh: '无酒精特调',
    baseSpirit: 'None',
    baseSpiritZh: '无酒精',
    flavorProfiles: ['柑橘系', '果香系', '清爽系', '甜系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 0, strong: 0, fruity: 5, herbal: 0 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜橙轮片与马拉斯奇诺黑樱桃',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '重力沉底渐变法 (Gravity Layering)',
    abv: 0,
    description: '零酒精也能享受惊艳的落日晚霞！新鲜现榨橙汁与雪碧混合注入杯中，缓缓倒入浓稠深红的红石榴糖浆，糖浆自然沉入杯底形成红、橙、金三色日出渐变。',
    story: '龙舌兰日出的无酒精经典版本，全年龄段皆可品味大自然的明媚日出美景。',
    proTips: ['红石榴糖浆比重远大于果汁，务必顺着杯壁极其缓慢倒入，让其自然在杯底沉淀出壮观的日落红晕。'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '新鲜现榨甜橙汁', nameEn: 'Fresh Orange Juice', amountMl: 120, amountOz: '4 oz', rawId: 'fresh-orange-juice' },
      { name: '冰镇雪碧 / 柠檬汽水', nameEn: 'Chilled Sprite', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'sprite-lemon-soda' },
      { name: '红石榴糖浆 (沉底)', nameEn: 'Grenadine Syrup', amountMl: 20, amountOz: '2/3 oz', rawId: 'grenadine' }
    ],
    steps: [
      '在高球杯中加满方冰。',
      '倒入新鲜橙汁与雪碧，轻柔搅拌均匀。',
      '缓缓将红石榴糖浆顺着杯壁淋入，任由其沉降在杯底形成鲜艳渐变。',
      '在杯口插上橙轮片与黑樱桃。'
    ],
    isIbaCertified: false
  },
  {
    id: 'virgin-peach-oolong',
    slug: 'virgin-peach-oolong',
    name: '白桃乌龙冰萃特调',
    nameEn: 'Virgin White Peach Oolong Sparkler (Mocktail)',
    category: 'mocktail',
    categoryZh: '新中式无酒精特调',
    baseSpirit: 'None',
    baseSpiritZh: '无酒精',
    flavorProfiles: ['果香系', '草本系', '清爽系', '甜系'],
    flavorRadar: { sour: 2, sweet: 3, bitter: 1, strong: 0, fruity: 4, herbal: 4 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜水蜜桃切片与新鲜迷迭香枝',
    ice: '长条形老冰柱',
    technique: 'Build',
    techniqueZh: '直调法 (Build)',
    abv: 0,
    description: '当下亚洲最火爆的国风新茶饮调酒体验！高山白桃乌龙冷萃茶的清雅兰花香，与多汁白桃纯果泥、新鲜柠檬汁与气泡雪碧交融，茶香缭绕，桃香四溢，清冽甘甜。',
    story: '当代新中式鸡尾酒吧与先锋茶饮文化的完美融合之作，展现了中国传统茶道与现代特调的迷人魅力。',
    proTips: ['冷萃乌龙茶建议使用白桃乌龙茶原叶常温浸泡冷藏 6 小时以上，茶多酚柔和无涩感。'],
    image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '纯水蜜桃汁 / 白桃果泥', nameEn: 'White Peach Juice / Puree', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'peach-juice' },
      { name: '冷萃白桃乌龙茶液', nameEn: 'Cold Brew Peach Oolong Tea', amountMl: 90, amountOz: '3 oz', rawId: 'iced-black-tea' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lemon-juice' },
      { name: '蜂蜜糖浆', nameEn: 'Honey Syrup', amountMl: 10, amountOz: '1/3 oz', rawId: 'honey-syrup' },
      { name: '冰镇雪碧或苏打水 (注顶)', nameEn: 'Sprite or Club Soda', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'sprite-lemon-soda' }
    ],
    steps: [
      '在高球杯中放入透明老冰柱。',
      '加入白桃果泥、蜂蜜糖浆、柠檬汁与冷萃乌龙茶。',
      '用吧勺充分提拉搅拌 15 秒。',
      '注入少量冰雪碧增添欢快气泡。',
      '饰以新鲜桃片与拍醒的迷迭香枝。'
    ],
    isIbaCertified: false
  }
];

// Execute update into ingredients.ts and recipes.ts
const ingredientsFilePath = path.join(projectRoot, 'src', 'data', 'ingredients.ts');
let ingredientsContent = fs.readFileSync(ingredientsFilePath, 'utf8');

const lastBracketIndex = ingredientsContent.lastIndexOf('];');
if (lastBracketIndex !== -1) {
  const existingIds = new Set();
  for (const m of ingredientsContent.matchAll(/id:\s*'([^']+)'/g)) {
    existingIds.add(m[1]);
  }
  for (const m of ingredientsContent.matchAll(/id:\s*"([^"]+)"/g)) {
    existingIds.add(m[1]);
  }
  
  const toAdd = fruitJuiceIngredients.filter(ing => !existingIds.has(ing.id));
  console.log(`Found ${toAdd.length} fruit juice / mixer ingredients to append.`);

  if (toAdd.length > 0) {
    const serialized = toAdd.map(item => '  ' + JSON.stringify(item, null, 2).replace(/"([^"]+)":/g, '$1:').split('\n').join('\n  ')).join(',\n');
    const beforeBracket = ingredientsContent.slice(0, lastBracketIndex).trimEnd();
    const needComma = !beforeBracket.endsWith(',');
    const newIngredientsContent = beforeBracket + (needComma ? ',\n' : '\n') + serialized + '\n];\n';
    fs.writeFileSync(ingredientsFilePath, newIngredientsContent, 'utf8');
    console.log('Updated ingredients.ts with new fruit juice / mixer entries!');
  }
}

const recipesFilePath = path.join(projectRoot, 'src', 'data', 'recipes.ts');
let recipesContent = fs.readFileSync(recipesFilePath, 'utf8');

const lastRecipeBracketIndex = recipesContent.lastIndexOf('];');
if (lastRecipeBracketIndex !== -1) {
  const existingRecipeIds = new Set();
  for (const m of recipesContent.matchAll(/id:\s*'([^']+)'/g)) {
    existingRecipeIds.add(m[1]);
  }
  for (const m of recipesContent.matchAll(/id:\s*"([^"]+)"/g)) {
    existingRecipeIds.add(m[1]);
  }

  const recipesToAdd = fruitJuiceRecipes.filter(r => !existingRecipeIds.has(r.id));
  console.log(`Found ${recipesToAdd.length} fruit juice / mixer recipes to append.`);

  if (recipesToAdd.length > 0) {
    const serialized = recipesToAdd.map(item => '  ' + JSON.stringify(item, null, 2).replace(/"([^"]+)":/g, '$1:').split('\n').join('\n  ')).join(',\n');
    const beforeBracket = recipesContent.slice(0, lastRecipeBracketIndex).trimEnd();
    const needComma = !beforeBracket.endsWith(',');
    const newRecipesContent = beforeBracket + (needComma ? ',\n' : '\n') + serialized + '\n];\n';
    fs.writeFileSync(recipesFilePath, newRecipesContent, 'utf8');
    console.log('Updated recipes.ts with new fruit juice / mixer recipes!');
  }
}
