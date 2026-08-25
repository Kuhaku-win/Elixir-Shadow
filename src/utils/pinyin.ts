// Pinyin search matching utility for Elixir & Shadow

// Clean character to pinyin initial & full pinyin table (no duplicates)
const CHAR_PINYIN_MAP: Record<string, { initial: string; full: string }> = {
  '马': { initial: 'm', full: 'ma' },
  '天': { initial: 't', full: 'tian' },
  '尼': { initial: 'n', full: 'ni' },
  '玛': { initial: 'm', full: 'ma' },
  '格': { initial: 'g', full: 'ge' },
  '丽': { initial: 'l', full: 'li' },
  '特': { initial: 't', full: 'te' },
  '罗': { initial: 'l', full: 'luo' },
  '金': { initial: 'j', full: 'jin' },
  '汤': { initial: 't', full: 'tang' },
  '力': { initial: 'l', full: 'li' },
  '巴': { initial: 'b', full: 'ba' },
  '利': { initial: 'l', full: 'li' },
  '莫': { initial: 'm', full: 'mo' },
  '吉': { initial: 'j', full: 'ji' },
  '托': { initial: 't', full: 'tuo' },
  '大': { initial: 'd', full: 'da' },
  '都': { initial: 'd', full: 'du' },
  '会': { initial: 'h', full: 'hui' },
  '曼': { initial: 'm', full: 'man' },
  '哈': { initial: 'h', full: 'ha' },
  '顿': { initial: 'd', full: 'dun' },
  '盘': { initial: 'p', full: 'pan' },
  '西': { initial: 'x', full: 'xi' },
  '林': { initial: 'l', full: 'lin' },
  '自': { initial: 'z', full: 'zi' },
  '由': { initial: 'y', full: 'you' },
  '古': { initial: 'g', full: 'gu' },
  '典': { initial: 'd', full: 'dian' },
  '老': { initial: 'l', full: 'lao' },
  '式': { initial: 's', full: 'shi' },
  '长': { initial: 'c', full: 'chang' },
  '岛': { initial: 'd', full: 'dao' },
  '冰': { initial: 'b', full: 'bing' },
  '茶': { initial: 'c', full: 'cha' },
  '维': { initial: 'w', full: 'wei' },
  '斯': { initial: 's', full: 'si' },
  '帕': { initial: 'p', full: 'pa' },
  '血': { initial: 'x', full: 'xue' },
  '腥': { initial: 'x', full: 'xing' },
  '酒': { initial: 'j', full: 'jiu' },
  '伏': { initial: 'f', full: 'fu' },
  '加': { initial: 'j', full: 'jia' },
  '朗': { initial: 'l', full: 'lang' },
  '姆': { initial: 'm', full: 'mu' },
  '威': { initial: 'w', full: 'wei' },
  '士': { initial: 's', full: 'shi' },
  '忌': { initial: 'j', full: 'ji' },
  '龙': { initial: 'l', full: 'long' },
  '舌': { initial: 's', full: 'she' },
  '兰': { initial: 'l', full: 'lan' },
  '白': { initial: 'b', full: 'bai' },
  '地': { initial: 'd', full: 'di' },
  '君': { initial: 'j', full: 'jun' },
  '度': { initial: 'd', full: 'du' },
  '橙': { initial: 'c', full: 'cheng' },
  '阿': { initial: 'a', full: 'a' },
  '佩': { initial: 'p', full: 'pei' },
  '酸': { initial: 's', full: 'suan' },
  '甜': { initial: 't', full: 'tian' },
  '苦': { initial: 'k', full: 'ku' },
  '精': { initial: 'j', full: 'jing' },
  '艾': { initial: 'a', full: 'ai' },
  '糖': { initial: 't', full: 'tang' },
  '浆': { initial: 'j', full: 'jiang' },
  '青': { initial: 'q', full: 'qing' },
  '柠': { initial: 'n', full: 'ning' },
  '黄': { initial: 'h', full: 'huang' },
  '雪': { initial: 'x', full: 'xue' },
  '碧': { initial: 'b', full: 'bi' },
  '果': { initial: 'g', full: 'guo' },
  '汁': { initial: 'z', full: 'zhi' },
  '苹': { initial: 'p', full: 'ping' },
  '葡': { initial: 'p', full: 'pu' },
  '萄': { initial: 't', full: 'tao' },
  '桃': { initial: 't', full: 'tao' },
  '芒': { initial: 'm', full: 'mang' },
  '芭': { initial: 'b', full: 'ba' },
  '乐': { initial: 'l', full: 'le' },
  '椰': { initial: 'y', full: 'ye' },
  '子': { initial: 'z', full: 'zi' },
  '水': { initial: 's', full: 'shui' },
  '蓝': { initial: 'l', full: 'lan' },
  '色': { initial: 's', full: 'se' },
  '泄': { initial: 'x', full: 'xie' },
  '湖': { initial: 'h', full: 'hu' },
  '红': { initial: 'h', full: 'hong' },
  '桑': { initial: 's', full: 'sang' },
  '咖': { initial: 'k', full: 'ka' },
  '啡': { initial: 'f', full: 'fei' },
  '浓': { initial: 'n', full: 'nong' },
  '缩': { initial: 's', full: 'suo' },
  '日': { initial: 'r', full: 'ri' },
  '出': { initial: 'c', full: 'chu' },
  '落': { initial: 'l', full: 'luo' },
  '撞': { initial: 'z', full: 'zhuang' },
  '墙': { initial: 'q', full: 'qiang' },
  '黑': { initial: 'h', full: 'hei' },
  '麦': { initial: 'm', full: 'mai' },
  '波': { initial: 'b', full: 'bo' },
  '本': { initial: 'b', full: 'ben' },
  '苏': { initial: 's', full: 'su' },
  '打': { initial: 'd', full: 'da' },
  '姜': { initial: 'j', full: 'jiang' },
  '啤': { initial: 'p', full: 'pi' },
  '汽': { initial: 'q', full: 'qi' },
  '草': { initial: 'c', full: 'cao' },
  '花': { initial: 'h', full: 'hua' },
  '蜜': { initial: 'm', full: 'mi' },
  '多': { initial: 'd', full: 'duo' },
  '薄': { initial: 'b', full: 'bo' },
  '荷': { initial: 'h', full: 'he' },
  '迷': { initial: 'm', full: 'mi' },
  '迭': { initial: 'd', full: 'die' },
  '香': { initial: 'x', full: 'xiang' },
  '卡': { initial: 'k', full: 'ka' },
  '尔': { initial: 'e', full: 'er' },
  '瓦': { initial: 'w', full: 'wa' },
  '百': { initial: 'b', full: 'bai' }
};

/**
 * Returns the initials and full pinyin strings for a Chinese text
 */
export const getPinyinVariants = (text: string): { initials: string; full: string } => {
  let initials = '';
  let full = '';

  for (const char of text) {
    const p = CHAR_PINYIN_MAP[char];
    if (p) {
      initials += p.initial;
      full += p.full;
    } else {
      initials += char.toLowerCase();
      full += char.toLowerCase();
    }
  }

  return { initials, full };
};

/**
 * Checks if a target string matches a query via exact text, English, initials or full pinyin
 */
export const matchPinyinOrText = (target: string, query: string): boolean => {
  if (!target || !query) return false;
  const q = query.toLowerCase().trim();
  const t = target.toLowerCase();

  // 1. Direct text include
  if (t.includes(q)) return true;

  // 2. Pinyin matching
  const { initials, full } = getPinyinVariants(target);
  if (initials.includes(q) || full.includes(q)) return true;

  return false;
};
