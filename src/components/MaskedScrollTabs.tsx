import React, { useRef, useEffect } from 'react';

export interface TabOption {
  key: string;
  label: string;
  count?: number | string;
  icon?: string;
}

interface MaskedScrollTabsProps {
  options: TabOption[];
  activeKey: string;
  onChange: (key: string) => void;
  className?: string;
  size?: 'sm' | 'md';
}

export default function MaskedScrollTabs({
  options,
  activeKey,
  onChange,
  className = '',
  size = 'md',
}: MaskedScrollTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleSelect = (key: string, btnElement: HTMLButtonElement) => {
    onChange(key);
    if (containerRef.current) {
      const container = containerRef.current;
      const targetLeft = btnElement.offsetLeft - container.offsetWidth / 2 + btnElement.offsetWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Scrollable Container with Edge Mask */}
      <div
        ref={containerRef}
        className="flex items-center gap-2 overflow-x-auto py-1 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0px, black 20px, black calc(100% - 20px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 20px, black calc(100% - 20px), transparent 100%)',
        }}
      >
        {options.map((opt) => {
          const isActive = opt.key === activeKey;
          return (
            <button
              key={opt.key}
              ref={isActive ? activeBtnRef : null}
              type="button"
              onClick={(e) => handleSelect(opt.key, e.currentTarget)}
              className={`group/tab relative shrink-0 rounded-full font-sans transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-xs sm:text-sm'
              } ${
                isActive
                  ? 'bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 text-obsidian-950 font-bold shadow-gold-glow scale-[1.02]'
                  : 'bg-obsidian-900/80 text-slate-300 hover:text-gold-300 hover:bg-obsidian-800/90 border border-white/5 hover:border-gold-500/30'
              }`}
            >
              {opt.icon && <span className="text-xs">{opt.icon}</span>}
              <span className="whitespace-nowrap">{opt.label}</span>
              {opt.count !== undefined && (
                <span
                  className={`font-mono text-[10px] px-1.5 py-0.2 rounded-full transition-colors ${
                    isActive
                      ? 'bg-obsidian-950/25 text-obsidian-950 font-bold'
                      : 'bg-obsidian-950/80 text-slate-400 group-hover/tab:text-gold-300 border border-white/5'
                  }`}
                >
                  {opt.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
