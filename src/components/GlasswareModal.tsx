import React, { useState } from 'react';
import { X, Wine, Sparkles, Snowflake, Info, ShieldCheck, Thermometer, ChevronRight } from 'lucide-react';
import ChibiGlassIcon, { type ChibiGlassVariant } from './ChibiGlassIcon';

interface GlasswareItem {
  id: ChibiGlassVariant;
  nameZh: string;
  nameEn: string;
  capacity: string;
  era: string;
  recommendedTemp: string;
  visualSummary: string;
  lore: string;
  aerationAromaNote: string;
  classicCocktails: string[];
}

export const GLASSWARE_LORE_DATABASE: GlasswareItem[] = [
  {
    id: 'martini',
    nameZh: 'V形马天尼杯',
    nameEn: 'Martini Glass (V-Shape Cocktail Glass)',
    capacity: '120 - 180 ml (4 - 6 oz)',
    era: '1925 巴黎现代工业与装饰艺术博览会 (Art Deco)',
    recommendedTemp: '-18°C 冰箱深冻冷藏 15 分钟',
    visualSummary: '锐利的 60 度倒三角几何切线与极细纤长杯梗',
    lore: '诞生于 1920 年代 Art Deco 几何美学鼎盛期。超宽的敞口不仅能最大程度将杜松子与苦艾酒的挥发性草本精油送入鼻腔，陡峭的杯壁还能防止摇荡冷藏后的酒体升温过快（手指仅接触高杯梗）。',
    aerationAromaNote: '敞口极宽，极度适合香气清冽、无气泡的烈度短饮 (Up Drinks)。',
    classicCocktails: ['经典干马天尼 (Dry Martini)', '大都会 (Cosmopolitan)', '红粉佳人 (Pink Lady)', '苹果马天尼 (Appletini)']
  },
  {
    id: 'coupe',
    nameZh: '碟形香槟杯 / 浅碟鸡尾酒杯',
    nameEn: 'Coupe Glass (Champagne Saucer)',
    capacity: '150 - 220 ml (5 - 7.5 oz)',
    era: '17 世纪英国 / 18 世纪法国宫廷',
    recommendedTemp: '-15°C ~ -18°C 冷冻',
    visualSummary: '圆润微收弧形杯口与古典宫廷高脚杯柱',
    lore: '相传最初依照法王路易十六王后玛丽·安托瓦内特的胸部弧线定制（亦有传说为蓬巴杜夫人）。进入 21 世纪现代经典调酒复兴（Craft Cocktail Renaissance）后，因其优雅圆润的弧线和更不易洒液的重心，全面取代 V 形杯成为现代鸡尾酒大奖赛的首选。',
    aerationAromaNote: '弧形内收使果酸与柑橘精油聚拢，口感更显丝滑饱满。',
    classicCocktails: ['飞行 (Aviation)', '边车 (Sidecar)', '得其利 (Daiquiri)', '三叶草俱乐部 (Clover Club)', '纸飞机 (Paper Plane)']
  },
  {
    id: 'nick-nora',
    nameZh: '尼克与诺拉杯',
    nameEn: 'Nick & Nora Glass',
    capacity: '130 - 160 ml (4.5 - 5.5 oz)',
    era: '1934 禁酒令后好莱坞侦探名作《瘦子 (The Thin Man)》',
    recommendedTemp: '-18°C 冷冻 10 分钟',
    visualSummary: '介于马天尼杯与白兰地郁金香杯之间的微缩深钟形',
    lore: '得名自好莱坞经典悬疑喜剧《瘦子》中的侦探夫妇 Nick 和 Nora Charles（两人在电影中破案时几乎手不离酒）。由鸡尾酒复兴教父 Dale DeGroff 与 Audrey Saunders 大力推崇，比 V 形杯更聚香且不易在敬酒时倾洒。',
    aerationAromaNote: '深底微敛杯口，是 Stir 搅拌流派干邑与曼哈顿系的最佳归宿。',
    classicCocktails: ['曼哈顿 (Manhattan)', '布鲁克林 (Brooklyn)', '竹 (Bamboo)', '老朋友 (Old Pal)']
  },
  {
    id: 'rocks',
    nameZh: '古典杯 / 低球杯 / 威士忌杯',
    nameEn: 'Rocks / Old Fashioned / Lowball Glass',
    capacity: '200 - 300 ml (7 - 10 oz)',
    era: '19 世纪美洲西部酒吧与经典俱乐部',
    recommendedTemp: '搭配 -15°C 纯透明老冰块 (Clear Hand-carved Ice)',
    visualSummary: '加厚实心重底、直壁圆柱或微锥形厚重手感',
    lore: '沉重厚实的加厚底部专为调制时用捣棒（Muddler）在杯底直接压碎方糖和苦精而设计。极佳的手感重量和宽阔杯口可容纳 5cm 巨型手凿透明老冰块，融水极慢，经久耐饮。',
    aerationAromaNote: '宽阔的顶部空间让橡木桶香草、烟熏泥煤与橙皮精油充分舒展。',
    classicCocktails: ['老式鸡尾酒 (Old Fashioned)', '尼格罗尼 (Negroni)', '盘尼西林 (Penicillin)', '教父 (Godfather)', '花花公子 (Boulevardier)']
  },
  {
    id: 'highball',
    nameZh: '高球杯 / 柯林杯',
    nameEn: 'Highball & Collins Glass',
    capacity: '300 - 400 ml (10 - 14 oz)',
    era: '1890s 英国铁路与纽约高球热潮',
    recommendedTemp: '满杯柱状冰或长条冰 (Ice Spear)',
    visualSummary: '修长垂直筒状设计，最小化气泡溢散表面积',
    lore: 'Highball 得名自 19 世纪铁路时代“信号球高挂（High Ball）代表全速前进”。狭长高挑的杯身能有效限制二氧化碳气泡的逃逸路径，使苏打水、汤力水和姜啤的气泡持久刺舌爆破。',
    aerationAromaNote: '随着密集微气泡持续上升，将草本与果香源源不断带至鼻腔。',
    classicCocktails: ['金汤力 (Gin & Tonic)', '莫吉托 (Mojito)', '长岛冰茶 (Long Island)', '莫斯科骡子 (Moscow Mule)', '约翰柯林 (John Collins)']
  },
  {
    id: 'copper-mug',
    nameZh: '纯铜莫斯科骡子马克杯',
    nameEn: 'Solid Copper Mule Mug',
    capacity: '350 - 450 ml (12 - 16 oz)',
    era: '1941 洛杉矶 Cock \'n\' Bull 酒馆',
    recommendedTemp: '注入碎冰后 3 秒迅速结满外部白霜',
    visualSummary: '拉丝或锤纹纯铜杯身，配黄铜或铜铸手柄',
    lore: '1941 年伏特加皇冠（Smirnoff）、自制姜啤与滞销铜杯商人的天才联名产物。铜拥有极高的导热系数，碎冰与青柠汁注入后，杯外壁瞬间凝结厚厚白霜，唇部触碰时带来无可比拟的金属冰感冲击。',
    aerationAromaNote: '铜离子对酸度有极其微妙的金属圆润催化，极大增强姜汁辛辣爽感。',
    classicCocktails: ['莫斯科骡子 (Moscow Mule)', '伦敦骡子 (London Mule)', '肯塔基骡子 (Kentucky Mule)']
  },
  {
    id: 'hurricane',
    nameZh: '飓风杯 / 热带 Tiki 杯',
    nameEn: 'Hurricane Glass',
    capacity: '450 - 600 ml (15 - 20 oz)',
    era: '1940s 新奥尔良 Pat O\'Brien\'s 酒吧',
    recommendedTemp: '满填满溢的碎冰 (Crushed Pebble Ice)',
    visualSummary: '如同古董飓风煤油灯般优雅外放内敛的波浪曲线',
    lore: '外形酷似新奥尔良抵御风暴时使用的飓风煤油灯（Hurricane Lamp）。专为高容量、多朗姆混合、鲜榨热带果汁与大量碎冰的 Tiki 狂欢派对设计，通常搭配纸伞、凤梨叶和肉桂烟熏棒装饰。',
    aerationAromaNote: '超大容量能承载复杂的多重热带果酯（百香果/菠萝/椰浆/杏仁）复合香气。',
    classicCocktails: ['飓风 (Hurricane)', '迈泰 (Mai Tai)', '椰林飘香 (Piña Colada)', '新加坡司令 (Singapore Sling)']
  }
];

