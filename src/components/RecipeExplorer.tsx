import React, { useState, useEffect, useMemo } from 'react';
import RecipeCard from './RecipeCard';
import MaskedScrollTabs, { type TabOption } from './MaskedScrollTabs';
import { Search, RotateCcw, Wine, Sparkles, SlidersHorizontal, Flame, GlassWater, Compass } from 'lucide-react';
import { matchPinyinOrText } from '../utils/pinyin';
import { RECIPES_DATABASE } from '../data/recipes';
import type { Recipe, FlavorTag } from '../types/cocktail';
import { useI18n } from '../i18n';

interface RecipeExplorerProps {
  initialRecipes?: Recipe[];
}

export default function RecipeExplorer({ initialRecipes }: RecipeExplorerProps) {
  const { t, getBaseSpiritName, getFlavorTagName, getDifficultyName, getTechniqueName } = useI18n();
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
    { key: 'all', label: `${t.common.all} (${t.recipes.filterByBase})`, count: recipes.length },
    { key: 'Gin', label: getBaseSpiritName('Gin'), count: recipes.filter(r => r.baseSpirit === 'Gin').length, icon: '🍸' },
    { key: 'Whiskey', label: getBaseSpiritName('Whiskey'), count: recipes.filter(r => r.baseSpirit === 'Whiskey').length, icon: '🥃' },
    { key: 'Rum', label: getBaseSpiritName('Rum'), count: recipes.filter(r => r.baseSpirit === 'Rum').length, icon: '🍹' },
    { key: 'Vodka', label: getBaseSpiritName('Vodka'), count: recipes.filter(r => r.baseSpirit === 'Vodka').length, icon: '🍸' },
    { key: 'Tequila', label: getBaseSpiritName('Tequila'), count: recipes.filter(r => r.baseSpirit === 'Tequila').length, icon: '🌵' },
    { key: 'Brandy', label: getBaseSpiritName('Brandy'), count: recipes.filter(r => r.baseSpirit === 'Brandy').length, icon: '🍇' },
    { key: 'Liqueur', label: getBaseSpiritName('Liqueur'), count: recipes.filter(r => r.baseSpirit === 'Liqueur').length, icon: '✨' },
    { key: 'None', label: getBaseSpiritName('None'), count: recipes.filter(r => r.baseSpirit === 'None' || r.category === 'mocktail').length, icon: '🥤' }
  ], [recipes, t, getBaseSpiritName]);

  // Flavor Options
  const flavorOptions: TabOption[] = useMemo(() => [
    { key: 'all', label: `${t.common.all} (${t.recipes.filterByFlavor})` },
    { key: '柑橘系', label: getFlavorTagName('柑橘系'), icon: '🍋' },
    { key: '果香系', label: getFlavorTagName('果香系'), icon: '🍎' },
    { key: '清爽系', label: getFlavorTagName('清爽系'), icon: '🫧' },
    { key: '草本系', label: getFlavorTagName('草本系'), icon: '🌿' },
    { key: '甜系', label: getFlavorTagName('甜系'), icon: '🍯' },
    { key: '苦系', label: getFlavorTagName('苦系'), icon: '☕' },
    { key: '烟熏系', label: getFlavorTagName('烟熏系'), icon: '🪵' },
    { key: '辛辣系', label: getFlavorTagName('辛辣系'), icon: '🫚' },
    { key: '烈酒感', label: getFlavorTagName('烈酒感'), icon: '🔥' },
    { key: '奶香系', label: getFlavorTagName('奶香系'), icon: '🥛' }
  ], [t, getFlavorTagName]);

  // ABV Tiers
  const abvTiers: TabOption[] = useMemo(() => [
    { key: 'all', label: t.common.all },
    { key: 'mocktail', label: '0% Mocktail', icon: '🍹' },
    { key: 'low', label: '< 15% ABV', icon: '🥂' },
    { key: 'medium', label: '15-25% ABV', icon: '🍸' },
    { key: 'strong', label: '> 25% ABV', icon: '🥃' }
  ], [t]);

  // Difficulty Options
  const difficultyOptions = useMemo(() => [
    { key: 'all', label: t.common.all },
    { key: 'easy', label: getDifficultyName('easy') },
    { key: 'medium', label: getDifficultyName('medium') },
    { key: 'advanced', label: getDifficultyName('advanced') }
  ], [t, getDifficultyName]);

  // Technique Options
  const techniqueOptions = useMemo(() => [
    { key: 'all', label: t.common.all },
    { key: 'Shake', label: getTechniqueName('Shake') },
    { key: 'Stir', label: getTechniqueName('Stir') },
    { key: 'Build', label: getTechniqueName('Build') },
    { key: 'Muddle', label: getTechniqueName('Muddle') },
    { key: 'Blend', label: getTechniqueName('Blend') }
  ], [t, getTechniqueName]);

  // Category Options
  const categoryOptions = useMemo(() => [
    { key: 'all', label: t.common.all },
    { key: 'iba', label: 'IBA' },
    { key: 'competition', label: 'Competition' },
    { key: 'classic', label: 'Classic' },
    { key: 'contemporary', label: 'Contemporary' },
    { key: 'mocktail', label: 'Mocktail' }
  ], [t]);

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
            placeholder={t.nav.searchPlaceholder}
            className="w-full bg-obsidian-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-500/50 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              {t.common.reset}
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          {/* Sorting */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 whitespace-nowrap font-serif">{t.recipes.sortBy}:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-obsidian-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-gold-500/40 cursor-pointer"
            >
              <option value="default">{t.recipes.sortRecommended}</option>
              <option value="abv-asc">{t.recipes.sortAbvAsc}</option>
              <option value="abv-desc">{t.recipes.sortAbvDesc}</option>
              <option value="name">{t.recipes.sortPinyin}</option>
            </select>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="sm:hidden px-3 py-2 rounded-xl bg-obsidian-800 border border-gold-500/30 text-gold-400 text-xs font-medium flex items-center gap-1.5 cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{hasActiveFilters ? `${t.common.reset} (${filteredRecipes.length})` : t.recipes.filterByBase}</span>
          </button>
        </div>
      </div>

      {/* 1. Masked Horizontal Spirit Tabs */}
      <div className="space-y-1.5 p-3 rounded-2xl bg-obsidian-900/60 border border-white/5 backdrop-blur-md">
        <div className="px-4 text-[11px] font-serif uppercase tracking-widest text-gold-400/80 flex items-center gap-1.5">
          <Wine className="w-3.5 h-3.5 text-gold-400" />
          <span>{t.recipes.filterByBase}</span>
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
          <span>{t.recipes.filterByFlavor}</span>
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
            <span>{t.recipes.abvBadge}：</span>
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
            <label className="text-slate-400 block mb-1 font-serif">{t.recipes.filterByDifficulty}：</label>
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
            <label className="text-slate-400 block mb-1 font-serif">{t.recipes.filterByTechnique}：</label>
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
            <label className="text-slate-400 block mb-1 font-serif">{t.recipes.title}：</label>
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
            <span>{t.common.loading ? `${filteredRecipes.length}` : ''}</span>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-serif font-medium transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.common.reset}</span>
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
          <h3 className="text-lg font-serif font-bold text-slate-300 mb-2">{t.common.noResults}</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
            {t.recipes.subtitle}
          </p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 border border-gold-500/30 text-xs font-serif font-semibold transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.common.reset}</span>
          </button>
        </div>
      )}
    </div>
  );
}
