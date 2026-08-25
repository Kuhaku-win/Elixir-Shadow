import React, { useState, useEffect, useMemo } from 'react';
import RecipeCard from './RecipeCard';
import { Search, RotateCcw, Wine, Sparkles, SlidersHorizontal, Flame, GlassWater } from 'lucide-react';
import { matchPinyinOrText } from '../utils/pinyin';
import type { Recipe, BaseSpiritType, FlavorTag, DifficultyLevel, TechniqueType } from '../types/cocktail';

interface RecipeExplorerProps {
  initialRecipes: Recipe[];
}

export default function RecipeExplorer({ initialRecipes }: RecipeExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpirit, setSelectedSpirit] = useState<string>('all');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedTechnique, setSelectedTechnique] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAbvTier, setSelectedAbvTier] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'abv-asc' | 'abv-desc' | 'name'>('default');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Initialize search & filters from URL search params
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const q = params.get('search') || params.get('q');
        if (q) setSearchQuery(q);
        const spirit = params.get('spirit');
        if (spirit) setSelectedSpirit(spirit);
        const flavor = params.get('flavor');
        if (flavor) setSelectedFlavor(flavor);
        const category = params.get('category');
        if (category) setSelectedCategory(category);
        const abv = params.get('abv');
        if (abv) setSelectedAbvTier(abv);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Spirit Options
  const spiritOptions: Array<{ key: string; label: string }> = [
    { key: 'all', label: '全部基酒' },
    { key: 'Gin', label: '金酒 (Gin)' },
    { key: 'Whiskey', label: '威士忌 (Whiskey)' },
    { key: 'Rum', label: '朗姆酒 (Rum)' },
    { key: 'Vodka', label: '伏特加 (Vodka)' },
    { key: 'Tequila', label: '龙舌兰 (Tequila)' },
    { key: 'Brandy', label: '白兰地 (Brandy)' },
    { key: 'Liqueur', label: '利口酒基底' },
    { key: 'None', label: '无酒精 / 软饮' }
  ];

  // ABV Tiers
  const abvTiers = [
    { key: 'all', label: '全部酒精度' },
    { key: 'mocktail', label: '🍹 0% 零酒精 (Mocktail)' },
    { key: 'low', label: '🥂 微醺轻饮 (< 15% ABV)' },
    { key: 'medium', label: '🍸 标准适中 (15% - 25%)' },
    { key: 'strong', label: '🥃 重度硬饮 (> 25% ABV)' }
  ];

  // Flavor Options
  const flavorOptions: Array<{ key: string; label: string }> = [
    { key: 'all', label: '全部风味' },
    { key: '柑橘系', label: '柑橘系' },
    { key: '果香系', label: '果香系' },
    { key: '清爽系', label: '清爽系' },
    { key: '草本系', label: '草本系' },
    { key: '甜系', label: '甜美系' },
    { key: '苦系', label: '苦甜微苦' },
    { key: '烟熏系', label: '烟熏泥煤' },
    { key: '辛辣系', label: '辛辣生姜' },
    { key: '烈酒感', label: '烈酒重击' },
    { key: '奶香系', label: '奶油丝滑' }
  ];

  // Difficulty Options
  const difficultyOptions = [
    { key: 'all', label: '全部难度' },
    { key: 'easy', label: '简单 · 新手友好' },
    { key: 'medium', label: '中等 · 经典进阶' },
    { key: 'advanced', label: '进阶 · 大师水准' }
  ];

  // Technique Options
  const techniqueOptions: Array<{ key: string; label: string }> = [
    { key: 'all', label: '全部技法' },
    { key: 'Shake', label: 'Shake 摇荡法' },
    { key: 'Stir', label: 'Stir 搅拌法' },
    { key: 'Build', label: 'Build 直调法' },
    { key: 'Muddle', label: 'Muddle 捣压法' },
    { key: 'Blend', label: 'Blend 冰沙法' }
  ];

  // Category Options
  const categoryOptions = [
    { key: 'all', label: '全部系列' },
    { key: 'iba', label: 'IBA 官方认证' },
    { key: 'competition', label: '大赛冠军作品' },
    { key: 'classic', label: '百年传世经典' },
    { key: 'contemporary', label: '现代先锋特调' },
    { key: 'mocktail', label: '零酒精特调 (Mocktail)' }
  ];

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedSpirit('all');
    setSelectedFlavor('all');
    setSelectedDifficulty('all');
    setSelectedTechnique('all');
    setSelectedCategory('all');
    setSelectedAbvTier('all');
    setSortBy('default');
  };

  const hasActiveFilters = 
    searchQuery !== '' ||
    selectedSpirit !== 'all' ||
    selectedFlavor !== 'all' ||
    selectedDifficulty !== 'all' ||
    selectedTechnique !== 'all' ||
    selectedCategory !== 'all' ||
    selectedAbvTier !== 'all' ||
    sortBy !== 'default';

  // Filtered & Sorted recipes
  const filteredRecipes = useMemo(() => {
    return initialRecipes.filter((recipe) => {
      // Search text with Pinyin support
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = matchPinyinOrText(recipe.name, q) || recipe.nameEn.toLowerCase().includes(q);
        const matchesSpirit = matchPinyinOrText(recipe.baseSpiritZh, q) || recipe.baseSpirit.toLowerCase().includes(q);
        const matchesFlavor = recipe.flavorProfiles.some(f => matchPinyinOrText(f, q));
        const matchesIngredients = recipe.ingredients.some(i => matchPinyinOrText(i.name, q) || (i.nameEn && i.nameEn.toLowerCase().includes(q)));
        if (!matchesName && !matchesSpirit && !matchesFlavor && !matchesIngredients) return false;
      }

      // Spirit filter
      if (selectedSpirit !== 'all' && recipe.baseSpirit !== selectedSpirit) {
        return false;
      }

      // ABV Tier filter
      if (selectedAbvTier === 'mocktail' && recipe.abv !== 0 && recipe.category !== 'mocktail') return false;
      if (selectedAbvTier === 'low' && (recipe.abv === 0 || recipe.abv >= 15)) return false;
      if (selectedAbvTier === 'medium' && (recipe.abv < 15 || recipe.abv > 25)) return false;
      if (selectedAbvTier === 'strong' && recipe.abv <= 25) return false;

      // Flavor filter
      if (selectedFlavor !== 'all' && !recipe.flavorProfiles.includes(selectedFlavor as FlavorTag)) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && recipe.difficulty !== selectedDifficulty) {
        return false;
      }

      // Technique filter
      if (selectedTechnique !== 'all' && recipe.technique !== selectedTechnique) {
        return false;
      }

      // Category filter
      if (selectedCategory === 'iba' && !recipe.isIbaCertified) return false;
      if (selectedCategory === 'competition' && recipe.category !== 'competition') return false;
      if (selectedCategory === 'classic' && recipe.category !== 'classic') return false;
      if (selectedCategory === 'contemporary' && recipe.category !== 'contemporary') return false;
      if (selectedCategory === 'mocktail' && recipe.category !== 'mocktail' && recipe.abv !== 0) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'abv-asc') return a.abv - b.abv;
      if (sortBy === 'abv-desc') return b.abv - a.abv;
      if (sortBy === 'name') return a.name.localeCompare(b.name, 'zh-CN');
      return 0;
    });
  }, [initialRecipes, searchQuery, selectedSpirit, selectedFlavor, selectedDifficulty, selectedTechnique, selectedCategory, selectedAbvTier, sortBy]);

  return (
    <div className="space-y-8">
      {/* Top Search & Mobile Filter Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-obsidian-850 border border-gold-500/20 shadow-md">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索鸡尾酒名、拼音简拼(如 mtn/mgl)、材料、风味..."
            className="w-full bg-obsidian-900 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-500/50 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              清空
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          {/* Sorting */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 whitespace-nowrap">排序:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-obsidian-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-gold-500/40"
            >
              <option value="default">默认精选推荐</option>
              <option value="abv-asc">酒精度从低到高</option>
              <option value="abv-desc">酒精度从高到低</option>
              <option value="name">中文名称排序</option>
            </select>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="sm:hidden px-3 py-2 rounded-lg bg-obsidian-800 border border-gold-500/30 text-gold-400 text-xs font-medium flex items-center gap-1.5"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>筛选 ({hasActiveFilters ? '已激活' : '全部'})</span>
          </button>
        </div>
      </div>

      {/* Filter Chips Toolbar (Desktop & Mobile Dropdown) */}
      <div className={`space-y-4 p-5 rounded-xl bg-obsidian-850/60 border border-white/5 ${isMobileFilterOpen ? 'block' : 'hidden sm:block'}`}>
        
        {/* ABV / Mocktail Tiers Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-2 border-b border-white/5">
          <span className="text-xs font-semibold text-rose-400/90 w-20 flex-shrink-0 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5" />
            <span>酒精度：</span>
          </span>
          <div className="flex flex-wrap gap-1.5">
            {abvTiers.map((a) => (
              <button
                key={a.key}
                onClick={() => setSelectedAbvTier(a.key)}
                className={`text-xs px-3 py-1 rounded-full transition-all ${
                  selectedAbvTier === a.key
                    ? 'bg-rose-500 text-white font-bold shadow-sm'
                    : 'bg-obsidian-800/80 text-slate-400 border border-white/5 hover:border-rose-500/30 hover:text-slate-200'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* Base Spirits */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="text-xs font-semibold text-gold-400/90 w-20 flex-shrink-0">六大基酒：</span>
          <div className="flex flex-wrap gap-1.5">
            {spiritOptions.map((s) => (
              <button
                key={s.key}
                onClick={() => setSelectedSpirit(s.key)}
                className={`text-xs px-3 py-1 rounded-full transition-all ${
                  selectedSpirit === s.key
                    ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm'
                    : 'bg-obsidian-800/80 text-slate-400 border border-white/5 hover:border-gold-500/30 hover:text-slate-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Flavor Tags */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="text-xs font-semibold text-amber-400/90 w-20 flex-shrink-0">风味特征：</span>
          <div className="flex flex-wrap gap-1.5">
            {flavorOptions.map((f) => (
              <button
                key={f.key}
                onClick={() => setSelectedFlavor(f.key)}
                className={`text-xs px-3 py-1 rounded-full transition-all ${
                  selectedFlavor === f.key
                    ? 'bg-amber-500 text-obsidian-950 font-bold shadow-sm'
                    : 'bg-obsidian-800/80 text-slate-400 border border-white/5 hover:border-amber-500/30 hover:text-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty, Technique & Category Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/5 text-xs">
          <div>
            <label className="text-slate-400 block mb-1 font-medium">制作难度：</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full bg-obsidian-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-gold-500/40"
            >
              {difficultyOptions.map(d => (
                <option key={d.key} value={d.key}>{d.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-medium">调制手法：</label>
            <select
              value={selectedTechnique}
              onChange={(e) => setSelectedTechnique(e.target.value)}
              className="w-full bg-obsidian-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-gold-500/40"
            >
              {techniqueOptions.map(t => (
                <option key={t.key} value={t.key}>{t.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-medium">系列归属：</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-obsidian-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-gold-500/40"
            >
              {categoryOptions.map(c => (
                <option key={c.key} value={c.key}>{c.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filter Bar & Reset Button */}
        {hasActiveFilters && (
          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/5">
            <span>找到符合条件的配方：<strong className="text-gold-400 font-mono text-sm">{filteredRecipes.length}</strong> 款</span>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-medium transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              重置所有筛选
            </button>
          </div>
        )}
      </div>

      {/* Recipe Cards Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-2xl bg-obsidian-850/50 border border-dashed border-white/10">
          <Wine className="w-12 h-12 mx-auto text-gold-500/30 stroke-1 mb-3" />
          <h3 className="text-lg font-serif font-bold text-slate-300 mb-2">未找到匹配的鸡尾酒配方</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
            尝试放宽基酒、酒精度或风味筛选条件，或使用顶部的全局搜索框检索 TheCocktailDB 国际库。
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            重置全部筛选条件
          </button>
        </div>
      )}
    </div>
  );
}
