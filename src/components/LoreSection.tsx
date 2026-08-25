import React, { useState } from 'react';
import { LORE_STORIES } from '../data/lore';
import { BookOpen, Sparkles, ArrowRight, X, Clock } from 'lucide-react';
import type { LoreStory } from '../types/cocktail';

export default function LoreSection() {
  const [selectedStory, setSelectedStory] = useState<LoreStory | null>(null);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chronicles of Spirits</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-100 mb-4 tracking-tight">
            酒精秘史与微醺典故
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            每一杯传世调酒的背后，都封存着一段横跨战火、禁令、文豪与传奇年代的秘史。探寻杯中甘露的前世今生。
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LORE_STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group relative rounded-xl bg-obsidian-850/80 border border-gold-500/20 overflow-hidden hover:border-gold-500/50 transition-all duration-300 hover:shadow-gold-glow flex flex-col cursor-pointer"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-obsidian-900">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-850 via-obsidian-850/40 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-obsidian-950/80 text-gold-300 border border-gold-500/30 backdrop-blur-sm">
                    {story.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center text-[11px] text-slate-400">
                  <Clock className="w-3 h-3 mr-1 text-gold-400" />
                  <span>{story.era}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-gold-300 transition-colors mb-2">
                    {story.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {story.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gold-400 group-hover:text-gold-300 font-medium inline-flex items-center gap-1 transition-all group-hover:translate-x-0.5">
                    阅读秘史全文 <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  {story.relatedRecipeName && (
                    <span className="text-[11px] text-slate-500">
                      配方：{story.relatedRecipeName.split(' ')[0]}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full story */}
        {selectedStory && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedStory(null)}
          >
            <div 
              className="relative w-full max-w-2xl max-h-[90vh] bg-obsidian-900 border border-gold-500/30 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-obsidian-800 border border-white/10 text-slate-400 hover:text-white hover:border-gold-500/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Story Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30">
                  {selectedStory.tag}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold-500/70" />
                  {selectedStory.era}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100 mb-2">
                {selectedStory.title}
              </h3>
              <p className="text-xs sm:text-sm text-gold-400/90 font-serif italic mb-6">
                {selectedStory.subtitle}
              </p>

              {/* Cover in Modal */}
              <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Story Body */}
              <div className="prose prose-invert max-w-none text-sm sm:text-base text-slate-300 leading-relaxed space-y-4 font-sans">
                {selectedStory.fullStory.split('\n\n').map((para, i) => (
                  <p key={i} className="text-justify whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>

              {/* Footer with recipe link */}
              {selectedStory.relatedRecipeSlug && (
                <div className="mt-8 pt-6 border-t border-gold-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-obsidian-850/60 p-4 rounded-xl">
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">典故对应传世酒谱</span>
                    <span className="text-sm font-semibold text-gold-300">{selectedStory.relatedRecipeName}</span>
                  </div>
                  <a
                    href={`/recipes/${selectedStory.relatedRecipeSlug}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gold-500 text-obsidian-950 hover:bg-gold-400 font-semibold text-xs transition-colors shadow-gold-glow"
                  >
                    <span>调制此款鸡尾酒</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
