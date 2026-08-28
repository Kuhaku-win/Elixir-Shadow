import React, { useState, useEffect } from 'react';
import { 
  Palette, X, Check, Sparkles, Award, Eye, Compass, 
  Layers, Wine, ShieldCheck, Flame, ExternalLink, Image as ImageIcon,
  BookOpen, MousePointer
} from 'lucide-react';
import { THEMES_DATABASE, type CocktailTheme } from '../data/themes';
import { CURSOR_MODES, type CursorModeId, DEFAULT_CURSOR_MODE } from '../data/cursorModes';

interface ThemeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: string;
  onSelectTheme: (themeId: string) => void;
}

export default function ThemeSelectorModal({
  isOpen,
  onClose,
  currentTheme,
  onSelectTheme
}: ThemeSelectorModalProps) {
  const [selectedThemeId, setSelectedThemeId] = useState<string>(currentTheme);
  const [currentCursorMode, setCurrentCursorMode] = useState<CursorModeId>(DEFAULT_CURSOR_MODE);
  const [activeTab, setActiveTab] = useState<'themes' | 'cursors' | 'vintage-gallery' | 'sandbox'>('themes');
  const [sandboxComponent, setSandboxComponent] = useState<'card' | 'radar' | 'buttons'>('card');

  useEffect(() => {
    setSelectedThemeId(currentTheme);
    const savedCursor = (localStorage.getItem('elixir_cursor_mode') as CursorModeId) || DEFAULT_CURSOR_MODE;
    setCurrentCursorMode(savedCursor);
  }, [currentTheme, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentThemeObj = THEMES_DATABASE.find(t => t.id === selectedThemeId) || THEMES_DATABASE[0];
  const vintageTheme = THEMES_DATABASE.find(t => t.id === 'vintage-retro');

  const handleThemeApply = (themeId: string) => {
    setSelectedThemeId(themeId);
    onSelectTheme(themeId);
  };

  const handleCursorApply = (modeId: CursorModeId) => {
    setCurrentCursorMode(modeId);
    localStorage.setItem('elixir_cursor_mode', modeId);
    document.documentElement.setAttribute('data-cursor-mode', modeId);
    window.dispatchEvent(new CustomEvent('cursor-mode-change', { detail: modeId }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Main Dialog Container */}
      <div 
        className="relative w-full max-w-5xl bg-obsidian-900 border border-gold-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold-500/20 bg-obsidian-950/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-600 to-amber-600 p-0.5 shadow-gold-glow flex items-center justify-center text-obsidian-950">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-100">
                  美学主题与光标工坊
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30">
                  {THEMES_DATABASE.length} 风格 · 4 光标模态
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                暗黑奢华 · 白兰极简 · 复古怀旧 · 翡翠夜宴 · 赛博霓虹 · 先锋高定光标
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Tab Toggle */}
            <div className="hidden sm:flex items-center p-1 rounded-xl bg-obsidian-850 border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab('themes')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'themes' 
                    ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                视觉主题 ({THEMES_DATABASE.length})
              </button>
              <button
                onClick={() => setActiveTab('cursors')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === 'cursors' 
                    ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <MousePointer className="w-3.5 h-3.5" />
                <span>光标交互 ({CURSOR_MODES.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('vintage-gallery')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                  activeTab === 'vintage-gallery' 
                    ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                复古影集
              </button>
              <button
                onClick={() => setActiveTab('sandbox')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                  activeTab === 'sandbox' 
                    ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                沙盒演练
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 text-slate-400 hover:text-slate-100 border border-white/10 transition-colors"
              aria-label="Close theme modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* TAB 1: VISUAL THEMES */}
          {activeTab === 'themes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {THEMES_DATABASE.map((theme) => {
                const isActive = theme.id === selectedThemeId;
                return (
                  <div
                    key={theme.id}
                    onClick={() => handleThemeApply(theme.id)}
                    className={`group relative rounded-2xl p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                      isActive 
                        ? 'bg-obsidian-850 border-gold-500 shadow-gold-glow ring-2 ring-gold-500/40 -translate-y-1' 
                        : 'bg-obsidian-850/60 border-white/10 hover:border-gold-500/40 hover:bg-obsidian-850 hover:-translate-y-0.5'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl p-2 rounded-xl bg-obsidian-900 border border-white/10 shadow-inner">
                            {theme.icon}
                          </span>
                          <div>
                            <h3 className="text-base font-serif font-bold text-slate-100 group-hover:text-gold-300 transition-colors">
                              {theme.name}
                            </h3>
                            <span className="text-[11px] font-sans text-slate-400 font-medium">
                              {theme.nameEn}
                            </span>
                          </div>
                        </div>

                        {isActive ? (
                          <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-gold-500 text-obsidian-950 shadow-sm animate-pulse">
                            <Check className="w-3.5 h-3.5" />
                            当前激活
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-400 group-hover:text-gold-400 transition-colors">
                            点击应用 &rarr;
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {theme.shortDesc}
                      </p>

                      <div className="p-3 rounded-xl bg-obsidian-900/80 border border-white/5 space-y-2 mb-4">
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                          视觉色彩谱系 (Palette)
                        </span>
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: theme.palette.canvas }}
                            title={`底色: ${theme.palette.canvas}`}
                          />
                          <div 
                            className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: theme.palette.surface }}
                            title={`表面: ${theme.palette.surface}`}
                          />
                          <div 
                            className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: theme.palette.primary }}
                            title={`强调色: ${theme.palette.primary}`}
                          />
                          <div 
                            className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: theme.palette.border }}
                            title={`边框: ${theme.palette.border}`}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {theme.moodVibes.map((vibe, idx) => (
                          <span 
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/5"
                          >
                            #{vibe}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleThemeApply(theme.id);
                      }}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                        isActive
                          ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                          : 'bg-obsidian-900 hover:bg-gold-500/20 text-slate-300 hover:text-gold-300 border border-white/10 hover:border-gold-500/40'
                      }`}
                    >
                      {isActive ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>已在此美学模式下</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-gold-400" />
                          <span>切换至该主题</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: CURSOR AESTHETICS (4 MODES) */}
          {activeTab === 'cursors' && (
            <div className="space-y-6">
              <div className="bg-obsidian-850/60 border border-gold-500/20 rounded-2xl p-4 sm:p-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-serif font-bold text-slate-100 flex items-center gap-2">
                    <MousePointer className="w-4 h-4 text-gold-400" />
                    <span>先锋光标交互矩阵 · 4 大美学模态</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-2xl">
                    从纯粹的原版 Windows 极简零延迟指针，到流体光学透镜、语义动态胶囊与暗室焦散反光，根据您的个人品饮心境自由定制。
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-gold-300 font-mono bg-gold-500/10 px-3 py-1.5 rounded-xl border border-gold-500/25">
                  <span>快捷键切换:</span>
                  <kbd className="px-2 py-0.5 rounded bg-obsidian-950 border border-white/10 font-bold">C</kbd>
                </div>
              </div>

              {/* 4 Cursor Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {CURSOR_MODES.map((mode) => {
                  const isActive = mode.id === currentCursorMode;
                  return (
                    <div
                      key={mode.id}
                      onClick={() => handleCursorApply(mode.id)}
                      className={`group relative rounded-2xl p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                        isActive 
                          ? 'bg-obsidian-850 border-gold-500 shadow-gold-glow ring-2 ring-gold-500/40 -translate-y-1' 
                          : 'bg-obsidian-850/60 border-white/10 hover:border-gold-500/40 hover:bg-obsidian-850 hover:-translate-y-0.5'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="text-2xl w-10 h-10 rounded-xl bg-obsidian-900 border border-white/10 flex items-center justify-center shadow-inner">
                              {mode.icon}
                            </span>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-base font-serif font-bold text-slate-100 group-hover:text-gold-300 transition-colors">
                                  {mode.name}
                                </h4>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                                  {mode.nameEn}
                                </span>
                              </div>
                              <span className="text-[11px] font-sans text-gold-400 font-medium block mt-0.5">
                                {mode.badge}
                              </span>
                            </div>
                          </div>

                          {isActive ? (
                            <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-gold-500 text-obsidian-950 shadow-sm">
                              <Check className="w-3.5 h-3.5" />
                              当前启用
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400 group-hover:text-gold-400 transition-colors">
                              点击启用 &rarr;
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed mb-4 bg-obsidian-900/60 p-3 rounded-xl border border-white/5">
                          {mode.description}
                        </p>

                        {/* Feature Points */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {mode.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold-400/80 flex-shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCursorApply(mode.id);
                        }}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                          isActive
                            ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                            : 'bg-obsidian-900 hover:bg-gold-500/20 text-slate-300 hover:text-gold-300 border border-white/10 hover:border-gold-500/40'
                        }`}
                      >
                        {isActive ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>当前光标模式生效中</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-gold-400" />
                            <span>启用「{mode.name}」</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Test Sandbox for Cursors */}
              <div className="rounded-2xl p-5 bg-gradient-to-br from-obsidian-850 via-obsidian-900 to-obsidian-950 border border-gold-500/30 shadow-inner space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-serif font-bold text-gold-300 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-gold-400" />
                    <span>即时手感演练区 (Interactive Playground)</span>
                  </h4>
                  <span className="text-xs text-slate-400 font-sans">
                    移动鼠标、悬停下方元素或点击测试反馈
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-obsidian-850 border border-white/10 hover:border-gold-500/40 transition-all text-center group cursor-pointer" data-recipe-name="Dry Martini">
                    <span className="text-xs font-serif font-bold text-slate-200 group-hover:text-gold-300 block">
                      🍸 干马天尼卡片
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      悬停测试语义胶囊/透镜
                    </span>
                  </div>

                  <button className="p-4 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-bold transition-all text-center group">
                    <span className="block">✨ 点击测试水滴/火彩反馈</span>
                    <span className="text-[10px] text-gold-400/80 font-normal mt-1 block">
                      产生表面张力涟漪或金尘
                    </span>
                  </button>

                  <div className="p-4 rounded-xl bg-obsidian-850 border border-white/10 hover:border-purple-500/40 transition-all text-center group cursor-pointer" data-cursor="drag">
                    <span className="text-xs font-serif font-bold text-slate-200 group-hover:text-purple-300 block">
                      ⇄ 横向滑动区
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      测试拖拽指示变换
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: VINTAGE GALLERY */}
          {activeTab === 'vintage-gallery' && vintageTheme && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs leading-relaxed space-y-2">
                <div className="flex items-center gap-2 font-serif font-bold text-sm text-amber-400">
                  <BookOpen className="w-4 h-4" />
                  <span>复古真实影像考据库 (Historical Photographic Archive)</span>
                </div>
                <p>
                  汇集 19 世纪末至 20 世纪中叶的传世调酒工坊档案，从 Harry Johnson 的第一代帝国吧台，到禁酒令时期的地下 Speakeasy 密道，以真实的暗房银盐影像为基石重构调酒美学。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vintageTheme.vintageGallery?.map((item, idx) => (
                  <div 
                    key={idx}
                    className="group rounded-2xl overflow-hidden bg-obsidian-850 border border-white/10 hover:border-gold-500/40 transition-all flex flex-col"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-obsidian-950">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.35] contrast-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/70 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                      <div>
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="text-sm font-serif font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                            {item.title}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-400">
                            {item.subtitle}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/5 text-[11px] text-amber-400/80 italic font-serif">
                        &ldquo;{item.historicalNote}&rdquo;
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SANDBOX PREVIEW */}
          {activeTab === 'sandbox' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-obsidian-850/60 p-4 rounded-2xl border border-white/10">
                <div className="text-xs">
                  <span className="text-slate-400">当前测试主题：</span>
                  <span className="font-bold text-gold-300 font-serif ml-1">
                    {currentThemeObj.name} ({currentThemeObj.nameEn})
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs">
                  <button
                    onClick={() => setSandboxComponent('card')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      sandboxComponent === 'card' ? 'bg-gold-500 text-obsidian-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    配方卡片
                  </button>
                  <button
                    onClick={() => setSandboxComponent('radar')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      sandboxComponent === 'radar' ? 'bg-gold-500 text-obsidian-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    风味六芒星
                  </button>
                  <button
                    onClick={() => setSandboxComponent('buttons')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      sandboxComponent === 'buttons' ? 'bg-gold-500 text-obsidian-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    按键组件
                  </button>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-obsidian-950 border border-white/10 flex items-center justify-center min-h-[300px]">
                {sandboxComponent === 'card' && (
                  <div className="w-full max-w-sm rounded-2xl bg-obsidian-850 border border-gold-500/30 p-5 shadow-gold-glow space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/30">
                        IBA 经典 · 古典鸡尾酒
                      </span>
                      <span className="text-xs text-gold-400 font-bold font-mono">
                        38% ABV
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-serif font-bold text-slate-100">
                        Old Fashioned · 古典
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        波本威士忌 / 安格斯图拉苦精 / 方糖 / 橙皮精油
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-obsidian-900 text-slate-400 border border-white/5">
                        橡木焦糖
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-obsidian-900 text-slate-400 border border-white/5">
                        浓郁酒感
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-obsidian-900 text-slate-400 border border-white/5">
                        IBA认证
                      </span>
                    </div>
                  </div>
                )}

                {sandboxComponent === 'radar' && (
                  <div className="w-full max-w-sm rounded-xl bg-obsidian-850 border border-gold-500/30 p-6 shadow-gold-glow text-center space-y-4">
                    <h4 className="text-sm font-serif font-bold text-gold-300">
                      风味雷达六芒星 (Flavor Radar)
                    </h4>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="p-2 rounded-lg bg-obsidian-900 border border-white/5">
                        <span className="text-slate-400 block text-[10px]">酸度 Sour</span>
                        <span className="font-bold text-gold-300 font-mono">1.0 / 5</span>
                      </div>
                      <div className="p-2 rounded-lg bg-obsidian-900 border border-white/5">
                        <span className="text-slate-400 block text-[10px]">甜度 Sweet</span>
                        <span className="font-bold text-gold-300 font-mono">2.5 / 5</span>
                      </div>
                      <div className="p-2 rounded-lg bg-obsidian-900 border border-white/5">
                        <span className="text-slate-400 block text-[10px]">果香 Fruity</span>
                        <span className="font-bold text-gold-300 font-mono">1.5 / 5</span>
                      </div>
                      <div className="p-2 rounded-lg bg-obsidian-900 border border-white/5">
                        <span className="text-slate-400 block text-[10px]">酒感 Strong</span>
                        <span className="font-bold text-gold-300 font-mono">4.8 / 5</span>
                      </div>
                      <div className="p-2 rounded-lg bg-obsidian-900 border border-white/5">
                        <span className="text-slate-400 block text-[10px]">苦度 Bitter</span>
                        <span className="font-bold text-gold-300 font-mono">2.0 / 5</span>
                      </div>
                      <div className="p-2 rounded-lg bg-obsidian-900 border border-white/5">
                        <span className="text-slate-400 block text-[10px]">草本 Herbal</span>
                        <span className="font-bold text-gold-300 font-mono">3.0 / 5</span>
                      </div>
                    </div>
                  </div>
                )}

                {sandboxComponent === 'buttons' && (
                  <div className="w-full max-w-sm rounded-xl bg-obsidian-850 border border-gold-500/30 p-6 shadow-gold-glow space-y-4">
                    <h4 className="text-sm font-serif font-bold text-gold-300 mb-2">
                      按键与交互徽章 (Interactive Tokens)
                    </h4>
                    <div className="space-y-3">
                      <button className="w-full py-2.5 rounded-xl bg-gold-500 text-obsidian-950 font-bold text-xs shadow-gold-glow flex items-center justify-center gap-2">
                        <Wine className="w-4 h-4" />
                        <span>主要操作按键 (Primary Action)</span>
                      </button>
                      <button className="w-full py-2.5 rounded-xl bg-obsidian-900 text-gold-300 border border-gold-500/30 font-semibold text-xs flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>次要操作按键 (Secondary Action)</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-gold-500/20 bg-obsidian-950/60 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>快捷键提示：</span>
            <kbd className="px-2 py-0.5 rounded bg-obsidian-850 border border-white/10 font-mono text-[11px] text-gold-400">
              T
            </kbd>
            <span>切换主题</span>
            <span className="text-white/20">|</span>
            <kbd className="px-2 py-0.5 rounded bg-obsidian-850 border border-white/10 font-mono text-[11px] text-gold-400">
              C
            </kbd>
            <span>切换光标模式</span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="/themes" 
              className="text-gold-400 hover:text-gold-300 flex items-center gap-1 hover:underline"
            >
              <span>前往美学设计工坊深度解析</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gold-500 text-obsidian-950 font-bold text-xs hover:bg-gold-400 transition-colors"
            >
              完成并保存
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
