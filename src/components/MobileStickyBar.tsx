import React, { useState, useEffect } from 'react';
import { Heart, Play, Wine, Sparkles, Scale } from 'lucide-react';
import { isRecipeFavorite, toggleFavoriteRecipe } from '../utils/favorites';
import BarModeModal from './BarModeModal';
import type { Recipe } from '../types/cocktail';

interface MobileStickyBarProps {
  recipe: Recipe;
}

export default function MobileStickyBar({ recipe }: MobileStickyBarProps) {
  const [isFav, setIsFav] = useState(false);
  const [isBarModeOpen, setIsBarModeOpen] = useState(false);

  useEffect(() => {
    setIsFav(isRecipeFavorite(recipe.slug));

    const handleFavChange = (e: any) => {
      if (e.detail?.slug === recipe.slug) {
        setIsFav(e.detail.isNowFav);
      }
    };
    window.addEventListener('elixir_favorites_changed', handleFavChange);
    return () => window.removeEventListener('elixir_favorites_changed', handleFavChange);
  }, [recipe.slug]);

  const handleToggleFav = (e: React.MouseEvent) => {
    e.preventDefault();
    const updated = toggleFavoriteRecipe(recipe.slug);
    setIsFav(updated);
  };

  return (
    <>
      {/* Mobile Sticky Bar - Visible only on small/medium screens (< lg) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-obsidian-950/95 backdrop-blur-xl border-t border-gold-500/30 shadow-2xl safe-area-pb">
        <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
          
          {/* Left: Recipe Name & ABV */}
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Wine className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-serif font-bold text-slate-100 truncate">
                {recipe.name}
              </h4>
              <span className="text-[10px] text-amber-400 font-mono">
                {recipe.techniqueZh} · {recipe.abv}% ABV
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Favorite button */}
            <button
              onClick={handleToggleFav}
              className={`p-2.5 rounded-xl border transition-all ${
                isFav
                  ? 'bg-rose-500/20 border-rose-500/50 text-rose-400'
                  : 'bg-obsidian-900 border-white/10 text-slate-400 hover:text-white'
              }`}
              title={isFav ? '取消收藏' : '加入心动收藏'}
            >
              <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-400 text-rose-400' : ''}`} />
            </button>

            {/* Launch Hands-Free Bar Mode */}
            <button
              onClick={() => setIsBarModeOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs flex items-center gap-1.5 shadow-gold-glow active:scale-95 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-obsidian-950" />
              <span>开启实操模式</span>
            </button>
          </div>

        </div>
      </div>

      {/* Bar Mode Fullscreen Modal */}
      <BarModeModal
        recipe={recipe}
        isOpen={isBarModeOpen}
        onClose={() => setIsBarModeOpen(false)}
      />
    </>
  );
}
