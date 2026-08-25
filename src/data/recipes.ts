import type { Recipe } from '../types/cocktail';

export const RECIPES_DATABASE: Recipe[] = [
  // ---------------- 1. 传世经典与 IBA 日久弥新 (The Unforgettables) ----------------
  {
    id: 'dry-martini',
    slug: 'dry-martini',
    name: '干马天尼',
    nameEn: 'Dry Martini',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['烈酒感', '草本系', '清爽系'],
    flavorRadar: { sour: 1, sweet: 1, bitter: 3, strong: 5, fruity: 1, herbal: 5 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '马天尼杯 / Martini Glass',
    garnish: '柠檬皮卷 (Lemon Twist) 或 盐渍绿橄榄 (Green Olive)',
    ice: '无冰 (提前冰镇酒杯)',
    technique: 'Stir',
    techniqueZh: '搅拌法',
    abv: 33,
    description: '被誉为“鸡尾酒之王”，极致纯净、干冽且充满草本张力，是检验调酒师搅拌控温控水基本功的最高试金石。',
    story: '起源于19世纪末加州淘金热时期的马丁内斯（Martinez），随着伦敦干金酒与法国干苦艾酒的普及，其配比逐渐从甜美走向极致干冽。丘吉尔、海明威、007均是其狂热追随者。',
    proTips: [
      '务必使用手凿硬冰在调酒杯中搅拌 30-40 秒，使温度降至 -2°C 左右，同时控制融水量在 20%-25%。',
      '挤压柠檬皮时，皮面朝向酒面 45 度角快速捏压，将雾化精油均匀喷洒在酒面与杯沿。'
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 60, amountOz: '2 oz', rawId: 'gin' },
      { name: '干苦艾酒', nameEn: 'Dry Vermouth', amountMl: 10, amountOz: '1/3 oz', rawId: 'dry-vermouth' },
      { name: '橙味苦精 (可选)', nameEn: 'Orange Bitters', amountMl: 1, amountOz: '1 dash', unit: '滴', rawId: 'orange-bitters' }
    ],
    steps: [
      '将马天尼杯放入冷冻室或装满冰水预冷备用。',
      '在搅拌杯（Mixing Glass）中加入 60ml 金酒、10ml 干苦艾酒与 1 滴橙味苦精。',
      '装入八分满坚硬冰块，使用吧勺顺杯壁轻柔顺滑地画圈搅拌 35 秒。',
      '倒掉马天尼杯中的预冷冰水，用滤冰器将清澈纯净的酒液滤入杯中。',
      '在杯口上方轻拧柠檬皮释放精油，或串入一颗精选绿橄榄沉入杯底。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'old-fashioned',
    slug: 'old-fashioned',
    name: '古典鸡尾酒 / 老式',
    nameEn: 'Old Fashioned',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Whiskey',
    baseSpiritZh: '威士忌',
    flavorProfiles: ['烈酒感', '甜系', '苦系', '柑橘系'],
    flavorRadar: { sour: 1, sweet: 3, bitter: 3, strong: 5, fruity: 2, herbal: 3 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '古典杯 / Rocks Glass',
    garnish: '宽橙皮条 (Orange Peel) 与 顶级黑樱桃',
    ice: '单一手凿老冰块 (Clear Ice Block)',
    technique: 'Build',
    techniqueZh: '直调法 / 搅拌',
    abv: 32,
    description: '鸡尾酒定义的最初形态（烈酒+糖+水+苦精），浓郁的波本香草橡木桶风味与柑橘精油、安哥斯图拉香料完美交融。',
    story: '诞生于19世纪初，最初被称为 Whiskey Cocktail。当调酒师开始胡乱添加利口酒后，老酒客们愤怒地要求“按照老规矩调（Make it in the Old Fashioned way）”，由此得名。',
    proTips: [
      '不要将方糖彻底捣成糊状，留少许糖粒在杯底，让品饮者随着冰块融化每一口都能体验到不同的甜度变化。',
      '橙皮建议先在杯口边沿摩擦一圈，赋予每次触唇时的馥郁香气。'
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    ingredients: [
      { name: '波本威士忌或黑麦威士忌', nameEn: 'Bourbon or Rye Whiskey', amountMl: 60, amountOz: '2 oz', rawId: 'whiskey-bourbon' },
      { name: '单糖浆 (或白方糖1块)', nameEn: 'Simple Syrup / Sugar Cube', amountMl: 5, amountOz: '1 tsp', rawId: 'simple-syrup' },
      { name: '安哥斯图拉苦精', nameEn: 'Angostura Bitters', amountMl: 2, amountOz: '2-3 dashes', unit: '滴', rawId: 'angostura-bitters' }
    ],
    steps: [
      '在古典杯底加入单糖浆（或方糖一块）并滴入 2-3 滴安哥斯图拉苦精。',
      '加入一颗剔透的手凿大方冰，倒入 30ml 威士忌，用吧勺轻柔搅拌 15 秒。',
      '倒入剩余的 30ml 威士忌，继续搅拌 20 秒至杯壁起霜。',
      '在杯上方挤压一大片新鲜橙皮喷雾，修整边缘后贴入杯中，饰以一颗黑樱桃。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'negroni',
    slug: 'negroni',
    name: '尼格罗尼',
    nameEn: 'Negroni',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['苦系', '甜系', '草本系', '烈酒感'],
    flavorRadar: { sour: 1, sweet: 3, bitter: 5, strong: 4, fruity: 2, herbal: 5 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '古典杯 / Rocks Glass',
    garnish: '新鲜厚橙皮卷或半月形橙片',
    ice: '大方冰块 (Large Cube)',
    technique: 'Build',
    techniqueZh: '直调/搅拌法',
    abv: 24,
    description: '1:1:1 黄金三等分法则的奇迹，金酒的杜松子烈香、金巴利的深邃草本苦涩与红苦艾的丰润甜美达成神圣共识。',
    story: '1919年佛罗伦萨，卡米洛·尼格罗尼伯爵要求调酒师在美式特调中将苏打水替换为烈性金酒，从而诞生了这杯风靡百年的苦甜红宝石。',
    proTips: [
      '比例固定为等比 1:1:1，调酒的关键在于选用高品质的甜红苦艾酒（如 Carpano Antica 或 Cocchi）。',
      '冷藏所有材料，能大幅减少因搅拌过度导致的失衡稀释。'
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 30, amountOz: '1 oz', rawId: 'gin' },
      { name: '金巴利苦酒', nameEn: 'Campari', amountMl: 30, amountOz: '1 oz', rawId: 'campari' },
      { name: '红甜苦艾酒', nameEn: 'Sweet Red Vermouth', amountMl: 30, amountOz: '1 oz', rawId: 'sweet-vermouth' }
    ],
    steps: [
      '在装有手凿大冰块的古典杯中，依次注入金酒、金巴利与红苦艾酒。',
      '用吧勺匀速搅拌 20-25 秒，使三者充分融合降温。',
      '削取一块新鲜橙皮，轻挤皮油于酒液表面，并将橙皮插入冰块旁点缀。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'manhattan',
    slug: 'manhattan',
    name: '曼哈顿',
    nameEn: 'Manhattan',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Whiskey',
    baseSpiritZh: '威士忌',
    flavorProfiles: ['烈酒感', '草本系', '甜系', '辛辣系'],
    flavorRadar: { sour: 1, sweet: 3, bitter: 3, strong: 5, fruity: 2, herbal: 4 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '碟形香槟杯 / Coupe Glass',
    garnish: '马拉斯奇诺黑樱桃 (Maraschino Cherry)',
    ice: '无冰',
    technique: 'Stir',
    techniqueZh: '搅拌法',
    abv: 30,
    description: '鸡尾酒皇后，黑麦威士忌的辛辣骨架与甜苦艾酒的草本温存缠绕，如曼哈顿夜幕下的流光溢彩。',
    story: '相传1874年由丘吉尔的母亲珍妮·杰罗姆在纽约曼哈顿俱乐部的一场宴会上首创，但其高贵深沉的口感让它成为与马天尼齐名的双子星。',
    proTips: [
      '黑麦威士忌（Rye）的辛辣感优于波本（Bourbon），能给甜苦艾酒提供更具侵略性的支撑。',
      '切勿剧烈摇晃，必须用吧勺顺滑搅拌以保持深红茶色的晶莹剔透。'
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/yk70e31606771240.jpg",
    ingredients: [
      { name: '黑麦威士忌 (或波本)', nameEn: 'Rye Whiskey', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'whiskey-rye' },
      { name: '红甜苦艾酒', nameEn: 'Sweet Red Vermouth', amountMl: 20, amountOz: '2/3 oz', rawId: 'sweet-vermouth' },
      { name: '安哥斯图拉苦精', nameEn: 'Angostura Bitters', amountMl: 1, amountOz: '1 dash', unit: '滴', rawId: 'angostura-bitters' }
    ],
    steps: [
      '预冷碟形鸡尾酒杯。',
      '在搅拌杯中加入黑麦威士忌、红苦艾酒与 1 滴苦精。',
      '加满硬冰，使用吧勺快速且优雅地顺时针搅拌 30 秒。',
      '双重过滤（Double Strain）将酒液滤入预冷香槟杯中。',
      '用鸡尾酒签插一颗顶级黑樱桃置于杯底。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'daiquiri',
    slug: 'daiquiri',
    name: '代基里 / 经典黛绮丽',
    nameEn: 'Daiquiri',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Rum',
    baseSpiritZh: '朗姆酒',
    flavorProfiles: ['柑橘系', '清爽系', '果香系'],
    flavorRadar: { sour: 4, sweet: 3, bitter: 0, strong: 3, fruity: 4, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '碟形香槟杯 / Coupe Glass',
    garnish: '青柠轮片 (Lime Wheel)',
    ice: '无冰',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 22,
    description: '三成分平衡的殿堂级典范：白朗姆酒的甘蔗芬芳、新鲜青柠的利落酸度与少许糖浆融为一体，如同加勒比海风的亲吻。',
    story: '1898年美西战争期间由驻扎在古巴代基里铁矿的工程师 Jennings Cox 发明，后经海明威在哈瓦那极力推崇而名扬全球。',
    proTips: [
      '酸与甜的比例是关键，黄金公式为 3(酒):1(酸):0.75(甜)。',
      '剧烈快速摇荡 10-12 秒，将酒体打入适量微小冰屑。'
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
    ingredients: [
      { name: '古巴白朗姆酒', nameEn: 'White Cuban Rum', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'rum-white' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'fresh-lime-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'simple-syrup' }
    ],
    steps: [
      '将碟形香槟杯置于冷冻层预冷。',
      '在雪克壶中加入白朗姆酒、新鲜青柠汁和单糖浆。',
      '加满大冰块，扣紧摇壶，剧烈水平摇晃 10-12 秒。',
      '滤入预冷香槟杯中，饰以一片新鲜青柠轮。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'margarita',
    slug: 'margarita',
    name: '经典玛格丽特',
    nameEn: 'Classic Margarita',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Tequila',
    baseSpiritZh: '龙舌兰',
    flavorProfiles: ['柑橘系', '清爽系', '辛辣系'],
    flavorRadar: { sour: 4, sweet: 2, bitter: 1, strong: 4, fruity: 3, herbal: 2 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '玛格丽特杯 / 马天尼杯',
    garnish: '杯边海盐圈 (Salt Rim) 与 青柠角',
    ice: '无冰',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 26,
    description: '龙舌兰的泥土与植物青香，在君度橙皮油的包裹与青柠酸爽的激荡下，配合杯边海盐的咸鲜点化，层次惊艳。',
    story: '1938年前后诞生于墨西哥与加州边境，相传调酒师为纪念意外离世的恋人玛格丽特，以代表眼泪的海盐封边，创作了这杯传世鸡尾酒。',
    proTips: [
      '做盐边时只需做半圈（Half Rim），给客人保留选择不蘸盐饮用的空间。',
      '务必使用 100% 蓝色龙舌兰（100% Blue Agave）。'
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    ingredients: [
      { name: '银龙舌兰酒 (100% Agave)', nameEn: 'Tequila Blanco', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'tequila' },
      { name: '君度橙酒', nameEn: 'Cointreau / Triple Sec', amountMl: 25, amountOz: '3/4 oz', rawId: 'cointreau' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'fresh-lime-juice' }
    ],
    steps: [
      '用青柠角擦拭杯口外壁，蘸上半圈细海盐。',
      '在雪克壶中加入龙舌兰酒、君度橙酒与新鲜青柠汁。',
      '加满冰块剧烈摇荡 12 秒至壶身结霜。',
      '精细滤入杯中，杯口悬挂新鲜青柠角。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'sidecar',
    slug: 'sidecar',
    name: '边车',
    nameEn: 'Sidecar',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Brandy',
    baseSpiritZh: '白兰地',
    flavorProfiles: ['柑橘系', '果香系', '烈酒感', '甜系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 4, fruity: 4, herbal: 1 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '碟形香槟杯 / Coupe Glass',
    garnish: '杯口精细白糖边 (Sugar Rim) 与 橙皮',
    ice: '无冰',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 28,
    description: '白兰地酸系鸡尾酒的最高峰。干邑的葡萄木桶醇香与君度橙酒的高贵柑橘香在柠檬汁的催化下展现出极度奢华的贵族质感。',
    story: '一战末期诞生于巴黎 Harry\'s New York Bar，相传一位常客总骑着带有侧边挂斗（Sidecar）的摩托车前来，调酒师为其定制了这杯特调。',
    proTips: [
      '白糖边（Sugar Rim）不仅是装饰，更能柔化高浓度干邑白兰地和柠檬汁在触碰舌尖最初的冲击。'
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/x72sik1606854964.jpg",
    ingredients: [
      { name: '干邑白兰地', nameEn: 'Cognac / French Brandy', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'brandy-cognac' },
      { name: '君度橙酒', nameEn: 'Cointreau', amountMl: 20, amountOz: '2/3 oz', rawId: 'cointreau' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'fresh-lemon-juice' }
    ],
    steps: [
      '用柠檬角擦拭杯沿，蘸上细白砂糖半圈糖边。',
      '在雪克壶中倒入干邑白兰地、君度橙酒与柠檬汁。',
      '加入足量硬冰，剧烈摇晃 12 秒。',
      '双重过滤倒入已预冷的糖边杯中，喷洒橙皮精油。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'whiskey-sour',
    slug: 'whiskey-sour',
    name: '经典威士忌酸',
    nameEn: 'Whiskey Sour (with Egg White)',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Whiskey',
    baseSpiritZh: '威士忌',
    flavorProfiles: ['柑橘系', '甜系', '奶香系', '烈酒感'],
    flavorRadar: { sour: 4, sweet: 3, bitter: 1, strong: 4, fruity: 2, herbal: 1 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '古典杯 / Rocks Glass',
    garnish: '安哥斯图拉苦精拉花 (Bitters Drops) 与 柠檬轮',
    ice: '大方冰块',
    technique: 'Shake',
    techniqueZh: '双重摇荡 (Dry Shake + Wet Shake)',
    abv: 22,
    description: '波本威士忌的香草橡木味在柠檬酸甜中盛开，新鲜蛋清经过剧烈乳化，在酒顶形成一层如同天鹅绒云朵般的绵密奶白泡沫。',
    story: '1870年首次记载于威斯康星州报纸，是酸类调酒家族的奠基之作。蛋清的加入彻底将它提升为艺术品。',
    proTips: [
      '采用「干摇（不加冰摇晃 10 秒）」先彻底乳化蛋白打发泡沫，再「加冰湿摇 10 秒」降温。'
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
    ingredients: [
      { name: '波本威士忌', nameEn: 'Bourbon Whiskey', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'whiskey-bourbon' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 25, amountOz: '3/4 oz', rawId: 'fresh-lemon-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 20, amountOz: '2/3 oz', rawId: 'simple-syrup' },
      { name: '新鲜蛋清 / 蛋白液', nameEn: 'Fresh Egg White', amountMl: 15, amountOz: '1/2 oz', rawId: 'egg-white' },
      { name: '安哥斯图拉苦精', nameEn: 'Angostura Bitters', amountMl: 1, amountOz: '2-3 drops', unit: '滴', rawId: 'angostura-bitters' }
    ],
    steps: [
      '将波本威士忌、柠檬汁、糖浆与蛋清倒入雪克壶中。',
      '先不要加冰！盖紧摇壶进行剧烈「干摇」10-15 秒使蛋白充分起泡。',
      '开壶加入满壶硬冰，进行第二次「湿摇」8-10 秒降温。',
      '滤入装有大冰块的古典杯中。',
      '在顶层白色泡沫上滴 3 滴苦精划出拉花。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'mojito',
    slug: 'mojito',
    name: '莫吉托',
    nameEn: 'Mojito',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Rum',
    baseSpiritZh: '朗姆酒',
    flavorProfiles: ['清爽系', '草本系', '柑橘系', '甜系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 2, fruity: 3, herbal: 5 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜薄荷叶顶芽 (Mint Sprig) 与 青柠角',
    ice: '满杯碎冰 (Crushed Ice)',
    technique: 'Muddle',
    techniqueZh: '捣压法 / 直调',
    abv: 12,
    description: '全球夏日鸡尾酒之王！清冽白朗姆、现压薄荷精油、青柠酸爽与苏打水气泡在晶莹碎冰中翻滚，带来极致的降温清爽。',
    story: '古巴国饮，最初可追溯至16世纪海盗德雷克船长配制的防病灵药“El Draque”，后在哈瓦那成为海明威的最爱。',
    proTips: [
      '用捣棒轻压薄荷叶释放叶脉香气即可，切忌暴力把薄荷捣烂成碎渣。'
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    ingredients: [
      { name: '古巴白朗姆酒', nameEn: 'White Cuban Rum', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'rum-white' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 25, amountOz: '3/4 oz', rawId: 'fresh-lime-juice' },
      { name: '新鲜薄荷叶', nameEn: 'Fresh Mint Leaves', amountMl: 8, amountOz: '8-10 leaves', unit: '片', rawId: 'fresh-mint' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 20, amountOz: '2/3 oz', rawId: 'simple-syrup' },
      { name: '苏打水', nameEn: 'Club Soda', amountMl: 50, amountOz: 'To top (约50ml)', rawId: 'club-soda' }
    ],
    steps: [
      '在高球杯中放入 8-10 片新鲜薄荷叶、青柠汁与糖浆。',
      '使用捣棒轻柔按压薄荷叶 5-6 次。',
      '注入白朗姆酒，加入碎冰至半杯满搅拌均匀。',
      '填满碎冰至杯口，注入冷藏苏打水补满。',
      '拍醒一大簇薄荷顶芽插在冰顶。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'gin-tonic',
    slug: 'gin-tonic',
    name: '金汤力',
    nameEn: 'Gin & Tonic',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['清爽系', '草本系', '苦系', '柑橘系'],
    flavorRadar: { sour: 2, sweet: 2, bitter: 3, strong: 3, fruity: 2, herbal: 4 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯或波尔多大肚杯 (Copa Glass)',
    garnish: '新鲜青柠角与迷迭香枝',
    ice: '紧密老冰柱 (Ice Spear)',
    technique: 'Build',
    techniqueZh: '直调法',
    abv: 14,
    description: '最简单也最深奥的日常微醺！杜松子与植物香料在强劲汤力水气泡与奎宁微苦中升腾。',
    story: '19世纪英国东印度公司军官为预防疟疾将金酒混入奎宁药水而诞生。',
    proTips: ['汤力水顺着吧勺螺旋把柄缓慢引流倒入杯底，最大程度保留碳酸气泡。'],
    image: "https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg",
    ingredients: [
      { name: '优质金酒', nameEn: 'Premium Gin', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'gin' },
      { name: '精品汤力水', nameEn: 'Indian Tonic Water', amountMl: 120, amountOz: '4 oz', rawId: 'tonic-water' },
      { name: '新鲜青柠角', nameEn: 'Fresh Lime Wedge', amountMl: 1, amountOz: '1 wedge', unit: '角', rawId: 'fresh-lime-juice' }
    ],
    steps: [
      '在冰镇高球杯中放入一根晶莹透明的老冰柱。',
      '倒入 50ml 金酒搅拌 10 秒降温。',
      '将冰镇汤力水顺着吧勺缓缓注入至九分满。',
      '从杯底轻柔向上提拉一次。',
      '轻挤一块青柠角滴入杯中作为装饰。'
    ],
    isIbaCertified: false
  },

  // ---------------- 2. 现代经典与名师杰作 (Contemporary & New Era) ----------------
  {
    id: 'penicillin',
    slug: 'penicillin',
    name: '盘尼西林 / 青霉素',
    nameEn: 'Penicillin',
    category: 'contemporary',
    categoryZh: '现代经典',
    baseSpirit: 'Whiskey',
    baseSpiritZh: '威士忌',
    flavorProfiles: ['烟熏系', '辛辣系', '柑橘系', '甜系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 2, strong: 4, fruity: 2, herbal: 5 },
    difficulty: 'advanced',
    difficultyZh: '进阶',
    glass: '古典杯 / Rocks Glass',
    garnish: '糖渍生姜片 (Candied Ginger) 或 柠檬轮',
    ice: '大块手凿老冰',
    technique: 'Shake',
    techniqueZh: '摇荡 + 漂浮法 (Shake & Float)',
    abv: 25,
    description: '21世纪最伟大的现代经典鸡尾酒！调和威士忌的柔顺、新鲜生姜与蜂蜜的温暖治愈，在酒面漂浮的一层艾雷岛泥煤烟熏中升华为灵药。',
    story: '2005年由纽约传奇酒吧 Milk & Honey 的调酒大师 Sam Ross 创造。它如同医学上的抗生素一样，迅速治愈并征服了全球调酒界的味蕾。',
    proTips: [
      '漂浮泥煤威士忌（如拉弗格 10年）时，用吧勺背面贴近酒面缓慢倾倒，使其均匀覆盖在最上层。'
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/hc9b1a1521853096.jpg",
    ingredients: [
      { name: '苏格兰调和威士忌', nameEn: 'Blended Scotch Whisky', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'whiskey-scotch' },
      { name: '艾雷岛单一麦芽泥煤威士忌 (漂浮)', nameEn: 'Islay Peated Single Malt', amountMl: 10, amountOz: '1/3 oz', rawId: 'whiskey-scotch' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'fresh-lemon-juice' },
      { name: '自制蜂蜜生姜糖浆', nameEn: 'Honey-Ginger Syrup', amountMl: 20, amountOz: '2/3 oz', rawId: 'ginger-syrup' }
    ],
    steps: [
      '在雪克壶中加入调和威士忌、新鲜柠檬汁与蜂蜜生姜糖浆。',
      '加满冰块，剧烈摇荡 12 秒至壶身冰结。',
      '精细过滤倒入放有手凿大冰块的古典杯中。',
      '将吧勺反置于杯口酒面上方，轻缓倒入 10ml 艾雷岛泥煤威士忌。',
      '在冰块上方摆放一片糖渍生姜片。'
    ],
    isIbaCertified: true,
    ibaCategory: 'New Era Drinks',
    masterInfo: {
      name: 'Sam Ross',
      bar: 'Milk & Honey / Attaboy (New York)',
      quote: '泥煤威士忌不是用来掩盖缺陷的，它是唤醒全部感官的终极钥匙。'
    }
  },
  {
    id: 'espresso-martini',
    slug: 'espresso-martini',
    name: '浓缩咖啡马天尼',
    nameEn: 'Espresso Martini',
    category: 'contemporary',
    categoryZh: '当代经典',
    baseSpirit: 'Vodka',
    baseSpiritZh: '伏特加',
    flavorProfiles: ['甜系', '苦系', '烈酒感', '奶香系'],
    flavorRadar: { sour: 0, sweet: 3, bitter: 4, strong: 4, fruity: 1, herbal: 2 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '马天尼杯 / 碟形香槟杯',
    garnish: '三颗烘焙咖啡豆 (代表健康、财富与幸福)',
    ice: '无冰',
    technique: 'Shake',
    techniqueZh: '强力摇荡法 (Hard Shake)',
    abv: 21,
    description: '“先叫醒我，再灌醉我！”新鲜意式浓缩咖啡油脂在剧烈摇晃下形成天鹅绒般的厚重 Crema 泡沫层，咖啡醇香与伏特加完美相拥。',
    story: '1983年由伦敦 Fred\'s Club 传奇调酒宗师 Dick Bradsell 首创。',
    proTips: [
      '意式浓缩咖啡必须是现萃取的，现萃油脂在冰块剧烈撞击下才能产生丰满如慕斯般的泡沫。'
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg",
    ingredients: [
      { name: '高纯度伏特加', nameEn: 'Vodka', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'vodka' },
      { name: '甘露咖啡力娇酒', nameEn: 'Kahlúa Coffee Liqueur', amountMl: 20, amountOz: '2/3 oz', rawId: 'kahlua' },
      { name: '新鲜意式浓缩咖啡', nameEn: 'Fresh Hot Espresso', amountMl: 30, amountOz: '1 oz' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 5, amountOz: '1 tsp', rawId: 'simple-syrup' }
    ],
    steps: [
      '将马天尼杯预冷备用。',
      '在雪克壶中加入伏特加、咖啡利口酒、现萃浓缩咖啡与单糖浆。',
      '加满坚硬大冰块，迅速盖紧壶盖，以极高频率用力摇荡 15 秒。',
      '精细双重过滤倒入预冷杯中。',
      '在泡沫中央摆放 3 颗整粒咖啡豆。'
    ],
    isIbaCertified: true,
    ibaCategory: 'New Era Drinks',
    masterInfo: {
      name: 'Dick Bradsell',
      bar: 'Fred\'s Club (London)',
      quote: '一杯优秀的鸡尾酒应当像闪电一样直击灵魂。'
    }
  },
  {
    id: 'the-last-word',
    slug: 'the-last-word',
    name: '最后之语',
    nameEn: 'The Last Word',
    category: 'contemporary',
    categoryZh: '当代经典',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['草本系', '柑橘系', '甜系', '烈酒感'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 2, strong: 4, fruity: 3, herbal: 5 },
    difficulty: 'advanced',
    difficultyZh: '进阶',
    glass: '碟形香槟杯 / Coupe Glass',
    garnish: '马拉斯奇诺黑樱桃',
    ice: '无冰',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 27,
    description: '禁酒令时期的神圣四等分配方！金酒、绿查特酒、黑樱桃利口酒与青柠汁以 1:1:1:1 绝对平衡，呈现通透高贵的浅苔绿色。',
    story: '1915年左右起源于底特律运动俱乐部，2004年被西雅图调酒大师 Murray Stenson 重新发掘引爆全球。',
    proTips: ['绿查特酒酒精度高达 55%，且带有130种草本风味，四者等分摇荡后能产生超乎想象的立体回甘。'],
    image: "https://www.thecocktaildb.com/images/media/drink/91oule1513702624.jpg",
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 22.5, amountOz: '3/4 oz', rawId: 'gin' },
      { name: '修道院绿查特酒', nameEn: 'Green Chartreuse', amountMl: 22.5, amountOz: '3/4 oz', rawId: 'chartreuse-green' },
      { name: '乐沙度黑樱桃利口酒', nameEn: 'Luxardo Maraschino Liqueur', amountMl: 22.5, amountOz: '3/4 oz', rawId: 'maraschino' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 22.5, amountOz: '3/4 oz', rawId: 'fresh-lime-juice' }
    ],
    steps: [
      '预冷碟形鸡尾酒杯。',
      '在雪克壶中按精确 1:1:1:1 等比例注入金酒、绿查特酒、黑樱桃酒和青柠汁。',
      '加满冰块剧烈摇荡 12 秒。',
      '精细滤入预冷杯中，在杯底沉入一颗黑樱桃。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'moscow-mule',
    slug: 'moscow-mule',
    name: '莫斯科骡子',
    nameEn: 'Moscow Mule',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Vodka',
    baseSpiritZh: '伏特加',
    flavorProfiles: ['清爽系', '辛辣系', '柑橘系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 3, fruity: 2, herbal: 3 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '铜制马克杯 / Copper Mule Mug',
    garnish: '青柠角与薄荷枝',
    ice: '满杯碎冰',
    technique: 'Build',
    techniqueZh: '直调法',
    abv: 13,
    description: '铜杯外壁瞬间凝结的一层冰霜！伏特加的纯净被辛辣强劲的发酵姜汁啤酒激发，酸爽青柠汁带来如骡子踢腿般的过瘾回味。',
    story: '1941年好莱坞，斯米诺伏特加、姜汁啤酒厂与滞销铜杯商人聚在一起创造的传奇。',
    proTips: ['纯铜杯具有极高导热性，能让冰凉感瞬间传遍唇齿。'],
    image: "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    ingredients: [
      { name: '伏特加', nameEn: 'Vodka', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'vodka' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' },
      { name: '发酵姜汁啤酒 (Ginger Beer)', nameEn: 'Spicy Ginger Beer', amountMl: 120, amountOz: '4 oz', rawId: 'ginger-beer' }
    ],
    steps: [
      '在特制纯铜马克杯中装满碎冰。',
      '注入 50ml 伏特加与 15ml 新鲜青柠汁。',
      '注满冰镇姜汁啤酒，用吧勺轻柔提拉搅拌。',
      '在冰顶插上一瓣新鲜青柠角与薄荷叶。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'cosmopolitan',
    slug: 'cosmopolitan',
    name: '大都会',
    nameEn: 'Cosmopolitan',
    category: 'contemporary',
    categoryZh: '当代经典',
    baseSpirit: 'Vodka',
    baseSpiritZh: '伏特加',
    flavorProfiles: ['柑橘系', '果香系', '甜系', '清爽系'],
    flavorRadar: { sour: 4, sweet: 3, bitter: 1, strong: 3, fruity: 5, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '马天尼杯 / Martini Glass',
    garnish: '火燎橙皮 (Flamed Orange Peel)',
    ice: '无冰',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 20,
    description: '迷人的粉红宝石色泽，柑橘伏特加、君度橙酒、蔓越莓汁与青柠汁的完美交融。',
    story: '由纽约调酒师 Toby Cecchini 于1988年规范定型，因《欲望都市》风靡全球。',
    proTips: ['火燎橙皮：在杯口上方挤压橙皮让精油穿过火苗，散发焦糖柑橘香气。'],
    image: "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
    ingredients: [
      { name: '柑橘风味伏特加', nameEn: 'Citron Vodka', amountMl: 40, amountOz: '1 1/3 oz', rawId: 'vodka' },
      { name: '君度橙酒', nameEn: 'Cointreau', amountMl: 15, amountOz: '1/2 oz', rawId: 'cointreau' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' },
      { name: '蔓越莓汁', nameEn: 'Cranberry Juice', amountMl: 30, amountOz: '1 oz', rawId: 'cranberry-juice' }
    ],
    steps: [
      '马天尼杯加冰预冷。',
      '雪克壶中加入柑橘伏特加、君度橙酒、青柠汁与蔓越莓汁。',
      '加满冰块剧烈摇荡 12 秒。',
      '滤入预冷马天尼杯中，喷洒火燎橙皮精油。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'paloma',
    slug: 'paloma',
    name: '帕洛玛',
    nameEn: 'Paloma',
    category: 'contemporary',
    categoryZh: '当代经典',
    baseSpirit: 'Tequila',
    baseSpiritZh: '龙舌兰',
    flavorProfiles: ['清爽系', '柑橘系', '果香系', '苦系'],
    flavorRadar: { sour: 4, sweet: 2, bitter: 2, strong: 3, fruity: 4, herbal: 2 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / 柯林杯',
    garnish: '西柚切片 (Grapefruit Wedge) 与 细海盐圈',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '直调法',
    abv: 13,
    description: '墨西哥当地人最热衷的国民调酒！银龙舌兰的青草植物香与新鲜西柚汁的清苦酸甜、苏打气泡碰撞出无限阳光活力。',
    story: '相传由墨西哥传奇调酒师 Don Javier Corona 在特基拉镇的 La Capilla 酒吧首创。',
    proTips: ['杯边蘸少许粗海盐，能极大激发西柚和龙舌兰的甘甜回味。'],
    image: "https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg",
    ingredients: [
      { name: '银龙舌兰酒', nameEn: 'Tequila Blanco', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'tequila' },
      { name: '新鲜西柚汁', nameEn: 'Fresh Pink Grapefruit Juice', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'grapefruit-juice' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' },
      { name: '龙舌兰蜜 (或单糖浆)', nameEn: 'Agave Nectar', amountMl: 10, amountOz: '1/3 oz', rawId: 'agave-nectar' },
      { name: '苏打水', nameEn: 'Club Soda', amountMl: 60, amountOz: '2 oz', rawId: 'club-soda' }
    ],
    steps: [
      '高球杯口擦拭青柠汁，蘸半圈细盐。',
      '杯中装满冰块，倒入龙舌兰酒、西柚汁、青柠汁与龙舌兰蜜。',
      '用吧勺充分搅拌融合。',
      '注入冷藏苏打水补满，插入一块新鲜西柚切片。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'boulevardier',
    slug: 'boulevardier',
    name: '林荫大道 / 花花公子',
    nameEn: 'Boulevardier',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Whiskey',
    baseSpiritZh: '威士忌',
    flavorProfiles: ['苦系', '烈酒感', '甜系', '草本系'],
    flavorRadar: { sour: 0, sweet: 3, bitter: 4, strong: 5, fruity: 2, herbal: 5 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '古典杯或碟形香槟杯',
    garnish: '新鲜橙皮卷 (Orange Twist) 与 黑樱桃',
    ice: '大方冰块',
    technique: 'Stir',
    techniqueZh: '搅拌法',
    abv: 28,
    description: '尼格罗尼的威士忌孪生兄弟！将金酒替换为浓郁饱满的波本或黑麦威士忌，橡木桶香草与金巴利苦草本交织出成熟绅士的风范。',
    story: '1927年由生活在巴黎的美国作家 Erskine Gwynne 在 Harry\'s New York Bar 创制，以其创办的杂志《The Boulevardier》命名。',
    proTips: ['提高威士忌比例至 45ml (1.5倍)，能让威士忌在强势的金巴利与苦艾面前站稳脚跟。'],
    image: "https://www.thecocktaildb.com/images/media/drink/km84qi1513705868.jpg",
    ingredients: [
      { name: '波本或黑麦威士忌', nameEn: 'Bourbon / Rye Whiskey', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'whiskey-bourbon' },
      { name: '金巴利苦酒', nameEn: 'Campari', amountMl: 30, amountOz: '1 oz', rawId: 'campari' },
      { name: '红甜苦艾酒', nameEn: 'Sweet Red Vermouth', amountMl: 30, amountOz: '1 oz', rawId: 'sweet-vermouth' }
    ],
    steps: [
      '在搅拌杯中注入威士忌、金巴利与红苦艾酒。',
      '加入大量坚硬硬冰，顺时针匀速搅拌 30 秒。',
      '滤入装有大冰块的古典杯中，挤压橙皮精油装饰。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'aviation',
    slug: 'aviation',
    name: '飞行',
    nameEn: 'Aviation',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['草本系', '果香系', '柑橘系', '烈酒感'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 1, strong: 4, fruity: 4, herbal: 4 },
    difficulty: 'advanced',
    difficultyZh: '进阶',
    glass: '碟形香槟杯 / Coupe Glass',
    garnish: '马拉斯奇诺黑樱桃沉底',
    ice: '无冰',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 26,
    description: '如梦似幻的紫罗兰天空！金酒与黑樱桃利口酒、柠檬汁结合，在微量紫罗兰利口酒点化下，呈现苍茫天空般的幽蓝淡紫光泽。',
    story: '1916年由纽约华尔街 Hotel Wallick 调酒师 Hugo Ensslin 首创，致敬人类刚刚开启的航空时代。',
    proTips: ['紫罗兰利口酒（Crème de Violette）用量必须极度克制（约 5ml），否则会变成肥皂水味道。'],
    image: "https://www.thecocktaildb.com/images/media/drink/trbplb1606855233.jpg",
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'gin' },
      { name: '乐沙度黑樱桃利口酒', nameEn: 'Luxardo Maraschino Liqueur', amountMl: 15, amountOz: '1/2 oz', rawId: 'maraschino' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lemon-juice' },
      { name: '紫罗兰利口酒', nameEn: 'Crème de Violette', amountMl: 5, amountOz: '1 tsp' }
    ],
    steps: [
      '预冷碟形香槟杯。',
      '在雪克壶中加入金酒、黑樱桃利口酒、新鲜柠檬汁与紫罗兰利口酒。',
      '加满冰块剧烈摇荡 12 秒。',
      '双重过滤滤入预冷杯中，在杯底沉入一颗黑樱桃。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'pina-colada',
    slug: 'pina-colada',
    name: '椰林飘香',
    nameEn: 'Piña Colada',
    category: 'classic',
    categoryZh: '热带经典',
    baseSpirit: 'Rum',
    baseSpiritZh: '朗姆酒',
    flavorProfiles: ['甜系', '果香系', '奶香系'],
    flavorRadar: { sour: 2, sweet: 5, bitter: 0, strong: 2, fruity: 5, herbal: 0 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '飓风杯 / Hurricane Glass',
    garnish: '新鲜菠萝角、樱桃与热带纸伞',
    ice: '满杯碎冰或冰沙',
    technique: 'Blend',
    techniqueZh: '搅拌机法 / 摇荡法',
    abv: 11,
    description: '波多黎各官方国饮！白朗姆酒、浓郁椰浆与新鲜菠萝汁打成丝滑雪泥，每一口都是加勒比海滩的艳阳与椰风。',
    story: '1954年由波多黎各圣胡安 Caribe Hilton 酒店调酒师 Ramón "Monchito" Marrero 历时3个月研制成功。',
    proTips: ['使用纯椰浆（Cream of Coconut 如 Coco López）而非清淡椰子水，才能带来慕斯般的奶润口感。'],
    image: 'https://www.thecocktaildb.com/images/media/drink/upgsue1668419912.jpg',
    ingredients: [
      { name: '白朗姆酒', nameEn: 'White Rum', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'rum-white' },
      { name: '浓缩椰浆 (Cream of Coconut)', nameEn: 'Cream of Coconut', amountMl: 30, amountOz: '1 oz' },
      { name: '纯菠萝汁', nameEn: 'Fresh Pineapple Juice', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'pineapple-juice' },
      { name: '新鲜青柠汁 (微量提酸)', nameEn: 'Fresh Lime Juice', amountMl: 10, amountOz: '1/3 oz', rawId: 'fresh-lime-juice' }
    ],
    steps: [
      '在搅拌机中加入白朗姆酒、椰浆、菠萝汁、青柠汁与一大碗碎冰。',
      '高速搅打 15 秒至呈均匀雪泥冰沙状。',
      '倒入高挑的飓风杯中，在杯边插上菠萝角与红色鸡尾酒樱桃。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'clover-club',
    slug: 'clover-club',
    name: '三叶草俱乐部',
    nameEn: 'Clover Club',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['果香系', '柑橘系', '甜系', '奶香系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 3, fruity: 5, herbal: 3 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '碟形香槟杯 / Coupe Glass',
    garnish: '新鲜覆盆子三颗串联 (Raspberry Skewer)',
    ice: '无冰',
    technique: 'Shake',
    techniqueZh: '双重摇荡法 (Dry + Wet Shake)',
    abv: 19,
    description: '宛如粉红天鹅绒华服！金酒融入新鲜覆盆子果酱与柠檬汁，在蛋清打发的细腻粉白泡沫中，散发着费城精英俱乐部的复古优雅。',
    story: '1896年前后诞生于费城贝尔维尤-斯特拉特福德酒店，是当时名流绅士组成的“三叶草俱乐部”的专属迎宾酒。',
    proTips: ['自制覆盆子糖浆或用新鲜覆盆子在摇壶中先捣烂，果香比普通红石榴糖浆生动十倍。'],
    image: "https://www.thecocktaildb.com/images/media/drink/t0aja61504348715.jpg",
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'gin' },
      { name: '新鲜覆盆子糖浆 (或红石榴糖浆)', nameEn: 'Raspberry Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'grenadine' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lemon-juice' },
      { name: '新鲜蛋清', nameEn: 'Fresh Egg White', amountMl: 15, amountOz: '1/2 oz', rawId: 'egg-white' }
    ],
    steps: [
      '在雪克壶中加入金酒、覆盆子糖浆、柠檬汁与蛋清。',
      '不加冰进行「干摇」15 秒打发蛋白泡沫。',
      '开壶加满冰块进行第二次「湿摇」10 秒降温。',
      '精细滤入预冷香槟杯中，饰以一串新鲜红树莓。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'blue-margarita',
    slug: 'blue-margarita',
    name: '蓝色玛格丽特',
    nameEn: 'Blue Margarita',
    category: 'competition',
    categoryZh: '大赛冠军作品',
    baseSpirit: 'Tequila',
    baseSpiritZh: '龙舌兰',
    flavorProfiles: ['柑橘系', '清爽系', '果香系'],
    flavorRadar: { sour: 4, sweet: 3, bitter: 1, strong: 4, fruity: 4, herbal: 2 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '玛格丽特杯 / 马天尼杯',
    garnish: '精细海盐边 (Salt Rim) 与 青柠轮',
    ice: '无冰',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 25,
    description: '1949年全美鸡尾酒大赛冠军传奇！将经典配方中的无色橙酒替换为深邃蔚蓝的蓝柑桂酒，如同加勒比深海在杯中泛起浪花。',
    story: '1949年美国国家鸡尾酒锦标赛冠军作品，调酒师 John Durlesser 凭借这款深海湛蓝调酒一举夺魁。',
    proTips: ['用细海盐封半边杯口，白色的盐霜与湛蓝酒液形成极其惊艳的视觉碰撞。'],
    image: "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
    ingredients: [
      { name: '银龙舌兰酒 (100% Agave)', nameEn: 'Tequila Blanco', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'tequila' },
      { name: '蓝柑桂利口酒', nameEn: 'Blue Curaçao', amountMl: 25, amountOz: '3/4 oz', rawId: 'blue-curacao' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'fresh-lime-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 5, amountOz: '1 tsp', rawId: 'simple-syrup' }
    ],
    steps: [
      '在马天尼杯口用青柠擦拭，蘸上半圈海盐边。',
      '在雪克壶中倒入龙舌兰酒、蓝柑桂酒、青柠汁与糖浆。',
      '装入满壶冰块，双手剧烈摇荡 12 秒。',
      '滤入准备好的盐边杯中，饰以青柠轮片。'
    ],
    isIbaCertified: false,
    competitionInfo: {
      name: '全美鸡尾酒大赛 (US National Cocktail Championship)',
      year: 1949,
      award: '全国总冠军 (Grand Champion)',
      bartender: 'John Durlesser',
      country: '美国'
    }
  },
  {
    id: 'bees-knees',
    slug: 'bees-knees',
    name: '蜜蜂之膝',
    nameEn: 'Bee\'s Knees',
    category: 'classic',
    categoryZh: '禁酒令经典',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['甜系', '柑橘系', '草本系', '清爽系'],
    flavorRadar: { sour: 3, sweet: 4, bitter: 0, strong: 3, fruity: 3, herbal: 4 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '碟形香槟杯 / Coupe Glass',
    garnish: '新鲜柠檬皮卷 (Lemon Twist)',
    ice: '无冰',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 22,
    description: '“最顶尖的存在”！禁酒令时期为驯服粗粝私酒而诞生的天才配方，金酒松木香在纯正蜂蜜与柠檬酸甜中柔化为琼浆。',
    story: '20年代禁酒令俚语“Bee\'s Knees”意为极其出类拔萃，由巴黎丽兹酒店传奇调酒师 Frank Meier 规范记录。',
    proTips: ['蜂蜜必须先加水调成 3:1 或 2:1 蜂蜜糖浆，否则遇冷冰块会粘在摇壶底部。'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bee%27s_Knees_%28cocktail%29.jpg/1280px-Bee%27s_Knees_%28cocktail%29.jpg',
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'gin' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'fresh-lemon-juice' },
      { name: '天然蜂蜜糖浆 (3:1)', nameEn: 'Honey Syrup', amountMl: 20, amountOz: '2/3 oz', rawId: 'honey-syrup' }
    ],
    steps: [
      '预冷碟形香槟杯。',
      '在雪克壶中加入金酒、新鲜柠檬汁与蜂蜜糖浆。',
      '加入坚硬冰块，剧烈摇荡 12 秒。',
      '精细滤入预冷杯中，在杯口扭转柠檬皮释放香气。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'hemingway-daiquiri',
    slug: 'hemingway-daiquiri',
    name: '海明威特调代基里',
    nameEn: 'Hemingway Special / Papa Doble',
    category: 'classic',
    categoryZh: '文豪特调',
    baseSpirit: 'Rum',
    baseSpiritZh: '朗姆酒',
    flavorProfiles: ['柑橘系', '果香系', '烈酒感', '清爽系'],
    flavorRadar: { sour: 4, sweet: 2, bitter: 2, strong: 4, fruity: 4, herbal: 2 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '碟形香槟杯 / Coupe Glass',
    garnish: '新鲜西柚轮或青柠片',
    ice: '无冰',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 26,
    description: '海明威无糖狂饮的灵魂之作。双倍白朗姆酒、新鲜西柚汁与酸黑樱桃利口酒的加入，让口感干冽如刀锋，回甘深邃。',
    story: '海明威在哈瓦那 El Floridita 酒吧常客时，要求调酒师 Constantino 去掉所有的糖并加倍朗姆酒。',
    proTips: ['新鲜西柚汁的天然微苦与黑樱桃利口酒的核仁香气是灵魂所在。'],
    image: 'https://www.thecocktaildb.com/images/media/drink/jfcvps1504369888.jpg',
    ingredients: [
      { name: '古巴白朗姆酒', nameEn: 'White Rum', amountMl: 60, amountOz: '2 oz', rawId: 'rum-white' },
      { name: '新鲜西柚汁', nameEn: 'Fresh Grapefruit Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'grapefruit-juice' },
      { name: '乐沙度黑樱桃利口酒', nameEn: 'Luxardo Maraschino Liqueur', amountMl: 10, amountOz: '1/3 oz', rawId: 'maraschino' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' }
    ],
    steps: [
      '预冷碟形香槟杯。',
      '在雪克壶中加入白朗姆酒、西柚汁、黑樱桃利口酒与青柠汁。',
      '装满冰块，用力剧烈摇荡 12 秒。',
      '精细滤入预冷香槟杯中，饰以一片薄切西柚片。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'french-75',
    slug: 'french-75',
    name: '法国75',
    nameEn: 'French 75',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['清爽系', '柑橘系', '果香系', '甜系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 3, fruity: 4, herbal: 3 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '笛形香槟杯 / Flute Glass',
    garnish: '螺旋长柠檬皮条 (Lemon Spiral)',
    ice: '无冰',
    technique: 'Shake',
    techniqueZh: '摇荡 + 香槟注顶',
    abv: 18,
    description: '以一战法国75毫米野战加农炮命名的优雅炸弹！金酒、柠檬与糖浆摇匀后注满起泡香槟，气泡升腾间带来如加农炮般的强劲后劲。',
    story: '一战期间由巴黎 Harry\'s New York Bar 调酒师 Harry MacElhone 创作。',
    proTips: ['选用干型香槟（Brut Champagne）或优质普罗塞克 Prosecco。'],
    image: "https://www.thecocktaildb.com/images/media/drink/hrxfbl1606773109.jpg",
    ingredients: [
      { name: '伦敦干金酒 (或干邑白兰地)', nameEn: 'London Dry Gin', amountMl: 30, amountOz: '1 oz', rawId: 'gin' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lemon-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'simple-syrup' },
      { name: '法国干型香槟', nameEn: 'Brut Champagne', amountMl: 60, amountOz: '2 oz' }
    ],
    steps: [
      '在雪克壶中加入金酒、柠檬汁与单糖浆。',
      '加冰剧烈摇荡 10 秒。',
      '滤入冰镇笛形香槟杯中。',
      '缓慢注入冰镇香槟补满杯身，轻轻提拉吧勺一次。',
      '将一条螺旋柠檬皮挂入杯中。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'mai-tai',
    slug: 'mai-tai',
    name: '迈泰',
    nameEn: 'Mai Tai',
    category: 'classic',
    categoryZh: 'Tiki热带经典',
    baseSpirit: 'Rum',
    baseSpiritZh: '朗姆酒',
    flavorProfiles: ['果香系', '甜系', '柑橘系', '烈酒感'],
    flavorRadar: { sour: 3, sweet: 4, bitter: 0, strong: 4, fruity: 5, herbal: 2 },
    difficulty: 'advanced',
    difficultyZh: '进阶',
    glass: '古典杯 / Rocks Glass',
    garnish: '新鲜薄荷大顶芽、青柠壳与热带兰花',
    ice: '满杯碎冰',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 24,
    description: '“不属于这个世界的美味！”Tiki 热带鸡尾酒之王。牙买加陈年朗姆酒的狂野果酯，与欧洽塔杏仁糖浆的坚果奶香、君度橙香与青柠酸完美交融。',
    story: '1944年由加州 Trader Vic 创始人 Victor Bergeron 发明。',
    proTips: ['欧洽塔杏仁糖浆（Orgeat）是迈泰不可替代的灵魂骨架。'],
    image: "https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg",
    ingredients: [
      { name: '牙买加陈酿朗姆酒', nameEn: 'Aged Jamaican Rum', amountMl: 30, amountOz: '1 oz', rawId: 'rum-dark' },
      { name: '马提尼克农业朗姆酒', nameEn: 'Martinique Rum', amountMl: 30, amountOz: '1 oz', rawId: 'rum-white' },
      { name: '君度橙酒', nameEn: 'Cointreau / Orange Curaçao', amountMl: 15, amountOz: '1/2 oz', rawId: 'cointreau' },
      { name: '欧洽塔杏仁糖浆 (Orgeat)', nameEn: 'Orgeat Almond Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'orgeat-syrup' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'fresh-lime-juice' }
    ],
    steps: [
      '在雪克壶中加入双重朗姆酒、橙酒、杏仁糖浆与青柠汁。',
      '加入一大铲碎冰与硬冰剧烈摇荡 10 秒。',
      '将壶中全部冰块与酒液一同倾倒入古典杯中。',
      '补满碎冰至杯顶成山丘状，倒扣青柠壳与薄荷叶。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'sazerac',
    slug: 'sazerac',
    name: '萨泽拉克',
    nameEn: 'Sazerac',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Whiskey',
    baseSpiritZh: '威士忌',
    flavorProfiles: ['烈酒感', '草本系', '辛辣系', '苦系'],
    flavorRadar: { sour: 0, sweet: 2, bitter: 3, strong: 5, fruity: 1, herbal: 5 },
    difficulty: 'advanced',
    difficultyZh: '进阶',
    glass: '古典杯 / Rocks Glass (无冰)',
    garnish: '柠檬皮挤油后弃去',
    ice: '无冰 (双杯仪式)',
    technique: 'Stir',
    techniqueZh: '搅拌 + 苦艾酒润杯法',
    abv: 36,
    description: '新奥尔良的官方鸡尾酒！高度黑麦威士忌的辛辣与贝乔苦精的樱桃茴香，在苦艾酒喷雾润杯的洗礼下，展现出神秘庄严的仪式感。',
    story: '被誉为美国最古老的鸡尾酒，19世纪中叶诞生于新奥尔良。',
    proTips: ['柠檬皮挤完精油后直接丢弃，不放入杯中，避免皮肉苦味干扰苦艾香气。'],
    image: "https://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg",
    ingredients: [
      { name: '黑麦威士忌', nameEn: 'Rye Whiskey', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'whiskey-rye' },
      { name: '贝乔苦精 (Peychaud\'s)', nameEn: 'Peychaud\'s Bitters', amountMl: 2, amountOz: '3 dashes', unit: '滴', rawId: 'peychauds-bitters' },
      { name: '安哥斯图拉苦精', nameEn: 'Angostura Bitters', amountMl: 1, amountOz: '1 dash', unit: '滴', rawId: 'angostura-bitters' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 5, amountOz: '1 tsp', rawId: 'simple-syrup' },
      { name: '苦艾酒 (润杯用)', nameEn: 'Absinthe', amountMl: 5, amountOz: 'Rinse / Spray', unit: '润杯', rawId: 'absinthe' }
    ],
    steps: [
      '在第一只古典杯中加满冰块与冷水预冷。',
      '在搅拌杯中加入糖浆、贝乔苦精、安哥斯图拉苦精与黑麦威士忌加冰搅拌 30 秒。',
      '倒掉第一只杯中的冰水，倒入 5ml 苦艾酒涮杯后倒掉残液。',
      '将搅拌好的酒液直接滤入挂满苦艾香气的古典杯中。',
      '在杯口上方挤压柠檬皮精油后将皮条丢弃。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },

  // ---------------- 4. 果汁与汽水特调系列 (Juice & Soda Highballs) ----------------
  {
    id: 'singapore-sling',
    slug: 'singapore-sling',
    name: '新加坡司令',
    nameEn: 'Singapore Sling',
    category: 'contemporary',
    categoryZh: '当代经典',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['果香系', '甜系', '草本系', '清爽系'],
    flavorRadar: { sour: 3, sweet: 4, bitter: 1, strong: 3, fruity: 5, herbal: 3 },
    difficulty: 'advanced',
    difficultyZh: '进阶',
    glass: '高球杯 / 飓风杯',
    garnish: '新鲜菠萝角与红色黑樱桃',
    ice: '满杯方冰',
    technique: 'Shake',
    techniqueZh: '摇荡 + 苏打水注顶',
    abv: 16,
    description: '热带鸡尾酒的巅峰华彩！金酒与樱桃利口酒、草本廊酒在新鲜菠萝汁的丰厚果泡中交融，最后注入苏打水气泡，宛如新加坡莱佛士酒店的热带晚霞。',
    story: '1915年前后由新加坡莱佛士酒店（Raffles Hotel）Long Bar 的华裔调酒师严崇文（Ngiam Tong Boon）创制，成为享誉全球的百年国饮。',
    proTips: ['新鲜菠萝汁在摇荡后会产生丰厚持久的奶白色泡沫层，必须剧烈摇晃 12 秒。'],
    image: "https://www.thecocktaildb.com/images/media/drink/7dozeg1582578095.jpg",
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 30, amountOz: '1 oz', rawId: 'gin' },
      { name: '希灵樱桃利口酒', nameEn: 'Cherry Heering Liqueur', amountMl: 15, amountOz: '1/2 oz', rawId: 'maraschino' },
      { name: '君度橙酒', nameEn: 'Cointreau', amountMl: 7.5, amountOz: '1/4 oz', rawId: 'cointreau' },
      { name: '法国廊酒 (DOM Bénédictine)', nameEn: 'DOM Bénédictine', amountMl: 7.5, amountOz: '1/4 oz' },
      { name: '纯菠萝汁', nameEn: 'Fresh Pineapple Juice', amountMl: 120, amountOz: '4 oz', rawId: 'pineapple-juice' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' },
      { name: '红石榴糖浆', nameEn: 'Grenadine Syrup', amountMl: 10, amountOz: '1/3 oz', rawId: 'grenadine' },
      { name: '安哥斯图拉苦精', nameEn: 'Angostura Bitters', amountMl: 1, amountOz: '1 dash', unit: '滴', rawId: 'angostura-bitters' },
      { name: '苏打水 (注顶)', nameEn: 'Club Soda', amountMl: 30, amountOz: '1 oz', rawId: 'club-soda' }
    ],
    steps: [
      '在雪克壶中加入金酒、樱桃酒、君度、廊酒、菠萝汁、青柠汁、石榴糖浆与苦精。',
      '加满冰块剧烈摇荡 15 秒打出细腻泡沫。',
      '滤入装满冰块的高球杯或飓风杯中。',
      '注入少量冰镇苏打水轻柔提拉。',
      '在杯边装饰新鲜菠萝角与红樱桃。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'tequila-sunrise',
    slug: 'tequila-sunrise',
    name: '龙舌兰日出',
    nameEn: 'Tequila Sunrise',
    category: 'contemporary',
    categoryZh: '当代经典',
    baseSpirit: 'Tequila',
    baseSpiritZh: '龙舌兰',
    flavorProfiles: ['果香系', '柑橘系', '甜系', '清爽系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 0, strong: 3, fruity: 5, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '半月形橙片与红樱桃',
    ice: '满杯冰块',
    technique: 'Build',
    techniqueZh: '直调 + 沉底分层法 (Layer)',
    abv: 12,
    description: '日出破晓般的梦幻渐变色彩！银龙舌兰的泥土青香融入新鲜甜橙汁的阳光酸甜，高密度的红石榴糖浆沿杯壁缓缓沉底，勾勒出加州海滩的金色日出。',
    story: '1970年代初由加州索萨利托 Trident 酒吧的 Bobby Lozoff 创制，后因滚石乐队（The Rolling Stones）1972年全美巡演时的狂饮推崇而名声大噪。',
    proTips: ['倒入红石榴糖浆时切勿搅拌！让其自然顺着杯壁沉底形成天然渐变日落效果。'],
    image: 'https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg',
    ingredients: [
      { name: '银龙舌兰酒', nameEn: 'Tequila Blanco', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'tequila' },
      { name: '新鲜甜橙汁', nameEn: 'Fresh Orange Juice', amountMl: 90, amountOz: '3 oz', rawId: 'fresh-orange-juice' },
      { name: '红石榴糖浆 (沉底)', nameEn: 'Grenadine Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'grenadine' }
    ],
    steps: [
      '在高球杯中装满冰块。',
      '注入龙舌兰酒与新鲜橙汁，用吧勺轻柔搅拌均匀。',
      '沿杯壁内侧缓慢倒入 15ml 红石榴糖浆，观察其沉入杯底形成渐变日出红晕。',
      '在杯口插上一片半月形橙片与一颗红樱桃。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'cuba-libre',
    slug: 'cuba-libre',
    name: '自由古巴',
    nameEn: 'Cuba Libre',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Rum',
    baseSpiritZh: '朗姆酒',
    flavorProfiles: ['清爽系', '甜系', '柑橘系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 0, strong: 3, fruity: 2, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜青柠角 (挤压后投入杯中)',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '直调法',
    abv: 12,
    description: '“Por Cuba Libre!（为了自由的古巴！）”美西战争时期的胜利欢呼。清冽白朗姆、现压青柠汁与冰镇可口可乐气泡碰撞出最热烈的拉丁狂欢。',
    story: '1900年美西战争胜利后在古巴哈瓦那诞生，美国军官将刚运抵古巴的可口可乐与当地白朗姆酒、青柠混合，举杯高呼自由古巴。',
    proTips: ['青柠角挤完汁水后一定要直接投入杯中，果皮精油在可乐气泡中能释放更丰富的柑橘香气。'],
    image: 'https://www.thecocktaildb.com/images/media/drink/wmkbfj1606853905.jpg',
    ingredients: [
      { name: '古巴白朗姆酒 (或金朗姆)', nameEn: 'White Cuban Rum', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'rum-white' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' },
      { name: '冰镇可口可乐', nameEn: 'Chilled Coca-Cola', amountMl: 120, amountOz: '4 oz', rawId: 'coca-cola' },
      { name: '青柠角', nameEn: 'Lime Wedge', amountMl: 1, amountOz: '1 wedge', unit: '角', rawId: 'fresh-lime-juice' }
    ],
    steps: [
      '在高球杯中加满坚硬方冰。',
      '注入白朗姆酒与新鲜青柠汁。',
      '缓缓注入冰镇可口可乐补满。',
      '用吧勺由底至上轻柔提拉一次混匀。',
      '挤压一块新鲜青柠角后投入杯中点缀。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'bloody-mary',
    slug: 'bloody-mary',
    name: '血腥玛丽',
    nameEn: 'Bloody Mary',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Vodka',
    baseSpiritZh: '伏特加',
    flavorProfiles: ['辛辣系', '果香系', '清爽系'],
    flavorRadar: { sour: 3, sweet: 1, bitter: 1, strong: 3, fruity: 4, herbal: 4 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜西芹茎 (Celery Stalk)、柠檬轮与黑胡椒粒',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '抛接调和法 (Roll / Throwing)',
    abv: 12,
    description: '最负盛名的“解酒灵药（Hangover Cure）”！伏特加在浓郁番茄汁、现榨柠檬汁、李派林喼汁与塔巴斯科辣椒酱的激荡下，展现出鲜美热烈的复合层次。',
    story: '1921年由巴黎 Harry\'s New York Bar 的调酒师 Fernand Petiot 创制，因其鲜红如血的色泽与辛辣冲击而得名。',
    proTips: ['番茄汁黏稠，切勿剧烈摇晃破坏番茄质感！应使用两个调酒杯之间来回“抛接调和（Rolling）”5-6次。'],
    image: 'https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg',
    ingredients: [
      { name: '高纯度伏特加', nameEn: 'Vodka', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'vodka' },
      { name: '纯番茄汁', nameEn: 'Pure Tomato Juice', amountMl: 90, amountOz: '3 oz', rawId: 'tomato-juice' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lemon-juice' },
      { name: '李派林喼汁 (伍斯特辣酱油)', nameEn: 'Worcestershire Sauce', amountMl: 2, amountOz: '2 dashes', unit: '滴' },
      { name: 'Tabasco 辣椒仔酱', nameEn: 'Tabasco Sauce', amountMl: 1, amountOz: '2 drops', unit: '滴' },
      { name: '黑胡椒碎与西芹盐', nameEn: 'Black Pepper & Celery Salt', amountMl: 1, amountOz: '1 pinch', unit: '撮' }
    ],
    steps: [
      '在调酒杯中加入伏特加、番茄汁、柠檬汁、伍斯特酱油、辣椒仔、黑胡椒碎与西芹盐。',
      '加入冰块，用两个调酒杯来回抛接倾倒（Roll）5 次至充分混匀降温。',
      '将酒液与冰块一同倒入高球杯中。',
      '插上一根脆嫩的新鲜西芹茎，杯口挂柠檬轮装饰。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'screwdriver',
    slug: 'screwdriver',
    name: '螺丝起子',
    nameEn: 'Screwdriver',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Vodka',
    baseSpiritZh: '伏特加',
    flavorProfiles: ['果香系', '柑橘系', '清爽系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 0, strong: 3, fruity: 5, herbal: 0 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜橙片 (Orange Slice)',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '直调法',
    abv: 12,
    description: '极简双成分传奇！伏特加的中性纯净完全隐入新鲜甜橙汁的甘甜果酸之中，看似普通橙汁，实则暗藏微醺烈度。',
    story: '20世纪中叶驻扎在波斯湾的美国石油工人在没有调酒棒的情况下，随手拔出工具箱里的螺丝起子（Screwdriver）来搅拌伏特加与橙汁，因而得名。',
    proTips: ['选用现榨甜橙汁过滤掉粗果肉，口感比市售浓缩橙汁顺滑鲜美十倍。'],
    image: 'https://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg',
    ingredients: [
      { name: '伏特加', nameEn: 'Vodka', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'vodka' },
      { name: '新鲜甜橙汁', nameEn: 'Fresh Orange Juice', amountMl: 100, amountOz: '3 1/3 oz', rawId: 'fresh-orange-juice' }
    ],
    steps: [
      '在高球杯中装满冰块。',
      '倒入 50ml 伏特加。',
      '注入 100ml 新鲜甜橙汁。',
      '用吧勺轻柔搅拌混匀，饰以一片新鲜橙片。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'gin-fizz',
    slug: 'gin-fizz',
    name: '经典金菲士',
    nameEn: 'Gin Fizz',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['清爽系', '柑橘系', '草本系', '甜系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 3, fruity: 3, herbal: 4 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / 柯林杯',
    garnish: '柠檬轮片 (Lemon Wheel)',
    ice: '满杯方冰',
    technique: 'Shake',
    techniqueZh: '摇荡 + 苏打水注顶',
    abv: 13,
    description: '清爽碳酸气泡在舌尖跳跃的“嘶嘶（Fizz）”声！金酒的杜松子香在柠檬酸甜摇匀后，被强劲苏打气泡瞬间释放，解渴消暑圣品。',
    story: '1900年代风靡全美的经典菲士系列代表作，是检验金酒酸甜平衡与气泡控制的标杆。',
    proTips: ['摇壶必须加满硬冰剧烈摇荡 10 秒降温，滤入杯中后再注入冷藏苏打水。'],
    image: 'https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg',
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'gin' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 30, amountOz: '1 oz', rawId: 'fresh-lemon-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 10, amountOz: '1/3 oz', rawId: 'simple-syrup' },
      { name: '强气泡苏打水 (注顶)', nameEn: 'Club Soda', amountMl: 80, amountOz: '2 2/3 oz', rawId: 'club-soda' }
    ],
    steps: [
      '在雪克壶中加入金酒、新鲜柠檬汁与单糖浆。',
      '加满冰块剧烈摇荡 10 秒。',
      '滤入装有冰块的高球杯中。',
      '注入冷藏苏打水补满，用吧勺轻提一次，饰以柠檬轮。'
    ],
    isIbaCertified: true,
    ibaCategory: 'The Unforgettables'
  },
  {
    id: 'long-island-iced-tea',
    slug: 'long-island-iced-tea',
    name: '长岛冰茶',
    nameEn: 'Long Island Iced Tea',
    category: 'contemporary',
    categoryZh: '当代经典',
    baseSpirit: 'Vodka',
    baseSpiritZh: '烈酒特调',
    flavorProfiles: ['烈酒感', '柑橘系', '甜系', '清爽系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 5, fruity: 3, herbal: 2 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '柯林杯 / 高球杯',
    garnish: '新鲜柠檬轮 (Lemon Wheel)',
    ice: '满杯冰块',
    technique: 'Build',
    techniqueZh: '摇荡 + 可乐注顶调色',
    abv: 28,
    description: '一杯不含一滴茶、却呈现冰红茶色泽的烈酒核弹！五大烈酒（金、伏、朗、龙、君度）的强劲冲击，在柠檬酸甜与可乐气泡的掩护下顺滑无比。',
    story: '1972年由纽约长岛 Oak Beach Inn 的调酒师 Robert "Rosebud" Butt 创作，迅速风靡全球各大酒吧。',
    proTips: ['可乐只需注入少许（约 20-30ml）用来调出红茶般的琥珀茶色，切忌倒满变成可乐糖水。'],
    image: 'https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg',
    ingredients: [
      { name: '伏特加', nameEn: 'Vodka', amountMl: 15, amountOz: '1/2 oz', rawId: 'vodka' },
      { name: '白朗姆酒', nameEn: 'White Rum', amountMl: 15, amountOz: '1/2 oz', rawId: 'rum-white' },
      { name: '银龙舌兰酒', nameEn: 'Tequila Blanco', amountMl: 15, amountOz: '1/2 oz', rawId: 'tequila' },
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 15, amountOz: '1/2 oz', rawId: 'gin' },
      { name: '君度橙酒 (Triple Sec)', nameEn: 'Cointreau', amountMl: 15, amountOz: '1/2 oz', rawId: 'cointreau' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 25, amountOz: '3/4 oz', rawId: 'fresh-lemon-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 20, amountOz: '2/3 oz', rawId: 'simple-syrup' },
      { name: '冰镇可口可乐 (调色注顶)', nameEn: 'Coca-Cola', amountMl: 30, amountOz: '1 oz', rawId: 'coca-cola' }
    ],
    steps: [
      '在雪克壶中加入五种烈酒、柠檬汁与单糖浆加冰摇匀 10 秒。',
      '滤入装满冰块的高球杯中。',
      '缓缓注入少量冰镇可乐至酒液呈现出红茶色。',
      '用吧勺轻提一次混匀，在杯边挂柠檬轮。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'sex-on-the-beach',
    slug: 'sex-on-the-beach',
    name: '海滩性爱',
    nameEn: 'Sex on the Beach',
    category: 'contemporary',
    categoryZh: '当代经典',
    baseSpirit: 'Vodka',
    baseSpiritZh: '伏特加',
    flavorProfiles: ['果香系', '甜系', '柑橘系', '清爽系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 0, strong: 3, fruity: 5, herbal: 0 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / 飓风杯',
    garnish: '半月形橙片与樱桃',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '直调法 / 摇荡法',
    abv: 12,
    description: '80年代佛罗里达海滩狂欢的招牌甜美特调！伏特加、桃味利口酒融合新鲜橙汁与蔓越莓汁的双重果酸，呈现明媚动人的热带橘红渐变。',
    story: '1987年佛罗伦萨海滩酒吧调酒师 Ted Pizio 为推广桃味利口酒创作，以海滩度假客最向往的元素命名。',
    proTips: ['橙汁与蔓越莓汁等比例搭配，能达到绝佳的酸甜果汁平衡。'],
    image: 'https://www.thecocktaildb.com/images/media/drink/fi67641668420787.jpg',
    ingredients: [
      { name: '伏特加', nameEn: 'Vodka', amountMl: 40, amountOz: '1 1/3 oz', rawId: 'vodka' },
      { name: '桃味利口酒 (Peach Schnapps)', nameEn: 'Peach Schnapps', amountMl: 20, amountOz: '2/3 oz' },
      { name: '新鲜甜橙汁', nameEn: 'Fresh Orange Juice', amountMl: 40, amountOz: '1 1/3 oz', rawId: 'fresh-orange-juice' },
      { name: '蔓越莓汁', nameEn: 'Cranberry Juice', amountMl: 40, amountOz: '1 1/3 oz', rawId: 'cranberry-juice' }
    ],
    steps: [
      '在高球杯中加满冰块。',
      '倒入伏特加、桃味利口酒、橙汁与蔓越莓汁。',
      '用吧勺充分搅拌混匀。',
      '杯口悬挂半月形橙片与红樱桃。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'dark-n-stormy',
    slug: 'dark-n-stormy',
    name: '月黑风高',
    nameEn: 'Dark \'n Stormy',
    category: 'contemporary',
    categoryZh: '当代经典',
    baseSpirit: 'Rum',
    baseSpiritZh: '朗姆酒',
    flavorProfiles: ['辛辣系', '清爽系', '柑橘系', '甜系'],
    flavorRadar: { sour: 2, sweet: 3, bitter: 1, strong: 3, fruity: 2, herbal: 3 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜青柠角 (Lime Wedge)',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '漂浮分层法 (Float)',
    abv: 14,
    description: '百慕大海域的狂暴暴风雨！杯底辛辣金黄的姜汁啤酒上，漂浮着如雷雨乌云般浓黑深沉的陈年黑朗姆，层次分明，视觉极具震撼。',
    story: '百慕大群岛国饮，由 Gosling\'s 黑封朗姆酒与发酵姜汁啤酒搭配诞生，被官方注册为商标。',
    proTips: ['黑朗姆酒一定要最后顺着勺背缓慢淋在冰顶，形成上黑下金的暴风雨乌云分层。'],
    image: 'https://www.thecocktaildb.com/images/media/drink/t1tn0s1504374905.jpg',
    ingredients: [
      { name: '深色黑朗姆酒 (如 Gosling\'s Black Seal)', nameEn: 'Dark Rum', amountMl: 60, amountOz: '2 oz', rawId: 'rum-dark' },
      { name: '辛辣发酵姜汁啤酒 (Ginger Beer)', nameEn: 'Spicy Ginger Beer', amountMl: 100, amountOz: '3 1/3 oz', rawId: 'ginger-beer' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' }
    ],
    steps: [
      '在高球杯中加满冰块。',
      '注入姜汁啤酒与青柠汁搅拌均匀。',
      '将吧勺反贴于酒面，缓缓将 60ml 黑朗姆酒淋在勺背上形成深色悬浮乌云层。',
      '在杯边插上新鲜青柠角。'
    ],
    isIbaCertified: true,
    ibaCategory: 'New Era Drinks'
  },
  {
    id: 'shirley-temple',
    slug: 'shirley-temple',
    name: '秀兰·邓波儿 (无酒精特调)',
    nameEn: 'Shirley Temple (Mocktail)',
    category: 'mocktail',
    categoryZh: '无酒精特调',
    baseSpirit: 'None',
    baseSpiritZh: '无酒精',
    flavorProfiles: ['甜系', '果香系', '清爽系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 0, strong: 0, fruity: 4, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / 柯林杯',
    garnish: '马拉斯奇诺黑樱桃两颗与橙片',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '直调法',
    abv: 0,
    description: '世界最著名的无酒精鸡尾酒（Mocktail）！金黄姜汁汽水与酸甜红石榴糖浆交融出梦幻粉红色泽，全年龄段皆可纯享微醺仪式感。',
    story: '1930年代好莱坞 Chasen\'s 餐厅调酒师专为童星秀兰·邓波儿定制，以便她在成年人派对上也能手持优雅特调饮用。',
    proTips: ['选用天然发酵姜汁汽水，搭配高品质红石榴糖浆，口感清爽而不甜腻。'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Shirley_Temple_cocktail.jpg',
    ingredients: [
      { name: '姜汁汽水 (Ginger Ale)', nameEn: 'Ginger Ale', amountMl: 150, amountOz: '5 oz', rawId: 'ginger-ale' },
      { name: '红石榴糖浆', nameEn: 'Grenadine Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'grenadine' },
      { name: '新鲜青柠汁 (可选提酸)', nameEn: 'Fresh Lime Juice', amountMl: 10, amountOz: '1/3 oz', rawId: 'fresh-lime-juice' },
      { name: '鸡尾酒红樱桃', nameEn: 'Maraschino Cherry', amountMl: 2, amountOz: '2 cherries', unit: '颗', rawId: 'maraschino-cherry' }
    ],
    steps: [
      '在高球杯中加满冰块。',
      '注入姜汁汽水与青柠汁。',
      '缓缓倒入红石榴糖浆，使其自然晕染。',
      '用吧勺轻提一次，在杯顶沉入两颗马拉斯奇诺红樱桃。'
    ],
    isIbaCertified: false
  },
  {
    id: 'virgin-mojito',
    slug: 'virgin-mojito',
    name: '处女莫吉托 (零度无酒精)',
    nameEn: 'Virgin Mojito (Mocktail)',
    category: 'mocktail',
    categoryZh: '无酒精特调',
    baseSpirit: 'None',
    baseSpiritZh: '无酒精',
    flavorProfiles: ['清爽系', '草本系', '柑橘系', '甜系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 0, fruity: 2, herbal: 5 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '拍醒的新鲜薄荷顶芽与青柠角',
    ice: '满杯碎冰',
    technique: 'Muddle',
    techniqueZh: '捣压法',
    abv: 0,
    description: '夏日零度解暑神作！现压新鲜薄荷叶精油与青柠酸爽、单糖浆在碎冰中与苏打水气泡激荡，带来与经典莫吉托无异的清爽冰凉体验。',
    story: '专为驾驶者、孕妇与无酒精爱好者设计的现代清凉特调。',
    proTips: ['轻压薄荷叶即可释放香气，切勿捣烂以免产生苦味。'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/15-09-26-RalfR-WLC-0072.jpg/1280px-15-09-26-RalfR-WLC-0072.jpg',
    ingredients: [
      { name: '新鲜薄荷叶', nameEn: 'Fresh Mint Leaves', amountMl: 10, amountOz: '10-12 leaves', unit: '片', rawId: 'fresh-mint' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 30, amountOz: '1 oz', rawId: 'fresh-lime-juice' },
      { name: '单糖浆 (或蔗糖糖浆)', nameEn: 'Simple Syrup', amountMl: 20, amountOz: '2/3 oz', rawId: 'simple-syrup' },
      { name: '强气泡苏打水', nameEn: 'Club Soda', amountMl: 120, amountOz: '4 oz', rawId: 'club-soda' }
    ],
    steps: [
      '在高球杯中放入薄荷叶、青柠汁与糖浆。',
      '用捣棒轻柔按压薄荷叶 5-6 次。',
      '加满碎冰，倒入苏打水补满。',
      '用吧勺上下提拉混匀。',
      '在冰顶插上拍醒的大簇薄荷顶芽。'
    ],
    isIbaCertified: false
  },
  {
    id: "white-lady",
    slug: "white-lady",
    name: "白色佳人",
    nameEn: "White Lady",
    category: "classic",
    categoryZh: "IBA 难忘经典",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒",
    flavorProfiles: [
      "柑橘系",
      "清爽系",
      "果香系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 2,
      bitter: 1,
      strong: 3,
      fruity: 3,
      herbal: 2
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "碟形香槟杯 / Coupe Glass",
    garnish: "柠檬皮螺旋或杯口抹细糖边",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 26,
    description: "金酒清脆的杜松子与君度橙皮油在鲜柠檬汁的激发下达到极其纯净的酸甜平衡，口感干爽明亮，如身着白裙的优雅名媛。",
    story: "1919年由伦敦传奇调酒师 Harry MacElhone 在 Ciro's 俱乐部创作，后在巴黎 Harry's New York Bar 完善定型为现代经典配方。",
    proTips: [
      "可加入少量蛋清进行 Dry Shake（干摇），使酒体表面形成一层如天鹅绒般细腻洁白的泡沫冠顶。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/jofsaz1504352991.jpg",
    ingredients: [
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 40,
        amountOz: "1 1/3 oz",
        rawId: "gin"
      },
      {
        name: "君度橙酒",
        nameEn: "Cointreau",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "cointreau"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "fresh-lemon-juice"
      }
    ],
    steps: [
      "将碟形香槟杯预冷。",
      "在摇酒壶中加入所有原料及大量硬质方冰。",
      "剧烈摇荡 12-15 秒直至壶壁结霜。",
      "双重过滤（Fine Strain）倒入预冷杯中，喷拭柠檬皮精油。"
    ],
    isIbaCertified: true,
    ibaCategory: "The Unforgettables"
  },
  {
    id: "hanky-panky",
    slug: "hanky-panky",
    name: "汉基帕基",
    nameEn: "Hanky Panky",
    category: "classic",
    categoryZh: "IBA 难忘经典",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒",
    flavorProfiles: [
      "草本系",
      "苦系",
      "烈酒感"
    ],
    flavorRadar: {
      sour: 1,
      sweet: 3,
      bitter: 4,
      strong: 4,
      fruity: 2,
      herbal: 5
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "尼克诺拉杯 / Nick & Nora Glass",
    garnish: "压榨橙皮卷",
    ice: "调和滤冰 (Up)",
    technique: "Stir",
    techniqueZh: "调和法",
    abv: 28,
    description: "金酒与甜红苦艾酒的温润草本中，注入几滴费奈·布兰卡的神秘药草苦韵，瞬间赋予整杯酒摄人心魄的深度与悠长回甘。",
    story: "20世纪初由伦敦萨沃伊酒店（The Savoy）首位女性首席调酒师 Ada Coleman 为演员 Charles Hawtrey 创作，客人品尝后大呼“By Jove, Ada, that is the real hanky-panky!”。",
    proTips: [
      "费奈·布兰卡味道极其浓烈霸道，用量建议控制在 5~7.5ml，以免掩盖金酒的花香。"
    ],
    image: "",
    ingredients: [
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "gin"
      },
      {
        name: "甜红苦艾酒",
        nameEn: "Sweet Vermouth",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "sweet-vermouth"
      },
      {
        name: "费奈·布兰卡苦酒",
        nameEn: "Fernet-Branca",
        amountMl: 7.5,
        amountOz: "1/4 oz",
        rawId: "fernet-branca"
      }
    ],
    steps: [
      "在调酒杯中加入所有原料与足量冰块。",
      "用吧勺匀速顺滑搅拌 30-45 秒直至充分冰镇与适度稀释。",
      "单层过滤倒入预冷的尼克诺拉杯中。",
      "在酒液表面喷挤橙皮精油并将橙皮悬挂杯缘。"
    ],
    isIbaCertified: true,
    ibaCategory: "The Unforgettables"
  },
  {
    id: "martinez",
    slug: "martinez",
    name: "马天尼斯",
    nameEn: "Martinez",
    category: "classic",
    categoryZh: "IBA 难忘经典",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒",
    flavorProfiles: [
      "草本系",
      "甜系",
      "烈酒感"
    ],
    flavorRadar: {
      sour: 1,
      sweet: 3,
      bitter: 3,
      strong: 4,
      fruity: 3,
      herbal: 4
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "尼克诺拉杯 / Nick & Nora Glass",
    garnish: "马拉斯奇诺黑樱桃与柠檬皮卷",
    ice: "调和滤冰 (Up)",
    technique: "Stir",
    techniqueZh: "调和法",
    abv: 30,
    description: "现代干马天尼与曼哈顿的共同始祖！老汤姆金酒的微甜圆润与红苦艾、黑樱桃利口酒交织出层次繁复的维多利亚时代复古芳香。",
    story: "收录于1887年调酒教父 Jerry Thomas 的经典著作，据传是在加州马丁内斯镇为淘金热时期的旅人所创。",
    proTips: [
      "制作正统马天尼斯务必选用老汤姆金酒（Old Tom Gin），其略带甜味的草本感是 Dry Gin 无法完全替代的。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/fs6kiq1513708455.jpg",
    ingredients: [
      {
        name: "老汤姆金酒 (或优质干金酒)",
        nameEn: "Old Tom Gin",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "gin"
      },
      {
        name: "甜红苦艾酒",
        nameEn: "Sweet Vermouth",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "sweet-vermouth"
      },
      {
        name: "马拉斯奇诺黑樱桃利口酒",
        nameEn: "Maraschino Liqueur",
        amountMl: 5,
        amountOz: "1 tsp",
        rawId: "maraschino"
      },
      {
        name: "橙味苦精",
        nameEn: "Orange Bitters",
        amountMl: 2,
        amountOz: "2 dashes",
        unit: "滴",
        rawId: "orange-bitters"
      }
    ],
    steps: [
      "在调酒杯中加入所有配方与大量冰块。",
      "搅拌 30 秒至温度降至接近冰点。",
      "滤入冰镇鸡尾酒杯中。",
      "饰以一颗优质黑樱桃与柠檬皮精油。"
    ],
    isIbaCertified: true,
    ibaCategory: "The Unforgettables"
  },
  {
    id: "ramos-gin-fizz",
    slug: "ramos-gin-fizz",
    name: "拉莫斯金菲士",
    nameEn: "Ramos Gin Fizz",
    category: "classic",
    categoryZh: "IBA 难忘经典",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒",
    flavorProfiles: [
      "奶香系",
      "柑橘系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 0,
      strong: 2,
      fruity: 2,
      herbal: 3
    },
    difficulty: "advanced",
    difficultyZh: "大师级",
    glass: "柯林杯 / Collins Glass",
    garnish: "无（自然升腾立起 2cm 坚挺奶沫柱）",
    ice: "无冰伺服 (Chilled No Ice)",
    technique: "Shake",
    techniqueZh: "超长干摇与湿摇",
    abv: 12,
    description: "调酒界的珠穆朗玛峰！金酒、奶油、蛋清、柑橘与橙花水在极致摇荡下乳化成如舒芙蕾般挺立的丝滑云朵泡沫，口感如丝绒冰淇淋。",
    story: "1888年由 Henry C. Ramos 在新奥尔良 Imperial Cabinet 酒吧发明，当时酒吧雇用数十名“摇酒男孩”接力摇晃12分钟之久。",
    proTips: [
      "先不加冰干摇（Dry Shake）至少1分钟充分乳化蛋白质，加冰湿摇后倒入杯中静置1分钟，再从杯底缓缓注入冰苏打水顶起泡沫柱。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/967t911643844053.jpg",
    ingredients: [
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "gin"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "simple-syrup"
      },
      {
        name: "动物性淡奶油",
        nameEn: "Heavy Cream",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "heavy-cream"
      },
      {
        name: "新鲜蛋清",
        nameEn: "Fresh Egg White",
        amountMl: 30,
        amountOz: "1 egg white",
        rawId: "egg-white"
      },
      {
        name: "天然橙花水",
        nameEn: "Orange Flower Water",
        amountMl: 1,
        amountOz: "3 drops",
        unit: "滴",
        rawId: "orange-flower-water"
      },
      {
        name: "强气泡苏打水",
        nameEn: "Club Soda",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "club-soda"
      }
    ],
    steps: [
      "在摇酒壶中加入金酒、酸汁、糖浆、淡奶油、蛋清和橙花水（先不加冰）。",
      "极高频率干摇 60 秒直至完全乳化细腻发白。",
      "加入满壶方冰，继续高强度摇荡 60 秒至极致冰冷。",
      "滤入未加冰的冰镇柯林杯中，放入冰箱冷藏静置 2 分钟让泡沫凝固。",
      "用吧勺引流，从杯中心缓缓倒入冰苏打水，将蛋白奶沫直立顶出杯口 2 厘米。"
    ],
    isIbaCertified: true,
    ibaCategory: "The Unforgettables"
  },
  {
    id: "vieux-carre",
    slug: "vieux-carre",
    name: "老广场",
    nameEn: "Vieux Carré",
    category: "classic",
    categoryZh: "IBA 难忘经典",
    baseSpirit: "Whiskey",
    baseSpiritZh: "威士忌/白兰地",
    flavorProfiles: [
      "烈酒感",
      "草本系",
      "甜系"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 3,
      bitter: 3,
      strong: 5,
      fruity: 2,
      herbal: 4
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "古典杯 / Rocks Glass",
    garnish: "压榨柠檬皮卷与黑樱桃",
    ice: "整块大方冰",
    technique: "Stir",
    techniqueZh: "调和法",
    abv: 33,
    description: "新奥尔良法式区的灵魂赞歌！黑麦威士忌的辛辣与干邑的圆润在甜苦艾、法国廊酒和双重苦精中融为一体，浑厚深沉，回味无尽。",
    story: "1938年由新奥尔良著名的 Monteleone 酒店旋转酒吧首席调酒师 Walter Bergeron 创作，致敬新奥尔良历史悠久的“老广场（法式区）”。",
    proTips: [
      "贝乔苦精（Peychaud's）与安哥斯图拉苦精（Angostura）各一滴是原版灵魂，缺一不可。"
    ],
    image: "",
    ingredients: [
      {
        name: "黑麦威士忌",
        nameEn: "Rye Whiskey",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "whiskey-rye"
      },
      {
        name: "干邑白兰地",
        nameEn: "Cognac VSOP",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "brandy-cognac"
      },
      {
        name: "甜红苦艾酒",
        nameEn: "Sweet Vermouth",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "sweet-vermouth"
      },
      {
        name: "法国廊酒 (Bénédictine)",
        nameEn: "DOM Bénédictine",
        amountMl: 5,
        amountOz: "1 tsp",
        rawId: "benedictine"
      },
      {
        name: "贝乔苦精",
        nameEn: "Peychaud's Bitters",
        amountMl: 1,
        amountOz: "1 dash",
        unit: "滴",
        rawId: "peychauds-bitters"
      },
      {
        name: "安哥斯图拉苦精",
        nameEn: "Angostura Bitters",
        amountMl: 1,
        amountOz: "1 dash",
        unit: "滴",
        rawId: "angostura-bitters"
      }
    ],
    steps: [
      "在调酒杯中加入所有配料与冰块。",
      "匀速搅拌 35-40 秒直至酒体冰凉且达到理想稀释度。",
      "滤入放有整颗手凿大方冰的古典杯中。",
      "喷挤柠檬皮精油并饰以鸡尾酒黑樱桃。"
    ],
    isIbaCertified: true,
    ibaCategory: "The Unforgettables"
  },
  {
    id: "brandy-alexander",
    slug: "brandy-alexander",
    name: "白兰地亚历山大",
    nameEn: "Brandy Alexander",
    category: "classic",
    categoryZh: "IBA 难忘经典",
    baseSpirit: "Brandy",
    baseSpiritZh: "白兰地",
    flavorProfiles: [
      "奶香系",
      "甜系",
      "烈酒感"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 4,
      bitter: 1,
      strong: 3,
      fruity: 1,
      herbal: 2
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "碟形香槟杯 / Coupe Glass",
    garnish: "现磨肉豆蔻粉 (Fresh Nutmeg)",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 20,
    description: "干邑白兰地的优雅木香与棕可可利口酒、浓郁鲜奶油三者等比例交融，顶层肉豆蔻辛香点缀，如同一杯盛在酒杯中的成人液体巧克力慕斯。",
    story: "起源于20世纪初纽约，早先以金酒制作（Alexander #1），后发展出干邑白兰地版并因披头士约翰·列侬等名流的由衷喜爱而名扬全球。",
    proTips: [
      "杯顶现磨的肉豆蔻粉是这杯酒的嗅觉画龙点睛之笔，切勿使用现成瓶装粉末。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/mlyk1i1606772340.jpg",
    ingredients: [
      {
        name: "干邑白兰地",
        nameEn: "Cognac",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "brandy-cognac"
      },
      {
        name: "棕可可利口酒 (或白可可)",
        nameEn: "Crème de Cacao Brown",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "creme-de-cacao"
      },
      {
        name: "新鲜淡奶油",
        nameEn: "Fresh Heavy Cream",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "heavy-cream"
      }
    ],
    steps: [
      "在摇酒壶中倒入干邑、可可利口酒与新鲜淡奶油。",
      "加满方冰，剧烈摇荡 15 秒使奶油与酒液彻底乳化并迅速冷却。",
      "双重过滤倒入预冷碟形香槟杯。",
      "在奶白色的泡沫表面用刨刀现磨少量新鲜肉豆蔻碎。"
    ],
    isIbaCertified: true,
    ibaCategory: "The Unforgettables"
  },
  {
    id: "between-the-sheets",
    slug: "between-the-sheets",
    name: "床笫之间",
    nameEn: "Between the Sheets",
    category: "classic",
    categoryZh: "IBA 难忘经典",
    baseSpirit: "Brandy",
    baseSpiritZh: "白兰地/朗姆",
    flavorProfiles: [
      "柑橘系",
      "烈酒感",
      "果香系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 2,
      bitter: 0,
      strong: 4,
      fruity: 3,
      herbal: 1
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "马天尼杯 / Martini Glass",
    garnish: "压榨柠檬皮",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 31,
    description: "边车（Sidecar）的热烈升级版！白兰地的醇厚遇上加勒比白朗姆的野性甘甜，君度与柠檬汁穿针引线，酸冽干脆，充满诱惑力。",
    story: "1930年代由巴黎 Harry's New York Bar 的 Harry MacElhone 创作，因其强劲酒力与暧昧动人的名字迅速风靡欧美名流圈。",
    proTips: [
      "选用陈年 3 年以上的优质加勒比白朗姆与 VSOP 干邑，能让果酸与木质调达到天衣无缝的交融。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/of1rj41504348346.jpg",
    ingredients: [
      {
        name: "干邑白兰地",
        nameEn: "Cognac",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "brandy-cognac"
      },
      {
        name: "白朗姆酒",
        nameEn: "White Rum",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "rum-white"
      },
      {
        name: "君度橙酒",
        nameEn: "Cointreau",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "cointreau"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "fresh-lemon-juice"
      }
    ],
    steps: [
      "在摇酒壶中加入所有成分与硬冰块。",
      "有力摇荡 12 秒至壶身凝结厚白霜。",
      "细网双重过滤倒入预冷马天尼杯。",
      "轻喷柠檬皮精油后弃去果皮或扭卷装饰。"
    ],
    isIbaCertified: true,
    ibaCategory: "The Unforgettables"
  },
  {
    id: "rusty-nail",
    slug: "rusty-nail",
    name: "生锈钉",
    nameEn: "Rusty Nail",
    category: "classic",
    categoryZh: "IBA 难忘经典",
    baseSpirit: "Whiskey",
    baseSpiritZh: "威士忌",
    flavorProfiles: [
      "烈酒感",
      "甜系",
      "草本系"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 4,
      bitter: 1,
      strong: 5,
      fruity: 2,
      herbal: 3
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "古典杯 / Rocks Glass",
    garnish: "压榨柠檬皮卷",
    ice: "大块老冰",
    technique: "Build",
    techniqueZh: "直调法 / 调和",
    abv: 38,
    description: "苏格兰威士忌的硬朗麦芽烟熏与杜林标的石楠花蜂蜜、草药香料在冰块融化中逐渐交融，口感甘醇厚实，如铁锈钉子般坚毅深刻。",
    story: "1960年代在纽约著名的 21 俱乐部广受著名好莱坞明星团体“鼠党（Rat Pack）”推崇，成为硬汉威士忌调酒的代名词。",
    proTips: [
      "威士忌与杜林标的经典比例为 2:1 或 3:1，追求更干爽口感可选用泥煤风味苏格兰威士忌。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/yqsvtw1478252982.jpg",
    ingredients: [
      {
        name: "苏格兰调和威士忌",
        nameEn: "Blended Scotch Whisky",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "whiskey-scotch"
      },
      {
        name: "杜林标蜂蜜威士忌利口酒",
        nameEn: "Drambuie",
        amountMl: 25,
        amountOz: "3/4 oz",
        rawId: "drambuie"
      }
    ],
    steps: [
      "在古典杯中放入大块晶莹剔透的老冰。",
      "依序倒入苏格兰威士忌与杜林标利口酒。",
      "用吧勺轻轻搅拌 15 秒使酒液与冰块充分融合。",
      "在杯口喷挤一片柠檬皮精油。"
    ],
    isIbaCertified: true,
    ibaCategory: "The Unforgettables"
  },
  {
    id: "rob-roy",
    slug: "rob-roy",
    name: "罗伯罗伊",
    nameEn: "Rob Roy",
    category: "classic",
    categoryZh: "IBA 难忘经典",
    baseSpirit: "Whiskey",
    baseSpiritZh: "威士忌",
    flavorProfiles: [
      "烈酒感",
      "草本系",
      "苦系"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 3,
      bitter: 3,
      strong: 4,
      fruity: 2,
      herbal: 3
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "尼克诺拉杯 / Nick & Nora Glass",
    garnish: "马拉斯奇诺黑樱桃",
    ice: "调和滤冰 (Up)",
    technique: "Stir",
    techniqueZh: "调和法",
    abv: 31,
    description: "苏格兰版的曼哈顿！以苏格兰威士忌代替美国黑麦威士忌，赋予整杯酒更深沉的石楠花蜜、烟熏橡木与甜红苦艾的华丽草本。",
    story: "1894年纽约华尔道夫酒店调酒师为庆祝同名轻歌剧《罗伯·罗伊》（致敬苏格兰罗宾汉式的民族英雄）首演而创。",
    proTips: [
      "选用带有轻微泥煤烟熏的苏格兰调和威士忌，搭配 Carpano Antica 级高品质甜苦艾，风味尤为惊艳。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/typuyq1439456976.jpg",
    ingredients: [
      {
        name: "苏格兰威士忌",
        nameEn: "Scotch Whisky",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "whiskey-scotch"
      },
      {
        name: "甜红苦艾酒",
        nameEn: "Sweet Vermouth",
        amountMl: 25,
        amountOz: "3/4 oz",
        rawId: "sweet-vermouth"
      },
      {
        name: "安哥斯图拉芳香苦精",
        nameEn: "Angostura Bitters",
        amountMl: 2,
        amountOz: "2 dashes",
        unit: "滴",
        rawId: "angostura-bitters"
      }
    ],
    steps: [
      "在调酒杯中加入苏格兰威士忌、甜红苦艾与苦精。",
      "加满冰块，轻柔平稳搅拌 30 秒。",
      "滤入冰镇的尼克诺拉杯或马天尼杯中。",
      "放入一颗马拉斯奇诺黑樱桃沉底。"
    ],
    isIbaCertified: true,
    ibaCategory: "The Unforgettables"
  },
  {
    id: "blood-and-sand",
    slug: "blood-and-sand",
    name: "血与沙",
    nameEn: "Blood and Sand",
    category: "classic",
    categoryZh: "IBA 难忘经典",
    baseSpirit: "Whiskey",
    baseSpiritZh: "威士忌",
    flavorProfiles: [
      "果香系",
      "甜系",
      "烟熏系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 3,
      bitter: 2,
      strong: 3,
      fruity: 4,
      herbal: 2
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "碟形香槟杯 / Coupe Glass",
    garnish: "压榨橙皮卷",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 22,
    description: "极为罕见的四种原料等比例结构！苏格兰威士忌的泥煤烟熏、樱桃利口酒的深红如血、甜苦艾的草本与鲜橙汁的明媚金沙完美平衡。",
    story: "诞生于1922年，灵感源自鲁道夫·瓦伦蒂诺主演的经典斗牛士无声电影《血与沙》（Blood and Sand）。",
    proTips: [
      "橙汁务必使用新鲜现榨甜橙汁并双重过滤，泥煤威士忌能极大提升层次感。"
    ],
    image: "",
    ingredients: [
      {
        name: "苏格兰威士忌 (带轻度泥煤)",
        nameEn: "Scotch Whisky",
        amountMl: 25,
        amountOz: "3/4 oz",
        rawId: "whiskey-scotch"
      },
      {
        name: "希灵樱桃利口酒 (Cherry Heering)",
        nameEn: "Cherry Heering Liqueur",
        amountMl: 25,
        amountOz: "3/4 oz",
        rawId: "maraschino"
      },
      {
        name: "甜红苦艾酒",
        nameEn: "Sweet Vermouth",
        amountMl: 25,
        amountOz: "3/4 oz",
        rawId: "sweet-vermouth"
      },
      {
        name: "新鲜现榨甜橙汁",
        nameEn: "Fresh Orange Juice",
        amountMl: 25,
        amountOz: "3/4 oz",
        rawId: "fresh-orange-juice"
      }
    ],
    steps: [
      "在摇酒壶中加入四种等比例原料与冰块。",
      "剧烈摇荡 12-15 秒直至充分冷却。",
      "双重过滤倒入预冷的碟形香槟杯中。",
      "在酒液上方挤压橙皮精油后悬于杯缘。"
    ],
    isIbaCertified: true,
    ibaCategory: "The Unforgettables"
  },
  {
    id: "gibson",
    slug: "gibson",
    name: "吉普森",
    nameEn: "Gibson",
    category: "classic",
    categoryZh: "IBA 难忘经典",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒",
    flavorProfiles: [
      "清爽系",
      "烈酒感",
      "草本系"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 0,
      bitter: 2,
      strong: 5,
      fruity: 0,
      herbal: 4
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "马天尼杯 / Martini Glass",
    garnish: "鸡尾酒珍珠洋葱两颗 (Cocktail Onion)",
    ice: "调和滤冰 (Up)",
    technique: "Stir",
    techniqueZh: "调和法",
    abv: 35,
    description: "马天尼家族中最具神秘咸鲜气息的贵族变体！用爽脆微咸的珍珠小洋葱替代橄榄与柠檬皮，带出金酒纯粹凛冽的植物矿物风味。",
    story: "1930年代插画大师 Charles Dana Gibson 在纽约 The Players 俱乐部要求调酒师 Charley Connolly 为他制作一杯与众不同的干马天尼，由此诞生。",
    proTips: [
      "珍珠洋葱的微量盐水浸汁会随着时间渗入酒液中，带来极其微妙的鲜美回甘。"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Gibson_cocktail.jpg/1280px-Gibson_cocktail.jpg",
    ingredients: [
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "gin"
      },
      {
        name: "干苦艾酒",
        nameEn: "Dry Vermouth",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "dry-vermouth"
      },
      {
        name: "鸡尾酒珍珠小洋葱",
        nameEn: "Cocktail Silverskin Onion",
        amountMl: 2,
        amountOz: "2 onions",
        unit: "颗",
        rawId: "cocktail-onion"
      }
    ],
    steps: [
      "在调酒杯中加入干金酒与干苦艾酒。",
      "加入满杯硬质方冰，顺滑搅拌 30 秒至极度冰镇。",
      "滤入冷冻至结霜的马天尼杯中。",
      "用鸡尾酒竹签串入 1~2 颗珍珠洋葱沉入杯底。"
    ],
    isIbaCertified: true,
    ibaCategory: "The Unforgettables"
  },
  {
    id: "corpse-reviver-2",
    slug: "corpse-reviver-2",
    name: "除虫剂2号 / 尸体复活者2号",
    nameEn: "Corpse Reviver #2",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒",
    flavorProfiles: [
      "柑橘系",
      "草本系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 2,
      bitter: 1,
      strong: 3,
      fruity: 3,
      herbal: 4
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "碟形香槟杯 / Coupe Glass",
    garnish: "压榨柠檬皮卷",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "摇荡法与苦艾润杯",
    abv: 26,
    description: "传奇解酒醒脑“回魂酒”！金酒、君度、丽叶白开胃酒与鲜柠檬汁四等分完美平衡，杯壁一层幽微的苦艾酒喷雾带来画龙点睛的八角草本芬芳。",
    story: "1930年由 Harry Craddock 记录于《The Savoy Cocktail Book》，书中名言：“连喝四杯后，连尸体都会重新复活”。",
    proTips: [
      "苦艾酒只需在杯中涮一圈或用喷雾瓶喷洒杯壁即可，过量会掩盖丽叶白的柑橘花香。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/gifgao1513704334.jpg",
    ingredients: [
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "gin"
      },
      {
        name: "君度橙酒",
        nameEn: "Cointreau",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "cointreau"
      },
      {
        name: "丽叶白开胃酒 (Lillet Blanc)",
        nameEn: "Lillet Blanc",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "lillet-blanc"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "苦艾酒 (润杯喷雾)",
        nameEn: "Absinthe",
        amountMl: 2,
        amountOz: "Rinse / Spray",
        unit: "润杯",
        rawId: "absinthe"
      }
    ],
    steps: [
      "在冰镇碟形杯内壁倒入少许苦艾酒转动润杯（或喷雾喷洒）后倒出多余酒液。",
      "在摇酒壶中加入金酒、君度、丽叶白与新鲜柠檬汁。",
      "加满冰块强力摇荡 12 秒。",
      "双重过滤倒入准备好的杯中，喷拭柠檬皮精油。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "vesper-martini",
    slug: "vesper-martini",
    name: "皇家赌场维斯帕马天尼",
    nameEn: "Vesper Martini",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒/伏特加",
    flavorProfiles: [
      "烈酒感",
      "清爽系",
      "草本系"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 1,
      bitter: 2,
      strong: 5,
      fruity: 1,
      herbal: 3
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "碟形香槟杯 / Coupe Glass",
    garnish: "大片柠檬皮螺旋",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "摇荡法 (Shaken, Not Stirred)",
    abv: 38,
    description: "007 詹姆斯·邦德专属定制鸡尾酒！三份金酒、一份伏特加与半份丽叶白，经冰块极速剧烈摇晃，冷冽通透，直击心灵。",
    story: "伊恩·弗莱明在1953年第一部邦德小说《皇家赌场》中创造，邦德以他一生挚爱的双重间谍女主角维斯帕·琳德（Vesper Lynd）为其命名。",
    proTips: [
      "摇荡法会让微小冰晶融入酒体，带来邦德追求的“极冷且如丝绸般薄脆”的独特口感。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/mtdxpa1504374514.jpg",
    ingredients: [
      {
        name: "伦敦干金酒 (如添加利或哥顿)",
        nameEn: "London Dry Gin",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "gin"
      },
      {
        name: "纯净伏特加",
        nameEn: "Vodka",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "vodka"
      },
      {
        name: "丽叶白开胃酒 (Lillet Blanc)",
        nameEn: "Lillet Blanc",
        amountMl: 7.5,
        amountOz: "1/4 oz",
        rawId: "lillet-blanc"
      }
    ],
    steps: [
      "在摇酒壶中注入金酒、伏特加与丽叶白。",
      "加满极冷硬冰块，按邦德要求“极速且用力摇荡直至完全冰透”。",
      "双重过滤倒入深碟形香槟杯中。",
      "削一片宽薄柠檬皮，在酒面上挤出精油后优雅滑入杯中。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "pisco-sour",
    slug: "pisco-sour",
    name: "皮斯科酸",
    nameEn: "Pisco Sour",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Brandy",
    baseSpiritZh: "皮斯科白兰地",
    flavorProfiles: [
      "柑橘系",
      "果香系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 3,
      bitter: 1,
      strong: 3,
      fruity: 4,
      herbal: 1
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "古典杯 / Rocks Glass",
    garnish: "表面点缀 3 滴安哥斯图拉苦精",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "反向双重摇荡法",
    abv: 22,
    description: "秘鲁与智利的南美洲国饮！皮斯科清新的白葡萄与茉莉花香，与鲜青柠汁、蛋清乳化出厚实绵密的云朵泡沫，表面苦精滴点香气高雅。",
    story: "1920年代由美国调酒师 Victor Morris 在秘鲁利马的 Morris Bar 创造，后成为南美最具代表性的全球文化遗产鸡尾酒。",
    proTips: [
      "秘鲁经典黄金比例为 3:1:1（60ml 皮斯科、20ml 青柠汁、20ml 单糖浆），表面滴入3滴苦精可中和蛋清腥气并增添视觉美感。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/tsssur1439907622.jpg",
    ingredients: [
      {
        name: "秘鲁皮斯科白兰地",
        nameEn: "Peruvian Pisco (Quebranta)",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "pisco"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "simple-syrup"
      },
      {
        name: "新鲜蛋清",
        nameEn: "Fresh Egg White",
        amountMl: 20,
        amountOz: "1 egg white",
        rawId: "egg-white"
      },
      {
        name: "安哥斯图拉芳香苦精",
        nameEn: "Angostura Bitters",
        amountMl: 1,
        amountOz: "3 drops",
        unit: "滴",
        rawId: "angostura-bitters"
      }
    ],
    steps: [
      "将皮斯科、青柠汁、糖浆与蛋清倒入摇酒壶中（不加冰）。",
      "干摇 15 秒打发蛋清形成细腻泡沫。",
      "加入大量方冰，强力湿摇 15 秒至极冷。",
      "双重过滤倒入预冷古典杯或笛形杯中。",
      "在顶部奶白色的致密泡沫上，滴下 3 滴安哥斯图拉苦精并用牙签拉花。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "caipirinha",
    slug: "caipirinha",
    name: "卡匹林哈",
    nameEn: "Caipirinha",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Rum",
    baseSpiritZh: "卡夏莎甘蔗酒",
    flavorProfiles: [
      "柑橘系",
      "清爽系",
      "果香系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 3,
      bitter: 1,
      strong: 3,
      fruity: 3,
      herbal: 2
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "古典杯 / Rocks Glass",
    garnish: "压碎青柠块与甘蔗糖棒",
    ice: "满杯碎冰 (Crushed Ice)",
    technique: "Muddle",
    techniqueZh: "捣压压榨法 (Muddle & Build)",
    abv: 25,
    description: "巴西激情与阳光的化身！整颗新鲜青柠块与蔗糖在杯底强力捣压，释放大量天然青柠皮精油与酸爽果汁，倒入卡夏莎与碎冰，原始狂野、鲜活多汁。",
    story: "起源于巴西圣保罗乡村，原本作为预防流感的传统草药饮品，后演化为巴西法定国酒鸡尾酒。",
    proTips: [
      "青柠务必去白瓤切块，用力捣出皮油但不要过度研磨苦皮；使用粗粒原蔗糖（Cane Sugar）风味最地道。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/jgvn7p1582484435.jpg",
    ingredients: [
      {
        name: "巴西卡夏莎甘蔗酒 (Cachaça)",
        nameEn: "Cachaça",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "cachaca"
      },
      {
        name: "新鲜青柠",
        nameEn: "Fresh Lime (cut into wedges)",
        amountMl: 1,
        amountOz: "1 whole lime",
        unit: "整颗",
        rawId: "fresh-lime-juice"
      },
      {
        name: "粗粒白砂糖 (或单糖浆)",
        nameEn: "Cane Sugar",
        amountMl: 15,
        amountOz: "2 tsp",
        unit: "茶匙",
        rawId: "simple-syrup"
      }
    ],
    steps: [
      "将一颗青柠切成 8 瓣小块，放入古典杯底。",
      "加入 2 茶匙细砂糖。",
      "用捣棒（Muddler）用力捣压青柠，挤出全部果汁并充分压出皮油。",
      "在杯中填满碎冰或方冰。",
      "注入 60ml 卡夏莎甘蔗酒，用吧勺自底向上充分搅拌提拉。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "mint-julep",
    slug: "mint-julep",
    name: "薄荷朱利普",
    nameEn: "Mint Julep",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Whiskey",
    baseSpiritZh: "波本威士忌",
    flavorProfiles: [
      "清爽系",
      "烈酒感",
      "甜系"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 3,
      bitter: 0,
      strong: 5,
      fruity: 1,
      herbal: 4
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "铜制马克杯 / Copper Mule Mug",
    garnish: "巨大薄荷枝顶冠与撒糖粉",
    ice: "雪山状压实碎冰 (Packed Crushed Ice)",
    technique: "Muddle",
    techniqueZh: "捣叶调和法",
    abv: 32,
    description: "美国南部贵族与肯塔基德比马术大赛的标志！波本威士忌的焦糖橡木香在冰霜银杯与沁凉鲜薄荷的包裹下散发极致冰爽，杯壁结霜如银雪。",
    story: "18世纪流行于美国弗吉尼亚与肯塔基州，自1938年起成为肯塔基德比大赛（Kentucky Derby）官方指定饮品，每年两天内消耗超12万杯。",
    proTips: [
      "薄荷叶只需轻轻按压萃取精油，不可捣碎叶脉产生苦涩叶绿素；务必将银杯/金属杯搅拌至外壁凝结白霜。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/squyyq1439907312.jpg",
    ingredients: [
      {
        name: "肯塔基波本威士忌",
        nameEn: "Kentucky Straight Bourbon Whiskey",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "whiskey-bourbon"
      },
      {
        name: "新鲜薄荷嫩枝与叶片",
        nameEn: "Fresh Mint Leaves",
        amountMl: 8,
        amountOz: "8-10 leaves",
        unit: "片",
        rawId: "fresh-mint"
      },
      {
        name: "单糖浆 (或细砂糖)",
        nameEn: "Simple Syrup",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "simple-syrup"
      }
    ],
    steps: [
      "在金属 Julep 杯底放入薄荷叶与糖浆。",
      "用吧勺轻柔按压薄荷叶释放芬芳香油。",
      "倒入 30ml 波本威士忌并加入半杯碎冰，快速搅拌。",
      "再注入剩余 30ml 波本威士忌，将碎冰填至高出杯口堆成雪山状。",
      "拍醒一大束新鲜薄荷插在冰顶，在薄荷叶上洒少许糖粉装饰。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "grasshopper",
    slug: "grasshopper",
    name: "绿色蚱蜢",
    nameEn: "Grasshopper",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Liqueur",
    baseSpiritZh: "利口酒",
    flavorProfiles: [
      "奶香系",
      "甜系",
      "草本系"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 5,
      bitter: 0,
      strong: 2,
      fruity: 0,
      herbal: 3
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "碟形香槟杯 / Coupe Glass",
    garnish: "薄荷嫩叶与黑巧克力碎屑",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 16,
    description: "梦幻薄荷绿色的经典甜点鸡尾酒！绿薄荷利口酒的冰凉透彻、白可可利口酒的甜香与鲜奶油交织出如同薄荷巧克力冰淇淋般的醇美滋味。",
    story: "1918年由新奥尔良著名餐厅 Tujague's 的老板 Philip Guichet 创作并在纽约鸡尾酒大赛中获奖。",
    proTips: [
      "三种原料严格按 1:1:1 比例调配，充分剧烈摇荡至奶油完全发泡细腻。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/aqm9el1504369613.jpg",
    ingredients: [
      {
        name: "绿薄荷利口酒",
        nameEn: "Green Crème de Menthe",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "creme-de-menthe"
      },
      {
        name: "白可可利口酒",
        nameEn: "White Crème de Cacao",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "creme-de-cacao"
      },
      {
        name: "新鲜淡奶油",
        nameEn: "Fresh Heavy Cream",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "heavy-cream"
      }
    ],
    steps: [
      "在摇酒壶中倒入绿薄荷酒、白可可酒与新鲜淡奶油。",
      "加满方冰，用力摇荡 15 秒至壶外结满浓霜。",
      "双重过滤倒入冷藏至冰凉的碟形香槟杯。",
      "在翠绿色的泡沫表面点缀一片鲜薄荷叶或薄薄一层可可碎。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "godfather",
    slug: "godfather",
    name: "教父",
    nameEn: "Godfather",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Whiskey",
    baseSpiritZh: "威士忌",
    flavorProfiles: [
      "烈酒感",
      "甜系",
      "烟熏系"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 4,
      bitter: 1,
      strong: 5,
      fruity: 2,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "古典杯 / Rocks Glass",
    garnish: "压榨橙皮（可选）",
    ice: "大块老冰",
    technique: "Build",
    techniqueZh: "直调法",
    abv: 33,
    description: "威士忌的刚毅深沉遇上意大利苦杏仁利口酒的温润杏仁甜香，口感丰满圆滑，余韵悠长，致敬马龙·白兰度在《教父》中的沉稳霸气。",
    story: "1970年代随着同名电影《教父》（The Godfather）问世而风靡全球，据称也是影星马龙·白兰度私下最钟爱的饮品之一。",
    proTips: [
      "经典比例为 1:1 或 2:1，建议使用 50ml 苏格兰/波本威士忌搭配 25ml 迪萨隆诺（Disaronno）杏仁酒以降低过高甜度。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/e5zgao1582582378.jpg",
    ingredients: [
      {
        name: "苏格兰威士忌 (或波本威士忌)",
        nameEn: "Scotch Whisky / Bourbon",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "whiskey-scotch"
      },
      {
        name: "意大利杏仁利口酒 (Amaretto)",
        nameEn: "Amaretto Liqueur",
        amountMl: 25,
        amountOz: "3/4 oz",
        rawId: "amaretto"
      }
    ],
    steps: [
      "在古典杯中放入一块整颗老冰。",
      "倒入威士忌与杏仁利口酒。",
      "用吧勺优雅搅拌 20 秒，让冰块轻柔降温稀释。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "bellini",
    slug: "bellini",
    name: "贝利尼",
    nameEn: "Bellini",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Liqueur",
    baseSpiritZh: "起泡酒",
    flavorProfiles: [
      "果香系",
      "甜系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 4,
      bitter: 0,
      strong: 1,
      fruity: 5,
      herbal: 0
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "笛形香槟杯 / Flute Glass",
    garnish: "新鲜白桃切片",
    ice: "冰镇原料无需加冰",
    technique: "Build",
    techniqueZh: "轻柔直调调和法",
    abv: 8,
    description: "威尼斯浪漫的粉红晨曦！新鲜白桃果泥的柔滑香甜与意大利普罗塞克起泡酒的活泼酸度升腾气泡融为一体，果香细腻无与伦比。",
    story: "1948年由威尼斯著名哈利酒吧（Harry's Bar）创始人 Giuseppe Cipriani 发明，因其独特粉橙色泽令人联想起文艺复兴画家乔瓦尼·贝利尼的画作。",
    proTips: [
      "务必选用新鲜白桃泥（White Peach Puree），倒酒时缓慢顺着杯壁注入起泡酒并用吧勺轻微提拉，避免起泡酒过度溢出。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/eaag491504367543.jpg",
    ingredients: [
      {
        name: "意大利普罗塞克干型起泡酒",
        nameEn: "Prosecco DOC",
        amountMl: 100,
        amountOz: "3 1/3 oz",
        rawId: "prosecco-champagne"
      },
      {
        name: "新鲜白桃果泥",
        nameEn: "Fresh White Peach Puree",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "peach-schnapps"
      }
    ],
    steps: [
      "在冰镇笛形香槟杯中加入 50ml 冷藏白桃果泥。",
      "缓缓倾斜杯身注入 100ml 冰镇普罗塞克起泡酒。",
      "用吧勺轻轻从杯底提拉两次使果泥与气泡酒均匀混合。",
      "杯沿插上一片新鲜白桃薄片装饰。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "mimosa",
    slug: "mimosa",
    name: "含羞草",
    nameEn: "Mimosa / Buck's Fizz",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Liqueur",
    baseSpiritZh: "香槟起泡酒",
    flavorProfiles: [
      "柑橘系",
      "果香系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 0,
      strong: 1,
      fruity: 4,
      herbal: 0
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "笛形香槟杯 / Flute Glass",
    garnish: "新鲜橙片或草莓",
    ice: "纯冰镇伺服",
    technique: "Build",
    techniqueZh: "直调法",
    abv: 6,
    description: "全球早午餐（Brunch）无可争议的首席饮品！新鲜现榨橙汁的酸甜多汁与干型香槟的细腻气泡对半调配，金黄耀眼，如盛开的含羞草花。",
    story: "1925年由巴黎丽兹酒店（Hôtel Ritz Paris）首席调酒师 Frank Meier 创造，以黄色花朵含羞草树命名。",
    proTips: [
      "先倒橙汁后倒香槟，利用碳酸气泡自然对流混合，无需搅拌破坏细腻气泡。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/juhcuu1504370685.jpg",
    ingredients: [
      {
        name: "法国干型香槟 (或普罗塞克)",
        nameEn: "Brut Champagne",
        amountMl: 75,
        amountOz: "2 1/2 oz",
        rawId: "prosecco-champagne"
      },
      {
        name: "新鲜现榨甜橙汁 (过滤无渣)",
        nameEn: "Fresh Squeezed Orange Juice",
        amountMl: 75,
        amountOz: "2 1/2 oz",
        rawId: "fresh-orange-juice"
      }
    ],
    steps: [
      "在冰镇笛形香槟杯中先倒入 75ml 过滤后的冷藏纯橙汁。",
      "缓缓注入 75ml 冰镇干型香槟。",
      "无需搅拌，任由气泡自然上升混合。",
      "在杯缘夹上一片薄橙片装饰。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "aperol-spritz",
    slug: "aperol-spritz",
    name: "阿佩罗斯普利茨",
    nameEn: "Aperol Spritz",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Liqueur",
    baseSpiritZh: "利口酒/起泡酒",
    flavorProfiles: [
      "柑橘系",
      "苦系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 3,
      bitter: 2,
      strong: 1,
      fruity: 3,
      herbal: 2
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "古典杯 / Rocks Glass",
    garnish: "新鲜甜橙半月切片",
    ice: "满杯大方冰",
    technique: "Build",
    techniqueZh: "经典 3-2-1 直调法",
    abv: 11,
    description: "风靡全球的意大利开胃国民酒！3份普罗塞克、2份阿佩罗、1份苏打水，明亮橘红色泽，苦橙草本微苦与气泡清爽在夕阳下绽放。",
    story: "源自奥匈帝国士兵在威尼斯加水饮用葡萄酒的 Spritzen 传统，1950年代与阿佩罗苦酒结合，成为意大利日落时分 Aperitivo 社交文化的灵魂。",
    proTips: [
      "严格遵循“冰块 -> 普罗塞克 -> 阿佩罗 -> 苏打水”的倒酒顺序，能避免苦酒沉底并最大程度保持气泡。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/iloasq1587661955.jpg",
    ingredients: [
      {
        name: "意大利普罗塞克起泡酒",
        nameEn: "Prosecco DOC",
        amountMl: 90,
        amountOz: "3 oz",
        rawId: "prosecco-champagne"
      },
      {
        name: "阿佩罗橙味开胃酒",
        nameEn: "Aperol",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "aperol"
      },
      {
        name: "强气泡苏打水",
        nameEn: "Club Soda",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "club-soda"
      }
    ],
    steps: [
      "在大型大肚葡萄酒杯中加满大块方冰。",
      "先注入 90ml 冰镇普罗塞克起泡酒。",
      "再环形淋入 60ml 阿佩罗开胃酒。",
      "最后注入 30ml 强气泡苏打水。",
      "放入一片新鲜甜橙切片，轻轻提拉一次。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "black-russian",
    slug: "black-russian",
    name: "黑俄罗斯",
    nameEn: "Black Russian",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Vodka",
    baseSpiritZh: "伏特加",
    flavorProfiles: [
      "烈酒感",
      "甜系"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 4,
      bitter: 2,
      strong: 4,
      fruity: 0,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "古典杯 / Rocks Glass",
    garnish: "无或马拉斯奇诺樱桃",
    ice: "整块大方冰",
    technique: "Build",
    techniqueZh: "直调法",
    abv: 30,
    description: "极简主义的醇黑诱惑！高纯度中性伏特加与浓醇甘露咖啡力娇酒 5:2 调配，入口冰凉纯粹，伴随着烘烤咖啡豆与焦糖香草的醇厚余韵。",
    story: "1949年由布鲁塞尔大都会酒店首席调酒师 Gustave Tops 为当时美国驻卢森堡大使 Perle Mesta 特制，正值冷战初期因而得名。",
    proTips: [
      "在杯顶缓缓淋上一层 30ml 新鲜淡奶油（漂浮不搅拌），即变为著名的白俄罗斯（White Russian）。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/8oxlqf1606772765.jpg",
    ingredients: [
      {
        name: "高纯度伏特加",
        nameEn: "Vodka",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "vodka"
      },
      {
        name: "甘露咖啡力娇酒",
        nameEn: "Kahlúa Coffee Liqueur",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "kahlua"
      }
    ],
    steps: [
      "在古典杯中放入大块坚实方冰。",
      "注入伏特加与咖啡力娇酒。",
      "用吧勺轻轻搅拌 15 秒使两者融合降温即可。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "white-russian",
    slug: "white-russian",
    name: "白俄罗斯",
    nameEn: "White Russian",
    category: "contemporary",
    categoryZh: "当代流行经典",
    baseSpirit: "Vodka",
    baseSpiritZh: "伏特加",
    flavorProfiles: [
      "奶香系",
      "甜系",
      "烈酒感"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 4,
      bitter: 1,
      strong: 3,
      fruity: 0,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "古典杯 / Rocks Glass",
    garnish: "表面漂浮 3 颗烘烤咖啡豆",
    ice: "大块老冰",
    technique: "Float",
    techniqueZh: "漂浮分层法 / 调和",
    abv: 22,
    description: "电影《大保龄离奇绑架》（The Big Lebowski）中督爷（The Dude）的标志灵魂之水！黑咖啡的香醇底色上覆着一层如天鹅绒般丝滑的冰凉鲜奶油。",
    story: "诞生于1960年代中期，在黑俄罗斯配方基础上加入稀奶油，因邪典电影主角全天手持饮用而红遍全球。",
    proTips: [
      "淡奶油在倒入前稍加轻摇打至微稠，顺着勺背缓慢淋在冰顶，可形成完美的黑白双色大理石分层。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/vsrupw1472405732.jpg",
    ingredients: [
      {
        name: "纯净伏特加",
        nameEn: "Vodka",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "vodka"
      },
      {
        name: "甘露咖啡力娇酒",
        nameEn: "Kahlúa Coffee Liqueur",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "kahlua"
      },
      {
        name: "新鲜淡奶油 (或全脂牛奶)",
        nameEn: "Fresh Heavy Cream",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "heavy-cream"
      }
    ],
    steps: [
      "在古典杯中加入老冰。",
      "注入伏特加与咖啡力娇酒并简单搅拌。",
      "将吧勺反转贴于液面，缓缓将 30ml 鲜奶油淋在勺背形成顶部白色悬浮奶盖。"
    ],
    isIbaCertified: false
  },
  {
    id: "irish-coffee",
    slug: "irish-coffee",
    name: "爱尔兰咖啡",
    nameEn: "Irish Coffee",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Whiskey",
    baseSpiritZh: "爱尔兰威士忌",
    flavorProfiles: [
      "奶香系",
      "甜系",
      "烈酒感"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 3,
      bitter: 2,
      strong: 3,
      fruity: 1,
      herbal: 2
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "爱尔兰咖啡杯 / Irish Coffee Glass",
    garnish: "现磨肉豆蔻或现打鲜奶油顶",
    ice: "温热饮品 (Hot Drink)",
    technique: "Float",
    techniqueZh: "温热调和与奶油漂浮法",
    abv: 14,
    description: "寒冬与雨夜里最温暖的慰藉！滚烫浓郁的黑咖啡与爱尔兰威士忌、粗红糖融为一体，透过顶部冰凉浓稠的鲜奶油缓缓啜饮，冰与火在舌尖交融。",
    story: "1943年爱尔兰福因斯水上飞机基地厨师 Joe Sheridan 为在风雪中被迫折返的疲惫乘客特调，温暖了无数跨大西洋旅客。",
    proTips: [
      "饮用时切勿搅拌！必须直接大口啜饮，让热咖啡威士忌透过冷奶油层流入唇齿之间。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/sywsqw1439906999.jpg",
    ingredients: [
      {
        name: "爱尔兰威士忌",
        nameEn: "Irish Whiskey",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "whiskey-irish"
      },
      {
        name: "新鲜滚烫滴滤黑咖啡",
        nameEn: "Hot Fresh Filter Coffee",
        amountMl: 120,
        amountOz: "4 oz",
        rawId: "espresso"
      },
      {
        name: "德梅拉拉黄糖或红糖",
        nameEn: "Brown / Demerara Sugar",
        amountMl: 10,
        amountOz: "1 tsp",
        unit: "茶匙",
        rawId: "simple-syrup"
      },
      {
        name: "微打发冰鲜淡奶油",
        nameEn: "Lightly Whipped Heavy Cream",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "heavy-cream"
      }
    ],
    steps: [
      "用热水温热爱尔兰专用玻璃杯后倒出。",
      "在杯中加入热黑咖啡与红糖，搅拌至糖完全融化。",
      "注入爱尔兰威士忌并再次搅拌均匀。",
      "将淡奶油在摇酒壶中轻摇至可流动但浓稠状态。",
      "反贴吧勺，将冰凉奶油缓缓淋在热咖啡表面形成一层厚厚白盖。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "garibaldi",
    slug: "garibaldi",
    name: "加里波第",
    nameEn: "Garibaldi",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Liqueur",
    baseSpiritZh: "金巴利苦酒",
    flavorProfiles: [
      "柑橘系",
      "苦系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 3,
      strong: 1,
      fruity: 4,
      herbal: 2
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜橙轮片",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "蓬松现榨果汁直调法 (Fluffy Juice)",
    abv: 9,
    description: "象征意大利南北统一的传世之作！北方的金巴利苦酒与南方的西西里甜橙，借助高速破壁产生的“蓬松（Fluffy）”云朵橙汁，展现出惊人的果香与细腻绵密口感。",
    story: "以意大利民族统一英雄朱塞佩·加里波第（Giuseppe Garibaldi）命名，纽约著名酒吧 Dante 将其改良为蓬松果汁版后登顶世界最佳酒吧榜首。",
    proTips: [
      "使用高速榨汁机现榨橙汁并立即使用，果汁中饱含的微小空气泡会带来如拿铁奶泡般的轻盈质感。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/ne7re71604179012.jpg",
    ingredients: [
      {
        name: "金巴利苦酒 (Campari)",
        nameEn: "Campari",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "campari"
      },
      {
        name: "高速高速现打蓬松甜橙汁",
        nameEn: "Fluffy Fresh Orange Juice",
        amountMl: 120,
        amountOz: "4 oz",
        rawId: "fresh-orange-juice"
      }
    ],
    steps: [
      "在高球杯中加入方冰。",
      "注入金巴利苦酒。",
      "将新鲜甜橙带皮现切，用高速榨汁机打出充满丰富泡沫的鲜橙汁。",
      "将充满绵密气泡的橙汁直接倾倒入杯顶。",
      "饰以新鲜橙轮片。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "americano",
    slug: "americano",
    name: "美式特调",
    nameEn: "Americano",
    category: "classic",
    categoryZh: "IBA 难忘经典",
    baseSpirit: "Liqueur",
    baseSpiritZh: "金巴利/红苦艾",
    flavorProfiles: [
      "草本系",
      "苦系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 1,
      sweet: 3,
      bitter: 4,
      strong: 1,
      fruity: 2,
      herbal: 4
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "古典杯 / Rocks Glass",
    garnish: "半月橙片与压榨柠檬皮",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "直调法",
    abv: 10,
    description: "尼格罗尼（Negroni）的前身！金巴利与甜红苦艾酒等比例混合，注入清爽强劲的苏打水，草本甘苦与气泡跳跃，是意大利午后最惬意的开胃酒。",
    story: "1860年代由 Gaspare Campari 在米兰的 Caffè Campari 发明，因在禁酒令期间极受旅居欧洲的美国游客欢迎而被称为“美式特调”；也是 007 詹姆斯·邦德在小说中点的第一款鸡尾酒。",
    proTips: [
      "优质的甜红苦艾酒（如 Carpano Antica）与冰镇强气泡苏打水是让这杯低度酒层次跃升的核心。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/709s6m1613655124.jpg",
    ingredients: [
      {
        name: "金巴利苦酒 (Campari)",
        nameEn: "Campari",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "campari"
      },
      {
        name: "甜红苦艾酒",
        nameEn: "Sweet Vermouth",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "sweet-vermouth"
      },
      {
        name: "强气泡苏打水 (注顶)",
        nameEn: "Club Soda",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "club-soda"
      }
    ],
    steps: [
      "在古典杯中装满冰块。",
      "倒入金巴利与甜红苦艾酒。",
      "注入苏打水并用吧勺轻柔提拉一次。",
      "放入一片半月橙片与柠檬皮卷。"
    ],
    isIbaCertified: true,
    ibaCategory: "The Unforgettables"
  },
  {
    id: "paper-plane",
    slug: "paper-plane",
    name: "纸飞机",
    nameEn: "Paper Plane",
    category: "new-era",
    categoryZh: "IBA 新纪元经典",
    baseSpirit: "Whiskey",
    baseSpiritZh: "波本威士忌",
    flavorProfiles: [
      "柑橘系",
      "草本系",
      "苦系",
      "果香系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 3,
      bitter: 2,
      strong: 3,
      fruity: 3,
      herbal: 3
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "碟形香槟杯 / Coupe Glass",
    garnish: "夹在杯缘的小纸飞机（Mini Paper Plane）",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 24,
    description: "21世纪最伟大的现代经典之一！波本威士忌、阿佩罗、诺尼诺草本苦酒与鲜柠檬汁四等分结构，橙红透亮，酸甜草本与木质暖香达成神级平衡。",
    story: "2008年由纽约 Milk & Honey 传奇调酒师 Sam Ross 受 M.I.A. 热门金曲《Paper Planes》启发而创作。",
    proTips: [
      "诺尼诺苦酒（Amaro Nonino）不可用其他苦酒替代，其格拉帕基底赋予了无与伦比的优雅果香。"
    ],
    image: "",
    ingredients: [
      {
        name: "波本威士忌",
        nameEn: "Bourbon Whiskey",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "whiskey-bourbon"
      },
      {
        name: "阿佩罗橙味开胃酒",
        nameEn: "Aperol",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "aperol"
      },
      {
        name: "诺尼诺草本苦酒",
        nameEn: "Amaro Nonino Quintessentia",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "amaro-nonino"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "fresh-lemon-juice"
      }
    ],
    steps: [
      "在摇酒壶中注入四等分原料。",
      "加满方冰，剧烈摇荡 12-15 秒至极度冰镇。",
      "双重过滤倒入预冷碟形香槟杯或尼克诺拉杯中。",
      "用小木夹在杯缘别上一只折叠的小纸飞机。"
    ],
    isIbaCertified: true,
    ibaCategory: "New Era Drinks"
  },
  {
    id: "naked-and-famous",
    slug: "naked-and-famous",
    name: "赤裸与著名",
    nameEn: "Naked and Famous",
    category: "new-era",
    categoryZh: "IBA 新纪元经典",
    baseSpirit: "Tequila",
    baseSpiritZh: "梅斯卡尔烟熏酒",
    flavorProfiles: [
      "烟熏系",
      "柑橘系",
      "草本系",
      "苦系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 3,
      bitter: 2,
      strong: 3,
      fruity: 2,
      herbal: 4
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "碟形香槟杯 / Coupe Glass",
    garnish: "压榨青柠皮",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 25,
    description: "烟熏与草本的狂想交响曲！梅斯卡尔的浓烈炭火泥土香气、黄查特酒的蜂蜜藏红花、阿佩罗的苦橙与鲜青柠汁四等分交织，极具冲击力。",
    story: "2011年由纽约 Death & Co 著名调酒师 Joaquín Simó 创作，他将其形容为“最后之语与纸飞机的私生子”。",
    proTips: [
      "选用手工 Artisanal 级 Espadín 梅斯卡尔，搭配 43度的黄查特酒（Yellow Chartreuse），能碰撞出惊艳的烟熏花蜜香气。"
    ],
    image: "",
    ingredients: [
      {
        name: "梅斯卡尔烟熏酒",
        nameEn: "Mezcal (Espadín)",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "mezcal"
      },
      {
        name: "修道院黄查特酒",
        nameEn: "Yellow Chartreuse",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "chartreuse-yellow"
      },
      {
        name: "阿佩罗橙味开胃酒",
        nameEn: "Aperol",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "aperol"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "fresh-lime-juice"
      }
    ],
    steps: [
      "在摇酒壶中倒入所有等比例原料。",
      "加满冰块，快速强力摇荡 12 秒。",
      "双重过滤倒入预冷碟形杯。"
    ],
    isIbaCertified: true,
    ibaCategory: "New Era Drinks"
  },
  {
    id: "gin-basil-smash",
    slug: "gin-basil-smash",
    name: "金酒罗勒粉碎",
    nameEn: "Gin Basil Smash",
    category: "new-era",
    categoryZh: "现代新经典",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒",
    flavorProfiles: [
      "草本系",
      "清爽系",
      "柑橘系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 0,
      strong: 3,
      fruity: 2,
      herbal: 5
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "古典杯 / Rocks Glass",
    garnish: "拍醒的新鲜罗勒嫩叶枝顶",
    ice: "满杯大方冰",
    technique: "Muddle",
    techniqueZh: "捣叶与强力摇荡法",
    abv: 22,
    description: "风靡欧洲大陆的翠绿奇迹！大把新鲜甜罗勒叶在柠檬汁与糖浆中彻底捣碎，释放出震撼眼球的鲜亮翡翠绿色与扑鼻的地中海草本清香。",
    story: "2008年由德国汉堡 Le Lion 酒吧创始人 Joerg Meyer 发明，迅速席卷全球酒吧，成为21世纪欧洲最成功的现代原创鸡尾酒之一。",
    proTips: [
      "必须毫不吝啬地放入 10-12 片新鲜甜罗勒叶，先与柠檬汁糖浆用力捣压出色，再加冰剧烈摇荡并细网双重过滤。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/jqh2141572807327.jpg",
    ingredients: [
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "gin"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 25,
        amountOz: "3/4 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "simple-syrup"
      },
      {
        name: "新鲜甜罗勒叶",
        nameEn: "Fresh Basil Leaves",
        amountMl: 12,
        amountOz: "10-12 leaves",
        unit: "片",
        rawId: "fresh-basil"
      }
    ],
    steps: [
      "在摇酒壶底放入 10~12 片新鲜罗勒叶与柠檬汁、糖浆。",
      "用捣棒（Muddler）用力捣压，直到萃取出浓郁的深绿色汁液。",
      "倒入 60ml 金酒并加满冰块。",
      "剧烈摇荡 15 秒。",
      "使用细滤网（Fine Strainer）双重过滤倒入装满方冰的古典杯中。",
      "在顶部插上拍醒的翠绿鲜罗勒枝。"
    ],
    isIbaCertified: false
  },
  {
    id: "tommys-margarita",
    slug: "tommys-margarita",
    name: "汤米玛格丽特 / 托米玛格丽特",
    nameEn: "Tommy's Margarita",
    category: "new-era",
    categoryZh: "IBA 新纪元经典",
    baseSpirit: "Tequila",
    baseSpiritZh: "龙舌兰",
    flavorProfiles: [
      "柑橘系",
      "清爽系",
      "果香系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 2,
      bitter: 0,
      strong: 3,
      fruity: 3,
      herbal: 2
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "古典杯 / Rocks Glass",
    garnish: "新鲜青柠角与半圈海盐边",
    ice: "大块方冰",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 24,
    description: "回归龙舌兰本质的现代改良版！去除传统橙酒（君度），直接采用 100% 蓝色龙舌兰蜜（Agave Nectar）作为甜味剂，口感更加纯净、青翠、天然。",
    story: "1990年代初由旧金山 Tommy's Mexican Restaurant 老板 Julio Bermejo 创作，被全球调酒界奉为现代龙舌兰纯粹风味的行业金标。",
    proTips: [
      "选用 100% Blue Agave Reposado（微陈年龙舌兰）能带来更丰满的香草橡木层次。"
    ],
    image: "",
    ingredients: [
      {
        name: "100% 蓝色龙舌兰酒 (Blanco / Reposado)",
        nameEn: "100% Blue Agave Tequila",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "tequila"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "有机龙舌兰蜜 (按 1:1 水稀释)",
        nameEn: "Agave Nectar Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "agave-nectar"
      }
    ],
    steps: [
      "古典杯外缘抹半圈细海盐。",
      "在摇酒壶中加入龙舌兰酒、鲜青柠汁与龙舌兰蜜。",
      "加满冰块强力摇荡 12 秒。",
      "过滤倒入装有大方冰的古典杯中，饰以青柠角。"
    ],
    isIbaCertified: true,
    ibaCategory: "New Era Drinks"
  },
  {
    id: "bramble",
    slug: "bramble",
    name: "黑莓荆棘",
    nameEn: "Bramble",
    category: "new-era",
    categoryZh: "IBA 新纪元经典",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒",
    flavorProfiles: [
      "果香系",
      "柑橘系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 3,
      bitter: 0,
      strong: 3,
      fruity: 5,
      herbal: 2
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "古典杯 / Rocks Glass",
    garnish: "新鲜黑莓两颗与柠檬片",
    ice: "满杯碎冰 (Crushed Ice)",
    technique: "Float",
    techniqueZh: "摇荡滤入与黑莓利口酒淋面",
    abv: 22,
    description: "英国现代鸡尾酒复兴教父 Dick Bradsell 的传世代表作！金酸酒底倒入堆满白雪般碎冰的杯中，顶部淋下深紫红色黑莓利口酒，如雪原荆棘中渗出的深红浆果汁。",
    story: "1984年由 Dick Bradsell 在伦敦著名的 Fred's Club 创作，灵感来自他童年时期在怀特岛采摘野生黑莓的温暖回忆。",
    proTips: [
      "黑莓利口酒一定要在杯中填满碎冰后最后淋在冰顶，让其缓缓向下渗透呈现大理石晕染效果。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg",
    ingredients: [
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "gin"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "simple-syrup"
      },
      {
        name: "黑莓利口酒 (Crème de Mûre)",
        nameEn: "Crème de Mûre",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "creme-de-mure"
      }
    ],
    steps: [
      "在摇酒壶中加入金酒、新鲜柠檬汁与单糖浆。",
      "加冰摇荡 10 秒。",
      "在古典杯中加满碎冰，将酒液过滤倒入杯中。",
      "用吧勺引流，将 15ml 黑莓利口酒缓慢淋在碎冰表面，形成上紫下透的落日渗染效果。",
      "在冰顶插上新鲜黑莓与柠檬片。"
    ],
    isIbaCertified: true,
    ibaCategory: "New Era Drinks"
  },
  {
    id: "trinidad-sour",
    slug: "trinidad-sour",
    name: "特立尼达酸",
    nameEn: "Trinidad Sour",
    category: "new-era",
    categoryZh: "IBA 新纪元经典",
    baseSpirit: "Liqueur",
    baseSpiritZh: "安哥斯图拉苦精基底",
    flavorProfiles: [
      "辛辣系",
      "草本系",
      "苦系",
      "柑橘系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 3,
      bitter: 5,
      strong: 4,
      fruity: 2,
      herbal: 5
    },
    difficulty: "advanced",
    difficultyZh: "大师级",
    glass: "尼克诺拉杯 / Nick & Nora Glass",
    garnish: "无或压榨橙皮",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "强力摇荡法",
    abv: 28,
    description: "打破一切调酒常规的颠覆性神作！罕见地使用整整 45ml 安哥斯图拉苦精作为核心基酒，与杏仁糖浆、鲜柠檬和黑麦威士忌撞击出惊人的肉桂、丁香、坚果与热带草本酸甜。",
    story: "2009年由纽约 Clover Club 著名调酒师 Giuseppe Gonzalez 创造，凭借不可思议的口感震撼全球鸡尾酒界并入选 IBA 官方名录。",
    proTips: [
      "由于苦精含有高浓度天然植物精油，必须使用高品质欧洽塔杏仁糖浆（Orgeat）提供足够的油脂甜度与乳化包裹感。"
    ],
    image: "",
    ingredients: [
      {
        name: "安哥斯图拉芳香苦精 (作为主基酒)",
        nameEn: "Angostura Aromatic Bitters",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "angostura-bitters"
      },
      {
        name: "欧洽塔杏仁糖浆 (Orgeat)",
        nameEn: "Orgeat Almond Syrup",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "orgeat-syrup"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "黑麦威士忌 (100 Proof)",
        nameEn: "Rye Whiskey",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "whiskey-rye"
      }
    ],
    steps: [
      "在摇酒壶中倒入大量安哥斯图拉苦精、杏仁糖浆、柠檬汁与黑麦威士忌。",
      "加入大量方冰，高强度剧烈摇荡 15 秒。",
      "细滤网双重过滤倒入预冷尼克诺拉杯或碟形杯中。"
    ],
    isIbaCertified: true,
    ibaCategory: "New Era Drinks"
  },
  {
    id: "new-york-sour",
    slug: "new-york-sour",
    name: "纽约酸",
    nameEn: "New York Sour",
    category: "new-era",
    categoryZh: "IBA 新纪元经典",
    baseSpirit: "Whiskey",
    baseSpiritZh: "黑麦/波本威士忌",
    flavorProfiles: [
      "果香系",
      "柑橘系",
      "烈酒感"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 3,
      bitter: 1,
      strong: 3,
      fruity: 4,
      herbal: 2
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "古典杯 / Rocks Glass",
    garnish: "红葡萄酒大理石漂浮层与橙皮",
    ice: "大块方冰",
    technique: "Float",
    techniqueZh: "摇荡与干红葡萄酒漂浮",
    abv: 22,
    description: "视觉与味觉的双重盛宴！经典威士忌酸的明亮金黄底层上，优雅漂浮着一层深红宝石色的干红葡萄酒，红酒的单宁果酸与波本的香草甜感层层递进。",
    story: "1880年代由芝加哥调酒师首创（当时称 Continental Sour），在曼哈顿酒吧发扬光大后定名为“纽约酸”。",
    proTips: [
      "漂浮红酒选用酒体饱满、果香浓郁的干红（如西拉 Shiraz、马尔贝克 Malbec 或赤霞珠），顺着勺背轻柔引流。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/61wgch1504882795.jpg",
    ingredients: [
      {
        name: "黑麦威士忌 (或波本威士忌)",
        nameEn: "Rye / Bourbon Whiskey",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "whiskey-rye"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "simple-syrup"
      },
      {
        name: "新鲜蛋清 (可选)",
        nameEn: "Egg White",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "egg-white"
      },
      {
        name: "饱满干红葡萄酒 (漂浮)",
        nameEn: "Fruity Dry Red Wine",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "port-wine"
      }
    ],
    steps: [
      "在摇酒壶中加入威士忌、柠檬汁与糖浆（若加蛋清可先干摇）。",
      "加满冰块强力摇荡 12 秒。",
      "过滤倒入装有单颗大方冰的古典杯中。",
      "将吧勺反转贴于酒面，缓缓将 15ml 红葡萄酒淋在勺背上形成清晰漂浮分层。"
    ],
    isIbaCertified: true,
    ibaCategory: "New Era Drinks"
  },
  {
    id: "porn-star-martini",
    slug: "porn-star-martini",
    name: "激情马天尼 / 明星马天尼",
    nameEn: "Porn Star Martini",
    category: "new-era",
    categoryZh: "当代全球销量冠军",
    baseSpirit: "Vodka",
    baseSpiritZh: "香草伏特加",
    flavorProfiles: [
      "果香系",
      "甜系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 4,
      bitter: 0,
      strong: 2,
      fruity: 5,
      herbal: 0
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "碟形香槟杯 / Coupe Glass",
    garnish: "半颗漂浮的新鲜百香果与侧边附送的一口干型香槟 (Side shot of Champagne)",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "摇荡法与边射起泡酒伺服",
    abv: 16,
    description: "近二十年来全球英国及欧洲酒吧销量第一的现代超级现象级特调！香草伏特加、百香果利口酒与纯果泥摇出丝绒金黄酒液，搭配一旁冰镇清脆的起泡酒，奢华狂欢。",
    story: "2002年由伦敦著名调酒师 Douglas Ankrah 在 LAB 酒吧创造，他认为这款酒集性感、优雅、自信与狂热于一身。",
    proTips: [
      "正确喝法：先用勺子吃掉浮在酒面的半颗百香果，喝一口浓郁的马天尼，再啜饮一口清脆干冽的香槟清理味蕾。"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Porn_star_martini_cocktail.jpg/1280px-Porn_star_martini_cocktail.jpg",
    ingredients: [
      {
        name: "香草风味伏特加 (Vanilla Vodka)",
        nameEn: "Vanilla Vodka",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "vodka"
      },
      {
        name: "百香果利口酒 (Passoã)",
        nameEn: "Passoã Passion Fruit Liqueur",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "passoa"
      },
      {
        name: "新鲜百香果泥 / 纯果汁",
        nameEn: "Passion Fruit Puree",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "passion-fruit-juice"
      },
      {
        name: "香草糖浆 (或单糖浆)",
        nameEn: "Vanilla Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "simple-syrup"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "冰镇干型香槟 (分杯侧饮)",
        nameEn: "Chilled Brut Champagne",
        amountMl: 50,
        amountOz: "Side Shot (1.5 oz)",
        rawId: "prosecco-champagne"
      }
    ],
    steps: [
      "在摇酒壶中倒入香草伏特加、百香果利口酒、百香果泥、青柠汁与香草糖浆。",
      "加满硬冰块强力摇晃 15 秒至极致起泡。",
      "双重过滤倒入预冷碟形香槟杯。",
      "将半颗切开的新鲜百香果漂浮在酒液中央。",
      "在旁边的 Shot 杯中倒入 50ml 冰镇香槟一同端上。"
    ],
    isIbaCertified: false
  },
  {
    id: "white-negroni",
    slug: "white-negroni",
    name: "白尼格罗尼",
    nameEn: "White Negroni",
    category: "new-era",
    categoryZh: "当代经典",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒",
    flavorProfiles: [
      "草本系",
      "苦系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 2,
      bitter: 4,
      strong: 4,
      fruity: 2,
      herbal: 5
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "古典杯 / Rocks Glass",
    garnish: "压榨西柚皮卷 (Grapefruit Twist)",
    ice: "大块老冰",
    technique: "Stir",
    techniqueZh: "调和法",
    abv: 28,
    description: "尼格罗尼在21世纪最优雅的法式重生！以亮黄色的法国苏兹龙胆草利口酒替代金巴利，以丽叶白开胃酒替代甜红苦艾，草本明亮通透，清爽微苦。",
    story: "2001年由英国调酒师 Wayne Collins 在法国波尔多 Vinexpo 展会期间即兴创作，如今已成为全球顶级鸡尾酒吧的常备金标。",
    proTips: [
      "西柚皮的清脆柑橘精油与苏兹龙胆草的泥土草本苦味是绝配，用西柚皮代替橙皮风味更惊艳。"
    ],
    image: "",
    ingredients: [
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 40,
        amountOz: "1 1/3 oz",
        rawId: "gin"
      },
      {
        name: "丽叶白开胃酒 (Lillet Blanc)",
        nameEn: "Lillet Blanc",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "lillet-blanc"
      },
      {
        name: "苏兹龙胆草利口酒 (Suze)",
        nameEn: "Suze Gentian Liqueur",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "suze"
      }
    ],
    steps: [
      "在调酒杯中加入金酒、丽叶白与苏兹苦酒。",
      "加入满杯硬冰块，匀速搅拌 30 秒。",
      "滤入放有大块老冰的古典杯中。",
      "喷挤新鲜西柚皮精油后投入杯中。"
    ],
    isIbaCertified: false
  },
  {
    id: "zombie",
    slug: "zombie",
    name: "僵尸",
    nameEn: "Zombie",
    category: "classic",
    categoryZh: "Tiki 传世殿堂",
    baseSpirit: "Rum",
    baseSpiritZh: "多重朗姆酒",
    flavorProfiles: [
      "烈酒感",
      "果香系",
      "辛辣系",
      "柑橘系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 4,
      bitter: 1,
      strong: 5,
      fruity: 5,
      herbal: 3
    },
    difficulty: "advanced",
    difficultyZh: "大师级",
    glass: "柯林杯 / Collins Glass",
    garnish: "薄荷大树冠、凤梨叶、肉桂棒与点火青柠壳",
    ice: "满杯碎冰 (Crushed Ice)",
    technique: "Shake",
    techniqueZh: "高强度摇荡与碎冰堆叠",
    abv: 35,
    description: "Tiki 文化的终极狂暴巨作！三种加勒比朗姆酒（含超高度69%火酒）、法勒南香料糖浆、红石榴与苦艾酒精密调配，浓烈狂野，被称为“每人限饮两杯的禁忌之酒”。",
    story: "1934年由 Tiki 文化鼻祖 Don the Beachcomber（唐·埃尔文）在好莱坞酒吧创造，相传一位宿醉客人喝下后声称“自己感觉像个行尸走肉（Zombie）”。",
    proTips: [
      "融合牙买加高酯朗姆、波多黎各金朗姆与超高度朗姆，搭配一滴苦艾酒与肉桂糖浆，是唐纳德的无价秘方。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/2en3jk1509557725.jpg",
    ingredients: [
      {
        name: "牙买加深色陈年朗姆",
        nameEn: "Aged Jamaican Dark Rum",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "rum-dark"
      },
      {
        name: "波多黎各金色朗姆酒",
        nameEn: "Gold Puerto Rican Rum",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "rum-white"
      },
      {
        name: "超高度深色朗姆酒 (69%-75.5%)",
        nameEn: "Overproof Rum (Plantation OFTD / 151)",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "rum-overproof"
      },
      {
        name: "法勒南风味香料糖浆 (Falernum)",
        nameEn: "Velvet Falernum",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "falernum"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "西柚汁与肉桂糖浆复合液 (Donn's Mix)",
        nameEn: "Grapefruit Juice & Cinnamon Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "grapefruit-juice"
      },
      {
        name: "红石榴糖浆",
        nameEn: "Grenadine Syrup",
        amountMl: 10,
        amountOz: "1 tsp",
        rawId: "grenadine"
      },
      {
        name: "苦艾酒 / 绿仙子",
        nameEn: "Absinthe",
        amountMl: 1,
        amountOz: "2 drops",
        unit: "滴",
        rawId: "absinthe"
      },
      {
        name: "安哥斯图拉苦精",
        nameEn: "Angostura Bitters",
        amountMl: 1,
        amountOz: "1 dash",
        unit: "滴",
        rawId: "angostura-bitters"
      }
    ],
    steps: [
      "将除超高度朗姆外的所有原料倒入摇酒壶，加入 170g 碎冰。",
      "极速强力摇荡 10 秒。",
      "连同碎冰一同倒入高大的 Tiki 马克杯或柯林杯中。",
      "在杯顶额外加满碎冰，缓缓淋入超高度朗姆酒作为顶部火引。",
      "拍醒一大束鲜薄荷插在冰顶，插上凤梨角与肉桂棒。"
    ],
    isIbaCertified: true,
    ibaCategory: "New Era Drinks"
  },
  {
    id: "jungle-bird",
    slug: "jungle-bird",
    name: "丛林鸟",
    nameEn: "Jungle Bird",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Rum",
    baseSpiritZh: "深色黑朗姆",
    flavorProfiles: [
      "苦系",
      "果香系",
      "果香系",
      "草本系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 3,
      strong: 3,
      fruity: 4,
      herbal: 3
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "古典杯 / Rocks Glass",
    garnish: "新鲜菠萝角与三片菠萝叶（如同鸟尾羽毛）",
    ice: "满杯方冰或碎冰",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 20,
    description: "打破 Tiki 甜腻传统的划时代杰作！牙买加黑朗姆的浓郁糖蜜熟果香，与意大利金巴利苦酒的深沉苦韵在新鲜菠萝汁的丰盈泡沫中达成神妙平衡。",
    story: "1973年诞生于马来西亚吉隆坡希尔顿酒店的 Aviary Bar（鸟舍酒吧），作为宾客入住的欢迎特调，透过玻璃窗即可欣赏花园中的百鸟争鸣。",
    proTips: [
      "选用重风味的 Blackstrap 糖蜜黑朗姆酒（如 Gosling's 或 Cruzan），鲜菠萝汁必须用力摇荡出细腻丰满的泡沫层。"
    ],
    image: "",
    ingredients: [
      {
        name: "深色黑朗姆酒 (Blackstrap / Jamaican Dark)",
        nameEn: "Dark Rum",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "rum-dark"
      },
      {
        name: "金巴利苦酒 (Campari)",
        nameEn: "Campari",
        amountMl: 22.5,
        amountOz: "3/4 oz",
        rawId: "campari"
      },
      {
        name: "新鲜菠萝汁",
        nameEn: "Fresh Pineapple Juice",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "pineapple-juice"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "粗糖浆 (Demerara 2:1)",
        nameEn: "Demerara Rich Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "simple-syrup"
      }
    ],
    steps: [
      "在摇酒壶中倒入所有配料与满杯方冰。",
      "剧烈摇晃 15 秒让菠萝汁产生细腻丰满的泡沫。",
      "过滤倒入装满方冰的古典杯或 Tiki 杯中。",
      "在杯缘斜插一块厚切菠萝角与三片挺立的菠萝叶羽冠。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "painkiller",
    slug: "painkiller",
    name: "止痛药",
    nameEn: "Painkiller",
    category: "contemporary",
    categoryZh: "Tiki 海岛传奇",
    baseSpirit: "Rum",
    baseSpiritZh: "海军朗姆酒",
    flavorProfiles: [
      "奶香系",
      "果香系",
      "甜系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 4,
      bitter: 0,
      strong: 3,
      fruity: 5,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "飓风杯 / Hurricane Glass",
    garnish: "厚厚现磨肉豆蔻粉、菠萝切片与樱桃",
    ice: "满杯碎冰 (Crushed Ice)",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 18,
    description: "加勒比海浪与椰风树影的终极写照！深色海军朗姆酒与浓缩椰浆、纯菠萝汁、甜橙汁完美乳化，顶层现磨肉豆蔻辛香扑鼻，治愈一切烦恼。",
    story: "1970年代诞生于英属维尔京群岛约斯特范代克岛上的 Soggy Dollar Bar（湿币酒吧，因客人必须游水上岸弄湿钱包而得名），后被 Pusser's 朗姆酒注册为商标。",
    proTips: [
      "椰子奶油务必使用 Coco López 调酒专用浓缩椰浆，顶层现磨的肉豆蔻粉是这杯酒灵魂级别的嗅觉开关。"
    ],
    image: "",
    ingredients: [
      {
        name: "深色加勒比海军朗姆酒 (如 Pusser's)",
        nameEn: "Navy Dark Rum",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "rum-dark"
      },
      {
        name: "纯菠萝汁",
        nameEn: "Pineapple Juice",
        amountMl: 120,
        amountOz: "4 oz",
        rawId: "pineapple-juice"
      },
      {
        name: "新鲜甜橙汁",
        nameEn: "Fresh Orange Juice",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "fresh-orange-juice"
      },
      {
        name: "浓缩椰子奶油 (Cream of Coconut)",
        nameEn: "Cream of Coconut (Coco López)",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "coconut-cream"
      }
    ],
    steps: [
      "在摇酒壶中倒入朗姆酒、菠萝汁、橙汁与椰子奶油。",
      "加入冰块用力摇晃 15 秒至彻底乳化。",
      "倒入填满碎冰的飓风杯或高球杯中。",
      "在表面大面积现磨新鲜肉豆蔻碎屑，饰以凤梨角。"
    ],
    isIbaCertified: false
  },
  {
    id: "hurricane",
    slug: "hurricane",
    name: "飓风",
    nameEn: "Hurricane",
    category: "contemporary",
    categoryZh: "新奥尔良狂欢节传奇",
    baseSpirit: "Rum",
    baseSpiritZh: "深浅朗姆酒",
    flavorProfiles: [
      "果香系",
      "柑橘系",
      "甜系",
      "烈酒感"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 4,
      bitter: 0,
      strong: 4,
      fruity: 5,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "飓风杯 / Hurricane Glass",
    garnish: "新鲜橙轮片与鸡尾酒红樱桃",
    ice: "满杯碎冰 (Crushed Ice)",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 22,
    description: "新奥尔良狂欢节（Mardi Gras）的狂暴代名词！深色黑朗姆与白朗姆的强劲酒力被浓郁酸甜的百香果泥、甜橙汁与红石榴糖浆完美包裹，盛在形似防风煤油灯的飓风杯中。",
    story: "二战期间由于威士忌短缺，新奥尔良著名酒吧 Pat O'Brien's 老板为消耗大量强制配给的朗姆酒而创作，如今每年狂欢节售出数以万计。",
    proTips: [
      "使用真正的新鲜百香果泥而非人工糖浆，能带来纯正爆汁的热带果香与极富穿透力的清爽果酸。"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Hurricane_at_Pat_O%27Brien%27s.JPG/1280px-Hurricane_at_Pat_O%27Brien%27s.JPG",
    ingredients: [
      {
        name: "深色黑朗姆酒",
        nameEn: "Dark Rum",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "rum-dark"
      },
      {
        name: "加勒比白朗姆酒",
        nameEn: "White Rum",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "rum-white"
      },
      {
        name: "百香果汁 / 百香果泥",
        nameEn: "Passion Fruit Juice / Puree",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "passion-fruit-juice"
      },
      {
        name: "新鲜甜橙汁",
        nameEn: "Fresh Orange Juice",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "fresh-orange-juice"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "simple-syrup"
      },
      {
        name: "红石榴糖浆",
        nameEn: "Grenadine Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "grenadine"
      }
    ],
    steps: [
      "在摇酒壶中注入双重朗姆酒、百香果泥、橙汁、青柠汁、单糖浆与红石榴糖浆。",
      "加满冰块强力摇荡 12 秒。",
      "在飓风杯中加满碎冰，过滤倒入酒液。",
      "饰以新鲜橙片与红樱桃。"
    ],
    isIbaCertified: false
  },
  {
    id: "oaxaca-old-fashioned",
    slug: "oaxaca-old-fashioned",
    name: "瓦哈卡老式",
    nameEn: "Oaxaca Old Fashioned",
    category: "master",
    categoryZh: "现代大师招牌",
    baseSpirit: "Tequila",
    baseSpiritZh: "龙舌兰/梅斯卡尔",
    flavorProfiles: [
      "烟熏系",
      "烈酒感",
      "草本系",
      "甜系"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 2,
      bitter: 2,
      strong: 5,
      fruity: 2,
      herbal: 4
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "古典杯 / Rocks Glass",
    garnish: "火烤喷香橙皮 (Flamed Orange Peel)",
    ice: "整块手凿老方冰",
    technique: "Stir",
    techniqueZh: "调和法",
    abv: 35,
    description: "重新定义现代龙舌兰调酒的划时代之作！微陈 Reposado 龙舌兰的香草橡木遇上瓦哈卡梅斯卡尔的高贵炭火烟熏，在龙舌兰蜜与苦精的烘托下层次登峰造极。",
    story: "2007年由纽约 Death & Co 传奇调酒大师 Phil Ward 创作，开启了全球鸡尾酒吧将梅斯卡尔引入经典框架的伟大风潮。",
    proTips: [
      "在点缀橙皮时，用火机加热橙皮外侧并向杯中挤压皮油，火焰引燃橙油雾气落在冰块上，赋予焦糖橙香。"
    ],
    image: "",
    ingredients: [
      {
        name: "微陈龙舌兰酒 (Reposado Tequila)",
        nameEn: "Reposado Tequila",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "tequila"
      },
      {
        name: "瓦哈卡烟熏梅斯卡尔酒 (Mezcal)",
        nameEn: "Mezcal",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "mezcal"
      },
      {
        name: "有机龙舌兰蜜糖浆 (2:1)",
        nameEn: "Agave Nectar",
        amountMl: 5,
        amountOz: "1 tsp",
        rawId: "agave-nectar"
      },
      {
        name: "安哥斯图拉芳香苦精",
        nameEn: "Angostura Bitters",
        amountMl: 2,
        amountOz: "2 dashes",
        unit: "滴",
        rawId: "angostura-bitters"
      }
    ],
    steps: [
      "在古典杯中加入龙舌兰蜜与苦精。",
      "注入微陈龙舌兰与梅斯卡尔酒。",
      "放入大块老冰，用吧勺顺滑搅拌 30 秒。",
      "取大片新鲜橙皮，点燃打火机从上方挤压喷出橙油火焰，将烤香果皮投入杯中。"
    ],
    isIbaCertified: false,
    masterInfo: {
      name: "Phil Ward",
      quote: "用梅斯卡尔的烟熏灵魂赋予古典鸡尾酒现代重生的力量。",
      bar: "Death & Co / Mayahuel (纽约)"
    }
  },
  {
    id: "speak-low",
    slug: "speak-low",
    name: "低声细语",
    nameEn: "Speak Low",
    category: "competition",
    categoryZh: "世界冠军传世作",
    baseSpirit: "Rum",
    baseSpiritZh: "朗姆酒/雪莉酒",
    flavorProfiles: [
      "草本系",
      "烟熏系",
      "果香系",
      "甜系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 3,
      bitter: 2,
      strong: 3,
      fruity: 2,
      herbal: 5
    },
    difficulty: "advanced",
    difficultyZh: "大师级",
    glass: "古典杯 / Rocks Glass",
    garnish: "现筛日本宇治抹茶粉与柚子皮精油",
    ice: "大块老方冰",
    technique: "Shake",
    techniqueZh: "茶道点茶与摇荡法",
    abv: 22,
    description: "2012 Bacardi Legacy 全球冠军传世酒单！后闲信吾将祖母的日本茶道仪式融入加勒比白朗姆、深色陈酿朗姆与干型菲诺雪莉酒，抹茶的微苦回甘与柚香完美交织。",
    story: "2012年由后闲信吾（Shingo Gokan）代表纽约 Angel's Share 参赛并斩获百加得传世鸡尾酒大赛全球总冠军，后成为其在上海创立的亚洲第一酒吧 Speak Low 的同名灵魂酒款。",
    proTips: [
      "选用日本顶级宇治抹茶粉，先用少量酒液与茶筅化开无颗粒，再加冰剧烈摇荡融合。"
    ],
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1000&q=80",
    ingredients: [
      {
        name: "百加得白朗姆酒",
        nameEn: "Bacardí Carta Blanca",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "rum-white"
      },
      {
        name: "百加得8年陈酿朗姆酒",
        nameEn: "Bacardí 8 Años Dark Rum",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "rum-dark"
      },
      {
        name: "西班牙菲诺雪莉酒 (Fino Sherry)",
        nameEn: "Fino Sherry",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "sherry-fino"
      },
      {
        name: "日本宇治高级抹茶粉",
        nameEn: "Uji Matcha Green Tea Powder",
        amountMl: 3,
        amountOz: "1 tsp",
        unit: "茶匙"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "simple-syrup"
      }
    ],
    steps: [
      "在摇酒壶底放入 1 茶匙高品质抹茶粉与糖浆、少量白朗姆酒。",
      "用茶筅或吧勺将其彻底打散搅匀至无结块。",
      "加入陈酿黑朗姆、菲诺雪莉酒与大量方冰。",
      "剧烈摇晃 15 秒至极冷并乳化。",
      "细网双重过滤倒入放有手凿老冰的古典杯中。",
      "在冰块表面微筛少量抹茶粉，喷拭日本柚子皮精油。"
    ],
    isIbaCertified: false,
    competitionInfo: {
      name: "Bacardi Legacy Global Cocktail Competition",
      year: 2012,
      award: "Global Champion (全球总冠军)",
      bartender: "后闲信吾 (Shingo Gokan)",
      country: "Japan / USA"
    }
  },
  {
    id: "bamboo",
    slug: "bamboo",
    name: "竹子",
    nameEn: "Bamboo",
    category: "classic",
    categoryZh: "日式调酒始祖",
    baseSpirit: "Liqueur",
    baseSpiritZh: "雪莉酒/苦艾酒",
    flavorProfiles: [
      "草本系",
      "清爽系",
      "果香系"
    ],
    flavorRadar: {
      sour: 1,
      sweet: 2,
      bitter: 2,
      strong: 2,
      fruity: 2,
      herbal: 4
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "尼克诺拉杯 / Nick & Nora Glass",
    garnish: "压榨柠檬皮卷",
    ice: "调和滤冰 (Up)",
    technique: "Stir",
    techniqueZh: "调和法",
    abv: 16,
    description: "日式鸡尾酒历史的开山之作！菲诺雪莉酒的酵母海风与干苦艾酒的优雅草本等比例调和，伴随橙味苦精的轻盈点缀，清透干爽，低酒精度却韵味深长。",
    story: "1890年代由横滨大酒店（Grand Hotel Yokohama）传奇德籍调酒师 Louis Eppinger 创造，成为亚洲调酒史上第一款享誉世界的传世鸡尾酒。",
    proTips: [
      "必须使用极新鲜的干型菲诺雪莉酒（Fino Sherry）与冷藏干苦艾酒，平稳顺滑搅拌30秒。"
    ],
    image: "",
    ingredients: [
      {
        name: "干型菲诺雪莉酒 (Fino Sherry)",
        nameEn: "Fino Sherry",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "sherry-fino"
      },
      {
        name: "干苦艾酒 (Dry Vermouth)",
        nameEn: "Dry Vermouth",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "dry-vermouth"
      },
      {
        name: "橙味苦精",
        nameEn: "Orange Bitters",
        amountMl: 2,
        amountOz: "2 dashes",
        unit: "滴",
        rawId: "orange-bitters"
      },
      {
        name: "安哥斯图拉芳香苦精",
        nameEn: "Angostura Bitters",
        amountMl: 1,
        amountOz: "1 dash",
        unit: "滴",
        rawId: "angostura-bitters"
      }
    ],
    steps: [
      "在调酒杯中加入菲诺雪莉酒、干苦艾酒与双重苦精。",
      "加满冰块，匀速搅拌 30 秒。",
      "滤入冰镇的尼克诺拉杯中。",
      "在酒液表面喷挤柠檬皮精油。"
    ],
    isIbaCertified: false
  },
  {
    id: "b-52",
    slug: "b-52",
    name: "B-52 轰炸机",
    nameEn: "B-52 Layered Shot",
    category: "contemporary",
    categoryZh: "经典分层短饮",
    baseSpirit: "Liqueur",
    baseSpiritZh: "三重利口酒",
    flavorProfiles: [
      "甜系",
      "奶香系",
      "柑橘系"
    ],
    flavorRadar: {
      sour: 0,
      sweet: 5,
      bitter: 1,
      strong: 3,
      fruity: 2,
      herbal: 1
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "子弹杯 / 一口杯 / Shot Glass",
    garnish: "无（清晰三层悬浮大理石界线，可选点火）",
    ice: "常温分层饮用",
    technique: "Layer",
    techniqueZh: "比重悬浮分层法 (Layering)",
    abv: 27,
    description: "派对狂欢视觉短饮之王！利用不同利口酒的糖度密度差异，在子弹杯中由下至上精准分出黑咖啡、奶油白与金黄甜橙三层清晰界线，一口饮尽风味爆炸。",
    story: "1970年代诞生于加拿大阿尔伯塔省班夫温泉酒店，以美国空军 B-52 长程轰炸机命名。",
    proTips: [
      "严格按照“甘露咖啡（底层最重） -> 百利甜（中层） -> 柑曼怡/君度（顶层最轻）”的顺序，用吧勺背面贴近液面缓缓引流。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg",
    ingredients: [
      {
        name: "甘露咖啡力娇酒 (Kahlúa - 底层)",
        nameEn: "Kahlúa Coffee Liqueur",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "kahlua"
      },
      {
        name: "百利甜爱尔兰奶油利口酒 (Baileys - 中层)",
        nameEn: "Baileys Irish Cream",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "baileys"
      },
      {
        name: "柑曼怡干邑甜橙酒 (或君度 - 顶层)",
        nameEn: "Grand Marnier / Cointreau",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "grand-marnier"
      }
    ],
    steps: [
      "在干净直立的子弹杯中先直接注入 20ml 甘露咖啡力娇酒作为底层。",
      "将吧勺反转，勺尖紧贴杯内壁刚漫过咖啡酒液面。",
      "极为缓慢地将 20ml 百利甜顺着吧勺背面淋入，形成中间奶白悬浮层。",
      "同样方式，极其轻缓地将 20ml 柑曼怡橙酒淋在百利甜上方形成顶层金黄透明层。",
      "一饮而尽或插吸管从杯底快速吸饮。"
    ],
    isIbaCertified: false
  },
  {
    id: "oriental-bamboo",
    slug: "oriental-bamboo",
    name: "东方竹韵 / 浓香国风",
    nameEn: "Oriental Bamboo Whisper",
    category: "signature",
    categoryZh: "新中式国风特调",
    baseSpirit: "Baijiu",
    baseSpiritZh: "中国白酒",
    flavorProfiles: [
      "草本系",
      "果香系",
      "清爽系",
      "柑橘系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 1,
      strong: 3,
      fruity: 4,
      herbal: 4
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜竹叶一片与黄瓜薄带",
    ice: "长条形老冰柱",
    technique: "Shake",
    techniqueZh: "摇荡与苏打水注顶",
    abv: 16,
    description: "中国纯粮白酒走向世界现代吧台的惊艳之作！浓香型白酒浓郁的窖香、熟菠萝与粮香，在接骨木花利口酒的白花芬芳、鲜青柠与清雅绿茶的调和下化为一缕如竹林听雨般的清爽回甘。",
    story: "新一代中国先锋调酒师致力于将中国传统白酒融入现代鸡尾酒体系的代表作，彻底打破西方对白酒“过烈难调”的固有偏见。",
    proTips: [
      "选用 52度浓香型白酒（如泸州老窖特曲或开山白酒），浓郁酯香与接骨木花的麝香葡萄花香形成惊人的协同效应。"
    ],
    image: "",
    ingredients: [
      {
        name: "中国优质浓香型白酒 (52度)",
        nameEn: "Chinese Baijiu (Nongxiang Aroma)",
        amountMl: 40,
        amountOz: "1 1/3 oz",
        rawId: "baijiu"
      },
      {
        name: "圣日耳曼接骨木花利口酒",
        nameEn: "St-Germain Elderflower Liqueur",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "st-germain"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "龙井绿茶糖浆 (或单糖浆)",
        nameEn: "Longjing Green Tea Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "simple-syrup"
      },
      {
        name: "强气泡苏打水 (注顶)",
        nameEn: "Club Soda",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "club-soda"
      }
    ],
    steps: [
      "在摇酒壶中倒入白酒、接骨木花利口酒、青柠汁与绿茶糖浆。",
      "加满方冰，剧烈摇荡 12 秒。",
      "在高球杯中放入长条形透明老冰，过滤倒入酒液。",
      "注入冰苏打水至 8 分满，轻柔提拉一次。",
      "贴杯壁插入一片洗净的新鲜竹叶或黄瓜条装饰。"
    ],
    isIbaCertified: false
  },
  {
    id: "blue-lagoon",
    slug: "blue-lagoon",
    name: "蓝色泄湖",
    nameEn: "Blue Lagoon",
    category: "contemporary",
    categoryZh: "当代流行经典",
    baseSpirit: "Vodka",
    baseSpiritZh: "伏特加",
    flavorProfiles: [
      "柑橘系",
      "清爽系",
      "果香系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 0,
      strong: 2,
      fruity: 4,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "飓风杯 / Hurricane Glass",
    garnish: "新鲜柠檬轮片与鸡尾酒红樱桃",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "摇荡与雪碧注顶 (Shake & Top)",
    abv: 14,
    description: "梦幻透亮的加勒比湛蓝海洋！伏特加与蓝柑桂酒的柑橘橙香在新鲜柠檬汁激发下，注入滋滋作响的冰镇雪碧，气泡清脆，酸甜冰爽，夏日派对绝对焦点。",
    story: "1960年代由巴黎 Harry's New York Bar 创始人 Harry MacElhone 之子 Andy MacElhone 创作，以其耀眼的蔚蓝色泽风靡全球海岸酒吧。",
    proTips: [
      "雪碧一定要最后贴着杯壁缓缓倒入，避免剧烈冲刷导致气泡散逸，保留最强劲的碳酸跳跃感。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/5wm4zo1582579154.jpg",
    ingredients: [
      {
        name: "纯净伏特加",
        nameEn: "Vodka",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "vodka"
      },
      {
        name: "蓝柑桂酒 (Blue Curaçao)",
        nameEn: "Blue Curaçao",
        amountMl: 25,
        amountOz: "3/4 oz",
        rawId: "blue-curacao"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "冰镇雪碧 / 柠檬汽水 (注顶)",
        nameEn: "Chilled Sprite / Lemon-Lime Soda",
        amountMl: 100,
        amountOz: "3 1/3 oz",
        rawId: "sprite-lemon-soda"
      }
    ],
    steps: [
      "在摇酒壶中倒入伏特加、蓝柑桂酒与新鲜柠檬汁。",
      "加冰摇荡 10 秒。",
      "在飓风杯或高球杯中加满方冰，将酒液过滤倒入杯中。",
      "注入冰镇雪碧至满杯，用吧勺轻柔提拉一次。",
      "插上柠檬轮片与红樱桃装饰。"
    ],
    isIbaCertified: false
  },
  {
    id: "tinto-de-verano",
    slug: "tinto-de-verano",
    name: "夏日红酒汽水",
    nameEn: "Tinto de Verano",
    category: "contemporary",
    categoryZh: "西班牙国民夏日酒",
    baseSpirit: "Liqueur",
    baseSpiritZh: "红葡萄酒/汽水",
    flavorProfiles: [
      "果香系",
      "柑橘系",
      "清爽系",
      "甜系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 3,
      bitter: 1,
      strong: 1,
      fruity: 4,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜柠檬片与橙片",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "直调法 (1:1 黄金比例)",
    abv: 6,
    description: "西班牙人在炎炎夏日最爱的国民解暑神器！果香浓郁的干红葡萄酒与冰镇雪碧按 1:1 比例对调，红宝石般的酒液中气泡升腾，清爽怡人，低酒精无负担。",
    story: "20世纪初发源于西班牙科尔多瓦（Córdoba）的 Venta de Vargas 斗牛士酒馆，如今是整个伊比利亚半岛沙滩与餐吧的夏日代名词。",
    proTips: [
      "选用果香奔放、单宁适中的西班牙年轻干红（如丹魄 Tempranillo 或歌海娜 Garnacha），搭配冰镇雪碧口感绝佳。"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Tinto_de_Verano_2.jpg/1280px-Tinto_de_Verano_2.jpg",
    ingredients: [
      {
        name: "西班牙干红葡萄酒 (Tempranillo / Garnacha)",
        nameEn: "Spanish Red Wine",
        amountMl: 90,
        amountOz: "3 oz",
        rawId: "port-wine"
      },
      {
        name: "冰镇雪碧 / 柠檬汽水 (1:1)",
        nameEn: "Chilled Sprite / Lemon-Lime Soda",
        amountMl: 90,
        amountOz: "3 oz",
        rawId: "sprite-lemon-soda"
      },
      {
        name: "新鲜柠檬汁 (可选提鲜)",
        nameEn: "Fresh Lemon Juice",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "fresh-lemon-juice"
      }
    ],
    steps: [
      "在高球杯或大型大肚红酒杯中加满方冰。",
      "先倒入 90ml 干红葡萄酒。",
      "注入 90ml 冰镇雪碧与少许柠檬汁。",
      "用吧勺轻柔搅拌一次，放入新鲜柠檬轮片。"
    ],
    isIbaCertified: false
  },
  {
    id: "electric-iced-tea",
    slug: "electric-iced-tea",
    name: "带电长岛冰茶 / 蓝色长岛",
    nameEn: "Electric Iced Tea / Blue Long Island",
    category: "contemporary",
    categoryZh: "派对狂欢特调",
    baseSpirit: "Vodka",
    baseSpiritZh: "五重烈酒基底",
    flavorProfiles: [
      "柑橘系",
      "烈酒感",
      "清爽系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 0,
      strong: 5,
      fruity: 3,
      herbal: 2
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "柯林杯 / Collins Glass",
    garnish: "新鲜柠檬角与薄荷嫩芽",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "摇荡与雪碧注顶",
    abv: 22,
    description: "长岛冰茶的霓虹电光升级版！以蓝柑桂酒替代君度橙酒，以冰镇雪碧替代可乐注顶，呈现出摄人心魄的通透荧光海蓝色，口感酸甜清冽，酒力深藏不露。",
    story: "1980年代美国西海岸俱乐部为了打造视觉与口感双重冲击的派对终极短饮而风靡一时。",
    proTips: [
      "五大基酒各取 15ml 保持等比，充分摇荡后再倒入杯中加雪碧注顶，保持清透蓝宝石色泽。"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Adios_Motherfucker_Cocktail.jpg/1280px-Adios_Motherfucker_Cocktail.jpg",
    ingredients: [
      {
        name: "伏特加",
        nameEn: "Vodka",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "vodka"
      },
      {
        name: "白朗姆酒",
        nameEn: "White Rum",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "rum-white"
      },
      {
        name: "银龙舌兰酒",
        nameEn: "Tequila Blanco",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "tequila"
      },
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "gin"
      },
      {
        name: "蓝柑桂酒 (Blue Curaçao)",
        nameEn: "Blue Curaçao",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "blue-curacao"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 25,
        amountOz: "3/4 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "simple-syrup"
      },
      {
        name: "冰镇雪碧 (注顶调色)",
        nameEn: "Chilled Sprite",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "sprite-lemon-soda"
      }
    ],
    steps: [
      "在摇酒壶中加入除雪碧外的所有五大烈酒、蓝柑酒、柠檬汁与糖浆。",
      "加冰剧烈摇荡 10 秒。",
      "在柯林杯中装满方冰，过滤倒入酒液。",
      "用冰镇雪碧注顶至杯口，用吧勺轻提一次。",
      "在杯缘夹入新鲜柠檬角。"
    ],
    isIbaCertified: false
  },
  {
    id: "appletini-classic",
    slug: "appletini-classic",
    name: "经典苹果马天尼",
    nameEn: "Classic Apple Martini (Appletini)",
    category: "contemporary",
    categoryZh: "当代流行经典",
    baseSpirit: "Vodka",
    baseSpiritZh: "伏特加/苹果白兰地",
    flavorProfiles: [
      "果香系",
      "清爽系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 0,
      strong: 3,
      fruity: 5,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "马天尼杯 / Martini Glass",
    garnish: "新鲜青苹果扇形薄片三片 (Apple Fan)",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 20,
    description: "好莱坞千禧年代最受追捧的果香马天尼！纯净伏特加与纯苹果汁、卡尔瓦多斯苹果白兰地摇出青翠芬芳，口感如咬下一口刚摘下的多汁清脆绿苹果。",
    story: "1996年诞生于西好莱坞著名的 Lola's 酒吧，后因在《社交网络》、《实习医生风云》等影视作品中频繁出镜而红遍全球。",
    proTips: [
      "使用 100% 纯苹果汁搭配少许法国卡尔瓦多斯苹果白兰地（Calvados），比廉价人工青苹果香精糖浆风味层次高级百倍。"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Appletini.jpg/1280px-Appletini.jpg",
    ingredients: [
      {
        name: "纯净伏特加",
        nameEn: "Vodka",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "vodka"
      },
      {
        name: "100% 纯苹果汁 (NFC)",
        nameEn: "100% Pure Apple Juice",
        amountMl: 40,
        amountOz: "1 1/3 oz",
        rawId: "apple-juice"
      },
      {
        name: "卡尔瓦多斯苹果白兰地",
        nameEn: "Calvados / Apple Brandy",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "calvados"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "simple-syrup"
      }
    ],
    steps: [
      "在摇酒壶中倒入伏特加、纯苹果汁、苹果白兰地、柠檬汁与单糖浆。",
      "加满方冰，剧烈摇荡 12-15 秒至极冷。",
      "双重过滤倒入冷冻马天尼杯中。",
      "将三片薄切青苹果片串成扇形插在杯边装饰。"
    ],
    isIbaCertified: false
  },
  {
    id: "whiskey-apple-highball",
    slug: "whiskey-apple-highball",
    name: "威士忌苹果高球",
    nameEn: "Whiskey Apple Highball (Big Apple)",
    category: "contemporary",
    categoryZh: "轻松高球特调",
    baseSpirit: "Whiskey",
    baseSpiritZh: "波本威士忌",
    flavorProfiles: [
      "果香系",
      "甜系",
      "烈酒感",
      "清爽系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 3,
      bitter: 0,
      strong: 3,
      fruity: 4,
      herbal: 2
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜红苹果切片与肉桂棒",
    ice: "满杯老冰块",
    technique: "Build",
    techniqueZh: "直调法 (Build)",
    abv: 12,
    description: "波本威士忌与苹果汁的天作之合！肯塔基波本的香草、焦糖与橡木桶气息，被纯苹果汁的甜美果酸彻底激发，伴随苏打水气泡，清甜易饮，秋意盎然。",
    story: "纽约调酒师为致敬“大苹果（The Big Apple）”纽约市创作的常青树高球配方，如今是全球美式酒吧最受欢迎的威士忌日常特调之一。",
    proTips: [
      "加几滴鲜柠檬汁能完美平衡苹果汁的甜度，最后插上一根肉桂棒搅拌，会随着时间释放温暖香料气息。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/66mt9b1619695719.jpg",
    ingredients: [
      {
        name: "肯塔基波本威士忌",
        nameEn: "Bourbon Whiskey",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "whiskey-bourbon"
      },
      {
        name: "100% 纯苹果汁",
        nameEn: "100% Pure Apple Juice",
        amountMl: 80,
        amountOz: "2 2/3 oz",
        rawId: "apple-juice"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "强气泡苏打水 (注顶)",
        nameEn: "Club Soda",
        amountMl: 40,
        amountOz: "1 1/3 oz",
        rawId: "club-soda"
      }
    ],
    steps: [
      "在高球杯中放入整条老冰柱或满杯方冰。",
      "注入波本威士忌、纯苹果汁与柠檬汁。",
      "轻轻搅拌 10 秒使其混合冰镇。",
      "注入少量苏打水增添清脆气泡感。",
      "放入两片红苹果切片与一根肉桂棒装饰。"
    ],
    isIbaCertified: false
  },
  {
    id: "apple-cider-mule",
    slug: "apple-cider-mule",
    name: "苹果西打骡子",
    nameEn: "Apple Cider Mule",
    category: "contemporary",
    categoryZh: "秋季限定特调",
    baseSpirit: "Vodka",
    baseSpiritZh: "伏特加",
    flavorProfiles: [
      "辛辣系",
      "果香系",
      "柑橘系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 0,
      strong: 2,
      fruity: 4,
      herbal: 2
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "铜制马克杯 / Copper Mule Mug",
    garnish: "苹果扇片、肉桂棒与八角茴香",
    ice: "满杯碎冰 (Crushed Ice)",
    technique: "Build",
    techniqueZh: "直调法 (Build in Copper Mug)",
    abv: 11,
    description: "莫斯科骡子在秋收季节的华丽蜕变！伏特加与纯苹果汁的清甜遇上发酵姜啤的辛辣与青柠的酸爽，在冰霜铜杯中激发出多层次的热烈滋味。",
    story: "起源于美国新英格兰地区的苹果采摘季，迅速成为全球各大鸡尾酒吧秋冬季节酒单上的销量王。",
    proTips: [
      "选用带有浑浊果肉的鲜榨苹果西打原汁（Apple Cider），搭配辛辣感强的姜汁啤酒（Ginger Beer），风味最地道。"
    ],
    image: "",
    ingredients: [
      {
        name: "纯净伏特加",
        nameEn: "Vodka",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "vodka"
      },
      {
        name: "纯苹果汁 / 苹果西打",
        nameEn: "Apple Juice / Fresh Cider",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "apple-juice"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "辛辣发酵姜汁啤酒 (注顶)",
        nameEn: "Spicy Ginger Beer",
        amountMl: 80,
        amountOz: "2 2/3 oz",
        rawId: "ginger-beer"
      }
    ],
    steps: [
      "在经典铜制马克杯中装满碎冰。",
      "注入伏特加、苹果汁与新鲜青柠汁。",
      "用吧勺快速搅拌均匀。",
      "注入冰镇辛辣姜汁啤酒注顶。",
      "插入苹果薄片、一根肉桂棒与一颗八角装饰。"
    ],
    isIbaCertified: false
  },
  {
    id: "harvey-wallbanger",
    slug: "harvey-wallbanger",
    name: "哈维撞墙",
    nameEn: "Harvey Wallbanger",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Vodka",
    baseSpiritZh: "伏特加/加利安诺",
    flavorProfiles: [
      "柑橘系",
      "草本系",
      "甜系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 4,
      bitter: 1,
      strong: 3,
      fruity: 4,
      herbal: 3
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜橙轮片与马拉斯奇诺黑樱桃",
    ice: "满杯方冰",
    technique: "Float",
    techniqueZh: "直调与加利安诺草本酒漂浮 (Build & Float)",
    abv: 16,
    description: "螺丝起子（Screwdriver）的黄金升级版！伏特加与鲜甜橙汁的经典组合上，缓缓漂浮一层金黄色加利安诺利口酒，茴芹、香草与橙香在唇齿间层层绽放。",
    story: "1950年代诞生于加州日落大道酒吧，相传一位名叫 Harvey 的冲浪冠军在喝下多杯这款特调后在酒馆里晕头转向“撞墙而出”，因而得名。",
    proTips: [
      "加利安诺（Galliano L'Autentico）务必最后顺着吧勺背面淋在橙汁顶层，形成金黄光环般的视觉漂浮层。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/7os4gs1606854357.jpg",
    ingredients: [
      {
        name: "纯净伏特加",
        nameEn: "Vodka",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "vodka"
      },
      {
        name: "新鲜现榨甜橙汁",
        nameEn: "Fresh Squeezed Orange Juice",
        amountMl: 100,
        amountOz: "3 1/3 oz",
        rawId: "fresh-orange-juice"
      },
      {
        name: "加利安诺香草草本利口酒 (漂浮)",
        nameEn: "Galliano L'Autentico",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "galliano"
      }
    ],
    steps: [
      "在高球杯中加满冰块。",
      "倒入伏特加与新鲜橙汁，用吧勺搅拌均匀。",
      "反转吧勺贴近酒面，缓缓将 15ml 加利安诺利口酒淋在勺背上形成顶部金黄漂浮层。",
      "用鸡尾酒竹签串上橙片与红樱桃插在杯顶。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "fuzzy-navel",
    slug: "fuzzy-navel",
    name: "模糊的肚脐",
    nameEn: "Fuzzy Navel",
    category: "contemporary",
    categoryZh: "80年代经典果香",
    baseSpirit: "Liqueur",
    baseSpiritZh: "桃味利口酒/橙汁",
    flavorProfiles: [
      "果香系",
      "甜系",
      "柑橘系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 4,
      bitter: 0,
      strong: 1,
      fruity: 5,
      herbal: 0
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜橙片与水蜜桃切片",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "直调法 (1:1 调配)",
    abv: 10,
    description: "80年代果香调酒时代的标志性代表！多汁多甜的桃子利口酒（Fuzzy）与新鲜现榨甜橙汁（Navel Orange）按 1:1 完美交融，入口犹如刚咬下一颗爆汁甜桃与脐橙。",
    story: "1980年代由 DeKuyper 桃味甜酒推出时由美国调酒师 Ray Foley 命名推广，因“Fuzzy（桃毛）”与“Navel（脐橙）”双关语幽默而迅速风靡全美。",
    proTips: [
      "追求更高烈度的聚会喝法可额外加入 30ml 纯伏特加（此变体被称为“毛茸茸的肚脐穿孔 Hairy Navel”）。"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Fuzzy_navel_01.jpg",
    ingredients: [
      {
        name: "蜜桃利口酒 (Peach Schnapps)",
        nameEn: "Peach Schnapps",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "peach-schnapps"
      },
      {
        name: "新鲜现榨甜橙汁",
        nameEn: "Fresh Squeezed Orange Juice",
        amountMl: 90,
        amountOz: "3 oz",
        rawId: "fresh-orange-juice"
      },
      {
        name: "新鲜水蜜桃汁 (可选提稠)",
        nameEn: "Fresh Peach Juice",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "peach-juice"
      }
    ],
    steps: [
      "在高球杯中装满方冰。",
      "倒入蜜桃利口酒、水蜜桃汁与新鲜橙汁。",
      "用吧勺充分搅拌 15 秒至酒液冰透融合。",
      "饰以新鲜橙片。"
    ],
    isIbaCertified: false
  },
  {
    id: "golden-dream",
    slug: "golden-dream",
    name: "金色梦乡",
    nameEn: "Golden Dream",
    category: "contemporary",
    categoryZh: "IBA 当代经典",
    baseSpirit: "Liqueur",
    baseSpiritZh: "加利安诺/君度",
    flavorProfiles: [
      "奶香系",
      "柑橘系",
      "草本系",
      "甜系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 4,
      bitter: 0,
      strong: 2,
      fruity: 3,
      herbal: 3
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "碟形香槟杯 / Coupe Glass",
    garnish: "现磨肉豆蔻碎或橙皮丝",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "剧烈乳化摇荡法",
    abv: 18,
    description: "柔美华贵的丝滑乳化梦境！加利安诺的草本香草与君度的橙皮精油，在鲜橙汁与新鲜淡奶油的高速剧烈摇荡下形成如融化香草香橙冰淇淋般的醇美天鹅绒质感。",
    story: "1960年代由迈阿密调酒师 Raimundo Alvarez 为向好莱坞著名女星琼·克劳馥致敬而创，后在全美鸡尾酒锦标赛中夺冠并列入 IBA 官方名录。",
    proTips: [
      "橙汁与淡奶油的比例一定要精准，加冰剧烈摇荡至少 15 秒使动物乳脂与果酸彻底乳化成绵密泡状。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/qrot6j1504369425.jpg",
    ingredients: [
      {
        name: "加利安诺草本香草利口酒",
        nameEn: "Galliano L'Autentico",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "galliano"
      },
      {
        name: "君度橙酒 (Cointreau)",
        nameEn: "Cointreau",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "cointreau"
      },
      {
        name: "新鲜现榨甜橙汁",
        nameEn: "Fresh Orange Juice",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "fresh-orange-juice"
      },
      {
        name: "新鲜淡奶油",
        nameEn: "Fresh Heavy Cream",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "heavy-cream"
      }
    ],
    steps: [
      "在摇酒壶中倒入加利安诺、君度、鲜橙汁与淡奶油。",
      "加满冰块，高强度剧烈摇荡 15 秒直至充分乳化起泡。",
      "双重过滤倒入预冷碟形香槟杯中。"
    ],
    isIbaCertified: true,
    ibaCategory: "Contemporary Classics"
  },
  {
    id: "enzoni",
    slug: "enzoni",
    name: "恩佐尼",
    nameEn: "Enzoni",
    category: "new-era",
    categoryZh: "现代新经典",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒/金巴利",
    flavorProfiles: [
      "果香系",
      "苦系",
      "柑橘系",
      "草本系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 3,
      strong: 3,
      fruity: 4,
      herbal: 3
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "古典杯 / Rocks Glass",
    garnish: "鸡尾酒竹签串入 3 颗新鲜绿提子",
    ice: "大块老冰",
    technique: "Muddle",
    techniqueZh: "捣果摇荡法 (Muddle & Shake)",
    abv: 22,
    description: "现代调酒史上最惊艳的提子杰作！整颗新鲜无籽绿提在壶底捣碎，青提的鲜甜多汁与柔和单宁，不可思议地化解了金巴利的强烈苦涩，碰撞出令人上瘾的清脆果香。",
    story: "2000年代由纽约传奇酒吧 Milk & Honey 著名调酒师 Vincenzo Errico 创作，被视为金酸酒（Gin Sour）与尼格罗尼（Negroni）在现代的最美结合。",
    proTips: [
      "选用脆甜多汁的无籽青提（如阳光玫瑰或晴王），先与糖浆柠檬汁用力捣烂出汁，再双重过滤保留清澈酒体。"
    ],
    image: "",
    ingredients: [
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "gin"
      },
      {
        name: "金巴利苦酒 (Campari)",
        nameEn: "Campari",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "campari"
      },
      {
        name: "新鲜无籽青提子",
        nameEn: "Fresh Seedless Green Grapes",
        amountMl: 5,
        amountOz: "5 whole grapes",
        unit: "颗",
        rawId: "fresh-grapes"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "simple-syrup"
      }
    ],
    steps: [
      "在摇酒壶底放入 5 颗新鲜青提与单糖浆。",
      "用捣棒（Muddler）用力捣烂，挤出所有葡萄果肉与汁液。",
      "注入金酒、金巴利与新鲜柠檬汁。",
      "加满冰块强力摇荡 12 秒。",
      "使用细滤网双重过滤倒入装有老冰的古典杯中。",
      "串上 3 颗青提子横跨杯口装饰。"
    ],
    isIbaCertified: false
  },
  {
    id: "classic-sangria",
    slug: "classic-sangria",
    name: "西班牙传统桑格利亚",
    nameEn: "Classic Spanish Red Sangria",
    category: "contemporary",
    categoryZh: "西班牙派对国宝潘趣",
    baseSpirit: "Liqueur",
    baseSpiritZh: "红葡萄酒/白兰地",
    flavorProfiles: [
      "果香系",
      "柑橘系",
      "甜系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 4,
      bitter: 1,
      strong: 2,
      fruity: 5,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "浸泡浸润的苹果丁、橙片与肉桂棒",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "水果浸渍与直调潘趣 (Macerate & Pour)",
    abv: 12,
    description: "西班牙风情聚会第一名酒！干红葡萄酒、纯红葡萄汁、白兰地与君度橙酒，在新鲜切片苹果、甜橙与柠檬中浸渍出深邃果香，倒入杯中加雪碧或苏打水注顶，欢畅无匹。",
    story: "起源于古罗马时期伊比利亚半岛的水果葡萄酒潘趣（Ponche），1964年纽约世界博览会西班牙展馆将其引介给全球后成为国际派对图腾。",
    proTips: [
      "水果切丁后与白兰地、橙酒、糖浆先冷藏浸渍 2 小时以上（Maceration），让水果充分吸收烈酒并释放浓郁果汁。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/xrvxpp1441249280.jpg",
    ingredients: [
      {
        name: "西班牙干红葡萄酒",
        nameEn: "Spanish Red Wine",
        amountMl: 90,
        amountOz: "3 oz",
        rawId: "port-wine"
      },
      {
        name: "纯红葡萄汁 (Concord Grape Juice)",
        nameEn: "100% Red Grape Juice",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "grape-juice-red"
      },
      {
        name: "干邑白兰地 (Brandy)",
        nameEn: "Brandy / Cognac",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "brandy-cognac"
      },
      {
        name: "君度橙酒 (Cointreau)",
        nameEn: "Cointreau / Triple Sec",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "cointreau"
      },
      {
        name: "新鲜甜橙汁",
        nameEn: "Fresh Orange Juice",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "fresh-orange-juice"
      },
      {
        name: "新鲜苹果丁、橙片与柠檬片",
        nameEn: "Diced Apples, Oranges & Lemons",
        amountMl: 30,
        amountOz: "Mixed Fruits",
        unit: "适量",
        rawId: "apple-juice"
      },
      {
        name: "冰镇雪碧或苏打水 (注顶)",
        nameEn: "Sprite or Club Soda",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "sprite-lemon-soda"
      }
    ],
    steps: [
      "在公杯或大水罐中加入切碎的苹果丁、橙片，倒入白兰地、橙酒与葡萄汁轻轻压出香味。",
      "注入干红葡萄酒与橙汁搅拌均匀。",
      "在装满冰块的玻璃杯中倒入浸渍好的水果与红酒潘趣液。",
      "最后注入少许冰雪碧或苏打水激发出丰盈果味气泡。"
    ],
    isIbaCertified: false
  },
  {
    id: "transfusion",
    slug: "transfusion",
    name: "输血高球",
    nameEn: "The Transfusion",
    category: "contemporary",
    categoryZh: "全美俱乐部传奇高球",
    baseSpirit: "Vodka",
    baseSpiritZh: "伏特加/紫葡萄汁",
    flavorProfiles: [
      "果香系",
      "辛辣系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 3,
      bitter: 0,
      strong: 2,
      fruity: 5,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜紫葡萄串与青柠角",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "直调法 (Build)",
    abv: 12,
    description: "美国高尔夫俱乐部无可替代的“19号洞”国饮！伏特加与浓郁紫红色的康科德纯葡萄汁注入杯中，青柠汁提酸，最后倒入生姜汽水，清凉解渴、复苏活力，宛如味觉上的“急速输血”。",
    story: "相传诞生于20世纪中期美国名流高尔夫乡村俱乐部，专为球手在烈日下完成18洞比赛后迅速补充体力与电解质而特调，据说也是艾森豪威尔总统的最爱。",
    proTips: [
      "务必使用纯正的康科德紫葡萄汁（Concord Grape Juice），其特有的浓郁深浆果甜味与姜汁汽水的辛辣是灵魂绝配。"
    ],
    image: "",
    ingredients: [
      {
        name: "纯净伏特加",
        nameEn: "Vodka",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "vodka"
      },
      {
        name: "康科德纯红/紫葡萄汁 (Concord)",
        nameEn: "Concord Grape Juice",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "grape-juice-red"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "冰镇姜汁汽水 (Ginger Ale 注顶)",
        nameEn: "Chilled Ginger Ale",
        amountMl: 90,
        amountOz: "3 oz",
        rawId: "ginger-ale"
      }
    ],
    steps: [
      "在高球杯中加满方冰。",
      "注入伏特加、康科德葡萄汁与新鲜青柠汁。",
      "用吧勺顺滑搅拌 15 秒。",
      "注入冰镇姜汁汽水至满杯。",
      "在杯缘挂上一小串新鲜紫葡萄与青柠角装饰。"
    ],
    isIbaCertified: false
  },
  {
    id: "bourbon-peach-sweet-tea",
    slug: "bourbon-peach-sweet-tea",
    name: "波本蜜桃冰茶",
    nameEn: "Bourbon Peach Sweet Tea",
    category: "contemporary",
    categoryZh: "美南阳光庄园特调",
    baseSpirit: "Whiskey",
    baseSpiritZh: "波本威士忌",
    flavorProfiles: [
      "果香系",
      "甜系",
      "草本系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 4,
      bitter: 1,
      strong: 3,
      fruity: 4,
      herbal: 3
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜水蜜桃切片与大朵薄荷冠",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "直调法 (Build over Ice)",
    abv: 13,
    description: "美国南部庄园夏日最惬意的微醺体验！波本威士忌的焦糖香草气息与纯水蜜桃汁的丝滑香甜，融入现泡冷萃红茶与柠檬汁中，茶香清冽，果汁丰满，消暑神饮。",
    story: "融合了美南两大经典——乔治亚州著名多汁蜜桃（Georgia Peach）与南部传统甜冰茶（Sweet Tea），是户外野餐与音乐节的最佳拍档。",
    proTips: [
      "使用冷萃锡兰或伯爵红茶，茶汤清亮不涩，与水蜜桃汁 1:1 调配茶果平衡感达到巅峰。"
    ],
    image: "",
    ingredients: [
      {
        name: "肯塔基波本威士忌",
        nameEn: "Bourbon Whiskey",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "whiskey-bourbon"
      },
      {
        name: "纯水蜜桃汁 / 桃肉浓浆",
        nameEn: "Pure Peach Juice",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "peach-juice"
      },
      {
        name: "现泡冷萃纯红茶 (无糖)",
        nameEn: "Fresh Brewed Iced Black Tea",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "iced-black-tea"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "蜂蜜糖浆 (或单糖浆)",
        nameEn: "Honey Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "honey-syrup"
      }
    ],
    steps: [
      "在高球杯中放入满杯冰块。",
      "依序倒入波本威士忌、纯水蜜桃汁、冷萃红茶、柠檬汁与蜂蜜糖浆。",
      "用吧勺充分搅拌 20 秒使所有原料与冰块深度交融。",
      "在杯顶插上两片新鲜水蜜桃切片与拍醒的鲜薄荷枝叶。"
    ],
    isIbaCertified: false
  },
  {
    id: "peach-vodka-sour",
    slug: "peach-vodka-sour",
    name: "水蜜桃伏特加酸",
    nameEn: "Peach Vodka Sour",
    category: "contemporary",
    categoryZh: "当代果香特调",
    baseSpirit: "Vodka",
    baseSpiritZh: "伏特加/蜜桃",
    flavorProfiles: [
      "果香系",
      "柑橘系",
      "清爽系",
      "甜系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 3,
      bitter: 0,
      strong: 3,
      fruity: 5,
      herbal: 1
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "古典杯 / Rocks Glass",
    garnish: "水蜜桃薄片与安哥斯图拉苦精拉花",
    ice: "大块老冰",
    technique: "Shake",
    techniqueZh: "双重摇荡法 (Dry & Wet Shake)",
    abv: 18,
    description: "如同天鹅绒般的粉桃云朵！纯净伏特加、纯水蜜桃汁与新鲜柠檬汁在蛋白乳化下产生丰盈细腻的粉白泡沫，酸甜多汁，桃香馥郁，口感轻盈如云雾。",
    story: "现代鸡尾酒大师将经典酸酒框架与高浓度水蜜桃泥结合的杰作，深受女性与年轻调酒爱好者喜爱。",
    proTips: [
      "采用 Dry Shake（先不加冰干摇 15 秒打发蛋清）再加冰湿摇，能让蜜桃果汁与蛋白产生如舒芙蕾般的持久泡沫顶层。"
    ],
    image: "",
    ingredients: [
      {
        name: "纯净伏特加",
        nameEn: "Vodka",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "vodka"
      },
      {
        name: "纯水蜜桃汁 / 白桃果泥",
        nameEn: "Pure Peach Juice / Puree",
        amountMl: 40,
        amountOz: "1 1/3 oz",
        rawId: "peach-juice"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 25,
        amountOz: "3/4 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "simple-syrup"
      },
      {
        name: "新鲜蛋清",
        nameEn: "Fresh Egg White",
        amountMl: 20,
        amountOz: "1 egg white",
        rawId: "egg-white"
      }
    ],
    steps: [
      "在摇酒壶中倒入伏特加、水蜜桃汁、柠檬汁、糖浆与蛋清（不加冰）。",
      "高强度干摇 15 秒打发泡沫。",
      "加入满杯方冰，剧烈湿摇 15 秒至极冷。",
      "细滤网过滤倒入放有整块老冰的古典杯中。",
      "在泡沫顶层轻轻放上一片薄桃片。"
    ],
    isIbaCertified: false
  },
  {
    id: "virgin-sunrise",
    slug: "virgin-sunrise",
    name: "无酒精橙香日出",
    nameEn: "Virgin Sunrise (Mocktail)",
    category: "mocktail",
    categoryZh: "无酒精特调",
    baseSpirit: "None",
    baseSpiritZh: "无酒精",
    flavorProfiles: [
      "柑橘系",
      "果香系",
      "清爽系",
      "甜系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 4,
      bitter: 0,
      strong: 0,
      fruity: 5,
      herbal: 0
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜橙轮片与马拉斯奇诺黑樱桃",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "重力沉底渐变法 (Gravity Layering)",
    abv: 0,
    description: "零酒精也能享受惊艳的落日晚霞！新鲜现榨橙汁与雪碧混合注入杯中，缓缓倒入浓稠深红的红石榴糖浆，糖浆自然沉入杯底形成红、橙、金三色日出渐变。",
    story: "龙舌兰日出的无酒精经典版本，全年龄段皆可品味大自然的明媚日出美景。",
    proTips: [
      "红石榴糖浆比重远大于果汁，务必顺着杯壁极其缓慢倒入，让其自然在杯底沉淀出壮观的日落红晕。"
    ],
    image: "",
    ingredients: [
      {
        name: "新鲜现榨甜橙汁",
        nameEn: "Fresh Orange Juice",
        amountMl: 120,
        amountOz: "4 oz",
        rawId: "fresh-orange-juice"
      },
      {
        name: "冰镇雪碧 / 柠檬汽水",
        nameEn: "Chilled Sprite",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "sprite-lemon-soda"
      },
      {
        name: "红石榴糖浆 (沉底)",
        nameEn: "Grenadine Syrup",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "grenadine"
      }
    ],
    steps: [
      "在高球杯中加满方冰。",
      "倒入新鲜橙汁与雪碧，轻柔搅拌均匀。",
      "缓缓将红石榴糖浆顺着杯壁淋入，任由其沉降在杯底形成鲜艳渐变。",
      "在杯口插上橙轮片与黑樱桃。"
    ],
    isIbaCertified: false
  },
  {
    id: "virgin-peach-oolong",
    slug: "virgin-peach-oolong",
    name: "白桃乌龙冰萃特调",
    nameEn: "Virgin White Peach Oolong Sparkler (Mocktail)",
    category: "mocktail",
    categoryZh: "新中式无酒精特调",
    baseSpirit: "None",
    baseSpiritZh: "无酒精",
    flavorProfiles: [
      "果香系",
      "草本系",
      "清爽系",
      "甜系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 3,
      bitter: 1,
      strong: 0,
      fruity: 4,
      herbal: 4
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜水蜜桃切片与新鲜迷迭香枝",
    ice: "长条形老冰柱",
    technique: "Build",
    techniqueZh: "直调法 (Build)",
    abv: 0,
    description: "当下亚洲最火爆的国风新茶饮调酒体验！高山白桃乌龙冷萃茶的清雅兰花香，与多汁白桃纯果泥、新鲜柠檬汁与气泡雪碧交融，茶香缭绕，桃香四溢，清冽甘甜。",
    story: "当代新中式鸡尾酒吧与先锋茶饮文化的完美融合之作，展现了中国传统茶道与现代特调的迷人魅力。",
    proTips: [
      "冷萃乌龙茶建议使用白桃乌龙茶原叶常温浸泡冷藏 6 小时以上，茶多酚柔和无涩感。"
    ],
    image: "",
    ingredients: [
      {
        name: "纯水蜜桃汁 / 白桃果泥",
        nameEn: "White Peach Juice / Puree",
        amountMl: 50,
        amountOz: "1 2/3 oz",
        rawId: "peach-juice"
      },
      {
        name: "冷萃白桃乌龙茶液",
        nameEn: "Cold Brew Peach Oolong Tea",
        amountMl: 90,
        amountOz: "3 oz",
        rawId: "iced-black-tea"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "蜂蜜糖浆",
        nameEn: "Honey Syrup",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "honey-syrup"
      },
      {
        name: "冰镇雪碧或苏打水 (注顶)",
        nameEn: "Sprite or Club Soda",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "sprite-lemon-soda"
      }
    ],
    steps: [
      "在高球杯中放入透明老冰柱。",
      "加入白桃果泥、蜂蜜糖浆、柠檬汁与冷萃乌龙茶。",
      "用吧勺充分提拉搅拌 15 秒。",
      "注入少量冰雪碧增添欢快气泡。",
      "饰以新鲜桃片与拍醒的迷迭香枝。"
    ],
    isIbaCertified: false
  },
  {
    id: "midori-sprite-fizz",
    slug: "midori-sprite-fizz",
    name: "蜜多丽雪碧菲士 / 绿仙仙",
    nameEn: "Midori Sprite Fizz",
    category: "contemporary",
    categoryZh: "夏日果香高球",
    baseSpirit: "Liqueur",
    baseSpiritZh: "蜜多丽/伏特加",
    flavorProfiles: [
      "甜系",
      "果香系",
      "清爽系",
      "柑橘系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 4,
      bitter: 0,
      strong: 2,
      fruity: 5,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜青柠角与蜜瓜切片",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "直调法 (Build)",
    abv: 11,
    description: "极富视觉冲击力的荧光翠绿特调！日本蜜多丽蜜瓜甜酒的馥郁果香与纯净伏特加、鲜青柠汁混合，注入冰雪碧，气泡清脆，果香爆汁，如夏日绿野仙踪。",
    story: "风靡亚洲与澳洲俱乐部最受欢迎的甜系派对高球之一，因其极高颜值与甜美无酒精感的顺滑口感广受年轻群体推崇。",
    proTips: [
      "挤入 15ml 新鲜青柠汁是解腻的关键，能让蜜瓜甜香与雪碧柠檬气泡达到完美酸甜平衡。"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Midori_Sour_%283804267959%29.jpg/1280px-Midori_Sour_%283804267959%29.jpg",
    ingredients: [
      {
        name: "蜜多丽蜜瓜甜酒 (Midori)",
        nameEn: "Midori Melon Liqueur",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "midori"
      },
      {
        name: "纯净伏特加",
        nameEn: "Vodka",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "vodka"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "冰镇雪碧 / 柠檬汽水 (注顶)",
        nameEn: "Chilled Sprite",
        amountMl: 100,
        amountOz: "3 1/3 oz",
        rawId: "sprite-lemon-soda"
      }
    ],
    steps: [
      "在高球杯中加满方冰。",
      "倒入蜜多丽蜜瓜酒、伏特加与鲜青柠汁。",
      "用吧勺轻柔搅拌 10 秒。",
      "注入冰雪碧至满杯。",
      "在杯缘夹入新鲜青柠角与薄切蜜瓜片装饰。"
    ],
    isIbaCertified: false
  },
  {
    id: "gin-sprite-cooler",
    slug: "gin-sprite-cooler",
    name: "金雪碧清爽特调",
    nameEn: "Gin & Sprite Cooler",
    category: "contemporary",
    categoryZh: "简易家庭特调",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒",
    flavorProfiles: [
      "柑橘系",
      "草本系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 1,
      strong: 2,
      fruity: 3,
      herbal: 4
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜黄柠檬轮片与鲜薄荷嫩枝",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "直调法 (Build)",
    abv: 12,
    description: "比金汤力更易饮接受的家庭必备配方！金酒的杜松子与草本清香，在雪碧的柠檬青柠甜酸气泡与新鲜薄荷的烘托下，清冽明快，毫无药苦感。",
    story: "西方家庭与户外露营派对中最普及的懒人高球喝法，用雪碧的自然甜度完美驯服了金酒的辛辣烈度。",
    proTips: [
      "在杯底先放入两片柠檬与薄荷轻压出香油，再加冰倒入金酒和雪碧，香气层次倍增。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/678xt11582481163.jpg",
    ingredients: [
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "gin"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "新鲜薄荷叶",
        nameEn: "Fresh Mint Leaves",
        amountMl: 4,
        amountOz: "4-6 leaves",
        unit: "片",
        rawId: "fresh-mint"
      },
      {
        name: "冰镇雪碧 / 柠檬汽水 (注顶)",
        nameEn: "Chilled Sprite",
        amountMl: 120,
        amountOz: "4 oz",
        rawId: "sprite-lemon-soda"
      }
    ],
    steps: [
      "在高球杯底放入薄荷叶与柠檬汁，用吧勺轻柔按压释放芳香。",
      "加满方冰，倒入 45ml 金酒。",
      "注入冰镇雪碧至杯口，轻提一次。",
      "饰以柠檬轮片与薄荷顶冠。"
    ],
    isIbaCertified: false
  },
  {
    id: "rainbow-paradise-mocktail",
    slug: "rainbow-paradise-mocktail",
    name: "彩虹天堂果味汽水",
    nameEn: "Rainbow Paradise Mocktail",
    category: "mocktail",
    categoryZh: "无酒精视觉特调",
    baseSpirit: "None",
    baseSpiritZh: "无酒精",
    flavorProfiles: [
      "甜系",
      "果香系",
      "柑橘系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 4,
      bitter: 0,
      strong: 0,
      fruity: 5,
      herbal: 0
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "柯林杯 / Collins Glass",
    garnish: "新鲜菠萝角与黑樱桃",
    ice: "满杯碎冰 (Crushed Ice)",
    technique: "Layer",
    techniqueZh: "密度重力三分层法",
    abv: 0,
    description: "夏日海岛最惊艳的无酒精分层视觉神饮！底层深红石榴糖浆、中层明黄鲜橙汁与菠萝汁、顶层水蓝雪碧，如加勒比海滩的彩虹般绚丽夺目。",
    story: "度假酒店海滩吧为不饮酒宾客设计的无酒精经典派对特饮，深受全年龄段喜爱。",
    proTips: [
      "加满碎冰作为缓冲层，用吧勺极度缓慢顺勺背引流倒入每一层，利用糖分密度差保持清晰分界。"
    ],
    image: "",
    ingredients: [
      {
        name: "红石榴糖浆 (底层)",
        nameEn: "Grenadine Syrup",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "grenadine"
      },
      {
        name: "纯菠萝汁与鲜橙汁混合液 (中层)",
        nameEn: "Pineapple & Orange Juice Mix",
        amountMl: 80,
        amountOz: "2 2/3 oz",
        rawId: "pineapple-juice"
      },
      {
        name: "冰镇雪碧混合微量蓝柑糖浆 (顶层)",
        nameEn: "Sprite with dash of Blue Curaçao",
        amountMl: 80,
        amountOz: "2 2/3 oz",
        rawId: "sprite-lemon-soda"
      }
    ],
    steps: [
      "在柯林杯底先注入 20ml 红石榴糖浆。",
      "在杯中填满细碎冰。",
      "反转吧勺，缓慢引流倒入橙汁与菠萝汁混合液形成金黄中层。",
      "取另一量杯将雪碧与一滴蓝柑酒/蓝柑糖浆混合调成天蓝色，顺着勺背缓慢淋在碎冰顶层。",
      "插上吸管与菠萝角装饰。"
    ],
    isIbaCertified: false
  },
  {
    id: "autumn-apple-jack",
    slug: "autumn-apple-jack",
    name: "秋季苹果杰克酸",
    nameEn: "Autumn Apple Jack Sour",
    category: "contemporary",
    categoryZh: "秋季经典特调",
    baseSpirit: "Brandy",
    baseSpiritZh: "苹果白兰地/苹果汁",
    flavorProfiles: [
      "果香系",
      "柑橘系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 3,
      bitter: 0,
      strong: 3,
      fruity: 5,
      herbal: 1
    },
    difficulty: "medium",
    difficultyZh: "中等",
    glass: "碟形香槟杯 / Coupe Glass",
    garnish: "新鲜苹果切片与肉桂粉",
    ice: "摇荡滤冰 (Up)",
    technique: "Shake",
    techniqueZh: "摇荡法",
    abv: 20,
    description: "杰克玫瑰（Jack Rose）的醇厚升级版！法国卡尔瓦多斯苹果白兰地的深邃烤苹果香，与 100% 纯苹果汁、鲜柠檬汁和红石榴糖浆摇出如红玛瑙般的温润果香酸甜。",
    story: "20世纪初禁酒令时期的经典名作，以美国本土苹果杰克烈酒（Applejack）为核心打造。",
    proTips: [
      "纯苹果汁与红石榴糖浆各司其职，苹果汁提供丰满果肉酸甜，红石榴赋予红润色泽与微涩层次。"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Jack_rose.jpg",
    ingredients: [
      {
        name: "卡尔瓦多斯 / 苹果白兰地",
        nameEn: "Calvados / Apple Brandy",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "calvados"
      },
      {
        name: "100% 纯苹果汁",
        nameEn: "100% Pure Apple Juice",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "apple-juice"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "红石榴糖浆",
        nameEn: "Grenadine Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "grenadine"
      }
    ],
    steps: [
      "在摇酒壶中倒入苹果白兰地、纯苹果汁、柠檬汁与红石榴糖浆。",
      "加满方冰，剧烈摇荡 12 秒。",
      "双重过滤倒入预冷碟形香槟杯中。",
      "饰以新鲜苹果薄片。"
    ],
    isIbaCertified: false
  },
  {
    id: "tequila-sunset",
    slug: "tequila-sunset",
    name: "龙舌兰日落",
    nameEn: "Tequila Sunset",
    category: "contemporary",
    categoryZh: "当代经典特调",
    baseSpirit: "Tequila",
    baseSpiritZh: "龙舌兰/橙汁",
    flavorProfiles: [
      "果香系",
      "柑橘系",
      "甜系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 1,
      strong: 3,
      fruity: 4,
      herbal: 2
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜橙片与黑莓",
    ice: "满杯方冰",
    technique: "Float",
    techniqueZh: "直调与黑莓酒沉降",
    abv: 16,
    description: "龙舌兰日出的迷人黑夜版！银龙舌兰与鲜甜橙汁的明媚金黄中，缓缓注入深紫红色的黑莓利口酒或黑加仑酒，在杯底晕染出夜幕低垂时的瑰丽晚霞。",
    story: "诞生于西南美洲，相比传统龙舌兰日出（Tequila Sunrise）的石榴红，日落版以黑莓果香带来更深沉的浆果微酸层次。",
    proTips: [
      "黑莓利口酒比重较大，倒入后会缓慢沉底并向上弥散出深紫色的日落晚霞效果。"
    ],
    image: "",
    ingredients: [
      {
        name: "银龙舌兰酒",
        nameEn: "Tequila Blanco",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "tequila"
      },
      {
        name: "新鲜现榨甜橙汁",
        nameEn: "Fresh Orange Juice",
        amountMl: 90,
        amountOz: "3 oz",
        rawId: "fresh-orange-juice"
      },
      {
        name: "新鲜柠檬汁",
        nameEn: "Fresh Lemon Juice",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "fresh-lemon-juice"
      },
      {
        name: "黑莓利口酒 (或黑加仑酒 - 沉底)",
        nameEn: "Crème de Mûre / Cassis",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "creme-de-mure"
      }
    ],
    steps: [
      "在高球杯中加满冰块。",
      "倒入龙舌兰酒、橙汁与柠檬汁，搅拌均匀。",
      "顺着杯内壁缓缓倒入黑莓利口酒，使其自然沉入杯底。",
      "在杯缘装饰橙轮片与新鲜黑莓。"
    ],
    isIbaCertified: false
  },
  {
    id: "bourbon-orange-smash",
    slug: "bourbon-orange-smash",
    name: "波本甜橙粉碎",
    nameEn: "Bourbon Orange Smash",
    category: "contemporary",
    categoryZh: "美南经典粉碎特调",
    baseSpirit: "Whiskey",
    baseSpiritZh: "波本威士忌",
    flavorProfiles: [
      "柑橘系",
      "草本系",
      "烈酒感",
      "甜系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 1,
      strong: 4,
      fruity: 4,
      herbal: 3
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "古典杯 / Rocks Glass",
    garnish: "压碎的橙角、薄荷叶与橙皮",
    ice: "满杯碎冰 (Crushed Ice)",
    technique: "Muddle",
    techniqueZh: "捣果直调法 (Muddle & Build)",
    abv: 22,
    description: "新鲜甜橙皮精油的大爆发！整颗新鲜切块甜橙与薄荷叶在杯底剧烈捣压，释放出浓郁的天然橙油与果汁，倒入波本威士忌与碎冰，焦糖木香与鲜橙汁浓烈共鸣。",
    story: "19世纪美南 Smash 调酒流派的代表性分支，被誉为“最适合在露天门廊上畅饮的威士忌水果特调”。",
    proTips: [
      "橙皮外侧的精油是整杯酒的灵魂，用力捣压果肉的同时务必把果皮压透。"
    ],
    image: "",
    ingredients: [
      {
        name: "肯塔基波本威士忌",
        nameEn: "Bourbon Whiskey",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "whiskey-bourbon"
      },
      {
        name: "新鲜甜橙切角",
        nameEn: "Fresh Orange Wedges",
        amountMl: 3,
        amountOz: "3-4 wedges",
        unit: "块",
        rawId: "fresh-orange-juice"
      },
      {
        name: "新鲜薄荷叶",
        nameEn: "Fresh Mint Leaves",
        amountMl: 6,
        amountOz: "6-8 leaves",
        unit: "片",
        rawId: "fresh-mint"
      },
      {
        name: "单糖浆 (或细砂糖)",
        nameEn: "Simple Syrup",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "simple-syrup"
      },
      {
        name: "强气泡苏打水 (可选少量注顶)",
        nameEn: "Club Soda",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "club-soda"
      }
    ],
    steps: [
      "在古典杯底放入甜橙角、薄荷叶与单糖浆。",
      "用捣棒用力捣压，彻底挤出橙汁与橙皮精油。",
      "填满碎冰，倒入 60ml 波本威士忌。",
      "用吧勺充分上下翻动搅拌。",
      "注入少量苏打水，插上薄荷嫩枝装饰。"
    ],
    isIbaCertified: false
  },
  {
    id: "white-sangria",
    slug: "white-sangria",
    name: "地中海白桑格利亚",
    nameEn: "White Peach & Grape Sangria",
    category: "contemporary",
    categoryZh: "地中海聚会潘趣",
    baseSpirit: "Liqueur",
    baseSpiritZh: "白葡萄酒/白葡萄汁",
    flavorProfiles: [
      "果香系",
      "柑橘系",
      "清爽系",
      "甜系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 0,
      strong: 2,
      fruity: 5,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜白葡萄切片、青苹果丁、水蜜桃片与薄荷",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "水果冷萃浸渍直调法",
    abv: 10,
    description: "阳光地中海海岸的梦幻白露！干白葡萄酒、100% 纯白葡萄汁与水蜜桃汁，在青苹果、白葡萄与接骨木花利口酒中冷藏浸润，注入雪碧气泡，芳香四溢，清冽甘甜。",
    story: "西班牙与南法海岸在传统红桑格利亚基础上改良的夏季白葡萄酒果香特调，风味相比红酒版更加轻盈脱俗。",
    proTips: [
      "选用高酸度、果香清爽的干白（如长相思 Sauvignon Blanc 或雷司令 Riesling），白葡萄汁能极大增添优雅花香。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/hnuod91587851576.jpg",
    ingredients: [
      {
        name: "西班牙干白葡萄酒 (Sauvignon Blanc / Verdejo)",
        nameEn: "Spanish White Wine",
        amountMl: 90,
        amountOz: "3 oz",
        rawId: "prosecco-champagne"
      },
      {
        name: "100% 纯白葡萄汁",
        nameEn: "100% White Grape Juice",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "grape-juice-white"
      },
      {
        name: "纯水蜜桃汁",
        nameEn: "Peach Juice",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "peach-juice"
      },
      {
        name: "圣日耳曼接骨木花利口酒 (或君度)",
        nameEn: "St-Germain Elderflower Liqueur",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "st-germain"
      },
      {
        name: "新鲜青苹果丁与对半切白葡萄",
        nameEn: "Diced Green Apples & Halved Grapes",
        amountMl: 30,
        amountOz: "Fresh Fruits",
        unit: "适量",
        rawId: "fresh-grapes"
      },
      {
        name: "冰镇雪碧 / 柠檬汽水 (注顶)",
        nameEn: "Chilled Sprite",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "sprite-lemon-soda"
      }
    ],
    steps: [
      "在玻璃水罐或大酒杯中加入切片白葡萄与青苹果丁。",
      "倒入白葡萄酒、白葡萄汁、水蜜桃汁与接骨木花酒搅拌浸渍。",
      "装入满杯方冰。",
      "最后注入冰镇雪碧激发出丰富果味气泡。"
    ],
    isIbaCertified: false
  },
  {
    id: "gin-white-grape",
    slug: "gin-white-grape",
    name: "金酒白葡萄晨光",
    nameEn: "Gin White Grape Spritzer",
    category: "contemporary",
    categoryZh: "清雅花果特调",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒",
    flavorProfiles: [
      "草本系",
      "果香系",
      "清爽系"
    ],
    flavorRadar: {
      sour: 2,
      sweet: 3,
      bitter: 1,
      strong: 2,
      fruity: 4,
      herbal: 4
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜无籽绿提串与迷迭香枝",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "直调法 (Build)",
    abv: 12,
    description: "如清晨果园般纯净脱俗！金酒的杜松子与植物精油，与纯白葡萄汁的麝香葡萄清甜、青柠酸爽在气泡苏打水中交织，香气高雅飘逸，余味清冽。",
    story: "现代花果系调酒的极简杰作，利用高品质白葡萄汁的天然果酸平衡烈酒。",
    proTips: [
      "搭配一枝轻轻拍醒的新鲜迷迭香，能将白葡萄汁的草本深度提升一个维度。"
    ],
    image: "",
    ingredients: [
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "gin"
      },
      {
        name: "100% 纯白葡萄汁",
        nameEn: "100% White Grape Juice",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "grape-juice-white"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "强气泡苏打水 (注顶)",
        nameEn: "Club Soda",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "club-soda"
      }
    ],
    steps: [
      "在高球杯中加满方冰。",
      "注入金酒、纯白葡萄汁与青柠汁。",
      "用吧勺充分搅拌 15 秒。",
      "注入强气泡苏打水。",
      "在杯缘挂上一串洗净的绿提子并插入迷迭香枝。"
    ],
    isIbaCertified: false
  },
  {
    id: "peach-margarita",
    slug: "peach-margarita",
    name: "蜜桃玛格丽特",
    nameEn: "Peach Margarita",
    category: "contemporary",
    categoryZh: "夏日果香玛格丽特",
    baseSpirit: "Tequila",
    baseSpiritZh: "龙舌兰/蜜桃",
    flavorProfiles: [
      "果香系",
      "柑橘系",
      "清爽系",
      "甜系"
    ],
    flavorRadar: {
      sour: 4,
      sweet: 3,
      bitter: 0,
      strong: 3,
      fruity: 5,
      herbal: 2
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "古典杯 / Rocks Glass",
    garnish: "半圈细海盐边与新鲜水蜜桃角",
    ice: "大块方冰",
    technique: "Shake",
    techniqueZh: "摇荡法 (Shake)",
    abv: 22,
    description: "经典玛格丽特的粉嫩多汁蜕变！银龙舌兰的青草矿物气息与君度橙酒，在浓郁水蜜桃纯果汁与鲜青柠的碰撞下迸发出极其丰盈的夏日热烈果香。",
    story: "墨西哥海滩度假胜地最受欢迎的水果玛格丽特版本之一。",
    proTips: [
      "杯口半圈抹上海盐（Half Salt Rim），微咸的盐粒能瞬间将蜜桃的果糖甜美感放大三倍。"
    ],
    image: "",
    ingredients: [
      {
        name: "银龙舌兰酒 (100% Agave Blanco)",
        nameEn: "Tequila Blanco",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "tequila"
      },
      {
        name: "纯水蜜桃汁 / 桃肉果泥",
        nameEn: "Pure Peach Juice / Puree",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "peach-juice"
      },
      {
        name: "君度橙酒 (Cointreau)",
        nameEn: "Cointreau",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "cointreau"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 20,
        amountOz: "2/3 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "有机龙舌兰蜜 (或单糖浆)",
        nameEn: "Agave Nectar",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "agave-nectar"
      }
    ],
    steps: [
      "古典杯外缘抹上青柠汁并滚上少许细海盐（半圈）。",
      "在摇酒壶中倒入龙舌兰酒、水蜜桃汁、君度、青柠汁与龙舌兰蜜。",
      "加满冰块强力摇荡 12 秒。",
      "过滤倒入放有老冰的古典杯中，饰以桃角。"
    ],
    isIbaCertified: false
  },
  {
    id: "peach-rum-cooler",
    slug: "peach-rum-cooler",
    name: "蜜桃朗姆菲士",
    nameEn: "Peach Rum Cooler",
    category: "contemporary",
    categoryZh: "热带清爽长饮",
    baseSpirit: "Rum",
    baseSpiritZh: "白朗姆/蜜桃",
    flavorProfiles: [
      "果香系",
      "柑橘系",
      "清爽系",
      "甜系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 0,
      strong: 2,
      fruity: 5,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜薄荷枝与桃肉薄片",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "摇荡与雪碧注顶 (Shake & Top)",
    abv: 12,
    description: "加勒比海风遇上水蜜桃果园！古巴白朗姆酒的甘蔗果香与纯水蜜桃汁、青柠汁摇出浓稠粉白酒液，倒入杯中用冰镇雪碧注顶，气泡跳跃，甘甜冰爽。",
    story: "莫吉托与代基里爱好者的果香延伸版，是夏日露台饮酒的绝对宠儿。",
    proTips: [
      "选用高品质白朗姆酒，与水蜜桃汁的天然果香融合度极高。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/2hgwsb1504888674.jpg",
    ingredients: [
      {
        name: "加勒比白朗姆酒",
        nameEn: "White Rum",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "rum-white"
      },
      {
        name: "纯水蜜桃汁",
        nameEn: "Pure Peach Juice",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "peach-juice"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "simple-syrup"
      },
      {
        name: "冰镇雪碧 / 柠檬汽水 (注顶)",
        nameEn: "Chilled Sprite",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "sprite-lemon-soda"
      }
    ],
    steps: [
      "在摇酒壶中倒入白朗姆酒、水蜜桃汁、青柠汁与单糖浆。",
      "加冰摇荡 10 秒。",
      "在高球杯中加满方冰，过滤倒入酒液。",
      "注入冰雪碧至满杯，轻提一次。",
      "饰以新鲜薄荷与桃片。"
    ],
    isIbaCertified: false
  },
  {
    id: "mango-rum-punch",
    slug: "mango-rum-punch",
    name: "热带芒果朗姆潘趣",
    nameEn: "Tropical Mango Rum Punch",
    category: "contemporary",
    categoryZh: "Tiki 热带潘趣",
    baseSpirit: "Rum",
    baseSpiritZh: "深浅双重朗姆",
    flavorProfiles: [
      "果香系",
      "甜系",
      "柑橘系",
      "果香系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 4,
      bitter: 0,
      strong: 3,
      fruity: 5,
      herbal: 1
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "飓风杯 / Hurricane Glass",
    garnish: "新鲜芒果切角、菠萝叶与红樱桃",
    ice: "满杯碎冰 (Crushed Ice)",
    technique: "Shake",
    techniqueZh: "摇荡法 (Shake)",
    abv: 18,
    description: "狂野多汁的热带芒果风暴！深色黑朗姆与白朗姆的复合酒力，在浓郁金黄的芒果纯果泥、纯菠萝汁与鲜青柠汁中彻底绽放，每一口都是阳光海滩的狂欢。",
    story: "加勒比海岛度假胜地最具代表性的海岛潘趣酒之一。",
    proTips: [
      "使用成熟阿方索芒果泥（Mango Puree），质地浓稠厚实，能带来如丝绒奶昔般的果汁口感。"
    ],
    image: "https://www.thecocktaildb.com/images/media/drink/wyrsxu1441554538.jpg",
    ingredients: [
      {
        name: "深色黑朗姆酒",
        nameEn: "Dark Rum",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "rum-dark"
      },
      {
        name: "加勒比白朗姆酒",
        nameEn: "White Rum",
        amountMl: 30,
        amountOz: "1 oz",
        rawId: "rum-white"
      },
      {
        name: "纯芒果汁 / 芒果纯果泥",
        nameEn: "Mango Juice / Puree",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "mango-juice"
      },
      {
        name: "纯菠萝汁",
        nameEn: "Pineapple Juice",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "pineapple-juice"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "红石榴糖浆 (少量沉底)",
        nameEn: "Grenadine Syrup",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "grenadine"
      }
    ],
    steps: [
      "在摇酒壶中倒入双重朗姆、芒果泥、菠萝汁与青柠汁。",
      "加满冰块强力摇荡 15 秒。",
      "在飓风杯中加满碎冰，过滤倒入酒液。",
      "淋入少量红石榴糖浆沉底，饰以芒果角与凤梨叶。"
    ],
    isIbaCertified: false
  },
  {
    id: "guava-gin-cooler",
    slug: "guava-gin-cooler",
    name: "芭乐金酒冷饮",
    nameEn: "Pink Guava Gin Cooler",
    category: "contemporary",
    categoryZh: "粉红热带特调",
    baseSpirit: "Gin",
    baseSpiritZh: "金酒/芭乐汁",
    flavorProfiles: [
      "果香系",
      "草本系",
      "清爽系",
      "柑橘系"
    ],
    flavorRadar: {
      sour: 3,
      sweet: 3,
      bitter: 1,
      strong: 2,
      fruity: 5,
      herbal: 3
    },
    difficulty: "easy",
    difficultyZh: "简单",
    glass: "高球杯 / Highball Glass",
    garnish: "新鲜红心芭乐切片与百里香嫩枝",
    ice: "满杯方冰",
    technique: "Build",
    techniqueZh: "摇荡与汤力水注顶",
    abv: 12,
    description: "梦幻珊瑚粉色的热带微醺！金酒的杜松子与清翠草本，遇上红心芭乐汁独特的麝香草莓果香，在冰镇汤力水或苏打水的气泡升腾中，清凉解渴、回味甘甜。",
    story: "近年来在热带海岛与先锋鸡尾酒吧大放异彩的水果特调，粉红色泽极具吸睛魅力。",
    proTips: [
      "选用红心番石榴（Pink Guava）果汁，香气比白芭乐更为浓烈奔放。"
    ],
    image: "",
    ingredients: [
      {
        name: "伦敦干金酒",
        nameEn: "London Dry Gin",
        amountMl: 45,
        amountOz: "1 1/2 oz",
        rawId: "gin"
      },
      {
        name: "红心芭乐汁 / 番石榴原汁",
        nameEn: "Pink Guava Juice",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "guava-juice"
      },
      {
        name: "新鲜青柠汁",
        nameEn: "Fresh Lime Juice",
        amountMl: 15,
        amountOz: "1/2 oz",
        rawId: "fresh-lime-juice"
      },
      {
        name: "单糖浆",
        nameEn: "Simple Syrup",
        amountMl: 10,
        amountOz: "1/3 oz",
        rawId: "simple-syrup"
      },
      {
        name: "冰镇汤力水或苏打水 (注顶)",
        nameEn: "Tonic Water or Club Soda",
        amountMl: 60,
        amountOz: "2 oz",
        rawId: "tonic-water"
      }
    ],
    steps: [
      "在摇酒壶中倒入金酒、芭乐汁、青柠汁与单糖浆。",
      "加冰摇荡 10 秒。",
      "在高球杯中加满冰块，过滤倒入酒液。",
      "注入汤力水或苏打水至满杯。",
      "插上芭乐切片与百里香装饰。"
    ],
    isIbaCertified: false
  },
  {
  id: "gimlet",
  slug: "gimlet",
  name: "金雷特 / 吉姆雷特",
  nameEn: "Gimlet",
  category: "classic",
  categoryZh: "传世经典",
  baseSpirit: "Gin",
  baseSpiritZh: "金酒",
  flavorProfiles: [
    "清爽系",
    "草本系",
    "清爽系",
    "柑橘系"
  ],
  flavorRadar: {
    sour: 4,
    sweet: 2,
    bitter: 1,
    strong: 4,
    fruity: 3,
    herbal: 4
  },
  difficulty: "easy",
  difficultyZh: "简单",
  glass: "马天尼杯 / 浅碟香槟杯 (Coupe Glass)",
  garnish: "新鲜青柠轮片 (Lime Wheel)",
  ice: "无冰 (提前冰镇酒杯)",
  technique: "Shake",
  techniqueZh: "摇荡法",
  abv: 28,
  description: "银座调酒教父上田和男将其推向神级境界的极简经典。仅由金酒、青柠汁与糖浆摇荡而成，酸甜平衡与天鹅绒般的微气泡是其灵魂。",
  story: "19世纪末由英国皇家海军军医总监托马斯·吉姆雷特爵士倡导饮用，用金酒配青柠汁预防坏血病。上田和男凭借 Hard Shake 硬摇手法将其演绎为银座调酒界的试金石。",
  proTips: [
    "上田和男强调：金雷特的难点在于青柠酸度与金酒烈度的完美咬合，硬摇荡能打破青柠酸涩感并充入细密微气泡。",
    "可根据个人喜好微调糖浆比例（15ml-20ml）。"
  ],
  image: "https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg",
  ingredients: [
    {
      name: "伦敦干金酒",
      nameEn: "London Dry Gin",
      amountMl: 60,
      amountOz: "2 oz",
      rawId: "gin"
    },
    {
      name: "新鲜青柠汁",
      nameEn: "Fresh Lime Juice",
      amountMl: 22.5,
      amountOz: "3/4 oz",
      rawId: "fresh-lime-juice"
    },
    {
      name: "单糖浆 (1:1)",
      nameEn: "Simple Syrup",
      amountMl: 15,
      amountOz: "1/2 oz",
      rawId: "simple-syrup"
    }
  ],
  steps: [
    "将浅碟香槟杯预冷备用。",
    "在雪克壶中加入金酒、鲜榨青柠汁与单糖浆。",
    "加入大量结实硬冰，使用 Hard Shake 硬摇手法剧烈摇荡 10-12 秒。",
    "双重过滤（Double Strain）倒入预冷的酒杯中。",
    "在杯缘装饰新鲜青柠轮片即可呈递。"
  ],
  isIbaCertified: true,
  ibaCategory: "Contemporary Classics"
},
  {
  id: "kings-valley",
  slug: "kings-valley",
  name: "国王山谷",
  nameEn: "King's Valley",
  category: "creative",
  categoryZh: "大师名作",
  baseSpirit: "Whiskey",
  baseSpiritZh: "威士忌",
  flavorProfiles: [
    "草本系",
    "果香系",
    "烈酒感",
    "清爽系"
  ],
  flavorRadar: {
    sour: 3,
    sweet: 3,
    bitter: 2,
    strong: 4,
    fruity: 3,
    herbal: 4
  },
  difficulty: "advanced",
  difficultyZh: "进阶",
  glass: "马天尼杯 / Martini Glass",
  garnish: "青柠皮油喷雾 (Lime Peel Express)",
  ice: "无冰 (提前冰镇酒杯)",
  technique: "Shake",
  techniqueZh: "摇荡法 (Hard Shake)",
  abv: 26,
  description: "银座调酒教父上田和男1986年斩获苏格兰威士忌鸡尾酒大赛全球冠军的传世名作。呈现出如幽深山谷般通透纯净的翡翠绿光泽。",
  story: "1986年上田和男赴苏格兰参加国际鸡尾酒大赛时创制。他巧妙运用绿利口酒与橙酒、青柠汁中和苏格兰威士忌的泥煤烟熏感，惊艳全场并夺冠。",
  proTips: [
    "绿利口酒的用量需极其精准，仅需 5ml 即可调制出通透的高级翡翠绿色泽，过多会掩盖威士忌本味。"
  ],
  image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80",
  ingredients: [
    {
      name: "苏格兰威士忌",
      nameEn: "Scotch Whisky",
      amountMl: 40,
      amountOz: "1 1/3 oz",
      rawId: "whiskey-scotch"
    },
    {
      name: "君度橙酒",
      nameEn: "Cointreau",
      amountMl: 10,
      amountOz: "1/3 oz",
      rawId: "cointreau"
    },
    {
      name: "绿利口酒 / 蜜多丽",
      nameEn: "Green Liqueur",
      amountMl: 5,
      amountOz: "1/6 oz",
      rawId: "midori"
    },
    {
      name: "新鲜青柠汁",
      nameEn: "Fresh Lime Juice",
      amountMl: 10,
      amountOz: "1/3 oz",
      rawId: "fresh-lime-juice"
    }
  ],
  steps: [
    "在雪克壶中加入苏格兰威士忌、君度橙酒、绿薄荷/绿蜜瓜利口酒与鲜榨青柠汁。",
    "加入硬冰，施展标志性的 Hard Shake 手法摇荡 12 秒使酒液乳化出天鹅绒质感。",
    "双重过滤滤入预冷的马天尼杯中。",
    "在酒液表面轻轻挤压青柠皮油提香。"
  ]
},
  {
  id: "city-coral",
  slug: "city-coral",
  name: "城市珊瑚",
  nameEn: "City Coral",
  category: "creative",
  categoryZh: "大师名作",
  baseSpirit: "Liqueur",
  baseSpiritZh: "利口酒",
  flavorProfiles: [
    "甜系",
    "果香系",
    "苦系",
    "清爽系"
  ],
  flavorRadar: {
    sour: 3,
    sweet: 4,
    bitter: 2,
    strong: 2,
    fruity: 5,
    herbal: 2
  },
  difficulty: "medium",
  difficultyZh: "中等",
  glass: "马天尼杯 / 盐边杯",
  garnish: "珊瑚色粉盐边与红樱桃 (Coral Salt Rim)",
  ice: "无冰 (提前冰镇酒杯)",
  technique: "Shake",
  techniqueZh: "摇荡法",
  abv: 16,
  description: "上田和男1984年全日本调酒锦标赛冠军之作。以珊瑚礁与都市霓虹为灵感，杯沿附着一圈珊瑚粉色盐边，风味层次丰富甜润。",
  story: "上田和男代表东京出战全日本调酒大赛时的获奖作品，展现了日本调酒对色彩美学与杯口装饰工艺（Rim）的极高追求。",
  proTips: [
    "金巴利苦酒赋予其珊瑚微红的光泽，与蜜多丽的翠绿交织出极其迷人的粉调。"
  ],
  image: "https://images.unsplash.com/photo-1574056067299-a11c5b576e69?auto=format&fit=crop&w=1000&q=80",
  ingredients: [
    {
      name: "蜜多丽蜜瓜甜酒",
      nameEn: "Midori Melon Liqueur",
      amountMl: 30,
      amountOz: "1 oz",
      rawId: "midori"
    },
    {
      name: "新鲜西柚汁",
      nameEn: "Fresh Grapefruit Juice",
      amountMl: 30,
      amountOz: "1 oz",
      rawId: "grapefruit-juice"
    },
    {
      name: "金巴利苦酒",
      nameEn: "Campari",
      amountMl: 5,
      amountOz: "1/6 oz",
      rawId: "campari"
    },
    {
      name: "汤力水",
      nameEn: "Tonic Water",
      amountMl: 15,
      amountOz: "1/2 oz",
      rawId: "tonic-water"
    }
  ],
  steps: [
    "用青柠角擦拭马天尼杯沿，轻蘸粉红珊瑚盐制作半边盐边。",
    "在雪克壶中加入蜜多丽蜜瓜甜酒、新鲜西柚汁、汤力水与少许金巴利苦酒。",
    "加冰剧烈摇荡 10 秒。",
    "细滤倒入准备好的盐边杯中即可。"
  ]
},
  {
  id: "fathers-advice",
  slug: "fathers-advice",
  name: "父亲的劝诫",
  nameEn: "Father's Advice",
  category: "creative",
  categoryZh: "大师名作",
  baseSpirit: "Rum",
  baseSpiritZh: "朗姆酒",
  flavorProfiles: [
    "烈酒感",
    "草本系",
    "苦系",
    "果香系"
  ],
  flavorRadar: {
    sour: 1,
    sweet: 3,
    bitter: 4,
    strong: 5,
    fruity: 2,
    herbal: 4
  },
  difficulty: "advanced",
  difficultyZh: "进阶",
  glass: "尼克诺拉杯 / Nick & Nora Glass",
  garnish: "橙皮卷 (Orange Twist)",
  ice: "无冰 (提前冰镇酒杯)",
  technique: "Stir",
  techniqueZh: "搅拌法",
  abv: 30,
  description: "世界级华裔大师段冉斩获全美百加得传世大赛冠军代表作。向父亲两代移民的拼搏精神致敬，融汇陈年朗姆、草本苦酒与雪莉酒。",
  story: "段冉（Ran Duan）在波士顿家族餐馆创立 Baldwin Bar 时创作此酒，夺得全美冠军并名列世界决赛，成为全球华裔调酒界最具代表性的现代经典。",
  proTips: [
    "搅拌时需保持手法平稳连贯，让雪莉酒的氧化坚果香气与陈酿朗姆的木桶香深度融合。"
  ],
  image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=1000&q=80",
  ingredients: [
    {
      name: "陈年深色朗姆酒",
      nameEn: "Aged Dark Rum",
      amountMl: 45,
      amountOz: "1.5 oz",
      rawId: "rum-dark"
    },
    {
      name: "菲诺雪莉酒",
      nameEn: "Fino Sherry",
      amountMl: 20,
      amountOz: "2/3 oz",
      rawId: "sherry-fino"
    },
    {
      name: "阿玛罗草本苦酒",
      nameEn: "Amaro Nonino",
      amountMl: 15,
      amountOz: "1/2 oz",
      rawId: "amaro-nonino"
    },
    {
      name: "安哥斯图拉苦精",
      nameEn: "Angostura Bitters",
      amountMl: 2,
      amountOz: "2 dashes",
      rawId: "angostura-bitters"
    }
  ],
  steps: [
    "在调酒杯中加入陈年朗姆酒、菲诺雪莉酒、草本苦酒（Amaro）与少许豆蔻苦精。",
    "加入大冰块，使用吧勺平稳搅拌 35-40 圈至充分冰镇与微稀释。",
    "滤入预冷的尼克诺拉杯中。",
    "喷洒橙皮精油并饰于杯中。"
  ]
},
  {
  id: "breakfast-martini",
  slug: "breakfast-martini",
  name: "早餐马天尼",
  nameEn: "Breakfast Martini",
  category: "modern",
  categoryZh: "新时代鸡尾酒",
  baseSpirit: "Gin",
  baseSpiritZh: "金酒",
  flavorProfiles: [
    "清爽系",
    "柑橘系",
    "苦系",
    "清爽系"
  ],
  flavorRadar: {
    sour: 4,
    sweet: 3,
    bitter: 2,
    strong: 4,
    fruity: 4,
    herbal: 3
  },
  difficulty: "medium",
  difficultyZh: "中等",
  glass: "马天尼杯 / Martini Glass",
  garnish: "迷你吐司角或橙皮条 (Mini Toast or Orange Zest)",
  ice: "无冰 (提前冰镇酒杯)",
  technique: "Shake",
  techniqueZh: "摇荡法",
  abv: 25,
  description: "伦敦传奇调酒泰斗萨尔瓦托雷·卡拉布雷斯（The Maestro）1996年创制的现代名作。将英式早餐橙皮果酱融入金酒与君度，开启果酱调酒先河。",
  story: "1996年萨尔瓦托雷的妻子在清晨为他准备了涂满橙皮果酱的英式吐司。他灵光一闪将一勺果酱带入吧台，结合金酒调制出了这杯风靡全球的早午餐经典。",
  proTips: [
    "摇荡前务必用吧勺先将果酱与柠檬汁溶散，否则冷冰会使果酱凝结成团。双重细滤可去除细小果肉残渣。"
  ],
  image: "",
  ingredients: [
    {
      name: "伦敦干金酒",
      nameEn: "London Dry Gin",
      amountMl: 50,
      amountOz: "1 2/3 oz",
      rawId: "gin"
    },
    {
      name: "君度橙酒",
      nameEn: "Cointreau",
      amountMl: 15,
      amountOz: "1/2 oz",
      rawId: "cointreau"
    },
    {
      name: "新鲜柠檬汁",
      nameEn: "Fresh Lemon Juice",
      amountMl: 15,
      amountOz: "1/2 oz",
      rawId: "fresh-lemon-juice"
    },
    {
      name: "英式橙皮果酱",
      nameEn: "Orange Marmalade",
      amountMl: 15,
      amountOz: "1 barspoon",
      rawId: "simple-syrup"
    }
  ],
  steps: [
    "在雪克壶中加入一满茶匙优质英式橙皮果酱（Orange Marmalade）与新鲜柠檬汁。",
    "用吧勺将果酱在柠檬汁中充分搅拌化开。",
    "加入金酒与君度橙酒，装满坚硬冰块。",
    "剧烈摇荡 15 秒使果酱与酒液完美乳化融合。",
    "双重细滤倒入预冷的马天尼杯中。"
  ],
  isIbaCertified: true,
  ibaCategory: "New Era Drinks"
},
  {
  id: "old-cuban",
  slug: "old-cuban",
  name: "老古巴人",
  nameEn: "Old Cuban",
  category: "modern",
  categoryZh: "新时代鸡尾酒",
  baseSpirit: "Rum",
  baseSpiritZh: "朗姆酒",
  flavorProfiles: [
    "草本系",
    "清爽系",
    "果香系",
    "甜系"
  ],
  flavorRadar: {
    sour: 3,
    sweet: 3,
    bitter: 1,
    strong: 3,
    fruity: 3,
    herbal: 5
  },
  difficulty: "medium",
  difficultyZh: "中等",
  glass: "浅碟香槟杯 / Coupe Glass",
  garnish: "新鲜薄荷叶 (Mint Leaf)",
  ice: "无冰 (提前冰镇酒杯)",
  technique: "Shake",
  techniqueZh: "摇荡与顶注 (Shake & Top)",
  abv: 18,
  description: "纽约 Pegu Club 创始人奥黛丽·桑德斯（Audrey Saunders）2001年发明。被誉为“莫吉托的高级香槟进化版”，当代精调复兴里程碑之作。",
  story: "2001年奥黛丽在纽约创制此酒，将陈年朗姆酒、鲜薄荷、苦精与法国干型香槟融为一体，迅速成为全球顶级鸡尾酒吧的必点招牌。",
  proTips: [
    "压榨薄荷叶切忌捣碎茎部以免释放苦涩草腥味，只需轻柔按压释放精油。香槟务必冰镇透彻。"
  ],
  image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80",
  ingredients: [
    {
      name: "陈年深色朗姆酒",
      nameEn: "Aged Dark Rum",
      amountMl: 45,
      amountOz: "1.5 oz",
      rawId: "rum-dark"
    },
    {
      name: "干型香槟 / 起泡酒",
      nameEn: "Brut Champagne",
      amountMl: 60,
      amountOz: "2 oz",
      rawId: "prosecco-champagne"
    },
    {
      name: "新鲜青柠汁",
      nameEn: "Fresh Lime Juice",
      amountMl: 22.5,
      amountOz: "3/4 oz",
      rawId: "fresh-lime-juice"
    },
    {
      name: "单糖浆",
      nameEn: "Simple Syrup",
      amountMl: 30,
      amountOz: "1 oz",
      rawId: "simple-syrup"
    },
    {
      name: "安哥斯图拉苦精",
      nameEn: "Angostura Bitters",
      amountMl: 2,
      amountOz: "2 dashes",
      rawId: "angostura-bitters"
    }
  ],
  steps: [
    "在雪克壶底放入 6-8 片新鲜薄荷叶、青柠汁与单糖浆，轻柔压出薄荷香气。",
    "加入陈年深色朗姆酒与安哥斯图拉苦精，加入冰块剧烈摇荡 10 秒。",
    "双重过滤倒入预冷的浅碟香槟杯中。",
    "顶注冰镇干型香槟或普罗塞克起泡酒，轻轻搅拌一次。",
    "在酒液表面漂浮一片鲜薄荷叶作为装饰。"
  ],
  isIbaCertified: true,
  ibaCategory: "New Era Drinks"
},
  {
  id: "gin-gin-mule",
  slug: "gin-gin-mule",
  name: "金酒姜汁骡子 / 金金骡子",
  nameEn: "Gin-Gin Mule",
  category: "modern",
  categoryZh: "大师名作",
  baseSpirit: "Gin",
  baseSpiritZh: "金酒",
  flavorProfiles: [
    "辛辣系",
    "草本系",
    "清爽系",
    "柑橘系"
  ],
  flavorRadar: {
    sour: 3,
    sweet: 3,
    bitter: 1,
    strong: 3,
    fruity: 2,
    herbal: 5
  },
  difficulty: "easy",
  difficultyZh: "简单",
  glass: "高球杯 / 铜马克杯 (Highball / Copper Mug)",
  garnish: "薄荷枝与青柠轮片 (Mint Sprig & Lime Wheel)",
  ice: "满冰 (Cubed Ice)",
  technique: "Shake",
  techniqueZh: "摇荡与顶注",
  abv: 14,
  description: "奥黛丽·桑德斯2000年在纽约 Bemelmans Bar 创制的传世之作。将莫吉托与莫斯科骡子完美合体，引爆了21世纪姜汁啤酒复兴潮。",
  story: "在奥黛丽推出金金骡子之前，优质非酒精姜啤几乎在美洲绝迹。这杯酒的火爆直接催生了现代高品质姜啤品牌的全面复兴。",
  proTips: [
    "务必使用发酵型辛辣姜汁啤酒（Ginger Beer），而非寡淡的姜汁汽水（Ginger Ale）。"
  ],
  image: "",
  ingredients: [
    {
      name: "伦敦干金酒",
      nameEn: "London Dry Gin",
      amountMl: 45,
      amountOz: "1.5 oz",
      rawId: "gin"
    },
    {
      name: "优质姜汁啤酒",
      nameEn: "Ginger Beer",
      amountMl: 90,
      amountOz: "3 oz",
      rawId: "ginger-beer"
    },
    {
      name: "新鲜青柠汁",
      nameEn: "Fresh Lime Juice",
      amountMl: 22.5,
      amountOz: "3/4 oz",
      rawId: "fresh-lime-juice"
    },
    {
      name: "单糖浆",
      nameEn: "Simple Syrup",
      amountMl: 15,
      amountOz: "1/2 oz",
      rawId: "simple-syrup"
    }
  ],
  steps: [
    "在雪克壶中轻压薄荷叶、单糖浆与鲜青柠汁。",
    "加入金酒与冰块，轻快摇荡 8 秒。",
    "滤入装有新鲜冰块的高球杯中。",
    "顶注优质辛辣姜汁啤酒（Ginger Beer），轻轻提拉吧勺混匀。",
    "插上拍醒的薄荷枝装饰。"
  ]
},
  {
  id: "blue-blazer",
  slug: "blue-blazer",
  name: "蓝色火焰",
  nameEn: "Blue Blazer",
  category: "classic",
  categoryZh: "宗师鼻祖",
  baseSpirit: "Whiskey",
  baseSpiritZh: "威士忌",
  flavorProfiles: [
    "烈酒感",
    "甜系",
    "柑橘系"
  ],
  flavorRadar: {
    sour: 2,
    sweet: 3,
    bitter: 1,
    strong: 5,
    fruity: 2,
    herbal: 2
  },
  difficulty: "advanced",
  difficultyZh: "进阶",
  glass: "耐热马克杯 / Toddy Glass",
  garnish: "柠檬皮条与肉桂 (Lemon Peel & Cinnamon)",
  ice: "热饮 (Hot / Flaming)",
  technique: "Build",
  techniqueZh: "火焰对倒法 (Flaming Toss)",
  abv: 32,
  description: "19世纪鸡尾酒之父杰里·托马斯（Jerry Thomas）名震世界的火焰神作。将燃烧着蓝色幽火的滚烫烈酒在两个银杯之间来回倾倒拉出一条火龙。",
  story: "1850年代杰里·托马斯在旧金山淘金热时期的埃尔多拉多酒吧创制。当时一名淘金客要求一杯“能给灵魂解冻的真家伙”，托马斯便点燃了威士忌与开水创造了这门传世绝技。",
  proTips: [
    "安全第一：操作火焰对倒前务必清理吧台周围易燃物，并在地面铺湿毛巾，推荐使用厚金属带柄杯操作。"
  ],
  image: "",
  ingredients: [
    {
      name: "高度波本/苏格兰威士忌",
      nameEn: "Overproof Whiskey",
      amountMl: 60,
      amountOz: "2 oz",
      rawId: "whiskey-bourbon"
    },
    {
      name: "滚烫开水",
      nameEn: "Boiling Water",
      amountMl: 60,
      amountOz: "2 oz",
      rawId: "club-soda"
    },
    {
      name: "蜂蜜或细砂糖",
      nameEn: "Honey or Sugar",
      amountMl: 10,
      amountOz: "1 barspoon",
      rawId: "honey-syrup"
    }
  ],
  steps: [
    "准备两个带手柄的厚金属调酒杯。",
    "在一个金属杯中加入高度威士忌与蜂蜜。",
    "在另一个金属杯中加入滚烫沸水。",
    "点燃威士忌液体使其燃起蓝色火焰，在两杯之间悬空拉倒 4-5 次。",
    "倒入预热的耐热玻璃杯中，熄灭火焰，加入柠檬皮即可趁热享用。"
  ]
},
  {
  id: "japanese-highball",
  slug: "japanese-highball",
  name: "日式威士忌高球",
  nameEn: "Japanese Highball",
  category: "classic",
  categoryZh: "银座经典",
  baseSpirit: "Whiskey",
  baseSpiritZh: "威士忌",
  flavorProfiles: [
    "清爽系",
    "烈酒感",
    "柑橘系"
  ],
  flavorRadar: {
    sour: 1,
    sweet: 1,
    bitter: 1,
    strong: 2,
    fruity: 1,
    herbal: 3
  },
  difficulty: "easy",
  difficultyZh: "简单",
  glass: "高球杯 / Highball Glass",
  garnish: "新鲜柠檬皮 (Lemon Peel)",
  ice: "老冰条 (Hand-carved Ice Column)",
  technique: "Build",
  techniqueZh: "直调法",
  abv: 10,
  description: "银座调酒师极致匠心与苏打水气泡力学的典范之作。将日本威士忌、冰块与强气泡苏打水以 13.5 次精准搅拌呈现出极致清冽。",
  story: "日本调酒界将原本简单的西方高球升华为一门艺术。上野秀嗣、上田和男等大师通过控温、控冰与零消泡注水技法，将其打造成日本国宝级佐餐饮品。",
  proTips: [
    "威士忌与苏打水的黄金比例为 1:3 到 1:4。苏打水务必保持在 0-2℃ 极度冰镇状态以锁住碳酸气泡。"
  ],
  image: "https://www.thecocktaildb.com/images/media/drink/dhvr7d1504519752.jpg",
  ingredients: [
    {
      name: "日本威士忌",
      nameEn: "Japanese Whisky",
      amountMl: 45,
      amountOz: "1.5 oz",
      rawId: "whiskey-japanese"
    },
    {
      name: "超强气泡苏打水",
      nameEn: "Club Soda",
      amountMl: 135,
      amountOz: "4.5 oz",
      rawId: "club-soda"
    }
  ],
  steps: [
    "在高球杯中放入一根手工切割的无气泡透明老冰柱。",
    "注入日本威士忌，顺时针搅拌 13.5 圈为酒液与杯体充分降温。",
    "沿着杯壁轻柔注入冰镇强气泡苏打水，避免直接冲击冰块造成气泡消散。",
    "吧勺伸入杯底轻轻向上提拉一次混匀即可。",
    "在杯口喷洒少许柠檬皮油提香。"
  ]
},
  {
  id: "fog-cutter",
  slug: "fog-cutter",
  name: "除雾者",
  nameEn: "Fog Cutter",
  category: "tiki",
  categoryZh: "热带提基 (Tiki)",
  baseSpirit: "Rum",
  baseSpiritZh: "朗姆酒",
  flavorProfiles: [
    "果香系",
    "清爽系",
    "烈酒感",
    "甜系"
  ],
  flavorRadar: {
    sour: 4,
    sweet: 4,
    bitter: 1,
    strong: 5,
    fruity: 5,
    herbal: 2
  },
  difficulty: "medium",
  difficultyZh: "中等",
  glass: "提基杯 / 柯林杯 (Tiki Mug)",
  garnish: "新鲜薄荷枝与红樱桃 (Mint & Cherry)",
  ice: "碎冰 (Crushed Ice)",
  technique: "Shake",
  techniqueZh: "摇荡与雪莉漂浮",
  abv: 22,
  description: "维克商人（Trader Vic）1940年代创制的提基重击之作。将白兰地、金酒与朗姆酒三基酒复合，最后漂浮雪莉酒，“驱散一切迷雾”。",
  story: "维克多·伯杰龙在加州奥克兰 Trader Vic's 发明。他曾打趣道：“当你喝下两杯除雾者，你脑海里的迷雾不仅会被驱散，整个人甚至会开始发光。”",
  proTips: [
    "顶层的雪莉酒漂浮（Sherry Float）是整杯酒风味的灵魂，第一口能吸入雪莉酒的干爽坚果香与下层的热带果味碰撞。"
  ],
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Fog_Cutter%2C_in_San_Francisco_-%29_%286218450097%29.jpg/960px-Fog_Cutter%2C_in_San_Francisco_-%29_%286218450097%29.jpg",
  ingredients: [
    {
      name: "白朗姆酒",
      nameEn: "White Rum",
      amountMl: 45,
      amountOz: "1.5 oz",
      rawId: "rum-white"
    },
    {
      name: "干邑白兰地",
      nameEn: "Cognac",
      amountMl: 30,
      amountOz: "1 oz",
      rawId: "brandy-cognac"
    },
    {
      name: "伦敦干金酒",
      nameEn: "Gin",
      amountMl: 15,
      amountOz: "1/2 oz",
      rawId: "gin"
    },
    {
      name: "新鲜橙汁",
      nameEn: "Fresh Orange Juice",
      amountMl: 45,
      amountOz: "1.5 oz",
      rawId: "fresh-orange-juice"
    },
    {
      name: "新鲜柠檬汁",
      nameEn: "Fresh Lemon Juice",
      amountMl: 30,
      amountOz: "1 oz",
      rawId: "fresh-lemon-juice"
    },
    {
      name: "杏仁糖浆",
      nameEn: "Orgeat Syrup",
      amountMl: 15,
      amountOz: "1/2 oz",
      rawId: "orgeat-syrup"
    },
    {
      name: "菲诺雪莉酒",
      nameEn: "Sherry Float",
      amountMl: 15,
      amountOz: "1/2 oz",
      rawId: "sherry-fino"
    }
  ],
  steps: [
    "在雪克壶中加入白朗姆酒、干邑白兰地、金酒、鲜橙汁、鲜柠檬汁与杏仁糖浆。",
    "加入碎冰剧烈摇荡 10 秒。",
    "将酒液连同碎冰一同倒入提基杯中，补满碎冰。",
    "在酒液顶层轻柔漂浮 15ml 雪莉酒。",
    "插上薄荷枝与鸡尾酒红樱桃装饰。"
  ]
},
  {
  id: "serendipity",
  slug: "serendipity",
  name: "意外惊喜",
  nameEn: "Serendipity",
  category: "modern",
  categoryZh: "大师名作",
  baseSpirit: "Brandy",
  baseSpiritZh: "白兰地",
  flavorProfiles: [
    "果香系",
    "草本系",
    "清爽系",
    "清爽系"
  ],
  flavorRadar: {
    sour: 3,
    sweet: 3,
    bitter: 1,
    strong: 3,
    fruity: 5,
    herbal: 4
  },
  difficulty: "easy",
  difficultyZh: "简单",
  glass: "高球杯 / 香槟杯 (Highball Glass)",
  garnish: "新鲜薄荷顶芽 (Fresh Mint Sprig)",
  ice: "满冰 (Cubed Ice)",
  technique: "Build",
  techniqueZh: "直调法",
  abv: 15,
  description: "巴黎丽兹酒店海明威酒吧传奇馆长科林·菲尔德（Colin Field）1994年发明的法式国宝级名作。被巴黎人赞誉为“装在玻璃杯中的法兰西精髓”。",
  story: "科林·菲尔德在巴黎丽兹创作，以诺曼底卡尔瓦多斯苹果白兰地为基底，搭配鲜榨苹果汁、薄荷叶与冰镇香槟，是海明威酒吧三十年来的最高人气签名酒。",
  proTips: [
    "使用诺曼底 AOC 产区苹果白兰地（Calvados）能获得最纯正的木桶苹果芬芳。"
  ],
  image: "https://www.thecocktaildb.com/images/media/drink/t5pv461606773026.jpg",
  ingredients: [
    {
      name: "卡尔瓦多斯苹果白兰地",
      nameEn: "Calvados",
      amountMl: 30,
      amountOz: "1 oz",
      rawId: "calvados"
    },
    {
      name: "纯苹果汁",
      nameEn: "Pure Apple Juice",
      amountMl: 30,
      amountOz: "1 oz",
      rawId: "apple-juice"
    },
    {
      name: "干型香槟",
      nameEn: "Brut Champagne",
      amountMl: 60,
      amountOz: "2 oz",
      rawId: "prosecco-champagne"
    },
    {
      name: "单糖浆",
      nameEn: "Simple Syrup",
      amountMl: 5,
      amountOz: "1 barspoon",
      rawId: "simple-syrup"
    }
  ],
  steps: [
    "在玻璃杯底轻轻揉捏拍醒几片鲜薄荷叶。",
    "加入少许单糖浆与卡尔瓦多斯苹果白兰地。",
    "加入澄清苹果汁，加入冰块轻轻搅拌。",
    "最后注入冰镇香槟至满杯，饰以薄荷枝上桌。"
  ]
},
  {
  id: "gordons-cup",
  slug: "gordons-cup",
  name: "戈登之杯",
  nameEn: "Gordon's Cup",
  category: "modern",
  categoryZh: "大师名作",
  baseSpirit: "Gin",
  baseSpiritZh: "金酒",
  flavorProfiles: [
    "草本系",
    "清爽系",
    "清爽系",
    "柑橘系"
  ],
  flavorRadar: {
    sour: 4,
    sweet: 2,
    bitter: 1,
    strong: 3,
    fruity: 2,
    herbal: 5
  },
  difficulty: "easy",
  difficultyZh: "简单",
  glass: "古典杯 / Rocks Glass",
  garnish: "新鲜黄瓜切片与海盐粒 (Cucumber Wheel & Salt)",
  ice: "碎冰 (Crushed Ice)",
  technique: "Shake",
  techniqueZh: "捣压摇荡法",
  abv: 18,
  description: "已故传奇萨沙·佩特拉斯克（Sasha Petraske）在 Milk & Honey 创制的夏日神作。将鲜黄瓜、青柠角与海盐捣压，带来无可比拟的爽脆口感。",
  story: "萨沙·佩特拉斯克2000年代初在纽约地下酒吧 Milk & Honey 推出，随后被 Sam Ross 与全球弟子传遍世界，成为精调酒吧最受欢迎的黄瓜风味鸡尾酒。",
  proTips: [
    "微量海盐不仅不会变咸，反而能大幅提升黄瓜的鲜甜与金酒的草本层次。"
  ],
  image: "",
  ingredients: [
    {
      name: "伦敦干金酒",
      nameEn: "London Dry Gin",
      amountMl: 60,
      amountOz: "2 oz",
      rawId: "gin"
    },
    {
      name: "新鲜青柠汁",
      nameEn: "Fresh Lime Juice",
      amountMl: 22.5,
      amountOz: "3/4 oz",
      rawId: "fresh-lime-juice"
    },
    {
      name: "单糖浆",
      nameEn: "Simple Syrup",
      amountMl: 22.5,
      amountOz: "3/4 oz",
      rawId: "simple-syrup"
    }
  ],
  steps: [
    "在雪克壶底加入 3-4 片新鲜黄瓜切片、2 个青柠角与一小撮海盐。",
    "用捣棒充分压出黄瓜汁与青柠酸香。",
    "加入金酒与单糖浆，加入碎冰剧烈摇荡 10 秒。",
    "将酒液连同碎冰一同倒入古典杯中，补满碎冰并饰以黄瓜片。"
  ]
},
  {
  id: "ritz-fizz",
  slug: "ritz-fizz",
  name: "彩虹厅丽兹起泡",
  nameEn: "Ritz Fizz",
  category: "modern",
  categoryZh: "大师名作",
  baseSpirit: "Liqueur",
  baseSpiritZh: "利口酒",
  flavorProfiles: [
    "果香系",
    "甜系",
    "清爽系",
    "柑橘系"
  ],
  flavorRadar: {
    sour: 2,
    sweet: 4,
    bitter: 1,
    strong: 2,
    fruity: 4,
    herbal: 2
  },
  difficulty: "easy",
  difficultyZh: "简单",
  glass: "香槟笛形杯 / Champagne Flute",
  garnish: "食用玫瑰花瓣 (Rose Petal)",
  ice: "无冰 (提前冰镇酒杯)",
  technique: "Build",
  techniqueZh: "直调法",
  abv: 15,
  description: "“鸡尾酒之王”戴尔·戴格罗夫（Dale DeGroff）为纽约彩虹厅重新开业创制的迎宾名作。晶莹的蓝宝石气泡中泛着玫瑰瓣，极尽奢华。",
  story: "1987年戴格罗夫执掌洛克菲勒中心彩虹厅，为了给宾客营造难忘的开场仪式感而特别设计，成为彩虹厅长盛不衰的庆典标志。",
  proTips: [
    "蓝柑桂与杏仁酒的香气交融出类似热带杏仁花香的迷人风味。"
  ],
  image: "",
  ingredients: [
    {
      name: "蓝柑桂酒",
      nameEn: "Blue Curaçao",
      amountMl: 15,
      amountOz: "1/2 oz",
      rawId: "blue-curacao"
    },
    {
      name: "迪萨罗诺杏仁酒",
      nameEn: "Amaretto",
      amountMl: 15,
      amountOz: "1/2 oz",
      rawId: "amaretto"
    },
    {
      name: "新鲜柠檬汁",
      nameEn: "Fresh Lemon Juice",
      amountMl: 10,
      amountOz: "1/3 oz",
      rawId: "fresh-lemon-juice"
    },
    {
      name: "干型香槟",
      nameEn: "Brut Champagne",
      amountMl: 90,
      amountOz: "3 oz",
      rawId: "prosecco-champagne"
    }
  ],
  steps: [
    "在冰镇香槟杯中加入蓝柑桂酒、杏仁利口酒（Amaretto）与新鲜柠檬汁。",
    "轻轻倒入冰镇干型香槟或起泡酒至八分满。",
    "用吧勺轻轻自下而上提拉一次使酒液呈现通透宝蓝色。",
    "在酒液表面放置一片红玫瑰花瓣装饰。"
  ]
},
{
  id: "venceremos",
  slug: "venceremos",
  name: "我们将获胜",
  nameEn: "Venceremos",
  category: "competition",
  categoryZh: "世界冠军传世作",
  baseSpirit: "Rum",
  baseSpiritZh: "朗姆酒",
  flavorProfiles: [
    "果香系",
    "清爽系",
    "草本系",
    "甜系"
  ],
  flavorRadar: {
    sour: 3,
    sweet: 3,
    bitter: 1,
    strong: 3,
    fruity: 4,
    herbal: 3
  },
  difficulty: "advanced",
  difficultyZh: "进阶",
  glass: "高球杯 / 飓风杯",
  garnish: "长条黄瓜薄片与凤梨叶 (Cucumber Ribbon & Pineapple Frond)",
  ice: "结实硬方冰",
  technique: "Shake",
  techniqueZh: "摇荡法",
  abv: 16,
  description: "2017 百加得传世全球鸡尾酒大赛全球总冠军名作。比利时调酒师 Ran Van Ongevalle 将菠萝汁、椰子利口酒、现榨黄瓜汁与白朗姆酒结合，并点入一滴芝麻香油，被誉为新时代皮纳可拉达的最佳进化。",
  story: "Ran Van Ongevalle 代表比利时在柏林全球总决赛夺冠，作品名字 Venceremos 意为“我们将获胜”，展现了热带风味与清爽蔬菜草本的绝妙现代平衡。",
  proTips: [
    "最后表面滴入的 1 滴纯正芝麻油是整杯酒香气的点睛之笔，带来令人难忘的热带坚果香。"
  ],
  image: "",
  ingredients: [
    {
      name: "百加得白朗姆酒",
      nameEn: "Bacardí Carta Blanca",
      amountMl: 45,
      amountOz: "1 1/2 oz",
      rawId: "rum-white"
    },
    {
      name: "椰子利口酒",
      nameEn: "Coconut Liqueur",
      amountMl: 15,
      amountOz: "1/2 oz",
      rawId: "coconut-rum"
    },
    {
      name: "鲜榨凤梨汁",
      nameEn: "Fresh Pineapple Juice",
      amountMl: 25,
      amountOz: "5/6 oz",
      rawId: "pineapple-juice"
    },
    {
      name: "鲜榨黄瓜汁",
      nameEn: "Fresh Cucumber Juice",
      amountMl: 15,
      amountOz: "1/2 oz"
    },
    {
      name: "新鲜青柠汁",
      nameEn: "Fresh Lime Juice",
      amountMl: 20,
      amountOz: "2/3 oz",
      rawId: "fresh-lime-juice"
    }
  ],
  steps: [
    "在雪克壶中加入白朗姆酒、椰子利口酒、鲜榨凤梨汁、鲜榨黄瓜汁与鲜青柠汁。",
    "加满硬冰剧烈摇荡 12 秒至充分冷却起泡。",
    "滤入放有大方冰并贴附黄瓜薄片的高球杯中。",
    "在酒液表面滴入 1 滴纯正熟芝麻香油，插上凤梨叶装饰即可呈递。"
  ]
},
{
  id: "clarita",
  slug: "clarita",
  name: "明澈之境",
  nameEn: "Clarita",
  category: "competition",
  categoryZh: "世界冠军传世作",
  baseSpirit: "Rum",
  baseSpiritZh: "陈年朗姆/雪莉酒",
  flavorProfiles: [
    "烈酒感",
    "草本系",
    "苦系",
    "烟熏系"
  ],
  flavorRadar: {
    sour: 1,
    sweet: 2,
    bitter: 3,
    strong: 4,
    fruity: 2,
    herbal: 4
  },
  difficulty: "advanced",
  difficultyZh: "大师级",
  glass: "尼克诺拉杯 / Nick & Nora Glass",
  garnish: "盐水喷雾与橄榄油滴 (Saline & Olive Oil Drop)",
  ice: "无冰 (提前深度冰镇酒杯)",
  technique: "Stir",
  techniqueZh: "搅拌法",
  abv: 28,
  description: "2016 百加得传世全球鸡尾酒大赛全球总冠军名作。Double Chicken Please 创始人詹佳恩（Gn Chan）将百加得8年陈酿朗姆酒、菲诺雪莉酒、阿芒提亚多雪莉酒、白可可利口酒与苦艾酒精准调和，极尽通透甘醇。",
  story: "Gn Chan 在旧金山全球总决赛中凭借其无懈可击的澄清理念与温润谦逊的待客之道摘得全球总冠军，成为华人调酒师在世界最高殿堂的里程碑。",
  proTips: [
    "两种不同陈酿风格的雪莉酒（Fino 的爽脆矿物感与 Amontillado 的坚果焦糖感）交织出陈年朗姆酒的深层风味。"
  ],
  image: "",
  ingredients: [
    {
      name: "百加得8年陈酿朗姆酒",
      nameEn: "Bacardí 8 Años Dark Rum",
      amountMl: 60,
      amountOz: "2 oz",
      rawId: "rum-dark"
    },
    {
      name: "西班牙菲诺雪莉酒",
      nameEn: "Fino Sherry",
      amountMl: 10,
      amountOz: "1/3 oz",
      rawId: "sherry-fino"
    },
    {
      name: "阿芒提亚多雪莉酒",
      nameEn: "Amontillado Sherry",
      amountMl: 10,
      amountOz: "1/3 oz",
      rawId: "sherry-fino"
    },
    {
      name: "白可可利口酒",
      nameEn: "Crème de Cacao White",
      amountMl: 5,
      amountOz: "1/6 oz",
      rawId: "creme-de-cacao"
    }
  ],
  steps: [
    "在调酒杯中加入百加得8年陈酿朗姆酒、菲诺雪莉酒、阿芒提亚多雪莉酒、白可可利口酒与一小撮海盐水。",
    "加入结实大冰块，顺时针轻柔搅拌 30 秒至极冷且稀释完美。",
    "单层细滤滤入预冷的尼克诺拉高脚杯中。",
    "在酒液表面喷雾微量苦艾精油即可呈递。"
  ]
},
{
  id: "queens-park-swizzle",
  slug: "queens-park-swizzle",
  name: "皇后公园斯维泽尔",
  nameEn: "Queen's Park Swizzle",
  category: "classic",
  categoryZh: "加勒比国宝名作",
  baseSpirit: "Rum",
  baseSpiritZh: "深色朗姆酒",
  flavorProfiles: [
    "草本系",
    "清爽系",
    "果香系",
    "苦系"
  ],
  flavorRadar: {
    sour: 3,
    sweet: 3,
    bitter: 2,
    strong: 4,
    fruity: 2,
    herbal: 4
  },
  difficulty: "medium",
  difficultyZh: "中等",
  glass: "高球杯 / 柯林杯",
  garnish: "新鲜薄荷大枝与安格斯图拉苦精分层 (Mint Bouquet & Bitters Float)",
  ice: "大量纯净碎冰",
  technique: "Build",
  techniqueZh: "旋转捣冰法 (Swizzle)",
  abv: 20,
  description: "1920年代特立尼达皇后公园酒店传世神作。以重口味深色黑朗姆、鲜青柠汁、德梅拉拉原蔗糖浆与新鲜薄荷叶在杯中用专用斯维泽尔木棒高速旋转，顶层漂浮鲜红的安格斯图拉苦精层，堪称莫吉托与蒂基风格的史诗合体。",
  story: "二十世纪初特立尼达上流社会的专属消暑神作，著名鸡尾酒作家 Trader Vic 称其为“人类历史上最美妙的朗姆调酒之一”。",
  proTips: [
    "使用 Swizzle Stick 在两手手掌间快速搓动，使冰块与酒液在杯外凝结出厚实冰霜。"
  ],
  image: "",
  ingredients: [
    {
      name: "特立尼达深色黑朗姆酒",
      nameEn: "Trinidad Dark Demerara Rum",
      amountMl: 60,
      amountOz: "2 oz",
      rawId: "rum-dark"
    },
    {
      name: "新鲜青柠汁",
      nameEn: "Fresh Lime Juice",
      amountMl: 25,
      amountOz: "5/6 oz",
      rawId: "fresh-lime-juice"
    },
    {
      name: "原蔗糖糖浆",
      nameEn: "Demerara Sugar Syrup",
      amountMl: 20,
      amountOz: "2/3 oz",
      rawId: "simple-syrup"
    },
    {
      name: "新鲜薄荷叶",
      nameEn: "Fresh Mint Leaves",
      amountMl: 10,
      amountOz: "8-10 leaves",
      unit: "片"
    },
    {
      name: "安格斯图拉芳香苦精",
      nameEn: "Angostura Bitters",
      amountMl: 4,
      amountOz: "4 dashes",
      unit: "滴",
      rawId: "angostura-bitters"
    }
  ],
  steps: [
    "在高球杯底部放入新鲜薄荷叶与原蔗糖浆，用捣棒轻柔压出薄荷清香（切勿捣烂）。",
    "加入新鲜青柠汁与深色朗姆酒，加入碎冰至半杯满。",
    "将 Swizzle 旋转棒插入杯底，在两掌间快速搓动 15 秒使杯壁挂满白霜。",
    "加满碎冰，在酒体顶层均匀淋入 4-6 滴鲜红色安格斯图拉苦精形成华丽分层。",
    "插入一整束新鲜薄荷叶与吸管即可呈递。"
  ]
}
];
