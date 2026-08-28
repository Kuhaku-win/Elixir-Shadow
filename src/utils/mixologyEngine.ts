import { INGREDIENTS_DATABASE } from '../data/ingredients';
import { RECIPES_DATABASE } from '../data/recipes';
import type { Recipe, FlavorRadar as FlavorRadarType, FlavorTag, GlassType } from '../types/cocktail';

export interface FlavorSimulationResult {
  flavorRadar: FlavorRadarType;
  totalRawMl: number;
  waterDilutionMl: number;
  finishedMl: number;
  finishedAbv: number;
  balanceScore: number; // 0 - 100
  balanceStatus: 'perfect' | 'sweet-forward' | 'sour-forward' | 'spirit-heavy' | 'bitter-forward' | 'dry';
  balanceLabel: string;
  primaryNotes: string[];
  critique: string;
  bartenderTips: string[];
  suggestedGlass: string;
  suggestedTechnique: string;
  techniqueZh: string;
}

export interface MixologyPreferences {
  targetAbvRange: 'mocktail' | 'low' | 'medium' | 'high'; // 0%, 5-12%, 13-22%, 23%+
  aromaPreference: 'citrus' | 'fruity' | 'herbal' | 'smoky' | 'floral' | 'bittersweet';
  style: 'sour' | 'highball' | 'spirit-forward' | 'tiki' | 'equal-parts' | 'smash';
  partyVibe?: string;
}

/**
 * 调制技法融冰稀释率与推荐杯型
 */
export const TECHNIQUE_CONFIGS: Record<string, { zh: string; dilution: number; desc: string; defaultGlass: string }> = {
  'shake': { zh: '摇荡法 (Shake)', dilution: 0.25, desc: '剧烈撞击融冰注水25%，充分冷却并充入微气泡', defaultGlass: '蝶形香槟杯 (Coupe)' },
  'stir': { zh: '搅拌法 (Stir)', dilution: 0.20, desc: '平稳旋转化水20%，保持酒液澄澈丝滑与厚重挂杯', defaultGlass: '古典杯 (Rocks / Old Fashioned)' },
  'build': { zh: '直调法 (Build)', dilution: 0.12, desc: '冰块层叠直接注入，最大化保留碳酸气泡清爽感', defaultGlass: '高球杯 (Highball / Collins)' },
  'muddle': { zh: '捣压直调 (Muddle)', dilution: 0.18, desc: '轻柔捣压果皮香草精油，释放鲜活植物清香', defaultGlass: '古典杯 / 高球杯' },
  'blend': { zh: '冰沙法 (Blend)', dilution: 0.35, desc: '碎冰高速融合，带来极度冰爽如天鹅绒般的冰沙感', defaultGlass: '飓风杯 (Hurricane)' }
};

/**
 * 【功能1】自创配方全感官风味仿真与调酒师专业推演引擎
 */
