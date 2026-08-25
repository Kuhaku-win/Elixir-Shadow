import type { LoreStory } from '../types/cocktail';

export const LORE_STORIES: LoreStory[] = [
  {
    id: 'lore-speakeasy',
    title: '暗夜密语：禁酒令与地下酒吧的狂欢',
    subtitle: '一段在法网与黑市流光中重塑现代调酒史的传奇时代',
    tag: '历史秘辛',
    era: '1920-1933 · 美国禁酒令时期',
    summary: '当第18修正案让全美陷入干涸，数以万计的地下酒吧在理发店后门、书柜暗道后悄然滋生。“轻声细语（Speak-easy）”不仅催生了暗号文化，更为掩盖劣质私酒而诞生了无数现代经典果汁调酒。',
    fullStory: `1920年，美国正式颁布《沃尔斯泰德法案》（禁酒令），全美合法酿酒与售酒戛然而止。然而，人类对微醺的渴望从未被法律扑灭。短短几年内，仅纽约曼哈顿就秘密涌现了超过三万家隐秘的地下酒吧（Speakeasy）。

进门需要对暗号、敲特定的暗门节奏，甚至是出示特制镀金会员币。由于正规蒸馏厂关闭，黑市充斥着粗糙刺喉的“浴缸金酒（Bathtub Gin）”和私酿威士忌。为了掩盖劣质基酒的杂味，当时极具天才的调酒师们大量融入新鲜蜂蜜、柠檬汁、薄荷、蛋清和果味利口酒——**蜜蜂之膝（Bee's Knees）**、**最后之语（Last Word）**等传世经典正是诞生于这一黑暗而璀璨的时期。`,
    relatedRecipeSlug: 'bees-knees',
    relatedRecipeName: '蜜蜂之膝 (Bee\'s Knees)',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lore-gin-tonic',
    title: '金鸡纳树与大英海军：琴汤力的抗疟传奇',
    subtitle: '本是一剂苦涩的救命良药，却意外成为席卷全球的夏日甘露',
    tag: '药典传奇',
    era: '1850s · 英属印度与公海远航',
    summary: '19世纪驻印度的英国军官为了预防疟疾，不得不每日服用苦涩难咽的金鸡纳树皮提取物（奎宁）。当某位军官尝试将金酒、糖水与青柠混入奎宁水中，现代最伟大的高球特调诞生了。',
    fullStory: `在19世纪的印度殖民时期，疟疾是大英帝国军队面临的最致命威胁。唯一的解药是从南美金鸡纳树树皮中提取的生物碱——奎宁（Quinine）。然而，纯奎宁溶液苦涩难当，甚至足以让最剽悍的士兵退避三舍。

为了让士兵们按时服药，军医们开始在奎宁水中加入苏打水与糖，制成了最初的“汤力水（Tonic Water）”。然而真正的突破来自于军官们的日常配额——杜松子金酒（Gin）。

当烈性清冽的金酒、带气泡的含奎宁汤力水，与随军携带防坏血病的新鲜青柠角碰撞在一起时，奇迹发生了：杜松子的草本松木香完美中和了奎宁的苦涩，青柠的清酸赋予了整体极致的爽脆口感。丘吉尔后来甚至盛赞：“琴汤力救赎的大英帝国军人的性命与心灵，比全英格兰的所有医生还要多。”`,
    relatedRecipeSlug: 'gin-tonic',
    relatedRecipeName: '金汤力 (Gin & Tonic)',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lore-hemingway',
    title: '海明威与哈瓦那：双份朗姆与无糖的救赎',
    subtitle: '硬汉作家在加勒比海风中，为糖尿病与灵魂独创的「乞力马扎罗雪山」',
    tag: '文豪轶事',
    era: '1930s · 古巴哈瓦那 El Floridita',
    summary: '“我的莫吉托在 La Bodeguita，我的代基里在 El Floridita。”由于身患糖尿病又追求极致酒精冲击，海明威要求调酒师 Constantino 剔除所有白糖，换取双倍朗姆酒与双倍青柠汁。',
    fullStory: `在古巴哈瓦那主教街的拐角处，矗立着被称为“鸡尾酒摇篮”的传奇酒吧 El Floridita。吧台最深处永远保留着一个铜制雕像，那就是文豪欧内斯特·海明威。

海明威不仅嗜酒如命，更对鸡尾酒的比例有着偏执的苛求。因为家族遗传糖尿病，他无法饮用传统的含糖代基里；同时，硬汉作风让他对轻柔的低度酒不屑一顾。他对传奇调酒师 Constantino Ribalaigua 提出了著名要求：“去掉糖，加双倍朗姆酒！”

调酒师随后为其微调：加入了微量提香的黑樱桃利口酒（Maraschino）与新鲜西柚汁，形成了口感极为干冽、酸爽如刀锋、同时带有澎湃甘蔗烈香的**海明威特调代基里（Hemingway Special / Papa Doble）**。海明威曾创下一晚连续狂饮16杯的记录。`,
    relatedRecipeSlug: 'hemingway-daiquiri',
    relatedRecipeName: '海明威特调代基里 (Hemingway Daiquiri)',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lore-martini-007',
    title: '马天尼圣战：向法国鞠躬 vs 摇匀不要搅拌',
    subtitle: '从温斯顿·丘吉尔的极致干烈，到詹姆斯·邦德对经典礼仪的公然叛逆',
    tag: '经典争锋',
    era: '1940s-1960s · 现代特工与政要沙龙',
    summary: '马天尼被誉为“鸡尾酒之王”，而围绕它的比例与调制手法的争论持续了近一个世纪。丘吉尔追求不放一滴苦艾的极干境界，而007一句「Shaken, not stirred」彻底颠覆了搅拌法守则。',
    fullStory: `在经典调酒学中，纯烈酒与芳香型葡萄酒混合的酒款（如马天尼、曼哈顿）一律严格使用**搅拌法（Stir）**，以保持酒液如水晶般清澈透明，避免产生空气气泡与浑浊冰渣。

然而，英国特工詹姆斯·邦德（007）在1953年伊恩·弗莱明的原著《皇家赌场》中，打破了这一铁律：“三份高登金酒，一份伏特加，半份丽叶开胃酒，加冰彻底摇匀（Shake），直到冰透，然后加一长条柠檬皮。”

为什么选择摇荡？摇荡法能迅速将酒液温度降至零度以下，微小的空气气泡会让酒体入口呈现如霜雪般的微冰沙口感，并瞬间柔化高酒精带来的灼烧感。而二战时期的英国首相丘吉尔则走向了另一个极端——他只要纯金酒加冰搅拌，苦艾酒只需“在阳光下穿透瓶身照射进杯中”即可。`,
    relatedRecipeSlug: 'dry-martini',
    relatedRecipeName: '干马天尼 (Dry Martini)',
    image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lore-negroni',
    title: '尼格罗尼伯爵的烈酒狂想：苦甜红宝石的诞生',
    subtitle: '当一位热爱冒险的意大利贵族，厌倦了软绵绵的苏打水',
    tag: '贵族奇缘',
    era: '1919 · 意大利佛罗伦萨 Caffè Casoni',
    summary: '1919年佛罗伦萨，卡米洛·尼格罗尼伯爵走进熟悉的咖啡馆，要求调酒师 Fosco Scarselli 将美式特调（Americano）中的苏打水替换为伦敦干金酒——全球最受欢迎的苦甜红宝石就此问世。',
    fullStory: `卡米洛·尼格罗尼（Camillo Negroni）伯爵曾在美国西部做过牛仔，并在伦敦生活多年，骨子里流淌着对烈性酒精的狂热。

回到佛罗伦萨后，他经常光顾 Caffè Casoni。当时上流社会流行饮用“美式特调（Americano）”（金巴利、红苦艾酒加苏打水）。但在经历了美洲粗犷烈酒洗礼的伯爵看来，苏打水过于寡淡无味。

那一天，伯爵对调酒师说：“把苏打水去掉，换成烈性金酒。为了和普通美式特调区分开，不要放柠檬片，改放一片新鲜橙皮。”

这杯由金酒（杜松子烈香）、金巴利（苦草本红宝石）、甜苦艾酒（浓郁香草香料）以 1:1:1 黄金比例调配的鸡尾酒，完美平衡了苦、甜、烈的味觉三角，百年后依然霸占世界鸡尾酒榜单顶端。`,
    relatedRecipeSlug: 'negroni',
    relatedRecipeName: '尼格罗尼 (Negroni)',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lore-penicillin',
    title: '盘尼西林：现代鸡尾酒复兴的救世奇迹',
    subtitle: '纽约地下酒吧走出的当代经典之王，用苏格兰泥煤烟熏唤醒感官',
    tag: '现代革新',
    era: '2005 · 纽约 Milk & Honey',
    summary: '2005年，调酒大师 Sam Ross 在传奇酒吧 Milk & Honey 实验调制，将调和威士忌、新鲜生姜、蜂蜜与柠檬汁融合，最后在酒面轻浮一层极度泥煤烟熏的拉弗格单一麦芽。',
    fullStory: `2000年代初，纽约迎来了全球现代鸡尾酒复兴浪潮（Craft Cocktail Renaissance）。已故传奇调酒大师 Sasha Petraske 开创的 Milk & Honey 酒吧成为了新时代圣殿。

2005年某晚，调酒师 Sam Ross 正在为一款新酒寻找灵感。他选用苏格兰调和威士忌作为基底，加入了现榨生姜汁的辛辣、新鲜柠檬汁的利落酸度与蜂蜜糖浆的温润包裹。但这还不够，在成酒倒入洛克杯并加入手凿大冰块后，他顺着吧勺背面，在酒液表面轻盈地漂浮（Float）了一层具有消毒水、烟熏与海风咸苦气息的艾雷岛拉弗格（Laphroaig 10年）泥煤威士忌。

品饮者端起酒杯时，鼻腔首先被狂暴深邃的艾雷岛烟熏征服，入口后却是姜蜜与柠檬的温暖治愈——如同医学上具有划时代救赎意义的抗生素「青霉素（Penicillin）」，这款酒迅速征服了全球每一个严肃鸡尾酒吧。`,
    relatedRecipeSlug: 'penicillin',
    relatedRecipeName: '盘尼西林 (Penicillin)',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80'
  }
];
