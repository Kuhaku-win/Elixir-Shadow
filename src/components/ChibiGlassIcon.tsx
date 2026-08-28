import React from 'react';
import type { GlassType, BaseSpiritType } from '../types/cocktail';

export type ChibiGlassVariant = 
  | 'martini' 
  | 'rocks' 
  | 'highball' 
  | 'coupe' 
  | 'hurricane' 
  | 'copper-mug' 
  | 'nick-nora';

export type LiquidColorTheme = 
  | 'amber-gold' 
  | 'sunset-orange' 
  | 'caribbean-blue' 
  | 'emerald-green' 
  | 'velvet-pink' 
  | 'cream-white' 
  | 'espresso-dark' 
  | 'ruby-red' 
  | 'clear-ice';

interface ChibiGlassIconProps {
  glass?: GlassType | string;
  variant?: ChibiGlassVariant;
  liquidTheme?: LiquidColorTheme;
  baseSpirit?: BaseSpiritType | string;
  cocktailName?: string;
  size?: number; // default 80
  className?: string;
  showGarnish?: boolean;
}

export const detectGlassVariant = (glassName: string = ''): ChibiGlassVariant => {
  const g = glassName.toLowerCase();
  if (g.includes('马天尼') || g.includes('martini')) return 'martini';
  if (g.includes('古典') || g.includes('rocks') || g.includes('old fashioned')) return 'rocks';
  if (g.includes('高球') || g.includes('highball') || g.includes('柯林') || g.includes('collins')) return 'highball';
  if (g.includes('碟形') || g.includes('coupe')) return 'coupe';
  if (g.includes('铜') || g.includes('copper') || g.includes('mule')) return 'copper-mug';
  if (g.includes('飓风') || g.includes('hurricane') || g.includes('tiki')) return 'hurricane';
  if (g.includes('尼克') || g.includes('nick')) return 'nick-nora';
  return 'coupe';
};

export const detectLiquidTheme = (name: string = '', baseSpirit: string = ''): LiquidColorTheme => {
  const n = name.toLowerCase();
  const s = baseSpirit.toLowerCase();

  if (n.includes('蓝色') || n.includes('blue') || n.includes('lagoon')) return 'caribbean-blue';
  if (n.includes('咖啡') || n.includes('espresso') || n.includes('black russian')) return 'espresso-dark';
  if (n.includes('大都会') || n.includes('cosmopolitan') || n.includes('桃') || n.includes('pink') || n.includes('芭乐')) return 'velvet-pink';
  if (n.includes('日出') || n.includes('sunrise') || n.includes('日落') || n.includes('sunset') || n.includes('negroni') || n.includes('尼格罗尼') || n.includes('aperol') || n.includes('campari')) return 'sunset-orange';
  if (n.includes('莫吉托') || n.includes('mojito') || n.includes('绿') || n.includes('midori') || n.includes('蜜多丽') || n.includes('chartreuse') || n.includes('basil')) return 'emerald-green';
  if (n.includes('曼哈顿') || n.includes('manhattan') || n.includes('红') || n.includes('sangria') || n.includes('桑格利亚') || n.includes('输血') || n.includes('transfusion') || n.includes('cassis')) return 'ruby-red';
  if (n.includes('椰林') || n.includes('piña') || n.includes('colada') || n.includes('奶') || n.includes('cream') || n.includes('alexander') || n.includes('baileys')) return 'cream-white';

  if (s.includes('whiskey') || s.includes('威士忌') || s.includes('brandy') || s.includes('白兰地') || s.includes('rum-dark') || s.includes('黑朗姆')) return 'amber-gold';
  if (s.includes('gin') || s.includes('金酒') || s.includes('vodka') || s.includes('伏特加') || s.includes('rum') || s.includes('朗姆')) return 'amber-gold';
  return 'amber-gold';
};

export const gradientConfigs: Record<LiquidColorTheme, { top: string; mid: string; bot: string; glow: string }> = {
  'amber-gold': { top: '#fbbf24', mid: '#d97706', bot: '#78350f', glow: 'rgba(251, 191, 36, 0.4)' },
  'sunset-orange': { top: '#fb923c', mid: '#ea580c', bot: '#991b1b', glow: 'rgba(249, 115, 22, 0.4)' },
  'caribbean-blue': { top: '#38bdf8', mid: '#2563eb', bot: '#1e3a8a', glow: 'rgba(56, 189, 248, 0.4)' },
  'emerald-green': { top: '#34d399', mid: '#059669', bot: '#064e3b', glow: 'rgba(52, 211, 153, 0.4)' },
  'velvet-pink': { top: '#f472b6', mid: '#db2777', bot: '#831843', glow: 'rgba(244, 114, 182, 0.4)' },
  'cream-white': { top: '#fef3c7', mid: '#fde68a', bot: '#b45309', glow: 'rgba(254, 243, 199, 0.4)' },
  'espresso-dark': { top: '#78350f', mid: '#451a03', bot: '#1c1917', glow: 'rgba(120, 53, 15, 0.4)' },
  'ruby-red': { top: '#f43f5e', mid: '#be123c', bot: '#4c0519', glow: 'rgba(244, 63, 94, 0.4)' },
  'clear-ice': { top: '#e0f2fe', mid: '#bae6fd', bot: '#0284c7', glow: 'rgba(224, 242, 254, 0.3)' }
};

