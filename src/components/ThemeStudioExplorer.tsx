import React, { useState, useEffect } from 'react';
import { 
  Palette, Sparkles, Check, Award, Eye, Wine, 
  Flame, Compass, Droplets, ArrowRight, ShieldCheck,
  Image as ImageIcon, BookOpen, Clock, FileText
} from 'lucide-react';
import { THEMES_DATABASE, type CocktailTheme, type VintageTextureItem } from '../data/themes';

export default function ThemeStudioExplorer() {
  const [activeThemeId, setActiveThemeId] = useState<string>('dark-luxury');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeTexturePreview, setActiveTexturePreview] = useState<VintageTextureItem | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark-luxury';
    setActiveThemeId(current);

    const observer = new MutationObserver(() => {
      const updated = document.documentElement.getAttribute('data-theme') || 'dark-luxury';
      setActiveThemeId(updated);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const handleApplyTheme = (id: string) => {
    setActiveThemeId(id);
    document.documentElement.setAttribute('data-theme', id);
    localStorage.setItem('elixir_theme', id);
  };

  const handleCopy = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const currentTheme = THEMES_DATABASE.find(t => t.id === activeThemeId) || THEMES_DATABASE[0];
  const vintageTheme = THEMES_DATABASE.find(t => t.id === 'vintage-retro');

  return (
    <div className="space-y-12">
      {/* 1. Quick Switcher Tabs (3 Curated Themes) */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-2.5 rounded-2xl bg-obsidian-850 border border-gold-500/20 max-w-3xl mx-auto shadow-gold-glow">
        {THEMES_DATABASE.map((theme) => {
          const isSelected = theme.id === activeThemeId;
          return (
            <button
              key={theme.id}
              onClick={() => handleApplyTheme(theme.id)}
              className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isSelected
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow-md scale-105'
                  : 'hover:bg-white/10 text-slate-300 hover:text-white'
              }`}
            >
              <span className="text-lg">{theme.icon}</span>
              <span>{theme.name}</span>
              {isSelected && <Check className="w-4 h-4" />}
            </button>
          );
        })}
      </div>

      {/* 2. Active Theme Spotlight Banner */}
      <div className="rounded-3xl bg-obsidian-850 border border-gold-500/30 p-6 sm:p-10 relative overflow-hidden shadow-gold-glow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30 text-xs font-semibold">
              <span>{currentTheme.icon}</span>
              <span>当前激活世界观 · {currentTheme.nameEn}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-100 leading-tight">
              {currentTheme.name}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {currentTheme.fullDesc}
            </p>

            {/* Mood Vibes */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentTheme.moodVibes.map((vibe) => (
                <span 
                  key={vibe} 
                  className="text-xs px-3 py-1 rounded-lg bg-obsidian-900 border border-gold-500/20 text-slate-300 font-medium"
                >
                  #{vibe}
                </span>
              ))}
            </div>

            {/* Suitable cocktail scene */}
            <div className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/5 text-xs text-slate-400">
              <span className="text-gold-400 font-semibold">🍸 推荐品饮场景：</span>
              <span className="ml-1 text-slate-300">{currentTheme.suitableFor}</span>
            </div>
          </div>

          {/* Palette Swatches Deck */}
          <div className="lg:col-span-5 space-y-4 bg-obsidian-900/80 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gold-400 flex items-center justify-between">
              <span>核心色彩令牌 (Design Tokens)</span>
              <span className="text-[10px] text-slate-500 font-mono">点击复制 Hex</span>
            </h3>

            <div className="space-y-2.5">
              {[
                { label: 'Primary Accent (主强调色)', hex: currentTheme.palette.primary, desc: '标题、光影与主要按键' },
                { label: 'Secondary Accent (次强调色)', hex: currentTheme.palette.secondary, desc: '副高光与辅助徽章' },
                { label: 'Canvas Background (画布底色)', hex: currentTheme.palette.canvas, desc: '页面基础深邃画布' },
                { label: 'Surface Card (卡片表面)', hex: currentTheme.palette.surface, desc: '琉璃拟态与容器' },
                { label: 'Border Highlight (边框发光)', hex: currentTheme.palette.border, desc: '0.5px 精细边框' },
              ].map((token) => (
                <div 
                  key={token.label}
                  onClick={() => handleCopy(token.hex, token.label)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-obsidian-950/70 border border-white/5 hover:border-gold-500/40 cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-7 h-7 rounded-lg border border-white/20 shadow-inner flex-shrink-0"
                      style={{ backgroundColor: token.hex }}
                    />
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-gold-300 transition-colors">
                        {token.label.split(' ')[0]}
                      </div>
                      <div className="text-[10px] text-slate-400">{token.desc}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-gold-400">
                    <span>{token.hex}</span>
                    {copiedToken === token.label ? (
                      <span className="text-[10px] text-emerald-400">已复制</span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 3. Detailed 3 Themes Breakdown Cards */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
            三大调酒美学世界观对比
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            对标国际顶级获奖酒吧与经典设计名作，感受不同美学语境下的调酒艺术
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {THEMES_DATABASE.map((theme) => {
            const isSelected = theme.id === activeThemeId;
            return (
              <div 
                key={theme.id}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-obsidian-850 border-gold-500 shadow-gold-glow ring-2 ring-gold-500/30'
                    : 'bg-obsidian-850/70 border-white/10 hover:border-gold-500/30'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{theme.icon}</span>
                      <div>
                        <h4 className="text-base font-serif font-bold text-slate-100">
                          {theme.name}
                        </h4>
                        <span className="text-[11px] text-slate-400">{theme.nameEn}</span>
                      </div>
                    </div>

                    {isSelected ? (
                      <span className="px-2 py-0.5 rounded-full bg-gold-500 text-obsidian-950 text-[10px] font-bold">
                        当前应用
                      </span>
                    ) : null}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {theme.shortDesc}
                  </p>

                  {/* Visual Features list */}
                  <div className="space-y-1.5 border-t border-white/5 pt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-400">
                      视觉与工艺特征：
                    </span>
                    <ul className="space-y-1 text-[11px] text-slate-400">
                      {theme.visualFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-gold-400">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Real Bar Cases */}
                  <div className="space-y-2 border-t border-white/5 pt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-400 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      权威案例对标：
                    </span>
                    {theme.realCases.map((rc) => (
                      <div key={rc.name} className="p-2.5 rounded-xl bg-obsidian-900 border border-white/5 space-y-1">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
                          <span>{rc.name}</span>
                          <span className="text-[9px] text-amber-400 font-mono">{rc.badge}</span>
                        </div>
                        <p className="text-[10px] text-slate-400 leading-relaxed">{rc.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleApplyTheme(theme.id)}
                  className={`w-full mt-6 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    isSelected
                      ? 'bg-gold-500 text-obsidian-950 shadow-gold-glow'
                      : 'bg-obsidian-900 hover:bg-gold-500/20 text-slate-300 hover:text-gold-300 border border-white/10 hover:border-gold-500/40'
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>正在生效</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>切换为此主题</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Dedicated Vintage Retro: Real Archival Photography Gallery */}
      {vintageTheme?.vintageTextures && (
        <div className="rounded-3xl bg-amber-950/20 border border-amber-500/30 p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-500/20 pb-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Vintage Heritage Archival Gallery</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-slate-100">
                复古怀旧 · 100% 真实历史摄影与材质展
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/80 max-w-2xl">
                彻底杜绝任何卡通插画与人工虚假贴图。全量甄选 1920s 禁酒令报纸、实木橡木桶酒窖、欧洲蒸汽火车站牌与 Speakeasy 实景。
              </p>
            </div>

            <button
              onClick={() => handleApplyTheme('vintage-retro')}
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-obsidian-950 font-bold text-xs shadow-gold-glow transition-all flex items-center gap-2 whitespace-nowrap self-start sm:self-auto"
            >
              <span>立即体验复古怀旧主题</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vintageTheme.vintageTextures.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveTexturePreview(item)}
                className="rounded-2xl bg-obsidian-900 border border-amber-500/20 overflow-hidden shadow-lg hover:border-amber-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-56 w-full overflow-hidden bg-black">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/20 to-transparent pointer-events-none" />
                  
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-obsidian-950/85 text-amber-300 border border-amber-500/40 text-[11px] font-mono backdrop-blur-md">
                    {item.category}
                  </span>

                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-obsidian-950/80 text-slate-300 text-[10px] backdrop-blur-sm group-hover:text-amber-300 transition-colors flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>查看大图与历史考据</span>
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <h4 className="text-base font-serif font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-amber-400">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-3 border-t border-white/5 text-xs text-slate-400 flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">📜 历史考据：</span>
                    <span className="text-slate-300">{item.historicalNote}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Texture High-Res Lightbox Modal */}
      {activeTexturePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setActiveTexturePreview(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-obsidian-900 border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h4 className="text-base font-serif font-bold text-slate-100">{activeTexturePreview.title}</h4>
                <p className="text-xs text-amber-400 font-mono">{activeTexturePreview.subtitle}</p>
              </div>
              <button 
                onClick={() => setActiveTexturePreview(null)}
                className="p-1.5 rounded-lg bg-obsidian-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="rounded-xl overflow-hidden max-h-[420px] bg-black">
              <img 
                src={activeTexturePreview.image} 
                alt={activeTexturePreview.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-xs text-slate-300 leading-relaxed bg-obsidian-950 p-4 rounded-xl border border-white/5">
              <p>{activeTexturePreview.description}</p>
              <p className="mt-2 text-amber-300 font-medium">历史意义：{activeTexturePreview.historicalNote}</p>
            </div>
          </div>
        </div>
      )}

      {/* 6. Bottom Action Card */}
      <div className="text-center p-8 rounded-2xl bg-obsidian-850 border border-gold-500/20 space-y-4">
        <h4 className="text-lg font-serif font-bold text-slate-100">
          探索全站 100+ 经典配方与原料百科
        </h4>
        <p className="text-xs text-slate-400 max-w-xl mx-auto">
          主题切换后已自动保存至本地，您可以在全站任意页面畅享所选美学风格的沉浸体验。
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="/recipes"
            className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs shadow-gold-glow flex items-center gap-1.5 transition-all"
          >
            <Wine className="w-4 h-4" />
            <span>浏览配方酒谱库</span>
          </a>
          <a
            href="/my-bar"
            className="px-6 py-2.5 rounded-xl bg-obsidian-900 hover:bg-obsidian-800 text-gold-300 border border-gold-500/30 font-semibold text-xs transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>前往我的调酒吧台</span>
          </a>
        </div>
      </div>
    </div>
  );
}
