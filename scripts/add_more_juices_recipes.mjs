import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

export const moreJuiceRecipes = [
  {
    id: 'midori-sprite-fizz',
    slug: 'midori-sprite-fizz',
    name: '蜜多丽雪碧菲士 / 绿仙仙',
    nameEn: 'Midori Sprite Fizz',
    category: 'contemporary',
    categoryZh: '夏日果香高球',
    baseSpirit: 'Liqueur',
    baseSpiritZh: '蜜多丽/伏特加',
    flavorProfiles: ['甜系', '果香系', '清爽系', '柑橘系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 0, strong: 2, fruity: 5, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜青柠角与蜜瓜切片',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '直调法 (Build)',
    abv: 11,
    description: '极富视觉冲击力的荧光翠绿特调！日本蜜多丽蜜瓜甜酒的馥郁果香与纯净伏特加、鲜青柠汁混合，注入冰雪碧，气泡清脆，果香爆汁，如夏日绿野仙踪。',
    story: '风靡亚洲与澳洲俱乐部最受欢迎的甜系派对高球之一，因其极高颜值与甜美无酒精感的顺滑口感广受年轻群体推崇。',
    proTips: ['挤入 15ml 新鲜青柠汁是解腻的关键，能让蜜瓜甜香与雪碧柠檬气泡达到完美酸甜平衡。'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '蜜多丽蜜瓜甜酒 (Midori)', nameEn: 'Midori Melon Liqueur', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'midori' },
      { name: '纯净伏特加', nameEn: 'Vodka', amountMl: 20, amountOz: '2/3 oz', rawId: 'vodka' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' },
      { name: '冰镇雪碧 / 柠檬汽水 (注顶)', nameEn: 'Chilled Sprite', amountMl: 100, amountOz: '3 1/3 oz', rawId: 'sprite-lemon-soda' }
    ],
    steps: [
      '在高球杯中加满方冰。',
      '倒入蜜多丽蜜瓜酒、伏特加与鲜青柠汁。',
      '用吧勺轻柔搅拌 10 秒。',
      '注入冰雪碧至满杯。',
      '在杯缘夹入新鲜青柠角与薄切蜜瓜片装饰。'
    ],
    isIbaCertified: false
  },
  {
    id: 'gin-sprite-cooler',
    slug: 'gin-sprite-cooler',
    name: '金雪碧清爽特调',
    nameEn: 'Gin & Sprite Cooler',
    category: 'contemporary',
    categoryZh: '简易家庭特调',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['柑橘系', '草本系', '清爽系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 1, strong: 2, fruity: 3, herbal: 4 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜黄柠檬轮片与鲜薄荷嫩枝',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '直调法 (Build)',
    abv: 12,
    description: '比金汤力更易饮接受的家庭必备配方！金酒的杜松子与草本清香，在雪碧的柠檬青柠甜酸气泡与新鲜薄荷的烘托下，清冽明快，毫无药苦感。',
    story: '西方家庭与户外露营派对中最普及的懒人高球喝法，用雪碧的自然甜度完美驯服了金酒的辛辣烈度。',
    proTips: ['在杯底先放入两片柠檬与薄荷轻压出香油，再加冰倒入金酒和雪碧，香气层次倍增。'],
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'gin' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lemon-juice' },
      { name: '新鲜薄荷叶', nameEn: 'Fresh Mint Leaves', amountMl: 4, amountOz: '4-6 leaves', unit: '片', rawId: 'fresh-mint' },
      { name: '冰镇雪碧 / 柠檬汽水 (注顶)', nameEn: 'Chilled Sprite', amountMl: 120, amountOz: '4 oz', rawId: 'sprite-lemon-soda' }
    ],
    steps: [
      '在高球杯底放入薄荷叶与柠檬汁，用吧勺轻柔按压释放芳香。',
      '加满方冰，倒入 45ml 金酒。',
      '注入冰镇雪碧至杯口，轻提一次。',
      '饰以柠檬轮片与薄荷顶冠。'
    ],
    isIbaCertified: false
  },
  {
    id: 'rainbow-paradise-mocktail',
    slug: 'rainbow-paradise-mocktail',
    name: '彩虹天堂果味汽水',
    nameEn: 'Rainbow Paradise Mocktail',
    category: 'mocktail',
    categoryZh: '无酒精视觉特调',
    baseSpirit: 'None',
    baseSpiritZh: '无酒精',
    flavorProfiles: ['甜系', '果香系', '柑橘系', '清爽系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 0, strong: 0, fruity: 5, herbal: 0 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '柯林杯 / Collins Glass',
    garnish: '新鲜菠萝角与黑樱桃',
    ice: '满杯碎冰 (Crushed Ice)',
    technique: 'Layer',
    techniqueZh: '密度重力三分层法',
    abv: 0,
    description: '夏日海岛最惊艳的无酒精分层视觉神饮！底层深红石榴糖浆、中层明黄鲜橙汁与菠萝汁、顶层水蓝雪碧，如加勒比海滩的彩虹般绚丽夺目。',
    story: '度假酒店海滩吧为不饮酒宾客设计的无酒精经典派对特饮，深受全年龄段喜爱。',
    proTips: ['加满碎冰作为缓冲层，用吧勺极度缓慢顺勺背引流倒入每一层，利用糖分密度差保持清晰分界。'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '红石榴糖浆 (底层)', nameEn: 'Grenadine Syrup', amountMl: 20, amountOz: '2/3 oz', rawId: 'grenadine' },
      { name: '纯菠萝汁与鲜橙汁混合液 (中层)', nameEn: 'Pineapple & Orange Juice Mix', amountMl: 80, amountOz: '2 2/3 oz', rawId: 'pineapple-juice' },
      { name: '冰镇雪碧混合微量蓝柑糖浆 (顶层)', nameEn: 'Sprite with dash of Blue Curaçao', amountMl: 80, amountOz: '2 2/3 oz', rawId: 'sprite-lemon-soda' }
    ],
    steps: [
      '在柯林杯底先注入 20ml 红石榴糖浆。',
      '在杯中填满细碎冰。',
      '反转吧勺，缓慢引流倒入橙汁与菠萝汁混合液形成金黄中层。',
      '取另一量杯将雪碧与一滴蓝柑酒/蓝柑糖浆混合调成天蓝色，顺着勺背缓慢淋在碎冰顶层。',
      '插上吸管与菠萝角装饰。'
    ],
    isIbaCertified: false
  },
  {
    id: 'autumn-apple-jack',
    slug: 'autumn-apple-jack',
    name: '秋季苹果杰克酸',
    nameEn: 'Autumn Apple Jack Sour',
    category: 'contemporary',
    categoryZh: '秋季经典特调',
    baseSpirit: 'Brandy',
    baseSpiritZh: '苹果白兰地/苹果汁',
    flavorProfiles: ['果香系', '柑橘系', '酸甜系'],
    flavorRadar: { sour: 4, sweet: 3, bitter: 0, strong: 3, fruity: 5, herbal: 1 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '碟形香槟杯 / Coupe Glass',
    garnish: '新鲜苹果切片与肉桂粉',
    ice: '摇荡滤冰 (Up)',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 20,
    description: '杰克玫瑰（Jack Rose）的醇厚升级版！法国卡尔瓦多斯苹果白兰地的深邃烤苹果香，与 100% 纯苹果汁、鲜柠檬汁和红石榴糖浆摇出如红玛瑙般的温润果香酸甜。',
    story: '20世纪初禁酒令时期的经典名作，以美国本土苹果杰克烈酒（Applejack）为核心打造。',
    proTips: ['纯苹果汁与红石榴糖浆各司其职，苹果汁提供丰满果肉酸甜，红石榴赋予红润色泽与微涩层次。'],
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '卡尔瓦多斯 / 苹果白兰地', nameEn: 'Calvados / Apple Brandy', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'calvados' },
      { name: '100% 纯苹果汁', nameEn: '100% Pure Apple Juice', amountMl: 30, amountOz: '1 oz', rawId: 'apple-juice' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'fresh-lemon-juice' },
      { name: '红石榴糖浆', nameEn: 'Grenadine Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'grenadine' }
    ],
    steps: [
      '在摇酒壶中倒入苹果白兰地、纯苹果汁、柠檬汁与红石榴糖浆。',
      '加满方冰，剧烈摇荡 12 秒。',
      '双重过滤倒入预冷碟形香槟杯中。',
      '饰以新鲜苹果薄片。'
    ],
    isIbaCertified: false
  },
  {
    id: 'tequila-sunset',
    slug: 'tequila-sunset',
    name: '龙舌兰日落',
    nameEn: 'Tequila Sunset',
    category: 'contemporary',
    categoryZh: '当代经典特调',
    baseSpirit: 'Tequila',
    baseSpiritZh: '龙舌兰/橙汁',
    flavorProfiles: ['果香系', '柑橘系', '甜系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 1, strong: 3, fruity: 4, herbal: 2 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜橙片与黑莓',
    ice: '满杯方冰',
    technique: 'Float',
    techniqueZh: '直调与黑莓酒沉降',
    abv: 16,
    description: '龙舌兰日出的迷人黑夜版！银龙舌兰与鲜甜橙汁的明媚金黄中，缓缓注入深紫红色的黑莓利口酒或黑加仑酒，在杯底晕染出夜幕低垂时的瑰丽晚霞。',
    story: '诞生于西南美洲，相比传统龙舌兰日出（Tequila Sunrise）的石榴红，日落版以黑莓果香带来更深沉的浆果微酸层次。',
    proTips: ['黑莓利口酒比重较大，倒入后会缓慢沉底并向上弥散出深紫色的日落晚霞效果。'],
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '银龙舌兰酒', nameEn: 'Tequila Blanco', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'tequila' },
      { name: '新鲜现榨甜橙汁', nameEn: 'Fresh Orange Juice', amountMl: 90, amountOz: '3 oz', rawId: 'fresh-orange-juice' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 10, amountOz: '1/3 oz', rawId: 'fresh-lemon-juice' },
      { name: '黑莓利口酒 (或黑加仑酒 - 沉底)', nameEn: 'Crème de Mûre / Cassis', amountMl: 15, amountOz: '1/2 oz', rawId: 'creme-de-mure' }
    ],
    steps: [
      '在高球杯中加满冰块。',
      '倒入龙舌兰酒、橙汁与柠檬汁，搅拌均匀。',
      '顺着杯内壁缓缓倒入黑莓利口酒，使其自然沉入杯底。',
      '在杯缘装饰橙轮片与新鲜黑莓。'
    ],
    isIbaCertified: false
  },
  {
    id: 'bourbon-orange-smash',
    slug: 'bourbon-orange-smash',
    name: '波本甜橙粉碎',
    nameEn: 'Bourbon Orange Smash',
    category: 'contemporary',
    categoryZh: '美南经典粉碎特调',
    baseSpirit: 'Whiskey',
    baseSpiritZh: '波本威士忌',
    flavorProfiles: ['柑橘系', '草本系', '烈酒感', '甜系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 1, strong: 4, fruity: 4, herbal: 3 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '古典杯 / Rocks Glass',
    garnish: '压碎的橙角、薄荷叶与橙皮',
    ice: '满杯碎冰 (Crushed Ice)',
    technique: 'Muddle',
    techniqueZh: '捣果直调法 (Muddle & Build)',
    abv: 22,
    description: '新鲜甜橙皮精油的大爆发！整颗新鲜切块甜橙与薄荷叶在杯底剧烈捣压，释放出浓郁的天然橙油与果汁，倒入波本威士忌与碎冰，焦糖木香与鲜橙汁浓烈共鸣。',
    story: '19世纪美南 Smash 调酒流派的代表性分支，被誉为“最适合在露天门廊上畅饮的威士忌水果特调”。',
    proTips: ['橙皮外侧的精油是整杯酒的灵魂，用力捣压果肉的同时务必把果皮压透。'],
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '肯塔基波本威士忌', nameEn: 'Bourbon Whiskey', amountMl: 60, amountOz: '2 oz', rawId: 'whiskey-bourbon' },
      { name: '新鲜甜橙切角', nameEn: 'Fresh Orange Wedges', amountMl: 3, amountOz: '3-4 wedges', unit: '块', rawId: 'fresh-orange-juice' },
      { name: '新鲜薄荷叶', nameEn: 'Fresh Mint Leaves', amountMl: 6, amountOz: '6-8 leaves', unit: '片', rawId: 'fresh-mint' },
      { name: '单糖浆 (或细砂糖)', nameEn: 'Simple Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'simple-syrup' },
      { name: '强气泡苏打水 (可选少量注顶)', nameEn: 'Club Soda', amountMl: 30, amountOz: '1 oz', rawId: 'club-soda' }
    ],
    steps: [
      '在古典杯底放入甜橙角、薄荷叶与单糖浆。',
      '用捣棒用力捣压，彻底挤出橙汁与橙皮精油。',
      '填满碎冰，倒入 60ml 波本威士忌。',
      '用吧勺充分上下翻动搅拌。',
      '注入少量苏打水，插上薄荷嫩枝装饰。'
    ],
    isIbaCertified: false
  },
  {
    id: 'white-sangria',
    slug: 'white-sangria',
    name: '地中海白桑格利亚',
    nameEn: 'White Peach & Grape Sangria',
    category: 'contemporary',
    categoryZh: '地中海聚会潘趣',
    baseSpirit: 'Liqueur',
    baseSpiritZh: '白葡萄酒/白葡萄汁',
    flavorProfiles: ['果香系', '柑橘系', '清爽系', '甜系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 2, fruity: 5, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜白葡萄切片、青苹果丁、水蜜桃片与薄荷',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '水果冷萃浸渍直调法',
    abv: 10,
    description: '阳光地中海海岸的梦幻白露！干白葡萄酒、100% 纯白葡萄汁与水蜜桃汁，在青苹果、白葡萄与接骨木花利口酒中冷藏浸润，注入雪碧气泡，芳香四溢，清冽甘甜。',
    story: '西班牙与南法海岸在传统红桑格利亚基础上改良的夏季白葡萄酒果香特调，风味相比红酒版更加轻盈脱俗。',
    proTips: ['选用高酸度、果香清爽的干白（如长相思 Sauvignon Blanc 或雷司令 Riesling），白葡萄汁能极大增添优雅花香。'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '西班牙干白葡萄酒 (Sauvignon Blanc / Verdejo)', nameEn: 'Spanish White Wine', amountMl: 90, amountOz: '3 oz', rawId: 'prosecco-champagne' },
      { name: '100% 纯白葡萄汁', nameEn: '100% White Grape Juice', amountMl: 30, amountOz: '1 oz', rawId: 'grape-juice-white' },
      { name: '纯水蜜桃汁', nameEn: 'Peach Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'peach-juice' },
      { name: '圣日耳曼接骨木花利口酒 (或君度)', nameEn: 'St-Germain Elderflower Liqueur', amountMl: 15, amountOz: '1/2 oz', rawId: 'st-germain' },
      { name: '新鲜青苹果丁与对半切白葡萄', nameEn: 'Diced Green Apples & Halved Grapes', amountMl: 30, amountOz: 'Fresh Fruits', unit: '适量', rawId: 'fresh-grapes' },
      { name: '冰镇雪碧 / 柠檬汽水 (注顶)', nameEn: 'Chilled Sprite', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'sprite-lemon-soda' }
    ],
    steps: [
      '在玻璃水罐或大酒杯中加入切片白葡萄与青苹果丁。',
      '倒入白葡萄酒、白葡萄汁、水蜜桃汁与接骨木花酒搅拌浸渍。',
      '装入满杯方冰。',
      '最后注入冰镇雪碧激发出丰富果味气泡。'
    ],
    isIbaCertified: false
  },
  {
    id: 'gin-white-grape',
    slug: 'gin-white-grape',
    name: '金酒白葡萄晨光',
    nameEn: 'Gin White Grape Spritzer',
    category: 'contemporary',
    categoryZh: '清雅花果特调',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['草本系', '果香系', '清爽系'],
    flavorRadar: { sour: 2, sweet: 3, bitter: 1, strong: 2, fruity: 4, herbal: 4 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜无籽绿提串与迷迭香枝',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '直调法 (Build)',
    abv: 12,
    description: '如清晨果园般纯净脱俗！金酒的杜松子与植物精油，与纯白葡萄汁的麝香葡萄清甜、青柠酸爽在气泡苏打水中交织，香气高雅飘逸，余味清冽。',
    story: '现代花果系调酒的极简杰作，利用高品质白葡萄汁的天然果酸平衡烈酒。',
    proTips: ['搭配一枝轻轻拍醒的新鲜迷迭香，能将白葡萄汁的草本深度提升一个维度。'],
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'gin' },
      { name: '100% 纯白葡萄汁', nameEn: '100% White Grape Juice', amountMl: 60, amountOz: '2 oz', rawId: 'grape-juice-white' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' },
      { name: '强气泡苏打水 (注顶)', nameEn: 'Club Soda', amountMl: 60, amountOz: '2 oz', rawId: 'club-soda' }
    ],
    steps: [
      '在高球杯中加满方冰。',
      '注入金酒、纯白葡萄汁与青柠汁。',
      '用吧勺充分搅拌 15 秒。',
      '注入强气泡苏打水。',
      '在杯缘挂上一串洗净的绿提子并插入迷迭香枝。'
    ],
    isIbaCertified: false
  },
  {
    id: 'peach-margarita',
    slug: 'peach-margarita',
    name: '蜜桃玛格丽特',
    nameEn: 'Peach Margarita',
    category: 'contemporary',
    categoryZh: '夏日果香玛格丽特',
    baseSpirit: 'Tequila',
    baseSpiritZh: '龙舌兰/蜜桃',
    flavorProfiles: ['果香系', '柑橘系', '清爽系', '甜系'],
    flavorRadar: { sour: 4, sweet: 3, bitter: 0, strong: 3, fruity: 5, herbal: 2 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '古典杯 / Rocks Glass',
    garnish: '半圈细海盐边与新鲜水蜜桃角',
    ice: '大块方冰',
    technique: 'Shake',
    techniqueZh: '摇荡法 (Shake)',
    abv: 22,
    description: '经典玛格丽特的粉嫩多汁蜕变！银龙舌兰的青草矿物气息与君度橙酒，在浓郁水蜜桃纯果汁与鲜青柠的碰撞下迸发出极其丰盈的夏日热烈果香。',
    story: '墨西哥海滩度假胜地最受欢迎的水果玛格丽特版本之一。',
    proTips: ['杯口半圈抹上海盐（Half Salt Rim），微咸的盐粒能瞬间将蜜桃的果糖甜美感放大三倍。'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '银龙舌兰酒 (100% Agave Blanco)', nameEn: 'Tequila Blanco', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'tequila' },
      { name: '纯水蜜桃汁 / 桃肉果泥', nameEn: 'Pure Peach Juice / Puree', amountMl: 30, amountOz: '1 oz', rawId: 'peach-juice' },
      { name: '君度橙酒 (Cointreau)', nameEn: 'Cointreau', amountMl: 20, amountOz: '2/3 oz', rawId: 'cointreau' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 20, amountOz: '2/3 oz', rawId: 'fresh-lime-juice' },
      { name: '有机龙舌兰蜜 (或单糖浆)', nameEn: 'Agave Nectar', amountMl: 10, amountOz: '1/3 oz', rawId: 'agave-nectar' }
    ],
    steps: [
      '古典杯外缘抹上青柠汁并滚上少许细海盐（半圈）。',
      '在摇酒壶中倒入龙舌兰酒、水蜜桃汁、君度、青柠汁与龙舌兰蜜。',
      '加满冰块强力摇荡 12 秒。',
      '过滤倒入放有老冰的古典杯中，饰以桃角。'
    ],
    isIbaCertified: false
  },
  {
    id: 'peach-rum-cooler',
    slug: 'peach-rum-cooler',
    name: '蜜桃朗姆菲士',
    nameEn: 'Peach Rum Cooler',
    category: 'contemporary',
    categoryZh: '热带清爽长饮',
    baseSpirit: 'Rum',
    baseSpiritZh: '白朗姆/蜜桃',
    flavorProfiles: ['果香系', '柑橘系', '清爽系', '甜系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 0, strong: 2, fruity: 5, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜薄荷枝与桃肉薄片',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '摇荡与雪碧注顶 (Shake & Top)',
    abv: 12,
    description: '加勒比海风遇上水蜜桃果园！古巴白朗姆酒的甘蔗果香与纯水蜜桃汁、青柠汁摇出浓稠粉白酒液，倒入杯中用冰镇雪碧注顶，气泡跳跃，甘甜冰爽。',
    story: '莫吉托与代基里爱好者的果香延伸版，是夏日露台饮酒的绝对宠儿。',
    proTips: ['选用高品质白朗姆酒，与水蜜桃汁的天然果香融合度极高。'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '加勒比白朗姆酒', nameEn: 'White Rum', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'rum-white' },
      { name: '纯水蜜桃汁', nameEn: 'Pure Peach Juice', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'peach-juice' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 10, amountOz: '1/3 oz', rawId: 'simple-syrup' },
      { name: '冰镇雪碧 / 柠檬汽水 (注顶)', nameEn: 'Chilled Sprite', amountMl: 60, amountOz: '2 oz', rawId: 'sprite-lemon-soda' }
    ],
    steps: [
      '在摇酒壶中倒入白朗姆酒、水蜜桃汁、青柠汁与单糖浆。',
      '加冰摇荡 10 秒。',
      '在高球杯中加满方冰，过滤倒入酒液。',
      '注入冰雪碧至满杯，轻提一次。',
      '饰以新鲜薄荷与桃片。'
    ],
    isIbaCertified: false
  },
  {
    id: 'mango-rum-punch',
    slug: 'mango-rum-punch',
    name: '热带芒果朗姆潘趣',
    nameEn: 'Tropical Mango Rum Punch',
    category: 'contemporary',
    categoryZh: 'Tiki 热带潘趣',
    baseSpirit: 'Rum',
    baseSpiritZh: '深浅双重朗姆',
    flavorProfiles: ['果香系', '甜系', '柑橘系', '热带风情'],
    flavorRadar: { sour: 3, sweet: 4, bitter: 0, strong: 3, fruity: 5, herbal: 1 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '飓风杯 / Hurricane Glass',
    garnish: '新鲜芒果切角、菠萝叶与红樱桃',
    ice: '满杯碎冰 (Crushed Ice)',
    technique: 'Shake',
    techniqueZh: '摇荡法 (Shake)',
    abv: 18,
    description: '狂野多汁的热带芒果风暴！深色黑朗姆与白朗姆的复合酒力，在浓郁金黄的芒果纯果泥、纯菠萝汁与鲜青柠汁中彻底绽放，每一口都是阳光海滩的狂欢。',
    story: '加勒比海岛度假胜地最具代表性的海岛潘趣酒之一。',
    proTips: ['使用成熟阿方索芒果泥（Mango Puree），质地浓稠厚实，能带来如丝绒奶昔般的果汁口感。'],
    image: 'https://images.unsplash.com/photo-1534856966150-c832f7b7a005?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '深色黑朗姆酒', nameEn: 'Dark Rum', amountMl: 30, amountOz: '1 oz', rawId: 'rum-dark' },
      { name: '加勒比白朗姆酒', nameEn: 'White Rum', amountMl: 30, amountOz: '1 oz', rawId: 'rum-white' },
      { name: '纯芒果汁 / 芒果纯果泥', nameEn: 'Mango Juice / Puree', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'mango-juice' },
      { name: '纯菠萝汁', nameEn: 'Pineapple Juice', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'pineapple-juice' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' },
      { name: '红石榴糖浆 (少量沉底)', nameEn: 'Grenadine Syrup', amountMl: 10, amountOz: '1/3 oz', rawId: 'grenadine' }
    ],
    steps: [
      '在摇酒壶中倒入双重朗姆、芒果泥、菠萝汁与青柠汁。',
      '加满冰块强力摇荡 15 秒。',
      '在飓风杯中加满碎冰，过滤倒入酒液。',
      '淋入少量红石榴糖浆沉底，饰以芒果角与凤梨叶。'
    ],
    isIbaCertified: false
  },
  {
    id: 'guava-gin-cooler',
    slug: 'guava-gin-cooler',
    name: '芭乐金酒冷饮',
    nameEn: 'Pink Guava Gin Cooler',
    category: 'contemporary',
    categoryZh: '粉红热带特调',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒/芭乐汁',
    flavorProfiles: ['果香系', '草本系', '清爽系', '柑橘系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 1, strong: 2, fruity: 5, herbal: 3 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜红心芭乐切片与百里香嫩枝',
    ice: '满杯方冰',
    technique: 'Build',
    techniqueZh: '摇荡与汤力水注顶',
    abv: 12,
    description: '梦幻珊瑚粉色的热带微醺！金酒的杜松子与清翠草本，遇上红心芭乐汁独特的麝香草莓果香，在冰镇汤力水或苏打水的气泡升腾中，清凉解渴、回味甘甜。',
    story: '近年来在热带海岛与先锋鸡尾酒吧大放异彩的水果特调，粉红色泽极具吸睛魅力。',
    proTips: ['选用红心番石榴（Pink Guava）果汁，香气比白芭乐更为浓烈奔放。'],
    image: 'https://images.unsplash.com/photo-1534856966150-c832f7b7a005?auto=format&fit=crop&w=800&q=80',
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 45, amountOz: '1 1/2 oz', rawId: 'gin' },
      { name: '红心芭乐汁 / 番石榴原汁', nameEn: 'Pink Guava Juice', amountMl: 60, amountOz: '2 oz', rawId: 'guava-juice' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lime-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 10, amountOz: '1/3 oz', rawId: 'simple-syrup' },
      { name: '冰镇汤力水或苏打水 (注顶)', nameEn: 'Tonic Water or Club Soda', amountMl: 60, amountOz: '2 oz', rawId: 'tonic-water' }
    ],
    steps: [
      '在摇酒壶中倒入金酒、芭乐汁、青柠汁与单糖浆。',
      '加冰摇荡 10 秒。',
      '在高球杯中加满冰块，过滤倒入酒液。',
      '注入汤力水或苏打水至满杯。',
      '插上芭乐切片与百里香装饰。'
    ],
    isIbaCertified: false
  }
];

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

  const recipesToAdd = moreJuiceRecipes.filter(r => !existingRecipeIds.has(r.id));
  console.log(`Found ${recipesToAdd.length} additional fruit juice recipes to append.`);

  if (recipesToAdd.length > 0) {
    const serialized = recipesToAdd.map(item => '  ' + JSON.stringify(item, null, 2).replace(/"([^"]+)":/g, '$1:').split('\n').join('\n  ')).join(',\n');
    const beforeBracket = recipesContent.slice(0, lastRecipeBracketIndex).trimEnd();
    const needComma = !beforeBracket.endsWith(',');
    const newRecipesContent = beforeBracket + (needComma ? ',\n' : '\n') + serialized + '\n];\n';
    fs.writeFileSync(recipesFilePath, newRecipesContent, 'utf8');
    console.log('Updated recipes.ts with additional fruit juice recipes!');
  }
}
