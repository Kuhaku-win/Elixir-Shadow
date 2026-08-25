import React, { useState, useEffect } from 'react';
import { Quote as QuoteIcon, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { MASTER_QUOTES } from '../data/quotes';

export default function QuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MASTER_QUOTES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = MASTER_QUOTES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MASTER_QUOTES.length) % MASTER_QUOTES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MASTER_QUOTES.length);
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto rounded-2xl p-6 sm:p-10 glass-card border border-gold-500/25 shadow-gold-glow overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Gold Quotation Mark */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>大师寄语 · 调酒哲思</span>
        </div>
        <QuoteIcon className="w-8 h-8 text-gold-500/30 rotate-180" />
      </div>

      {/* Quote Content */}
      <div className="min-h-[140px] sm:min-h-[120px] flex flex-col justify-center">
        <blockquote className="text-base sm:text-xl font-serif text-slate-100 leading-relaxed italic tracking-wide">
          “{current.content}”
        </blockquote>
      </div>

      {/* Author and Source */}
      <div className="mt-6 pt-4 border-t border-gold-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <div>
            <span className="font-semibold text-sm text-gold-300 mr-2">{current.author}</span>
            <span className="text-xs text-slate-400">{current.authorTitle}</span>
          </div>
          {current.source && (
            <span className="text-[11px] px-2 py-0.5 rounded bg-obsidian-800 border border-white/5 text-slate-500">
              {current.source}
            </span>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={handlePrev}
            className="p-1.5 rounded-full bg-obsidian-800/80 border border-gold-500/20 text-slate-400 hover:text-gold-300 hover:border-gold-500/50 transition-all"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 px-2">
            {MASTER_QUOTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? 'w-5 bg-gold-400' : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-1.5 rounded-full bg-obsidian-800/80 border border-gold-500/20 text-slate-400 hover:text-gold-300 hover:border-gold-500/50 transition-all"
            aria-label="Next quote"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
