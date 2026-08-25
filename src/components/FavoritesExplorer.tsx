import React, { useState, useEffect, useMemo } from 'react';
import { RECIPES_DATABASE } from '../data/recipes';
import RecipeCard from './RecipeCard';
import { 
  Heart, Wine, Trash2, Copy, Check, Sparkles, 
  Search, Star, Edit3, ArrowRight 
} from 'lucide-react';
import { getFavoriteSlugs, getTastingNotes, type TastingNote } from '../utils/favorites';
import type { Recipe } from '../types/cocktail';

export default function FavoritesExplorer() {
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>([]);
  const [tastingNotes, setTastingNotes] = useState<Record<string, TastingNote>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'cocktails' | 'notes'>('cocktails');
  const [copied, setCopied] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadData = () => {
    setFavoriteSlugs(getFavoriteSlugs());
    setTastingNotes(getTastingNotes());
    setIsLoaded(true);
  };

  useEffect(() => {
    loadData();

    const handleFavChange = () => {
      setFavoriteSlugs(getFavoriteSlugs());
    };
    const handleNotesChange = () => {
      setTastingNotes(getTastingNotes());
    };

    window.addEventListener('elixir_favorites_changed', handleFavChange);
    window.addEventListener('elixir_notes_changed', handleNotesChange);
    return () => {
      window.removeEventListener('elixir_favorites_changed', handleFavChange);
      window.removeEventListener('elixir_notes_changed', handleNotesChange);
    };
  }, []);

  const favoriteRecipes = useMemo(() => {
    return favoriteSlugs
      .map(slug => RECIPES_DATABASE.find(r => r.slug === slug))
      .filter((r): r is Recipe => Boolean(r));
  }, [favoriteSlugs]);

  const filteredRecipes = useMemo(() => {
    if (!searchQuery.trim()) return favoriteRecipes;
    const q = searchQuery.toLowerCase().trim();
    return favoriteRecipes.filter(r => 
      r.name.toLowerCase().includes(q) ||
      r.nameEn.toLowerCase().includes(q) ||
      r.baseSpiritZh.toLowerCase().includes(q)
    );
  }, [favoriteRecipes, searchQuery]);

  const notesList = useMemo(() => {
    return Object.values(tastingNotes).map(n => {
      const recipe = RECIPES_DATABASE.find(r => r.slug === n.recipeSlug);
      return { note: n, recipe };
    }).filter(item => Boolean(item.recipe));
  }, [tastingNotes]);

  const handleClearAllFavorites = () => {
    if (confirm('确定要清空所有收藏的酒谱吗？')) {
      try {
        localStorage.removeItem('elixir_favorite_recipes');
        setFavoriteSlugs([]);
        window.dispatchEvent(new CustomEvent('elixir_favorites_changed', { detail: { count: 0 } }));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleCopyFavoritesList = () => {
    const listText = favoriteRecipes.map((r, i) => 
      `${i + 1}. 🍸 ${r.name} (${r.nameEn}) - ${r.baseSpiritZh}基酒 / ${r.abv}% ABV\n   配料: ${r.ingredients.map(ing => ing.name).join(', ')}`
    ).join('\n\n');

    const text = `【影之甘露 · 我的私房收藏酒单 (${favoriteRecipes.length} 款)】\n━━━━━━━━━━━━━━━━━━━━\n${listText}\n━━━━━━━━━━━━━━━━━━━━\n“在光影与烈酒的交汇处，调制灵魂解药”`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isLoaded) return null;

  return (
    <div className="space-y-8">
      {/* Top Header Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-obsidian-850 border border-gold-500/20 shadow-md">
        
        {/* Tabs: My Favorites vs Tasting Notes */}
        <div className="flex items-center gap-2 border-b sm:border-b-0 border-white/5 pb-2 sm:pb-0 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('cocktails')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all ${
              activeTab === 'cocktails'
                ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                : 'bg-obsidian-900 text-slate-400 hover:text-slate-200 border border-white/5'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>我的心动酒单 ({favoriteRecipes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-serif font-bold transition-all ${
              activeTab === 'notes'
                ? 'bg-amber-400 text-obsidian-950 shadow-gold-glow'
                : 'bg-obsidian-900 text-slate-400 hover:text-slate-200 border border-white/5'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>私房品饮笔记 ({notesList.length})</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
          {favoriteRecipes.length > 0 && (
            <>
              <button
                onClick={handleCopyFavoritesList}
                className="px-3.5 py-2 rounded-xl bg-obsidian-900 border border-gold-500/30 text-gold-300 hover:bg-gold-500 hover:text-obsidian-950 text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>已复制酒单</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>导出收藏清单</span>
                  </>
                )}
              </button>

              <button
                onClick={handleClearAllFavorites}
                className="px-3 py-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 hover:bg-rose-500/20 text-xs flex items-center gap-1.5 transition-colors"
                title="清空收藏"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>清空</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Tab 1: Favorite Cocktails Grid */}
      {activeTab === 'cocktails' && (
        <div className="space-y-6">
          {favoriteRecipes.length === 0 ? (
            <div className="text-center py-20 rounded-2xl bg-obsidian-850/60 border border-dashed border-white/10 space-y-4">
              <Heart className="w-12 h-12 text-gold-500/30 mx-auto stroke-1" />
              <div className="space-y-1">
                <h3 className="text-lg font-serif font-bold text-slate-200">您还没有收藏任何鸡尾酒配方</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  在浏览配方大全或配方详情页时，点击右上角的 ❤️ 按钮即可将心仪酒谱加入私人收藏夹。
                </p>
              </div>
              <a
                href="/recipes"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-500/20 border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-obsidian-950 font-bold text-xs transition-all shadow-sm"
              >
                <Wine className="w-4 h-4" />
                <span>立即去探索配方大全 &rarr;</span>
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Private Tasting Notes List */}
      {activeTab === 'notes' && (
        <div className="space-y-6">
          {notesList.length === 0 ? (
            <div className="text-center py-20 rounded-2xl bg-obsidian-850/60 border border-dashed border-white/10 space-y-4">
              <Edit3 className="w-12 h-12 text-amber-500/30 mx-auto stroke-1" />
              <div className="space-y-1">
                <h3 className="text-lg font-serif font-bold text-slate-200">暂无品饮笔记</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  在配方详情页中记录您的个人改良配比（如“减糖 5ml”）、5 星打分与口感评语后，将在此自动汇总。
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {notesList.map(({ note, recipe }) => {
                if (!recipe) return null;

                return (
                  <div
                    key={note.recipeSlug}
                    className="p-5 rounded-2xl bg-obsidian-850 border border-gold-500/20 hover:border-gold-500/40 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-serif font-bold text-slate-100">{recipe.name}</h4>
                        <p className="text-xs text-gold-400/80">{recipe.nameEn}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-4 h-4 ${
                              s <= note.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {note.note && (
                      <p className="text-xs text-slate-300 bg-obsidian-900/80 p-3 rounded-xl border border-white/5 leading-relaxed italic">
                        “{note.note}”
                      </p>
                    )}

                    {note.tags && note.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {note.tags.map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-white/5">
                      <span>记录于: {note.updatedAt ? new Date(note.updatedAt).toLocaleDateString() : '近期'}</span>
                      <a
                        href={`/recipes/${recipe.slug}`}
                        className="text-gold-400 hover:text-gold-300 font-medium inline-flex items-center gap-1"
                      >
                        <span>调酒配方</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
