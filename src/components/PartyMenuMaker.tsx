import React, { useState, useRef, useMemo } from 'react';
import { RECIPES_DATABASE } from '../data/recipes';
import ChibiGlassIcon, { detectGlassVariant, detectLiquidTheme } from './ChibiGlassIcon';
import { drawChibiGlassToCanvas } from '../utils/canvasGlass';
import GuestPartyMenuModal from './GuestPartyMenuModal';
import { 
  Sparkles, Wine, Download, Copy, Check, Plus, Trash2, 
  Palette, Search, Calendar, User, GlassWater, ShieldAlert, Loader2, Smartphone
} from 'lucide-react';
import type { Recipe } from '../types/cocktail';

export type PosterTheme = 'obsidian-gold' | 'parchment-vintage' | 'emerald-aurora' | 'cyber-neon';

const themeConfigs: Record<PosterTheme, {
  name: string;
  badge: string;
  bgGrad: [string, string, string];
  cardBg: string;
  borderColor: string;
  accentColor: string;
  titleColor: string;
  subtitleColor: string;
}> = {
  'obsidian-gold': {
    name: '暗夜黑金 (Classic Speakeasy)',
    badge: '👑 黑金奢华',
    bgGrad: ['#0c0d12', '#07080b', '#030406'],
    cardBg: 'rgba(18, 19, 26, 0.92)',
    borderColor: '#dfb15b',
    accentColor: '#dfb15b',
    titleColor: '#dfb15b',
    subtitleColor: '#e2e8f0'
  },
  'parchment-vintage': {
    name: '复古羊皮纸 (Vintage Tavern)',
    badge: '📜 羊皮古典',
    bgGrad: ['#1c1712', '#140f0a', '#0a0805'],
    cardBg: 'rgba(38, 29, 20, 0.9)',
    borderColor: '#d97706',
    accentColor: '#f59e0b',
    titleColor: '#fef3c7',
    subtitleColor: '#d6d3d1'
  },
  'emerald-aurora': {
    name: '翡翠极光夜宴 (Emerald Lounge)',
    badge: '🍸 翡翠夜宴',
    bgGrad: ['#06201b', '#041411', '#020b09'],
    cardBg: 'rgba(9, 36, 30, 0.9)',
    borderColor: '#10b981',
    accentColor: '#34d399',
    titleColor: '#a7f3d0',
    subtitleColor: '#e2e8f0'
  },
  'cyber-neon': {
    name: '赛博霓虹轰趴 (Cyber Neon)',
    badge: '⚡ 赛博霓虹',
    bgGrad: ['#180828', '#0f041b', '#080110'],
    cardBg: 'rgba(36, 12, 58, 0.9)',
    borderColor: '#c084fc',
    accentColor: '#f43f5e',
    titleColor: '#f472b6',
    subtitleColor: '#e0e7ff'
  }
};

