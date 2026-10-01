import React from 'react';
import { Globe, X, Check, Command } from 'lucide-react';
import { useI18n, type SupportedLocale } from '../i18n';

interface LanguageSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LanguageSelectorModal({ isOpen, onClose }: LanguageSelectorModalProps) {
  const { locale, setLocale, locales, t } = useI18n();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-obsidian-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-2xl bg-obsidian-900 border border-gold-500/30 p-6 shadow-gold-glow-lg transition-all duration-300 animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-slate-100 flex items-center gap-2">
                <span>{t.common.switchLanguage}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-400 font-mono font-normal">
                  5 Languages
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {t.common.pressShortcutToSwitch}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            title={t.common.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Language Options Grid */}
        <div className="mt-5 space-y-2.5">
          {locales.map((item) => {
            const isSelected = item.code === locale;
            return (
              <button
                key={item.code}
                onClick={() => {
                  setLocale(item.code);
                  setTimeout(() => onClose(), 150);
                }}
                className={`w-full group flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 text-left ${
                  isSelected
                    ? 'bg-gradient-to-r from-gold-500/20 via-amber-500/15 to-transparent border-gold-500/60 shadow-gold-glow'
                    : 'bg-obsidian-850/80 border-white/5 hover:border-gold-500/30 hover:bg-obsidian-800'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="text-2xl flex-shrink-0" role="img" aria-label={item.englishName}>
                    {item.flag}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-base font-medium transition-colors ${
                        isSelected ? 'text-gold-300 font-semibold' : 'text-slate-200 group-hover:text-gold-300'
                      }`}>
                        {item.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        ({item.englishName})
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pl-3 flex-shrink-0">
                  {isSelected ? (
                    <div className="w-7 h-7 rounded-full bg-gold-400 text-obsidian-950 flex items-center justify-center shadow-sm">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full border border-white/10 group-hover:border-gold-500/40 flex items-center justify-center text-xs text-slate-500 group-hover:text-gold-400 font-mono transition-colors">
                      {item.code.split('-')[0].toUpperCase()}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer info & shortcut indicator */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-slate-400">
            <Command className="w-3.5 h-3.5 text-gold-400" />
            <span>按快捷键 <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gold-300 font-mono text-[11px] border border-white/10">L</kbd> 随时循环切语</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-obsidian-800 hover:bg-obsidian-750 border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            {t.common.confirm}
          </button>
        </div>

      </div>
    </div>
  );
}
