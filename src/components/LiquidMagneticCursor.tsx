import React, { useEffect, useRef, useState } from 'react';
import { CURSOR_MODES, type CursorModeId, DEFAULT_CURSOR_MODE } from '../data/cursorModes';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  alpha: number;
}

/**
 * Component: LiquidMagneticCursor
 * Master Cursor Controller supporting 4 distinct aesthetic modes:
 * 1. Native Windows Minimalist (Pure 0-overlay system pointer)
 * 2. Amber Fluid Lens (Backdrop refraction & surface tension ripple)
 * 3. Semantic Chameleon Capsule (Micro star-dot + contextual metadata pill)
 * 4. Darkroom Crystal Caustics (Specular light field & photometric pulses)
 */
export default function LiquidMagneticCursor() {
  const [cursorMode, setCursorMode] = useState<CursorModeId>(DEFAULT_CURSOR_MODE);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [capsuleText, setCapsuleText] = useState('');
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const mousePos = useRef({ x: -200, y: -200 });
  const springPos = useRef({ x: -200, y: -200 });
  const targetPos = useRef({ x: -200, y: -200 });
  const rafId = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const rippleIdCounter = useRef(0);

  // Sync cursor mode from localStorage and CustomEvent
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const saved = (localStorage.getItem('elixir_cursor_mode') as CursorModeId) || DEFAULT_CURSOR_MODE;
    setCursorMode(saved);
    document.documentElement.setAttribute('data-cursor-mode', saved);

    const handleModeChange = (e: CustomEvent<CursorModeId>) => {
      if (e.detail) {
        setCursorMode(e.detail);
        document.documentElement.setAttribute('data-cursor-mode', e.detail);
      }
    };

    window.addEventListener('cursor-mode-change', handleModeChange as EventListener);
    return () => {
      window.removeEventListener('cursor-mode-change', handleModeChange as EventListener);
    };
  }, []);

  // Main interaction loop
  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === 'undefined' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Contextual detection for semantic capsule
      const target = e.target as HTMLElement | null;
      if (target) {
        const recipeCard = target.closest('[data-recipe-name], a[href^="/recipes/"], .group');
        const isButton = target.closest('button, [role="button"], input[type="submit"]');
        const isMarquee = target.closest('[data-cursor="drag"], .overflow-x-auto, .marquee');
        const isLink = target.closest('a');

        if (recipeCard) {
          const name = recipeCard.getAttribute('data-recipe-name') || 
            recipeCard.querySelector('h3')?.textContent?.trim() || 
            '探索配方';
          setCapsuleText(`RECIPE · ${name.slice(0, 10)}`);
          setIsHovered(true);
        } else if (isMarquee) {
          setCapsuleText('⇄ DRAG & SCROLL');
          setIsHovered(true);
        } else if (isButton) {
          setCapsuleText('SELECT ✦');
          setIsHovered(true);
        } else if (isLink) {
          setCapsuleText('VIEW →');
          setIsHovered(true);
        } else {
          setCapsuleText('');
          setIsHovered(false);
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicked(true);

      if (cursorMode === 'lens') {
        const id = ++rippleIdCounter.current;
        setRipples(prev => [...prev.slice(-3), { id, x: e.clientX, y: e.clientY, size: 10, alpha: 0.8 }]);
      } else if (cursorMode === 'capsule') {
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI * 2 * i) / 6 + (Math.random() - 0.5);
          const speed = 1.5 + Math.random() * 2.5;
          particles.current.push({
            x: e.clientX,
            y: e.clientY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: 1.5 + Math.random() * 2,
            alpha: 0.9,
            color: Math.random() > 0.5 ? '#f59e0b' : '#fbbf24'
          });
        }
      } else if (cursorMode === 'caustics') {
        const id = ++rippleIdCounter.current;
        setRipples(prev => [...prev.slice(-2), { id, x: e.clientX, y: e.clientY, size: 20, alpha: 0.6 }]);
      }
    };

    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const animate = () => {
      const speed = cursorMode === 'lens' ? 0.22 : 0.28;
      springPos.current.x += (targetPos.current.x - springPos.current.x) * speed;
      springPos.current.y += (targetPos.current.y - springPos.current.y) * speed;

      if (cursorMode === 'caustics') {
        document.documentElement.style.setProperty('--cursor-x', `${mousePos.current.x}px`);
        document.documentElement.style.setProperty('--cursor-y', `${mousePos.current.y}px`);
      }

      if (canvasRef.current && particles.current.length > 0) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
          particles.current.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.92;
            p.vy *= 0.92;
            p.alpha -= 0.03;

            if (p.alpha > 0) {
              ctx.save();
              ctx.globalAlpha = p.alpha;
              ctx.fillStyle = p.color;
              ctx.shadowColor = p.color;
              ctx.shadowBlur = 4;
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            }
          });
          particles.current = particles.current.filter(p => p.alpha > 0);
        }
      }

      setRipples(prev => 
        prev
          .map(r => ({ ...r, size: r.size + 4, alpha: r.alpha - 0.035 }))
          .filter(r => r.alpha > 0)
      );

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible, cursorMode]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (cursorMode === 'native') {
    return null;
  }

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none" 
      aria-hidden="true" 
      style={{ pointerEvents: 'none' }}
    >
      <canvas 
        ref={canvasRef} 
        className="pointer-events-none fixed inset-0 w-full h-full" 
        style={{ pointerEvents: 'none' }} 
      />

      {ripples.map(r => (
        <div
          key={r.id}
          className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/60"
          style={{
            transform: `translate3d(${r.x}px, ${r.y}px, 0)`,
            width: `${r.size}px`,
            height: `${r.size}px`,
            opacity: r.alpha,
            boxShadow: '0 0 12px rgba(245, 158, 11, 0.3)',
            pointerEvents: 'none'
          }}
        />
      ))}

      {cursorMode === 'lens' && (
        <div
          className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color,border-color,opacity,border-radius] duration-200 ease-out border backdrop-blur-[2px] backdrop-brightness-110 backdrop-contrast-105 shadow-[0_0_20px_rgba(245,158,11,0.18)] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } ${
            isHovered
              ? 'w-14 h-14 border-amber-400/50 bg-amber-500/10 rounded-2xl'
              : isClicked
              ? 'w-8 h-8 border-amber-300/80 bg-amber-400/20'
              : 'w-10 h-10 border-amber-400/30 bg-amber-500/5'
          }`}
          style={{
            transform: `translate3d(${springPos.current.x}px, ${springPos.current.y}px, 0)`,
            willChange: 'transform',
            pointerEvents: 'none'
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400/90 shadow-[0_0_6px_#f59e0b]" />
        </div>
      )}

      {cursorMode === 'capsule' && (
        <>
          <div
            className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
              isVisible ? 'opacity-90' : 'opacity-0'
            }`}
            style={{
              transform: `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`,
              willChange: 'transform',
              pointerEvents: 'none'
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold-300 shadow-[0_0_8px_rgba(253,230,138,0.8)]" />
          </div>

          {capsuleText && (
            <div
              className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-950/90 border border-gold-500/40 shadow-2xl backdrop-blur-md ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{
                transform: `translate3d(${springPos.current.x + 16}px, ${springPos.current.y + 16}px, 0)`,
                willChange: 'transform',
                pointerEvents: 'none'
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-gold-300 whitespace-nowrap uppercase">
                {capsuleText}
              </span>
            </div>
          )}
        </>
      )}

      {cursorMode === 'caustics' && (
        <div
          className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `translate3d(${springPos.current.x}px, ${springPos.current.y}px, 0)`,
            width: '420px',
            height: '420px',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.07) 0%, rgba(217, 119, 6, 0.02) 40%, transparent 70%)',
            willChange: 'transform',
            pointerEvents: 'none'
          }}
        />
      )}
    </div>
  );
}