export default function PartyMenuMaker() {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([
    'blue-lagoon',
    'negroni',
    'whiskey-sour',
    'gin-tonic',
    'aviation'
  ]);
  const [customImportedRecipes, setCustomImportedRecipes] = useState<Recipe[]>([]);
  const [partyTitle, setPartyTitle] = useState("Ethan's Friday Speakeasy");
  const [subtitle, setSubtitle] = useState("Craft Cocktails & Midnight Stories");
  const [bartenderName, setBartenderName] = useState("Shadow Ethan");
  const [partyDate, setPartyDate] = useState("2026.08 · Weekend Night");
  const [theme, setTheme] = useState<PosterTheme>('obsidian-gold');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  const [copiedList, setCopiedList] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  // Load imported recipes from Mixology Lab if present
  React.useEffect(() => {
    try {
      const savedMenu = localStorage.getItem('elixir_party_menu_recipes');
      if (savedMenu) {
        const parsed: Recipe[] = JSON.parse(savedMenu);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCustomImportedRecipes(parsed);
          setSelectedSlugs(parsed.map(r => r.slug));
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Selected Recipes list (combining DB classics + custom imported lab recipes)
  const selectedRecipes = useMemo(() => {
    const allPool = [...RECIPES_DATABASE, ...customImportedRecipes];
    return selectedSlugs
      .map(slug => allPool.find(r => r.slug === slug))
      .filter((r): r is Recipe => Boolean(r));
  }, [selectedSlugs, customImportedRecipes]);

  // Filtered pool of recipes to add
  const availablePool = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return RECIPES_DATABASE.filter(r => {
      if (selectedSlugs.includes(r.slug)) return false;
      if (!q) return true;
      return (
        r.name.toLowerCase().includes(q) ||
        r.nameEn.toLowerCase().includes(q) ||
        r.baseSpiritZh.toLowerCase().includes(q) ||
        r.flavorProfiles.some(f => f.toLowerCase().includes(q))
      );
    });
  }, [selectedSlugs, searchQuery]);

  const handleAddCocktail = (slug: string) => {
    if (selectedSlugs.length >= 6) {
      alert('酒单最多精选 6 款鸡尾酒，以保证排版美感与出品品质！');
      return;
    }
    setSelectedSlugs([...selectedSlugs, slug]);
  };

  const handleRemoveCocktail = (slug: string) => {
    if (selectedSlugs.length <= 2) {
      alert('酒单至少保留 2 款鸡尾酒。');
      return;
    }
    setSelectedSlugs(selectedSlugs.filter(s => s !== slug));
  };

  const handleCopyTextMenu = () => {
    const listText = selectedRecipes.map((r, i) => 
      `${i + 1}. 🍸 ${r.name} (${r.nameEn}) - ${r.abv}% ABV\n   基酒: ${r.baseSpiritZh} | 配料: ${r.ingredients.map(ing => ing.name).join(', ')}`
    ).join('\n\n');

    const fullMenu = `╔══════════════════════════════════════╗\n   ✨ ${partyTitle} ✨\n   “${subtitle}”\n╚══════════════════════════════════════╝\n\n【精选特调酒单】\n${listText}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n当值调酒师: ${bartenderName} | 日期: ${partyDate}\n“在光影与烈酒的交汇处，调制灵魂解药”`;

    navigator.clipboard.writeText(fullMenu);
    setCopiedList(true);
    setTimeout(() => setCopiedList(false), 2000);
  };

  // Canvas High-DPI Poster Generation Engine
  const generatePosterCanvas = async () => {
    setIsExporting(true);
    try {
      const width = 1200;
      const height = 1800;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const currentTheme = themeConfigs[theme];

      // Helper for multi-line text wrapping without truncation
      const wrapText = (text: string, maxW: number, font: string): string[] => {
        ctx.font = font;
        if (!text) return [];
        if (ctx.measureText(text).width <= maxW) return [text];

        const lines: string[] = [];
        let currentLine = '';
        
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          const testLine = currentLine + char;
          if (ctx.measureText(testLine).width > maxW && currentLine.length > 0) {
            lines.push(currentLine);
            currentLine = char;
          } else {
            currentLine = testLine;
          }
        }
        if (currentLine) {
          lines.push(currentLine);
        }
        return lines;
      };

      // 1. Background Gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, currentTheme.bgGrad[0]);
      bgGrad.addColorStop(0.5, currentTheme.bgGrad[1]);
      bgGrad.addColorStop(1, currentTheme.bgGrad[2]);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Radial ambient lighting glow
      const glow = ctx.createRadialGradient(width / 2, 280, 20, width / 2, 280, 500);
      glow.addColorStop(0, 'rgba(223, 177, 91, 0.2)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // 2. Gold Luxury Frame & Ornate Corner Filigree
      ctx.strokeStyle = currentTheme.borderColor;
      ctx.lineWidth = 4;
      ctx.strokeRect(50, 50, width - 100, height - 100);

      ctx.strokeStyle = 'rgba(223, 177, 91, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(62, 62, width - 124, height - 124);

      // Corner ornaments
      const drawCorner = (x: number, y: number, angle: number) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.strokeStyle = currentTheme.borderColor;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, 30);
        ctx.lineTo(0, 0);
        ctx.lineTo(30, 0);
        ctx.stroke();
        ctx.restore();
      };
      drawCorner(50, 50, 0);
      drawCorner(width - 50, 50, Math.PI / 2);
      drawCorner(width - 50, height - 50, Math.PI);
      drawCorner(50, height - 50, (Math.PI * 3) / 2);

      // 3. Header Typography
      ctx.textAlign = 'center';
      ctx.fillStyle = currentTheme.accentColor;
      ctx.font = 'bold 22px "Cinzel", "Noto Serif SC", serif';
      ctx.fillText('ELIXIR & SHADOW · 影之甘露 吧台特供', width / 2, 120);

      // Main Party Title (multi-line wrapped if long)
      ctx.fillStyle = currentTheme.titleColor;
      ctx.font = 'bold 50px "Noto Serif SC", "Cinzel", serif';
      const titleLines = wrapText(partyTitle, width - 200, 'bold 50px "Noto Serif SC", "Cinzel", serif');
      let titleY = titleLines.length > 1 ? 165 : 185;
      titleLines.forEach(line => {
        ctx.fillText(line, width / 2, titleY);
        titleY += 54;
      });

      // Subtitle (multi-line wrapped if long)
      ctx.fillStyle = currentTheme.subtitleColor;
      ctx.font = 'italic 22px "Playfair Display", Georgia, serif';
      const subLines = wrapText(subtitle, width - 200, 'italic 22px "Playfair Display", Georgia, serif');
      let subY = titleY + 4;
      subLines.forEach(line => {
        ctx.fillText(line, width / 2, subY);
        subY += 28;
      });

      // Decorative divider with diamond
      const dividerY = Math.max(subY + 14, 268);
      ctx.strokeStyle = currentTheme.borderColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(180, dividerY);
      ctx.lineTo(width / 2 - 30, dividerY);
      ctx.moveTo(width / 2 + 30, dividerY);
      ctx.lineTo(width - 180, dividerY);
      ctx.stroke();

      ctx.fillStyle = currentTheme.accentColor;
      ctx.beginPath();
      ctx.arc(width / 2, dividerY, 6, 0, Math.PI * 2);
      ctx.fill();

      // 4. Cocktails Grid Rendering
      const numDrinks = selectedRecipes.length;
      const isTwoCol = numDrinks >= 4;
      const cols = isTwoCol ? 2 : 1;
      const rows = isTwoCol ? Math.ceil(numDrinks / 2) : numDrinks;
      const startY = dividerY + 34;
      const footerAreaHeight = 130;
      const availableGridHeight = height - startY - footerAreaHeight;
      const gapY = isTwoCol ? (rows === 2 ? 24 : 16) : 20;
      const cardHeight = Math.min(Math.floor((availableGridHeight - (rows - 1) * gapY) / rows), isTwoCol ? 230 : 250);
      const standardCardWidth = isTwoCol ? (width - 180) / 2 : width - 160;

      selectedRecipes.forEach((recipe, idx) => {
        // If 5 drinks in 2-col, the 5th card spans full width for balanced symmetry
        const isLastOddCard = isTwoCol && numDrinks % 2 === 1 && idx === numDrinks - 1;
        
        let cardWidth = isLastOddCard ? width - 160 : standardCardWidth;
        let colIdx = isTwoCol ? (isLastOddCard ? 0 : idx % 2) : 0;
        let rowIdx = isTwoCol ? Math.floor(idx / 2) : idx;

        const cx = 80 + colIdx * (standardCardWidth + 20);
        const cy = startY + rowIdx * (cardHeight + gapY);

        // Card Background Box
        ctx.fillStyle = currentTheme.cardBg;
        ctx.strokeStyle = 'rgba(223, 177, 91, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(cx, cy, cardWidth, cardHeight, 14);
        ctx.fill();
        ctx.stroke();

        // Left Icon Badge Box
        const iconSize = Math.min(cardHeight - 40, 78);
        const iconX = cx + 18;
        const iconY = cy + 20;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.strokeStyle = 'rgba(223, 177, 91, 0.25)';
        ctx.beginPath();
        ctx.roundRect(iconX, iconY, iconSize, iconSize, 12);
        ctx.fill();
        ctx.stroke();

        // Draw Q-version Vector Glass in Canvas
        const glassVariant = detectGlassVariant(recipe.glass, recipe.name);
        const liquidTheme = detectLiquidTheme(recipe.baseSpirit, recipe.name);
        drawChibiGlassToCanvas(ctx, {
          glassVariant,
          liquidTheme,
          x: iconX + 4,
          y: iconY + 4,
          size: iconSize - 8,
          cocktailName: recipe.name
        });

        // Content Area to the right of icon
        const textX = iconX + iconSize + 18;
        const maxContentWidth = cardWidth - (iconSize + 52);
        ctx.textAlign = 'left';

        let curY = cy + 32;

        // 1. Chinese Name (multi-line wrapped if long)
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 23px "Noto Serif SC", serif';
        const nameLines = wrapText(recipe.name, maxContentWidth, 'bold 23px "Noto Serif SC", serif');
        nameLines.forEach(line => {
          ctx.fillText(line, textX, curY);
          curY += 26;
        });

        // 2. English Name & ABV Tag (multi-line wrapped if long)
        ctx.fillStyle = currentTheme.subtitleColor;
        ctx.font = '14px system-ui, sans-serif';
        const enLines = wrapText(recipe.nameEn, maxContentWidth, '14px system-ui, sans-serif');
        enLines.forEach((line, lIdx) => {
          ctx.fillText(line, textX, curY);
          if (lIdx === 0) {
            const abvSuffix = ` · ${recipe.abv}% ABV`;
            const textW = ctx.measureText(line).width;
            if (textW + 110 <= maxContentWidth) {
              ctx.fillStyle = '#fbbf24';
              ctx.font = 'bold 14px system-ui, sans-serif';
              ctx.fillText(abvSuffix, textX + textW, curY);
              ctx.fillStyle = currentTheme.subtitleColor;
              ctx.font = '14px system-ui, sans-serif';
            }
          }
          curY += 19;
        });

        // 3. Ingredients summary (ALL ingredients multi-line wrapped completely without truncation)
        const ingRaw = recipe.ingredients.map(i => `${i.name}${i.amountMl ? ` ${i.amountMl}ml` : ''}`).join(' + ');
        ctx.fillStyle = 'rgba(226, 232, 240, 0.9)';
        ctx.font = '12px system-ui, sans-serif';
        const ingLines = wrapText(ingRaw, maxContentWidth, '12px system-ui, sans-serif');
        curY += 2;
        ingLines.forEach(line => {
          ctx.fillText(line, textX, curY);
          curY += 17;
        });

        // 4. Flavor profile badges
        curY += 4;
        let tagX = textX;
        ctx.font = '11px system-ui, sans-serif';
        recipe.flavorProfiles.forEach(f => {
          const tagW = ctx.measureText(f).width + 14;
          if (tagX + tagW <= cx + cardWidth - 12) {
            ctx.fillStyle = 'rgba(223, 177, 91, 0.15)';
            ctx.strokeStyle = 'rgba(223, 177, 91, 0.4)';
            ctx.beginPath();
            ctx.roundRect(tagX, curY, tagW, 20, 5);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#fde68a';
            ctx.fillText(f, tagX + 7, curY + 14);
            tagX += tagW + 6;
          }
        });
      });

      // 5. Footer Signature Bar
      const footerY = height - 120;
      ctx.strokeStyle = 'rgba(223, 177, 91, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(120, footerY);
      ctx.lineTo(width - 120, footerY);
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.fillStyle = currentTheme.accentColor;
      ctx.font = 'italic 18px "Noto Serif SC", serif';
      ctx.fillText(`“主理调酒师: ${bartenderName}  ·  ${partyDate}”`, width / 2, footerY + 34);

      ctx.fillStyle = 'rgba(148, 163, 184, 0.65)';
      ctx.font = '12px "JetBrains Mono", monospace';
      ctx.fillText('ELIXIR & SHADOW · EXCLUSIVE PRIVATE PARTY SPEAKEASY MENU', width / 2, footerY + 62);

      // Download High-DPI PNG
      const link = document.createElement('a');
      link.download = `party-menu-${theme}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      console.error('Failed to export party poster:', e);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Top Configuration & Control Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Configuration Toolbar */}
        <div className="lg:col-span-5 rounded-2xl bg-obsidian-850 border border-gold-500/25 p-6 sm:p-7 space-y-6 shadow-xl">
          <div className="border-b border-white/5 pb-4">
            <h2 className="text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-400" />
              <span>派对酒单个性化定制</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              自定义主题、调酒师签名、排版风格并选择 2~6 款专属特调
            </p>
          </div>

          {/* Theme Style Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gold-400 flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5" />
              <span>视觉风格主题：</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(themeConfigs) as PosterTheme[]).map((t) => {
                const conf = themeConfigs[t];
                return (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      theme === t
                        ? 'bg-gold-500/20 border-gold-500 text-gold-300 font-bold shadow-gold-glow'
                        : 'bg-obsidian-900 border-white/5 text-slate-400 hover:border-gold-500/30'
                    }`}
                  >
                    <div className="font-semibold text-slate-200">{conf.name.split(' (')[0]}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{conf.badge}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Party Title & Subtitle */}
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">派对主标题：</label>
              <input
                type="text"
                value={partyTitle}
                onChange={(e) => setPartyTitle(e.target.value)}
                className="w-full bg-obsidian-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-slate-100 focus:outline-none focus:border-gold-500/50"
                placeholder="例如：Ethan's Friday Speakeasy"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">副标题 / 派对口号：</label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full bg-obsidian-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-slate-100 focus:outline-none focus:border-gold-500/50"
                placeholder="例如：Craft Cocktails & Midnight Stories"
              />
            </div>
          </div>

          {/* Bartender & Date Signatures */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1 mb-1">
                <User className="w-3 h-3 text-gold-400" />
                <span>主理调酒师：</span>
              </label>
              <input
                type="text"
                value={bartenderName}
                onChange={(e) => setBartenderName(e.target.value)}
                className="w-full bg-obsidian-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-gold-500/50"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1 mb-1">
                <Calendar className="w-3 h-3 text-gold-400" />
                <span>派对日期：</span>
              </label>
              <input
                type="text"
                value={partyDate}
                onChange={(e) => setPartyDate(e.target.value)}
                className="w-full bg-obsidian-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-gold-500/50"
              />
            </div>
          </div>

          {/* Selected Cocktails List Manager */}
          <div className="space-y-2.5 pt-2 border-t border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-200">
                已选特调 ({selectedRecipes.length} / 6)：
              </span>
              <span className="text-[10px] text-slate-500">至少 2 款，最多 6 款</span>
            </div>

            <div className="space-y-2">
              {selectedRecipes.map((r, i) => (
                <div
                  key={r.slug}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-obsidian-900 border border-white/5 group"
                >
                  <div className="flex items-center gap-2.5">
                    <ChibiGlassIcon
                      glass={r.glass}
                      cocktailName={r.name}
                      baseSpirit={r.baseSpirit}
                      size={32}
                    />
                    <div>
                      <div className="text-xs font-serif font-bold text-slate-200">{r.name}</div>
                      <div className="text-[10px] text-slate-500">{r.baseSpiritZh} · {r.abv}% ABV</div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveCocktail(r.slug)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                    title="从酒单移除"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Actions Toolbar */}
          <div className="space-y-2.5 pt-4 border-t border-white/5">
            <button
              onClick={generatePosterCanvas}
              disabled={isExporting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-400 hover:from-gold-400 hover:to-amber-300 text-obsidian-950 font-bold text-xs transition-all shadow-gold-glow flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-98 disabled:opacity-50"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-obsidian-950" />
                  <span>正在导出 2x 视网膜高清海报...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-obsidian-950" />
                  <span>导出 2x 超清印刷长图海报 (PNG)</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsGuestModalOpen(true)}
              className="w-full py-2.5 rounded-xl bg-purple-950/40 border border-purple-500/40 text-purple-300 hover:bg-purple-500/20 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Smartphone className="w-3.5 h-3.5 text-purple-400" />
              <span>📱 预览客人手机专属即时点酒单</span>
            </button>

            <button
              onClick={handleCopyTextMenu}
              className="w-full py-2.5 rounded-xl bg-obsidian-900 border border-gold-500/30 text-gold-300 hover:bg-gold-500 hover:text-obsidian-950 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              {copiedList ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>已复制纯文本酒单到剪贴板</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>复制酒单清单 (微信群/备忘录)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Live Interactive Poster Preview Frame */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full text-center mb-3">
            <span className="text-xs text-slate-400 font-serif">
              ✦ 2x 印刷级实时海报预览 · 影之甘露 Speakeasy 定制排版 ✦
            </span>
          </div>

          <div
            className={`w-full max-w-[540px] rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all relative overflow-hidden space-y-6`}
            style={{
              background: `linear-gradient(180deg, ${themeConfigs[theme].bgGrad[0]} 0%, ${themeConfigs[theme].bgGrad[1]} 50%, ${themeConfigs[theme].bgGrad[2]} 100%)`,
              borderColor: themeConfigs[theme].borderColor
            }}
          >
            {/* Top Ornate Filigree Header */}
            <div className="text-center space-y-2 border-b border-gold-500/20 pb-5">
              <div
                className="text-[10px] uppercase tracking-widest font-semibold"
                style={{ color: themeConfigs[theme].accentColor }}
              >
                ELIXIR & SHADOW · 影之甘露 吧台特供
              </div>
              <h3
                className="text-2xl sm:text-3xl font-serif font-black"
                style={{ color: themeConfigs[theme].titleColor }}
              >
                {partyTitle}
              </h3>
              <p
                className="text-xs italic font-serif"
                style={{ color: themeConfigs[theme].subtitleColor }}
              >
                {subtitle}
              </p>
            </div>

            {/* Cocktail Cards Grid */}
            <div className={`grid gap-3 ${selectedRecipes.length >= 4 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
              {selectedRecipes.map((r, idx) => {
                const isLastOdd = selectedRecipes.length >= 4 && selectedRecipes.length % 2 === 1 && idx === selectedRecipes.length - 1;
                return (
                  <div
                    key={r.slug}
                    className={`p-3.5 rounded-xl border flex items-start gap-3 relative overflow-hidden ${
                      isLastOdd ? 'sm:col-span-2' : ''
                    }`}
                    style={{
                      background: themeConfigs[theme].cardBg,
                      borderColor: 'rgba(223, 177, 91, 0.25)'
                    }}
                  >
                    <div className="w-14 h-14 rounded-lg bg-obsidian-950/70 border border-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChibiGlassIcon
                        glass={r.glass}
                        cocktailName={r.name}
                        baseSpirit={r.baseSpirit}
                        size={48}
                      />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-serif font-bold text-slate-100 break-words leading-snug">
                          {r.name}
                        </h4>
                        <span className="text-[10px] font-mono text-amber-400 font-bold flex-shrink-0 whitespace-nowrap pt-0.5">
                          {r.abv}% ABV
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-400 font-sans break-words leading-tight">
                        {r.nameEn}
                      </p>

                      <p className="text-[10px] text-slate-300 break-words leading-relaxed pt-0.5 opacity-90">
                        {r.ingredients.map(ing => `${ing.name}${ing.amountMl ? ` ${ing.amountMl}ml` : ''}`).join(' · ')}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {r.flavorProfiles.map(f => (
                          <span
                            key={f}
                            className="text-[9px] px-1.5 py-0.5 rounded bg-gold-500/10 text-gold-300 border border-gold-500/20"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Poster Footer */}
            <div className="pt-4 border-t border-gold-500/20 text-center space-y-1 text-xs">
              <div
                className="font-serif italic font-medium"
                style={{ color: themeConfigs[theme].accentColor }}
              >
                “主理调酒师: {bartenderName} · {partyDate}”
              </div>
              <div className="text-[9px] font-mono text-slate-500 tracking-wider">
                ELIXIR & SHADOW · EXCLUSIVE PRIVATE PARTY SPEAKEASY MENU
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Available Recipes Selector Pool */}
      <div className="rounded-2xl bg-obsidian-850 border border-gold-500/20 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/5 pb-4">
          <div>
            <h3 className="text-lg font-serif font-bold text-slate-100 flex items-center gap-2">
              <Wine className="w-5 h-5 text-gold-400" />
              <span>添加备选鸡尾酒至酒单 (酒谱大全库)</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              点击下方任一酒谱卡片的 “+ 加入酒单” 按钮快速添入
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <Search className="w-3.5 h-3.5 text-gold-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索待选鸡尾酒..."
              className="w-full bg-obsidian-900 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-gold-500/40"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {availablePool.slice(0, 12).map((r) => (
            <div
              key={r.slug}
              className="p-4 rounded-xl bg-obsidian-900 border border-white/5 hover:border-gold-500/40 transition-all flex items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <ChibiGlassIcon
                  glass={r.glass}
                  cocktailName={r.name}
                  baseSpirit={r.baseSpirit}
                  size={36}
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-serif font-bold text-slate-100 group-hover:text-gold-300 truncate">
                    {r.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 truncate">
                    {r.baseSpiritZh} · {r.abv}% ABV
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleAddCocktail(r.slug)}
                className="p-1.5 rounded-lg bg-gold-500/10 text-gold-400 hover:bg-gold-500 hover:text-obsidian-950 transition-all flex-shrink-0"
                title="加入酒单"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Live Menu Modal for Mobile Testing & Sharing */}
      <GuestPartyMenuModal
        partyTitle={partyTitle}
        subtitle={subtitle}
        bartenderName={bartenderName}
        partyDate={partyDate}
        recipes={selectedRecipes}
        isOpen={isGuestModalOpen}
        onClose={() => setIsGuestModalOpen(false)}
      />
    </div>
  );
}