export default function ChibiGlassIcon({
  glass,
  variant: explicitVariant,
  liquidTheme: explicitTheme,
  baseSpirit = '',
  cocktailName = '',
  size = 80,
  className = '',
  showGarnish = true
}: ChibiGlassIconProps) {
  const variant = explicitVariant || (glass ? detectGlassVariant(glass) : 'coupe');
  const theme = explicitTheme || detectLiquidTheme(cocktailName, baseSpirit);
  const colors = gradientConfigs[theme] || gradientConfigs['amber-gold'];
  const safeName = (cocktailName || '').replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  const gradId = `liquid-grad-${theme}-${variant}-${safeName || 'icon'}`;

  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none ${className}`} 
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="overflow-visible drop-shadow-md"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.top} />
            <stop offset="60%" stopColor={colors.mid} />
            <stop offset="100%" stopColor={colors.bot} />
          </linearGradient>

          {/* Ice cube highlight filter */}
          <filter id="ice-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* =================== 1. MARTINI GLASS =================== */}
        {variant === 'martini' && (
          <g>
            {/* Liquid Inverted Triangle */}
            <polygon
              points="24,24 76,24 50,56"
              fill={`url(#${gradId})`}
              opacity="0.9"
            />
            {/* Glass Outline */}
            <polygon
              points="20,20 80,20 50,58"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeOpacity="0.75"
            />
            {/* Stem & Base */}
            <line x1="50" y1="58" x2="50" y2="84" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75" />
            <ellipse cx="50" cy="85" rx="16" ry="3.5" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />

            {/* Olive on Pick / Cherry Garnish */}
            {showGarnish && (
              <g>
                <line x1="32" y1="12" x2="62" y2="48" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="47" cy="30" r="4.5" fill="#65a30d" stroke="#365314" strokeWidth="1" />
                <circle cx="47" cy="30" r="1.5" fill="#dc2626" />
              </g>
            )}
          </g>
        )}

        {/* =================== 2. ROCKS / OLD FASHIONED =================== */}
        {variant === 'rocks' && (
          <g>
            {/* Liquid Fill */}
            <rect
              x="26"
              y="38"
              width="48"
              height="38"
              rx="4"
              fill={`url(#${gradId})`}
              opacity="0.92"
            />
            {/* Big Geometric Ice Cube */}
            <rect
              x="36"
              y="44"
              width="24"
              height="22"
              rx="3"
              fill="#ffffff"
              fillOpacity="0.3"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeOpacity="0.7"
            />
            {/* Glass Outline (Thick Base) */}
            <rect
              x="24"
              y="26"
              width="52"
              height="54"
              rx="6"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeOpacity="0.8"
            />
            <rect x="26" y="74" width="48" height="6" rx="2" fill="#ffffff" fillOpacity="0.25" />

            {/* Orange Peel Garnish */}
            {showGarnish && (
              <path
                d="M 68 22 C 76 24, 76 34, 70 36"
                fill="none"
                stroke="#ea580c"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            )}
          </g>
        )}

        {/* =================== 3. HIGHBALL / COLLINS =================== */}
        {variant === 'highball' && (
          <g>
            {/* Liquid Fill */}
            <rect
              x="33"
              y="26"
              width="34"
              height="55"
              rx="3"
              fill={`url(#${gradId})`}
              opacity="0.9"
            />
            {/* Ice Cubes Floating */}
            <rect x="40" y="34" width="16" height="15" rx="2" fill="#ffffff" fillOpacity="0.3" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.6" />
            <rect x="42" y="54" width="16" height="15" rx="2" fill="#ffffff" fillOpacity="0.25" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />
            {/* Carbonation Micro Bubbles */}
            <circle cx="37" cy="46" r="1.2" fill="#ffffff" fillOpacity="0.8" />
            <circle cx="58" cy="40" r="1" fill="#ffffff" fillOpacity="0.8" />
            <circle cx="39" cy="68" r="1.5" fill="#ffffff" fillOpacity="0.8" />
            <circle cx="56" cy="62" r="1.2" fill="#ffffff" fillOpacity="0.8" />

            {/* Glass Outline */}
            <rect
              x="31"
              y="18"
              width="38"
              height="68"
              rx="5"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeOpacity="0.8"
            />
            {/* Straw */}
            {showGarnish && (
              <line x1="42" y1="8" x2="52" y2="76" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
            )}
          </g>
        )}

        {/* =================== 4. COUPE GLASS =================== */}
        {variant === 'coupe' && (
          <g>
            {/* Liquid Bowl */}
            <path
              d="M 23 34 C 23 54, 77 54, 77 34 Z"
              fill={`url(#${gradId})`}
              opacity="0.92"
            />
            {/* Glass Bowl Outline */}
            <path
              d="M 20 30 C 20 58, 80 58, 80 30"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
            {/* Stem & Base */}
            <line x1="50" y1="56" x2="50" y2="82" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75" />
            <ellipse cx="50" cy="83" rx="16" ry="3.5" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />

            {/* Cherry with stem */}
            {showGarnish && (
              <g>
                <circle cx="62" cy="28" r="4.5" fill="#e11d48" stroke="#881337" strokeWidth="1" />
                <path d="M 64 25 C 68 18, 70 12, 74 10" fill="none" stroke="#65a30d" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            )}
          </g>
        )}

        {/* =================== 5. HURRICANE GLASS =================== */}
        {variant === 'hurricane' && (
          <g>
            {/* Curvy Liquid */}
            <path
              d="M 33 26 C 26 38, 42 46, 36 64 C 36 70, 64 70, 64 64 C 58 46, 74 38, 67 26 Z"
              fill={`url(#${gradId})`}
              opacity="0.9"
            />
            {/* Curvy Outline */}
            <path
              d="M 31 22 C 24 36, 42 46, 34 66 C 34 72, 66 72, 66 66 C 58 46, 76 36, 69 22"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
            {/* Foot */}
            <line x1="50" y1="70" x2="50" y2="82" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75" />
            <ellipse cx="50" cy="83" rx="15" ry="3.5" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />

            {/* Umbrella / Pineapple */}
            {showGarnish && (
              <g>
                <polygon points="26,12 36,18 28,24" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
                <path d="M 60 16 C 68 8, 78 12, 76 20 Z" fill="#ec4899" opacity="0.9" />
                <line x1="68" y1="14" x2="58" y2="30" stroke="#fcd34d" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            )}
          </g>
        )}

        {/* =================== 6. COPPER MUG =================== */}
        {variant === 'copper-mug' && (
          <g>
            {/* Copper Handle */}
            <path
              d="M 68 34 C 84 34, 84 62, 68 62"
              fill="none"
              stroke="#ca8a04"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Mug Body Fill */}
            <rect
              x="22"
              y="26"
              width="48"
              height="52"
              rx="6"
              fill="#b45309"
              stroke="#d97706"
              strokeWidth="2"
            />
            {/* Liquid Top Foam & Mint */}
            <ellipse cx="46" cy="28" rx="22" ry="5" fill={`url(#${gradId})`} />
            <circle cx="36" cy="27" r="1.5" fill="#ffffff" opacity="0.8" />
            <circle cx="48" cy="26" r="1.2" fill="#ffffff" opacity="0.8" />

            {showGarnish && (
              <g>
                {/* Lime Wheel */}
                <ellipse cx="28" cy="20" rx="8" ry="6" fill="#84cc16" stroke="#4d7c0f" strokeWidth="1.2" />
                <ellipse cx="28" cy="20" rx="5" ry="3.5" fill="#bef264" />
                {/* Mint Leaf */}
                <path d="M 52 24 C 54 14, 64 16, 62 24 Z" fill="#22c55e" />
              </g>
            )}
          </g>
        )}

        {/* =================== 7. NICK & NORA =================== */}
        {variant === 'nick-nora' && (
          <g>
            {/* Liquid Deep U */}
            <path
              d="M 30 30 C 30 52, 70 52, 70 30 Z"
              fill={`url(#${gradId})`}
              opacity="0.92"
            />
            {/* Glass U Outline */}
            <path
              d="M 28 26 C 28 56, 72 56, 72 26"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
            {/* Long Slim Stem */}
            <line x1="50" y1="54" x2="50" y2="82" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75" />
            <ellipse cx="50" cy="83" rx="14" ry="3.5" fill="none" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />

            {/* Lemon Twist Garnish */}
            {showGarnish && (
              <path
                d="M 34 22 C 30 14, 40 12, 38 20"
                fill="none"
                stroke="#eab308"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            )}
          </g>
        )}

      </svg>
    </div>
  );
}