export function simulateCustomCocktail(
  items: Array<{ id: string; name?: string; amountMl: number }>,
  technique: string = 'shake',
  customGlass?: string
): FlavorSimulationResult {
  const techConf = TECHNIQUE_CONFIGS[technique] || TECHNIQUE_CONFIGS['shake'];
  const validItems = items.filter(i => i.amountMl > 0);

  if (validItems.length === 0) {
    return {
      flavorRadar: { sour: 0, sweet: 0, bitter: 0, strong: 0, fruity: 0, herbal: 0 },
      totalRawMl: 0,
      waterDilutionMl: 0,
      finishedMl: 0,
      finishedAbv: 0,
      balanceScore: 50,
      balanceStatus: 'dry',
      balanceLabel: '⚪ 空配方',
      primaryNotes: ['暂无原料输入'],
      critique: '请在上方原料栏中添加基酒、酸汁、糖浆或配制酒以启动风味推演。',
      bartenderTips: ['提示：经典鸡尾酒建议由 基酒 (45-60ml) + 酸味剂 (15-25ml) + 甜味糖浆 (15-20ml) 构成平衡骨架。'],
      suggestedGlass: customGlass || '鸡尾酒杯',
      suggestedTechnique: technique,
      techniqueZh: techConf.zh
    };
  }

  // 1. 物理容积与酒精度计算
  let totalRawMl = 0;
  let totalPureAlcoholMl = 0;
  let totalSugarUnits = 0; // 相对糖度砝码
  let totalAcidUnits = 0;  // 相对酸度砝码
  let totalBitterUnits = 0; // 苦味/草本砝码
  let totalRefreshingUnits = 0; // 气泡/清新因子

  const notesSet = new Set<string>();

  validItems.forEach(item => {
    const itemId = (item as any).rawId || item.id || '';
    const dbIng = INGREDIENTS_DATABASE.find(i => i.id === itemId || i.slug === itemId);
    const amount = item.amountMl;
    totalRawMl += amount;

    const abv = dbIng ? dbIng.abv : 40;
    totalPureAlcoholMl += (amount * abv) / 100;

    const nameLower = (dbIng ? dbIng.name + ' ' + dbIng.nameEn : ((item as any).name || itemId)).toLowerCase();

    // 糖度分析
    if (nameLower.includes('rich-syrup') || nameLower.includes('双倍糖浆')) {
      totalSugarUnits += amount * 2.0;
      notesSet.add('浓郁蔗糖');
    } else if (nameLower.includes('honey') || nameLower.includes('蜂蜜')) {
      totalSugarUnits += amount * 1.6;
      notesSet.add('百花蜜香');
    } else if (nameLower.includes('syrup') || nameLower.includes('糖浆') || nameLower.includes('orgeat')) {
      totalSugarUnits += amount * 1.35;
      notesSet.add('温润清甜');
    } else if (nameLower.includes('liqueur') || nameLower.includes('cointreau') || nameLower.includes('利口酒') || nameLower.includes('kahlua') || nameLower.includes('baileys')) {
      totalSugarUnits += amount * 0.8;
      totalBitterUnits += amount * 0.2;
      notesSet.add('芳香甜润');
    } else if (nameLower.includes('vermouth') || nameLower.includes('苦艾') || nameLower.includes('aperol') || nameLower.includes('campari')) {
      totalSugarUnits += amount * 0.5;
      totalBitterUnits += amount * 0.9;
      notesSet.add('草本苦甜');
    } else if (nameLower.includes('juice') || nameLower.includes('果汁')) {
      totalSugarUnits += amount * 0.2;
    }

    // 酸度分析
    if (nameLower.includes('lime') || nameLower.includes('青柠')) {
      totalAcidUnits += amount * 1.1;
      totalRefreshingUnits += amount * 1.3;
      notesSet.add('凛冽青柠酸');
    } else if (nameLower.includes('lemon') || nameLower.includes('柠檬')) {
      totalAcidUnits += amount * 1.0;
      totalRefreshingUnits += amount * 1.2;
      notesSet.add('明亮柠檬酸');
    } else if (nameLower.includes('grapefruit') || nameLower.includes('西柚')) {
      totalAcidUnits += amount * 0.5;
      totalBitterUnits += amount * 0.3;
      totalRefreshingUnits += amount * 0.9;
      notesSet.add('粉红西柚');
    } else if (nameLower.includes('cranberry') || nameLower.includes('蔓越莓')) {
      totalAcidUnits += amount * 0.5;
      notesSet.add('红浆果酸');
    }

    // 苦精与香草分析
    if (nameLower.includes('bitters') || nameLower.includes('苦精')) {
      totalBitterUnits += amount * 3.5;
      notesSet.add('复合草本香料');
    }
    if (nameLower.includes('mint') || nameLower.includes('薄荷')) {
      totalRefreshingUnits += amount * 2.0;
      notesSet.add('冰凉薄荷');
    }
    if (nameLower.includes('soda') || nameLower.includes('tonic') || nameLower.includes('sprite') || nameLower.includes('汽水') || nameLower.includes('苏打')) {
      totalRefreshingUnits += amount * 1.1;
      notesSet.add('气泡升腾');
    }
    if (nameLower.includes('gin') || nameLower.includes('金酒')) {
      notesSet.add('杜松子草本');
    } else if (nameLower.includes('whiskey') || nameLower.includes('威士忌')) {
      notesSet.add('橡木桶与香草');
    } else if (nameLower.includes('rum') || nameLower.includes('朗姆')) {
      notesSet.add('热带甘蔗果酯');
    } else if (nameLower.includes('tequila') || nameLower.includes('龙舌兰') || nameLower.includes('mezcal')) {
      notesSet.add('龙舌兰植物青香');
    }
  });

  const waterDilutionMl = Math.round(totalRawMl * techConf.dilution);
  const finishedMl = totalRawMl + waterDilutionMl;
  const finishedAbv = totalRawMl > 0 ? Math.round(((totalPureAlcoholMl) / finishedMl) * 1000) / 10 : 0;

  // 2. 6维风味雷达计算 (0 - 5 分度)
  const normSweet = Math.min(5, Math.max(1, Math.round((totalSugarUnits / (totalRawMl * 0.25 || 1)) * 3.2 * 10) / 10));
  const normSour = Math.min(5, Math.max(1, Math.round((totalAcidUnits / (totalRawMl * 0.2 || 1)) * 3.0 * 10) / 10));
  const normBitter = Math.min(5, Math.max(1, Math.round((totalBitterUnits / (totalRawMl * 0.15 || 1)) * 3.5 * 10) / 10));
  const normStrong = Math.min(5, Math.max(1, Math.round((finishedAbv / 38) * 5 * 10) / 10));
  const normFruity = Math.min(5, Math.max(1, Math.round(((totalAcidUnits * 0.7 + totalSugarUnits * 0.4) / (totalRawMl * 0.2 || 1)) * 2.8 * 10) / 10));
  const normHerbal = Math.min(5, Math.max(1, Math.round(((totalBitterUnits * 1.0 + totalRefreshingUnits * 0.4) / (totalRawMl * 0.18 || 1)) * 2.8 * 10) / 10));

  const flavorRadar: FlavorRadarType = {
    sweet: normSweet,
    sour: normSour,
    bitter: normBitter,
    strong: normStrong,
    fruity: normFruity,
    herbal: normHerbal
  };

  // 3. 酸甜平衡度诊断
  const sweetSourRatio = totalAcidUnits > 0 ? totalSugarUnits / totalAcidUnits : (totalSugarUnits > 0 ? 5 : 1);
  let balanceScore = 85;
  let balanceStatus: FlavorSimulationResult['balanceStatus'] = 'perfect';
  let balanceLabel = '⚖️ 黄金酸甜平衡';
  const tips: string[] = [];

  if (totalAcidUnits > 0 && totalSugarUnits > 0) {
    if (sweetSourRatio >= 0.75 && sweetSourRatio <= 1.30) {
      balanceScore = 96;
      balanceStatus = 'perfect';
      balanceLabel = '⚖️ 黄金酸甜平衡 (Balanced)';
      tips.push('酸甜比例极佳，结构紧凑且回甘纯净，符合经典 Sour 架构黄金准则。');
    } else if (sweetSourRatio > 1.30) {
      balanceScore = Math.max(50, Math.round(96 - (sweetSourRatio - 1.30) * 25));
      balanceStatus = 'sweet-forward';
      balanceLabel = '🍯 显著偏甜 (Sweet Forward)';
      tips.push(`当前糖度偏高（糖酸比约 ${sweetSourRatio.toFixed(1)}:1），建议补入 5~10ml 鲜柠檬汁/青柠汁或减少糖浆。`);
    } else {
      balanceScore = Math.max(50, Math.round(96 - (1 - sweetSourRatio) * 40));
      balanceStatus = 'sour-forward';
      balanceLabel = '🍋 显著偏酸 (Tart / Crisp)';
      tips.push(`当前果酸尖锐突出，建议补入 5ml 单糖浆或蜂蜜糖浆，使中后段口感更为温润。`);
    }
  } else if (finishedAbv >= 24) {
    balanceStatus = 'spirit-heavy';
    balanceLabel = '🔥 重烈烈酒主导 (Spirit-Forward)';
    tips.push('烈度饱满刚劲，建议使用大方冰充分搅拌 (Stir) 慢速化水，并在饮用前喷香橙皮油。');
  } else if (totalBitterUnits > 15) {
    balanceStatus = 'bitter-forward';
    balanceLabel = '🌿 草本微苦开胃 (Aperitivo)';
    tips.push('草本苦味显著，极具意式餐前开胃酒（Aperitivo）风范，建议搭配橄榄或橙角。');
  } else {
    balanceStatus = 'dry';
    balanceLabel = '🧊 清冽干爽 (Dry & Refreshing)';
    tips.push('酒体干爽轻盈，适宜冰镇慢饮。');
  }

  // 杯型建议
  let suggestedGlass = customGlass || '蝶形香槟杯 (Coupe)';
  if (finishedMl > 180) {
    suggestedGlass = '高球杯 (Highball 300ml+)';
    tips.push('总液量充沛，推荐使用高球杯并加入老冰块，沿吧匙轻缓注入气泡水。');
  } else if (technique === 'stir') {
    suggestedGlass = '古典杯 (Rocks 250ml)';
  }

  // 风味描述总结
  const notesArray = Array.from(notesSet).slice(0, 4);
  const critique = `此配方呈现【${notesArray.join('、') || '纯粹风味'}】主导风味架构。经${techConf.zh}调制后单杯成品总容积约 ${finishedMl}ml，适饮酒精度约为 ${finishedAbv}% ABV，整体呈现${balanceLabel.split(' ')[1]}风范。`;

  return {
    flavorRadar,
    totalRawMl,
    waterDilutionMl,
    finishedMl,
    finishedAbv,
    balanceScore,
    balanceStatus,
    balanceLabel,
    primaryNotes: notesArray,
    critique,
    bartenderTips: tips,
    suggestedGlass,
    suggestedTechnique: technique,
    techniqueZh: techConf.zh
  };
}

