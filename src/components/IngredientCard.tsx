import React, { useState } from 'react';
import type { Ingredient } from '../types/cocktail';
import { BookOpen, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';

interface IngredientCardProps {
  ingredient: Ingredient;
}

export default function IngredientCard({ ingredient }: IngredientCardProps) {
  const [hasImgError, setHasImgError] = useState(false);

  return (
    <div className="group relative rounded-xl bg-obsidian-850 border border-gold-500/20 overflow-hidden hover:border-gold-500/50 transition-all duration-300 hover:shadow-gold-glow flex flex-col justify-between">
      {/* Top Image & Badge */}
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-b from-obsidian-900 to-obsidian-850 flex items-center justify-center p-3">
        {ingredient.image && !hasImgError ? (
          <img
            src={ingredient.image}
            alt={ingredient.name}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-md"
            loading="lazy"
            onError={() => setHasImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center">
            <ShoppingBag className="w-10 h-10 text-gold-400/40 mb-1" />
            <span className="text-xs text-slate-400">{ingredient.name}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-850 via-transparent to-transparent pointer-events-none" />

        {/* Category & ABV Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-obsidian-950/80 text-gold-300 border border-gold-500/30 backdrop-blur-sm">
            {ingredient.categoryZh}
          </span>
          {ingredient.abv > 0 && (
            <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-obsidian-950/85 text-amber-400 border border-amber-500/30 backdrop-blur-sm">
              {ingredient.abv}% ABV
            </span>
          )}
        </div>

        <div className="absolute bottom-2.5 left-3 text-xs text-slate-400">
          产地：{ingredient.origin}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="mb-2">
            <h3 className="text-base font-serif font-bold text-slate-100 group-hover:text-gold-300 transition-colors">
              {ingredient.name}
            </h3>
            <p className="text-xs text-slate-400">{ingredient.nameEn}</p>
          </div>

          <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-3">
            {ingredient.flavorDescription}
          </p>

          {/* Common Cocktails */}
          {ingredient.commonUsage.length > 0 && (
            <div className="space-y-1 pt-2 border-t border-white/5">
              <span className="text-[11px] text-gold-400 font-semibold block">经典适用酒款：</span>
              <div className="flex flex-wrap gap-1">
                {ingredient.commonUsage.slice(0, 3).map((drink, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-obsidian-750 text-slate-400 border border-white/5">
                    {drink.split('(')[0].trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Buying & Storage footer */}
        <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400 space-y-1.5">
          <div className="flex items-start gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5 text-gold-400/80 flex-shrink-0 mt-0.5" />
            <span className="line-clamp-1">选购：{ingredient.buyingGuide}</span>
          </div>
          <div className="flex items-start gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400/80 flex-shrink-0 mt-0.5" />
            <span className="line-clamp-1">保存：{ingredient.storageMethod}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
