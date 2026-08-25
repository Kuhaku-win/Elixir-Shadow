export interface ToolItem {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  image: string;
  description: string;
  types?: string[];
  keySpecs: string;
  usageTips: string;
}

export interface TechniqueItem {
  id: string;
  name: string;
  nameEn: string;
  duration: string;
  suitableFor: string[];
  description: string;
  steps: string[];
  proTip: string;
  image: string;
}

export interface BartenderSkillTip {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  content: string;
  rules: string[];
}

export const TOOLS_DATA: ToolItem[] = [
  {
    id: 'shaker',
    name: '雪克壶 / 调酒摇壶',
    nameEn: 'Cocktail Shaker',
    category: '核心器具',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
    description: '通过将烈酒、果汁、糖浆与冰块剧烈撞击，在极短时间内（8-12秒）实现急速降温、融水稀释与空气乳化，为鸡尾酒注入丝滑泡沫与轻盈质感。',
    types: [
      'Cobbler 摇壶（三段式）：由壶身、滤冰盖、壶帽三部分构成，日式调酒标准，操作优雅，适合中等容量单杯调制。',
      'Boston 摇壶（波士顿摇壶）：由大不锈钢罐配合小金属罐（或厚玻璃杯）组成，容量大、摇荡空间充裕，欧美专业酒吧标配。',
      'Parisienne 摇壶（法式摇壶）：两段式金属设计，线条极度优美，需搭配 Hawthorne 滤冰器使用。'
    ],
    keySpecs: '常见容量：500ml (日式Cobbler) / 28oz+18oz (波士顿大双罐)',
    usageTips: '摇荡时扣紧盖子，双手发力，感受冰块在壶内做前后两端甚至立体三角轨迹的规整碰撞，切忌侧面乱晃。'
  },
  {
    id: 'jigger',
    name: '量酒器',
    nameEn: 'Jigger (Japanese Style)',
    category: '度量器具',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80',
    description: '调酒师的精密天平。精准的毫升（ml）与盎司（oz）控制是鸡尾酒酸甜平衡与风味骨架稳定的根本基石。',
    types: [
      '日式双头量酒器（Slim Japanese Jigger）：细长沙漏造型，重心稳，内壁带精准刻度线（10/15/20/30/45/60ml），专业首选。',
      '美式宽口量酒器：矮胖造型，倒酒速度极快，适合繁忙夜场。'
    ],
    keySpecs: '最常用规格：30ml / 45ml (1oz / 1.5oz) 与 30ml / 60ml (1oz / 2oz)',
    usageTips: '倒酒时必须倒至“液面微微隆起（Meniscus surface）”状态，才算达到足量刻度。'
  },
  {
    id: 'bar-spoon',
    name: '吧勺',
    nameEn: 'Bar Spoon',
    category: '核心器具',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
    description: '长柄螺旋设计的调酒魔杖。用于搅拌纯饮型鸡尾酒、引流碳酸汽水、分层密度酒液以及叉取水果装饰。',
    types: [
      '水滴尾吧勺 (Tear Drop)：尾部为光滑配重水滴，搅拌手感极佳。',
      '三叉戟吧勺 (Trident Fork)：尾部为微型三叉戟，可直接叉取橄榄或樱桃。',
      '捣棒尾吧勺 (Muddler End)：尾部带扁平圆盘，可用于微压方糖或薄荷。'
    ],
    keySpecs: '标准长度：30cm - 40cm，螺旋杆设计',
    usageTips: '搅拌时，以手指在指缝间轻揉转动螺旋杆，勺背始终贴紧调酒杯内壁平滑滑动，手臂不要大幅度挥动。'
  },
  {
    id: 'strainer',
    name: '滤冰器 / 隔冰匙',
    nameEn: 'Hawthorne & Julep Strainer',
    category: '过滤器具',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
    description: '在将调好的酒液注入酒杯时，阻挡摇壶或搅拌杯中的冰块与果肉，保证成品纯净。',
    types: [
      'Hawthorne 弹簧滤冰器：边缘配有高弹性螺旋弹簧，可自适应贴合各种口径的波士顿罐与雪克壶。',
      'Julep 穿孔滤冰器：无弹簧的贝壳状穿孔金属匙，专用于调酒搅拌杯（Mixing Glass）。',
      'Fine Mesh 双重细滤网：超密不锈钢滤网，过滤掉摇荡产生的碎冰屑与微小果渣。'
    ],
    keySpecs: '304不锈钢/镀铜材质，弹簧间隙精密',
    usageTips: '对于要求如丝般纯净的酒款（如马天尼、大都会），务必使用 Hawthorne + Fine Mesh 进行双重过滤。'
  },
  {
    id: 'mixing-glass',
    name: '调酒搅拌杯',
    nameEn: 'Yarai Mixing Glass',
    category: '调配容器',
    image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&w=600&q=80',
    description: '厚底无铅水晶刻花玻璃杯，具有卓越的保温冷藏性能与宽敞搅拌空间，是干马天尼与曼哈顿等纯烈酒调制的专属圣殿。',
    types: [
      '经典矢来纹 (Yarai Pattern)：日本传统菱形钻石刻花，防滑且光影折射璀璨。',
      '无缝机制调酒杯：耐磕碰，平底加重设计，不易倾覆。'
    ],
    keySpecs: '标准容量：500ml - 700ml，带导流尖嘴 (Spout)',
    usageTips: '使用前装满冰水预冷 2 分钟，倒掉水后再加入材料与硬冰搅拌，能大幅减少多余融水。'
  },
  {
    id: 'muddler',
    name: '捣棒 / 压汁棒',
    nameEn: 'Cocktail Muddler',
    category: '处理器具',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
    description: '用于在杯底按压新鲜薄荷、青柠块、水果切片或方糖，萃取新鲜植物精油与天然原汁。',
    types: [
      '不锈钢齿状捣棒：头部带硬质食品级硅胶齿，适合强力挤压柑橘果皮。',
      '天然硬木平头捣棒：传统手工木棒，适合轻柔按压薄荷叶与香草。'
    ],
    keySpecs: '长度：20cm - 25cm，抓握手柄符合人体工学',
    usageTips: '捣薄荷时切忌死命旋转捣碎！只需垂直向下施压 5-6 次压出精油即可。'
  }
];

