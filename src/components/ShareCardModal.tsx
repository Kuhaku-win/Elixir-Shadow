import React, { useState, useRef } from 'react';
import { X, Download, Copy, Check, Wine, Sparkles, Share2, Image as ImageIcon, Flame, Loader2 } from 'lucide-react';
import ChibiGlassIcon, { detectGlassVariant, detectLiquidTheme } from './ChibiGlassIcon';
import { drawChibiGlassToCanvas } from '../utils/canvasGlass';
import type { Recipe } from '../types/cocktail';

interface ShareCardModalProps {
  recipe: Recipe;
  isOpen?: boolean;
  onClose?: () => void;
  showTriggerButton?: boolean;
}

export default function ShareCardModal({
  recipe,
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  showTriggerButton = true
}: ShareCardModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleOpen = () => {
    if (!isControlled) setInternalIsOpen(true);
  };

  const handleClose = () => {
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  // 1. One-click copy text recipe
  const handleCopyRecipeText = () => {
    const ingList = recipe.ingredients
      .map((ing) => `• ${ing.name}${ing.nameEn ? ` (${ing.nameEn})` : ''}: ${ing.amountMl} ml`)
      .join('\n');

    const stepsList = (recipe.steps || [])
      .map((step, idx) => `${idx + 1}. ${step}`)
      .join('\n');

    const textToCopy = `【${recipe.name} · ${recipe.nameEn}】\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `🍸 基酒：${recipe.baseSpiritZh} (${recipe.baseSpirit})\n` +
      `🔥 酒精度：${recipe.abv}% ABV | 技法：${recipe.techniqueZh}\n` +
      `🥃 推荐杯型：${recipe.glass.split('/')[0]} | 冰块：${recipe.ice}\n` +
      `🌟 风味特征：${recipe.flavorProfiles.join(' · ')}\n\n` +
      `【经典配料表】\n${ingList}\n\n` +
      `【分步调制流程】\n${stepsList}\n\n` +
      `【调酒师心得】\n“${recipe.description || recipe.story}”\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `来自「影之甘露 · Elixir & Shadow」专业调酒秘典`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 2. High-DPI 2x Canvas Poster Generator with Vector Chibi Glass
  const handleDownloadPoster = async () => {
    setIsGenerating(true);
    try {
      const width = 800;
      const height = 1200;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 1. Background Luxury Gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#0f1017');
      bgGrad.addColorStop(0.3, '#07070a');
      bgGrad.addColorStop(0.7, '#030406');
      bgGrad.addColorStop(1, '#000000');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Ambient Gold Glow behind Glass
      const glow = ctx.createRadialGradient(width / 2, 185, 20, width / 2, 185, 260);
      glow.addColorStop(0, 'rgba(223, 177, 91, 0.25)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // 2. Gold Outer & Inner Frame
      ctx.strokeStyle = '#dfb15b';
      ctx.lineWidth = 3;
      ctx.strokeRect(30, 30, width - 60, height - 60);

      ctx.strokeStyle = 'rgba(223, 177, 91, 0.35)';
      ctx.lineWidth = 1;
      ctx.strokeRect(40, 40, width - 80, height - 80);

      // Corner Ornaments
      const drawCorner = (x: number, y: number, angle: number) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.strokeStyle = '#dfb15b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 20);
        ctx.lineTo(0, 0);
        ctx.lineTo(20, 0);
        ctx.stroke();
        ctx.restore();
      };
      drawCorner(30, 30, 0);
      drawCorner(width - 30, 30, Math.PI / 2);
      drawCorner(width - 30, height - 30, Math.PI);
      drawCorner(30, height - 30, (Math.PI * 3) / 2);

      // 3. Brand Header
      ctx.fillStyle = '#dfb15b';
      ctx.font = 'bold 15px "Cinzel", "Noto Serif SC", serif';
      ctx.textAlign = 'center';
      ctx.fillText('ELIXIR & SHADOW · 影之甘露', width / 2, 68);

      ctx.fillStyle = 'rgba(203, 213, 225, 0.7)';
      ctx.font = '11px system-ui, sans-serif';
      ctx.fillText('专业鸡尾酒调酒秘典 · 品鉴卡', width / 2, 88);

      // Header Divider Line with Center Diamond
      ctx.strokeStyle = 'rgba(223, 177, 91, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(120, 102);
      ctx.lineTo(width / 2 - 16, 102);
      ctx.moveTo(width / 2 + 16, 102);
      ctx.lineTo(width - 120, 102);
      ctx.stroke();

      ctx.fillStyle = '#dfb15b';
      ctx.beginPath();
      ctx.arc(width / 2, 102, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // 4. Hero Vector Q-Version Glass Illustration in Canvas
      const glassSize = 100;
      const glassX = (width - glassSize) / 2;
      const glassY = 120;

      const glassVariant = detectGlassVariant(recipe.glass);
      const liquidTheme = detectLiquidTheme(recipe.name, recipe.baseSpirit);
      drawChibiGlassToCanvas(ctx, {
        glassVariant,
        liquidTheme,
        x: glassX,
        y: glassY,
        size: glassSize,
        cocktailName: recipe.name
      });

      // 5. Cocktail Name & Subtitle
      ctx.textAlign = 'center';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 38px "Noto Serif SC", "Cinzel", serif';
      ctx.fillText(recipe.name, width / 2, 260);

      ctx.fillStyle = '#dfb15b';
      ctx.font = 'italic 17px "Playfair Display", Georgia, serif';
      ctx.fillText(recipe.nameEn, width / 2, 290);

      // 6. Specs Badges (Base spirit, ABV, Technique, Difficulty)
      const badges = [
        `${recipe.baseSpiritZh}基酒`,
        `${recipe.abv}% ABV`,
        recipe.techniqueZh,
        `${recipe.difficultyZh}难度`
      ];
      const badgeY = 315;
      const badgeWidth = 115;
      const gap = 14;
      const totalWidth = badges.length * badgeWidth + (badges.length - 1) * gap;
      let startX = (width - totalWidth) / 2;

      badges.forEach((b, idx) => {
        const bx = startX + idx * (badgeWidth + gap);
        ctx.fillStyle = 'rgba(223, 177, 91, 0.08)';
        ctx.strokeStyle = 'rgba(223, 177, 91, 0.35)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(bx, badgeY, badgeWidth, 30, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = idx === 1 ? '#fbbf24' : '#f8fafc';
        ctx.font = 'bold 12px system-ui, sans-serif';
        ctx.fillText(b, bx + badgeWidth / 2, badgeY + 19);
      });

      // 7. Ingredients Section Card Box
      const ingBoxY = 368;
      const ingBoxHeight = Math.min(65 + recipe.ingredients.slice(0, 6).length * 36, 290);
      ctx.fillStyle = 'rgba(15, 16, 23, 0.85)';
      ctx.strokeStyle = 'rgba(223, 177, 91, 0.25)';
      ctx.beginPath();
      ctx.roundRect(70, ingBoxY, width - 140, ingBoxHeight, 14);
      ctx.fill();
      ctx.stroke();

      // Card Title: 配方黄金比例
      ctx.fillStyle = '#dfb15b';
      ctx.font = 'bold 16px "Noto Serif SC", serif';
      ctx.textAlign = 'left';
      ctx.fillText('◈ 经典配方黄金比例 (Formula)', 100, ingBoxY + 34);

      // Divider inside box
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.beginPath();
      ctx.moveTo(100, ingBoxY + 46);
      ctx.lineTo(width - 100, ingBoxY + 46);
      ctx.stroke();

      // Ingredients rows (with clean spacing & font restore)
      recipe.ingredients.slice(0, 6).forEach((ing, i) => {
        const rowY = ingBoxY + 76 + i * 35;
        // Bullet
        ctx.fillStyle = '#dfb15b';
        ctx.beginPath();
        ctx.arc(106, rowY - 5, 3, 0, Math.PI * 2);
        ctx.fill();

        // Ingredient name in Chinese
        ctx.fillStyle = '#f1f5f9';
        ctx.font = 'bold 14px system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(ing.name, 120, rowY);
        const zhWidth = ctx.measureText(ing.name).width;

        // English name with proper offset
        if (ing.nameEn) {
          ctx.fillStyle = 'rgba(148, 163, 184, 0.75)';
          ctx.font = '12px system-ui, sans-serif';
          ctx.fillText(` (${ing.nameEn})`, 120 + zhWidth, rowY);
        }

        // Amount
        ctx.fillStyle = '#dfb15b';
        ctx.font = 'bold 15px "JetBrains Mono", monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`${ing.amountMl} ml`, width - 105, rowY);
      });

      // 8. Flavor Profiles Badges Box
      const flavorBoxY = ingBoxY + ingBoxHeight + 18;
      ctx.fillStyle = 'rgba(15, 16, 23, 0.7)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.beginPath();
      ctx.roundRect(70, flavorBoxY, width - 140, 90, 14);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#dfb15b';
      ctx.font = 'bold 14px system-ui, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('◈ 风味特征与口感标签：', 100, flavorBoxY + 30);

      let tagX = 100;
      recipe.flavorProfiles.forEach((f) => {
        ctx.font = '12px system-ui, sans-serif';
        const tagTextWidth = ctx.measureText(f).width;
        const tagBoxW = tagTextWidth + 20;

        ctx.fillStyle = 'rgba(223, 177, 91, 0.15)';
        ctx.strokeStyle = 'rgba(223, 177, 91, 0.4)';
        ctx.beginPath();
        ctx.roundRect(tagX, flavorBoxY + 44, tagBoxW, 26, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#fde68a';
        ctx.fillText(f, tagX + 10, flavorBoxY + 61);
        tagX += tagBoxW + 10;
      });

      // 9. Story & Bartender Lore Snippet Box
      const storyY = flavorBoxY + 108;
      ctx.fillStyle = 'rgba(15, 16, 23, 0.85)';
      ctx.strokeStyle = 'rgba(223, 177, 91, 0.2)';
      ctx.beginPath();
      ctx.roundRect(70, storyY, width - 140, 160, 14);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#dfb15b';
      ctx.font = 'bold 15px "Noto Serif SC", serif';
      ctx.fillText('◈ 历史渊源与大师心得', 100, storyY + 32);

      ctx.fillStyle = 'rgba(203, 213, 225, 0.9)';
      ctx.font = 'italic 13px "Noto Serif SC", Georgia, serif';
      ctx.textAlign = 'left';

      // Helper for wrapping text
      const wrapText = (text: string, maxW: number): string[] => {
        if (!text) return [];
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
        if (currentLine) lines.push(currentLine);
        return lines;
      };

      // Multi-line wrap for story
      const fullStoryText = `“${(recipe.description || recipe.story || '').trim()}”`;
      const storyLines = wrapText(fullStoryText, width - 200);
      let curStoryY = storyY + 60;
      storyLines.slice(0, 4).forEach((line, idx) => {
        const lineText = idx === 3 && storyLines.length > 4 ? line.slice(0, -1) + '...”' : line;
        ctx.fillText(lineText, 100, curStoryY);
        curStoryY += 24;
      });

      // 10. Glass & Ice serving notes
      const serveY = storyY + 185;
      ctx.fillStyle = 'rgba(148, 163, 184, 0.85)';
      ctx.font = '12px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`🍸 推荐杯具：${recipe.glass.split('/')[0]}   |   🧊 冰块建议：${recipe.ice}`, width / 2, serveY);

      // 11. Footer Slogan & Trademark
      ctx.strokeStyle = 'rgba(223, 177, 91, 0.3)';
      ctx.beginPath();
      ctx.moveTo(120, serveY + 22);
      ctx.lineTo(width - 120, serveY + 22);
      ctx.stroke();

      ctx.fillStyle = '#dfb15b';
      ctx.font = 'italic 14px "Noto Serif SC", serif';
      ctx.fillText('“在光影与烈酒的交汇处，调制灵魂解药”', width / 2, serveY + 48);

      ctx.fillStyle = 'rgba(148, 163, 184, 0.65)';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillText('ELIXIR & SHADOW · COCKTAIL ALCHEMIST GUILD', width / 2, serveY + 70);

      ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
      ctx.font = '9px system-ui, sans-serif';
      ctx.fillText('非商业调酒文化研究 · 未成年人禁止饮酒 · 请理性品鉴', width / 2, serveY + 86);

      // Download file
      const link = document.createElement('a');
      link.download = `elixir-${recipe.slug}-poster.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Failed to generate canvas poster:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      {/* Optional Trigger Button */}
      {showTriggerButton && (
        <button
          onClick={handleOpen}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500/20 to-amber-500/20 hover:from-gold-500/30 hover:to-amber-500/30 border border-gold-500/40 text-gold-300 font-semibold text-xs transition-all shadow-gold-glow flex items-center gap-2 hover:scale-105 active:scale-95"
          title="生成专属高清调酒品鉴卡片与长图海报"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>✨ 生成品鉴酒卡 / 分享</span>
        </button>
      )}

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/85 backdrop-blur-md animate-fadeIn"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-lg bg-obsidian-900 border border-gold-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-obsidian-800 border border-white/10 text-slate-400 hover:text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Title */}
            <div className="mb-4">
              <h2 className="text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-400" />
                <span>调酒品鉴卡片与专属海报</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                支持 2x 视网膜高清海报导出、清单复制与朋友圈社交分享
              </p>
            </div>

            {/* Visual Card Preview Box */}
            <div className="rounded-xl border border-gold-500/30 bg-obsidian-850 p-5 shadow-xl relative overflow-hidden space-y-4 my-2 text-center">
              {/* Brand Tag */}
              <div className="text-[10px] uppercase font-semibold tracking-widest text-gold-400 flex items-center justify-center gap-1.5 border-b border-gold-500/15 pb-2.5">
                <Sparkles className="w-3 h-3 text-gold-400" />
                <span>ELIXIR & SHADOW · 影之甘露</span>
              </div>

              {/* Chibi Glass & Cocktail Title */}
              <div className="flex flex-col items-center justify-center gap-2">
                <ChibiGlassIcon
                  glass={recipe.glass}
                  cocktailName={recipe.name}
                  baseSpirit={recipe.baseSpirit}
                  size={72}
                />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-100">{recipe.name}</h3>
                  <p className="text-xs text-gold-400 font-sans tracking-wide mt-0.5">{recipe.nameEn}</p>
                </div>
              </div>

              {/* Key Specs Pills */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-300">
                <span className="px-2.5 py-0.5 rounded-full bg-obsidian-900 text-gold-300 border border-gold-500/20">
                  {recipe.baseSpiritZh}基酒
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold border border-amber-500/30">
                  {recipe.abv}% ABV
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-obsidian-900 text-slate-300 border border-white/10">
                  {recipe.techniqueZh}
                </span>
              </div>

              {/* Ingredients snippet table */}
              <div className="text-xs text-slate-300 text-left space-y-1.5 bg-obsidian-900/80 p-3 rounded-lg border border-white/5 max-h-36 overflow-y-auto">
                <span className="text-[10px] text-gold-400 font-semibold block mb-1">◈ 经典配料表：</span>
                {recipe.ingredients.map((ing, i) => (
                  <div key={i} className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gold-400" />
                      <span>{ing.name}</span>
                    </span>
                    <span className="font-mono text-gold-300 font-medium">{ing.amountMl} ml</span>
                  </div>
                ))}
              </div>

              {/* Slogan */}
              <p className="text-[11px] font-serif italic text-slate-400 pt-1">
                “在光影与烈酒的交汇处，调制灵魂解药”
              </p>
            </div>

            {/* Action Buttons Toolbar */}
            <div className="mt-4 space-y-2">
              <button
                onClick={handleDownloadPoster}
                disabled={isGenerating}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-obsidian-950 font-bold text-xs transition-all shadow-gold-glow flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-98 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-obsidian-950" />
                    <span>正在绘制 2x 高清海报...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-obsidian-950" />
                    <span>下载高清品鉴海报 (PNG)</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyRecipeText}
                className="w-full py-2.5 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">已复制配方文本至剪贴板</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>复制纯文本配方 (微信/小红书)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
