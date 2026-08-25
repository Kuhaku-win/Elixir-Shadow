import React, { useState } from 'react';
import { Scale, Users, Flame, Check, Lightbulb, ChevronDown, RotateCcw, Sparkles, Droplets, Play, Wine, ShieldCheck } from 'lucide-react';
import { INGREDIENTS_DATABASE } from '../data/ingredients';
import BarModeModal from './BarModeModal';
import type { Recipe, RecipeIngredient, IngredientSubstitute } from '../types/cocktail';

interface UnitScalerProps {
  recipe: Recipe;
}

export default function UnitScaler({ recipe }: UnitScalerProps) {
  const [unit, setUnit] = useState<'ml' | 'oz'>('ml');
  const [servings, setServings] = useState<number>(1);
  const [copied, setCopied] = useState(false);
  const [isBarModeOpen, setIsBarModeOpen] = useState(false);
  // Map of ingredient index -> selected IngredientSubstitute
  const [activeSubstitutes, setActiveSubstitutes] = useState<Record<number, IngredientSubstitute>>({});
  // Open dropdown state for which ingredient index
  const [openSubstituteIdx, setOpenSubstituteIdx] = useState<number | null>(null);

  // Technique-based dilution factor (Craft Bartending Standard: Shake ~25%, Stir ~20%, Build ~12%, Blend ~35%)
  const dilutionRate = {
    Shake: 0.25,
    Stir: 0.20,
    Build: 0.12,
    Muddle: 0.18,
    Blend: 0.35,
    Layer: 0.05,
    Float: 0.05
  }[recipe.technique] || 0.20;

  // Format ML to fractional OZ
  const formatOz = (ml: number): string => {
    const rawOz = ml / 30;
    if (rawOz === 0) return '0 oz';
    if (Math.abs(rawOz - 0.25) < 0.05) return '1/4 oz';
    if (Math.abs(rawOz - 0.33) < 0.05) return '1/3 oz';
    if (Math.abs(rawOz - 0.5) < 0.05) return '1/2 oz';
    if (Math.abs(rawOz - 0.66) < 0.05) return '2/3 oz';
    if (Math.abs(rawOz - 0.75) < 0.05) return '3/4 oz';
    if (Math.abs(rawOz - 1.0) < 0.05) return '1 oz';
    if (Math.abs(rawOz - 1.25) < 0.05) return '1 1/4 oz';
    if (Math.abs(rawOz - 1.33) < 0.05) return '1 1/3 oz';
    if (Math.abs(rawOz - 1.5) < 0.05) return '1 1/2 oz';
    if (Math.abs(rawOz - 1.66) < 0.05) return '1 2/3 oz';
    if (Math.abs(rawOz - 1.75) < 0.05) return '1 3/4 oz';
    if (Math.abs(rawOz - 2.0) < 0.05) return '2 oz';
    if (Math.abs(rawOz - 2.5) < 0.05) return '2 1/2 oz';
    if (Math.abs(rawOz - 3.0) < 0.05) return '3 oz';
    if (Math.abs(rawOz - 4.0) < 0.05) return '4 oz';
    return `${rawOz.toFixed(1)} oz`;
  };

  const tierBadgeMap = {
    'perfect': { label: '无缝替代', bg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
    'flavor-tweak': { label: '风味微调', bg: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
    'emergency': { label: '应急替代', bg: 'bg-rose-500/15 text-rose-300 border-rose-500/30' }
  };

  // Find available substitutes for a recipe ingredient
  const getSubstitutesForIng = (ing: RecipeIngredient): IngredientSubstitute[] => {
    let ingData = ing.rawId ? INGREDIENTS_DATABASE.find(i => i.id === ing.rawId) : null;
    if (!ingData) {
      ingData = INGREDIENTS_DATABASE.find(i => i.name.includes(ing.name) || (ing.nameEn && i.nameEn.toLowerCase().includes(ing.nameEn.toLowerCase())));
    }
    return ingData?.substitutes || [];
  };

  const handleSelectSubstitute = (idx: number, sub: IngredientSubstitute | null) => {
    setActiveSubstitutes(prev => {
      const next = { ...prev };
      if (sub === null) {
        delete next[idx];
      } else {
        next[idx] = sub;
      }
      return next;
    });
    setOpenSubstituteIdx(null);
  };

  const hasAnyActiveSubstitutes = Object.keys(activeSubstitutes).length > 0;

  const handleResetAllSubstitutes = () => {
    setActiveSubstitutes({});
    setOpenSubstituteIdx(null);
  };

  // Calculate Liquid Volumes & Dilution Physics
  const totalRawMlPerServing = recipe.ingredients.reduce((sum, ing, idx) => {
    const sub = activeSubstitutes[idx];
    const amount = sub ? ing.amountMl * sub.ratioMultiplier : ing.amountMl;
    return sum + (amount || 0);
  }, 0);

  const totalRawMl = Math.round(totalRawMlPerServing * servings * 10) / 10;
  const waterDilutionMl = Math.round(totalRawMl * dilutionRate * 10) / 10;
  const finishedTotalMl = Math.round((totalRawMl + waterDilutionMl) * 10) / 10;
  const singleFinishedMl = Math.round(finishedTotalMl / servings);

  const handleCopyRecipeText = () => {
    const ingredientList = recipe.ingredients.map((ing, idx) => {
      const sub = activeSubstitutes[idx];
      const baseMl = sub ? ing.amountMl * sub.ratioMultiplier : ing.amountMl;
      const scaledMl = Math.round(baseMl * servings * 10) / 10;
      const formattedAmount = unit === 'ml' 
        ? `${scaledMl} ${ing.unit || 'ml'}`
        : `${formatOz(scaledMl)}`;
      
      if (sub) {
        return `- [平替] ${sub.substituteName} (原配方: ${ing.name}): ${formattedAmount} (${sub.flavorImpactNote})`;
      }
      return `- ${ing.name} (${ing.nameEn || ''}): ${formattedAmount}`;
    }).join('\n');

    const text = `【影之甘露 · 鸡尾酒秘方】
🍹 ${recipe.name} (${recipe.nameEn})${hasAnyActiveSubstitutes ? ' (含平替原料方案)' : ''}
📊 预计品饮酒精度: ${recipe.abv}% ABV | 份数: ${servings} 人份
💧 纯液量: ${totalRawMl}ml ➔ 融冰后总出品: ~${finishedTotalMl}ml (稀释率 ~${Math.round(dilutionRate * 100)}%)
━━━━━━━━━━━━━━
【配料清单】
${ingredientList}
━━━━━━━━━━━━━━
【适用杯具】: ${recipe.glass}
【调制技法】: ${recipe.techniqueZh}
【制作步骤】:
${recipe.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="rounded-2xl bg-obsidian-850 border border-gold-500/25 p-6 sm:p-8 shadow-gold-glow">
        {/* Top Utility Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gold-500/20">
          <div>
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-gold-400" />
              <h3 className="text-xl font-serif font-bold text-slate-100">
                配方计量与智能平替计算
              </h3>
              {hasAnyActiveSubstitutes && (
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-medium animate-pulse">
                  ✨ 平替重算中
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-1">支持毫升/盎司切换、多人份倍增、原料平替与融冰稀释度物理推演</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Reset substitutes if active */}
            {hasAnyActiveSubstitutes && (
              <button
                onClick={handleResetAllSubstitutes}
                className="text-xs px-2.5 py-1 rounded-lg bg-obsidian-900 border border-gold-500/30 text-gold-300 hover:bg-gold-500/10 transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>恢复原配方</span>
              </button>
            )}

            {/* Servings Selector */}
            <div className="flex items-center rounded-lg bg-obsidian-900 border border-white/10 p-1 text-xs">
              <Users className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
              {[1, 2, 4].map(s => (
                <button
                  key={s}
                  onClick={() => setServings(s)}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    servings === s ? 'bg-gold-500 text-obsidian-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {s} 杯
                </button>
              ))}
            </div>

            {/* Unit Toggle (ml vs oz) */}
            <div className="flex rounded-lg bg-obsidian-900 border border-white/10 p-1 text-xs">
              <button
                onClick={() => setUnit('ml')}
                className={`px-3 py-1 rounded transition-all ${
                  unit === 'ml' ? 'bg-gold-500 text-obsidian-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                ml (毫升)
              </button>
              <button
                onClick={() => setUnit('oz')}
                className={`px-3 py-1 rounded transition-all ${
                  unit === 'oz' ? 'bg-gold-500 text-obsidian-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                oz (盎司)
              </button>
            </div>

            {/* Launch Hands-Free Bar Mode */}
            <button
              onClick={() => setIsBarModeOpen(true)}
              className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs flex items-center gap-1.5 shadow-gold-glow transition-all hover:scale-105"
            >
              <Play className="w-3.5 h-3.5 fill-obsidian-950" />
              <span>开启吧台实操模式</span>
            </button>
          </div>
        </div>

        {/* Ingredient Table with Substitutes Integration */}
        <div className="py-6 space-y-3">
          {recipe.ingredients.map((ing, idx) => {
            const availableSubstitutes = getSubstitutesForIng(ing);
            const activeSub = activeSubstitutes[idx];
            const baseMl = activeSub ? ing.amountMl * activeSub.ratioMultiplier : ing.amountMl;
            const scaledMl = Math.round(baseMl * servings * 10) / 10;
            const displayAmount = unit === 'ml'
              ? `${scaledMl} ${ing.unit || 'ml'}`
              : formatOz(scaledMl);

            const isSubDropdownOpen = openSubstituteIdx === idx;

            return (
              <div key={idx} className="space-y-2">
                <div
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border transition-all gap-2 ${
                    activeSub
                      ? 'bg-amber-950/20 border-amber-500/40 shadow-sm'
                      : 'bg-obsidian-900/70 border-white/5 hover:border-gold-500/30'
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className={`w-2 h-2 rounded-full mt-1 sm:mt-0 ${activeSub ? 'bg-amber-400 shadow-gold-glow' : 'bg-gold-400/80'}`} />
                    <div>
                      <div className="text-sm font-semibold text-slate-100 flex flex-wrap items-center gap-2">
                        {activeSub ? (
                          <>
                            <span className="text-amber-300 font-bold">{activeSub.substituteName}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">
                              原: {ing.name} ({activeSub.ratioMultiplier}x)
                            </span>
                          </>
                        ) : (
                          <>
                            <span>{ing.name}</span>
                            {ing.nameEn && (
                              <span className="text-xs text-slate-400 font-normal">({ing.nameEn})</span>
                            )}
                          </>
                        )}
                      </div>
                      {activeSub && (
                        <p className="text-xs text-amber-400/90 mt-0.5">{activeSub.flavorImpactNote}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 pl-5 sm:pl-0">
                    <span className="text-sm font-mono font-bold text-gold-300">
                      {displayAmount}
                    </span>

                    {availableSubstitutes.length > 0 && (
                      <button
                        onClick={() => setOpenSubstituteIdx(isSubDropdownOpen ? null : idx)}
                        className={`text-xs px-2.5 py-1 rounded-lg border transition-colors flex items-center gap-1 ${
                          activeSub
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                            : 'bg-obsidian-950 border-white/10 text-slate-400 hover:text-gold-300 hover:border-gold-500/30'
                        }`}
                      >
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>{activeSub ? '更换平替' : '查看平替'}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${isSubDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Dropdown list of available substitutes */}
                {isSubDropdownOpen && availableSubstitutes.length > 0 && (
                  <div className="p-4 rounded-xl bg-obsidian-950 border border-gold-500/30 space-y-3 animate-fade-in ml-4 sm:ml-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gold-300 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        <span>可选替代方案（依调酒科学与风味契合度推荐）：</span>
                      </span>
                      {activeSub && (
                        <button
                          onClick={() => handleSelectSubstitute(idx, null)}
                          className="text-[11px] text-rose-400 hover:underline flex items-center gap-1"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>恢复使用原原料</span>
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {availableSubstitutes.map((sub, sIdx) => {
                        const isChosen = activeSub?.substituteName === sub.substituteName;
                        const badge = tierBadgeMap[sub.tier];

                        return (
                          <div
                            key={sIdx}
                            onClick={() => handleSelectSubstitute(idx, isChosen ? null : sub)}
                            className={`p-3 rounded-lg border text-xs cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                              isChosen
                                ? 'bg-amber-500/15 border-amber-400 text-slate-100 shadow-sm'
                                : 'bg-obsidian-950/80 border-white/10 hover:border-gold-500/40 text-slate-300'
                            }`}
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-slate-100">{sub.substituteName}</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded border ${badge.bg}`}>
                                  {badge.label}
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono">
                                  比例: {sub.ratioMultiplier}x
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400">{sub.flavorImpactNote}</p>
                            </div>

                            <button
                              className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap self-start sm:self-center transition-all ${
                                isChosen
                                  ? 'bg-amber-400 text-obsidian-950'
                                  : 'bg-obsidian-800 text-gold-400 border border-gold-500/30 hover:bg-gold-500/20'
                              }`}
                            >
                              {isChosen ? '✓ 正在使用' : '选用此平替'}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dilution Physics & Action Bar */}
        <div className="pt-6 border-t border-gold-500/20 space-y-4">
          
          {/* Detailed Dilution Physics Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-obsidian-900/90 border border-gold-500/20 text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 block flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                <span>液体总量与融冰增量</span>
              </span>
              <strong className="text-slate-200 block text-sm font-mono">
                {totalRawMl} ml <span className="text-cyan-400 text-xs">(+{waterDilutionMl}ml 融水)</span>
              </strong>
              <span className="text-[10px] text-slate-500">
                {recipe.techniqueZh}稀释率 ~{Math.round(dilutionRate * 100)}%
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block flex items-center gap-1">
                <Wine className="w-3.5 h-3.5 text-gold-400" />
                <span>单杯成品总容量</span>
              </span>
              <strong className="text-amber-300 block text-sm font-mono">
                约 {singleFinishedMl} ml / 杯
              </strong>
              <span className="text-[10px] text-slate-500 truncate block">
                推荐 {recipe.glass.split('/')[0]} ({Math.ceil(singleFinishedMl * 1.25)}ml+)
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                <span>最终适饮酒精度</span>
              </span>
              <strong className="text-rose-300 block text-sm font-mono">
                {recipe.abv}% ABV
              </strong>
              <span className="text-[10px] text-slate-500">
                达到完美酸甜平衡与醇厚度
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              <span>💡 提示：点击右上角「开启吧台实操模式」可享受全屏大字防息屏分步计时指引</span>
            </div>

            <button
              onClick={handleCopyRecipeText}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-obsidian-800 border border-gold-500/30 text-gold-300 hover:bg-gold-500 hover:text-obsidian-950 text-xs font-semibold inline-flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>已复制配方到剪贴板</span>
                </>
              ) : (
                <>
                  <span>一键复制调酒清单</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Bar Mode Fullscreen Modal for Desktop Trigger */}
      <BarModeModal
        recipe={recipe}
        isOpen={isBarModeOpen}
        onClose={() => setIsBarModeOpen(false)}
        servings={servings}
      />
    </>
  );
}