export const TECHNIQUES_DATA: TechniqueItem[] = [
  {
    id: 'shake',
    name: 'Shake（摇荡法）',
    nameEn: 'Shaking Technique',
    duration: '8 - 12 秒',
    suitableFor: ['含柑橘果汁类 (如代基里、玛格丽特)', '含鲜蛋清/鲜奶油类 (如威士忌酸)', '含糖浆果泥类'],
    description: '将基酒、辅料与冰块放入雪克壶中，以极快速度前后水平（或立体圆弧）剧烈摇荡。其作用是在 10 秒内将酒温迅速降至 -2°C 至 -4°C，同时借助冰块锐利边缘将空气打入液体，形成微米级绵密气泡，柔化酸涩与酒精刺喉感。',
    steps: [
      '先在摇壶小段或壶底注入果汁、糖浆等非酒精配料，最后倒入基酒。',
      '在摇壶中填满 8-9 分坚硬大方冰。',
      '迅速扣上滤盖与壶盖，一只手掌心压住壶顶，另一只手托住壶底。',
      '抬高摇壶至胸口或肩部前方，以身体核心与手腕协同发力，剧烈快速来回摇晃 10-12 秒。',
      '感到壶壁结满白霜且刺骨冰凉后，轻轻轻叩壶盖侧沿开盖，过滤入冰镇杯具。'
    ],
    proTip: '对于含蛋清的酒款，建议先不加冰进行「干摇（Dry Shake）」15秒彻底乳化蛋白，再加冰进行第二次「湿摇（Wet Shake）」降温。',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stir',
    name: 'Stir（搅拌法）',
    nameEn: 'Stirring Technique',
    duration: '30 - 40 秒',
    suitableFor: ['纯烈酒与加度葡萄酒混合款 (如干马天尼、曼哈顿、尼格罗尼、萨泽拉克)'],
    description: '在厚底玻璃搅拌杯中加满硬冰，使用吧勺贴着杯壁做平滑顺畅的圆周运动。搅拌法能让酒液降温至 0°C 并带来约 20-25% 的纯净融冰稀释，最大程度保持酒液如水晶般通透清澈，杜绝产生气泡与浑浊冰渣。',
    steps: [
      '搅拌杯预冷，倒入量好的各类烈酒与苦精。',
      '加入 6-8 块质地坚硬透明的手凿老冰。',
      '将吧勺插入杯底，勺背向外贴紧杯壁。',
      '用指腹轻揉转动勺杆，顺时针快速平稳滑行搅拌 30-40 秒。',
      '架上 Julep 滤冰器或 Hawthorne 滤网，将晶莹酒液缓缓倒入预冷酒杯中。'
    ],
    proTip: '不要用勺子像煮汤一样上下拍打冰块！保持勺背与玻璃内壁的贴合滑动，听到的应当是冰块轻柔滑润的沙沙声。',
    image: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'build',
    name: 'Build（直调法）',
    nameEn: 'Building Technique',
    duration: '5 - 10 秒',
    suitableFor: ['长饮高球 (如金汤力、威士忌高球、莫斯科骡子)', '简易加冰纯饮款'],
    description: '无需使用额外的雪克壶或搅拌杯，直接在出品的饮用杯中，按照顺序加入冰块、烈酒与碳酸软饮，稍加提拉搅拌即可饮用。最大优势是最大化保护碳酸气泡的持久度。',
    steps: [
      '在出品高球杯中放入一根整根无杂质老冰柱（或加满方冰）。',
      '倒入基酒，用吧勺搅拌数圈让基酒充分降温挂冰。',
      '沿吧勺螺旋杆将冰镇苏打水或汤力水缓缓注入杯中至九分满。',
      '用吧勺从杯底轻柔向上提拉一次即可，切勿反复疯狂搅拌击碎气泡。',
      '添加装饰物（如青柠角或迷迭香）即刻奉客。'
    ],
    proTip: '注入气泡水后只需要轻提吧勺一次！气泡本身的对流运动会自动完成绝大部分混匀。',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'muddle',
    name: 'Muddle（捣压法）',
    nameEn: 'Muddling Technique',
    duration: '10 - 15 秒',
    suitableFor: ['莫吉托 (Mojito)', '凯匹林纳 (Caipirinha)', '薄荷朱利普 (Mint Julep)'],
    description: '在杯底使用捣棒将新鲜水果切块、青柠、新鲜香草或方糖按压出汁与精油。',
    steps: [
      '在厚底杯中放入新鲜薄荷或青柠角，加入适量糖浆或方糖。',
      '握住捣棒垂直向下轻柔施压，旋转 45 度按压。',
      '重复 5-6 次，观察果皮精油与汁水渗出。',
      '倒入基酒并加入碎冰进行下一步调和。'
    ],
    proTip: '对待新鲜香草（如薄荷、罗勒）要像对待花瓣一样温柔！过分暴力的捣碎会破坏植物细胞壁释放苦涩的多酚与叶绿素杂味。',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blend',
    name: 'Blend（搅拌机/冰沙法）',
    nameEn: 'Blending Technique',
    duration: '15 - 20 秒',
    suitableFor: ['冻代基里 (Frozen Daiquiri)', '冻玛格丽特', '椰林飘香 (Piña Colada)'],
    description: '使用大功率电动调酒搅拌机（Blender），将烈酒、果泥与冰块直接打成丝滑均匀的冰沙状，是夏日海滨度假村的经典招牌。',
    steps: [
      '先将液体配料（朗姆、果汁、糖浆）倒入搅拌机杯体。',
      '加入精确称量的细碎冰（每份约 150g）。',
      '盖紧盖子，先开启低速档粉碎 5 秒，再切换至高速档破壁 10-15 秒。',
      '倾倒入高脚飓风杯中，呈山丘状堆叠。'
    ],
    proTip: '控制液体与冰块的比例至关重要，冰块过少会变成水汤，过多会凝结成无法吸允的硬冰坨。',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'layer',
    name: 'Layer（分层法）',
    nameEn: 'Layering Technique',
    duration: '20 - 30 秒',
    suitableFor: ['B-52 轰炸机', '彩虹酒 (Pousse-Café)', '特调彩层'],
    description: '利用不同酒类含糖量与酒精度导致的物理比重（密度）差异，顺着吧勺背部极其缓慢地注入，在杯中形成一道道边界分明的梦幻色彩分层。',
    steps: [
      '先在子弹杯底倒入密度最大（含糖量最高）的第一层利口酒（如咖啡利口酒）。',
      '将吧勺凸面（背面）贴紧杯壁内侧，紧贴下层酒液表面。',
      '用量酒器顺着吧勺背缓慢注入中等密度的第二层（如百利甜）。',
      '重复操作，最后注入密度最小的高度烈酒（如金朗姆或伏特加）。'
    ],
    proTip: '物理密度铁律：糖分越高密度越大沉底，酒精度越高密度越轻浮于顶层。',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'float',
    name: 'Float（漂浮法）',
    nameEn: 'Floating Technique',
    duration: '5 秒',
    suitableFor: ['盘尼西林 (泥煤威士忌漂浮)', '纽约酸 (红葡萄酒漂浮)', '迈泰 (深色朗姆漂浮)'],
    description: '在调好并已滤入杯中的鸡尾酒顶端，顺着吧勺引流轻铺一层约 5-10ml 的特色风味烈酒或干红，使其如浮萍般悬浮在酒面，第一口给品饮者带来极其强烈的香气冲击。',
    steps: [
      '将基础鸡尾酒完成摇荡或搅拌滤入杯中。',
      '手持吧勺，勺背平贴酒液表面。',
      '用量酒器将 10ml 特殊酒液（如艾雷岛泥煤威士忌）缓慢淋在勺背上。',
      '平稳移开吧勺，形成清晰的浮层。'
    ],
    proTip: '漂浮层必须保持清澈完整，端送给顾客时切勿晃动酒杯破坏浮层。',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  }
];

