import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Quote as QuoteIcon, Sparkles } from 'lucide-react';
import { MASTER_QUOTES } from '../data/quotes';

interface DraggableMarqueeProps {
  speed?: number; // Base auto-cruise speed in pixels/frame (e.g. 0.65)
}

export default function DraggableMarquee({ speed = 0.7 }: DraggableMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const velocityRef = useRef(speed);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameIdRef = useRef<number | null>(null);

  // Triple items array for infinite loop wrapping
  const loopQuotes = [...MASTER_QUOTES, ...MASTER_QUOTES, ...MASTER_QUOTES];

  // Physics animation loop
  const animate = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    if (!isDragging) {
      const targetSpeed = isHovered ? 0.2 : speed;
      // Damped decay toward target cruising speed
      velocityRef.current += (targetSpeed - velocityRef.current) * 0.04;
      container.scrollLeft += velocityRef.current;

      // Infinite loop boundary wrapping
      const singleSetWidth = container.scrollWidth / 3;
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft -= singleSetWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += singleSetWidth;
      }
    }

    animFrameIdRef.current = requestAnimationFrame(animate);
  }, [isDragging, isHovered, speed]);

  useEffect(() => {
    animFrameIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [animate]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
    lastXRef.current = e.pageX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.35;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 12) {
      const dx = e.pageX - lastXRef.current;
      velocityRef.current = -dx / (dt / 16.6); // Normalize to frame velocity
      lastXRef.current = e.pageX;
      lastTimeRef.current = now;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch drag handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    const touch = e.touches[0];
    startXRef.current = touch.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
    lastXRef.current = touch.pageX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.35;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 12) {
      const dx = touch.pageX - lastXRef.current;
      velocityRef.current = -dx / (dt / 16.6);
      lastXRef.current = touch.pageX;
      lastTimeRef.current = now;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="relative w-full overflow-hidden py-4 select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
    >
      {/* Top Banner Meta */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-gold-400/90">
          <span>调酒大师箴言 · Master Philosophies</span>
        </div>
        <div className="text-[11px] font-mono text-slate-500 hidden sm:flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
          <span>← 自由滑动探索 →</span>
        </div>
      </div>

      {/* Edge Gradient Masks (Melius & Revelatio Style) */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-obsidian-950 via-obsidian-950/80 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-obsidian-950 via-obsidian-950/80 to-transparent z-20" />

      {/* Scrollable Track Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-2 ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        <div className="flex gap-5 sm:gap-6 shrink-0 px-4">
          {loopQuotes.map((quote, idx) => (
            <div
              key={`${quote.author}-${idx}`}
              className="w-[300px] sm:w-[420px] shrink-0 p-6 sm:p-7 rounded-2xl bg-obsidian-900/80 border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 backdrop-blur-xl shadow-obsidian-card hover:shadow-gold-glow flex flex-col justify-between group/card relative overflow-hidden"
            >
              {/* Subtle card spotlight glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none group-hover/card:bg-gold-500/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400/80" />
                  <QuoteIcon className="w-5 h-5 text-gold-500/25 rotate-180" />
                </div>
                <blockquote className="text-sm sm:text-base font-serif text-slate-100 italic leading-relaxed line-clamp-3 group-hover/card:text-gold-100 transition-colors">
                  “{quote.content}”
                </blockquote>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="font-serif font-bold text-gold-300 block text-xs sm:text-sm">
                    {quote.author}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    {quote.authorTitle}
                  </span>
                </div>
                {quote.source && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-950/80 border border-gold-500/20 text-gold-400/90 whitespace-nowrap">
                    {quote.source}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
