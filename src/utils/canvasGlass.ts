// Canvas vector rendering engine for Q-version geometric cocktail glasses

import { detectGlassVariant, detectLiquidTheme, type ChibiGlassVariant, type LiquidColorTheme } from '../components/ChibiGlassIcon';

export interface GlassRenderOptions {
  glassVariant: ChibiGlassVariant;
  liquidTheme: LiquidColorTheme;
  x: number;
  y: number;
  size: number;
  cocktailName?: string;
}

const LIQUID_GRADIENTS: Record<LiquidColorTheme, [string, string]> = {
  'amber-gold': ['#fbbf24', '#78350f'],
  'sunset-orange': ['#fb923c', '#991b1b'],
  'caribbean-blue': ['#38bdf8', '#1e3a8a'],
  'emerald-green': ['#34d399', '#064e3b'],
  'velvet-pink': ['#f472b6', '#831843'],
  'cream-white': ['#fef3c7', '#b45309'],
  'espresso-dark': ['#78350f', '#1c1917'],
  'ruby-red': ['#f43f5e', '#4c0519'],
  'clear-ice': ['#e0f2fe', '#0284c7']
};

/**
 * Draws a high-DPI vector Q-version geometric cocktail glass into an HTML5 2D Canvas context
 */
export function drawChibiGlassToCanvas(
  ctx: CanvasRenderingContext2D,
  options: GlassRenderOptions
) {
  const { glassVariant, liquidTheme, x, y, size, cocktailName = '' } = options;
  const colors = LIQUID_GRADIENTS[liquidTheme] || LIQUID_GRADIENTS['amber-gold'];

  ctx.save();
  ctx.translate(x, y);

  // Scaling factor based on standard 100x100 coordinate space
  const s = size / 100;
  ctx.scale(s, s);

  // Helper for linear liquid gradient
  const createLiquidGrad = (y1: number, y2: number) => {
    const grad = ctx.createLinearGradient(0, y1, 0, y2);
    grad.addColorStop(0, colors[0]);
    grad.addColorStop(1, colors[1]);
    return grad;
  };

  // Glass Outline & Shading Styles
  const glassStroke = 'rgba(255, 255, 255, 0.75)';
  const glassHighlight = 'rgba(255, 255, 255, 0.35)';

  switch (glassVariant) {
    case 'martini': {
      // Liquid Triangle
      ctx.fillStyle = createLiquidGrad(32, 60);
      ctx.beginPath();
      ctx.moveTo(25, 32);
      ctx.lineTo(75, 32);
      ctx.lineTo(50, 62);
      ctx.closePath();
      ctx.fill();

      // Liquid surface meniscus
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.beginPath();
      ctx.ellipse(50, 32, 25, 3.5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Glass V-Cone Outline
      ctx.strokeStyle = glassStroke;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(18, 22);
      ctx.lineTo(82, 22);
      ctx.lineTo(50, 64);
      ctx.closePath();
      ctx.stroke();

      // Stem & Base
      ctx.beginPath();
      ctx.moveTo(50, 64);
      ctx.lineTo(50, 88);
      ctx.moveTo(28, 88);
      ctx.lineTo(72, 88);
      ctx.stroke();

      // Glass specular reflection
      ctx.strokeStyle = glassHighlight;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(25, 27);
      ctx.lineTo(44, 56);
      ctx.stroke();

      // Garnish: Green Olive / Lemon Twist
      ctx.fillStyle = '#65a30d';
      ctx.beginPath();
      ctx.ellipse(52, 42, 5.5, 4, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      ctx.arc(52, 42, 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Toothpick
      ctx.strokeStyle = '#dfb15b';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(42, 26);
      ctx.lineTo(60, 52);
      ctx.stroke();
      break;
    }

    case 'coupe': {
      // Liquid Bowl
      ctx.fillStyle = createLiquidGrad(30, 58);
      ctx.beginPath();
      ctx.ellipse(50, 42, 28, 16, 0, 0, Math.PI);
      ctx.fill();

      // Meniscus
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.beginPath();
      ctx.ellipse(50, 30, 28, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Coupe Outline
      ctx.strokeStyle = glassStroke;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(50, 42, 30, 18, 0, 0, Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(50, 24, 30, 4, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Stem & Base
      ctx.beginPath();
      ctx.moveTo(50, 60);
      ctx.lineTo(50, 88);
      ctx.moveTo(30, 88);
      ctx.lineTo(70, 88);
      ctx.stroke();

      // Garnish: Cherry on rim
      ctx.fillStyle = '#be123c';
      ctx.beginPath();
      ctx.arc(68, 22, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#15803d';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(72, 16, 6, 0, Math.PI / 2);
      ctx.stroke();
      break;
    }

    case 'rocks': {
      // Liquid Body
      ctx.fillStyle = createLiquidGrad(38, 78);
      ctx.beginPath();
      ctx.roundRect(28, 38, 44, 42, [0, 0, 8, 8]);
      ctx.fill();

      // Ice Cube 1
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(35, 46, 16, 16, 3);
      ctx.fill();
      ctx.stroke();

      // Ice Cube 2
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.beginPath();
      ctx.roundRect(49, 54, 15, 15, 3);
      ctx.fill();
      ctx.stroke();

      // Heavy Thick Base
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.fillRect(24, 80, 52, 8);

      // Glass Outline
      ctx.strokeStyle = glassStroke;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(24, 28, 52, 60, [0, 0, 6, 6]);
      ctx.stroke();

      // Highlights
      ctx.strokeStyle = glassHighlight;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(30, 34);
      ctx.lineTo(30, 80);
      ctx.stroke();

      // Orange Peel garnish
      ctx.strokeStyle = '#f97316';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(68, 30, 8, 0, Math.PI);
      ctx.stroke();
      break;
    }

    case 'highball': {
      // Liquid column
      ctx.fillStyle = createLiquidGrad(28, 82);
      ctx.beginPath();
      ctx.roundRect(32, 28, 36, 56, [0, 0, 4, 4]);
      ctx.fill();

      // 3 Stacked Ice Cubes
      [34, 50, 66].forEach((iy) => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(40, iy, 18, 13, 2);
        ctx.fill();
        ctx.stroke();
      });

      // Effervescence Bubbles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      [
        [37, 45, 1.5], [45, 32, 1], [60, 55, 1.8],
        [36, 68, 1.2], [58, 74, 1.5], [48, 78, 1]
      ].forEach(([bx, by, br]) => {
        ctx.beginPath();
        ctx.arc(bx, by, br, 0, Math.PI * 2);
        ctx.fill();
      });

      // Highball Glass Outline
      ctx.strokeStyle = glassStroke;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(30, 18, 40, 70, [0, 0, 4, 4]);
      ctx.stroke();

      // Thick Base
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.fillRect(30, 82, 40, 6);

      // Glass Highlights
      ctx.strokeStyle = glassHighlight;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(35, 24);
      ctx.lineTo(35, 80);
      ctx.stroke();

      // Straw & Citrus Wheel on rim
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(56, 10);
      ctx.lineTo(48, 80);
      ctx.stroke();

      // Lemon Slice
      ctx.fillStyle = '#facc15';
      ctx.strokeStyle = '#eab308';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(32, 20, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      break;
    }

    case 'hurricane': {
      // Curvaceous Hurricane Body Liquid
      ctx.fillStyle = createLiquidGrad(26, 75);
      ctx.beginPath();
      ctx.moveTo(33, 26);
      ctx.quadraticCurveTo(24, 45, 34, 60);
      ctx.quadraticCurveTo(40, 70, 42, 75);
      ctx.lineTo(58, 75);
      ctx.quadraticCurveTo(60, 70, 66, 60);
      ctx.quadraticCurveTo(76, 45, 67, 26);
      ctx.closePath();
      ctx.fill();

      // Outline
      ctx.strokeStyle = glassStroke;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(32, 20);
      ctx.quadraticCurveTo(22, 45, 32, 60);
      ctx.quadraticCurveTo(39, 72, 42, 76);
      ctx.lineTo(58, 76);
      ctx.quadraticCurveTo(61, 72, 68, 60);
      ctx.quadraticCurveTo(78, 45, 68, 20);
      ctx.stroke();

      // Short Stem & Base
      ctx.beginPath();
      ctx.moveTo(50, 76);
      ctx.lineTo(50, 88);
      ctx.moveTo(32, 88);
      ctx.lineTo(68, 88);
      ctx.stroke();

      // Umbrella / Pineapple garnish
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(68, 20);
      ctx.lineTo(82, 10);
      ctx.lineTo(76, 26);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case 'copper-mug': {
      // Solid Copper Gradient
      const mugGrad = ctx.createLinearGradient(25, 0, 75, 0);
      mugGrad.addColorStop(0, '#b45309');
      mugGrad.addColorStop(0.3, '#f59e0b');
      mugGrad.addColorStop(0.7, '#d97706');
      mugGrad.addColorStop(1, '#78350f');

      ctx.fillStyle = mugGrad;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(26, 32, 48, 54, [0, 0, 6, 6]);
      ctx.fill();
      ctx.stroke();

      // Brass Handle
      ctx.strokeStyle = '#fde047';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(76, 56, 12, -Math.PI / 2, Math.PI / 2);
      ctx.stroke();

      // Crushed Ice on Top
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.beginPath();
      ctx.ellipse(50, 32, 24, 7, 0, 0, Math.PI * 2);
      ctx.fill();

      // Mint Sprig
      ctx.fillStyle = '#16a34a';
      ctx.beginPath();
      ctx.ellipse(44, 22, 7, 4, -Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(56, 22, 7, 4, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case 'nick-nora':
    default: {
      // Liquid Small Bell Bowl
      ctx.fillStyle = createLiquidGrad(32, 58);
      ctx.beginPath();
      ctx.ellipse(50, 44, 22, 16, 0, 0, Math.PI);
      ctx.fill();

      // Outline
      ctx.strokeStyle = glassStroke;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(50, 44, 24, 18, 0, 0, Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(50, 26, 24, 4, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Stem & Base
      ctx.beginPath();
      ctx.moveTo(50, 62);
      ctx.lineTo(50, 88);
      ctx.moveTo(32, 88);
      ctx.lineTo(68, 88);
      ctx.stroke();

      // Cherry on stick
      ctx.fillStyle = '#e11d48';
      ctx.beginPath();
      ctx.arc(50, 44, 4.5, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
  }

  ctx.restore();
}