// --- 随机采样与洗牌工具函数 ---
function randomPick<T>(arr: T[]): T | undefined {
  if (!arr || arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomShuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// 诗意与调酒美学命名生成词库
const POETIC_PREFIXES_ZH = ['暗夜', '晨曦', '极光', '翡翠', '天鹅绒', '浮光', '幻影', '赤霞', '月相', '星芒', '雾隐', '流金', '深海', '暮色', '琥珀', '微光', '离弦', '梦境', '灵犀', '隐士', '风暴', '星河', '迷雾', '炽热'];
const POETIC_PREFIXES_EN = ['Midnight', 'Aurora', 'Velvet', 'Golden', 'Shadow', 'Twilight', 'Emerald', 'Amber', 'Crimson', 'Radiance', 'Starlight', 'Astral', 'Eclipse', 'Obsidian', 'Solstice', 'Luminescent', 'Nebula', 'Seraphic', 'Celeste', 'Vesper'];

/**
 * 【功能2】AI 智能特调配比生成系统 (基于已有原料与期望风味生成全新随机独特特调)
 */
export function synthesizeCocktail(
  inventoryIds: string[],
  preferences: MixologyPreferences
): Recipe {
  const inventorySet = new Set(inventoryIds);

  // 1. 分析当前可用原料池
  const availableBases = INGREDIENTS_DATABASE.filter(i => inventorySet.has(i.id) && i.category === 'base-spirit');
  const availableLiqueurs = INGREDIENTS_DATABASE.filter(i => inventorySet.has(i.id) && i.category === 'liqueur');
  const availableJuices = INGREDIENTS_DATABASE.filter(i => inventorySet.has(i.id) && i.category === 'juice');
  const availableSyrups = INGREDIENTS_DATABASE.filter(i => inventorySet.has(i.id) && i.category === 'syrup');
  const availableMixers = INGREDIENTS_DATABASE.filter(i => inventorySet.has(i.id) && i.category === 'mixer');
  const availableGarnishes = INGREDIENTS_DATABASE.filter(i => inventorySet.has(i.id) && i.category === 'garnish');
  const availableBitters = INGREDIENTS_DATABASE.filter(i => inventorySet.has(i.id) && i.category === 'bitters');

  // --- 智能香型偏好加权随机筛选基酒 ---
  let candidateBases = [...availableBases];
  if (preferences.aromaPreference === 'smoky') {
    const smokyBases = availableBases.filter(b => b.id.includes('whiskey') || b.id.includes('mezcal') || b.id.includes('rum-dark'));
    if (smokyBases.length > 0) candidateBases = smokyBases;
  } else if (preferences.aromaPreference === 'herbal') {
    const herbalBases = availableBases.filter(b => b.id.includes('gin') || b.id.includes('pisco') || b.id.includes('cachaca'));
    if (herbalBases.length > 0) candidateBases = herbalBases;
  } else if (preferences.aromaPreference === 'citrus' || preferences.aromaPreference === 'fruity') {
    const freshBases = availableBases.filter(b => b.id.includes('gin') || b.id.includes('vodka') || b.id.includes('tequila') || b.id.includes('rum-white'));
    if (freshBases.length > 0) candidateBases = freshBases;
  }

  // 随机采样主要原料（若无则随机后备）
  const base = randomPick(candidateBases) || randomPick(availableBases) || INGREDIENTS_DATABASE.find(i => i.id === 'gin')!;
  
  // 随机采样次要基酒（Tiki 混调）
  const remainingBases = availableBases.filter(b => b.id !== base.id);
  const secondaryBase = randomPick(remainingBases) || base;

  // 随机采样果汁/酸味剂（优先匹配香型）
  let candidateJuices = [...availableJuices];
  if (preferences.aromaPreference === 'fruity') {
    const sweetJuices = availableJuices.filter(j => j.id.includes('apple') || j.id.includes('grape') || j.id.includes('mango') || j.id.includes('guava') || j.id.includes('peach') || j.id.includes('passion') || j.id.includes('orange'));
    if (sweetJuices.length > 0) candidateJuices = sweetJuices;
  }
  const juice = randomPick(candidateJuices) || availableJuices.find(j => j.id.includes('lemon') || j.id.includes('lime')) || randomPick(availableJuices) || INGREDIENTS_DATABASE.find(i => i.id === 'fresh-lemon-juice')!;
  
  // 随机采样糖浆、利口酒、汽水、装饰、苦精
  const syrup = randomPick(availableSyrups) || INGREDIENTS_DATABASE.find(i => i.id === 'simple-syrup')!;
  const liqueur = randomPick(availableLiqueurs);
  const mixer = randomPick(availableMixers);
  const garnish = randomPick(availableGarnishes);
  const bitters = randomPick(availableBitters);

  // 随机挑选诗意词汇
  const prefixZh = randomPick(POETIC_PREFIXES_ZH) || '浮光';
  const prefixEn = randomPick(POETIC_PREFIXES_EN) || 'Radiance';
  const baseShortZh = base.name.split(' / ')[0].replace(/酒|纯净|法国|经典/g, '');
  const baseShortEn = base.nameEn.split(' ')[0];

  // 2. 根据用户偏好 style / abv 选择黄金比例模板
  let recipeNameZh = `${prefixZh} ${baseShortZh}特调`;
  let recipeNameEn = `${prefixEn} ${baseShortEn} Elixir`;
  let technique = 'shake';
  let techniqueZh = '摇荡法 (Shake)';
  let glass = '碟形香槟杯 / 鸡尾酒杯';
  let garnishName = garnish ? garnish.name : '新鲜橙皮 Twist';
  let description = '基于调酒师黄金比例矩阵全新推演的私房定制特调。';
  let story = '灵感来自于经典的酸甜平衡结构，融合了当下吧台可用原料的独特性格。';
  let ingredientsList: Array<{ name: string; amountMl: number; rawId: string }> = [];
  let instructions: string[] = [];

  const style = preferences.style || 'sour';
  const abvRange = preferences.targetAbvRange || 'medium';

  if (style === 'highball') {
    // Highball 长饮气泡高球型
    const suffixZh = randomPick(['高球', '晨曦', '气泡', '回响', '浪潮', '清泉', '冰茶'])!;
    const suffixEn = randomPick(['Highball', 'Fizz', 'Cooler', 'Breeze', 'Tide', 'Spark'])!;
    recipeNameZh = `${prefixZh} ${baseShortZh}${suffixZh}`;
    recipeNameEn = `${prefixEn} ${baseShortEn} ${suffixEn}`;
    technique = 'build';
    techniqueZh = '直调法 (Build)';
    glass = '高球杯 (Highball Glass)';
    garnishName = garnish ? garnish.name : '柠檬角 / 迷迭香枝';

    const baseAmount = abvRange === 'mocktail' ? 0 : abvRange === 'low' ? 30 : abvRange === 'high' ? 60 : 45;
    const sodaAmount = abvRange === 'mocktail' ? 120 : abvRange === 'low' ? 110 : abvRange === 'high' ? 60 : 90;
    const juiceAmount = abvRange === 'high' ? 12 : 15;
    const syrupAmount = abvRange === 'high' ? 8 : 10;
    
    ingredientsList = [];
    if (baseAmount > 0) {
      ingredientsList.push({ name: base.name, amountMl: baseAmount, rawId: base.id });
    }
    ingredientsList.push(
      { name: juice.name, amountMl: juiceAmount, rawId: juice.id },
      { name: syrup.name, amountMl: syrupAmount, rawId: syrup.id },
      { name: mixer ? mixer.name : '苏打水 / 汤力水', amountMl: sodaAmount, rawId: mixer ? mixer.id : 'club-soda' }
    );
    if (liqueur && abvRange !== 'mocktail') {
      ingredientsList.splice(1, 0, { name: liqueur.name, amountMl: abvRange === 'low' ? 10 : 15, rawId: liqueur.id });
    }

    instructions = [
      '在高球杯中加入修整平整的长条老冰或大冰块，用吧匙顺时针快速旋转冰杯降温。',
      `依序量取 ${baseAmount > 0 ? `${base.name} ${baseAmount}ml、` : ''}${juice.name} ${juiceAmount}ml 与 ${syrup.name} ${syrupAmount}ml 注入杯中。`,
      '使用吧匙轻轻提拉搅拌 6~8 圈，使基底液体与冰块充分融合融温。',
      `顺着吧匙背面贴壁极其轻缓地注入冷藏${mixer ? mixer.name : '苏打水'}至 9 分满，避免气泡过度逸散。`,
      `在杯口点缀 ${garnishName}，提拉一次即可呈送。`
    ];
    description = `气泡升腾的夏日轻盈高球特调，融入${base.name.split(' / ')[0]}与${juice.name}的鲜活果酸，清爽无负担。`;
  } else if (style === 'spirit-forward') {
    // Spirit-Forward 重烈芳香搅拌型
    const suffixZh = randomPick(['夜宴', '沉香', '序曲', '重奏', '挽歌', '暗涌', '老式'])!;
    const suffixEn = randomPick(['Nocturne', 'Elegance', 'Reverie', 'Requiem', 'Legacy', 'Overture'])!;
    recipeNameZh = `${prefixZh} ${baseShortZh}${suffixZh}`;
    recipeNameEn = `${prefixEn} ${baseShortEn} ${suffixEn}`;
    technique = 'stir';
    techniqueZh = '搅拌法 (Stir)';
    glass = '古典杯 (Rocks Glass)';
    garnishName = garnish ? garnish.name : '喷香橙皮油与玛拉斯奇诺黑樱桃';

    const spiritPartner = liqueur || randomPick(availableLiqueurs) || INGREDIENTS_DATABASE.find(i => i.id === 'sweet-vermouth')!;
    const baseAmount = abvRange === 'mocktail' ? 0 : abvRange === 'low' ? 25 : abvRange === 'high' ? 60 : 50;
    const partnerAmount = abvRange === 'high' ? 25 : 20;

    ingredientsList = [];
    if (baseAmount > 0) {
      ingredientsList.push({ name: base.name, amountMl: baseAmount, rawId: base.id });
    }
    ingredientsList.push(
      { name: spiritPartner.name, amountMl: partnerAmount, rawId: spiritPartner.id },
      { name: syrup.name, amountMl: 5, rawId: syrup.id }
    );
    if (abvRange === 'low') {
      ingredientsList.push({ name: '纯净冷藏苏打水 (轻柔化水)', amountMl: 25, rawId: 'club-soda' });
    }
    if (bitters) {
      ingredientsList.push({ name: bitters.name, amountMl: 2, rawId: bitters.id });
    }

    instructions = [
      '在调酒搅拌杯 (Mixing Glass) 中放入大块密实坚硬的老冰块。',
      `精准量取 ${baseAmount > 0 ? `${base.name} ${baseAmount}ml 及 ` : ''}${spiritPartner.name} ${partnerAmount}ml 注入搅拌杯中。`,
      '用吧匙贴壁平稳、快速地顺时针搅拌 30~40 圈（约 25 秒），控制化水率在 20% 左右。',
      '在古典杯中放置单颗大方冰或钻石冰，使用滤冰器将澄澈冰凉的酒液滤入杯中。',
      `对折挤压${garnishName}，将精油均匀喷洒在酒体表面并擦拭杯沿。`
    ];
    description = `丝滑醇厚、挂杯优美的夜宴短饮，散发${base.name.split(' / ')[0]}与${spiritPartner.name}的复合草本橡木香气。`;
  } else if (style === 'tiki') {
    // Tiki 热带异域风情型
    const suffixZh = randomPick(['潘趣', '绿洲', '风暴', '热浪', '岛屿', '海风'])!;
    const suffixEn = randomPick(['Punch', 'Oasis', 'Tempest', 'Tropic', 'Safari', 'Breeze'])!;
    recipeNameZh = `${prefixZh} ${baseShortZh}${suffixZh}`;
    recipeNameEn = `${prefixEn} ${baseShortEn} ${suffixEn}`;
    technique = 'shake';
    techniqueZh = '摇荡法 (Shake)';
    glass = '飓风杯 / 提基马克杯 (Hurricane)';
    garnishName = garnish ? garnish.name : '新鲜薄荷枝与黑樱桃';

    const baseAmount = abvRange === 'mocktail' ? 0 : abvRange === 'low' ? 15 : abvRange === 'high' ? 45 : 35;
    const secondaryAmount = abvRange === 'mocktail' ? 0 : abvRange === 'low' ? 10 : abvRange === 'high' ? 25 : 20;
    const juiceAmount = abvRange === 'mocktail' ? 50 : abvRange === 'low' ? 45 : abvRange === 'high' ? 20 : 25;
    const syrupAmount = 15;

    ingredientsList = [];
    if (baseAmount > 0) {
      ingredientsList.push({ name: base.name, amountMl: baseAmount, rawId: base.id });
    }
    if (secondaryAmount > 0) {
      ingredientsList.push({ name: secondaryBase.name, amountMl: secondaryAmount, rawId: secondaryBase.id });
    }
    ingredientsList.push(
      { name: juice.name, amountMl: juiceAmount, rawId: juice.id },
      { name: syrup.name, amountMl: syrupAmount, rawId: syrup.id }
    );
    if (liqueur && abvRange !== 'mocktail' && abvRange !== 'low') {
      ingredientsList.push({ name: liqueur.name, amountMl: 15, rawId: liqueur.id });
    }

    instructions = [
      '在摇酒壶中装入 7 分满坚实冰块。',
      `量取 ${baseAmount > 0 ? `${base.name}、` : ''}${secondaryAmount > 0 ? `${secondaryBase.name} ` : ''}及果汁糖浆全部原料注入雪克壶中。`,
      '双手紧握摇壶，以双重节奏强力摇荡 (Hard Shake) 12~14 秒，直至壶身挂满白霜。',
      '在飓风杯中装满碎冰，将酒液滤入杯中。',
      `掌心轻拍${garnishName}唤醒香气，插于冰面上装饰。`
    ];
    description = `热烈浓郁的热带果香风暴，融合双重基酒与多重热带果汁，酸甜爆汁。`;
  } else if (style === 'equal-parts') {
    // Equal-Parts 等比四面体型 (1:1:1 严密架构)
    const suffixZh = randomPick(['三位一体', '平衡之境', '四面体', '协奏', '合鸣'])!;
    const suffixEn = randomPick(['Trinity', 'Equilibrium', 'Triad', 'Concord', 'Synthesis'])!;
    recipeNameZh = `${prefixZh} ${baseShortZh}${suffixZh}`;
    recipeNameEn = `${prefixEn} ${baseShortEn} ${suffixEn}`;
    technique = 'stir';
    techniqueZh = '搅拌法 (Stir)';
    glass = '尼克诺拉杯 / 碟形杯';
    garnishName = garnish ? garnish.name : '新鲜橙皮 Twist';

    const part2 = liqueur || INGREDIENTS_DATABASE.find(i => i.id === 'campari')!;
    const part3 = syrup.id.includes('syrup') ? juice : syrup;
    const partAmount = abvRange === 'low' ? 15 : abvRange === 'high' ? 30 : 25;

    ingredientsList = [
      { name: base.name, amountMl: partAmount, rawId: base.id },
      { name: part2.name, amountMl: partAmount, rawId: part2.id },
      { name: part3.name, amountMl: partAmount, rawId: part3.id }
    ];
    if (abvRange === 'low') {
      ingredientsList.push({ name: '纯净冷藏苏打水 (轻柔降度)', amountMl: 25, rawId: 'club-soda' });
    }

    instructions = [
      '在调酒搅拌杯中加入大块密实老冰块。',
      `精准以 1:1:1 黄金等比量取 ${base.name} ${partAmount}ml、${part2.name} ${partAmount}ml 与 ${part3.name} ${partAmount}ml。`,
      '顺时针贴壁平稳快速搅拌 30 圈，使三者风味完全锁紧并融化冰水降温。',
      '滤入预先冰镇好的酒杯中，饰以精油果皮。'
    ];
    description = `严密的三等分等比结构，口感紧凑宏大，每一口都是味蕾的精密协奏。`;
  } else if (style === 'smash') {
    // Smash 鲜果草本捣压型
    const suffixZh = randomPick(['粉碎', '击打', '爆汁', '芳华', '生机', '捣压'])!;
    const suffixEn = randomPick(['Smash', 'Burst', 'Bloom', 'Crush', 'Botanica'])!;
    recipeNameZh = `${prefixZh} ${baseShortZh}${suffixZh}`;
    recipeNameEn = `${prefixEn} ${baseShortEn} ${suffixEn}`;
    technique = 'muddle';
    techniqueZh = '捣压法 (Muddle)';
    glass = '古典杯 / 高球杯';
    garnishName = garnish ? garnish.name : '新鲜薄荷叶 / 柠檬角';

    const baseAmount = abvRange === 'mocktail' ? 0 : abvRange === 'low' ? 25 : abvRange === 'high' ? 60 : 50;
    const juiceAmount = abvRange === 'low' ? 25 : 20;
    const syrupAmount = 15;

    ingredientsList = [];
    if (garnish) {
      ingredientsList.push({ name: `${garnish.name} (捣压释香)`, amountMl: 5, rawId: garnish.id });
    }
    if (baseAmount > 0) {
      ingredientsList.push({ name: base.name, amountMl: baseAmount, rawId: base.id });
    }
    ingredientsList.push(
      { name: juice.name, amountMl: juiceAmount, rawId: juice.id },
      { name: syrup.name, amountMl: syrupAmount, rawId: syrup.id }
    );
    if (abvRange === 'low') {
      ingredientsList.push({ name: '冷藏气泡苏打水 (清凉注顶)', amountMl: 30, rawId: 'club-soda' });
    }

    instructions = [
      `在摇酒壶底放入 ${garnishName} 与糖浆，使用调酒捣棒轻柔压榨释放植物精油，切勿压碎苦髓。`,
      `注入 ${baseAmount > 0 ? `${base.name} ${baseAmount}ml 及 ` : ''}${juice.name} ${juiceAmount}ml。`,
      '加入实心硬冰剧烈摇荡 10 秒，双重过滤滤入装有碎冰的杯中。',
      '在顶部点缀新鲜香草嫩尖即可呈送。'
    ];
    description = `鲜活草本与果皮精油在杯中瞬间爆发，清冽爆汁，生机盎然。`;
  } else {
    // 经典 Sour 酸甜平衡型 (Base + Sour + Sweet)
    const suffixZh = randomPick(['酸', '晨露', '凝香', '私语', '微光', '特调', '纯酿'])!;
    const suffixEn = randomPick(['Sour', 'Whisper', 'Crush', 'Elixir', 'Glow', 'Harmonics'])!;
    recipeNameZh = `${prefixZh} ${baseShortZh}${suffixZh}`;
    recipeNameEn = `${prefixEn} ${baseShortEn} ${suffixEn}`;
    technique = 'shake';
    techniqueZh = '摇荡法 (Shake)';
    glass = '碟形香槟杯 (Coupe)';
    garnishName = garnish ? garnish.name : '柠檬皮 Twist / 蛋白绵密奶盖';

    const baseAmount = abvRange === 'mocktail' ? 0 : abvRange === 'low' ? 25 : abvRange === 'high' ? 60 : 50;
    const juiceAmount = abvRange === 'high' ? 20 : 25;
    const syrupAmount = abvRange === 'high' ? 12 : 18;

    ingredientsList = [];
    if (baseAmount > 0) {
      ingredientsList.push({ name: base.name, amountMl: baseAmount, rawId: base.id });
    }
    ingredientsList.push(
      { name: juice.name, amountMl: juiceAmount, rawId: juice.id },
      { name: syrup.name, amountMl: syrupAmount, rawId: syrup.id }
    );
    if (abvRange === 'low') {
      ingredientsList.push({ name: '苏打水 / 果茶基底 (轻盈降度)', amountMl: 25, rawId: 'club-soda' });
    }
    if (inventorySet.has('egg-white')) {
      ingredientsList.push({ name: '纯新鲜蛋白液 (Egg White)', amountMl: 15, rawId: 'egg-white' });
    }

    instructions = [
      '若添加蛋白：先将全部原料倒入雪克壶中不加冰干摇 (Dry Shake) 10 秒，打散蛋白质乳化结构。',
      '加入足量实心硬冰块，进行第二次强力摇荡 12 秒，使冰块充分撞击产生绵密微气泡。',
      '使用双重滤网 (Double Strain) 将细腻顺滑的酒液滤入预先冰镇好的蝶形杯中。',
      `静置 5 秒等待顶部形成一层雪白如奶盖的致密泡沫，以${garnishName}喷油装饰。`
    ];
    description = `口感如丝绸般滑顺，前调鲜酸清亮，中后段回甘丰盈圆润。`;
  }

  // 3. 运行仿真引擎计算成品物理参数
  const sim = simulateCustomCocktail(
    ingredientsList.map(i => ({ id: i.rawId, name: i.name, amountMl: i.amountMl })),
    technique,
    glass
  );

  const customSlug = `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;

  const flavorTags: FlavorTag[] = [];
  if (sim.flavorRadar.sour >= 3) flavorTags.push('柑橘系');
  if (sim.flavorRadar.sweet >= 3) flavorTags.push('甜系');
  if (sim.flavorRadar.bitter >= 2) flavorTags.push('苦系');
  if (sim.flavorRadar.strong >= 3) flavorTags.push('烈酒感');
  if (sim.flavorRadar.fruity >= 3) flavorTags.push('果香系');
  if (sim.flavorRadar.herbal >= 3) flavorTags.push('草本系');
  if (flavorTags.length === 0) flavorTags.push('清爽系');

  const normalizedGlass: GlassType = glass.includes('高球')
    ? '高球杯 / Highball Glass'
    : glass.includes('古典')
    ? '古典杯 / Rocks Glass'
    : glass.includes('飓风')
    ? '飓风杯 / Hurricane Glass'
    : glass.includes('尼克诺拉')
    ? '尼克诺拉杯 / Nick & Nora Glass'
    : glass.includes('马天尼')
    ? '马天尼杯 / Martini Glass'
    : '碟形香槟杯 / Coupe Glass';

  return {
    id: customSlug,
    slug: customSlug,
    name: recipeNameZh,
    nameEn: recipeNameEn,
    category: 'contemporary',
    categoryZh: '智能特调实验作',
    ibaCategory: 'New Era Drinks',
    isIbaCertified: false,
    baseSpirit: (base.id.includes('gin') ? 'Gin' : base.id.includes('whiskey') ? 'Whiskey' : base.id.includes('rum') ? 'Rum' : base.id.includes('vodka') ? 'Vodka' : 'Tequila') as any,
    baseSpiritZh: base.name.split(' / ')[0],
    abv: sim.finishedAbv,
    difficulty: 'medium',
    difficultyZh: '中等',
    glass: normalizedGlass,
    garnish: garnishName,
    ice: '方冰 / 纯净老冰',
    technique: technique as any,
    techniqueZh: techniqueZh,
    flavorProfiles: flavorTags,
    flavorRadar: sim.flavorRadar,
    description: description,
    story: `${story} 调酒师特别提示：${sim.bartenderTips[0] || ''}`,
    proTips: sim.bartenderTips,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    ingredients: ingredientsList.map(i => ({
      name: i.name,
      amountMl: i.amountMl,
      rawId: i.rawId
    })),
    steps: instructions
  };
}

function scoreVibeMatch(recipe: Recipe, vibe: string): number {
  let score = 50;
  const lowerBase = (recipe.baseSpirit || '').toLowerCase();
  
  if (vibe === 'craft-speakeasy') {
    // 复古地下酒吧：偏好烈度高、搅拌法、威士忌/金酒/白兰地、经典苦甜
    if (recipe.technique === 'Stir') score += 30;
    if (lowerBase.includes('whiskey') || lowerBase.includes('gin') || lowerBase.includes('brandy')) score += 25;
    if (recipe.abv >= 20) score += 20;
    if (recipe.isIbaCertified) score += 15;
  } else if (vibe === 'summer-tropical') {
    // 夏日海滩热带：偏好朗姆/龙舌兰、果香/柑橘系、摇荡法/冰沙、高球/飓风杯
    if (lowerBase.includes('rum') || lowerBase.includes('tequila')) score += 30;
    if (recipe.flavorProfiles?.includes('果香系') || recipe.flavorProfiles?.includes('柑橘系') || recipe.flavorProfiles?.includes('清爽系')) score += 25;
    if (recipe.glass?.includes('飓风') || recipe.glass?.includes('高球')) score += 15;
  } else if (vibe === 'low-abv-chill') {
    // 微醺低度沙龙：偏好低度数、苏打气泡、清爽
    if (recipe.abv <= 15) score += 35;
    if (recipe.flavorProfiles?.includes('清爽系') || recipe.flavorProfiles?.includes('柑橘系')) score += 25;
    if (recipe.technique === 'Build') score += 15;
  } else if (vibe === 'high-energy-party') {
    // 先锋狂欢派对：偏好伏特加/龙舌兰、流行经典、高能量
    if (lowerBase.includes('vodka') || lowerBase.includes('tequila')) score += 25;
    if (recipe.category === 'competition' || recipe.category === 'new-era') score += 20;
    if (recipe.abv >= 15) score += 15;
  }
  return score;
}

/**
 * 【功能3】智能派对酒单生成器 (优先采用已有原料100%匹配的经典配方，不足时由特调引擎智能补齐)
 */
export function generateSmartPartyMenu(
  inventoryIds: string[],
  targetCount: number = 4,
  allowAiSynthesize: boolean = true,
  partyVibe: string = 'craft-speakeasy'
): Recipe[] {
  const inventorySet = new Set(inventoryIds);

  // 1. 查找原料 100% 匹配的经典配方
  const matchedClassics = RECIPES_DATABASE.filter(r => {
    const needed = r.ingredients.filter(i => !i.isGarnish && i.rawId).map(i => i.rawId as string);
    return needed.length > 0 && needed.every(id => inventorySet.has(id));
  });

  // 按照派对基调契合度与随机性加权排序
  const sortedClassics = [...matchedClassics].sort((a, b) => {
    const diff = scoreVibeMatch(b, partyVibe) - scoreVibeMatch(a, partyVibe);
    if (diff !== 0) return diff + (Math.random() * 10 - 5);
    return Math.random() - 0.5;
  });

  // 优先选取匹配的经典酒谱
  const selectedMenu: Recipe[] = [...sortedClassics.slice(0, targetCount)];

  // 2. 如果匹配到的经典酒谱不足，且允许 AI 智能特调合成，则使用不同架构随机补齐
  if (selectedMenu.length < targetCount && allowAiSynthesize) {
    const neededCount = targetCount - selectedMenu.length;
    const styles: Array<MixologyPreferences['style']> = randomShuffle(['sour', 'highball', 'spirit-forward', 'tiki', 'smash', 'equal-parts']);
    const aromaList: Array<MixologyPreferences['aromaPreference']> = randomShuffle(['citrus', 'fruity', 'herbal', 'smoky', 'floral', 'bittersweet']);

    for (let i = 0; i < neededCount; i++) {
      const targetStyle = styles[i % styles.length];
      const targetAroma = aromaList[i % aromaList.length];
      const customDrink = synthesizeCocktail(inventoryIds, {
        targetAbvRange: i % 2 === 0 ? 'medium' : 'low',
        aromaPreference: targetAroma,
        style: targetStyle,
        partyVibe: partyVibe
      });
      selectedMenu.push(customDrink);
    }
  }

  return selectedMenu;
}

