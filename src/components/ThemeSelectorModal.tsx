import React, { useState, useEffect } from 'react';
import { 
  Palette, X, Check, Sparkles, Award, Eye, Compass, 
  Layers, Wine, ShieldCheck, Flame, ExternalLink, Image as ImageIcon,
  BookOpen
} from 'lucide-react';
import { THEMES_DATABASE, type CocktailTheme } from '../data/themes';

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
  const [activeTab, setActiveTab] = useState<'themes' | 'vintage-gallery' | 'sandbox'>('themes');
  const [sandboxComponent, setSandboxComponent] = useState<'card' | 'radar' | 'buttons'>('card');

  useEffect(() => {
    setSelectedThemeId(currentTheme);
  }, [currentTheme]);

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
                  鸡尾酒美学主题工坊
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30">
                  3 大大师级美学风格
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                暗黑奢华 · 白兰极简 · 复古怀旧 (真实历史档案与实木光影)
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
                风格画廊
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
                复古真实影像展
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
                沙盒实时预览
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
          {activeTab === 'themes' && (
            /* 3 Master Theme Cards Grid */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                    {/* Top Row: Icon, Title & Active Checkmark */}
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

                      {/* Short Description */}
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {theme.shortDesc}
                      </p>

                      {/* Color Palette Swatches */}
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
                            title={`主强调色: ${theme.palette.primary}`}
                          />
                          <div 
                            className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: theme.palette.secondary }}
                            title={`次强调色: ${theme.palette.secondary}`}
                          />
                          <div 
                            className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: theme.palette.border }}
                            title={`边框辉光: ${theme.palette.border}`}
                          />
                        </div>
                      </div>

                      {/* Mood Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {theme.moodVibes.map((vibe) => (
                          <span 
                            key={vibe} 
                            className="text-[10px] px-2 py-0.5 rounded-md bg-obsidian-900 border border-white/5 text-slate-400 font-medium"
                          >
                            #{vibe}
                          </span>
                        ))}
                      </div>

                      {/* Real Case References */}
                      <div className="border-t border-white/5 pt-3 space-y-2">
                        <span className="text-[10px] font-semibold text-gold-400/90 uppercase tracking-wider flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          权威案例对标
                        </span>
                        <div className="space-y-1.5">
                          {theme.realCases.map((rc) => (
                            <div key={rc.name} className="text-[11px] bg-obsidian-900/50 p-2 rounded-lg border border-white/5">
                              <div className="flex items-center justify-between font-semibold text-slate-200">
                                <span>{rc.name}</span>
                                <span className="text-[9px] text-amber-400 font-mono px-1.5 py-0.2 rounded bg-amber-500/10">{rc.badge}</span>
                              </div>
                              <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{rc.tagline}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleThemeApply(theme.id);
                      }}
                      className={`w-full mt-4 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        isActive
                          ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                          : 'bg-obsidian-900 hover:bg-gold-500/20 text-slate-300 hover:text-gold-300 border border-white/10 hover:border-gold-500/40'
                      }`}
                    >
                      {isActive ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>正在使用此主题</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>立即应用此风格</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Tab 2: Vintage Authentic Real Photo Gallery */}
          {activeTab === 'vintage-gallery' && vintageTheme?.vintageTextures && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-base">
                    <span>🪵</span>
                    <span>复古怀旧 · 100% 真实历史档案与实木影像展</span>
                  </div>
                  <p className="text-xs text-amber-200/80">
                    杜绝一切卡通插图与人工虚假贴图，全量采用真实 1920s 禁酒令报纸、橡木酒窖、古董火车站牌与 Speakeasy 实景。
                  </p>
                </div>
                <button
                  onClick={() => handleThemeApply('vintage-retro')}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-obsidian-950 font-bold text-xs shadow-md transition-all whitespace-nowrap"
                >
                  应用复古怀旧风
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {vintageTheme.vintageTextures.map((item, idx) => (
                  <div key={idx} className="rounded-2xl bg-obsidian-850 border border-amber-500/20 overflow-hidden shadow-lg group">
                    <div className="relative h-48 w-full overflow-hidden bg-black">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-obsidian-950/80 text-amber-300 border border-amber-500/40 text-[10px] font-mono backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-4 space-y-2">
                      <h4 className="text-sm font-serif font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-mono text-amber-400/90">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 italic">
                        历史典故：{item.historicalNote}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Live Sandbox Preview Mode */}
          {activeTab === 'sandbox' && (
            <div className="space-y-6">
              {/* Top Theme Quick Bar in Sandbox */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-obsidian-850 border border-gold-500/20">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-300">当前沙盒主题：</span>
                  <span className="text-sm font-serif font-bold text-gold-300 flex items-center gap-1.5">
                    <span>{currentThemeObj.icon}</span>
                    <span>{currentThemeObj.name}</span>
                  </span>
                </div>

                {/* Switch Sandbox Sub-components */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-obsidian-900 border border-white/10 text-xs">
                  <button
                    onClick={() => setSandboxComponent('card')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      sandboxComponent === 'card' ? 'bg-gold-500 text-obsidian-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    配方卡片
                  </button>
                  <button
                    onClick={() => setSandboxComponent('radar')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      sandboxComponent === 'radar' ? 'bg-gold-500 text-obsidian-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    风味六芒星
                  </button>
                  <button
                    onClick={() => setSandboxComponent('buttons')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      sandboxComponent === 'buttons' ? 'bg-gold-500 text-obsidian-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    交互控件
                  </button>
                </div>
              </div>

              {/* Sandbox Render Container */}
              <div className="p-6 sm:p-10 rounded-2xl bg-obsidian-950 border border-gold-500/30 flex items-center justify-center min-h-[320px]">
                {sandboxComponent === 'card' && (
                  <div className="w-full max-w-sm rounded-xl bg-obsidian-850 border border-gold-500/30 overflow-hidden shadow-gold-glow p-5 space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 font-semibold border border-gold-500/30">
                        Whiskey 基底
                      </span>
                      <span className="font-mono text-amber-400 font-bold">32% ABV</span>
                    </div>

                    <div>
                      <h4 className="text-xl font-serif font-bold text-slate-100">
                        老式鸡尾酒 (Old Fashioned)
                      </h4>
                      <p className="text-xs text-gold-400 mt-0.5">The Original Classic 1806</p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      黑麦威士忌在方糖、安格斯图拉苦精与大冰块的交融中化解刚烈，展现纯正橡木桶焦糖与草本芳香。
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
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
            <span>快捷键提示：按键盘</span>
            <kbd className="px-2 py-0.5 rounded bg-obsidian-850 border border-white/10 font-mono text-[11px] text-gold-400">
              T
            </kbd>
            <span>可在 3 大主题间循环切换</span>
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
