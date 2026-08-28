import React, { useState, useEffect, useMemo } from 'react';
import RecipeCard from './RecipeCard';
import MaskedScrollTabs, { type TabOption } from './MaskedScrollTabs';
import { Search, RotateCcw, Wine, Sparkles, SlidersHorizontal, Flame, GlassWater, Compass } from 'lucide-react';
import { matchPinyinOrText } from '../utils/pinyin';
import { RECIPES_DATABASE } from '../data/recipes';
import type { Recipe, FlavorTag } from '../types/cocktail';

interface RecipeExplorerProps {
  initialRecipes?: Recipe[];
}

export default function RecipeExplorer({ initialRecipes }: RecipeExplorerProps) {
  const recipes = initialRecipes || RECIPES_DATABASE;
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

  // Spirit Options with count
  const spiritOptions: TabOption[] = useMemo(() => [
    { key: 'all', label: '全部基酒', count: recipes.length },
    { key: 'Gin', label: '金酒 (Gin)', count: recipes.filter(r => r.baseSpirit === 'Gin').length, icon: '🍸' },
    { key: 'Whiskey', label: '威士忌 (Whiskey)', count: recipes.filter(r => r.baseSpirit === 'Whiskey').length, icon: '🥃' },
    { key: 'Rum', label: '朗姆酒 (Rum)', count: recipes.filter(r => r.baseSpirit === 'Rum').length, icon: '🍹' },
    { key: 'Vodka', label: '伏特加 (Vodka)', count: recipes.filter(r => r.baseSpirit === 'Vodka').length, icon: '🍸' },
    { key: 'Tequila', label: '龙舌兰 (Tequila)', count: recipes.filter(r => r.baseSpirit === 'Tequila').length, icon: '🌵' },
    { key: 'Brandy', label: '白兰地 (Brandy)', count: recipes.filter(r => r.baseSpirit === 'Brandy').length, icon: '🍇' },
    { key: 'Liqueur', label: '利口酒基底', count: recipes.filter(r => r.baseSpirit === 'Liqueur').length, icon: '✨' },
    { key: 'None', label: '无酒精特调', count: recipes.filter(r => r.baseSpirit === 'None' || r.category === 'mocktail').length, icon: '🥤' }
  ], [recipes]);

  // Flavor Options
  const flavorOptions: TabOption[] = [
    { key: 'all', label: '全部风味' },
    { key: '柑橘系', label: '柑橘酸甜', icon: '🍋' },
    { key: '果香系', label: '浓郁果香', icon: '🍎' },
    { key: '清爽系', label: '气泡清爽', icon: '🫧' },
    { key: '草本系', label: '植物草本', icon: '🌿' },
    { key: '甜系', label: '甜美柔和', icon: '🍯' },
    { key: '苦系', label: '苦甜微苦', icon: '☕' },
    { key: '烟熏系', label: '烟熏泥煤', icon: '🪵' },
    { key: '辛辣系', label: '辛辣生姜', icon: '🫚' },
    { key: '烈酒感', label: '重度烈酒', icon: '🔥' },
    { key: '奶香系', label: '丝滑奶油', icon: '🥛' }
  ];

  // ABV Tiers
  const abvTiers: TabOption[] = [
    { key: 'all', label: '全部酒度' },
    { key: 'mocktail', label: '0% 零酒精', icon: '🍹' },
    { key: 'low', label: '微醺轻饮 (<15%)', icon: '🥂' },
    { key: 'medium', label: '标准适中 (15-25%)', icon: '🍸' },
    { key: 'strong', label: '硬核烈饮 (>25%)', icon: '🥃' }
  ];

  // Difficulty Options
  const difficultyOptions = [
    { key: 'all', label: '全部难度' },
    { key: 'easy', label: '简单 · 新手友好' },
    { key: 'medium', label: '中等 · 经典进阶' },
    { key: 'advanced', label: '进阶 · 大师水准' }
  ];

  // Technique Options
  const techniqueOptions = [
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
    return recipes.filter((recipe) => {
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
    <div className="space-y-6">
      {/* Top Search & Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-obsidian-850/90 border border-gold-500/20 backdrop-blur-xl shadow-obsidian-card">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索鸡尾酒名、基酒流派、辅料或风味特征..."
            className="w-full bg-obsidian-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-500/50 transition-colors"
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
            <span className="text-xs text-slate-400 whitespace-nowrap font-serif">排序:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-obsidian-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-gold-500/40 cursor-pointer"
            >
              <option value="default">默认推荐顺序</option>
              <option value="abv-asc">酒精度低 ➔ 高</option>
              <option value="abv-desc">酒精度高 ➔ 低</option>
              <option value="name">中文拼音排序</option>
            </select>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="sm:hidden px-3 py-2 rounded-xl bg-obsidian-800 border border-gold-500/30 text-gold-400 text-xs font-medium flex items-center gap-1.5 cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>精细筛选 ({hasActiveFilters ? '已激活' : '全部'})</span>
          </button>
        </div>
      </div>

      {/* 1. Masked Horizontal Spirit Tabs */}
      <div className="space-y-1.5 p-3 rounded-2xl bg-obsidian-900/60 border border-white/5 backdrop-blur-md">
        <div className="px-4 text-[11px] font-serif uppercase tracking-widest text-gold-400/80 flex items-center gap-1.5">
          <Wine className="w-3.5 h-3.5 text-gold-400" />
          <span>基酒流派 · Base Spirits</span>
        </div>
        <MaskedScrollTabs
          options={spiritOptions}
          activeKey={selectedSpirit}
          onChange={setSelectedSpirit}
        />
      </div>

      {/* 2. Masked Horizontal Flavor Tabs */}
      <div className="space-y-1.5 p-3 rounded-2xl bg-obsidian-900/60 border border-white/5 backdrop-blur-md">
        <div className="px-4 text-[11px] font-serif uppercase tracking-widest text-amber-400/80 flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-amber-400" />
          <span>风味主轴 · Flavor Profiles</span>
        </div>
        <MaskedScrollTabs
          options={flavorOptions}
          activeKey={selectedFlavor}
          onChange={setSelectedFlavor}
          size="sm"
        />
      </div>

      {/* 3. ABV Tiers & Advanced Dropdown Toolbar */}
      <div className={`space-y-4 p-5 rounded-2xl bg-obsidian-850/60 border border-white/5 backdrop-blur-md ${isMobileFilterOpen ? 'block' : 'hidden sm:block'}`}>
        
        {/* ABV Tiers */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-3 border-b border-white/5">
          <span className="text-xs font-serif font-semibold text-rose-400/90 w-20 shrink-0 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5" />
            <span>酒精度：</span>
          </span>
          <div className="flex-1 overflow-hidden">
            <MaskedScrollTabs
              options={abvTiers}
              activeKey={selectedAbvTier}
              onChange={setSelectedAbvTier}
              size="sm"
            />
          </div>
        </div>

        {/* Difficulty, Technique & Category Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="text-slate-400 block mb-1 font-serif">制作难度：</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full bg-obsidian-900 border border-white/10 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-gold-500/40 cursor-pointer"
            >
              {difficultyOptions.map(d => (
                <option key={d.key} value={d.key}>{d.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-serif">调制手法：</label>
            <select
              value={selectedTechnique}
              onChange={(e) => setSelectedTechnique(e.target.value)}
              className="w-full bg-obsidian-900 border border-white/10 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-gold-500/40 cursor-pointer"
            >
              {techniqueOptions.map(t => (
                <option key={t.key} value={t.key}>{t.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-serif">系列名录：</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-obsidian-900 border border-white/10 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-gold-500/40 cursor-pointer"
            >
              {categoryOptions.map(c => (
                <option key={c.key} value={c.key}>{c.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filter Bar & Reset Button */}
        {hasActiveFilters && (
          <div className="pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-white/5">
            <span>找到匹配酒谱：<strong className="text-gold-400 font-mono text-sm">{filteredRecipes.length}</strong> 款</span>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-serif font-medium transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>重置全部筛选</span>
            </button>
          </div>
        )}
      </div>

      {/* Recipe Cards Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pt-2">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-obsidian-900/60 rounded-2xl border border-white/5 backdrop-blur-md">
          <Wine className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <h3 className="text-lg font-serif font-bold text-slate-300 mb-2">未找到匹配的鸡尾酒配方</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
            尝试更换搜索关键词、清空部分筛选条件，或在特调工坊 (Mixology Lab) 自主调制新酒谱。
          </p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 border border-gold-500/30 text-xs font-serif font-semibold transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>重置所有筛选条件</span>
          </button>
        </div>
      )}
    </div>
  );
}
