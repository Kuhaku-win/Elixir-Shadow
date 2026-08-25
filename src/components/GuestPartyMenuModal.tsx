import React, { useState } from 'react';
import { X, Wine, Sparkles, Share2, Check, Copy, Heart, Flame, BookOpen } from 'lucide-react';
import ChibiGlassIcon, { detectLiquidTheme } from './ChibiGlassIcon';
import FlavorRadar from './FlavorRadar';
import type { Recipe } from '../types/cocktail';

interface GuestPartyMenuModalProps {
  partyTitle: string;
  subtitle: string;
  bartenderName: string;
  partyDate: string;
  recipes: Recipe[];
  isOpen: boolean;
  onClose: () => void;
}

export default function GuestPartyMenuModal({
  partyTitle,
  subtitle,
  bartenderName,
  partyDate,
  recipes,
  isOpen,
  onClose
}: GuestPartyMenuModalProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(recipes[0] || null);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const current = selectedRecipe || recipes[0];

  const handleCopyShareLink = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/90 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-obsidian-900 border border-gold-500/30 shadow-2xl overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gold-500/20 bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
              <Wine className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30 font-mono font-bold">
                  📱 客人手机专属点酒单
                </span>
                <span className="text-xs text-slate-400">{partyDate}</span>
              </div>
              <h2 className="text-lg font-serif font-black text-slate-100 truncate">
                {partyTitle}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyShareLink}
              className="p-2 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-slate-300 hover:text-gold-300 transition-colors"
              title="复制酒单链接"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Guest View Body: Left Drink Tabs / Right Tasting Card */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
          
          {/* Left: Tonight's Drink List */}
          <div className="md:col-span-5 border-r border-gold-500/10 p-4 space-y-2 bg-obsidian-950/60">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1 flex items-center justify-between">
              <span>今晚精选酒单 ({recipes.length} 款)</span>
              <span className="text-gold-400/80 font-mono">Bartender: {bartenderName}</span>
            </div>

            {recipes.map((r) => {
              const isSelected = current?.id === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedRecipe(r)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center gap-3.5 ${
                    isSelected
                      ? 'bg-gold-500/15 border-gold-500/60 text-gold-300 shadow-gold-glow'
                      : 'bg-obsidian-900/70 border-white/5 text-slate-300 hover:border-gold-500/30'
                  }`}
                >
                  <ChibiGlassIcon
                    glass={r.glass}
                    cocktailName={r.name}
                    baseSpirit={r.baseSpirit}
                    size={38}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-sm font-serif font-bold truncate text-slate-100">
                        {r.name}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-obsidian-950 text-amber-400 border border-amber-500/30">
                        {r.abv}% ABV
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 truncate mt-0.5">
                      {r.ingredients.map(i => i.name).join(' · ')}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Cocktail Tasting & Story Card */}
          {current && (
            <div className="md:col-span-7 p-6 space-y-6 overflow-y-auto">
              
              {/* Top Banner */}
              <div className="flex items-start justify-between gap-4 p-5 rounded-2xl bg-obsidian-850 border border-gold-500/30">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30">
                      {current.baseSpiritZh}基底
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-obsidian-900 text-slate-300 border border-white/10">
                      {current.techniqueZh}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-black text-slate-100">
                    {current.name}
                  </h3>
                  <p className="text-xs text-gold-400 font-mono">
                    {current.nameEn}
                  </p>
                </div>

                <div className="p-2 rounded-2xl bg-obsidian-950 border border-gold-500/40 shadow-inner flex-shrink-0">
                  <ChibiGlassIcon
                    glass={current.glass}
                    cocktailName={current.name}
                    baseSpirit={current.baseSpirit}
                    size={64}
                  />
                </div>
              </div>

              {/* Story */}
              <div className="p-4 rounded-xl bg-obsidian-950/70 border border-white/5 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gold-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>酒品故事与风味意境</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed italic font-serif">
                  “{current.story || current.description}”
                </p>
              </div>

              {/* Flavor Radar & Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 rounded-xl bg-obsidian-850/80 border border-gold-500/20 items-center">
                <div className="sm:col-span-6 flex justify-center">
                  <FlavorRadar data={current.flavorRadar} />
                </div>
                <div className="sm:col-span-6 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 block">风味标签：</span>
                  <div className="flex flex-wrap gap-1.5">
                    {current.flavorProfiles.map((f) => (
                      <span key={f} className="text-xs px-2.5 py-0.5 rounded-full bg-obsidian-900 text-gold-300 border border-gold-500/30">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 text-xs text-slate-400">
                    <div>杯具：<strong className="text-slate-200">{current.glass.split('/')[0]}</strong></div>
                    <div>装饰：<strong className="text-slate-200">{current.garnish}</strong></div>
                  </div>
                </div>
              </div>

              {/* Ingredients Checklist */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  原料构成：
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {current.ingredients.map((ing, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-obsidian-900 border border-white/5 text-xs flex items-center justify-between">
                      <span className="text-slate-200">{ing.name}</span>
                      <span className="text-amber-300 font-mono">{ing.amountMl}ml</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-gold-500/20 bg-obsidian-850 flex items-center justify-between text-xs text-slate-400">
          <span>🍸 今夜请慢饮尽兴 · 适量饮酒，安全第一</span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold transition-colors"
          >
            返回海报定制
          </button>
        </div>

      </div>
    </div>
  );
}
