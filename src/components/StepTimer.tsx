import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Bell, Check, Timer } from 'lucide-react';

interface StepTimerProps {
  seconds: number;
  label?: string;
  className?: string;
}

export default function StepTimer({ seconds: initialSeconds, label, className = '' }: StepTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef<any>(null);

  // Synthesize a pleasant crystal bar bell chime using Web Audio API
  const playChimeSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      const now = ctx.currentTime;
      
      // Main tone (A5 - 880Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(880, now);
      gain1.gain.setValueAtTime(0.3, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      
      // Harmonic overtone (E6 - 1318Hz)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1318.5, now);
      gain2.gain.setValueAtTime(0.15, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.2);
      osc2.stop(now + 0.8);
    } catch (e) {
      console.log('AudioContext chime not permitted or available:', e);
    }
  };

  const triggerHaptic = () => {
    try {
      if (typeof window !== 'undefined' && 'navigator' in window && navigator.vibrate) {
        navigator.vibrate([150, 100, 200]);
      }
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            setIsFinished(true);
            playChimeSound();
            triggerHaptic();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleToggle = () => {
    if (isFinished) {
      setTimeLeft(initialSeconds);
      setIsFinished(false);
      setIsRunning(true);
    } else {
      setIsRunning(!isRunning);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsFinished(false);
    setTimeLeft(initialSeconds);
  };

  const progress = ((initialSeconds - timeLeft) / initialSeconds) * 100;
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`inline-flex items-center gap-2 p-1.5 px-3 rounded-xl bg-obsidian-900/90 border border-gold-500/30 shadow-sm text-xs select-none ${className}`}>
      {/* Mini Circular Progress Ring */}
      <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
        <svg className="w-8 h-8 -rotate-90">
          <circle
            cx="16"
            cy="16"
            r={radius}
            className="stroke-obsidian-800"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="16"
            cy="16"
            r={radius}
            className={`transition-all duration-300 ${isFinished ? 'stroke-emerald-400' : 'stroke-gold-400'}`}
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <span className={`absolute font-mono text-[11px] font-bold ${isFinished ? 'text-emerald-400' : 'text-slate-100'}`}>
          {timeLeft}s
        </span>
      </div>

      {/* Label and Controls */}
      <div className="flex items-center gap-2">
        <span className="font-serif text-[11px] text-slate-300">
          {label || `${initialSeconds}秒计时`}
        </span>

        <button
          onClick={handleToggle}
          className={`p-1.5 rounded-lg transition-all flex items-center justify-center ${
            isFinished
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
              : isRunning
              ? 'bg-amber-500 text-obsidian-950 font-bold'
              : 'bg-gold-500/20 text-gold-300 border border-gold-500/40 hover:bg-gold-500/30'
          }`}
          title={isRunning ? '暂停' : isFinished ? '再次计时' : '开始计时'}
        >
          {isFinished ? (
            <Check className="w-3.5 h-3.5" />
          ) : isRunning ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current" />
          )}
        </button>

        {(isRunning || timeLeft !== initialSeconds) && (
          <button
            onClick={handleReset}
            className="p-1 rounded-lg text-slate-500 hover:text-slate-300 transition-colors"
            title="重置"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
}
