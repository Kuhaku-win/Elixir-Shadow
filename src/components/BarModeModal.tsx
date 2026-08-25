import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Play, Pause, RotateCcw, ChevronLeft, ChevronRight, 
  CheckCircle2, Sparkles, Droplets, Wine, ShieldCheck, 
  Clock, Volume2, Flame, Maximize2, AlertCircle
} from 'lucide-react';
import ChibiGlassIcon, { detectLiquidTheme } from './ChibiGlassIcon';
import type { Recipe } from '../types/cocktail';

interface BarModeModalProps {
  recipe: Recipe;
  isOpen: boolean;
  onClose: () => void;
  servings?: number;
}

export default function BarModeModal({ recipe, isOpen, onClose, servings = 1 }: BarModeModalProps) {
  // Current slide index: 0 = ingredients preparation overview, 1..N = steps, N+1 = completed
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [wakeLockActive, setWakeLockActive] = useState<boolean>(false);
  
  // Timer state for current step
  const [timerSeconds, setTimerSeconds] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerFinished, setTimerFinished] = useState<boolean>(false);

  const wakeLockRef = useRef<any>(null);

  // Extract timer duration for a given step text
  const getStepTimerSeconds = (stepText: string): number | null => {
    const match = stepText.match(/(\d+)\s*(?:秒|s|sec)/i);
    if (match) {
      const val = parseInt(match[1], 10);
      if (val >= 5 && val <= 180) return val;
    }
    if (stepText.includes('摇荡') || stepText.includes('摇壶') || stepText.includes('Shake')) return 12;
    if (stepText.includes('搅拌') || stepText.includes('推冰') || stepText.includes('Stir')) return 30;
    if (stepText.includes('浸润') || stepText.includes('静置') || stepText.includes('冷藏')) return 45;
    return null;
  };

  // Request Wake Lock on open
  useEffect(() => {
    if (!isOpen) {
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(() => {});
        wakeLockRef.current = null;
      }
      setWakeLockActive(false);
      return;
    }

    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          const lock = await (navigator as any).wakeLock.request('screen');
          wakeLockRef.current = lock;
          setWakeLockActive(true);
          lock.addEventListener('release', () => {
            setWakeLockActive(false);
          });
        }
      } catch (err) {
        console.warn('Screen WakeLock error:', err);
      }
    };

    requestWakeLock();

    // Prevent body scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(() => {});
      }
    };
  }, [isOpen]);

  // Update timer whenever step changes
  useEffect(() => {
    if (currentStep > 0 && currentStep <= recipe.steps.length) {
      const stepText = recipe.steps[currentStep - 1];
      const secs = getStepTimerSeconds(stepText);
      setTimerSeconds(secs);
      setTimeLeft(secs || 0);
      setIsTimerRunning(false);
      setTimerFinished(false);
    } else {
      setTimerSeconds(null);
      setIsTimerRunning(false);
      setTimerFinished(false);
    }
  }, [currentStep, recipe.steps]);

  // Countdown interval
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            setTimerFinished(true);
            // Haptic vibration feedback
            if (typeof navigator !== 'undefined' && navigator.vibrate) {
              navigator.vibrate([200, 100, 200, 100, 300]);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ' && timerSeconds) {
        e.preventDefault();
        setIsTimerRunning(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentStep, timerSeconds, isTimerRunning]);

  if (!isOpen) return null;

  const totalSteps = recipe.steps.length;
  const isPreparationStep = currentStep === 0;
  const isCompletedStep = currentStep === totalSteps + 1;
  const isActionStep = currentStep >= 1 && currentStep <= totalSteps;

  const handleNext = () => {
    if (currentStep <= totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleResetTimer = () => {
    setTimeLeft(timerSeconds || 0);
    setIsTimerRunning(false);
    setTimerFinished(false);
  };

  const liquidTheme = detectLiquidTheme(recipe.name, recipe.baseSpirit);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-obsidian-950 text-slate-100 backdrop-blur-2xl select-none">
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 border-b border-gold-500/20 bg-obsidian-900/90 backdrop-blur-md">
        
        {/* Left: Recipe Name & Glass */}
        <div className="flex items-center gap-3">
          <ChibiGlassIcon
            glass={recipe.glass}
            cocktailName={recipe.name}
            baseSpirit={recipe.baseSpirit}
            size={36}
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-serif font-black text-slate-100">
                {recipe.name}
              </h2>
              {servings > 1 && (
                <span className="text-xs px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/40 font-mono font-bold">
                  {servings} 杯份
                </span>
              )}
            </div>
            <span className="text-[11px] text-gold-400/80 font-mono block">
              {recipe.nameEn} · {recipe.techniqueZh} · {recipe.abv}% ABV
            </span>
          </div>
        </div>

        {/* Center: Wake Lock Status Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-850 border border-gold-500/30 text-xs text-gold-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{wakeLockActive ? '🔒 屏幕防息屏常亮中' : '💡 建议调酒时保持屏幕常亮'}</span>
        </div>

        {/* Right: Step Indicator & Exit */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-xs sm:text-sm font-mono text-slate-400">
            {isPreparationStep ? '准备材料' : isCompletedStep ? '调制完成 🎉' : `步骤 ${currentStep} / ${totalSteps}`}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
            title="退出实操模式 (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Content Area (Large Font, high tactile readability) */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 max-w-4xl mx-auto w-full overflow-y-auto">
        
        {/* Slide 0: Ingredients Preparation */}
        {isPreparationStep && (
          <div className="w-full space-y-6 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>吧台第一步：清点原料与杯具准备</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-serif font-black text-slate-100">
              请备齐以下原料与工具
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left py-2">
              {recipe.ingredients.map((ing, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-3.5 rounded-xl bg-obsidian-900 border border-gold-500/20 text-slate-200"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                    <span className="text-sm font-medium">{ing.name}</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-amber-300">
                    {Math.round(ing.amountMl * servings * 10) / 10} {ing.unit || 'ml'}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-obsidian-900/60 border border-white/10 max-w-2xl mx-auto text-xs text-slate-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wine className="w-4 h-4 text-gold-400" />
                <span>建议杯具: <strong>{recipe.glass.split('/')[0]}</strong></span>
              </div>
              <div>
                <span>冰块建议: <strong>{recipe.ice}</strong></span>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="px-8 py-4 rounded-2xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-serif font-black text-lg shadow-gold-glow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <span>准备完毕，开始调制 Step 1</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Slide 1..N: Step by Step Action */}
        {isActionStep && (
          <div className="w-full space-y-8 text-center animate-fade-in max-w-3xl">
            
            {/* Step Number Tag */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-sm font-bold font-mono">
              <span>STEP {currentStep} OF {totalSteps}</span>
            </div>

            {/* Giant Step Instruction */}
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-slate-100 leading-relaxed sm:leading-snug px-2">
              {recipe.steps[currentStep - 1]}
            </h3>

            {/* Giant Countdown Timer if Step Requires Shaking / Stirring / Timing */}
            {timerSeconds && (
              <div className="py-4 space-y-4 max-w-md mx-auto">
                <div className={`relative p-6 sm:p-8 rounded-3xl border transition-all ${
                  timerFinished
                    ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300 shadow-lg'
                    : isTimerRunning
                    ? 'bg-amber-950/30 border-amber-500/60 text-amber-300 shadow-gold-glow'
                    : 'bg-obsidian-900 border-gold-500/30 text-slate-200'
                }`}>
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.techniqueZh} 专用计时器</span>
                  </div>

                  <div className="text-5xl sm:text-7xl font-mono font-black tracking-tight my-2">
                    {timeLeft}s
                  </div>

                  {timerFinished && (
                    <div className="text-sm font-bold text-emerald-400 animate-pulse mt-2 flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>时间到！完成本步骤</span>
                    </div>
                  )}

                  {/* Timer Controls */}
                  <div className="flex items-center justify-center gap-3 pt-4">
                    <button
                      onClick={() => setIsTimerRunning(prev => !prev)}
                      className={`px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
                        isTimerRunning
                          ? 'bg-amber-500 text-obsidian-950 hover:bg-amber-400'
                          : 'bg-gold-500 text-obsidian-950 hover:bg-gold-400 shadow-gold-glow'
                      }`}
                    >
                      {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span>{isTimerRunning ? '暂停计时' : timerFinished ? '重新开始' : '点击启动计时 (Space)'}</span>
                    </button>

                    <button
                      onClick={handleResetTimer}
                      className="p-2.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-slate-400 hover:text-white"
                      title="重置计时"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Pro Tip note for current step if available */}
            {recipe.proTips && recipe.proTips.length > 0 && currentStep <= recipe.proTips.length && (
              <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs text-purple-300 max-w-xl mx-auto flex items-center gap-2 text-left">
                <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span><strong>大师秘诀：</strong>{recipe.proTips[currentStep - 1] || recipe.proTips[0]}</span>
              </div>
            )}

          </div>
        )}

        {/* Slide N+1: Completed Celebration */}
        {isCompletedStep && (
          <div className="w-full space-y-6 text-center animate-fade-in max-w-xl">
            <div className="w-20 h-20 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto shadow-gold-glow-lg">
              <Wine className="w-10 h-10" />
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-black text-slate-100">
              干杯！{recipe.name} 制作完成
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              请趁冷享用这杯充满光影与故事的特调。别忘了观察它的香气层次、酒体挂壁与第一口入喉的风味回甘。
            </p>

            <div className="p-4 rounded-xl bg-obsidian-900 border border-gold-500/30 text-xs text-gold-300 font-serif italic">
              “{recipe.story}”
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setCurrentStep(0)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 text-slate-300 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>再调一杯 / 重新复习</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 text-sm font-bold shadow-gold-glow flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>完成调制，返回详情</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Floating Navigation Bar (Big tactile touch targets for bar operation) */}
      <div className="px-4 sm:px-8 py-4 border-t border-gold-500/20 bg-obsidian-900/90 backdrop-blur-md flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className={`px-5 sm:px-6 py-3 rounded-xl border text-sm font-bold flex items-center gap-2 transition-all ${
            currentStep === 0
              ? 'opacity-40 cursor-not-allowed border-white/5 text-slate-500'
              : 'bg-obsidian-850 hover:bg-obsidian-800 border-white/10 text-slate-200 hover:text-white'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>上一步</span>
        </button>

        {/* Center Step Indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {Array.from({ length: totalSteps + 2 }).map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentStep(i)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                currentStep === i
                  ? 'w-6 sm:w-8 bg-gold-400 shadow-gold-glow'
                  : i < currentStep
                  ? 'w-2 bg-emerald-400/80'
                  : 'w-2 bg-obsidian-750'
              }`}
              title={i === 0 ? '材料准备' : i === totalSteps + 1 ? '完成' : `步骤 ${i}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={isCompletedStep}
          className={`px-5 sm:px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
            isCompletedStep
              ? 'opacity-40 cursor-not-allowed bg-obsidian-850 text-slate-500'
              : 'bg-gold-500 hover:bg-gold-400 text-obsidian-950 shadow-gold-glow'
          }`}
        >
          <span>{isPreparationStep ? '开始调制' : isCompletedStep ? '已完成' : currentStep === totalSteps ? '完成特调 🎉' : '下一步'}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
