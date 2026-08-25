import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const formattedMasterRecipes = [
  {
    id: 'gimlet',
    slug: 'gimlet',
    name: '金雷特 / 吉姆雷特',
    nameEn: 'Gimlet',
    category: 'classic',
    categoryZh: '传世经典',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['酸甜爽口', '草本系', '清爽系', '柑橘系'],
    flavorRadar: { sour: 4, sweet: 2, bitter: 1, strong: 4, fruity: 3, herbal: 4 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '马天尼杯 / 浅碟香槟杯 (Coupe Glass)',
    garnish: '新鲜青柠轮片 (Lime Wheel)',
    ice: '无冰 (提前冰镇酒杯)',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 28,
    description: '银座调酒教父上田和男将其推向神级境界的极简经典。仅由金酒、青柠汁与糖浆摇荡而成，酸甜平衡与天鹅绒般的微气泡是其灵魂。',
    story: '19世纪末由英国皇家海军军医总监托马斯·吉姆雷特爵士倡导饮用，用金酒配青柠汁预防坏血病。上田和男凭借 Hard Shake 硬摇手法将其演绎为银座调酒界的试金石。',
    proTips: [
      '上田和男强调：金雷特的难点在于青柠酸度与金酒烈度的完美咬合，硬摇荡能打破青柠酸涩感并充入细密微气泡。',
      '可根据个人喜好微调糖浆比例（15ml-20ml）。'
    ],
    image: 'https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg',
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 60, amountOz: '2 oz', rawId: 'gin' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 22.5, amountOz: '3/4 oz', rawId: 'fresh-lime-juice' },
      { name: '单糖浆 (1:1)', nameEn: 'Simple Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'simple-syrup' }
    ],
    steps: [
      '将浅碟香槟杯预冷备用。',
      '在雪克壶中加入金酒、鲜榨青柠汁与单糖浆。',
      '加入大量结实硬冰，使用 Hard Shake 硬摇手法剧烈摇荡 10-12 秒。',
      '双重过滤（Double Strain）倒入预冷的酒杯中。',
      '在杯缘装饰新鲜青柠轮片即可呈递。'
    ],
    isIbaCertified: true,
    ibaCategory: 'Contemporary Classics'
  },
  {
    id: 'kings-valley',
    slug: 'kings-valley',
    name: '国王山谷',
    nameEn: "King's Valley",
    category: 'creative',
    categoryZh: '大师名作',
    baseSpirit: 'Whiskey',
    baseSpiritZh: '威士忌',
    flavorProfiles: ['草本系', '果香系', '烈酒感', '清爽系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 2, strong: 4, fruity: 3, herbal: 4 },
    difficulty: 'advanced',
    difficultyZh: '进阶',
    glass: '马天尼杯 / Martini Glass',
    garnish: '青柠皮油喷雾 (Lime Peel Express)',
    ice: '无冰 (提前冰镇酒杯)',
    technique: 'Shake',
    techniqueZh: '摇荡法 (Hard Shake)',
    abv: 26,
    description: '银座调酒教父上田和男1986年斩获苏格兰威士忌鸡尾酒大赛全球冠军的传世名作。呈现出如幽深山谷般通透纯净的翡翠绿光泽。',
    story: '1986年上田和男赴苏格兰参加国际鸡尾酒大赛时创制。他巧妙运用绿利口酒与橙酒、青柠汁中和苏格兰威士忌的泥煤烟熏感，惊艳全场并夺冠。',
    proTips: [
      '绿利口酒的用量需极其精准，仅需 5ml 即可调制出通透的高级翡翠绿色泽，过多会掩盖威士忌本味。'
    ],
    image: 'https://www.thecocktaildb.com/images/media/drink/upusyu1472667977.jpg',
    ingredients: [
      { name: '苏格兰威士忌', nameEn: 'Scotch Whisky', amountMl: 40, amountOz: '1 1/3 oz', rawId: 'whiskey-scotch' },
      { name: '君度橙酒', nameEn: 'Cointreau', amountMl: 10, amountOz: '1/3 oz', rawId: 'cointreau' },
      { name: '绿利口酒 / 蜜多丽', nameEn: 'Green Liqueur', amountMl: 5, amountOz: '1/6 oz', rawId: 'midori' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 10, amountOz: '1/3 oz', rawId: 'fresh-lime-juice' }
    ],
    steps: [
      '在雪克壶中加入苏格兰威士忌、君度橙酒、绿薄荷/绿蜜瓜利口酒与鲜榨青柠汁。',
      '加入硬冰，施展标志性的 Hard Shake 手法摇荡 12 秒使酒液乳化出天鹅绒质感。',
      '双重过滤滤入预冷的马天尼杯中。',
      '在酒液表面轻轻挤压青柠皮油提香。'
    ]
  },
  {
    id: 'city-coral',
    slug: 'city-coral',
    name: '城市珊瑚',
    nameEn: 'City Coral',
    category: 'creative',
    categoryZh: '大师名作',
    baseSpirit: 'Liqueur',
    baseSpiritZh: '利口酒',
    flavorProfiles: ['甜系', '果香系', '苦系', '清爽系'],
    flavorRadar: { sour: 3, sweet: 4, bitter: 2, strong: 2, fruity: 5, herbal: 2 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '马天尼杯 / 盐边杯',
    garnish: '珊瑚色粉盐边与红樱桃 (Coral Salt Rim)',
    ice: '无冰 (提前冰镇酒杯)',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 16,
    description: '上田和男1984年全日本调酒锦标赛冠军之作。以珊瑚礁与都市霓虹为灵感，杯沿附着一圈珊瑚粉色盐边，风味层次丰富甜润。',
    story: '上田和男代表东京出战全日本调酒大赛时的获奖作品，展现了日本调酒对色彩美学与杯口装饰工艺（Rim）的极高追求。',
    proTips: [
      '金巴利苦酒赋予其珊瑚微红的光泽，与蜜多丽的翠绿交织出极其迷人的粉调。'
    ],
    image: 'https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg',
    ingredients: [
      { name: '蜜多丽蜜瓜甜酒', nameEn: 'Midori Melon Liqueur', amountMl: 30, amountOz: '1 oz', rawId: 'midori' },
      { name: '新鲜西柚汁', nameEn: 'Fresh Grapefruit Juice', amountMl: 30, amountOz: '1 oz', rawId: 'grapefruit-juice' },
      { name: '金巴利苦酒', nameEn: 'Campari', amountMl: 5, amountOz: '1/6 oz', rawId: 'campari' },
      { name: '汤力水', nameEn: 'Tonic Water', amountMl: 15, amountOz: '1/2 oz', rawId: 'tonic-water' }
    ],
    steps: [
      '用青柠角擦拭马天尼杯沿，轻蘸粉红珊瑚盐制作半边盐边。',
      '在雪克壶中加入蜜多丽蜜瓜甜酒、新鲜西柚汁、汤力水与少许金巴利苦酒。',
      '加冰剧烈摇荡 10 秒。',
      '细滤倒入准备好的盐边杯中即可。'
    ]
  },
  {
    id: 'fathers-advice',
    slug: 'fathers-advice',
    name: '父亲的劝诫',
    nameEn: "Father's Advice",
    category: 'creative',
    categoryZh: '大师名作',
    baseSpirit: 'Rum',
    baseSpiritZh: '朗姆酒',
    flavorProfiles: ['烈酒感', '草本系', '苦系', '果香系'],
    flavorRadar: { sour: 1, sweet: 3, bitter: 4, strong: 5, fruity: 2, herbal: 4 },
    difficulty: 'advanced',
    difficultyZh: '进阶',
    glass: '尼克诺拉杯 / Nick & Nora Glass',
    garnish: '橙皮卷 (Orange Twist)',
    ice: '无冰 (提前冰镇酒杯)',
    technique: 'Stir',
    techniqueZh: '搅拌法',
    abv: 30,
    description: '世界级华裔大师段冉斩获全美百加得传世大赛冠军代表作。向父亲两代移民的拼搏精神致敬，融汇陈年朗姆、草本苦酒与雪莉酒。',
    story: '段冉（Ran Duan）在波士顿家族餐馆创立 Baldwin Bar 时创作此酒，夺得全美冠军并名列世界决赛，成为全球华裔调酒界最具代表性的现代经典。',
    proTips: [
      '搅拌时需保持手法平稳连贯，让雪莉酒的氧化坚果香气与陈酿朗姆的木桶香深度融合。'
    ],
    image: 'https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg',
    ingredients: [
      { name: '陈年深色朗姆酒', nameEn: 'Aged Dark Rum', amountMl: 45, amountOz: '1.5 oz', rawId: 'rum-dark' },
      { name: '菲诺雪莉酒', nameEn: 'Fino Sherry', amountMl: 20, amountOz: '2/3 oz', rawId: 'sherry-fino' },
      { name: '阿玛罗草本苦酒', nameEn: 'Amaro Nonino', amountMl: 15, amountOz: '1/2 oz', rawId: 'amaro-nonino' },
      { name: '安哥斯图拉苦精', nameEn: 'Angostura Bitters', amountMl: 2, amountOz: '2 dashes', rawId: 'angostura-bitters' }
    ],
    steps: [
      '在调酒杯中加入陈年朗姆酒、菲诺雪莉酒、草本苦酒（Amaro）与少许豆蔻苦精。',
      '加入大冰块，使用吧勺平稳搅拌 35-40 圈至充分冰镇与微稀释。',
      '滤入预冷的尼克诺拉杯中。',
      '喷洒橙皮精油并饰于杯中。'
    ]
  },
  {
    id: 'breakfast-martini',
    slug: 'breakfast-martini',
    name: '早餐马天尼',
    nameEn: 'Breakfast Martini',
    category: 'modern',
    categoryZh: '新时代鸡尾酒',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['酸甜爽口', '柑橘系', '苦系', '清爽系'],
    flavorRadar: { sour: 4, sweet: 3, bitter: 2, strong: 4, fruity: 4, herbal: 3 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '马天尼杯 / Martini Glass',
    garnish: '迷你吐司角或橙皮条 (Mini Toast or Orange Zest)',
    ice: '无冰 (提前冰镇酒杯)',
    technique: 'Shake',
    techniqueZh: '摇荡法',
    abv: 25,
    description: '伦敦传奇调酒泰斗萨尔瓦托雷·卡拉布雷斯（The Maestro）1996年创制的现代名作。将英式早餐橙皮果酱融入金酒与君度，开启果酱调酒先河。',
    story: '1996年萨尔瓦托雷的妻子在清晨为他准备了涂满橙皮果酱的英式吐司。他灵光一闪将一勺果酱带入吧台，结合金酒调制出了这杯风靡全球的早午餐经典。',
    proTips: [
      '摇荡前务必用吧勺先将果酱与柠檬汁溶散，否则冷冰会使果酱凝结成团。双重细滤可去除细小果肉残渣。'
    ],
    image: 'https://www.thecocktaildb.com/images/media/drink/rwsyyu1483388181.jpg',
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 50, amountOz: '1 2/3 oz', rawId: 'gin' },
      { name: '君度橙酒', nameEn: 'Cointreau', amountMl: 15, amountOz: '1/2 oz', rawId: 'cointreau' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 15, amountOz: '1/2 oz', rawId: 'fresh-lemon-juice' },
      { name: '英式橙皮果酱', nameEn: 'Orange Marmalade', amountMl: 15, amountOz: '1 barspoon', rawId: 'simple-syrup' }
    ],
    steps: [
      '在雪克壶中加入一满茶匙优质英式橙皮果酱（Orange Marmalade）与新鲜柠檬汁。',
      '用吧勺将果酱在柠檬汁中充分搅拌化开。',
      '加入金酒与君度橙酒，装满坚硬冰块。',
      '剧烈摇荡 15 秒使果酱与酒液完美乳化融合。',
      '双重细滤倒入预冷的马天尼杯中。'
    ],
    isIbaCertified: true,
    ibaCategory: 'New Era Drinks'
  },
  {
    id: 'old-cuban',
    slug: 'old-cuban',
    name: '老古巴人',
    nameEn: 'Old Cuban',
    category: 'modern',
    categoryZh: '新时代鸡尾酒',
    baseSpirit: 'Rum',
    baseSpiritZh: '朗姆酒',
    flavorProfiles: ['草本系', '清爽系', '果香系', '甜系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 1, strong: 3, fruity: 3, herbal: 5 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '浅碟香槟杯 / Coupe Glass',
    garnish: '新鲜薄荷叶 (Mint Leaf)',
    ice: '无冰 (提前冰镇酒杯)',
    technique: 'Shake',
    techniqueZh: '摇荡与顶注 (Shake & Top)',
    abv: 18,
    description: '纽约 Pegu Club 创始人奥黛丽·桑德斯（Audrey Saunders）2001年发明。被誉为“莫吉托的高级香槟进化版”，当代精调复兴里程碑之作。',
    story: '2001年奥黛丽在纽约创制此酒，将陈年朗姆酒、鲜薄荷、苦精与法国干型香槟融为一体，迅速成为全球顶级鸡尾酒吧的必点招牌。',
    proTips: [
      '压榨薄荷叶切忌捣碎茎部以免释放苦涩草腥味，只需轻柔按压释放精油。香槟务必冰镇透彻。'
    ],
    image: 'https://www.thecocktaildb.com/images/media/drink/eo8gfx1699022995.jpg',
    ingredients: [
      { name: '陈年深色朗姆酒', nameEn: 'Aged Dark Rum', amountMl: 45, amountOz: '1.5 oz', rawId: 'rum-dark' },
      { name: '干型香槟 / 起泡酒', nameEn: 'Brut Champagne', amountMl: 60, amountOz: '2 oz', rawId: 'prosecco-champagne' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 22.5, amountOz: '3/4 oz', rawId: 'fresh-lime-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 30, amountOz: '1 oz', rawId: 'simple-syrup' },
      { name: '安哥斯图拉苦精', nameEn: 'Angostura Bitters', amountMl: 2, amountOz: '2 dashes', rawId: 'angostura-bitters' }
    ],
    steps: [
      '在雪克壶底放入 6-8 片新鲜薄荷叶、青柠汁与单糖浆，轻柔压出薄荷香气。',
      '加入陈年深色朗姆酒与安哥斯图拉苦精，加入冰块剧烈摇荡 10 秒。',
      '双重过滤倒入预冷的浅碟香槟杯中。',
      '顶注冰镇干型香槟或普罗塞克起泡酒，轻轻搅拌一次。',
      '在酒液表面漂浮一片鲜薄荷叶作为装饰。'
    ],
    isIbaCertified: true,
    ibaCategory: 'New Era Drinks'
  },
  {
    id: 'gin-gin-mule',
    slug: 'gin-gin-mule',
    name: '金酒姜汁骡子 / 金金骡子',
    nameEn: 'Gin-Gin Mule',
    category: 'modern',
    categoryZh: '大师名作',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['辛辣系', '草本系', '清爽系', '柑橘系'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 1, strong: 3, fruity: 2, herbal: 5 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / 铜马克杯 (Highball / Copper Mug)',
    garnish: '薄荷枝与青柠轮片 (Mint Sprig & Lime Wheel)',
    ice: '满冰 (Cubed Ice)',
    technique: 'Shake',
    techniqueZh: '摇荡与顶注',
    abv: 14,
    description: '奥黛丽·桑德斯2000年在纽约 Bemelmans Bar 创制的传世之作。将莫吉托与莫斯科骡子完美合体，引爆了21世纪姜汁啤酒复兴潮。',
    story: '在奥黛丽推出金金骡子之前，优质非酒精姜啤几乎在美洲绝迹。这杯酒的火爆直接催生了现代高品质姜啤品牌的全面复兴。',
    proTips: [
      '务必使用发酵型辛辣姜汁啤酒（Ginger Beer），而非寡淡的姜汁汽水（Ginger Ale）。'
    ],
    image: 'https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg',
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 45, amountOz: '1.5 oz', rawId: 'gin' },
      { name: '优质姜汁啤酒', nameEn: 'Ginger Beer', amountMl: 90, amountOz: '3 oz', rawId: 'ginger-beer' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 22.5, amountOz: '3/4 oz', rawId: 'fresh-lime-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'simple-syrup' }
    ],
    steps: [
      '在雪克壶中轻压薄荷叶、单糖浆与鲜青柠汁。',
      '加入金酒与冰块，轻快摇荡 8 秒。',
      '滤入装有新鲜冰块的高球杯中。',
      '顶注优质辛辣姜汁啤酒（Ginger Beer），轻轻提拉吧勺混匀。',
      '插上拍醒的薄荷枝装饰。'
    ]
  },
  {
    id: 'blue-blazer',
    slug: 'blue-blazer',
    name: '蓝色火焰',
    nameEn: 'Blue Blazer',
    category: 'classic',
    categoryZh: '宗师鼻祖',
    baseSpirit: 'Whiskey',
    baseSpiritZh: '威士忌',
    flavorProfiles: ['烈酒感', '甜系', '柑橘系'],
    flavorRadar: { sour: 2, sweet: 3, bitter: 1, strong: 5, fruity: 2, herbal: 2 },
    difficulty: 'advanced',
    difficultyZh: '进阶',
    glass: '耐热马克杯 / Toddy Glass',
    garnish: '柠檬皮条与肉桂 (Lemon Peel & Cinnamon)',
    ice: '热饮 (Hot / Flaming)',
    technique: 'Build',
    techniqueZh: '火焰对倒法 (Flaming Toss)',
    abv: 32,
    description: '19世纪鸡尾酒之父杰里·托马斯（Jerry Thomas）名震世界的火焰神作。将燃烧着蓝色幽火的滚烫烈酒在两个银杯之间来回倾倒拉出一条火龙。',
    story: '1850年代杰里·托马斯在旧金山淘金热时期的埃尔多拉多酒吧创制。当时一名淘金客要求一杯“能给灵魂解冻的真家伙”，托马斯便点燃了威士忌与开水创造了这门传世绝技。',
    proTips: [
      '安全第一：操作火焰对倒前务必清理吧台周围易燃物，并在地面铺湿毛巾，推荐使用厚金属带柄杯操作。'
    ],
    image: 'https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg',
    ingredients: [
      { name: '高度波本/苏格兰威士忌', nameEn: 'Overproof Whiskey', amountMl: 60, amountOz: '2 oz', rawId: 'whiskey-bourbon' },
      { name: '滚烫开水', nameEn: 'Boiling Water', amountMl: 60, amountOz: '2 oz', rawId: 'club-soda' },
      { name: '蜂蜜或细砂糖', nameEn: 'Honey or Sugar', amountMl: 10, amountOz: '1 barspoon', rawId: 'honey-syrup' }
    ],
    steps: [
      '准备两个带手柄的厚金属调酒杯。',
      '在一个金属杯中加入高度威士忌与蜂蜜。',
      '在另一个金属杯中加入滚烫沸水。',
      '点燃威士忌液体使其燃起蓝色火焰，在两杯之间悬空拉倒 4-5 次。',
      '倒入预热的耐热玻璃杯中，熄灭火焰，加入柠檬皮即可趁热享用。'
    ]
  },
  {
    id: 'japanese-highball',
    slug: 'japanese-highball',
    name: '日式威士忌高球',
    nameEn: 'Japanese Highball',
    category: 'classic',
    categoryZh: '银座经典',
    baseSpirit: 'Whiskey',
    baseSpiritZh: '威士忌',
    flavorProfiles: ['清爽系', '烈酒感', '柑橘系'],
    flavorRadar: { sour: 1, sweet: 1, bitter: 1, strong: 2, fruity: 1, herbal: 3 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / Highball Glass',
    garnish: '新鲜柠檬皮 (Lemon Peel)',
    ice: '老冰条 (Hand-carved Ice Column)',
    technique: 'Build',
    techniqueZh: '直调法',
    abv: 10,
    description: '银座调酒师极致匠心与苏打水气泡力学的典范之作。将日本威士忌、冰块与强气泡苏打水以 13.5 次精准搅拌呈现出极致清冽。',
    story: '日本调酒界将原本简单的西方高球升华为一门艺术。上野秀嗣、上田和男等大师通过控温、控冰与零消泡注水技法，将其打造成日本国宝级佐餐饮品。',
    proTips: [
      '威士忌与苏打水的黄金比例为 1:3 到 1:4。苏打水务必保持在 0-2℃ 极度冰镇状态以锁住碳酸气泡。'
    ],
    image: 'https://www.thecocktaildb.com/images/media/drink/dhvr7d1504519752.jpg',
    ingredients: [
      { name: '日本威士忌', nameEn: 'Japanese Whisky', amountMl: 45, amountOz: '1.5 oz', rawId: 'whiskey-japanese' },
      { name: '超强气泡苏打水', nameEn: 'Club Soda', amountMl: 135, amountOz: '4.5 oz', rawId: 'club-soda' }
    ],
    steps: [
      '在高球杯中放入一根手工切割的无气泡透明老冰柱。',
      '注入日本威士忌，顺时针搅拌 13.5 圈为酒液与杯体充分降温。',
      '沿着杯壁轻柔注入冰镇强气泡苏打水，避免直接冲击冰块造成气泡消散。',
      '吧勺伸入杯底轻轻向上提拉一次混匀即可。',
      '在杯口喷洒少许柠檬皮油提香。'
    ]
  },
  {
    id: 'fog-cutter',
    slug: 'fog-cutter',
    name: '除雾者',
    nameEn: 'Fog Cutter',
    category: 'tiki',
    categoryZh: '热带提基 (Tiki)',
    baseSpirit: 'Rum',
    baseSpiritZh: '朗姆酒',
    flavorProfiles: ['果香系', '酸甜爽口', '烈酒感', '甜系'],
    flavorRadar: { sour: 4, sweet: 4, bitter: 1, strong: 5, fruity: 5, herbal: 2 },
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: '提基杯 / 柯林杯 (Tiki Mug)',
    garnish: '新鲜薄荷枝与红樱桃 (Mint & Cherry)',
    ice: '碎冰 (Crushed Ice)',
    technique: 'Shake',
    techniqueZh: '摇荡与雪莉漂浮',
    abv: 22,
    description: '维克商人（Trader Vic）1940年代创制的提基重击之作。将白兰地、金酒与朗姆酒三基酒复合，最后漂浮雪莉酒，“驱散一切迷雾”。',
    story: '维克多·伯杰龙在加州奥克兰 Trader Vic\'s 发明。他曾打趣道：“当你喝下两杯除雾者，你脑海里的迷雾不仅会被驱散，整个人甚至会开始发光。”',
    proTips: [
      '顶层的雪莉酒漂浮（Sherry Float）是整杯酒风味的灵魂，第一口能吸入雪莉酒的干爽坚果香与下层的热带果味碰撞。'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Fog_Cutter%2C_in_San_Francisco_-%29_%286218450097%29.jpg/960px-Fog_Cutter%2C_in_San_Francisco_-%29_%286218450097%29.jpg',
    ingredients: [
      { name: '白朗姆酒', nameEn: 'White Rum', amountMl: 45, amountOz: '1.5 oz', rawId: 'rum-white' },
      { name: '干邑白兰地', nameEn: 'Cognac', amountMl: 30, amountOz: '1 oz', rawId: 'brandy-cognac' },
      { name: '伦敦干金酒', nameEn: 'Gin', amountMl: 15, amountOz: '1/2 oz', rawId: 'gin' },
      { name: '新鲜橙汁', nameEn: 'Fresh Orange Juice', amountMl: 45, amountOz: '1.5 oz', rawId: 'fresh-orange-juice' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 30, amountOz: '1 oz', rawId: 'fresh-lemon-juice' },
      { name: '杏仁糖浆', nameEn: 'Orgeat Syrup', amountMl: 15, amountOz: '1/2 oz', rawId: 'orgeat-syrup' },
      { name: '菲诺雪莉酒', nameEn: 'Sherry Float', amountMl: 15, amountOz: '1/2 oz', rawId: 'sherry-fino' }
    ],
    steps: [
      '在雪克壶中加入白朗姆酒、干邑白兰地、金酒、鲜橙汁、鲜柠檬汁与杏仁糖浆。',
      '加入碎冰剧烈摇荡 10 秒。',
      '将酒液连同碎冰一同倒入提基杯中，补满碎冰。',
      '在酒液顶层轻柔漂浮 15ml 雪莉酒。',
      '插上薄荷枝与鸡尾酒红樱桃装饰。'
    ]
  },
  {
    id: 'serendipity',
    slug: 'serendipity',
    name: '意外惊喜',
    nameEn: 'Serendipity',
    category: 'modern',
    categoryZh: '大师名作',
    baseSpirit: 'Brandy',
    baseSpiritZh: '白兰地',
    flavorProfiles: ['果香系', '草本系', '清爽系', '酸甜爽口'],
    flavorRadar: { sour: 3, sweet: 3, bitter: 1, strong: 3, fruity: 5, herbal: 4 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '高球杯 / 香槟杯 (Highball Glass)',
    garnish: '新鲜薄荷顶芽 (Fresh Mint Sprig)',
    ice: '满冰 (Cubed Ice)',
    technique: 'Build',
    techniqueZh: '直调法',
    abv: 15,
    description: '巴黎丽兹酒店海明威酒吧传奇馆长科林·菲尔德（Colin Field）1994年发明的法式国宝级名作。被巴黎人赞誉为“装在玻璃杯中的法兰西精髓”。',
    story: '科林·菲尔德在巴黎丽兹创作，以诺曼底卡尔瓦多斯苹果白兰地为基底，搭配鲜榨苹果汁、薄荷叶与冰镇香槟，是海明威酒吧三十年来的最高人气签名酒。',
    proTips: [
      '使用诺曼底 AOC 产区苹果白兰地（Calvados）能获得最纯正的木桶苹果芬芳。'
    ],
    image: 'https://www.thecocktaildb.com/images/media/drink/t5pv461606773026.jpg',
    ingredients: [
      { name: '卡尔瓦多斯苹果白兰地', nameEn: 'Calvados', amountMl: 30, amountOz: '1 oz', rawId: 'calvados' },
      { name: '纯苹果汁', nameEn: 'Pure Apple Juice', amountMl: 30, amountOz: '1 oz', rawId: 'apple-juice' },
      { name: '干型香槟', nameEn: 'Brut Champagne', amountMl: 60, amountOz: '2 oz', rawId: 'prosecco-champagne' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 5, amountOz: '1 barspoon', rawId: 'simple-syrup' }
    ],
    steps: [
      '在玻璃杯底轻轻揉捏拍醒几片鲜薄荷叶。',
      '加入少许单糖浆与卡尔瓦多斯苹果白兰地。',
      '加入澄清苹果汁，加入冰块轻轻搅拌。',
      '最后注入冰镇香槟至满杯，饰以薄荷枝上桌。'
    ]
  },
  {
    id: 'gordons-cup',
    slug: 'gordons-cup',
    name: '戈登之杯',
    nameEn: "Gordon's Cup",
    category: 'modern',
    categoryZh: '大师名作',
    baseSpirit: 'Gin',
    baseSpiritZh: '金酒',
    flavorProfiles: ['草本系', '清爽系', '酸甜爽口', '柑橘系'],
    flavorRadar: { sour: 4, sweet: 2, bitter: 1, strong: 3, fruity: 2, herbal: 5 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '古典杯 / Rocks Glass',
    garnish: '新鲜黄瓜切片与海盐粒 (Cucumber Wheel & Salt)',
    ice: '碎冰 (Crushed Ice)',
    technique: 'Shake',
    techniqueZh: '捣压摇荡法',
    abv: 18,
    description: '已故传奇萨沙·佩特拉斯克（Sasha Petraske）在 Milk & Honey 创制的夏日神作。将鲜黄瓜、青柠角与海盐捣压，带来无可比拟的爽脆口感。',
    story: '萨沙·佩特拉斯克2000年代初在纽约地下酒吧 Milk & Honey 推出，随后被 Sam Ross 与全球弟子传遍世界，成为精调酒吧最受欢迎的黄瓜风味鸡尾酒。',
    proTips: [
      '微量海盐不仅不会变咸，反而能大幅提升黄瓜的鲜甜与金酒的草本层次。'
    ],
    image: 'https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg',
    ingredients: [
      { name: '伦敦干金酒', nameEn: 'London Dry Gin', amountMl: 60, amountOz: '2 oz', rawId: 'gin' },
      { name: '新鲜青柠汁', nameEn: 'Fresh Lime Juice', amountMl: 22.5, amountOz: '3/4 oz', rawId: 'fresh-lime-juice' },
      { name: '单糖浆', nameEn: 'Simple Syrup', amountMl: 22.5, amountOz: '3/4 oz', rawId: 'simple-syrup' }
    ],
    steps: [
      '在雪克壶底加入 3-4 片新鲜黄瓜切片、2 个青柠角与一小撮海盐。',
      '用捣棒充分压出黄瓜汁与青柠酸香。',
      '加入金酒与单糖浆，加入碎冰剧烈摇荡 10 秒。',
      '将酒液连同碎冰一同倒入古典杯中，补满碎冰并饰以黄瓜片。'
    ]
  },
  {
    id: 'ritz-fizz',
    slug: 'ritz-fizz',
    name: '彩虹厅丽兹起泡',
    nameEn: 'Ritz Fizz',
    category: 'modern',
    categoryZh: '大师名作',
    baseSpirit: 'Liqueur',
    baseSpiritZh: '利口酒',
    flavorProfiles: ['果香系', '甜系', '清爽系', '柑橘系'],
    flavorRadar: { sour: 2, sweet: 4, bitter: 1, strong: 2, fruity: 4, herbal: 2 },
    difficulty: 'easy',
    difficultyZh: '简单',
    glass: '香槟笛形杯 / Champagne Flute',
    garnish: '食用玫瑰花瓣 (Rose Petal)',
    ice: '无冰 (提前冰镇酒杯)',
    technique: 'Build',
    techniqueZh: '直调法',
    abv: 15,
    description: '“鸡尾酒之王”戴尔·戴格罗夫（Dale DeGroff）为纽约彩虹厅重新开业创制的迎宾名作。晶莹的蓝宝石气泡中泛着玫瑰瓣，极尽奢华。',
    story: '1987年戴格罗夫执掌洛克菲勒中心彩虹厅，为了给宾客营造难忘的开场仪式感而特别设计，成为彩虹厅长盛不衰的庆典标志。',
    proTips: [
      '蓝柑桂与杏仁酒的香气交融出类似热带杏仁花香的迷人风味。'
    ],
    image: 'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg',
    ingredients: [
      { name: '蓝柑桂酒', nameEn: 'Blue Curaçao', amountMl: 15, amountOz: '1/2 oz', rawId: 'blue-curacao' },
      { name: '迪萨罗诺杏仁酒', nameEn: 'Amaretto', amountMl: 15, amountOz: '1/2 oz', rawId: 'amaretto' },
      { name: '新鲜柠檬汁', nameEn: 'Fresh Lemon Juice', amountMl: 10, amountOz: '1/3 oz', rawId: 'fresh-lemon-juice' },
      { name: '干型香槟', nameEn: 'Brut Champagne', amountMl: 90, amountOz: '3 oz', rawId: 'prosecco-champagne' }
    ],
    steps: [
      '在冰镇香槟杯中加入蓝柑桂酒、杏仁利口酒（Amaretto）与新鲜柠檬汁。',
      '轻轻倒入冰镇干型香槟或起泡酒至八分满。',
      '用吧勺轻轻自下而上提拉一次使酒液呈现通透宝蓝色。',
      '在酒液表面放置一片红玫瑰花瓣装饰。'
    ]
  }
];

let content = fs.readFileSync(path.join(projectRoot, 'src', 'data', 'recipes.ts'), 'utf8');

// Replace the end of array
const lastBrace = content.lastIndexOf('];');
if (lastBrace !== -1) {
  const prefix = content.substring(0, lastBrace).trimEnd();
  const formattedAppended = formattedMasterRecipes.map(r => ',\n  ' + JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, '$1:')).join('');
  const newContent = prefix + formattedAppended + '\n];\n';
  fs.writeFileSync(path.join(projectRoot, 'src', 'data', 'recipes.ts'), newContent, 'utf8');
  console.log(`Successfully appended ${formattedMasterRecipes.length} cleanly formatted master recipes.`);
}
