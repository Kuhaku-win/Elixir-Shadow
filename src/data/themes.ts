export interface ThemeColorPalette {
  primary: string; // 主强调色
  secondary: string; // 次强调色
  canvas: string; // 基础底色
  surface: string; // 表面卡片色
  border: string; // 边框高亮色
  glow: string; // 氛围辉光色
  textPrimary: string; // 主文字色
  textSecondary: string; // 次文字色
  badge: string; // 徽章主色
}

export interface RealCaseReference {
  name: string;
  type: string;
  tagline: string;
  description: string;
  badge: string;
}

export interface VintageTextureItem {
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  historicalNote: string;
}

export interface CocktailTheme {
  id: 'dark-luxury' | 'minimalist-modern' | 'vintage-retro';
  name: string;
  nameEn: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  moodVibes: string[];
  visualFeatures: string[];
  palette: ThemeColorPalette;
  realCases: RealCaseReference[];
  suitableFor: string;
  ambientGlowClass: string;
  vintageTextures?: VintageTextureItem[];
}

export const THEMES_DATABASE: CocktailTheme[] = [
  {
    id: 'dark-luxury',
    name: '暗黑奢华风',
    nameEn: 'Dark Luxury',
    shortDesc: '黑曜石深色背景、黑金光影对比与琥珀暖光，高端地下酒吧的沉浸私密感',
    fullDesc: '高端酒吧和获奖网站最青睐的风格，营造神秘、高级、专注于酒液本身的氛围。以纯黑曜石与深灰为基石，辅以 24K 帝国真金与暖琥珀色点缀，运用极具张力的光影对比与细腻琉璃拟态，打造深邃沉浸的调酒秘境。',
    icon: '🖤',
    moodVibes: ['高端私密', '极致专注', '故事沉浸', '黑金光影'],
    visualFeatures: [
      '纯黑曜石底色 (#040507) 与深邃玄武岩琉璃卡片',
      '24K 帝国真金 (#dfb15b) 与暖琥珀 (#f59e0b) 高光点缀',
      '0.5px 精细金箔边框与微型直角金属包角切片',
      '古典罗马衬线体 (Cinzel) 与金箔渐变填色'
    ],
    palette: {
      primary: '#dfb15b',
      secondary: '#f59e0b',
      canvas: '#040507',
      surface: '#0f1017',
      border: 'rgba(223, 177, 91, 0.3)',
      glow: 'rgba(223, 177, 91, 0.35)',
      textPrimary: '#f8fafc',
      textSecondary: '#cbd5e1',
      badge: 'bg-gold-500/20 text-gold-300 border-gold-500/40'
    },
    realCases: [
      {
        name: 'Bisous',
        type: '高端私密鸡尾酒吧',
        tagline: '“仅限 Walk-in”的大胆深色设计',
        description: '采用极具沉浸感的深色主题，弱化无关干扰，将全部视觉重心聚焦于酒杯中折射的光影与顶级酒液品质，完美塑造了其独一无二的私密品牌形象。',
        badge: '顶级地下吧台'
      },
      {
        name: 'The Dead Rabbit',
        type: '世界最佳酒吧 / 国际大奖得主',
        tagline: '爱尔兰古典优雅与金色流光',
        description: '这家斩获无数世界级殊荣的爱尔兰酒吧，网站采用深邃底色搭配优雅的奶油色与金色饰边，凸显了其对经典工艺与高品质调酒的绝对执着。',
        badge: 'World 50 Best'
      }
    ],
    suitableFor: '经典干马天尼 (Dry Martini)、老式鸡尾酒 (Old Fashioned)、泥煤威士忌特调及高端深夜品饮场景。',
    ambientGlowClass: 'from-amber-500/15 via-gold-500/10 to-transparent'
  },
  {
    id: 'minimalist-modern',
    name: '白兰极简风',
    nameEn: 'Blanc Minimalist',
    shortDesc: '北欧纯净留白、高对比度板岩墨黑与克莱因蓝，让摄影与天然酒液色彩纯粹发声',
    fullDesc: '追求清爽、高级、让内容自己说话的现代体验。布局极度干净，留白充足。配色纯粹克制（冷霜云母白搭配深邃板岩墨黑与国际钴蓝），排版考究，高质量的鸡尾酒实拍摄影与原料细节成为无可争议的绝对视觉焦点。',
    icon: '🤍',
    moodVibes: ['纯净包豪斯', '清晰现代', '高度专业', '值得信赖'],
    visualFeatures: [
      '冷霜云母白底色 (#f8fafc) 与纯白高平整度画廊卡片',
      '国际克莱因钴蓝 (#2563eb) 与板岩墨黑 (#0f172a) 高反差排版',
      '0.5px 超细微极简灰线 (#e2e8f0) 与多层漫射柔和环境阴影',
      '瑞士现代几何无衬线体 (Plus Jakarta Sans) 与呼吸感行距'
    ],
    palette: {
      primary: '#2563eb',
      secondary: '#0284c7',
      canvas: '#f8fafc',
      surface: '#ffffff',
      border: '#e2e8f0',
      glow: 'rgba(37, 99, 235, 0.15)',
      textPrimary: '#0f172a',
      textSecondary: '#334155',
      badge: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    realCases: [
      {
        name: 'Smuggler’s Cove',
        type: '北美最大朗姆酒收藏 Tiki 酒吧',
        tagline: '极简排版烘托海量藏酒',
        description: '拥有数百款朗姆酒收藏的传奇酒吧，其网站反其道而行之采用极简克制的现代布局，让其丰富的烈酒档案和获奖背景成为绝对主角。',
        badge: '北美最大藏酒'
      },
      {
        name: 'Cure',
        type: '詹姆斯·比尔德大奖 (James Beard) 酒吧',
        tagline: '干净英雄区与清晰专业排版',
        description: '曾获餐饮界“奥斯卡”詹姆斯·比尔德大奖的新奥尔良传奇，网站以极度干净利落的版面设计和突出的功能指引为核心，高效、严谨且充满现代美感。',
        badge: 'James Beard Winner'
      }
    ],
    suitableFor: '清爽金汤力、大吉利 (Daiquiri)、鲜榨果汁无酒精特调及白天阳光下的明亮调酒探索。',
    ambientGlowClass: 'from-blue-500/10 via-slate-400/5 to-transparent'
  },
  {
    id: 'vintage-retro',
    name: '复古怀旧风',
    nameEn: 'Vintage Heritage & Speakeasy',
    shortDesc: '1920 禁酒令时期真实报纸、陈年橡木桶、古董火车站牌与黄铜深木历史质感',
    fullDesc: '专为经典鸡尾酒黄金年代（1920-1930s）打造的历史厚重感美学。彻底杜绝任何卡通插画与人工贴图，全量采用真实的历史档案：泛黄的禁酒令报纸头版、手工烤制威士忌橡木陈酿桶、欧洲蒸汽火车站台古董铜铸站牌、以及实木与老皮革打造的地下 Speakeasy 空间。',
    icon: '🪵',
    moodVibes: ['真实历史档案', '禁酒令报纸', '陈年橡木桶', '古董火车站牌', 'Speakeasy 质感'],
    visualFeatures: [
      '真实历史新闻纸微质感 (#140f0a) 与深烤浓缩咖啡木色',
      '手工烤制橡木桶焦糖色 (#b45309) 与抛光古典黄铜 (#d97706)',
      '2700K 暖白炽灯丝辉光与古典铜版雕刻双线边框',
      '古典报刊标准衬线字体 (Noto Serif SC / Playfair) 真实历史排版'
    ],
    palette: {
      primary: '#d97706',
      secondary: '#b45309',
      canvas: '#120e0a',
      surface: '#20160e',
      border: 'rgba(217, 119, 6, 0.4)',
      glow: 'rgba(217, 119, 6, 0.35)',
      textPrimary: '#fef3c7',
      textSecondary: '#e7d8b8',
      badge: 'bg-amber-950/60 text-amber-200 border-amber-600/50'
    },
    realCases: [
      {
        name: 'Kingston Hall & Harry’s Bar',
        type: '历史传奇酒吧与黄金年代酒单',
        tagline: '百年实木与真实历史档案沉淀',
        description: '融合 1920 年代欧洲与美洲黄金调酒期的真实陈列：做旧实木吧台、古董铜质调酒壶、以及装裱在墙面上的真实禁酒令废除号外报纸。',
        badge: '百年历史典范'
      },
      {
        name: 'The Dead Rabbit Taproom & Speakeasy',
        type: '禁酒令时期纽约下城历史复刻',
        tagline: '真实木桶陈酿与泛黄手写酒谱',
        description: '真实展现 19 世纪末至 20 世纪初的曼哈顿酒馆面貌，以原木桶熟成、古典铸铁铭牌与做旧印刷图版讲述每一杯经典酒谱背后的真实历史。',
        badge: '历史复兴大作'
      }
    ],
    suitableFor: '萨泽拉克 (Sazerac)、曼哈顿 (Manhattan)、尼克罗尼 (Negroni)、老式鸡尾酒 (Old Fashioned) 及单一麦芽纯饮。',
    ambientGlowClass: 'from-amber-700/20 via-orange-950/20 to-transparent',
    vintageTextures: [
      {
        title: '1920s 真实禁酒令号外报纸 (Authentic Prohibition Newsprint)',
        subtitle: 'The Daily Archival Press · 历史头版真实文献',
        category: '历史档案',
        image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
        description: '高分辨率扫描的真实 1920 年代禁酒令时期新闻纸张。带有天然岁月纤维、铅字压印痕迹与泛黄的古老油墨香，构筑历史叙事的真实基底。',
        historicalNote: '1920年美国第18宪法修正案生效，催生了繁盛的地下酒吧（Speakeasy）与传世调酒配方。'
      },
      {
        title: '手工重度烘烤橡木陈酿桶 (Charred Oak Whiskey & Bourbon Casks)',
        subtitle: 'Distillery Barrel Cellar · 肯塔基与苏格兰酒窖实景',
        category: '酒窖实拍',
        image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=1200&q=80',
        description: '真实陈年威士忌与干邑的橡木桶酒窖实拍。粗粝的橡木纹理、熏烤碳化层与铁箍铜锈，赋予视觉温暖而厚重的焦糖香草与单宁木质感。',
        historicalNote: '木桶陈酿赋予烈酒 60% 以上的风味来源与深邃的金琥珀色泽。'
      },
      {
        title: '欧洲古董火车站牌与铁道铭牌 (Vintage Railway Station Signs)',
        subtitle: 'Grand Central & Orient Express · 铸铁与黄铜站台铭牌',
        category: '铁道古董',
        image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80',
        description: '19世纪末至20世纪初欧洲与北美火车站台铸铁站牌、古董双面钟与蒸汽机车时刻铭牌。见证了东方快车时代旅行调酒文化的繁荣。',
        historicalNote: '经典鸡尾酒在豪华蒸汽列车酒吧车厢中随着商旅足迹风靡全球。'
      },
      {
        title: '真实 Speakeasy 地下酒吧暗调空间 (Authentic Speakeasy Bar Interior)',
        subtitle: 'Historic Speakeasy & Brass Bar · 真实实木与皮革吧台',
        category: '酒吧实景',
        image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
        description: '真实的暗调 Speakeasy 地下酒吧内景实拍。泛着温润光泽的深色桃花心木吧台、磨损老皮革高脚凳、以及 2700K 暖光钨丝灯泡的迷人反射。',
        historicalNote: '没有花哨的卡通与虚假渲染，唯有历史沉淀的木石与光影。'
      }
    ]
  }
];