export const SKILL_TIPS_DATA: BartenderSkillTip[] = [
  {
    id: 'rimming',
    title: '杯口镶边艺术 (Rimming)',
    subtitle: '如何做出一道不掉渣、均匀高贵的专业盐边/糖边',
    icon: 'Sparkles',
    content: '杯口镶边（Rim）是调酒中兼具视觉美感与风味碰撞的重要技艺。无论是玛格丽特的海盐边、边车的白糖边，还是血腥玛丽的辣椒芹菜盐，合格的镶边必须牢固附着在杯口外侧，绝不能掉入杯内污染酒液。',
    rules: [
      '【单侧原则】：只做半圈杯边（Half Rim），给不喜蘸盐或只想偶尔触碰风味的顾客留下自由空间。',
      '【外壁擦拭】：切片青柠只擦拭杯口外侧 3-5mm 区域，绝不要擦到杯口内壁！',
      '【轻转轻蘸】：将平盘中的海盐铺平，杯口倾斜 45 度轻转一圈，并用手背轻轻弹击杯脚震落多余浮盐。'
    ]
  },
  {
    id: 'ice-mastery',
    title: '透明老冰与控温控水哲学',
    subtitle: '调酒师为什么视冰块为最核心的灵魂原材料？',
    icon: 'Snowflake',
    content: '普通冰箱冰块由于含有大量空气和微量杂质，呈白雾状且融化极快，会导致鸡尾酒过早水化（Over-dilution）。专业酒吧采用「定向冷冻法」制作的完全透明致密老冰，熔点高、降温快、融水极低。',
    rules: [
      '【摇荡用冰】：选用 3-4 块质地坚硬的大方冰，快速降温并打碎出细微冰粒。',
      '【搅拌用冰】：选用大块手凿硬冰，纯净无杂味，控水率在 20%-25%。',
      '【出品冰柱】：高球杯选用长条透明老冰柱（Ice Spear），与杯壁严丝合缝，气泡持久不散。'
    ]
  },
  {
    id: 'citrus-twist',
    title: '柑橘皮油的魔法喷雾 (Citrus Twist)',
    subtitle: '从嗅觉先导开启一杯鸡尾酒的味觉盛宴',
    icon: 'Flame',
    content: '柠檬、甜橙与西柚外皮富含高挥发性的芳香柠檬烯精油。在杯口上方挤压皮卷，精油雾化覆盖酒面与杯唇，顾客未饮之前先被馥郁芬芳俘获。',
    rules: [
      '【剔除白髓】：削皮刀削下的果皮若带有较厚白色内膜（Pith），务必用吧刀削平，白髓极苦会破坏风味。',
      '【45度下压】：果皮外表面朝向酒面，在距杯口 5-10cm 处双手食指拇指快速反向捏折。',
      '【杯唇擦拭】：挤完油后的皮条顺时针沿杯口轻擦一圈，让香气在嘴唇贴近时瞬间释放。'
    ]
  }
];