interface GlasswareModalProps {
  currentGlassName?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function GlasswareModal({ currentGlassName = '', isOpen, onClose }: GlasswareModalProps) {
  const [selectedId, setSelectedId] = useState<ChibiGlassVariant>(() => {
    const g = currentGlassName.toLowerCase();
    if (g.includes('马天尼') || g.includes('martini')) return 'martini';
    if (g.includes('古典') || g.includes('rocks')) return 'rocks';
    if (g.includes('高球') || g.includes('highball') || g.includes('柯林')) return 'highball';
    if (g.includes('铜') || g.includes('copper') || g.includes('mule')) return 'copper-mug';
    if (g.includes('飓风') || g.includes('hurricane') || g.includes('tiki')) return 'hurricane';
    if (g.includes('尼克') || g.includes('nick')) return 'nick-nora';
    return 'coupe';
  });

  if (!isOpen) return null;

  const currentItem = GLASSWARE_LORE_DATABASE.find(g => g.id === selectedId) || GLASSWARE_LORE_DATABASE[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-obsidian-900 border border-gold-500/30 shadow-gold-glow-lg overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gold-500/20 bg-obsidian-850">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
              <Wine className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-slate-100">
                鸡尾酒杯型美学与品饮物理微百科
              </h2>
              <p className="text-xs text-gold-400/80 font-sans">
                Glassware Lore, Ergonomics & Temperature Physics
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-obsidian-950 hover:bg-obsidian-800 border border-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Left Tabs / Right Details */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
          
          {/* Left Column: Glass Type List */}
          <div className="md:col-span-4 border-r border-gold-500/10 p-3 space-y-1.5 bg-obsidian-950/50">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1 block">
              7 大经典杯型名录
            </span>

            {GLASSWARE_LORE_DATABASE.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center gap-3 ${
                    isSelected
                      ? 'bg-gold-500/15 border-gold-500/50 text-gold-300 shadow-sm font-semibold'
                      : 'bg-obsidian-900/60 border-white/5 text-slate-300 hover:border-gold-500/25 hover:bg-obsidian-850'
                  }`}
                >
                  <ChibiGlassIcon variant={item.id} size={32} />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-serif truncate">{item.nameZh}</div>
                    <div className="text-[10px] text-slate-500 truncate">{item.capacity}</div>
                  </div>
                  {isSelected && <ChevronRight className="w-4 h-4 text-gold-400" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Lore, History, Chilling & Aeration Physics */}
          <div className="md:col-span-8 p-6 space-y-6 overflow-y-auto">
            
            {/* Title & Big Icon Showcase */}
            <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-obsidian-850 border border-gold-500/20">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-300 text-[11px] font-mono">
                  <Sparkles className="w-3 h-3 text-gold-400" />
                  <span>诞生时期: {currentItem.era}</span>
                </div>
                <h3 className="text-xl font-serif font-black text-slate-100">
                  {currentItem.nameZh}
                </h3>
                <p className="text-xs text-gold-400 font-mono">
                  {currentItem.nameEn}
                </p>
                <div className="text-xs text-slate-300 pt-1">
                  <strong>容量标准：</strong>{currentItem.capacity}
                </div>
              </div>

              <div className="p-2 rounded-xl bg-obsidian-950 border border-gold-500/30 flex-shrink-0">
                <ChibiGlassIcon variant={currentItem.id} size={70} />
              </div>
            </div>

            {/* Lore Story */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gold-400 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                <span>杯型起源与设计美学典故</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify bg-obsidian-950/60 p-4 rounded-xl border border-white/5">
                {currentItem.lore}
              </p>
            </div>

            {/* Temperature & Aeration Physics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-1.5">
                <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                  <Snowflake className="w-3.5 h-3.5 text-cyan-400" />
                  <span>预冷与控温规范</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {currentItem.recommendedTemp}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-1.5">
                <div className="font-semibold text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>香气聚拢与口感动力学</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {currentItem.aerationAromaNote}
                </p>
              </div>
            </div>

            {/* Classic Cocktails Suitable */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                代表性经典作品：
              </span>
              <div className="flex flex-wrap gap-2">
                {currentItem.classicCocktails.map((cocktail, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-obsidian-850 border border-gold-500/20 text-gold-300 font-medium"
                  >
                    🍸 {cocktail}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Footer Close */}
        <div className="px-6 py-3.5 border-t border-gold-500/20 bg-obsidian-850 flex items-center justify-between text-xs text-slate-400">
          <span>💡 提示：在配方页面随时点击杯具标签即可调出本百科</span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold transition-colors"
          >
            我知道了
          </button>
        </div>

      </div>
    </div>
  );
}
