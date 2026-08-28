import React, { useState, useEffect, useMemo } from 'react';
import { INGREDIENTS_DATABASE } from '../data/ingredients';
import { RECIPES_DATABASE } from '../data/recipes';
import RecipeCard from './RecipeCard';
import { 
  Sparkles, Wine, AlertCircle, Trash2, CheckCircle2, 
  Search, Lightbulb, Check, X, Layers, CheckSquare, Square
} from 'lucide-react';
import type { Recipe, Ingredient, IngredientSubstitute } from '../types/cocktail';

export default function MyBarCabinet() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'ready' | 'with-substitutes' | 'missing-one'>('ready');
  const [searchFilter, setSearchFilter] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('elixir_my_bar_selected_ids');
      if (saved) {
        setSelectedIds(JSON.parse(saved));
      } else {
        // Default popular starter set
        setSelectedIds(['gin', 'rum-white', 'fresh-lemon-juice', 'fresh-lime-juice', 'simple-syrup', 'tonic-water', 'club-soda']);
      }
    } catch (e) {
      console.error(e);
    }
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage
  const handleToggleIngredient = (id: string) => {
    setSelectedIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('elixir_my_bar_selected_ids', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const handleSelectPreset = (ids: string[]) => {
    setSelectedIds(ids);
    try {
      localStorage.setItem('elixir_my_bar_selected_ids', JSON.stringify(ids));
    } catch (e) {
      console.error(e);
    }
  };

  const handleClearAll = () => {
    setSelectedIds([]);
    try {
      localStorage.removeItem('elixir_my_bar_selected_ids');
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleShelfAll = (tierIngredients: Ingredient[]) => {
    const tierIds = tierIngredients.map(i => i.id);
    const allSelected = tierIds.every(id => selectedIds.includes(id));

    let updated: string[];
    if (allSelected) {
      // Remove all tier ingredients
      updated = selectedIds.filter(id => !tierIds.includes(id));
    } else {
      // Add all missing tier ingredients
      const toAdd = tierIds.filter(id => !selectedIds.includes(id));
      updated = [...selectedIds, ...toAdd];
    }

    setSelectedIds(updated);
    try {
      localStorage.setItem('elixir_my_bar_selected_ids', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Group ingredients into architectural shelf tiers with icons
  const shelfTiers = [
    { key: 'base-spirit', label: '六大基酒层板 (Base Spirits Tier)', icon: '🥃' },
    { key: 'liqueur', label: '利口酒与配制酒层 (Liqueurs & Fortified Wines)', icon: '🍸' },
    { key: 'juice', label: '鲜榨果汁与酸味剂层 (Fresh Juices & Sours)', icon: '🍋' },
    { key: 'syrup', label: '手工糖浆与调味剂层 (Syrups & Sweeteners)', icon: '🍯' },
    { key: 'garnish', label: '鲜果皮与香草装饰层 (Fresh Garnishes & Zest)', icon: '🍊' },
    { key: 'mixer', label: '汽水与起泡辅料层 (Sodas & Mixers)', icon: '🫧' },
    { key: 'bitters', label: '精选苦精与芳香剂层 (Bitters & Aromatics)', icon: '🌿' },
    { key: 'other', label: '调理辅料与乳化剂层 (Modifiers & Egg White)', icon: '🥚' }
  ];

  // Map of ingredient ID -> available substitutes
  const ingredientMap = useMemo(() => {
    const map = new Map<string, Ingredient>();
    INGREDIENTS_DATABASE.forEach(ing => map.set(ing.id, ing));
    return map;
  }, []);

  // Smart Recipe Matching Engine with Substitutes deduction
  const { readyRecipes, substituteRecipes, missingOneRecipes } = useMemo(() => {
    const ready: Recipe[] = [];
    const withSubs: Array<{ 
      recipe: Recipe; 
      substitutions: Array<{ originalName: string; substituteName: string; note: string }> 
    }> = [];
    const missingOne: Array<{ recipe: Recipe; missingIngredient: string; missingId: string }> = [];

    RECIPES_DATABASE.forEach((recipe) => {
      const neededRawIds = recipe.ingredients
        .filter((ing) => !ing.isGarnish && ing.rawId)
        .map((ing) => ing.rawId as string);

      if (neededRawIds.length === 0) return;

      const directMissing = neededRawIds.filter((id) => !selectedIds.includes(id));

      if (directMissing.length === 0) {
        ready.push(recipe);
      } else {
        // Check if all direct missing ingredients can be substituted by items in selectedIds
        const foundSubstitutions: Array<{ originalName: string; substituteName: string; note: string }> = [];
        let canSubAll = true;

        for (const missingId of directMissing) {
          const origIng = ingredientMap.get(missingId);
          if (!origIng || !origIng.substitutes || origIng.substitutes.length === 0) {
            canSubAll = false;
            break;
          }

          // Check if any substitute targetIngredientId is in selectedIds
          const matchedSub = origIng.substitutes.find(sub => selectedIds.includes(sub.targetIngredientId));
          if (matchedSub) {
            const subIng = ingredientMap.get(matchedSub.targetIngredientId);
            foundSubstitutions.push({
              originalName: origIng.name.split('/')[0].trim(),
              substituteName: subIng ? subIng.name.split('/')[0].trim() : matchedSub.substituteName,
              note: matchedSub.flavorImpactNote
            });
          } else {
            canSubAll = false;
            break;
          }
        }

        if (canSubAll && foundSubstitutions.length > 0) {
          withSubs.push({
            recipe,
            substitutions: foundSubstitutions
          });
        }

        // Check if missing exactly 1 item (without substitute)
        if (directMissing.length === 1) {
          const missingIng = ingredientMap.get(directMissing[0]);
          missingOne.push({
            recipe,
            missingIngredient: missingIng ? missingIng.name.split('/')[0].trim() : '特定配料',
            missingId: directMissing[0]
          });
        }
      }
    });

    return { 
      readyRecipes: ready, 
      substituteRecipes: withSubs, 
      missingOneRecipes: missingOne 
    };
  }, [selectedIds, ingredientMap]);

  // Top Restock ROI (Ingredients that unlock the most recipes)
  const topRestockROI = useMemo(() => {
    const map = new Map<string, { id: string; name: string; category: string; count: number; recipes: Recipe[] }>();
    missingOneRecipes.forEach(({ recipe, missingId, missingIngredient }) => {
      const existing = map.get(missingId);
      if (existing) {
        existing.count += 1;
        existing.recipes.push(recipe);
      } else {
        const ing = ingredientMap.get(missingId);
        map.set(missingId, {
          id: missingId,
          name: missingIngredient,
          category: ing?.categoryZh || '辅料',
          count: 1,
          recipes: [recipe]
        });
      }
    });
    return Array.from(map.values()).sort((a, b) => b.count - a.count).slice(0, 4);
  }, [missingOneRecipes, ingredientMap]);

  const [copiedShoppingList, setCopiedShoppingList] = useState(false);

  const handleCopyShoppingList = () => {
    if (topRestockROI.length === 0) return;
    const text = `【Elixir & Shadow · 吧台高效补料清单】
🛒 购买建议（依解锁配方收益率排序）：
${topRestockROI.map((item, idx) => `${idx + 1}. 【${item.category}】${item.name} ➔ 可立刻解锁 ${item.count} 款新鸡尾酒 (如: ${item.recipes.slice(0, 3).map(r => r.name).join('、')})`).join('\n')}

💡 调酒师提示：优先添置榜首原料，可实现酒柜边际收益最大化！
`;
    navigator.clipboard.writeText(text);
    setCopiedShoppingList(true);
    setTimeout(() => setCopiedShoppingList(false), 2500);
  };

  if (!isLoaded) return null;

  const normalizedFilter = searchFilter.toLowerCase().trim();

  return (
    <div className="space-y-12">
      
      {/* 3D Handcrafted Wooden Liquor Cabinet */}
      <div className="relative rounded-3xl bg-obsidian-850 border border-gold-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden">
        
        {/* Overhead 2700K Warm Bar Spotlight Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-36 bg-gradient-to-b from-amber-500/15 via-gold-500/5 to-transparent blur-2xl pointer-events-none" />

        {/* Cabinet Crown & Toolbar */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gold-500/25">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🏛️</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 tracking-wide">
                私人藏酒柜 · 原料陈列架
              </h2>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
              仿实木立体制架设计。点击层板酒标即可点亮库存，系统秒级推演可制酒谱与智能原料平替方案。
            </p>
          </div>

          {/* Vintage Train Ticket Presets & Clear Button */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleSelectPreset(['gin', 'rum-white', 'fresh-lemon-juice', 'fresh-lime-juice', 'simple-syrup', 'tonic-water', 'club-soda'])}
              className="text-xs px-3 py-1.5 rounded-xl bg-obsidian-900 border border-amber-500/30 text-amber-300 hover:border-amber-400 hover:bg-amber-500/10 transition-all font-serif flex items-center gap-1.5 shadow-sm"
            >
              <span>🎟️</span>
              <span>新手入门套票</span>
            </button>
            <button
              onClick={() => handleSelectPreset(['whiskey-bourbon', 'whiskey-rye', 'sweet-vermouth', 'angostura-bitters', 'simple-syrup', 'orange-bitters'])}
              className="text-xs px-3 py-1.5 rounded-xl bg-obsidian-900 border border-gold-500/30 text-gold-300 hover:border-gold-400 hover:bg-gold-500/10 transition-all font-serif flex items-center gap-1.5 shadow-sm"
            >
              <span>🥃</span>
              <span>古典老式套票</span>
            </button>
            <button
              onClick={() => handleSelectPreset(['gin', 'cointreau', 'campari', 'sweet-vermouth', 'vodka', 'fresh-lime-juice', 'fresh-lemon-juice', 'sprite-lemon-soda', 'apple-juice'])}
              className="text-xs px-3 py-1.5 rounded-xl bg-obsidian-900 border border-emerald-500/30 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all font-serif flex items-center gap-1.5 shadow-sm"
            >
              <span>🍹</span>
              <span>果香先锋套票</span>
            </button>
            <a
              href="/lab"
              className="text-xs px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-950/80 to-indigo-950/80 border border-purple-500/40 text-purple-200 hover:border-purple-400 hover:text-white transition-all font-serif flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>🧪 智能特调实验室</span>
            </a>
            <button
              onClick={handleClearAll}
              className="text-xs px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 hover:bg-rose-500/20 transition-all flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>清空</span>
            </button>
          </div>
        </div>

        {/* Real-time Filter Search Bar */}
        <div className="relative z-10 pt-4 pb-2">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="快速搜索 95 种原料库 (如 金酒 / 君度 / 苹果汁 / 糖浆)..."
              className="w-full bg-obsidian-950/90 border border-gold-500/20 rounded-xl pl-10 pr-8 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-500/50 transition-colors"
            />
            {searchFilter && (
              <button
                onClick={() => setSearchFilter('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 3D Tiered Wooden Shelves List */}
        <div className="relative z-10 py-6 space-y-7">
          {shelfTiers.map((tier) => {
            let tierIngredients = INGREDIENTS_DATABASE.filter((i) => i.category === tier.key);
            
            // Apply search filter if active
            if (normalizedFilter) {
              tierIngredients = tierIngredients.filter(i => 
                i.name.toLowerCase().includes(normalizedFilter) || 
                i.nameEn.toLowerCase().includes(normalizedFilter) ||
                i.categoryZh.toLowerCase().includes(normalizedFilter)
              );
            }

            if (tierIngredients.length === 0) return null;

            const allSelectedInTier = tierIngredients.every(i => selectedIds.includes(i.id));
            const selectedCountInTier = tierIngredients.filter(i => selectedIds.includes(i.id)).length;

            return (
              <div 
                key={tier.key}
                className="vintage-wooden-shelf rounded-2xl p-4 sm:p-5 space-y-3.5 transition-all"
              >
                {/* Antique Brass Nameplate Header & Quick Shelf Actions */}
                <div className="flex items-center justify-between">
                  <div className="vintage-brass-nameplate inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-serif font-bold uppercase tracking-wider">
                    <span>{tier.icon}</span>
                    <span>{tier.label}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleToggleShelfAll(tierIngredients)}
                      className="text-[11px] text-gold-400 hover:text-gold-300 font-serif flex items-center gap-1 transition-colors px-2 py-0.5 rounded bg-black/30 border border-gold-500/20"
                    >
                      {allSelectedInTier ? (
                        <>
                          <Square className="w-3 h-3 text-amber-400" />
                          <span>取消本层</span>
                        </>
                      ) : (
                        <>
                          <CheckSquare className="w-3 h-3 text-gold-400" />
                          <span>全选本层</span>
                        </>
                      )}
                    </button>
                    <span className="text-[11px] text-slate-400 font-mono">
                      已入柜 {selectedCountInTier} / {tierIngredients.length}
                    </span>
                  </div>
                </div>

                {/* Backlit Bottle Chips Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pt-1">
                  {tierIngredients.map((ing) => {
                    const isSelected = selectedIds.includes(ing.id);

                    return (
                      <button
                        key={ing.id}
                        onClick={() => handleToggleIngredient(ing.id)}
                        className={`relative flex items-center gap-2 p-2.5 rounded-xl text-left text-xs transition-all border ${
                          isSelected
                            ? 'vintage-backlit-bottle font-bold'
                            : 'bg-obsidian-950/70 border-white/5 text-slate-400 hover:border-gold-500/30 hover:text-slate-200'
                        }`}
                      >
                        {isSelected ? (
                          <div className="w-4 h-4 rounded-full bg-amber-400 text-obsidian-950 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-md border border-slate-600/80 bg-black/40 flex-shrink-0" />
                        )}
                        <span className="truncate font-serif">{ing.name.split('/')[0].trim()}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Shelf Under-Ledge Accent Line */}
                <div className="vintage-shelf-ledge rounded-full" />
              </div>
            );
          })}
        </div>

        {/* Vintage Inventory Gauge & Counter Bar */}
        <div className="relative z-10 pt-4 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-slate-400">当前入柜总库存：</span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-bold text-sm">
              {selectedIds.length} 种原料
            </span>
          </div>
          <span className="text-slate-500 text-[11px]">
            💡 提示：点击任意原料瓶标即可即时点亮 / 熄灭，酒谱匹配结果实时自动演算
          </span>
        </div>

      </div>

      {/* Matching Results Tabs & Grid */}
      <div className="space-y-8">
        
        {/* Railway Arrival-Board Style Tabs */}
        <div className="flex items-center gap-3 border-b border-gold-500/20 pb-4 overflow-x-auto text-sm">
          <button
            onClick={() => setActiveTab('ready')}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-serif font-bold transition-all whitespace-nowrap ${
              activeTab === 'ready'
                ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                : 'bg-obsidian-850 text-slate-300 hover:text-gold-300 border border-white/10'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>100% 可直接制作 ({readyRecipes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('with-substitutes')}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-serif font-bold transition-all whitespace-nowrap ${
              activeTab === 'with-substitutes'
                ? 'bg-amber-400 text-obsidian-950 shadow-gold-glow'
                : 'bg-obsidian-850 text-slate-300 hover:text-gold-300 border border-white/10'
            }`}
          >
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>✨ 包含平替可制 ({substituteRecipes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('missing-one')}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-serif font-bold transition-all whitespace-nowrap ${
              activeTab === 'missing-one'
                ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                : 'bg-obsidian-850 text-slate-300 hover:text-gold-300 border border-white/10'
            }`}
          >
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>仅差 1 种原料补齐 ({missingOneRecipes.length})</span>
          </button>
        </div>

        {/* Tab 1: 100% Ready Recipes */}
        {activeTab === 'ready' && (
          <div className="space-y-6">
            {readyRecipes.length === 0 ? (
              <div className="text-center py-16 rounded-2xl bg-obsidian-850 border border-white/10 space-y-3">
                <Wine className="w-12 h-12 text-slate-600 mx-auto" />
                <h3 className="text-base font-serif font-bold text-slate-200">当前原料暂无 100% 匹配的酒谱</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                  建议尝试上方【新手入门套票】或切换至【✨ 包含平替可制】查看可通过替代原料调制的丰富酒单。
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {readyRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: With Substitutes Recipes */}
        {activeTab === 'with-substitutes' && (
          <div className="space-y-6">
            {substituteRecipes.length === 0 ? (
              <div className="text-center py-16 rounded-2xl bg-obsidian-850 border border-white/10 space-y-3">
                <Lightbulb className="w-12 h-12 text-amber-500/60 mx-auto" />
                <h3 className="text-base font-serif font-bold text-slate-200">暂无需要平替原料的酒谱</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                  您当前入柜的原料已足够直接制作酒谱，或暂无可平替的对应组合。
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {substituteRecipes.map(({ recipe, substitutions }) => (
                  <div key={recipe.id} className="relative group">
                    <RecipeCard recipe={recipe} />
                    {/* Substitute Highlight Banner */}
                    <div className="absolute top-2 left-2 right-2 z-20 pointer-events-none">
                      <div className="px-2.5 py-1 rounded-lg bg-amber-950/90 text-amber-300 font-bold text-[11px] flex flex-col gap-0.5 shadow-lg backdrop-blur-md border border-amber-500/60">
                        <div className="flex items-center gap-1 text-amber-200">
                          <Lightbulb className="w-3 h-3 text-amber-400 flex-shrink-0" />
                          <span className="truncate">
                            平替：{substitutions.map(s => `${s.substituteName} 替 ${s.originalName}`).join(' | ')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Missing One Ingredient */}
        {activeTab === 'missing-one' && (
          <div className="space-y-6">
            {/* Top Restock ROI Banner */}
            {topRestockROI.length > 0 && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-obsidian-900 to-obsidian-850 border border-amber-500/40 shadow-gold-glow space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🛒</span>
                    <div>
                      <h4 className="text-sm sm:text-base font-serif font-bold text-amber-300">
                        高效补料推荐榜 (Top Restock ROI)
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        基于边际收益算法：优先添置以下关键原料，可秒级解锁最多款全新经典鸡尾酒！
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyShoppingList}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-obsidian-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all whitespace-nowrap self-start sm:self-center"
                  >
                    {copiedShoppingList ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-obsidian-950" />
                        <span>已复制采购便签！</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>一键复制采购备忘录</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {topRestockROI.map((item, idx) => (
                    <div
                      key={item.id}
                      onClick={() => handleToggleIngredient(item.id)}
                      className="p-3.5 rounded-xl bg-obsidian-950/80 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/30 transition-all cursor-pointer space-y-1.5 group"
                      title="点击将此原料直接点亮并加入我的藏酒柜"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold">
                          TOP #{idx + 1} 推荐
                        </span>
                        <span className="text-xs font-mono font-bold text-amber-400">
                          +{item.count} 款
                        </span>
                      </div>
                      <div className="font-serif font-bold text-sm text-slate-100 group-hover:text-amber-300 transition-colors">
                        {item.name}
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        可解锁: {item.recipes.map(r => r.name).join('、')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {missingOneRecipes.length === 0 ? (
              <div className="text-center py-16 rounded-2xl bg-obsidian-850 border border-white/10 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500/60 mx-auto" />
                <h3 className="text-base font-serif font-bold text-slate-200">暂无仅差 1 种原料的酒谱</h3>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {missingOneRecipes.map(({ recipe, missingIngredient }) => (
                  <div key={recipe.id} className="relative group">
                    <RecipeCard recipe={recipe} />
                    {/* Missing ingredient banner badge */}
                    <div className="absolute top-2 left-2 right-2 z-20 pointer-events-none">
                      <div className="px-2.5 py-1 rounded-lg bg-amber-500/90 text-obsidian-950 font-bold text-[11px] flex items-center justify-between shadow-lg backdrop-blur-sm border border-amber-300">
                        <span className="flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 text-obsidian-950" />
                          仅差: {missingIngredient}
                        </span>
                        <span className="text-[10px] underline">添置即可制作</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
}

