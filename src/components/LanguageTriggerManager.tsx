import React, { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import LanguageSelectorModal from './LanguageSelectorModal';
import { useI18n, cycleNextLocale, SUPPORTED_LOCALES } from '../i18n';

export default function LanguageTriggerManager() {
  const { locale, locales } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [hudToast, setHudToast] = useState<{ flag: string; name: string; englishName: string } | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showHudToast = (flag: string, name: string, englishName: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setHudToast({ flag, name, englishName });
    toastTimeoutRef.current = setTimeout(() => {
      setHudToast(null);
    }, 2000);
  };

  useEffect(() => {
    // Bind click events on desktop & mobile header triggers if present
    const handleOpen = () => setIsOpen(true);
    const triggerDesktop = document.getElementById('header-lang-trigger');
    const triggerMobile = document.getElementById('mobile-lang-trigger');

    triggerDesktop?.addEventListener('click', handleOpen);
    triggerMobile?.addEventListener('click', handleOpen);

    // Global Keyboard Shortcut: 'L'
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      // Shortcut 'L'
      if ((e.key === 'l' || e.key === 'L') && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        const nextLocaleCode = cycleNextLocale();
        const nextLocaleMeta = SUPPORTED_LOCALES.find(l => l.code === nextLocaleCode);
        if (nextLocaleMeta) {
          showHudToast(nextLocaleMeta.flag, nextLocaleMeta.name, nextLocaleMeta.englishName);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      triggerDesktop?.removeEventListener('click', handleOpen);
      triggerMobile?.removeEventListener('click', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  const currentMeta = locales.find(l => l.code === locale) || locales[0];

  return (
    <>
      {/* Floating Action Trigger Button (Bottom-Right, positioned left of theme trigger) */}
      <div className="fixed bottom-6 right-20 z-40 hidden sm:block">
        <button
          onClick={() => setIsOpen(true)}
          title={`切换语言 (快捷键: L) · 当前: ${currentMeta.name}`}
          className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-obsidian-900/90 border border-gold-500/30 text-gold-300 hover:text-gold-200 hover:border-gold-500/70 hover:shadow-gold-glow transition-all duration-300 backdrop-blur-md shadow-lg"
        >
          <span className="text-base" role="img" aria-label={currentMeta.name}>
            {currentMeta.flag}
          </span>
          <span className="text-xs font-serif font-medium tracking-wider text-slate-200 group-hover:text-gold-300">
            {currentMeta.code.split('-')[0].toUpperCase()}
          </span>
          <span className="hidden group-hover:inline-block text-[10px] text-slate-400 font-mono pl-0.5 border-l border-white/10">
            L
          </span>
        </button>
      </div>

      {/* Floating HUD Toast on quick shortcut change */}
      {hudToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-obsidian-900/95 border border-gold-500/40 shadow-gold-glow-lg backdrop-blur-xl text-slate-100">
            <span className="text-2xl" role="img" aria-label="Flag">
              {hudToast.flag}
            </span>
            <div className="flex flex-col">
              <span className="text-xs text-gold-400 font-serif uppercase tracking-widest">
                Language Switched · 语言已切换
              </span>
              <span className="text-sm font-semibold text-white">
                {hudToast.name} <span className="text-xs text-slate-400 font-normal">({hudToast.englishName})</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Language Selector Modal */}
      <LanguageSelectorModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
