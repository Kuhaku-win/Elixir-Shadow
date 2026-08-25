import React, { useState, useEffect } from 'react';
import { Palette, Sparkles, ChevronUp, Check } from 'lucide-react';
import ThemeSelectorModal from './ThemeSelectorModal';
import { THEMES_DATABASE } from '../data/themes';

export default function ThemeTriggerManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>('dark-luxury');
  const [isFabExpanded, setIsFabExpanded] = useState(false);

  // Initialize theme on client mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('elixir_theme') || 'dark-luxury';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Bind header triggers
    const handleOpen = () => setIsOpen(true);
    const triggerDesktop = document.getElementById('header-theme-trigger');
    const triggerMobile = document.getElementById('mobile-theme-trigger');

    triggerDesktop?.addEventListener('click', handleOpen);
    triggerMobile?.addEventListener('click', handleOpen);

    // Keyboard shortcut 'T'
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in input or textarea
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      if ((e.key === 't' || e.key === 'T') && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        // Cycle to next theme
        setCurrentTheme((prev) => {
          const currentIndex = THEMES_DATABASE.findIndex(t => t.id === prev);
          const nextIndex = (currentIndex + 1) % THEMES_DATABASE.length;
          const nextTheme = THEMES_DATABASE[nextIndex].id;
          document.documentElement.setAttribute('data-theme', nextTheme);
          localStorage.setItem('elixir_theme', nextTheme);
          return nextTheme;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      triggerDesktop?.removeEventListener('click', handleOpen);
      triggerMobile?.removeEventListener('click', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelectTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('elixir_theme', themeId);
  };

  const activeThemeObj = THEMES_DATABASE.find(t => t.id === currentTheme) || THEMES_DATABASE[0];

  return (
    <>
      {/* 1. Floating Theme Radial Fab (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 select-none group">
        
        {/* Expanded mini radial theme options */}
        {isFabExpanded && (
          <div className="flex flex-col items-end gap-1.5 p-2 rounded-2xl bg-obsidian-900/95 border border-gold-500/30 shadow-2xl backdrop-blur-xl mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="text-[10px] font-semibold text-slate-400 px-2 py-1 border-b border-white/5 w-full text-center">
              选择主题风格
            </div>
            {THEMES_DATABASE.map((theme) => {
              const isSelected = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    handleSelectTheme(theme.id);
                    setIsFabExpanded(false);
                  }}
                  className={`w-full px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm'
                      : 'hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{theme.icon}</span>
                    <span>{theme.name}</span>
                  </div>
                  <div 
                    className="w-2.5 h-2.5 rounded-full border border-white/20"
                    style={{ backgroundColor: theme.palette.primary }}
                  />
                </button>
              );
            })}
            
            <button
              onClick={() => {
                setIsFabExpanded(false);
                setIsOpen(true);
              }}
              className="w-full mt-1 pt-1.5 border-t border-white/5 text-[11px] text-gold-400 hover:text-gold-300 font-semibold text-center hover:underline"
            >
              打开主题设计画廊 &rarr;
            </button>
          </div>
        )}

        {/* Floating Trigger Button with Horizontal Expansion on Hover */}
        <div className="flex items-center gap-2">
          {/* Tooltip hint badge (T shortcut) */}
          <div className="hidden group-hover:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-obsidian-900/90 border border-gold-500/30 text-slate-200 text-xs shadow-lg backdrop-blur-md animate-fade-in">
            <span>当前：{activeThemeObj.name}</span>
            <kbd className="px-1.5 py-0.5 rounded bg-obsidian-950 border border-white/10 font-mono text-[10px] text-gold-400">
              按 T 切换
            </kbd>
          </div>

          <button
            onClick={() => setIsFabExpanded((prev) => !prev)}
            className="group/fab h-12 w-12 hover:w-28 rounded-2xl bg-obsidian-900/95 hover:bg-obsidian-850 border border-gold-500/35 hover:border-gold-500/70 text-gold-400 hover:text-gold-300 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 ease-out flex items-center justify-center backdrop-blur-md overflow-hidden px-3"
            aria-label="Toggle Theme Switcher"
            title="点击切换主题风格 (快捷键 T)"
          >
            <Palette className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover/fab:rotate-12" />
            <span className="max-w-0 opacity-0 group-hover/fab:max-w-[60px] group-hover/fab:opacity-100 group-hover/fab:ml-1.5 transition-all duration-300 font-serif font-bold text-xs text-gold-300 whitespace-nowrap overflow-hidden">
              主题
            </span>
          </button>
        </div>

      </div>

      {/* 2. Full Immersive Theme Modal */}
      <ThemeSelectorModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        currentTheme={currentTheme}
        onSelectTheme={handleSelectTheme}
      />
    </>
  );
}
