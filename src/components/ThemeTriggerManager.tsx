import React, { useState, useEffect, useRef } from 'react';
import { Palette, Sparkles, ChevronUp, Check, MousePointer } from 'lucide-react';
import ThemeSelectorModal from './ThemeSelectorModal';
import { THEMES_DATABASE } from '../data/themes';
import { CURSOR_MODES, type CursorModeId, DEFAULT_CURSOR_MODE } from '../data/cursorModes';

export default function ThemeTriggerManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>('dark-luxury');
  const [currentCursorMode, setCurrentCursorMode] = useState<CursorModeId>(DEFAULT_CURSOR_MODE);
  const [isFabExpanded, setIsFabExpanded] = useState(false);
  const [hudToast, setHudToast] = useState<{ title: string; subtitle: string; icon: string } | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showHudToast = (title: string, subtitle: string, icon: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setHudToast({ title, subtitle, icon });
    toastTimeoutRef.current = setTimeout(() => {
      setHudToast(null);
    }, 2200);
  };

  // Initialize theme & cursor mode on client mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('elixir_theme') || 'dark-luxury';
    const savedCursor = (localStorage.getItem('elixir_cursor_mode') as CursorModeId) || DEFAULT_CURSOR_MODE;
    
    setCurrentTheme(savedTheme);
    setCurrentCursorMode(savedCursor);
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-cursor-mode', savedCursor);

    // Bind header triggers
    const handleOpen = () => setIsOpen(true);
    const triggerDesktop = document.getElementById('header-theme-trigger');
    const triggerMobile = document.getElementById('mobile-theme-trigger');
    const triggerCursor = document.getElementById('header-cursor-trigger');

    triggerDesktop?.addEventListener('click', handleOpen);
    triggerMobile?.addEventListener('click', handleOpen);
    triggerCursor?.addEventListener('click', handleOpen);

    // Listen to cross-component cursor changes
    const handleCursorChange = (e: CustomEvent<CursorModeId>) => {
      if (e.detail) {
        setCurrentCursorMode(e.detail);
      }
    };
    window.addEventListener('cursor-mode-change', handleCursorChange as EventListener);

    // Keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      // Shortcut 'T' (Theme)
      if ((e.key === 't' || e.key === 'T') && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setCurrentTheme((prev) => {
          const currentIndex = THEMES_DATABASE.findIndex(t => t.id === prev);
          const nextIndex = (currentIndex + 1) % THEMES_DATABASE.length;
          const nextTheme = THEMES_DATABASE[nextIndex];
          document.documentElement.setAttribute('data-theme', nextTheme.id);
          localStorage.setItem('elixir_theme', nextTheme.id);
          showHudToast('视觉风格已切换', `${nextTheme.name} (${nextTheme.nameEn})`, nextTheme.icon);
          return nextTheme.id;
        });
      }

      // Shortcut 'C' (Cursor Mode)
      if ((e.key === 'c' || e.key === 'C') && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setCurrentCursorMode((prev) => {
          const currentIndex = CURSOR_MODES.findIndex(m => m.id === prev);
          const nextIndex = (currentIndex + 1) % CURSOR_MODES.length;
          const nextMode = CURSOR_MODES[nextIndex];
          document.documentElement.setAttribute('data-cursor-mode', nextMode.id);
          localStorage.setItem('elixir_cursor_mode', nextMode.id);
          window.dispatchEvent(new CustomEvent('cursor-mode-change', { detail: nextMode.id }));
          showHudToast('光标模态已切换', `${nextMode.name} · ${nextMode.badge}`, nextMode.icon);
          return nextMode.id;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      triggerDesktop?.removeEventListener('click', handleOpen);
      triggerMobile?.removeEventListener('click', handleOpen);
      triggerCursor?.removeEventListener('click', handleOpen);
      window.removeEventListener('cursor-mode-change', handleCursorChange as EventListener);
      window.removeEventListener('keydown', handleKeyDown);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  const handleSelectTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('elixir_theme', themeId);
  };

  const handleSelectCursor = (modeId: CursorModeId) => {
    setCurrentCursorMode(modeId);
    document.documentElement.setAttribute('data-cursor-mode', modeId);
    localStorage.setItem('elixir_cursor_mode', modeId);
    window.dispatchEvent(new CustomEvent('cursor-mode-change', { detail: modeId }));
  };

  const activeThemeObj = THEMES_DATABASE.find(t => t.id === currentTheme) || THEMES_DATABASE[0];
  const activeCursorObj = CURSOR_MODES.find(m => m.id === currentCursorMode) || CURSOR_MODES[0];

  return (
    <>
      {/* HUD Instant Toast Notification */}
      {hudToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-obsidian-900/95 border border-gold-500/40 shadow-2xl backdrop-blur-xl">
            <span className="text-xl">{hudToast.icon}</span>
            <div>
              <div className="text-xs font-serif font-bold text-slate-100">
                {hudToast.title}
              </div>
              <div className="text-[11px] font-sans text-gold-300">
                {hudToast.subtitle}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1. Floating Theme & Cursor Radial Fab (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 select-none group">
        
        {/* Expanded mini radial options */}
        {isFabExpanded && (
          <div className="flex flex-col items-end gap-2 p-3 rounded-2xl bg-obsidian-900/95 border border-gold-500/30 shadow-2xl backdrop-blur-xl mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200 w-56">
            <div className="text-[10px] font-bold text-gold-400/90 px-1 border-b border-white/5 w-full flex items-center justify-between pb-1">
              <span>视觉主题</span>
              <span className="text-slate-400 font-mono">按 T 切换</span>
            </div>
            
            <div className="grid grid-cols-1 gap-1 w-full">
              {THEMES_DATABASE.slice(0, 3).map((theme) => {
                const isSelected = theme.id === currentTheme;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      handleSelectTheme(theme.id);
                    }}
                    className={`w-full px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm'
                        : 'hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>{theme.icon}</span>
                      <span>{theme.name}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>

            <div className="text-[10px] font-bold text-gold-400/90 px-1 border-b border-white/5 w-full flex items-center justify-between pt-1 pb-1">
              <span>光标模态</span>
              <span className="text-slate-400 font-mono">按 C 切换</span>
            </div>

            <div className="grid grid-cols-1 gap-1 w-full">
              {CURSOR_MODES.map((mode) => {
                const isSelected = mode.id === currentCursorMode;
                return (
                  <button
                    key={mode.id}
                    onClick={() => {
                      handleSelectCursor(mode.id);
                    }}
                    className={`w-full px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm'
                        : 'hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>{mode.icon}</span>
                      <span>{mode.name}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => {
                setIsFabExpanded(false);
                setIsOpen(true);
              }}
              className="w-full mt-1 pt-2 border-t border-white/5 text-[11px] text-gold-400 hover:text-gold-300 font-semibold text-center hover:underline"
            >
              打开美学工坊大画廊 &rarr;
            </button>
          </div>
        )}

        {/* Floating Trigger Button */}
        <div className="flex items-center gap-2">
          {/* Tooltip hint badge */}
          <div className="hidden group-hover:flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-900/90 border border-gold-500/30 text-slate-200 text-xs shadow-lg backdrop-blur-md animate-fade-in">
            <span>{activeThemeObj.name} · {activeCursorObj.name}</span>
            <span className="text-gold-400 font-mono text-[10px]">[T/C 切换]</span>
          </div>

          <button
            onClick={() => setIsFabExpanded((prev) => !prev)}
            className="group/fab h-12 w-12 hover:w-28 rounded-2xl bg-obsidian-900/95 hover:bg-obsidian-850 border border-gold-500/35 hover:border-gold-500/70 text-gold-400 hover:text-gold-300 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 ease-out flex items-center justify-center backdrop-blur-md overflow-hidden px-3"
            aria-label="Toggle Theme and Cursor Switcher"
            title="点击切换主题与光标 (快捷键 T 换主题 / C 换光标)"
          >
            <Palette className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover/fab:rotate-12" />
            <span className="max-w-0 opacity-0 group-hover/fab:max-w-[60px] group-hover/fab:opacity-100 group-hover/fab:ml-1.5 transition-all duration-300 font-serif font-bold text-xs text-gold-300 whitespace-nowrap overflow-hidden">
              美学
            </span>
          </button>
        </div>

      </div>

      {/* 2. Full Immersive Theme & Cursor Modal */}
      <ThemeSelectorModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        currentTheme={currentTheme}
        onSelectTheme={handleSelectTheme}
      />
    </>
  );
}
