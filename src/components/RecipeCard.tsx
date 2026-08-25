import React, { useState, useEffect } from 'react';
import { Wine, Sparkles, Award, Heart } from 'lucide-react';
import ChibiGlassIcon from './ChibiGlassIcon';
import { isRecipeFavorite, toggleFavoriteRecipe } from '../utils/favorites';
import type { Recipe } from '../types/cocktail';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [hasImgError, setHasImgError] = useState(false);
  const [isFav, setIsFav] = useState(false);

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
    e.stopPropagation();
    const updated = toggleFavoriteRecipe(recipe.slug);
    setIsFav(updated);
  };

  // Difficulty color mapping
  const difficultyConfig = {
    easy: { label: '简单', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
    medium: { label: '中等', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
    advanced: { label: '进阶', color: 'text-rose-400 bg-rose-500/10 border-rose-500/30' }
  }[recipe.difficulty] || { label: '经典', color: 'text-slate-400 bg-white/5 border-white/10' };

  return (
    <a
      href={`/recipes/${recipe.slug}`}
      className="group relative flex flex-col rounded-xl bg-obsidian-850 border border-gold-500/20 overflow-hidden hover:border-gold-500/60 transition-all duration-300 hover:shadow-gold-glow hover:-translate-y-1"
    >
      {/* Top Image Box */}
      <div className="relative h-56 w-full overflow-hidden bg-obsidian-900 flex items-center justify-center">
        {recipe.image && !hasImgError ? (
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            loading="lazy"
            onError={() => setHasImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-obsidian-800 via-obsidian-900 to-obsidian-950 p-4 text-center">
            <ChibiGlassIcon
              glass={recipe.glass}
              cocktailName={recipe.name}
              baseSpirit={recipe.baseSpirit}
              size={68}
              className="mb-1.5 group-hover:scale-110 transition-transform duration-500"
            />
            <span className="text-xs font-serif text-slate-300 font-medium">{recipe.name}</span>
            <span className="text-[10px] text-slate-500 mt-0.5">{recipe.glass.split('/')[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-850 via-obsidian-850/30 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-obsidian-950/80 text-gold-300 border border-gold-500/30 backdrop-blur-sm shadow-sm">
            {recipe.baseSpiritZh}
          </span>
          {recipe.isIbaCertified && (
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-sm inline-flex items-center gap-1">
              <Award className="w-3 h-3" />
              IBA 认证
            </span>
          )}
          {recipe.category === 'competition' && (
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 backdrop-blur-sm inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              大赛冠军
            </span>
          )}
        </div>

        {/* Top Right Controls: Favorite & ABV */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <button
            onClick={handleToggleFav}
            className={`p-1.5 rounded-lg border backdrop-blur-md transition-all ${
              isFav
                ? 'bg-rose-500/30 border-rose-500/60 text-rose-400 shadow-sm'
                : 'bg-obsidian-950/80 border-white/10 text-slate-400 hover:text-rose-300 hover:border-rose-500/40'
            }`}
            title={isFav ? '取消收藏' : '加入我的收藏'}
          >
            <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-400 text-rose-400' : ''}`} />
          </button>
          <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-obsidian-950/85 text-amber-400 border border-amber-500/30 backdrop-blur-sm">
            {recipe.abv}% ABV
          </span>
        </div>

        {/* Glass / Technique pill at bottom of image */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300">
          <span className="truncate max-w-[65%] text-slate-400">{recipe.glass.split('/')[0]}</span>
          <span className="px-2 py-0.5 rounded bg-obsidian-900/80 text-slate-300 border border-white/10 text-[10px]">
            {recipe.techniqueZh}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-gold-300 transition-colors">
              {recipe.name}
            </h3>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${difficultyConfig.color}`}>
              {difficultyConfig.label}
            </span>
          </div>

          <p className="text-xs text-slate-400 font-sans tracking-wide mb-2.5">
            {recipe.nameEn}
          </p>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {recipe.description}
          </p>
        </div>

        {/* Flavor Tags */}
        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-1">
          <div className="flex flex-wrap gap-1">
            {recipe.flavorProfiles.map((f) => (
              <span
                key={f}
                className="text-[10px] px-2 py-0.5 rounded bg-obsidian-750 text-slate-400 border border-white/5 group-hover:border-gold-500/20 transition-colors"
              >
                {f}
              </span>
            ))}
          </div>
          <span className="text-[11px] text-gold-400/80 group-hover:text-gold-300 font-medium group-hover:translate-x-0.5 transition-transform inline-flex items-center">
            配方详情 &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}
