import React, { useState, useEffect, useMemo } from 'react';
import { INGREDIENTS_DATABASE } from '../data/ingredients';
import { RECIPES_DATABASE } from '../data/recipes';
import type { Ingredient, Recipe } from '../types/cocktail';
import FlavorRadar from './FlavorRadar';
import ChibiGlassIcon from './ChibiGlassIcon';
import BarModeModal from './BarModeModal';
import { 
  simulateCustomCocktail, 
  synthesizeCocktail, 
  generateSmartPartyMenu,
  TECHNIQUE_CONFIGS,
  type FlavorSimulationResult,
  type MixologyPreferences 
} from '../utils/mixologyEngine';
import { 
  Sparkles, FlaskConical, Sliders, Wand2, PartyPopper, Plus, Trash2, 
  RotateCcw, CheckCircle2, AlertCircle, Share2, Download, Play, 
  ChevronRight, ArrowRight, Layers, Flame, Compass, RefreshCw, Bookmark,
  Wine, GlassWater, Info, BookOpen
} from 'lucide-react';

interface CustomIngredientItem {
  id: string;
  name: string;
  amountMl: number;
}

export default function MixologyLab() {
  const [activeTab, setActiveTab] = useState<'custom' | 'synthesizer' | 'party-menu'>('custom');

  // --- Tab 1 State: Custom Recipe Creator & Flavor Simulator ---
  const [customItems, setCustomItems] = useState<CustomIngredientItem[]>([
    { id: 'gin', name: '金酒 / 杜松子酒', amountMl: 45 },
    { id: 'fresh-lemon-juice', name: '新鲜柠檬汁', amountMl: 20 },
    { id: 'simple-syrup', name: '经典单倍纯糖浆 (1:1)', amountMl: 15 }
  ]);
  const [customTechnique, setCustomTechnique] = useState<string>('shake');
  const [customGlass, setCustomGlass] = useState<string>('蝶形香槟杯 (Coupe)');
  const [customRecipeName, setCustomRecipeName] = useState<string>('金酒阳光特调 (Gin Sunshine)');
  const [selectedIngredientToAdd, setSelectedIngredientToAdd] = useState<string>('cointreau');

  // --- Tab 2 State: Smart AI Mixology Synthesizer ---
  const [inventoryIds, setInventoryIds] = useState<string[]>([]);
  const [targetAbv, setTargetAbv] = useState<MixologyPreferences['targetAbvRange']>('medium');
  const [aromaPref, setAromaPref] = useState<MixologyPreferences['aromaPreference']>('citrus');
  const [stylePref, setStylePref] = useState<MixologyPreferences['style']>('sour');
  const [synthesizedRecipe, setSynthesizedRecipe] = useState<Recipe | null>(null);
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);

  // --- Tab 3 State: Smart Party Menu Generator ---
  const [partyCount, setPartyCount] = useState<number>(4);
  const [partyVibe, setPartyVibe] = useState<string>('craft-speakeasy');
  const [allowAiFill, setAllowAiFill] = useState<boolean>(true);
  const [generatedMenu, setGeneratedMenu] = useState<Recipe[]>([]);
  const [showExportSuccess, setShowExportSuccess] = useState<boolean>(false);

  // Hands-free Bar Mode Modal state
  const [barModeRecipe, setBarModeRecipe] = useState<Recipe | null>(null);
  const [savedSuccessMsg, setSavedSuccessMsg] = useState<string>('');

  // Load Inventory from LocalStorage on mount
  useEffect(() => {
    try {
      const savedInv = localStorage.getItem('elixir_my_bar_selected_ids');
      if (savedInv) {
        setInventoryIds(JSON.parse(savedInv));
      } else {
        setInventoryIds(['gin', 'rum-white', 'fresh-lemon-juice', 'fresh-lime-juice', 'simple-syrup', 'tonic-water', 'club-soda', 'orange-peel']);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // --- Tab 1 Calculations: Real-time Flavor Simulation ---
  const simulationResult: FlavorSimulationResult = useMemo(() => {
    return simulateCustomCocktail(customItems, customTechnique, customGlass);
  }, [customItems, customTechnique, customGlass]);

  const handleUpdateAmount = (index: number, newAmount: number) => {
    setCustomItems(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], amountMl: Math.max(0, Math.min(250, newAmount)) };
      return copy;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCustomItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleAddIngredient = () => {
    const dbIng = INGREDIENTS_DATABASE.find(i => i.id === selectedIngredientToAdd);
    if (!dbIng) return;

    if (customItems.some(item => item.id === dbIng.id)) {
      alert('该配料已在列表中，请直接调整毫升数。');
      return;
    }

    setCustomItems(prev => [
      ...prev,
      { id: dbIng.id, name: dbIng.name, amountMl: dbIng.category === 'bitters' ? 2 : 15 }
    ]);
  };

  // Convert Tab 1 custom formula to full Recipe object for Bar Mode or Party Menu
  const currentCustomAsRecipe = useMemo<Recipe>(() => {
    const slug = `custom-lab-${Date.now().toString(36)}`;
    return {
      id: slug,
      slug: slug,
      name: customRecipeName || '私房自创特调',
      nameEn: 'Custom Artisan Creation',
      category: 'contemporary',
      categoryZh: '自创私房特调',
      ibaCategory: 'New Era Drinks',
      isIbaCertified: false,
      baseSpirit: 'Gin',
      baseSpiritZh: '特调基底',
      abv: simulationResult.finishedAbv,
      difficulty: 'medium',
      glass: customGlass,
      garnish: '新鲜橙皮 / 柠檬 Twist',
      technique: customTechnique as any,
      techniqueZh: simulationResult.techniqueZh,
      flavorProfiles: simulationResult.primaryNotes,
      flavorRadar: simulationResult.flavorRadar,
      description: simulationResult.critique,
      story: `【特调实验室推演】${simulationResult.balanceLabel}，适饮酒精度约 ${simulationResult.finishedAbv}% ABV。`,
      ingredients: customItems.map(i => ({
        name: i.name,
        amountMl: i.amountMl,
        rawId: i.id
      })),
      instructions: [
        `将全部配料依序量取注入${customTechnique === 'shake' ? '雪克壶' : customTechnique === 'stir' ? '调酒搅拌杯' : '杯中'}。`,
        simulationResult.bartenderTips[0] || '加入坚硬老冰块，依照技法要领进行规范调制。',
        `滤入预先冰镇好的 ${customGlass} 中，饰以果皮或香草即可享用。`
      ],
      colorScheme: 'from-amber-900 to-obsidian-950'
    };
  }, [customItems, customTechnique, customGlass, customRecipeName, simulationResult]);

  // Tab 2: Trigger AI Synthesize
  const handleSynthesize = () => {
    setIsSynthesizing(true);
    setTimeout(() => {
      const generated = synthesizeCocktail(inventoryIds, {
        targetAbvRange: targetAbv,
        aromaPreference: aromaPref,
        style: stylePref
      });
      setSynthesizedRecipe(generated);
      setIsSynthesizing(false);
    }, 450);
  };

  // Tab 3: Trigger Smart Party Menu Generator
  const handleGeneratePartyMenu = () => {
    const menu = generateSmartPartyMenu(inventoryIds, partyCount, allowAiFill, partyVibe);
    setGeneratedMenu(menu);
  };

  // Export to Party Menu Maker page
  const handleExportToPartyPoster = (menuToExport: Recipe[]) => {
    try {
      localStorage.setItem('elixir_party_menu_recipes', JSON.stringify(menuToExport));
      setShowExportSuccess(true);
      setTimeout(() => {
        window.location.href = '/party-menu';
      }, 800);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveToFavorites = (recipe: Recipe) => {
    try {
      const saved = localStorage.getItem('elixir_user_custom_recipes');
      const list: Recipe[] = saved ? JSON.parse(saved) : [];
      if (!list.some(r => r.name === recipe.name)) {
        list.push(recipe);
        localStorage.setItem('elixir_user_custom_recipes', JSON.stringify(list));
      }
      setSavedSuccessMsg(`已将「${recipe.name}」存入您的私房特调库！`);
      setTimeout(() => setSavedSuccessMsg(''), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="space-y-10 pb-20">
      
      {/* Top Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-obsidian-900 via-obsidian-850 to-purple-950/40 border border-gold-500/30 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-serif tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>AI MIXOLOGY LAB · 智能特调实验室</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100 tracking-tight">
            调配工坊与风味科学引擎
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            融合经典鸡尾酒黄金比例、流体物理稀释度推演与全感官风味仿真。支持自由配方推演、基于已有原料的智能定制配比，以及一键派对酒单生成。
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab('custom')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-serif font-medium transition-all ${
                activeTab === 'custom'
                  ? 'bg-gold-500 text-obsidian-950 shadow-lg shadow-gold-500/20 font-bold scale-[1.02]'
                  : 'bg-obsidian-950/80 text-slate-300 border border-white/10 hover:border-gold-500/40 hover:text-white'
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>1. 自创配方与风味推演</span>
            </button>

            <button
              onClick={() => setActiveTab('synthesizer')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-serif font-medium transition-all ${
                activeTab === 'synthesizer'
                  ? 'bg-gold-500 text-obsidian-950 shadow-lg shadow-gold-500/20 font-bold scale-[1.02]'
                  : 'bg-obsidian-950/80 text-slate-300 border border-white/10 hover:border-gold-500/40 hover:text-white'
              }`}
            >
              <Wand2 className="w-4 h-4" />
              <span>2. 智能特调配比生成</span>
            </button>

            <button
              onClick={() => setActiveTab('party-menu')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-serif font-medium transition-all ${
                activeTab === 'party-menu'
                  ? 'bg-gold-500 text-obsidian-950 shadow-lg shadow-gold-500/20 font-bold scale-[1.02]'
                  : 'bg-obsidian-950/80 text-slate-300 border border-white/10 hover:border-gold-500/40 hover:text-white'
              }`}
            >
              <PartyPopper className="w-4 h-4" />
              <span>3. 智能定制酒单生成</span>
            </button>
          </div>
        </div>
      </div>

      {/* Global Alert Notification */}
      {savedSuccessMsg && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{savedSuccessMsg}</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: CUSTOM RECIPE CREATOR & FLAVOR SIMULATOR */}
      {/* ========================================================================= */}
      {activeTab === 'custom' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Ingredient Builder (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-obsidian-850 border border-gold-500/20 p-6 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <Sliders className="w-5 h-5 text-gold-400" />
                  <h2 className="text-lg font-serif font-bold text-slate-100">自由配方配比调校</h2>
                </div>
                <input
                  type="text"
                  value={customRecipeName}
                  onChange={(e) => setCustomRecipeName(e.target.value)}
                  placeholder="为您的特调命名..."
                  className="bg-obsidian-950 border border-gold-500/30 rounded-lg px-3 py-1 text-xs text-gold-300 focus:outline-none focus:border-gold-400 text-right max-w-[200px]"
                />
              </div>

              {/* Ingredient List Steppers */}
              <div className="space-y-3.5">
                {customItems.map((item, idx) => (
                  <div 
                    key={`${item.id}-${idx}`}
                    className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/5 hover:border-gold-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-gold-500/10 text-gold-400 text-xs font-mono flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-200">{item.name}</p>
                        <p className="text-[11px] text-slate-400">{item.id}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <div className="flex items-center gap-1.5 bg-obsidian-950 border border-white/10 rounded-lg px-2 py-1">
                        <button
                          onClick={() => handleUpdateAmount(idx, item.amountMl - 5)}
                          className="w-6 h-6 rounded bg-obsidian-800 text-slate-300 hover:text-white flex items-center justify-center font-mono text-sm"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.amountMl}
                          onChange={(e) => handleUpdateAmount(idx, parseFloat(e.target.value) || 0)}
                          className="w-12 bg-transparent text-center text-xs font-mono font-bold text-gold-300 focus:outline-none"
                        />
                        <span className="text-[10px] text-slate-500">ml</span>
                        <button
                          onClick={() => handleUpdateAmount(idx, item.amountMl + 5)}
                          className="w-6 h-6 rounded bg-obsidian-800 text-slate-300 hover:text-white flex items-center justify-center font-mono text-sm"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(idx)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                        title="删除该配料"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Ingredient Picker */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <select
                  value={selectedIngredientToAdd}
                  onChange={(e) => setSelectedIngredientToAdd(e.target.value)}
                  className="flex-1 w-full bg-obsidian-950 border border-gold-500/30 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-gold-500"
                >
                  {INGREDIENTS_DATABASE.map(ing => (
                    <option key={ing.id} value={ing.id}>
                      [{ing.categoryZh}] {ing.name} ({ing.nameEn})
                    </option>
                  ))}
                </select>

                <button
                  onClick={handleAddIngredient}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gold-500/10 border border-gold-500/40 text-gold-300 hover:bg-gold-500/20 text-xs font-serif flex items-center justify-center gap-1.5 transition-all flex-shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>添加配料到实验台</span>
                </button>
              </div>

              {/* Technique & Glassware Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="space-y-1.5">
                  <label className="text-xs text-gold-400 font-serif block">调制技法与融冰动力学</label>
                  <select
                    value={customTechnique}
                    onChange={(e) => setCustomTechnique(e.target.value)}
                    className="w-full bg-obsidian-950 border border-white/10 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-gold-500"
                  >
                    {Object.entries(TECHNIQUE_CONFIGS).map(([key, conf]) => (
                      <option key={key} value={key}>
                        {conf.zh} - {conf.desc}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-gold-400 font-serif block">推荐适饮杯型</label>
                  <select
                    value={customGlass}
                    onChange={(e) => setCustomGlass(e.target.value)}
                    className="w-full bg-obsidian-950 border border-white/10 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-gold-500"
                  >
                    <option value="蝶形香槟杯 (Coupe)">蝶形香槟杯 (Coupe 200ml)</option>
                    <option value="古典杯 (Rocks Glass)">古典杯 (Rocks 250ml)</option>
                    <option value="高球杯 (Highball Glass)">高球杯 (Highball 330ml)</option>
                    <option value="马天尼三角杯 (Martini)">马天尼三角杯 (Martini 180ml)</option>
                    <option value="飓风杯 (Hurricane)">飓风杯 (Hurricane 450ml)</option>
                    <option value="尼克诺拉杯 (Nick & Nora)">尼克诺拉杯 (Nick & Nora 160ml)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleSaveToFavorites(currentCustomAsRecipe)}
                className="flex-1 py-3 rounded-xl bg-obsidian-850 border border-gold-500/30 text-gold-300 hover:border-gold-400 hover:bg-gold-500/10 text-xs font-serif font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Bookmark className="w-4 h-4" />
                <span>存入私房配方库</span>
              </button>

              <button
                onClick={() => setBarModeRecipe(currentCustomAsRecipe)}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-gold-500 text-obsidian-950 font-bold text-xs font-serif flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 hover:scale-[1.02] transition-all"
              >
                <Play className="w-4 h-4 fill-obsidian-950" />
                <span>开启全屏实操吧台模式</span>
              </button>
            </div>
          </div>

          {/* Right Column: Real-time Flavor Simulation Dashboard (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-obsidian-850 border border-gold-500/30 p-6 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-gold-400" />
                  <h3 className="text-base font-serif font-bold text-slate-100">全感官风味仿真与诊断</h3>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-300 font-mono">
                  实时物理计算
                </span>
              </div>

              {/* 5D Flavor Radar */}
              <div className="flex justify-center py-2">
                <FlavorRadar data={simulationResult.flavorRadar} size={220} />
              </div>

              {/* Sweet-Sour Balance Meter */}
              <div className="p-4 rounded-xl bg-obsidian-900/90 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-serif">酸甜平衡度指标</span>
                  <span className="font-bold font-serif text-gold-300">{simulationResult.balanceLabel}</span>
                </div>

                {/* Meter Bar */}
                <div className="relative h-2.5 rounded-full bg-obsidian-950 overflow-hidden border border-white/10">
                  <div 
                    className="absolute top-0 bottom-0 bg-gradient-to-r from-yellow-400 via-emerald-400 to-rose-400 transition-all duration-500"
                    style={{ width: `${simulationResult.balanceScore}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>偏酸 (Tart)</span>
                  <span>黄金平衡 1:1</span>
                  <span>偏甜 (Sweet)</span>
                </div>
              </div>

              {/* Physics Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-xl bg-obsidian-900/60 border border-white/5">
                  <p className="text-[11px] text-slate-400 font-serif">纯液容积</p>
                  <p className="text-sm font-mono font-bold text-slate-200 mt-1">{simulationResult.totalRawMl} ml</p>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-900/60 border border-white/5">
                  <p className="text-[11px] text-slate-400 font-serif">融水量</p>
                  <p className="text-sm font-mono font-bold text-blue-400 mt-1">+{simulationResult.waterDilutionMl} ml</p>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-900/60 border border-white/5">
                  <p className="text-[11px] text-slate-400 font-serif">成品 ABV</p>
                  <p className="text-sm font-mono font-bold text-gold-400 mt-1">{simulationResult.finishedAbv}%</p>
                </div>
              </div>

              {/* Bartender Sensory Critique */}
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-serif text-purple-300 font-bold">
                  <Info className="w-3.5 h-3.5 text-purple-400" />
                  <span>调酒师感官点评</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {simulationResult.critique}
                </p>
                {simulationResult.bartenderTips.length > 0 && (
                  <div className="pt-2 border-t border-purple-500/20 space-y-1">
                    {simulationResult.bartenderTips.map((tip, idx) => (
                      <p key={idx} className="text-[11px] text-amber-300/90 flex items-start gap-1.5">
                        <span>💡</span>
                        <span>{tip}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: AI SMART MIXOLOGY SYNTHESIZER */}
      {/* ========================================================================= */}
      {activeTab === 'synthesizer' && (
        <div className="space-y-8">
          <div className="rounded-2xl bg-obsidian-850 border border-gold-500/20 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-gold-400" />
                  <span>智能特调配比生成系统</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  基于您“我的吧台”中的已有原料与风味偏好，自动调用 6 大黄金比例矩阵推演全新平衡配方
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono">当前已载入原料:</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-400 font-mono font-bold">
                  {inventoryIds.length} 种
                </span>
                <a href="/my-bar" className="text-xs text-gold-400 hover:text-gold-300 underline font-serif ml-1">
                  调整库存 &rarr;
                </a>
              </div>
            </div>

            {/* In-Stock Chips Preview */}
            <div className="space-y-2">
              <label className="text-xs text-gold-400 font-serif block">可用配料池 (In-Stock Ingredients Pool)</label>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto p-2.5 rounded-xl bg-obsidian-950 border border-white/5">
                {inventoryIds.map(id => {
                  const ing = INGREDIENTS_DATABASE.find(i => i.id === id);
                  return (
                    <span key={id} className="text-[11px] px-2.5 py-1 rounded-lg bg-obsidian-900 border border-white/10 text-slate-300 flex items-center gap-1 font-mono">
                      <span>✓</span>
                      <span>{ing ? ing.name.split(' / ')[0] : id}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Parameter Selector Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* 1. Target ABV */}
              <div className="space-y-2">
                <label className="text-xs text-gold-400 font-serif block">1. 期望酒精度 (Target ABV)</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'mocktail', label: '无酒精 0%', sub: '果香清爽' },
                    { key: 'low', label: '低度 5-12%', sub: '轻盈微醺' },
                    { key: 'medium', label: '中度 13-22%', sub: '经典平衡' },
                    { key: 'high', label: '重度 23%+', sub: '浓烈饱满' }
                  ].map(item => (
                    <button
                      key={item.key}
                      onClick={() => setTargetAbv(item.key as any)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        targetAbv === item.key
                          ? 'bg-gold-500/20 border-gold-400 text-gold-200 font-bold'
                          : 'bg-obsidian-950/80 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <p className="text-xs font-serif">{item.label}</p>
                      <p className="text-[10px] text-slate-500">{item.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Aroma Preference */}
              <div className="space-y-2">
                <label className="text-xs text-gold-400 font-serif block">2. 香型基调 (Aroma Profile)</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'citrus', label: '🍋 柑橘明亮', sub: '柠檬/青柠清酸' },
                    { key: 'fruity', label: '🍹 热带果香', sub: '蜜桃/苹果/浆果' },
                    { key: 'herbal', label: '🌿 草本清冽', sub: '杜松/薄荷/迷迭香' },
                    { key: 'smoky', label: '🪵 烟熏木质', sub: '橡木/泥煤/肉桂' },
                    { key: 'floral', label: '🌸 优雅花香', sub: '接骨木/橙花' },
                    { key: 'bittersweet', label: '🍸 苦甜微醺', sub: '意式草本开胃' }
                  ].map(item => (
                    <button
                      key={item.key}
                      onClick={() => setAromaPref(item.key as any)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        aromaPref === item.key
                          ? 'bg-gold-500/20 border-gold-400 text-gold-200 font-bold'
                          : 'bg-obsidian-950/80 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <p className="text-xs font-serif">{item.label}</p>
                      <p className="text-[10px] text-slate-500">{item.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Mixology Architecture Style */}
              <div className="space-y-2">
                <label className="text-xs text-gold-400 font-serif block">3. 调配架构 (Mixology Style)</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'sour', label: '🍋 酸甜天平 (Sour)', sub: '2:1:1 经典架构' },
                    { key: 'highball', label: '🫧 长饮高球 (Highball)', sub: '气泡升腾畅饮' },
                    { key: 'spirit-forward', label: '🥃 重烈搅拌 (Stirred)', sub: '丝滑深沉挂杯' },
                    { key: 'tiki', label: '🏝️ 热带潘趣 (Tiki)', sub: '多重果汁复调' },
                    { key: 'equal-parts', label: '⚖️ 等比四面体 (1:1:1)', sub: '结构严密平衡' },
                    { key: 'smash', label: '🌿 鲜果捣压 (Smash)', sub: '薄荷爆汁清香' }
                  ].map(item => (
                    <button
                      key={item.key}
                      onClick={() => setStylePref(item.key as any)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        stylePref === item.key
                          ? 'bg-gold-500/20 border-gold-400 text-gold-200 font-bold'
                          : 'bg-obsidian-950/80 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <p className="text-xs font-serif">{item.label}</p>
                      <p className="text-[10px] text-slate-500">{item.sub}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Synthesize Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={handleSynthesize}
                disabled={isSynthesizing}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-gold-500 via-amber-400 to-gold-500 text-obsidian-950 font-serif font-bold text-sm flex items-center gap-2.5 shadow-xl shadow-gold-500/25 hover:scale-105 active:scale-95 transition-all"
              >
                {isSynthesizing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>智能推演调配中...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    <span>✨ 智能推演生成全新专属特调</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generated Recipe Presentation Card */}
          {synthesizedRecipe && (
            <div className="rounded-3xl bg-gradient-to-br from-obsidian-900 via-obsidian-850 to-amber-950/20 border border-gold-500/40 p-6 sm:p-10 space-y-8 shadow-2xl animate-fadeIn relative">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-white/10 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-serif mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI 智能特调专属配方</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
                    {synthesizedRecipe.name}
                  </h3>
                  <p className="text-xs text-gold-400 font-sans tracking-wide mt-1">
                    {synthesizedRecipe.nameEn} · {synthesizedRecipe.techniqueZh}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1.5 rounded-xl bg-obsidian-950 border border-gold-500/30 text-gold-300 font-mono text-xs">
                    ABV ~{synthesizedRecipe.abv}%
                  </span>
                  <button
                    onClick={() => handleSaveToFavorites(synthesizedRecipe)}
                    className="p-2.5 rounded-xl bg-obsidian-950 border border-gold-500/30 text-gold-300 hover:text-white hover:border-gold-400 transition-colors"
                    title="存入我的配方库"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setBarModeRecipe(synthesizedRecipe)}
                    className="px-4 py-2 rounded-xl bg-gold-500 text-obsidian-950 font-serif font-bold text-xs flex items-center gap-1.5 shadow-md hover:scale-105 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-obsidian-950" />
                    <span>吧台实操</span>
                  </button>
                </div>
              </div>

              {/* Recipe Body: Ingredients & Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Ingredients & Glassware */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-gold-400">
                      调配原料与精准规格
                    </h4>
                    <div className="space-y-2">
                      {synthesizedRecipe.ingredients.map((ing, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-obsidian-950/80 border border-white/5 text-xs">
                          <span className="text-slate-200 font-medium">{ing.name}</span>
                          <span className="font-mono font-bold text-gold-300">{ing.amountMl} ml</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-obsidian-950/60 border border-white/5 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-serif">推荐杯型</span>
                      <span className="text-slate-200 font-medium">{synthesizedRecipe.glass}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-serif">装饰点缀</span>
                      <span className="text-gold-400 font-medium">{synthesizedRecipe.garnish}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Step-by-Step Procedure */}
                <div className="space-y-3">
                  <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-gold-400">
                    分步制作手法与要领
                  </h4>
                  <div className="space-y-3">
                    {synthesizedRecipe.instructions.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-300">
                        <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 font-mono text-[11px] flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="flex-1 font-sans">{step}</p>
                      </div>
                    ))}
                  </div>

                  {/* Flavor Notes */}
                  <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-1.5 text-xs">
                    <span className="text-purple-300 font-serif font-bold">✨ 风味意境</span>
                    <p className="text-slate-300 leading-relaxed">{synthesizedRecipe.story}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: SMART CUSTOM PARTY MENU GENERATOR */}
      {/* ========================================================================= */}
      {activeTab === 'party-menu' && (
        <div className="space-y-8">
          <div className="rounded-2xl bg-obsidian-850 border border-gold-500/20 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
                <PartyPopper className="w-5 h-5 text-gold-400" />
                <span>智能派对酒单生成与无缝海报输出</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                根据您的已有原料与聚会氛围定制完整酒单；若经典配方不足，将由智能特调引擎生成专属特调无缝补齐。
              </p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Menu Count */}
              <div className="space-y-2">
                <label className="text-xs text-gold-400 font-serif block">酒单项目数目</label>
                <div className="flex items-center gap-2">
                  {[3, 4, 5, 6].map(num => (
                    <button
                      key={num}
                      onClick={() => setPartyCount(num)}
                      className={`flex-1 py-2 rounded-xl border text-xs font-mono font-bold transition-all ${
                        partyCount === num
                          ? 'bg-gold-500 text-obsidian-950 border-gold-400'
                          : 'bg-obsidian-950 text-slate-400 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {num} 款
                    </button>
                  ))}
                </div>
              </div>

              {/* Party Vibe */}
              <div className="space-y-2">
                <label className="text-xs text-gold-400 font-serif block">派对聚会基调</label>
                <select
                  value={partyVibe}
                  onChange={(e) => setPartyVibe(e.target.value)}
                  className="w-full bg-obsidian-950 border border-white/10 rounded-xl p-2 text-xs text-slate-200 focus:outline-none focus:border-gold-500"
                >
                  <option value="craft-speakeasy">🍸 复古绅士地下酒吧 (Craft Speakeasy)</option>
                  <option value="summer-tropical">🏝️ 夏日海滩热带狂欢 (Tropical Vibe)</option>
                  <option value="low-abv-chill">🌿 轻松微醺低度沙龙 (Low-ABV Chill)</option>
                  <option value="high-energy-party">⚡ 极客狂欢先锋派对 (Neon Midnight)</option>
                </select>
              </div>

              {/* AI Auto-fill Prompt Switch */}
              <div className="space-y-2">
                <label className="text-xs text-gold-400 font-serif block">智能特调引擎补齐</label>
                <label className="flex items-center gap-2.5 p-2 rounded-xl bg-obsidian-950 border border-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowAiFill}
                    onChange={(e) => setAllowAiFill(e.target.checked)}
                    className="rounded border-gold-500/50 text-gold-500 focus:ring-gold-500"
                  />
                  <span className="text-xs text-slate-300 font-serif">
                    允许 AI 自动生成独家特调补齐
                  </span>
                </label>
              </div>
            </div>

            <div className="pt-2 flex justify-center">
              <button
                onClick={handleGeneratePartyMenu}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-gold-500 to-amber-500 text-obsidian-950 font-serif font-bold text-sm flex items-center gap-2 shadow-xl shadow-gold-500/20 hover:scale-105 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>生成专属派对酒单 (Generate Menu)</span>
              </button>
            </div>
          </div>

          {/* Generated Menu List Preview */}
          {generatedMenu.length > 0 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-100">
                    已生成的派对酒单 ({generatedMenu.length} 款)
                  </h3>
                  <p className="text-xs text-slate-400">已针对口感递进（从轻饮到浓郁）完成智能编排</p>
                </div>

                <button
                  onClick={() => handleExportToPartyPoster(generatedMenu)}
                  disabled={showExportSuccess}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-serif font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/30 hover:scale-105 transition-all"
                >
                  {showExportSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>正在跳转海报制作器...</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>🚀 一键导入派对海报生成器 (/party-menu)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Grid of menu cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {generatedMenu.map((item, idx) => (
                  <div 
                    key={item.id}
                    className="p-5 rounded-2xl bg-obsidian-850 border border-gold-500/20 space-y-4 hover:border-gold-500/50 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-6 h-6 rounded-full bg-gold-500/10 text-gold-400 text-xs font-mono font-bold flex items-center justify-center">
                          0{idx + 1}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 font-mono">
                          ABV {item.abv}%
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <ChibiGlassIcon 
                          glassType={item.glass} 
                          liquidTheme={item.baseSpirit?.toLowerCase().includes('gin') ? 'emerald' : 'amber'}
                          size={36} 
                        />
                        <div>
                          <h4 className="text-sm font-serif font-bold text-slate-100">{item.name}</h4>
                          <p className="text-[11px] text-gold-400/80">{item.nameEn}</p>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{item.techniqueZh}</span>
                      <button
                        onClick={() => setBarModeRecipe(item)}
                        className="text-gold-400 hover:text-gold-300 font-serif flex items-center gap-1"
                      >
                        <span>实操</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Hands-Free Bar Mode Modal */}
      {barModeRecipe && (
        <BarModeModal 
          recipe={barModeRecipe}
          isOpen={true}
          onClose={() => setBarModeRecipe(null)}
        />
      )}

    </div>
  );
}
