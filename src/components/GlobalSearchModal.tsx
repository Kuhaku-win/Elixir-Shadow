import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Wine, BookOpen, Trophy, Sparkles, Loader2 } from 'lucide-react';
import { RECIPES_DATABASE } from '../data/recipes';
import { INGREDIENTS_DATABASE } from '../data/ingredients';
import { MASTERS_DATABASE } from '../data/masters';
import { COMPETITIONS_DATABASE } from '../data/competitions';
import { searchCocktailDbByName } from '../services/cocktaildb';
import { matchPinyinOrText } from '../utils/pinyin';
import type { Recipe } from '../types/cocktail';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'recipes' | 'ingredients' | 'masters' | 'global'>('all');
  const [globalResults, setGlobalResults] = useState<Recipe[]>([]);
  const [isSearchingGlobal, setIsSearchingGlobal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setGlobalResults([]);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard shortcut ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          const btn = document.getElementById('global-search-trigger');
          btn?.click();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search logic for local data
  const normalizedQuery = query.toLowerCase().trim();

  const filteredRecipes = normalizedQuery
    ? RECIPES_DATABASE.filter(r => 
        matchPinyinOrText(r.name, normalizedQuery) ||
        r.nameEn.toLowerCase().includes(normalizedQuery) ||
        matchPinyinOrText(r.baseSpiritZh, normalizedQuery) ||
        r.flavorProfiles.some(f => matchPinyinOrText(f, normalizedQuery)) ||
        r.description.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const filteredIngredients = normalizedQuery
    ? INGREDIENTS_DATABASE.filter(i =>
        matchPinyinOrText(i.name, normalizedQuery) ||
        i.nameEn.toLowerCase().includes(normalizedQuery) ||
        matchPinyinOrText(i.categoryZh, normalizedQuery) ||
        i.flavorDescription.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const filteredMasters = normalizedQuery
    ? MASTERS_DATABASE.filter(m =>
        matchPinyinOrText(m.name, normalizedQuery) ||
        m.nameEn.toLowerCase().includes(normalizedQuery) ||
        matchPinyinOrText(m.bar, normalizedQuery) ||
        m.philosophy.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const filteredCompetitions = normalizedQuery
    ? COMPETITIONS_DATABASE.filter(c =>
        matchPinyinOrText(c.title, normalizedQuery) ||
        matchPinyinOrText(c.competitionName, normalizedQuery) ||
        matchPinyinOrText(c.bartender, normalizedQuery)
      )
    : [];

  // Remote TheCocktailDB fetch
  const handleSearchGlobal = async () => {
    if (!query.trim()) return;
    setIsSearchingGlobal(true);
    setActiveTab('global');
    try {
      const results = await searchCocktailDbByName(query);
      setGlobalResults(results);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSearchingGlobal(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-obsidian-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-3xl bg-obsidian-900 border border-gold-500/30 shadow-2xl rounded-xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-gold-500/20 bg-obsidian-850">
          <Search className="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearchGlobal();
            }}
            placeholder="搜索鸡尾酒配方、基酒、风味、原材料或大师..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-base"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-200 mr-2 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs text-slate-400 border border-slate-700 hover:border-gold-500/50 px-2 py-1 rounded bg-obsidian-800 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 px-4 py-2 bg-obsidian-900 border-b border-white/5 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 rounded-full transition-colors ${
              activeTab === 'all' ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            全部 ({filteredRecipes.length + filteredIngredients.length + filteredMasters.length + filteredCompetitions.length})
          </button>
          <button
            onClick={() => setActiveTab('recipes')}
            className={`px-3 py-1 rounded-full transition-colors ${
              activeTab === 'recipes' ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            配方 ({filteredRecipes.length})
          </button>
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`px-3 py-1 rounded-full transition-colors ${
              activeTab === 'ingredients' ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            原料 ({filteredIngredients.length})
          </button>
          <button
            onClick={() => setActiveTab('masters')}
            className={`px-3 py-1 rounded-full transition-colors ${
              activeTab === 'masters' ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            大师 ({filteredMasters.length})
          </button>
          <button
            onClick={handleSearchGlobal}
            className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors ml-auto ${
              activeTab === 'global' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-amber-400 hover:text-amber-300'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            TheCocktailDB 国际库检索
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Empty state */}
          {!query && (
            <div className="py-12 text-center text-slate-500">
              <Wine className="w-10 h-10 mx-auto mb-3 text-gold-500/40 stroke-1" />
              <p className="text-sm">输入关键词，即刻解锁 50+ 款经典配方与调酒秘方</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-md mx-auto">
                {['马天尼', '尼格罗尼', '金酒', '波本威士忌', '酸', '盘尼西林', '莫吉托'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-2.5 py-1 rounded-md bg-obsidian-800 border border-white/5 text-slate-400 hover:text-gold-300 hover:border-gold-500/30 transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Global Search tab & results */}
          {activeTab === 'global' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1 border-b border-white/5">
                <span>TheCocktailDB 远程数据库检索结果 ({globalResults.length})</span>
                {isSearchingGlobal && (
                  <span className="flex items-center text-gold-400">
                    <Loader2 className="w-3.5 h-3.5 animate-spin mr-1" />
                    正在连接国际库...
                  </span>
                )}
              </div>
              {globalResults.length === 0 && !isSearchingGlobal && (
                <div className="py-8 text-center text-slate-500 text-sm">
                  未在国际库中找到相关结果，请尝试使用英文关键词搜索（如 "Margarita", "Martini", "Old Fashioned"）。
                </div>
              )}
              {globalResults.map(drink => (
                <div 
                  key={drink.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-obsidian-800/80 border border-white/5 hover:border-gold-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <img src={drink.image} alt={drink.name} className="w-12 h-12 rounded object-cover border border-white/10" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200 group-hover:text-gold-300 transition-colors">{drink.name}</h4>
                      <p className="text-xs text-slate-400 line-clamp-1">{drink.ingredients.map(i => i.name).join(', ')}</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20">
                    {drink.baseSpiritZh}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Local search results */}
          {activeTab !== 'global' && query && (
            <>
              {/* Recipes */}
              {(activeTab === 'all' || activeTab === 'recipes') && filteredRecipes.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gold-400 uppercase tracking-wider flex items-center gap-1.5 pb-1">
                    <Wine className="w-3.5 h-3.5" />
                    鸡尾酒配方 ({filteredRecipes.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredRecipes.map(recipe => (
                      <a
                        key={recipe.id}
                        href={`/recipes/${recipe.slug}`}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-obsidian-800/70 border border-white/5 hover:border-gold-500/40 hover:bg-obsidian-750 transition-all group"
                      >
                        <img src={recipe.image} alt={recipe.name} className="w-11 h-11 rounded object-cover border border-white/10 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-slate-200 group-hover:text-gold-300 truncate">{recipe.name}</h4>
                            <span className="text-[10px] text-amber-400 font-mono">{recipe.abv}% ABV</span>
                          </div>
                          <p className="text-xs text-slate-400 truncate">{recipe.nameEn}</p>
                          <div className="flex gap-1 mt-1">
                            {recipe.flavorProfiles.slice(0, 2).map(f => (
                              <span key={f} className="text-[10px] px-1.5 py-0.2 rounded bg-white/5 text-slate-400">{f}</span>
                            ))}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Ingredients */}
              {(activeTab === 'all' || activeTab === 'ingredients') && filteredIngredients.length > 0 && (
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 pb-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    原料百科 ({filteredIngredients.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredIngredients.map(ingredient => (
                      <a
                        key={ingredient.id}
                        href={`/ingredients/${ingredient.slug}`}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-obsidian-800/70 border border-white/5 hover:border-emerald-500/40 hover:bg-obsidian-750 transition-all group"
                      >
                        <img src={ingredient.image} alt={ingredient.name} className="w-11 h-11 rounded object-cover border border-white/10 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 truncate">{ingredient.name}</h4>
                            <span className="text-[10px] text-slate-400">{ingredient.categoryZh}</span>
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1">{ingredient.flavorDescription}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Masters */}
              {(activeTab === 'all' || activeTab === 'masters') && filteredMasters.length > 0 && (
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider flex items-center gap-1.5 pb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    调酒大师 ({filteredMasters.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredMasters.map(master => (
                      <a
                        key={master.id}
                        href={`/masters#${master.id}`}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-obsidian-800/70 border border-white/5 hover:border-purple-500/40 hover:bg-obsidian-750 transition-all group"
                      >
                        <img src={master.avatar} alt={master.name} className="w-11 h-11 rounded-full object-cover border border-white/10 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-slate-200 group-hover:text-purple-300 truncate">{master.name} ({master.nameEn})</h4>
                          <p className="text-xs text-slate-400 truncate">{master.title}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* No results found */}
              {filteredRecipes.length === 0 && filteredIngredients.length === 0 && filteredMasters.length === 0 && filteredCompetitions.length === 0 && (
                <div className="py-12 text-center text-slate-500">
                  <p className="text-sm">本地精选库未找到 “{query}” 相关内容</p>
                  <button
                    onClick={handleSearchGlobal}
                    className="mt-4 px-4 py-2 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    在 TheCocktailDB 国际库中继续搜索
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-obsidian-950 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
          <span>按 <kbd className="px-1.5 py-0.5 rounded bg-obsidian-800 border border-white/10 text-slate-400">ESC</kbd> 退出</span>
          <span>影之甘露 · 50+ 精选配方 & 国际 API 混合引擎</span>
        </div>
      </div>
    </div>
  );
}
