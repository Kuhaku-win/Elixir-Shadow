import type { Ingredient } from '../types/cocktail';

export const INGREDIENTS_DATABASE: Ingredient[] = [
  {
    "id": "gin",
    "slug": "gin",
    "name": "金酒 / 杜松子酒",
    "nameEn": "Gin (London Dry / Plymouth / Old Tom)",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 40,
    "origin": "英国 / 荷兰",
    "flavorDescription": "以中性烈酒为基底，蒸馏融入杜松子、芫荽籽、欧当归根、柑橘皮等草本植物，口感干爽凛冽，带有清新的松木与草本香气。",
    "commonUsage": [
      "金汤力 (Gin & Tonic)",
      "干马天尼 (Dry Martini)",
      "尼格罗尼 (Negroni)",
      "金雷特 (Gimlet)",
      "新加坡司令 (Singapore Sling)"
    ],
    "buyingGuide": "初学者推荐经典伦敦干金酒（如哥顿 Gordon's、添加利 Tanqueray、必富达 Beefeater）；进阶可尝试风味更细腻的植物学家 (The Botanist) 或亨利爵士 (Hendrick's)。",
    "storageMethod": "常温避光密封保存，开封后建议在2年内饮用以保持植物精油鲜明香气。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Gin-Medium.png",
    "colorBadge": "border-emerald-500/40 text-emerald-400",
    "substitutes": [
      {
        "targetIngredientId": "vodka",
        "substituteName": "纯净伏特加 (Vodka)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "缺少杜松子草本香气，酒体更纯净中性；可拍入一片新鲜迷迭香或擦拭柠檬皮油弥补香气。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "vodka",
    "slug": "vodka",
    "name": "伏特加",
    "nameEn": "Vodka",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 40,
    "origin": "俄罗斯 / 波兰 / 瑞典",
    "flavorDescription": "经过多重蒸馏与活性炭吸附过滤的高纯度烈酒，风味纯净中性、无色无明显杂质气息，极具包容性，是水果与利口酒的最佳载体。",
    "commonUsage": [
      "莫斯科骡子 (Moscow Mule)",
      "大都会 (Cosmopolitan)",
      "血腥玛丽 (Bloody Mary)",
      "螺丝起子 (Screwdriver)",
      "浓缩咖啡马天尼 (Espresso Martini)"
    ],
    "buyingGuide": "调酒推荐高性价比的绝对伏特加 (Absolut)、斯米诺 (Smirnoff)；追求极致顺滑纯饮感可选灰雁 (Grey Goose)、雪树 (Belvedere)。",
    "storageMethod": "常温阴凉处存放，也可直接放入冷冻室冰镇，伏特加在零下低温下会变得如糖浆般浓稠顺滑。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Vodka-Medium.png",
    "colorBadge": "border-cyan-500/40 text-cyan-400",
    "substitutes": [
      {
        "targetIngredientId": "gin",
        "substituteName": "伦敦干金酒 (London Dry Gin)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "带来优雅杜松子草本香气，适合大多数酸甜与长饮鸡尾酒。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "rum-white",
        "substituteName": "白朗姆酒 (White Rum)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "带有甘蔗淡甜果香，使整体口感更加温润。",
        "difficultyRating": 2
      }
    ]
  },
  {
    "id": "rum-white",
    "slug": "rum-white",
    "name": "白朗姆酒",
    "nameEn": "White Rum / Light Rum",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 40,
    "origin": "加勒比海 / 古巴 / 波多黎各",
    "flavorDescription": "以甘蔗汁或糖蜜发酵蒸馏而成，短期陈酿后经木炭过滤，口感清澈甘甜，带有淡淡的热带甘蔗果香和青草芬芳。",
    "commonUsage": [
      "莫吉托 (Mojito)",
      "代基里 (Daiquiri)",
      "自由古巴 (Cuba Libre)",
      "椰林飘香 (Piña Colada)"
    ],
    "buyingGuide": "经典首选百加得白朗姆 (Bacardí Carta Blanca) 或哈瓦那俱乐部3年 (Havana Club 3 Años)。",
    "storageMethod": "避光常温保存即可。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
    "colorBadge": "border-amber-400/40 text-amber-300",
    "substitutes": [
      {
        "targetIngredientId": "vodka",
        "substituteName": "纯净伏特加 (Vodka)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "风味更纯净干爽，建议增加 3ml 糖浆以补偿白朗姆的甘蔗甜香。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "cachaca",
        "substituteName": "卡夏莎甘蔗酒 (Cachaça)",
        "tier": "perfect",
        "ratioMultiplier": 1,
        "flavorImpactNote": "巴西甘蔗酒，青草与天然甘蔗香气更鲜活奔放。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "rum-dark",
    "slug": "rum-dark",
    "name": "黑朗姆 / 深色陈酿朗姆",
    "nameEn": "Dark Rum / Aged Rum",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 40,
    "origin": "牙买加 / 巴巴多斯 / 圭亚那",
    "flavorDescription": "在深度烘烤的橡木桶中陈年多年，色泽呈深琥珀或桃花心木色，带有焦糖、太妃糖、香草、烤坚果与深沉的热带成熟水果香气。",
    "commonUsage": [
      "迈泰 (Mai Tai)",
      "月黑风高 (Dark 'n Stormy)",
      "僵尸 (Zombie)",
      "飓风 (Hurricane)"
    ],
    "buyingGuide": "百加得黑朗姆、普雷森斯黑朗姆 (Plantation Original Dark) 或摩根船长 (Captain Morgan)。",
    "storageMethod": "常温避光密封。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Dark%20rum-Medium.png",
    "colorBadge": "border-amber-600/40 text-amber-500",
    "substitutes": [
      {
        "targetIngredientId": "brandy-cognac",
        "substituteName": "干邑白兰地 (Cognac / Brandy)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "橡木桶与干果香气相近，口感更显高雅细腻。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "whiskey-bourbon",
        "substituteName": "波本威士忌 (Bourbon)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "焦糖与香草桶味呼应，甜润感与烘烤风味极佳。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "whiskey-bourbon",
    "slug": "whiskey-bourbon",
    "name": "波本威士忌",
    "nameEn": "Bourbon Whiskey",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 45,
    "origin": "美国肯塔基州",
    "flavorDescription": "原料中至少含有51%玉米，并在全新烧烤橡木桶中陈酿，酒体醇厚甜美，饱含浓郁的香草、焦糖、烘烤橡木、椰子与奶油甜香。",
    "commonUsage": [
      "古典鸡尾酒 (Old Fashioned)",
      "曼哈顿 (Manhattan)",
      "威士忌酸 (Whiskey Sour)",
      "薄荷朱利普 (Mint Julep)"
    ],
    "buyingGuide": "调酒界公认常青树：美格波本 (Maker's Mark)、野火鸡 (Wild Turkey 101)、水牛足迹 (Buffalo Trace)、四玫瑰 (Four Roses)。",
    "storageMethod": "常温垂直放置，切勿横卧，避免高度酒精腐蚀软木塞。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Bourbon-Medium.png",
    "colorBadge": "border-yellow-500/40 text-yellow-400",
    "substitutes": [
      {
        "targetIngredientId": "whiskey-rye",
        "substituteName": "黑麦威士忌 (Rye Whiskey)",
        "tier": "perfect",
        "ratioMultiplier": 1,
        "flavorImpactNote": "焦糖甜感转为辛香黑麦调，骨架更硬朗坚挺，属于调酒师经典 Twist。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "whiskey-irish",
        "substituteName": "爱尔兰威士忌 (Irish Whiskey)",
        "tier": "perfect",
        "ratioMultiplier": 1,
        "flavorImpactNote": "口感更柔顺清雅、果香明快，木桶辛辣感相对温和。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "brandy-cognac",
        "substituteName": "干邑白兰地 (Cognac / Brandy)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "由谷物香转为葡萄果香与雪利桶风味，口感更加圆润丝滑。",
        "difficultyRating": 2
      }
    ]
  },
  {
    "id": "whiskey-scotch",
    "slug": "whiskey-scotch",
    "name": "苏格兰威士忌 (调和/泥煤)",
    "nameEn": "Scotch Whisky (Blended & Islay Peated)",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 40,
    "origin": "苏格兰",
    "flavorDescription": "以发芽大麦为主要原料经泥煤熏烤与橡木桶陈酿，具有层次复杂的石楠花蜜、干果、烟熏、泥煤、碘伏与海风咸苦气息。",
    "commonUsage": [
      "盘尼西林 (Penicillin)",
      "教父 (Godfather)",
      "罗伯罗伊 (Rob Roy)",
      "血与沙 (Blood and Sand)"
    ],
    "buyingGuide": "基底调配推荐尊尼获加黑牌 (Johnnie Walker Black Label)；泥煤漂浮推荐拉弗格10年 (Laphroaig) 或泰斯卡10年 (Talisker)。",
    "storageMethod": "常温干燥避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Scotch-Medium.png",
    "colorBadge": "border-yellow-600/40 text-yellow-500",
    "substitutes": [
      {
        "targetIngredientId": "whiskey-japanese",
        "substituteName": "日本威士忌 (Japanese Whisky)",
        "tier": "perfect",
        "ratioMultiplier": 1,
        "flavorImpactNote": "泥煤烟熏度降低，花果香与水楢木香气更精致细腻。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "whiskey-bourbon",
        "substituteName": "波本威士忌 (Bourbon)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "无泥煤烟熏感，焦糖甜度与橡木桶香气显著增强。",
        "difficultyRating": 2
      }
    ]
  },
  {
    "id": "whiskey-rye",
    "slug": "whiskey-rye",
    "name": "黑麦威士忌",
    "nameEn": "Rye Whiskey",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 45,
    "origin": "美国 / 加拿大",
    "flavorDescription": "原料中至少含51%黑麦，相比波本更少甜腻感，具有鲜明突出的黑胡椒、肉桂、丁香等辛香料与干草风味，口感干爽辛烈。",
    "commonUsage": [
      "经典曼哈顿 (Manhattan)",
      "萨泽拉克 (Sazerac)",
      "林荫大道 (Boulevardier)"
    ],
    "buyingGuide": "推荐野火鸡黑麦 (Wild Turkey Rye)、宝格黑麦 (Bulleit Rye) 或留名黑麦 (Rittenhouse Rye 100 Proof)。",
    "storageMethod": "常温避光密封。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Rye%20whiskey-Medium.png",
    "colorBadge": "border-amber-700/40 text-amber-600",
    "substitutes": [
      {
        "targetIngredientId": "whiskey-bourbon",
        "substituteName": "波本威士忌 (Bourbon)",
        "tier": "perfect",
        "ratioMultiplier": 1,
        "flavorImpactNote": "辛香黑麦转为玉米焦糖与香草甜香，口感更加浓郁甜润。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "whiskey-irish",
        "substituteName": "爱尔兰威士忌 (Irish Whiskey)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "三重蒸馏更显轻柔干净。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "tequila",
    "slug": "tequila",
    "name": "龙舌兰酒 (Blanco / Reposado)",
    "nameEn": "Tequila (100% Blue Agave)",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 38,
    "origin": "墨西哥哈利斯科州",
    "flavorDescription": "由100%蓝色龙舌兰植物的心脏蒸馏而成，带有独特的植物草本青香、黑胡椒、柑橘果香与泥土矿物质气息。",
    "commonUsage": [
      "玛格丽特 (Margarita)",
      "帕洛玛 (Paloma)",
      "龙舌兰日出 (Tequila Sunrise)",
      "马塔多 (Matador)"
    ],
    "buyingGuide": "务必认准酒标上的「100% de Agave」标志。推荐金快活 (Jose Cuervo Tradicional)、豪帅银、培恩 (Patrón Silver)、奥美加 (Olmeca Altos)。",
    "storageMethod": "常温阴凉处密封。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Tequila-Medium.png",
    "colorBadge": "border-emerald-400/40 text-emerald-300",
    "substitutes": [
      {
        "targetIngredientId": "mezcal",
        "substituteName": "梅斯卡尔酒 (Mezcal)",
        "tier": "perfect",
        "ratioMultiplier": 0.9,
        "flavorImpactNote": "带来强烈的地炉木柴烟熏气息，风味极具张力与旷野感。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "brandy-cognac",
    "slug": "brandy-cognac",
    "name": "干邑白兰地",
    "nameEn": "Cognac / Brandy (VS / VSOP)",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 40,
    "origin": "法国干邑法定产区",
    "flavorDescription": "以白葡萄酿酒后经铜制夏朗德壶式蒸馏器双重蒸馏并在法国橡木桶陈酿，充满浓郁的紫罗兰花香、干杏、无花果、香草与雪茄盒香气。",
    "commonUsage": [
      "边车 (Sidecar)",
      "法国75 (French 75 白兰地版)",
      "白兰地亚历山大 (Brandy Alexander)",
      "威斯康星老式 (Brandy Old Fashioned)"
    ],
    "buyingGuide": "调酒推荐人头马 (Rémy Martin VSOP)、轩尼诗 (Hennessy VSOP) 或高性价比的皮埃尔费朗 (Pierre Ferrand 1840)。",
    "storageMethod": "常温避光直立保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Cognac-Medium.png",
    "colorBadge": "border-purple-400/40 text-purple-300",
    "substitutes": [
      {
        "targetIngredientId": "calvados",
        "substituteName": "卡尔瓦多斯苹果白兰地 (Calvados)",
        "tier": "perfect",
        "ratioMultiplier": 1,
        "flavorImpactNote": "苹果白兰地完美契合，带来更清脆的熟苹果与肉桂香气。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "rum-dark",
        "substituteName": "深色陈酿黑朗姆 (Dark Rum)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "焦糖糖蜜与热带果香更浓烈，调配老式与酸酒表现优异。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "cointreau",
    "slug": "cointreau",
    "name": "君度橙酒 / 白柑桂利口酒",
    "nameEn": "Cointreau / Triple Sec",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 40,
    "origin": "法国",
    "flavorDescription": "采用甜橙与苦橙皮蒸馏而成的高纯度无色利口酒，甜而不腻，充满极富穿透力的纯正橙油芳香。",
    "commonUsage": [
      "玛格丽特 (Margarita)",
      "边车 (Sidecar)",
      "大都会 (Cosmopolitan)",
      "长岛冰茶 (Long Island Iced Tea)",
      "白色佳人 (White Lady)"
    ],
    "buyingGuide": "首选法国原装君度 (Cointreau)；亦可选用优质 Triple Sec（如 Bols、DeKuyper）。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Cointreau-Medium.png",
    "colorBadge": "border-orange-500/40 text-orange-400",
    "substitutes": [
      {
        "targetIngredientId": "grand-marnier",
        "substituteName": "柑曼怡干邑甜橙酒 (Grand Marnier)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "干邑白兰地底色更显醇厚复杂，带来更浓郁的香草橡木与焦糖橙香。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "blue-curacao",
        "substituteName": "蓝柑桂酒 (Blue Curaçao / 蓝橙皮酒)",
        "tier": "emergency",
        "ratioMultiplier": 1,
        "flavorImpactNote": "柑橘香气相似但带有艳丽蓝色，酒液颜色将转为海蓝色。",
        "difficultyRating": 2
      }
    ]
  },
  {
    "id": "campari",
    "slug": "campari",
    "name": "金巴利苦酒",
    "nameEn": "Campari",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 25,
    "origin": "意大利米兰",
    "flavorDescription": "具有标志性鲜红色的意大利开胃酒，以苦橙皮、龙胆草根、大黄及数十种秘密草药浸泡，入口苦味深邃，伴随迷人的草本回甘。",
    "commonUsage": [
      "尼格罗尼 (Negroni)",
      "美式特调 (Americano)",
      "林荫大道 (Boulevardier)",
      "金巴利苏打 (Campari Soda)"
    ],
    "buyingGuide": "红宝石色经典，酒吧必备核心配料。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Campari-Medium.png",
    "colorBadge": "border-rose-500/40 text-rose-400",
    "substitutes": [
      {
        "targetIngredientId": "aperol",
        "substituteName": "阿佩罗橙味开胃酒 (Aperol)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "苦度减半、柑橘甜感增强，适合制作轻盈版内格罗尼 (Negroni Light)。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "cynar",
        "substituteName": "朝圣者朝鲜蓟苦酒 (Cynar)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 0.9,
        "flavorImpactNote": "朝鲜蓟带来深沉草本泥土气息与浓郁回甘，层次极为深邃。",
        "difficultyRating": 2
      },
      {
        "targetIngredientId": "suze",
        "substituteName": "苏兹龙胆草利口酒 (Suze)",
        "tier": "emergency",
        "ratioMultiplier": 0.8,
        "flavorImpactNote": "龙胆草苦味更加尖锐清亮，色泽转为明亮金黄（如制作 White Negroni）。",
        "difficultyRating": 2
      }
    ]
  },
  {
    "id": "sweet-vermouth",
    "slug": "sweet-vermouth",
    "name": "甜红苦艾酒",
    "nameEn": "Sweet Vermouth (Rosso)",
    "category": "liqueur",
    "categoryZh": "配制酒/加度酒",
    "abv": 15,
    "origin": "意大利都灵",
    "flavorDescription": "以白葡萄酒为基酒，加入焦糖染色并浸泡苦艾草、肉桂、丁香、香草等植物精粹，口感丰润浓郁，甜美中蕴含优雅草本微苦。",
    "commonUsage": [
      "曼哈顿 (Manhattan)",
      "尼格罗尼 (Negroni)",
      "林荫大道 (Boulevardier)",
      "汉基帕基 (Hanky Panky)"
    ],
    "buyingGuide": "推荐天芬 (Carpano Antica Formula)、马天尼红 (Martini & Rossi Rosso)、仙赞诺红 (Cinzano Rosso)。",
    "storageMethod": "重要：因其为葡萄酒基底，开封后极易氧化！开瓶后必须冷藏，并建议在1-2个月内用完。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Sweet%20Vermouth-Medium.png",
    "colorBadge": "border-red-600/40 text-red-500",
    "substitutes": [
      {
        "targetIngredientId": "port-wine",
        "substituteName": "宝石红波特酒 (Ruby Port)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 0.85,
        "flavorImpactNote": "波特酒甜感更稠密厚重，建议略加 1 滴苦精以补充草本香气。",
        "difficultyRating": 2
      },
      {
        "targetIngredientId": "lillet-blanc",
        "substituteName": "丽叶白开胃酒 (Lillet Blanc)",
        "tier": "emergency",
        "ratioMultiplier": 1,
        "flavorImpactNote": "开胃酒偏清爽花果香，色泽与厚重度不同但能提供良好的强化葡萄酒底色。",
        "difficultyRating": 2
      }
    ]
  },
  {
    "id": "dry-vermouth",
    "slug": "dry-vermouth",
    "name": "干苦艾酒 / 干味美思",
    "nameEn": "Dry Vermouth",
    "category": "liqueur",
    "categoryZh": "配制酒/加度酒",
    "abv": 18,
    "origin": "法国",
    "flavorDescription": "以干白葡萄酒为底，加芳香草本植物浸泡，含糖量极低（每升少于50克），口感干冽微酸，伴有白花、洋甘菊和柑橘气息。",
    "commonUsage": [
      "干马天尼 (Dry Martini)",
      "吉布森 (Gibson)",
      "竹子 (Bamboo)",
      "布朗克斯 (Bronx)"
    ],
    "buyingGuide": "首选法国普诺尼 (Noilly Prat Extra Dry)、道林 (Dolin Dry) 或马天尼干 (Martini Extra Dry)。",
    "storageMethod": "开封后必须冷藏，建议1-2个月内饮用完毕。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Dry%20Vermouth-Medium.png",
    "colorBadge": "border-slate-400/40 text-slate-300",
    "substitutes": [
      {
        "targetIngredientId": "lillet-blanc",
        "substituteName": "丽叶白开胃酒 (Lillet Blanc)",
        "tier": "perfect",
        "ratioMultiplier": 1,
        "flavorImpactNote": "带更柔和的柑橘花香与微甜感，如调制维斯帕马天尼 (Vesper) 极为出彩。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "sherry-fino",
        "substituteName": "菲诺雪莉酒 (Fino Sherry)",
        "tier": "perfect",
        "ratioMultiplier": 1,
        "flavorImpactNote": "酵母香气更浓郁干爽，带来类似竹子 (Bamboo) 鸡尾酒的清冽矿物感。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "kahlua",
    "slug": "kahlua",
    "name": "甘露咖啡力娇酒",
    "nameEn": "Kahlúa Coffee Liqueur",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 20,
    "origin": "墨西哥",
    "flavorDescription": "以100%阿拉比卡咖啡豆与墨西哥甘蔗朗姆酒调配，散发深邃浓郁的浓缩咖啡、焦糖、香草与黑巧克力甜香。",
    "commonUsage": [
      "浓缩咖啡马天尼 (Espresso Martini)",
      "黑色俄罗斯 (Black Russian)",
      "白色俄罗斯 (White Russian)",
      "B-52轰炸机"
    ],
    "buyingGuide": "甘露 (Kahlúa) 为全球标准；追求更高咖啡纯度可选手冲咖啡利口酒 Mr Black。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Kahlua-Medium.png",
    "colorBadge": "border-yellow-900/40 text-amber-700",
    "substitutes": [
      {
        "targetIngredientId": "espresso",
        "substituteName": "意式浓缩咖啡 + 单糖浆",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "使用 25ml 新鲜意式浓缩 + 10ml 单糖浆，咖啡油脂与香气比利口酒更纯粹鲜活！",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "baileys",
        "substituteName": "百利甜奶油利口酒 (Baileys)",
        "tier": "emergency",
        "ratioMultiplier": 1,
        "flavorImpactNote": "带有浓郁爱尔兰奶油奶香，质感更稠厚丝滑。",
        "difficultyRating": 2
      }
    ]
  },
  {
    "id": "baileys",
    "slug": "baileys",
    "name": "百利甜爱尔兰奶油利口酒",
    "nameEn": "Baileys Irish Cream",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 17,
    "origin": "爱尔兰",
    "flavorDescription": "将爱尔兰新鲜优质生奶油与双重蒸馏爱尔兰威士忌完美乳化融合，口感丝滑如天鹅绒，带有浓郁的太妃糖、可可与奶油香气。",
    "commonUsage": [
      "B-52轰炸机",
      "泥石流 (Mudslide)",
      "爱尔兰咖啡 (配制版)",
      "加冰纯饮"
    ],
    "buyingGuide": "百利甜 (Baileys Original) 为标准之选。",
    "storageMethod": "置于阴凉避光处，开封后最好冷藏并于6个月内饮用完毕。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Baileys%20irish%20cream-Medium.png",
    "colorBadge": "border-amber-200/40 text-amber-200"
  },
  {
    "id": "chartreuse-green",
    "slug": "chartreuse-green",
    "name": "修道院绿查特酒",
    "nameEn": "Chartreuse Green",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 55,
    "origin": "法国阿尔卑斯山修道院",
    "flavorDescription": "由卡尔特会修士根据1605年古老秘方，采用130种天然高山植物浸泡蒸馏而成，天然纯粹的草本翡翠绿，口感极其宏大、复杂、辛烈且草本芬芳回味不绝。",
    "commonUsage": [
      "最后之语 (The Last Word)",
      "查特托尼 (Chartreuse Tonic)",
      "纯饮冷冻杯"
    ],
    "buyingGuide": "鸡尾酒界无可替代的“绿色灵药”，由于全球限产较为珍贵。",
    "storageMethod": "常温避光，具备极佳的陈年潜力。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Green%20Chartreuse-Medium.png",
    "colorBadge": "border-emerald-500/40 text-emerald-400",
    "substitutes": [
      {
        "targetIngredientId": "chartreuse-yellow",
        "substituteName": "修道院黄查特酒 (Yellow Chartreuse)",
        "tier": "perfect",
        "ratioMultiplier": 1,
        "flavorImpactNote": "黄查特酒草本香气柔和带蜂蜜甜感，酒精度略低 (40% vs 55%)。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "benedictine",
        "substituteName": "法国廊酒 (Bénédictine)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "廊酒同为修道院草本蜜酒，香料感丰富但甜度更高。",
        "difficultyRating": 2
      }
    ]
  },
  {
    "id": "maraschino",
    "slug": "maraschino",
    "name": "马拉斯奇诺黑樱桃利口酒",
    "nameEn": "Luxardo Maraschino Liqueur",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 32,
    "origin": "意大利",
    "flavorDescription": "采用整颗酸黑樱桃（连同果核果叶）经过芬芳蒸馏与梣木桶陈酿制成，带有深沉的樱桃核苦杏仁香、白花与干果香，绝非人工香精甜味。",
    "commonUsage": [
      "飞行 (Aviation)",
      "最后之语 (The Last Word)",
      "海明威代基里 (Hemingway Daiquiri)",
      "马丁内斯 (Martinez)"
    ],
    "buyingGuide": "认准意大利乐沙度 (Luxardo) 稻草编织瓶身。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Maraschino%20liqueur-Medium.png",
    "colorBadge": "border-red-400/40 text-red-300",
    "substitutes": [
      {
        "targetIngredientId": "creme-de-mure",
        "substituteName": "黑莓利口酒 (Crème de Mûre)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "黑莓果香浓郁，酸甜平衡出色。",
        "difficultyRating": 2
      }
    ]
  },
  {
    "id": "blue-curacao",
    "slug": "blue-curacao",
    "name": "蓝柑桂酒",
    "nameEn": "Blue Curaçao",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 21,
    "origin": "荷属库拉索岛",
    "flavorDescription": "采用库拉索拉哈哈苦橙皮浸泡蒸馏，加入食品级亮蓝色素，带有轻柔甜美的柑橘与橙花芬芳，是热带海洋视觉系鸡尾酒的核心调色盘。",
    "commonUsage": [
      "蓝色玛格丽特 (Blue Margarita)",
      "蓝色夏威夷 (Blue Hawaii)",
      "深水炸弹",
      "环游世界"
    ],
    "buyingGuide": "波士 (Bols)、迪卡可 (DeKuyper)、玛丽宝 (Marie Brizard)。",
    "storageMethod": "常温密封保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Blue%20Curacao-Medium.png",
    "colorBadge": "border-blue-500/40 text-blue-400"
  },
  {
    "id": "amaretto",
    "slug": "amaretto",
    "name": "意大利杏仁利口酒",
    "nameEn": "Disaronno Amaretto",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 28,
    "origin": "意大利索隆诺",
    "flavorDescription": "以杏仁核与苦杏仁精华配合香草等植物萃取，散发令人沉醉的杏仁膏、马卡龙、烤坚果与浓郁香草甜香。",
    "commonUsage": [
      "杏仁酸 (Amaretto Sour)",
      "教父 (Godfather)",
      "教母 (Godmother)"
    ],
    "buyingGuide": "帝萨诺 (Disaronno Originale) 方形瓶身为行业标杆。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Amaretto-Medium.png",
    "colorBadge": "border-amber-500/40 text-amber-400",
    "substitutes": [
      {
        "targetIngredientId": "orgeat-syrup",
        "substituteName": "欧洽塔杏仁糖浆 (Orgeat)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "杏仁糖浆具备相同杏仁香气，需补加少许白兰地/伏特加提供酒精度。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "st-germain",
    "slug": "st-germain",
    "name": "圣日耳曼接骨木花利口酒",
    "nameEn": "St-Germain Elderflower Liqueur",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 20,
    "origin": "法国",
    "flavorDescription": "由春季人工采摘的野生欧洲接骨木鲜花精酿而成，被称为调酒师的“调味番茄酱”，充满荔枝、白桃、葡萄柚与白花的优雅仙气。",
    "commonUsage": [
      "雨果 (Hugo Spritz)",
      "接骨木金汤力",
      "法兰西微醺特调"
    ],
    "buyingGuide": "圣日耳曼 (St-Germain) 经典复古八角玻璃瓶。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Elderflower%20cordial-Medium.png",
    "colorBadge": "border-yellow-300/40 text-yellow-200"
  },
  {
    "id": "absinthe",
    "slug": "absinthe",
    "name": "苦艾酒 / 绿仙子",
    "nameEn": "Absinthe (The Green Fairy)",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 68,
    "origin": "瑞士 / 法国",
    "flavorDescription": "以高纯度中性酒浸泡苦艾草、绿茴香与茴香蒸馏而成，遇冷水会产生云雾状乳化反应（Louche），带有极度霸道的八角大茴香与草药气息。",
    "commonUsage": [
      "萨泽拉克 (Sazerac 润杯)",
      "尸体复活者2号 (Corpse Reviver #2)",
      "午后之死 (Death in the Afternoon)"
    ],
    "buyingGuide": "佩诺苦艾 (Pernod Absinthe)、绿仙子 (La Fée)。",
    "storageMethod": "极高度烈酒，常温密封，严禁靠近火源。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Absinthe-Medium.png",
    "colorBadge": "border-emerald-600/40 text-emerald-500"
  },
  {
    "id": "aperol",
    "slug": "aperol",
    "name": "阿佩罗橙味开胃酒",
    "nameEn": "Aperol",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 11,
    "origin": "意大利帕多瓦",
    "flavorDescription": "相比金巴利更轻盈明亮，苦味极为温和，充满明艳的甜橙、大黄、龙胆草与草本清甜，是意式阳光下午茶的核心灵魂。",
    "commonUsage": [
      "阿佩罗橙光 (Aperol Spritz)",
      "裸麦与阿佩罗",
      "现代清爽特调"
    ],
    "buyingGuide": "阿佩罗 (Aperol) 标志性亮橙色。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Aperol-Medium.png",
    "colorBadge": "border-orange-400/40 text-orange-300"
  },
  {
    "id": "coconut-rum",
    "slug": "coconut-rum",
    "name": "椰子朗姆酒 / 椰子利口酒",
    "nameEn": "Coconut Rum / Coconut Liqueur (Malibu)",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 21,
    "origin": "巴巴多斯 / 加勒比",
    "flavorDescription": "天然加勒比白朗姆酒与纯正椰子提取物的甜美交融，散发温暖甜润的热带烤椰香、蔗糖甘甜与轻盈果香。",
    "commonUsage": [
      "我们将获胜 (Venceremos)",
      "马利宝菠萝 (Malibu Pineapple)",
      "热带椰香莫吉托",
      "椰林飘香 (Piña Colada 衍生版)"
    ],
    "buyingGuide": "推荐 Malibu (马利宝) 椰子朗姆利口酒，或 Kōloa Kauaʻi Coconut Rum、Bacardi Coconut。",
    "storageMethod": "常温避光保存即可。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Malibu%20Rum-Medium.png",
    "colorBadge": "border-amber-200/40 text-amber-200"
  },
  {
    "id": "simple-syrup",
    "slug": "simple-syrup",
    "name": "单糖浆 (1:1 / 2:1)",
    "nameEn": "Simple Syrup / Rich Syrup",
    "category": "syrup",
    "categoryZh": "糖浆与甜味剂",
    "abv": 0,
    "origin": "自制 / 全球通用",
    "flavorDescription": "白砂糖与纯净水按 1:1（标准单糖浆）或 2:1（浓糖浆）低温溶解制成，提供干净纯粹的甜度，绝不掩盖基酒本身的原生风味。",
    "commonUsage": [
      "金菲士 (Gin Fizz)",
      "莫吉托 (Mojito)",
      "代基里 (Daiquiri)",
      "三叶草俱乐部 (Clover Club)"
    ],
    "buyingGuide": "完全可在家自制（等比例开水搅拌融化即可放凉使用）；市售可选莫林 (Monin 纯蔗糖浆)。",
    "storageMethod": "装入清洁玻璃瓶冷藏，1:1糖浆可保存1个月，2:1高浓度糖浆可冷藏保存3-6个月。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Sugar%20syrup-Medium.png",
    "colorBadge": "border-zinc-400/40 text-zinc-300",
    "substitutes": [
      {
        "targetIngredientId": "agave-nectar",
        "substituteName": "龙舌兰蜜 (Agave Nectar)",
        "tier": "perfect",
        "ratioMultiplier": 0.8,
        "flavorImpactNote": "龙舌兰蜜甜度为白糖的1.3倍，自带清淡焦糖与植物清香，用量建议减少20%。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "honey-syrup",
        "substituteName": "蜂蜜糖浆 (Honey Syrup)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 0.9,
        "flavorImpactNote": "蜂蜜香气浓郁温暖，极大增强酒体厚度与温润感。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "orgeat-syrup",
        "substituteName": "欧洽塔杏仁糖浆 (Orgeat)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "赋予坚果杏仁与橙花香气，适合 Tiki 与酸酒流派。",
        "difficultyRating": 2
      }
    ]
  },
  {
    "id": "grenadine",
    "slug": "grenadine",
    "name": "红石榴糖浆",
    "nameEn": "Grenadine Syrup",
    "category": "syrup",
    "categoryZh": "糖浆与甜味剂",
    "abv": 0,
    "origin": "法国 / 中东",
    "flavorDescription": "采用纯石榴汁与蔗糖熬制，深红宝石色泽，酸甜可口，带有浓郁的石榴果香与微微的单宁涩感，常用于分层打造日落渐变色。",
    "commonUsage": [
      "龙舌兰日出 (Tequila Sunrise)",
      "三叶草俱乐部 (Clover Club)",
      "秀兰·邓波儿 (Shirley Temple)",
      "红粉佳人 (Pink Lady)"
    ],
    "buyingGuide": "尽量选用含真石榴汁的精品糖浆（如 Monin、Liber & Co.），避免使用纯人工香精色素廉价品。",
    "storageMethod": "开封后冷藏保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Grenadine-Medium.png",
    "colorBadge": "border-rose-600/40 text-rose-500"
  },
  {
    "id": "honey-syrup",
    "slug": "honey-syrup",
    "name": "蜂蜜糖浆 (3:1 / 2:1)",
    "nameEn": "Honey Syrup",
    "category": "syrup",
    "categoryZh": "糖浆与甜味剂",
    "abv": 0,
    "origin": "自制",
    "flavorDescription": "天然百花蜜与温水以 3:1 或 2:1 比例稀释制成，解决了纯蜂蜜遇冷冰块立即凝固的问题，保留了饱满浓郁的花香与温润胶质感。",
    "commonUsage": [
      "蜜蜂之膝 (Bee's Knees)",
      "盘尼西林 (Penicillin)",
      "金丝雀特调"
    ],
    "buyingGuide": "使用优质百花蜜或洋槐蜜自制最佳。",
    "storageMethod": "装瓶冷藏可保存2-4周。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Honey-Medium.png",
    "colorBadge": "border-amber-400/40 text-amber-300"
  },
  {
    "id": "orgeat-syrup",
    "slug": "orgeat-syrup",
    "name": "欧洽塔杏仁糖浆",
    "nameEn": "Orgeat Almond Syrup",
    "category": "syrup",
    "categoryZh": "糖浆与甜味剂",
    "abv": 0,
    "origin": "法国 / 加勒比",
    "flavorDescription": "以研磨杏仁乳、蔗糖、微量橙花水或玫瑰水乳化精制而成，呈乳白色浑浊液体，带有细腻坚果奶香与迷人花香，是 Tiki 热带鸡尾酒的绝对灵魂。",
    "commonUsage": [
      "迈泰 (Mai Tai)",
      "日本鸡尾酒 (Japanese Cocktail)",
      "雾之切割机 (Fog Cutter)"
    ],
    "buyingGuide": "首选 Giffard、Monin Orgeat 或手工调酒品牌 Small Hand Foods。",
    "storageMethod": "开封后必须冷藏，使用前摇匀。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Orgeat%20syrup-Medium.png",
    "colorBadge": "border-yellow-200/40 text-yellow-100"
  },
  {
    "id": "ginger-syrup",
    "slug": "ginger-syrup",
    "name": "辛辣姜汁糖浆",
    "nameEn": "Ginger Syrup",
    "category": "syrup",
    "categoryZh": "糖浆与甜味剂",
    "abv": 0,
    "origin": "自制 / 现代精调",
    "flavorDescription": "新鲜小黄姜榨汁与纯蔗糖低温熬制，入口具有热烈的辛辣刺激感与温热的姜香回甘。",
    "commonUsage": [
      "盘尼西林 (Penicillin)",
      "莫斯科骡子 (自制强化版)",
      "生姜暖饮"
    ],
    "buyingGuide": "现榨生姜汁与白糖 1:1 调配最能保持鲜明辛香。",
    "storageMethod": "密封冷藏保存2周。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Ginger-Medium.png",
    "colorBadge": "border-yellow-500/40 text-yellow-400"
  },
  {
    "id": "agave-nectar",
    "slug": "agave-nectar",
    "name": "龙舌兰蜜",
    "nameEn": "Agave Nectar / Syrup",
    "category": "syrup",
    "categoryZh": "糖浆与甜味剂",
    "abv": 0,
    "origin": "墨西哥",
    "flavorDescription": "从龙舌兰植物中提取的天然果糖糖浆，甜度柔和、升糖指数低，带有微弱的焦糖与植物甘甜，与龙舌兰酒天生绝配。",
    "commonUsage": [
      "汤米的玛格丽特 (Tommy's Margarita)",
      "帕洛玛 (Paloma)"
    ],
    "buyingGuide": "选择纯有机浅色龙舌兰蜜 (Light Agave Nectar)。",
    "storageMethod": "常温密封保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Agave%20syrup-Medium.png",
    "colorBadge": "border-amber-300/40 text-amber-200"
  },
  {
    "id": "fresh-lime-juice",
    "slug": "fresh-lime-juice",
    "name": "新鲜青柠汁",
    "nameEn": "Fresh Lime Juice",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "鲜果现榨",
    "flavorDescription": "调酒界使用率第一的酸味灵魂！酸度尖锐明快，富含清爽的柠檬酸与青柠果皮精油香，能瞬间激活酒液风味。",
    "commonUsage": [
      "莫吉托 (Mojito)",
      "玛格丽特 (Margarita)",
      "代基里 (Daiquiri)",
      "莫斯科骡子 (Moscow Mule)",
      "金雷特 (Gimlet)"
    ],
    "buyingGuide": "强烈建议购买新鲜无籽青柠现榨使用，现榨后静置2-4小时风味达到巅峰（柔和酸度与香气平衡），绝不推荐市售防腐瓶装浓缩汁！",
    "storageMethod": "榨汁后冷藏，建议在12-24小时内用完以保持新鲜度。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Lime%20juice-Medium.png",
    "colorBadge": "border-lime-400/40 text-lime-300",
    "substitutes": [
      {
        "targetIngredientId": "fresh-lemon-juice",
        "substituteName": "新鲜黄柠檬汁 (Fresh Lemon Juice)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "酸感明亮清脆，但缺少青柠精油的微苦清冽，可多擦一点青柠皮油补偿。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "grapefruit-juice",
        "substituteName": "新鲜西柚汁 (Grapefruit Juice)",
        "tier": "emergency",
        "ratioMultiplier": 1.3,
        "flavorImpactNote": "酸度偏柔和带微苦，需适当放大用量以达到同等酸平衡。",
        "difficultyRating": 2
      }
    ]
  },
  {
    "id": "fresh-lemon-juice",
    "slug": "fresh-lemon-juice",
    "name": "新鲜黄柠檬汁",
    "nameEn": "Fresh Lemon Juice",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "鲜果现榨",
    "flavorDescription": "酸度相比青柠更为柔和多汁，带有经典的明亮阳光果香，与威士忌、金酒、干邑等深厚基酒结合极为和谐。",
    "commonUsage": [
      "威士忌酸 (Whiskey Sour)",
      "边车 (Sidecar)",
      "最后之语 (The Last Word)",
      "汤姆柯林斯 (Tom Collins)",
      "法国75 (French 75)"
    ],
    "buyingGuide": "选用新鲜尤力克 (Eureka) 或新奇士黄柠檬。",
    "storageMethod": "现榨冷藏，当日使用完毕。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Lemon%20juice-Medium.png",
    "colorBadge": "border-yellow-400/40 text-yellow-300",
    "substitutes": [
      {
        "targetIngredientId": "fresh-lime-juice",
        "substituteName": "新鲜青柠汁 (Fresh Lime Juice)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 0.9,
        "flavorImpactNote": "青柠酸度更尖锐、香气更收敛，用量可略微减少 10-15%。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "grapefruit-juice",
        "substituteName": "新鲜西柚汁 (Grapefruit Juice)",
        "tier": "emergency",
        "ratioMultiplier": 1.3,
        "flavorImpactNote": "酸感更温和，果香更馥郁。",
        "difficultyRating": 2
      }
    ]
  },
  {
    "id": "cranberry-juice",
    "slug": "cranberry-juice",
    "name": "蔓越莓汁",
    "nameEn": "Cranberry Juice",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "北美",
    "flavorDescription": "深红艳丽的果汁，具有清脆酸涩与微甜的风味，赋予鸡尾酒诱人的粉红色泽与生动果酸。",
    "commonUsage": [
      "大都会 (Cosmopolitan)",
      "海风 (Sea Breeze)",
      "海滩性爱 (Sex on the Beach)"
    ],
    "buyingGuide": "推荐选用 Ocean Spray 优鲜沛蔓越莓果汁饮料。",
    "storageMethod": "开封后冷藏，并在10天内饮用完。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Cranberry%20juice-Medium.png",
    "colorBadge": "border-rose-500/40 text-rose-400"
  },
  {
    "id": "grapefruit-juice",
    "slug": "grapefruit-juice",
    "name": "新鲜西柚汁 / 红西柚汁",
    "nameEn": "Fresh Grapefruit Juice (Ruby Red / Pink)",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "鲜果现榨",
    "flavorDescription": "兼具酸、甘甜与天然柚皮轻微苦涩的层次感，极为解腻，赋予酒体粉红透亮的微醺视觉。",
    "commonUsage": [
      "帕洛玛 (Paloma)",
      "海明威代基里 (Hemingway Daiquiri)",
      "灰狗 (Greyhound)",
      "海风 (Sea Breeze)"
    ],
    "buyingGuide": "红心葡萄柚现榨效果最佳。",
    "storageMethod": "鲜榨后冷藏，24小时内使用。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Grapefruit%20juice-Medium.png",
    "colorBadge": "border-pink-500/40 text-pink-400"
  },
  {
    "id": "pineapple-juice",
    "slug": "pineapple-juice",
    "name": "菠萝汁 / 凤梨汁",
    "nameEn": "Pineapple Juice",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "热带",
    "flavorDescription": "浓郁甘甜的热带果香，富含天然果胶与菠萝蛋白酶，在雪克壶剧烈摇荡后能产生极其丰厚持久的奶白色泡沫层。",
    "commonUsage": [
      "椰林飘香 (Piña Colada)",
      "新加坡司令 (Singapore Sling)",
      "丛林鸟 (Jungle Bird)"
    ],
    "buyingGuide": "都乐 (Dole) 100%纯菠萝汁或新鲜菠萝现榨过滤。",
    "storageMethod": "开封后冷藏保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Pineapple%20juice-Medium.png",
    "colorBadge": "border-yellow-400/40 text-yellow-300"
  },
  {
    "id": "angostura-bitters",
    "slug": "angostura-bitters",
    "name": "安哥斯图拉芳香苦精",
    "nameEn": "Angostura Aromatic Bitters",
    "category": "bitters",
    "categoryZh": "苦精与香料",
    "abv": 44.7,
    "origin": "特立尼达和多巴哥",
    "flavorDescription": "鸡尾酒界的盐与胡椒！由龙胆草根与数十种珍稀热带香料萃取，带有标志性超大白纸标签，仅需几滴即可将松散的风味骨架牢牢锁紧。",
    "commonUsage": [
      "古典鸡尾酒 (Old Fashioned)",
      "曼哈顿 (Manhattan)",
      "皮斯可酸 (Pisco Sour)",
      "粉红金酒"
    ],
    "buyingGuide": "调酒台绝对不可或缺的基石，一瓶可使用数百杯。",
    "storageMethod": "高度酒精浸提，常温长久保存永不变质。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Angostura%20Bitters-Medium.png",
    "colorBadge": "border-amber-600/40 text-amber-500",
    "substitutes": [
      {
        "targetIngredientId": "peychauds-bitters",
        "substituteName": "佩绍苦精 (Peychaud's Bitters)",
        "tier": "emergency",
        "ratioMultiplier": 1,
        "flavorImpactNote": "由肉桂丁香草本转为八角茴香与红浆果香，颜色更艳红。",
        "difficultyRating": 2
      },
      {
        "targetIngredientId": "orange-bitters",
        "substituteName": "橙味苦精 (Orange Bitters)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "转为清新橙皮精油风味，口感更加明快透亮。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "orange-bitters",
    "slug": "orange-bitters",
    "name": "橙味苦精",
    "nameEn": "Orange Bitters",
    "category": "bitters",
    "categoryZh": "苦精与香料",
    "abv": 28,
    "origin": "特立尼达 / 英国 / 美国",
    "flavorDescription": "采用精选甜橙苦橙皮、豆蔻、葛缕子与胡荽籽萃取，带有扑鼻而来的鲜明橙皮精油清香与优雅苦味。",
    "commonUsage": [
      "干马天尼 (Dry Martini 经典老式配方)",
      "曼哈顿 (Manhattan)",
      "竹子 (Bamboo)"
    ],
    "buyingGuide": "推荐 Angostura Orange、Regans' Orange Bitters No. 6、Fee Brothers。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Orange%20bitters-Medium.png",
    "colorBadge": "border-orange-500/40 text-orange-400"
  },
  {
    "id": "peychauds-bitters",
    "slug": "peychauds-bitters",
    "name": "贝乔苦精 / 佩绍苦精",
    "nameEn": "Peychaud's Bitters",
    "category": "bitters",
    "categoryZh": "苦精与香料",
    "abv": 35,
    "origin": "美国新奥尔良",
    "flavorDescription": "鲜艳的粉红色泽，带有八角茴香、肉豆蔻、樱桃与薄荷的轻快甜美草药香气，苦味相比安哥斯图拉更加柔和活泼。",
    "commonUsage": [
      "萨泽拉克 (Sazerac 必备)",
      "老佛爷 (Vieux Carré)"
    ],
    "buyingGuide": "认准新奥尔良原产 Peychaud's。",
    "storageMethod": "常温保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Peychaud%20bitters-Medium.png",
    "colorBadge": "border-rose-400/40 text-rose-300"
  },
  {
    "id": "tonic-water",
    "slug": "tonic-water",
    "name": "汤力水 / 奎宁汽水",
    "nameEn": "Tonic Water (Indian Tonic)",
    "category": "mixer",
    "categoryZh": "汽水与辅料",
    "abv": 0,
    "origin": "英国 / 国际",
    "flavorDescription": "含有天然植物奎宁提取物的加糖碳酸水，气泡强劲，具有标志性的清苦甘冽风味与荧光蓝反光特性。",
    "commonUsage": [
      "金汤力 (Gin & Tonic)",
      "浓缩咖啡汤力 (Espresso Tonic)",
      "无酒精特调"
    ],
    "buyingGuide": "强烈推荐高品质精酿汤力水（如 Fever-Tree 怡泉树、Thomas Henry、Fentimans）；日常可选屈臣氏 (Watsons) 罐装。",
    "storageMethod": "常温存放，制作前务必彻底冷藏至 2-4°C 保证气泡持久。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Tonic%20water-Medium.png",
    "colorBadge": "border-cyan-400/40 text-cyan-300",
    "substitutes": [
      {
        "targetIngredientId": "club-soda",
        "substituteName": "苏打水 / 强气泡水 (Club Soda)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "苏打水无奎宁苦味，建议擦拭葡萄柚皮或滴入 2 滴柑橘苦精。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "club-soda",
    "slug": "club-soda",
    "name": "苏打水 / 强气泡水",
    "nameEn": "Club Soda / Sparkling Water",
    "category": "mixer",
    "categoryZh": "汽水与辅料",
    "abv": 0,
    "origin": "全球通用",
    "flavorDescription": "添加了微量碳酸氢钠或矿物质的纯净碳酸水，无糖无热量，提供极其清爽的沙口感，能稀释酒精度而不改变原始风味。",
    "commonUsage": [
      "高球 (Whiskey Highball)",
      "莫吉托 (Mojito)",
      "金菲士 (Gin Fizz)",
      "汤姆柯林斯 (Tom Collins)"
    ],
    "buyingGuide": "选用强气泡型苏打水（如象牌 Chang、圣培露 San Pellegrino、怡泉屈臣氏）。",
    "storageMethod": "使用前冷藏冰镇。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Club%20soda-Medium.png",
    "colorBadge": "border-blue-300/40 text-blue-200"
  },
  {
    "id": "ginger-beer",
    "slug": "ginger-beer",
    "name": "姜汁啤酒 (非酒精发酵姜啤)",
    "nameEn": "Ginger Beer",
    "category": "mixer",
    "categoryZh": "汽水与辅料",
    "abv": 0,
    "origin": "英国 / 牙买加",
    "flavorDescription": "由天然发酵生姜、蔗糖与酵母酿造的强碳酸饮料（通常不含酒精），姜味极其辛烈浓郁，远比普通姜汁汽水 (Ginger Ale) 更富冲击力。",
    "commonUsage": [
      "莫斯科骡子 (Moscow Mule)",
      "月黑风高 (Dark 'n Stormy)",
      "伦敦骡子"
    ],
    "buyingGuide": "首选 Fever-Tree 姜啤酒、Bundaberg 宾得宝姜汁啤酒或 Old Jamaica。",
    "storageMethod": "冷藏保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Ginger%20beer-Medium.png",
    "colorBadge": "border-yellow-600/40 text-yellow-500",
    "substitutes": [
      {
        "targetIngredientId": "ginger-ale",
        "substituteName": "姜汁汽水 (Ginger Ale)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "姜汁汽水辛辣感偏弱，可拍碎一片新鲜生姜投入以增强生姜辣度。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "egg-white",
    "slug": "egg-white",
    "name": "新鲜蛋清 / 蛋白乳化液",
    "nameEn": "Fresh Egg White / Aquafaba",
    "category": "other",
    "categoryZh": "乳化与辅料",
    "abv": 0,
    "origin": "新鲜鸡蛋 / 鹰嘴豆水",
    "flavorDescription": "无明显杂味，经过干摇（Dry Shake，不加冰先摇荡）能将蛋白质分子彻底展开，为酸味鸡尾酒赋予如云朵般绵密、天鹅绒般丝滑的丰厚泡沫层。",
    "commonUsage": [
      "威士忌酸 (Whiskey Sour)",
      "皮斯可酸 (Pisco Sour)",
      "三叶草俱乐部 (Clover Club)",
      "金菲士 (Ramos Gin Fizz)"
    ],
    "buyingGuide": "务必选用可生食无菌鸡蛋（如朝一、黄天鹅）；素食主义者可用鹰嘴豆水 (Aquafaba) 完美替代。",
    "storageMethod": "鸡蛋冷藏保存，现磕现用。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Egg%20white-Medium.png",
    "colorBadge": "border-zinc-300/40 text-zinc-200"
  },
  {
    "id": "fresh-mint",
    "slug": "fresh-mint",
    "name": "新鲜薄荷叶",
    "nameEn": "Fresh Mint Leaves",
    "category": "garnish",
    "categoryZh": "装饰与香草",
    "abv": 0,
    "origin": "新鲜香草",
    "flavorDescription": "提供扑鼻而来的清凉薄荷脑香气，轻拍后能瞬间释放植物精油，是夏日清爽系鸡尾酒的点睛之笔。",
    "commonUsage": [
      "莫吉托 (Mojito)",
      "薄荷朱利普 (Mint Julep)",
      "迈泰 (Mai Tai)"
    ],
    "buyingGuide": "选用叶片饱满厚实的留兰香薄荷 (Spearmint) 或绿薄荷。",
    "storageMethod": "根部泡水如鲜花般冷藏，或用微湿厨房纸包裹冷藏，可保鲜数天。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Mint-Medium.png",
    "colorBadge": "border-emerald-400/40 text-emerald-300"
  },
  {
    "id": "maraschino-cherry",
    "slug": "maraschino-cherry",
    "name": "黑樱桃 / 马拉斯奇诺鸡尾酒樱桃",
    "nameEn": "Luxardo Gourmet Maraschino Cherries",
    "category": "garnish",
    "categoryZh": "装饰与香草",
    "abv": 0,
    "origin": "意大利",
    "flavorDescription": "采用整颗意大利酸黑樱桃在纯浓缩樱桃糖浆中浸润数月，深黑紫红，口感紧实脆弹，带有高贵深沉的果木甜香，绝非廉价明亮荧光红罐头樱桃。",
    "commonUsage": [
      "曼哈顿 (Manhattan)",
      "古典鸡尾酒 (Old Fashioned)",
      "飞行 (Aviation)",
      "新加坡司令"
    ],
    "buyingGuide": "首选意大利乐沙度 (Luxardo) 顶级黑樱桃。",
    "storageMethod": "开封后常温或冷藏阴凉保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Maraschino%20cherry-Medium.png",
    "colorBadge": "border-red-600/40 text-red-500"
  },
  {
    "id": "fresh-orange-juice",
    "slug": "fresh-orange-juice",
    "name": "新鲜甜橙汁",
    "nameEn": "Fresh Orange Juice",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "鲜果现榨",
    "flavorDescription": "阳光饱满的天然甜橙果香，酸甜平衡多汁，富含维生素C，是早午餐鸡尾酒、热带高球与分层日落调酒的核心载体。",
    "commonUsage": [
      "龙舌兰日出 (Tequila Sunrise)",
      "螺丝起子 (Screwdriver)",
      "含羞草 (Mimosa)",
      "海滩性爱 (Sex on the Beach)"
    ],
    "buyingGuide": "强烈推荐鲜橙现榨过滤果肉使用；市售选用无添加冷藏100%纯橙汁。",
    "storageMethod": "鲜榨后冷藏，建议当日使用完。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Orange%20juice-Medium.png",
    "colorBadge": "border-orange-400/40 text-orange-300"
  },
  {
    "id": "tomato-juice",
    "slug": "tomato-juice",
    "name": "纯番茄汁 / 复合番茄汁",
    "nameEn": "Pure Tomato Juice / Clamato",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "鲜榨 / 纯番茄汁",
    "flavorDescription": "浓稠丰润的天然成熟番茄浆，富含天然谷氨酸鲜味（Umami）与温和酸度，是咸鲜咸辣解酒系鸡尾酒的绝对核心。",
    "commonUsage": [
      "血腥玛丽 (Bloody Mary)",
      "红眼 (Red Eye)",
      "圣血腥玛丽 (Virgin Mary)"
    ],
    "buyingGuide": "选用原味无加糖纯番茄汁（如地扪 Del Monte、Kagome 可果美）。",
    "storageMethod": "开封后冷藏，并在 5-7 天内用完。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Tomato%20juice-Medium.png",
    "colorBadge": "border-red-600/40 text-red-500"
  },
  {
    "id": "coca-cola",
    "slug": "coca-cola",
    "name": "可口可乐 / 经典可乐",
    "nameEn": "Coca-Cola / Classic Cola",
    "category": "mixer",
    "categoryZh": "汽水与辅料",
    "abv": 0,
    "origin": "美国 / 全球通用",
    "flavorDescription": "含有焦糖、香草、肉桂与柑橘精油香气的经典深色碳酸饮料，气泡强劲，能极好地柔化烈酒的酒精刺激感并赋予焦糖甜香。",
    "commonUsage": [
      "自由古巴 (Cuba Libre)",
      "长岛冰茶 (Long Island Iced Tea)",
      "威士忌可乐 (Whiskey Coke)"
    ],
    "buyingGuide": "选用经典原味罐装或玻璃瓶装可口可乐，制作前务必冷藏冰镇。",
    "storageMethod": "常温保存，开罐后尽快饮用。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Coca-Cola-Medium.png",
    "colorBadge": "border-red-700/40 text-red-600"
  },
  {
    "id": "ginger-ale",
    "slug": "ginger-ale",
    "name": "姜汁汽水",
    "nameEn": "Ginger Ale",
    "category": "mixer",
    "categoryZh": "汽水与辅料",
    "abv": 0,
    "origin": "加拿大 / 爱尔兰",
    "flavorDescription": "相比发酵姜啤更为清淡甜润的金色碳酸汽水，生姜辛辣度温和细腻，带有轻快的柠檬与生姜果香。",
    "commonUsage": [
      "秀兰·邓波儿 (Shirley Temple)",
      "马颈 (Horse's Neck)",
      "金鹿 (Gin Buck)",
      "莫斯科骡子 (温和版)"
    ],
    "buyingGuide": "怡泉 (Schweppes Dry Ginger Ale)、加拿大干姜汁 (Canada Dry)。",
    "storageMethod": "冷藏后使用最佳。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Ginger%20ale-Medium.png",
    "colorBadge": "border-amber-400/40 text-amber-300"
  },
  {
    "id": "passion-fruit-juice",
    "slug": "passion-fruit-juice",
    "name": "百香果汁 / 百香果泥",
    "nameEn": "Passion Fruit Juice / Puree",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "热带",
    "flavorDescription": "极富穿透力的高酸度热带芳香，香气馥郁高扬，能瞬间为酒液注入狂野的异域海岛风情。",
    "commonUsage": [
      "色情马天尼 (Pornstar Martini)",
      "飓风 (Hurricane)",
      "百香果莫吉托"
    ],
    "buyingGuide": "选用新鲜百香果取肉或选用法国宝茸 (Boiron) 冷冻百香果纯果泥。",
    "storageMethod": "果泥冷冻保存，解冻后冷藏并在3天内用完。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Passion%20fruit%20juice-Medium.png",
    "colorBadge": "border-yellow-500/40 text-yellow-400"
  },
  {
    "id": "green-olives",
    "slug": "green-olives",
    "name": "鸡尾酒绿橄榄",
    "nameEn": "Cocktail Green Olives (Castelvetrano / Spanish)",
    "category": "garnish",
    "categoryZh": "装饰与香草",
    "abv": 0,
    "origin": "地中海 / 意大利",
    "flavorDescription": "盐水腌制的无核绿橄榄，微咸油润，带来地中海阳光下的咸香单宁风味，与干马天尼的清冽形成味觉互补。",
    "commonUsage": [
      "干马天尼 (Dry Martini)",
      "脏马天尼 (Dirty Martini)"
    ],
    "buyingGuide": "选用卡斯特韦特拉诺 (Castelvetrano) 鲜甜多汁绿橄榄或填装红椒的西班牙橄榄。",
    "storageMethod": "浸泡在原汁盐水中冷藏。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Olive-Medium.png",
    "colorBadge": "border-lime-600/40 text-lime-500"
  },
  {
    "id": "mezcal",
    "slug": "mezcal",
    "name": "梅斯卡尔酒 / 烟熏龙舌兰",
    "nameEn": "Mezcal (Espadín / Artisanal)",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 45,
    "origin": "墨西哥瓦哈卡州",
    "flavorDescription": "以土坑木炭烘烤闷蒸龙舌兰球茎（Piña）后野生发酵蒸馏，带有极其浓烈而迷人的炭火烟熏、泥土、烤龙舌兰草本与矿石咸鲜风味。",
    "commonUsage": [
      "赤裸与著名 (Naked and Famous)",
      "瓦哈卡老式 (Oaxaca Old Fashioned)",
      "梅斯卡尔尼格罗尼 (Mezcal Negroni)",
      "烟熏玛格丽特"
    ],
    "buyingGuide": "认准 100% Maguey/Agave 工艺手工梅斯卡尔。入门推荐 Del Maguey Vida、Montelobos Espadín、Illegal Mezcal。",
    "storageMethod": "常温避光密封直立保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Mezcal-Medium.png",
    "colorBadge": "border-emerald-600/40 text-emerald-400",
    "substitutes": [
      {
        "targetIngredientId": "tequila",
        "substituteName": "龙舌兰酒 (Tequila Blanco / Reposado)",
        "tier": "perfect",
        "ratioMultiplier": 1,
        "flavorImpactNote": "缺少烟熏泥煤感，可加入一滴泥煤威士忌 (Islay Scotch) 完美模拟烟熏层次。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "cachaca",
    "slug": "cachaca",
    "name": "卡夏莎 / 巴西甘蔗兰姆酒",
    "nameEn": "Cachaça",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 40,
    "origin": "巴西",
    "flavorDescription": "巴西国酒，直接采用新鲜压榨的新鲜甘蔗汁发酵蒸馏而成，具有极其生动鲜明的青草、青苹果、新鲜甘蔗与热带植物鲜甜。",
    "commonUsage": [
      "卡匹林哈 (Caipirinha)",
      "公鸡尾巴 (Rabo de Galo)",
      "巴西果香潘趣"
    ],
    "buyingGuide": "调酒选用经典未陈酿银色卡夏莎（如 Leblon、Cachaça 51、Ypióca）；纯饮可选巴西本土原生木桶陈酿版。",
    "storageMethod": "常温避光保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Cachaca-Medium.png",
    "colorBadge": "border-lime-500/40 text-lime-400"
  },
  {
    "id": "pisco",
    "slug": "pisco",
    "name": "皮斯科白兰地",
    "nameEn": "Pisco (Quebranta / Italia / Acholado)",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 40,
    "origin": "秘鲁 / 智利",
    "flavorDescription": "以纯葡萄汁发酵且单次壶式蒸馏、不得加水降度或木桶陈酿的纯净无色烈酒，最大化保留了白葡萄、茉莉花香、白桃、柑橘皮与干草的鲜灵芬芳。",
    "commonUsage": [
      "皮斯科酸 (Pisco Sour)",
      "皮斯科潘趣 (Pisco Punch)",
      "奇尔卡诺 (Chilcano)"
    ],
    "buyingGuide": "首选秘鲁法定产区 Quebranta（无芳香型）或 Acholado（调和型），推荐 Barsol Pisco、Caravedo。",
    "storageMethod": "常温避光直立保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Pisco-Medium.png",
    "colorBadge": "border-teal-500/40 text-teal-400"
  },
  {
    "id": "calvados",
    "slug": "calvados",
    "name": "卡尔瓦多斯 / 苹果白兰地",
    "nameEn": "Calvados / Apple Brandy",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 40,
    "origin": "法国诺曼底法定产区",
    "flavorDescription": "精选诺曼底数百种专用苹果与梨压榨发酵为西打酒后蒸馏，在橡木桶中陈酿，呈现成熟烤苹果、肉桂、香草、黄油与烘烤坚果的深邃温暖风味。",
    "commonUsage": [
      "寡妇之吻 (Widow's Kiss)",
      "杰克玫瑰 (Jack Rose)",
      "诺曼底咖啡 (Calvados Coffee)",
      "秋季老式"
    ],
    "buyingGuide": "推荐 AOC Calvados Pays d'Auge 产区，如 Père Magloire VSOP、Christian Drouin Sélection、Boulard。",
    "storageMethod": "常温干燥避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Calvados-Medium.png",
    "colorBadge": "border-amber-500/40 text-amber-400",
    "substitutes": [
      {
        "targetIngredientId": "brandy-cognac",
        "substituteName": "干邑白兰地 (Cognac)",
        "tier": "perfect",
        "ratioMultiplier": 1,
        "flavorImpactNote": "法国干邑白兰地 + 5ml 苹果汁，几乎无缝重构苹果白兰地香气。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "whiskey-irish",
    "slug": "whiskey-irish",
    "name": "爱尔兰威士忌",
    "nameEn": "Irish Whiskey (Triple Distilled)",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 40,
    "origin": "爱尔兰",
    "flavorDescription": "经过三次壶式蒸馏，不经泥煤熏烤，口感格外柔和顺滑、清脆清爽，伴有青苹果、香草、蜂蜜、燕麦饼干与柔和花香。",
    "commonUsage": [
      "爱尔兰咖啡 (Irish Coffee)",
      "蒂珀雷里 (Tipperary)",
      "酸黄瓜回魂 (Pickleback)",
      "爱尔兰霸王 (Irish Maid)"
    ],
    "buyingGuide": "调酒与日常常备：尊美醇 (Jameson)、布什米尔 (Bushmills)、知更鸟 (Redbreast 12年)。",
    "storageMethod": "常温避光直立保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Irish%20whiskey-Medium.png",
    "colorBadge": "border-emerald-500/40 text-emerald-300"
  },
  {
    "id": "whiskey-japanese",
    "slug": "whiskey-japanese",
    "name": "日本威士忌",
    "nameEn": "Japanese Whisky",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 43,
    "origin": "日本",
    "flavorDescription": "借鉴苏格兰传统工艺并在水质、水楢木桶（Mizunara）与调配艺术上达到极致细腻，带有檀香、伽罗熏香、白桃、红苹果与优雅花果香。",
    "commonUsage": [
      "日式高球 (Japanese Highball)",
      "日式水割 (Mizuwari)",
      "水楢老式"
    ],
    "buyingGuide": "调酒推荐三得利角瓶 (Kakubin)、白州 (Hakushu) 或知多 (Chita)；三得利响 (Hibiki)、山崎 (Yamazaki) 适合品鉴。",
    "storageMethod": "常温避光直立保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Whiskey-Medium.png",
    "colorBadge": "border-yellow-600/40 text-yellow-400"
  },
  {
    "id": "rum-overproof",
    "slug": "rum-overproof",
    "name": "超高度深色朗姆酒 (Overproof)",
    "nameEn": "Overproof Dark Rum (69% - 75.5% ABV)",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 69,
    "origin": "牙买加 / 加勒比海",
    "flavorDescription": "酒精浓度极高（通常在57%~75.5%），散发极具穿透力的发酵热带熟果酯香（Hogo）、糖蜜、焦糖、肉豆蔻与浓缩香草风味，少许即可点燃整杯酒的香气。",
    "commonUsage": [
      "僵尸 (Zombie)",
      "迈泰超级版 (Mai Tai Float)",
      "点火特调 (Flaming Tiki)"
    ],
    "buyingGuide": "首选法国干邑名厂调配的 Plantation O.F.T.D. 69% 或 Wray & Nephew 纯白高酯朗姆。",
    "storageMethod": "严格常温避光，远离任何火源及明火。",
    "image": "https://www.thecocktaildb.com/images/ingredients/151%20proof%20rum-Medium.png",
    "colorBadge": "border-red-600/40 text-red-500"
  },
  {
    "id": "rhum-agricole",
    "slug": "rhum-agricole",
    "name": "农业朗姆酒 (法属西印度群岛)",
    "nameEn": "Rhum Agricole Blanc / Vieux",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 50,
    "origin": "马提尼克岛 / 瓜德罗普 (AOC 法定产区)",
    "flavorDescription": "采用新鲜压榨纯甘蔗汁直接蒸馏，与工业糖蜜朗姆截然不同，带有生机勃勃的青竹、新鲜泥土、割草、白胡椒、柑橘与矿物质芳香。",
    "commonUsage": [
      "小潘趣 (Ti' Punch)",
      "法式迈泰 (Mai Tai Agricole)",
      "代基里进阶版"
    ],
    "buyingGuide": "认准马提尼克 AOC 认证，推荐 Clément Blanc 50°、Trois Rivières 或 J.M Blanc。",
    "storageMethod": "常温避光直立。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Rum-Medium.png",
    "colorBadge": "border-lime-600/40 text-lime-400"
  },
  {
    "id": "baijiu",
    "slug": "baijiu",
    "name": "中国白酒 (浓香 / 酱香 / 清香)",
    "nameEn": "Chinese Baijiu (Luzhou / Maotai / Fenjiu flavor)",
    "category": "base-spirit",
    "categoryZh": "基酒",
    "abv": 52,
    "origin": "中国 (四川 / 贵州 / 山西)",
    "flavorDescription": "采用高粱等纯粮固态发酵与泥窖陈酿蒸馏，蕴含极度复杂的菠萝酯香、熟香蕉、陈年糟香、酱香与粮香，余味绵长悠远，是新中式鸡尾酒的灵魂之笔。",
    "commonUsage": [
      "东方竹语 (Bamboo Whisper)",
      "北平之秋 (Peking Autumn)",
      "醉贵妃",
      "白酒酸 (Baijiu Sour)"
    ],
    "buyingGuide": "调酒推荐芳香丰满的浓香型白酒（如泸州老窖特曲、五粮春、开山白酒）或清香爽净的汾酒（青花汾酒/老白汾）。",
    "storageMethod": "常温避光直立密封保存。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Jiugui.jpg/960px-Jiugui.jpg",
    "colorBadge": "border-red-500/40 text-red-400"
  },
  {
    "id": "prosecco-champagne",
    "slug": "prosecco-champagne",
    "name": "干型香槟 / 普罗塞克起泡酒",
    "nameEn": "Brut Champagne / Prosecco DOC",
    "category": "liqueur",
    "categoryZh": "配制酒/加度酒",
    "abv": 12,
    "origin": "法国香槟产区 / 意大利威尼托",
    "flavorDescription": "细腻持久的二氧化碳气泡，伴随清脆绿苹果、白梨、柑橘、烤面包和酵母香气，赋予鸡尾酒无可比拟的明亮酸度与欢快升腾感。",
    "commonUsage": [
      "法国75 (French 75)",
      "阿佩罗斯普利茨 (Aperol Spritz)",
      "贝利尼 (Bellini)",
      "含羞草 (Mimosa)",
      "雨果斯普利茨 (Hugo Spritz)"
    ],
    "buyingGuide": "调配 Spritz 选用意大利 Prosecco Brut/Extra Dry；高端调酒选用法国干型香槟 (Moët & Chandon, Veuve Clicquot) 或西班牙 Cava。",
    "storageMethod": "避光恒温冷藏，开瓶后使用香槟塞并在24小时内用完以保气泡活性。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Champagne-Medium.png",
    "colorBadge": "border-yellow-400/40 text-yellow-300",
    "substitutes": [
      {
        "targetIngredientId": "club-soda",
        "substituteName": "苏打水 / 强气泡水 (Club Soda)",
        "tier": "emergency",
        "ratioMultiplier": 1,
        "flavorImpactNote": "提供纯净气泡感（如制作无酒精 Spritz），需补少许柠檬酸与糖。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "lillet-blanc",
    "slug": "lillet-blanc",
    "name": "丽叶白开胃酒",
    "nameEn": "Lillet Blanc (French Aperitif Wine)",
    "category": "liqueur",
    "categoryZh": "配制酒/加度酒",
    "abv": 17,
    "origin": "法国波尔多",
    "flavorDescription": "以85%波尔多白葡萄酒混合15%柑橘与金鸡纳树皮等草本浸泡利口酒调配，散发着蜜饯甜橙、松香、蜂蜜与薄荷的优雅清新香气，微苦回甘。",
    "commonUsage": [
      "维斯帕马天尼 (Vesper Martini)",
      "除虫剂2号 (Corpse Reviver #2)",
      "20世纪 (20th Century)",
      "白尼格罗尼 (White Negroni)"
    ],
    "buyingGuide": "法国波尔多原产 Lillet Blanc，经典马天尼变体与开胃酒核心原料。",
    "storageMethod": "开瓶后必须冷藏，并在1个月内用完以防氧化变味。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Lillet%20Blanc-Medium.png",
    "colorBadge": "border-yellow-300/40 text-yellow-200"
  },
  {
    "id": "sherry-fino",
    "slug": "sherry-fino",
    "name": "菲诺雪莉酒 / 干型雪莉",
    "nameEn": "Fino Sherry / Manzanilla",
    "category": "liqueur",
    "categoryZh": "配制酒/加度酒",
    "abv": 15,
    "origin": "西班牙赫雷斯法定产区 (Jerez)",
    "flavorDescription": "在酒花（Flor）保护下陈酿的干型加强白葡萄酒，色泽极浅，口感极干爽，带有独特酵母面团、青橄榄、新鲜扁桃仁与大西洋海风咸香。",
    "commonUsage": [
      "竹子 (Bamboo)",
      "阿多尼斯 (Adonis)",
      "低声细语 (Speak Low)",
      "雪莉高球 (Sherry Cobbler)"
    ],
    "buyingGuide": "推荐 Tio Pepe 冈萨雷斯菲诺雪莉酒或 Lustau Puerto Fino。",
    "storageMethod": "开瓶后务必冷藏，建议在1周内饮用以保持最高鲜度。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Sherry-Medium.png",
    "colorBadge": "border-amber-300/40 text-amber-200"
  },
  {
    "id": "port-wine",
    "slug": "port-wine",
    "name": "波特酒 (宝石红 / 茶色)",
    "nameEn": "Port Wine (Ruby / Tawny Port)",
    "category": "liqueur",
    "categoryZh": "配制酒/加度酒",
    "abv": 20,
    "origin": "葡萄牙杜罗河谷",
    "flavorDescription": "在葡萄发酵中途加入白兰地中止发酵的加强红葡萄酒，保留了充沛天然糖分，饱含成熟黑樱桃、黑莓、李子干、葡萄干、焦糖与黑巧克力香气。",
    "commonUsage": [
      "波特翻转 (Porto Flip)",
      "主教潘趣 (Bishop Punch)",
      "暖冬热红酒特调"
    ],
    "buyingGuide": "推荐 Taylor's (泰勒)、Graham's (格拉汉姆) 或 Sandeman 宝石红/茶色波特。",
    "storageMethod": "开瓶后冷藏密封，可在1个月内保持稳定风味。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Port-Medium.png",
    "colorBadge": "border-red-900/40 text-red-400"
  },
  {
    "id": "chartreuse-yellow",
    "slug": "chartreuse-yellow",
    "name": "修道院黄查特酒",
    "nameEn": "Yellow Chartreuse (Chartreuse Jaune)",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 43,
    "origin": "法国阿尔卑斯修道院",
    "flavorDescription": "相比绿查特酒更柔和、更甜美，添加了藏红花精粹赋予金色色泽，充满蜂蜜、百里香、薄荷、八角、藏红花与柑橘花的馥郁香气。",
    "commonUsage": [
      "赤裸与著名 (Naked and Famous)",
      "黄色羽翼 (Yellow Daisy)",
      "寡妇之吻 (Widow's Kiss)"
    ],
    "buyingGuide": "仅由法国卡尔特会修道院修士依神秘配方手工酿造，是全球殿堂级草本利口酒。",
    "storageMethod": "常温避光密封保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Yellow%20Chartreuse-Medium.png",
    "colorBadge": "border-yellow-500/40 text-yellow-400"
  },
  {
    "id": "amaro-nonino",
    "slug": "amaro-nonino",
    "name": "诺尼诺草本苦酒",
    "nameEn": "Amaro Nonino Quintessentia",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 35,
    "origin": "意大利弗留利",
    "flavorDescription": "以格拉帕白兰地（Grappa）为基底，浸泡龙胆草根、大黄、藏红花、苦橙皮并在小橡木桶陈年，口感丝滑平衡，伴有优雅橙香、焦糖与甘草微苦回甘。",
    "commonUsage": [
      "纸飞机 (Paper Plane)",
      "黑色曼哈顿 (Black Manhattan)",
      "餐后纯饮加冰"
    ],
    "buyingGuide": "现代经典鸡尾酒“纸飞机”的唯一指定灵魂基石原料，无可替代。",
    "storageMethod": "常温避光密封。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Amaro_Lucano_Bottle.jpg/960px-Amaro_Lucano_Bottle.jpg",
    "colorBadge": "border-amber-600/40 text-amber-400"
  },
  {
    "id": "fernet-branca",
    "slug": "fernet-branca",
    "name": "费奈·布兰卡草本苦酒",
    "nameEn": "Fernet-Branca",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 39,
    "origin": "意大利米兰",
    "flavorDescription": "全球调酒师的“秘密握手酒”，含有27种来自四大洲的神秘草本（藏红花、没药、甘菊、芦荟等），苦味凌厉霸道，伴随强烈薄荷冰凉感与中药药草芬芳。",
    "commonUsage": [
      "汉基帕基 (Hanky Panky)",
      "多伦多 (Toronto)",
      "阿根廷费奈可乐 (Fernet con Coca)"
    ],
    "buyingGuide": "认准意大利米兰 Fratelli Branca 原厂出品，经典黑绿磨砂瓶。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Fernet-Branca-Medium.png",
    "colorBadge": "border-emerald-800/40 text-emerald-600"
  },
  {
    "id": "suze",
    "slug": "suze",
    "name": "苏兹龙胆草利口酒",
    "nameEn": "Suze Gentian Liqueur",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 15,
    "origin": "法国",
    "flavorDescription": "法国传统开胃苦酒，以野生龙胆草根浸泡萃取，呈亮黄色，带有鲜明的泥土根茎、新鲜甘草、柑橘皮与极其持久纯净的清爽草本苦韵。",
    "commonUsage": [
      "白尼格罗尼 (White Negroni)",
      "苏兹汤力 (Suze Tonic)",
      "黄色自行车"
    ],
    "buyingGuide": "经典法国 Pernod Ricard 旗下 Suze，白尼格罗尼不可或缺的核心。",
    "storageMethod": "常温避光。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Liqueurs_gentiane.jpg/960px-Liqueurs_gentiane.jpg",
    "colorBadge": "border-yellow-400/40 text-yellow-300"
  },
  {
    "id": "cynar",
    "slug": "cynar",
    "name": "朝圣者朝鲜蓟苦酒",
    "nameEn": "Cynar Amaro (Artichoke Liqueur)",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 16.5,
    "origin": "意大利",
    "flavorDescription": "以朝鲜蓟（Artichoke）叶片为主料，混合13种草药与植物提取物制成，深褐色酒液中散发着泥土干草、红茶、黑枣干、甘草与甜美微苦风味。",
    "commonUsage": [
      "朝鲜蓟斯普利茨 (Cynar Spritz)",
      "苦味老式 (Bitter Giuseppe)",
      "黑曼哈顿变体"
    ],
    "buyingGuide": "意大利 Campari 集团旗下经典 Cynar。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Cynar-Medium.png",
    "colorBadge": "border-amber-800/40 text-amber-600"
  },
  {
    "id": "benedictine",
    "slug": "benedictine",
    "name": "法国廊酒 / 修道院草本利口酒",
    "nameEn": "D.O.M. Bénédictine Liqueur",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 40,
    "origin": "法国诺曼底费康",
    "flavorDescription": "由27种精选草本香料（欧当归、牛膝草、杜松子、肉豆蔻、没药、藏红花）经铜壶蒸馏并在橡木桶陈酿，充满温润蜜香、草本与香料深度。",
    "commonUsage": [
      "老广场 (Vieux Carré)",
      "新加坡司令 (Singapore Sling)",
      "B&B (白兰地与廊酒)",
      "寡妇之吻 (Widow's Kiss)"
    ],
    "buyingGuide": "认准瓶身上神圣献词印记“D.O.M.”（Deo Optimo Maximo）。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Benedictine-Medium.png",
    "colorBadge": "border-amber-600/40 text-amber-500"
  },
  {
    "id": "drambuie",
    "slug": "drambuie",
    "name": "杜林标蜂蜜威士忌利口酒",
    "nameEn": "Drambuie (Scotch Whisky Liqueur)",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 40,
    "origin": "苏格兰高地",
    "flavorDescription": "以高年份陈年苏格兰单一麦芽威士忌为基底，调和石楠花蜂蜜、草药与秘制香料，口感浓郁华丽，带有石楠花蜜糖、丁香、肉桂与麦芽温暖醇香。",
    "commonUsage": [
      "生锈钉 (Rusty Nail)",
      "苏格兰咖啡 (Scottish Coffee)",
      "杜林标高球"
    ],
    "buyingGuide": "William Grant & Sons 旗下经典 Drambuie，生锈钉官方指定原料。",
    "storageMethod": "常温保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Drambuie-Medium.png",
    "colorBadge": "border-yellow-600/40 text-yellow-500"
  },
  {
    "id": "grand-marnier",
    "slug": "grand-marnier",
    "name": "柑曼怡干邑甜橙酒",
    "nameEn": "Grand Marnier Cordon Rouge",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 40,
    "origin": "法国",
    "flavorDescription": "以法国干邑白兰地为基酒，与加勒比苦橙精油（Citrus Bigaradia）调配并橡木桶陈酿，口感比普通白柑桂更深厚醇美，兼具白兰地陈年木质调与浓郁蜜渍橙皮香。",
    "commonUsage": [
      "凯迪拉克玛格丽特 (Cadillac Margarita)",
      "B-52 轰炸机",
      "金巴利柑曼怡特调",
      "高端边车 (Grand Sidecar)"
    ],
    "buyingGuide": "认准红色绶带与蜡封印章的 Grand Marnier Cordon Rouge 红带。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Grand%20Marnier-Medium.png",
    "colorBadge": "border-orange-600/40 text-orange-400"
  },
  {
    "id": "creme-de-cacao",
    "slug": "creme-de-cacao",
    "name": "白/棕可可利口酒",
    "nameEn": "Crème de Cacao (White & Dark)",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 25,
    "origin": "法国 / 荷兰",
    "flavorDescription": "选用烘烤可可豆与马达加斯加香草浸泡蒸馏而成，白可可酒体透明无色，棕可可呈深褐色，散发纯正黑巧克力、焦糖与香草的丝滑甜美芳香。",
    "commonUsage": [
      "白兰地亚历山大 (Brandy Alexander)",
      "绿色蚱蜢 (Grasshopper)",
      "20世纪 (20th Century)",
      "二十世纪特调"
    ],
    "buyingGuide": "制作绿色蚱蜢或20世纪需选用透明的白可可 (White/Blanc)；亚历山大可用棕可可 (Dark/Brown)。推荐 Marie Brizard、Bols、Tempus Fugit。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Creme%20de%20Cacao-Medium.png",
    "colorBadge": "border-amber-700/40 text-amber-500"
  },
  {
    "id": "creme-de-menthe",
    "slug": "creme-de-menthe",
    "name": "绿薄荷利口酒 / 白薄荷利口酒",
    "nameEn": "Crème de Menthe (Green / White)",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 24,
    "origin": "法国",
    "flavorDescription": "采用科西嘉薄荷叶蒸馏提纯，入口具有极其强烈的清凉冰爽感，甜度充沛，带有纯净透彻的天然留兰香与胡椒薄荷精油气息。",
    "commonUsage": [
      "绿色蚱蜢 (Grasshopper)",
      "毒刺 (Stinger)",
      "薄荷冰沙特调"
    ],
    "buyingGuide": "推荐法国百年品牌 Giffard Menthe Pastille、Bols Green Menthe 或 Marie Brizard。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Green%20Creme%20de%20Menthe-Medium.png",
    "colorBadge": "border-emerald-400/40 text-emerald-300"
  },
  {
    "id": "creme-de-violette",
    "slug": "creme-de-violette",
    "name": "紫罗兰利口酒",
    "nameEn": "Crème de Violette",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 22,
    "origin": "奥地利 / 法国阿尔卑斯",
    "flavorDescription": "萃取阿尔卑斯野生紫罗兰花朵精粹，具有标志性的梦幻靛紫/天蓝色泽与高雅的花香香水气息，是“飞行”鸡尾酒呈现晨曦天际色彩的灵魂。",
    "commonUsage": [
      "飞行 (Aviation)",
      "蓝色月亮 (Blue Moon)",
      "花神马天尼"
    ],
    "buyingGuide": "首选奥地利 Rothman & Winter Crème de Violette、Giffard 或 The Bitter Truth。",
    "storageMethod": "常温避光保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Creme%20de%20Violette-Medium.png",
    "colorBadge": "border-purple-500/40 text-purple-400"
  },
  {
    "id": "creme-de-mure",
    "slug": "creme-de-mure",
    "name": "黑莓利口酒",
    "nameEn": "Crème de Mûre (Blackberry Liqueur)",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 18,
    "origin": "法国勃艮第",
    "flavorDescription": "采用饱满新鲜野生黑莓浸泡萃取，色泽深红近紫黑，具有浓郁的成熟黑浆果果香、柔和单宁与令人垂涎的莓果酸甜。",
    "commonUsage": [
      "黑莓荆棘 (Bramble)",
      "黑莓皇家基尔 (Kir Imperial)",
      "深红金菲士"
    ],
    "buyingGuide": "首选法国勃艮第产 Giffard Crème de Mûre、Vedrenne 或 Merlet。",
    "storageMethod": "开封后建议冷藏以防果香散逸。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Blackberry%20brandy-Medium.png",
    "colorBadge": "border-purple-800/40 text-purple-600"
  },
  {
    "id": "creme-de-cassis",
    "slug": "creme-de-cassis",
    "name": "黑加仑利口酒 / 黑醋栗酒",
    "nameEn": "Crème de Cassis de Dijon",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 16,
    "origin": "法国勃艮第第戎 (Dijon)",
    "flavorDescription": "第戎法定黑醋栗浸渍，色泽如深邃红宝石，充满深厚的高浓度黑醋栗果酱酸甜、紫罗兰花香与天然果皮微涩感。",
    "commonUsage": [
      "基尔 (Kir)",
      "皇家基尔 (Kir Royale)",
      "恶魔之角 (El Diablo)",
      "巴黎人马天尼"
    ],
    "buyingGuide": "认准 Cassis de Dijon 法定原产地标志，推荐 Lejay Lagoute 或 Gabriel Boudier。",
    "storageMethod": "开封后冷藏保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Creme%20de%20Cassis-Medium.png",
    "colorBadge": "border-rose-900/40 text-rose-500"
  },
  {
    "id": "passoa",
    "slug": "passoa",
    "name": "百香果利口酒",
    "nameEn": "Passoã Passion Fruit Liqueur",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 17,
    "origin": "法国",
    "flavorDescription": "具有高辨识度亮红色泽与浓缩热带百香果汁香气，融合芒果、木瓜与柑橘芬芳，酸甜平衡，果香极具爆破力。",
    "commonUsage": [
      "色情马天尼 / 明星马天尼 (Porn Star Martini)",
      "百香果斯普利茨",
      "热带微风"
    ],
    "buyingGuide": "明星马天尼指定正宗原料法国原装 Passoã。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Passoa-Medium.png",
    "colorBadge": "border-red-500/40 text-red-400"
  },
  {
    "id": "peach-schnapps",
    "slug": "peach-schnapps",
    "name": "蜜桃利口酒 / 桃味甜酒",
    "nameEn": "Peach Schnapps / Crème de Pêche",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 20,
    "origin": "荷兰 / 英国 / 美国",
    "flavorDescription": "散发极富亲和力的多汁水蜜桃香甜气息，晶莹透明，甜美圆润，是夏日果香系鸡尾酒中最具人气的增甜香氛。",
    "commonUsage": [
      "海滩性爱 (Sex on the Beach)",
      "毛茸茸的肚脐 (Fuzzy Navel)",
      "蜜桃冰茶",
      "贝利尼速配版"
    ],
    "buyingGuide": "经典推荐 Archers Peach Schnapps、DeKuyper Peachtree 或 Giffard Crème de Pêche de Vigne。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Peach%20schnapps-Medium.png",
    "colorBadge": "border-pink-400/40 text-pink-300"
  },
  {
    "id": "midori",
    "slug": "midori",
    "name": "蜜多丽蜜瓜甜酒",
    "nameEn": "Midori Melon Liqueur",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 20,
    "origin": "日本 / 法国生产",
    "flavorDescription": "以日本夕张蜜瓜和优质网纹甜瓜为原料调配，呈现令人过目难忘的高饱和荧光翠绿色，散发馥郁蜜瓜糖果甜香与清凉果香。",
    "commonUsage": [
      "蜜多丽酸 (Midori Sour)",
      "日本拖鞋 (Japanese Slipper)",
      "绿眼怪 (Green Monster)"
    ],
    "buyingGuide": "日本三得利旗下原装 Midori，辨识度极高的磨砂浮雕瓶身。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Midori%20melon%20liqueur-Medium.png",
    "colorBadge": "border-lime-400/40 text-lime-300"
  },
  {
    "id": "galliano",
    "slug": "galliano",
    "name": "加利安诺草本香草利口酒",
    "nameEn": "Galliano L'Autentico",
    "category": "liqueur",
    "categoryZh": "利口酒",
    "abv": 42.3,
    "origin": "意大利托斯卡纳",
    "flavorDescription": "装在如罗马高塔般修长的标志性瓶身中，以地中海茴芹、杜松子、麝香草、薰衣草与马达加斯加香草浸泡，兼具草本辛香与香草甘甜。",
    "commonUsage": [
      "哈维撞墙 (Harvey Wallbanger)",
      "金色凯迪拉克 (Golden Cadillac)",
      "金色梦乡 (Golden Dream)"
    ],
    "buyingGuide": "务必认准 Galliano L'Autentico 42.3% 经典原味版。",
    "storageMethod": "常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Galliano-Medium.png",
    "colorBadge": "border-yellow-400/40 text-yellow-300"
  },
  {
    "id": "falernum",
    "slug": "falernum",
    "name": "法勒南风味糖浆/利口酒",
    "nameEn": "Velvet Falernum / Falernum Syrup",
    "category": "liqueur",
    "categoryZh": "利口酒/风味糖浆",
    "abv": 11,
    "origin": "加勒比巴巴多斯",
    "flavorDescription": "Tiki 鸡尾酒传奇秘方！将青柠皮屑、新鲜生姜、丁香、肉豆蔻与杏仁融合在朗姆酒或蔗糖浆中，散发着无与伦比的热带辛香与青柠酸甜。",
    "commonUsage": [
      "僵尸 (Zombie)",
      "玉米与石油 (Corn 'n Oil)",
      "三大洲潘趣",
      "多诺万特调"
    ],
    "buyingGuide": "推荐巴巴多斯原产 John D. Taylor's Velvet Falernum 或 Monin / BG Reynolds 法勒南糖浆。",
    "storageMethod": "常温避光，开封后建议冷藏。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Falernum-Medium.png",
    "colorBadge": "border-amber-400/40 text-amber-300"
  },
  {
    "id": "heavy-cream",
    "slug": "heavy-cream",
    "name": "新鲜淡奶油 / 浓奶油",
    "nameEn": "Heavy Cream / Whipping Cream (35% Fat)",
    "category": "other",
    "categoryZh": "乳制品与质感剂",
    "abv": 0,
    "origin": "法国 / 新西兰",
    "flavorDescription": "纯正动物性高脂稀奶油，赋予鸡尾酒丝绸般的绵密天鹅绒触感与温润奶香，能完美包裹可可与烈酒的锋芒。",
    "commonUsage": [
      "白兰地亚历山大 (Brandy Alexander)",
      "拉莫斯金菲士 (Ramos Gin Fizz)",
      "绿色蚱蜢 (Grasshopper)",
      "白俄罗斯 (White Russian)",
      "爱尔兰咖啡顶层奶盖"
    ],
    "buyingGuide": "选用乳脂含量 35% 以上的动物性淡奶油（如安佳 Anchor、铁塔 Elle & Vire、总统 President）。",
    "storageMethod": "4°C 冷藏，严禁冷冻，开封后3天内用完。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Heavy%20cream-Medium.png",
    "colorBadge": "border-stone-300/40 text-stone-200"
  },
  {
    "id": "coconut-cream",
    "slug": "coconut-cream",
    "name": "椰浆 / 椰子奶油",
    "nameEn": "Cream of Coconut (Coco López / Real)",
    "category": "other",
    "categoryZh": "辅料与质感剂",
    "abv": 0,
    "origin": "波多黎各 / 东南亚",
    "flavorDescription": "加糖浓缩椰肉奶油，质地浓稠厚重如炼乳，带有浓郁馥郁的烘烤椰子甜香与油脂滑顺感，是 Tiki 热带鸡尾酒的灵魂之源。",
    "commonUsage": [
      "椰林飘香 (Piña Colada)",
      "止痛药 (Painkiller)",
      "热带椰香莫吉托"
    ],
    "buyingGuide": "认准调酒专用的 Cream of Coconut（推荐 Coco López 或 Reàl Coconut Cream），切勿误买无糖淡椰浆 (Coconut Milk)。",
    "storageMethod": "常温避光保存，开罐后冷藏并在1周内用完。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Coconut%20cream-Medium.png",
    "colorBadge": "border-neutral-300/40 text-neutral-200",
    "substitutes": [
      {
        "targetIngredientId": "heavy-cream",
        "substituteName": "新鲜淡奶油 (Heavy Cream)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "淡奶油 + 5ml 椰子糖浆/椰子利口酒，口感同样稠滑奶香。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "espresso",
    "slug": "espresso",
    "name": "意式浓缩咖啡 / 冷萃浓缩液",
    "nameEn": "Fresh Espresso / Cold Brew Concentrate",
    "category": "mixer",
    "categoryZh": "咖啡与汽水辅料",
    "abv": 0,
    "origin": "意大利 / 全球通用",
    "flavorDescription": "高压萃取的极浓咖啡液，表面覆盖金黄色咖啡油脂沫（Crema），兼具烘焙焦香、黑巧克力苦甜与细腻果酸，摇荡后能产生细腻持久的奶泡层。",
    "commonUsage": [
      "浓缩咖啡马天尼 (Espresso Martini)",
      "爱尔兰咖啡 (Irish Coffee)",
      "咖啡汤力 (Coffee Tonic)"
    ],
    "buyingGuide": "首选意式咖啡机现萃的双份意式浓缩 (Double Espresso)；亦可用高浓度冷萃浓缩液代替。",
    "storageMethod": "现萃现用，稍冷却后加入摇酒壶以防迅速融化冰块。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Espresso-Medium.png",
    "colorBadge": "border-stone-700/40 text-stone-400"
  },
  {
    "id": "fresh-basil",
    "slug": "fresh-basil",
    "name": "新鲜甜罗勒叶",
    "nameEn": "Fresh Sweet Basil Leaves",
    "category": "garnish",
    "categoryZh": "装饰与香草",
    "abv": 0,
    "origin": "地中海 / 亚洲",
    "flavorDescription": "散发着胡椒、丁香、茴香与清凉青草香气的鲜嫩绿叶，经杵臼轻压可释放出令人震撼的鲜绿叶绿素与草本清香。",
    "commonUsage": [
      "金酒罗勒粉碎 (Gin Basil Smash)",
      "罗勒金汤力",
      "草本莫吉托"
    ],
    "buyingGuide": "选用叶片饱满翠绿、无黑斑的甜罗勒（Sweet Basil）。",
    "storageMethod": "茎部插入水中常温保存，或用微湿厨房纸包裹冷藏。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Basil-Medium.png",
    "colorBadge": "border-emerald-500/40 text-emerald-400"
  },
  {
    "id": "cocktail-onion",
    "slug": "cocktail-onion",
    "name": "珍珠洋葱 / 鸡尾酒小洋葱",
    "nameEn": "Cocktail Silverskin Onion",
    "category": "garnish",
    "categoryZh": "装饰与香草",
    "abv": 0,
    "origin": "欧洲 / 荷兰",
    "flavorDescription": "经过微酸盐水浸渍的去皮银皮小洋葱，爽脆多汁，带有淡淡的甜咸与香醋微酸，是吉普森（Gibson）鸡尾酒唯一的标志性灵魂装饰。",
    "commonUsage": [
      "吉普森 (Gibson)",
      "洋葱干马天尼"
    ],
    "buyingGuide": "选用进口罐装鸡尾酒珍珠洋葱 (Cocktail Silverskin Onions)。",
    "storageMethod": "浸泡在原汤盐水中冷藏。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Cocktail%20onion-Medium.png",
    "colorBadge": "border-zinc-400/40 text-zinc-300"
  },
  {
    "id": "orange-flower-water",
    "slug": "orange-flower-water",
    "name": "天然橙花水",
    "nameEn": "Orange Flower Water (Eau de Fleur d'Oranger)",
    "category": "other",
    "categoryZh": "芳香精萃与调味液",
    "abv": 0,
    "origin": "法国格拉斯 / 黎巴嫩",
    "flavorDescription": "由苦橙花瓣蒸馏提取的天然植物花露，极富穿透力的高雅白花香氛，仅需2-3滴即可为整杯酒带来如梦似幻的春日柑橘花林香气。",
    "commonUsage": [
      "拉莫斯金菲士 (Ramos Gin Fizz)",
      "新奥尔良菲士",
      "花香金汤力"
    ],
    "buyingGuide": "首选法国 Cortas 或 A. Monteux 纯天然蒸馏橙花水。",
    "storageMethod": "常温避光密封。",
    "image": "",
    "colorBadge": "border-orange-300/40 text-orange-200"
  },
  {
    "id": "sprite-lemon-soda",
    "slug": "sprite-lemon-soda",
    "name": "雪碧 / 柠檬青柠汽水 / 七喜",
    "nameEn": "Sprite / 7-Up / Lemon-Lime Soda",
    "category": "mixer",
    "categoryZh": "汽水与辅料",
    "abv": 0,
    "origin": "美国 / 全球通用",
    "flavorDescription": "充满活力的高碳酸清澈汽水，兼具清亮黄柠檬酸爽与青柠精油清香，甜酸平衡，气泡持久，是家庭与酒吧调制果味 Highball、长岛冰茶变体及夏日低度酒的万能伴侣。",
    "commonUsage": [
      "蓝色泄湖 (Blue Lagoon)",
      "夏日红酒汽水 (Tinto de Verano)",
      "带电长岛冰茶 (Electric Iced Tea)",
      "蜜多丽雪碧 (Midori Sprite)",
      "金雪碧 (Gin & Sprite)"
    ],
    "buyingGuide": "选用冰镇经典原味雪碧（罐装或玻璃瓶装最佳），亦可选用七喜（7-Up）或怡泉柠檬味苏打水。",
    "storageMethod": "常温避光保存，使用前必须充分冷藏冰镇以保气泡充足。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Sprite-Medium.png",
    "colorBadge": "border-emerald-400/40 text-emerald-300",
    "substitutes": [
      {
        "targetIngredientId": "club-soda",
        "substituteName": "苏打水 + 鲜柠檬汁 + 糖浆",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "苏打水无糖无味，可额外加入 10ml 鲜柠檬汁 + 10ml 单糖浆。",
        "difficultyRating": 1
      },
      {
        "targetIngredientId": "ginger-ale",
        "substituteName": "姜汁汽水 (Ginger Ale)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "姜汁汽水带来微微生姜辛香，甜度与气泡感相似。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "apple-juice",
    "slug": "apple-juice",
    "name": "纯苹果汁 / 苹果西打",
    "nameEn": "100% Pure Apple Juice / Fresh Apple Cider",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "欧洲 / 中国 / 全球通用",
    "flavorDescription": "压榨苹果纯果汁，兼具清脆果酸与天然果糖甜香，冷饮清甜解腻，与波本威士忌、白兰地、朗姆酒的焦糖橡木桶香气有着天然绝配的共鸣。",
    "commonUsage": [
      "经典苹果马天尼 (Appletini)",
      "威士忌苹果高球 (Whiskey Apple)",
      "苹果西打骡子 (Apple Cider Mule)",
      "秋季苹果杰克 (Autumn Apple Jack)"
    ],
    "buyingGuide": "调酒首选 100% NFC 非浓缩还原纯苹果汁（如树顶 Tree Top、大湖），制作秋季热特调可选用未过滤混浊苹果西打汁 (Apple Cider)。",
    "storageMethod": "开封后必须 4°C 冷藏，并在 3-5 天内饮用完毕。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Apple%20juice-Medium.png",
    "colorBadge": "border-amber-400/40 text-amber-300",
    "substitutes": [
      {
        "targetIngredientId": "grape-juice-white",
        "substituteName": "白葡萄汁 (White Grape Juice)",
        "tier": "flavor-tweak",
        "ratioMultiplier": 1,
        "flavorImpactNote": "白葡萄汁花果香明亮，酸甜比与苹果汁相当。",
        "difficultyRating": 1
      }
    ]
  },
  {
    "id": "grape-juice-white",
    "slug": "grape-juice-white",
    "name": "白葡萄汁 / 白提子汁",
    "nameEn": "100% Pure White Grape Juice",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "地中海 / 欧洲 / 美国",
    "flavorDescription": "金黄澄澈的白葡萄压榨汁，散发优雅的麝香葡萄花香、白桃与青苹果香气，酸度柔和清脆，能为金酒、伏特加及白桑格利亚带来高贵清新的花果底色。",
    "commonUsage": [
      "地中海白桑格利亚 (White Sangria)",
      "金酒白葡萄晨光 (Gin White Grape Spritzer)",
      "白葡萄莫吉托",
      "无酒精香槟特调"
    ],
    "buyingGuide": "选用 100% 纯白葡萄原汁（如 Welch's 纯白葡萄汁），避免选用含香精防腐剂勾兑果汁饮料。",
    "storageMethod": "常温避光，开封后冷藏。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Grape%20juice-Medium.png",
    "colorBadge": "border-lime-400/40 text-lime-300"
  },
  {
    "id": "grape-juice-red",
    "slug": "grape-juice-red",
    "name": "红葡萄汁 / 康科德紫葡萄汁",
    "nameEn": "100% Red / Concord Grape Juice",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "美国东北部 / 欧洲",
    "flavorDescription": "选用深紫色康科德葡萄压榨，色泽深邃如红宝石，饱含浓郁的深色浆果香、天然多酚单宁感与平衡酸甜，是调配输血高球（Transfusion）及经典桑格利亚的灵魂。",
    "commonUsage": [
      "输血高球 (The Transfusion)",
      "西班牙经典桑格利亚 (Red Sangria)",
      "紫提莫吉托",
      "红葡萄金汤力"
    ],
    "buyingGuide": "推荐美国原产 Welch's 100% Concord Grape Juice 纯紫葡萄汁。",
    "storageMethod": "开瓶后冷藏密封保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Grape%20juice-Medium.png",
    "colorBadge": "border-purple-800/40 text-purple-400"
  },
  {
    "id": "peach-juice",
    "slug": "peach-juice",
    "name": "水蜜桃纯果汁 / 桃肉浓浆",
    "nameEn": "100% White & Yellow Peach Juice / Puree",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "中国 / 意大利 / 日本",
    "flavorDescription": "以成熟多汁的水蜜桃果肉打浆制成，散发极富亲和力的高雅蜜桃甜香与微酸，口感稠滑温润，能与起泡酒、红茶、波本威士忌及伏特加完美交织出春夏季节感。",
    "commonUsage": [
      "贝利尼 (Bellini)",
      "波本蜜桃冰茶 (Bourbon Peach Tea)",
      "模糊的肚脐 (Fuzzy Navel)",
      "水蜜桃伏特加酸 (Peach Sour)"
    ],
    "buyingGuide": "调酒推荐法国宝茸 (Boiron) 冷冻白桃果泥，日常可用 100% 水蜜桃 NFC 原果汁或日本三得利桃汁。",
    "storageMethod": "果泥冷冻，解冻后 4°C 冷藏并在 3 天内用完。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Peach%20nectar-Medium.png",
    "colorBadge": "border-pink-400/40 text-pink-300"
  },
  {
    "id": "mango-juice",
    "slug": "mango-juice",
    "name": "芒果汁 / 芒果纯果泥",
    "nameEn": "Mango Juice / Mango Puree",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "印度 / 东南亚 / 墨西哥",
    "flavorDescription": "浓稠金黄的热带芒果泥，带有无可比拟的热烈阳光气息与浓郁熟果香甜，是热带 Tiki 鸡尾酒与冰沙特调的无敌基底。",
    "commonUsage": [
      "芒果朗姆潘趣 (Mango Rum Punch)",
      "冰冻芒果玛格丽特 (Frozen Mango Margarita)",
      "热带芒果代基里"
    ],
    "buyingGuide": "首选印度阿方索芒果泥 (Alphonso Mango Puree) 或法国 Boiron 纯芒果果泥。",
    "storageMethod": "冷藏冷冻保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Mango-Medium.png",
    "colorBadge": "border-amber-500/40 text-amber-400"
  },
  {
    "id": "guava-juice",
    "slug": "guava-juice",
    "name": "芭乐汁 / 红心番石榴汁",
    "nameEn": "Pink Guava Juice / Nectar",
    "category": "juice",
    "categoryZh": "果汁与酸味剂",
    "abv": 0,
    "origin": "台湾 / 东南亚 / 墨西哥",
    "flavorDescription": "粉红色的热带奇迹！散发着野性而优雅的麝香、草莓、百香果与青草复合芬芳，微涩回甘，赋予酒体梦幻的珊瑚粉色与夏日海风气息。",
    "commonUsage": [
      "芭乐金酒冷饮 (Guava Gin Cooler)",
      "粉红番石榴莫吉托",
      "夏威夷芭乐玛格丽特"
    ],
    "buyingGuide": "选用红心芭乐（Pink Guava）NFC 纯果汁或冷冻果泥。",
    "storageMethod": "冷藏保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Guava%20juice-Medium.png",
    "colorBadge": "border-rose-400/40 text-rose-300"
  },
  {
    "id": "fresh-grapes",
    "slug": "fresh-grapes",
    "name": "新鲜无籽青提 / 红提",
    "nameEn": "Fresh Seedless Green & Red Grapes",
    "category": "garnish",
    "categoryZh": "装饰与香草",
    "abv": 0,
    "origin": "全球通用",
    "flavorDescription": "爽脆爆汁的新鲜无籽葡萄，经捣棒轻轻压榨可释放纯净单宁果酸与鲜活果汁，在杯中既作为风味来源也是绝佳的高雅装饰。",
    "commonUsage": [
      "恩佐尼 (Enzoni)",
      "青提金汤力",
      "水果桑格利亚"
    ],
    "buyingGuide": "选用颗粒饱满硬挺的晴王无籽青提或阳光玫瑰青提。",
    "storageMethod": "保鲜袋冷藏。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Grapes-Medium.png",
    "colorBadge": "border-lime-500/40 text-lime-400"
  },
  {
    "id": "coconut-water",
    "slug": "coconut-water",
    "name": "天然椰子水",
    "nameEn": "100% Pure Natural Coconut Water",
    "category": "mixer",
    "categoryZh": "汽水与辅料",
    "abv": 0,
    "origin": "泰国 / 海南 / 东南亚",
    "flavorDescription": "新鲜青椰抽取的天然清澈电解质椰水，带有淡淡的清甜与海风矿物质微咸，轻盈无负担，能完美提升朗姆酒与龙舌兰的清爽感。",
    "commonUsage": [
      "椰水朗姆高球 (Coconut Rum Highball)",
      "热带椰水金雷特",
      "运动后电解质特调"
    ],
    "buyingGuide": "选用 100% 纯椰子水（如 Vita Coco、IF 椰子水、佳果源）。",
    "storageMethod": "常温避光，开封后冷藏并在24小时内饮用。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Green_coconut_fruit.jpg/960px-Green_coconut_fruit.jpg",
    "colorBadge": "border-teal-400/40 text-teal-300"
  },
  {
    "id": "iced-black-tea",
    "slug": "iced-black-tea",
    "name": "冷萃红茶 / 经典红茶液",
    "nameEn": "Fresh Brewed Iced Black Tea",
    "category": "mixer",
    "categoryZh": "咖啡与汽水辅料",
    "abv": 0,
    "origin": "斯里兰卡 / 中国 / 英国",
    "flavorDescription": "优质大吉岭或锡兰红茶冷萃而成，汤色红艳明亮，具有优雅的麦芽香、佛手柑果香与轻柔茶单宁，是调和威士忌、桃汁与柠檬的绝妙桥梁。",
    "commonUsage": [
      "波本蜜桃冰茶 (Bourbon Peach Tea)",
      "红茶金汤力",
      "无酒精蜜桃冰茶"
    ],
    "buyingGuide": "使用优质锡兰红茶或伯爵红茶原叶自制冷萃（常温水浸泡冷藏8小时过滤）。",
    "storageMethod": "密封冷藏，建议在 2 天内用完以保持茶香清澈。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Tea-Medium.png",
    "colorBadge": "border-amber-800/40 text-amber-500"
  },
  {
    "id": "orange-peel",
    "slug": "orange-peel",
    "name": "新鲜橙皮 / 喷香橙皮油",
    "nameEn": "Fresh Orange Peel / Zest Twist",
    "category": "garnish",
    "categoryZh": "装饰与香草",
    "abv": 0,
    "origin": "全球通用",
    "flavorDescription": "富含天然柑橘烯精油（Limonene），对折挤压时在酒液表面喷洒出一层细密透亮的油雾，瞬间激发深邃芳香，并为杯沿注入迷人的柑橘前调与微苦收尾。",
    "commonUsage": [
      "古典鸡尾酒 (Old Fashioned)",
      "尼格罗尼 (Negroni)",
      "花花公子 (Boulevardier)",
      "塞泽拉克 (Sazerac)"
    ],
    "buyingGuide": "选用表皮未打蜡、皮厚多汁的新鲜脐橙或血橙，用削皮刀轻柔削取，尽量去除白色苦髓（Pith）。",
    "storageMethod": "橙子常温或冷藏，现削现用以保证精油活性。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Orange%20peel-Medium.png",
    "colorBadge": "border-orange-500/40 text-orange-400"
  },
  {
    "id": "lemon-peel",
    "slug": "lemon-peel",
    "name": "新鲜柠檬皮 / 柠檬 Twist",
    "nameEn": "Fresh Lemon Peel / Twist",
    "category": "garnish",
    "categoryZh": "装饰与香草",
    "abv": 0,
    "origin": "地中海 / 全球通用",
    "flavorDescription": "高挥发性的柠檬精油芳香分子，带来凛冽干爽、提神醒脑的柑橘青香，能迅速点亮金酒、伏特加与干苦艾酒的高雅质感。",
    "commonUsage": [
      "干马天尼 (Dry Martini)",
      "维斯帕马天尼 (Vesper)",
      "法式75 (French 75)",
      "赛德卡 (Sidecar)"
    ],
    "buyingGuide": "选用尤力克（Eureka）黄柠檬，削皮后修剪为整齐的马甲带状，向杯中轻捏挤喷油雾。",
    "storageMethod": "冷藏保存。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Lemon%20peel-Medium.png",
    "colorBadge": "border-yellow-400/40 text-yellow-300"
  },
  {
    "id": "fresh-cucumber",
    "slug": "fresh-cucumber",
    "name": "新鲜黄瓜条 / 瓜片",
    "nameEn": "Fresh Cucumber Slices & Ribbons",
    "category": "garnish",
    "categoryZh": "装饰与香草",
    "abv": 0,
    "origin": "全球通用",
    "flavorDescription": "清甜多汁的新鲜青瓜，带有极为清爽的水润植物青香，能打破烈酒的灼热感，是亨利爵士金酒（Hendrick's）与夏日特调的黄金伴侣。",
    "commonUsage": [
      "戈登之杯 (Gordon's Cup)",
      "黄瓜金汤力 (Cucumber Gin & Tonic)",
      "爱尔兰霸王 (Irish Maid)"
    ],
    "buyingGuide": "选用紧实硬挺的荷兰小黄瓜或华北黄瓜，用削皮刀拉出极薄的绿色长条卷贴杯壁。",
    "storageMethod": "保鲜袋冷藏。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Cucumber-Medium.png",
    "colorBadge": "border-emerald-400/40 text-emerald-300"
  },
  {
    "id": "rosemary-sprig",
    "slug": "rosemary-sprig",
    "name": "新鲜迷迭香枝",
    "nameEn": "Fresh Rosemary Sprig",
    "category": "garnish",
    "categoryZh": "装饰与香草",
    "abv": 0,
    "origin": "地中海 / 全球通用",
    "flavorDescription": "木质针叶香草，蕴含浓烈的松木、樟脑与树脂复合香气；在喷枪轻微熏烤后释放温暖焦香，极具戏剧张力与森林意境。",
    "commonUsage": [
      "烟熏迷迭香老式",
      "植物学家金汤力",
      "冬日热带特调"
    ],
    "buyingGuide": "选用枝条粗壮、叶片深绿的新鲜迷迭香，调酒前可轻炙叶尖以激发香气。",
    "storageMethod": "湿纸巾包裹冷藏。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Rosemary-Medium.png",
    "colorBadge": "border-teal-600/40 text-teal-400"
  },
  {
    "id": "cinnamon-stick",
    "slug": "cinnamon-stick",
    "name": "熏香肉桂棒 / 肉桂皮",
    "nameEn": "Whole Cinnamon Stick",
    "category": "garnish",
    "categoryZh": "装饰与香草",
    "abv": 0,
    "origin": "斯里兰卡 / 中国 / 东南亚",
    "flavorDescription": "烘烤干燥的肉桂树皮卷，散发温暖辛甜的木质香气与肉桂醛暖感，在秋季温饮与深色朗姆酒 Tiki 特调中带来深沉的香料基底。",
    "commonUsage": [
      "热黄油朗姆 (Hot Buttered Rum)",
      "僵尸 (Zombie)",
      "热托蒂 (Hot Toddy)"
    ],
    "buyingGuide": "首选锡兰肉桂棒（质地酥脆层叠）或高质量桂通，可用喷枪微熏后插入杯中作搅拌棒。",
    "storageMethod": "常温干燥避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Cinnamon-Medium.png",
    "colorBadge": "border-amber-800/40 text-amber-600"
  },
  {
    "id": "nutmeg-powder",
    "slug": "nutmeg-powder",
    "name": "现磨肉豆蔻粉",
    "nameEn": "Fresh Grated Nutmeg",
    "category": "garnish",
    "categoryZh": "装饰与香草",
    "abv": 0,
    "origin": "印尼班达群岛 / 全球通用",
    "flavorDescription": "散发坚果暖香与微麻辛香的古老香料，在绵密奶泡或蛋霜顶部现擦少许，能瞬间压制蛋腥味并升华奶油利口酒的丰腴层次。",
    "commonUsage": [
      "白兰地亚历山大 (Brandy Alexander)",
      "蛋酒 (Eggnog)",
      "止痛药 (Painkiller)"
    ],
    "buyingGuide": "必须选用完整肉豆蔻原果（Whole Nutmeg）使用微孔擦丝板现磨，风味百倍胜于预磨香精粉。",
    "storageMethod": "密封常温避光。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Nutmeg-Medium.png",
    "colorBadge": "border-amber-700/40 text-amber-500"
  },
  {
    "id": "sea-salt",
    "slug": "sea-salt",
    "name": "调制海盐 / 盐边 (Salt Rim)",
    "nameEn": "Coarse Sea Salt / Kosher Salt",
    "category": "other",
    "categoryZh": "调理辅料",
    "abv": 0,
    "origin": "全球通用",
    "flavorDescription": "纯净海盐结晶，不仅用于杯沿盐边装饰（Salt Rim），更在调酒中作为风味放大器——微量盐离子能显著压制苦涩感并几何级放大柑橘的鲜甜多汁感。",
    "commonUsage": [
      "玛格丽特 (Margarita)",
      "帕洛玛 (Paloma)",
      "咸狗 (Salty Dog)",
      "咸味焦糖特调"
    ],
    "buyingGuide": "选用粗粒犹太盐（Kosher Salt）或马尔顿海盐片（Maldon），晶体松脆不呛咸，避免选用含碘细精盐。",
    "storageMethod": "密封防潮。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Salt-Medium.png",
    "colorBadge": "border-blue-200/40 text-blue-100"
  },
  {
    "id": "rich-syrup",
    "slug": "rich-syrup",
    "name": "浓缩双倍蔗糖糖浆 (2:1)",
    "nameEn": "Rich Simple Syrup (2:1 Ratio)",
    "category": "syrup",
    "categoryZh": "糖浆与甜味剂",
    "abv": 0,
    "origin": "全球通用",
    "flavorDescription": "白砂糖与水 2:1 的高浓度过饱和糖浆，质地如纯蜂蜜般稠厚温润，在提供同等甜度的同时注入更少的水分，极大提升了古典鸡尾酒的厚重挂杯感。",
    "commonUsage": [
      "老式鸡尾酒 (Old Fashioned)",
      "萨泽拉克 (Sazerac)",
      "盘尼西林 (Penicillin 变体)"
    ],
    "buyingGuide": "自制：1000g 纯蔗糖 + 500g 纯净水微火慢熬至完全澄澈，可加入 5ml 伏特加延长保质期。",
    "storageMethod": "高渗透压环境，冷藏可保存 6 个月以上。",
    "image": "https://www.thecocktaildb.com/images/ingredients/Sugar%20syrup-Medium.png",
    "colorBadge": "border-amber-300/40 text-amber-200"
  }
];
