import React from 'react';
import type { FlavorRadar as FlavorRadarType } from '../types/cocktail';

interface FlavorRadarProps {
  data?: FlavorRadarType;
  radar?: FlavorRadarType;
  size?: number;
  showLabels?: boolean;
}

export default function FlavorRadar({ data, radar, size = 260, showLabels = true }: FlavorRadarProps) {
  const radarData = data || radar || { sour: 3, sweet: 3, bitter: 1, strong: 3, fruity: 2, herbal: 1 };
  const center = size / 2;
  const radius = (size / 2) - (showLabels ? 38 : 10);
  const maxVal = 5;

  const axes: Array<{ key: keyof FlavorRadarType; label: string }> = [
    { key: 'sour', label: '酸度 (Sour)' },
    { key: 'sweet', label: '甜度 (Sweet)' },
    { key: 'bitter', label: '苦度 (Bitter)' },
    { key: 'strong', label: '烈度 (Strength)' },
    { key: 'fruity', label: '果香 (Fruity)' },
    { key: 'herbal', label: '草本 (Herbal)' }
  ];

  const numAxes = axes.length;
  const angleStep = (Math.PI * 2) / numAxes;

  // Grid level polygons (1 to 5)
  const levels = [1, 2, 3, 4, 5];

  const getCoordinates = (index: number, value: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / maxVal) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Data polygon points
  const points = axes.map((axis, i) => {
    const val = (radarData as any)[axis.key] ?? 0;
    const { x, y } = getCoordinates(i, val);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width={size} height={size} className="overflow-visible">
        {/* Background Grid webs */}
        {levels.map((lvl) => {
          const gridPoints = axes.map((_, i) => {
            const { x, y } = getCoordinates(i, lvl);
            return `${x},${y}`;
          }).join(' ');

          return (
            <polygon
              key={lvl}
              points={gridPoints}
              fill="none"
              stroke="rgba(223, 177, 91, 0.12)"
              strokeWidth={lvl === 5 ? '1.5' : '1'}
              strokeDasharray={lvl < 5 ? '2 2' : undefined}
            />
          );
        })}

        {/* Radial Axis Lines */}
        {axes.map((_, i) => {
          const { x, y } = getCoordinates(i, maxVal);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(223, 177, 91, 0.18)"
              strokeWidth="1"
            />
          );
        })}

        {/* Data Filled Polygon */}
        <polygon
          points={points}
          fill="rgba(223, 177, 91, 0.25)"
          stroke="#dfb15b"
          strokeWidth="2"
          className="transition-all duration-500 ease-out"
        />

        {/* Vertex Points */}
        {axes.map((axis, i) => {
          const val = radarData[axis.key] || 0;
          const { x, y } = getCoordinates(i, val);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3.5"
              fill="#dfb15b"
              stroke="#07070a"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Axis Labels */}
        {showLabels && axes.map((axis, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const labelDist = radius + 22;
          const lx = center + labelDist * Math.cos(angle);
          const ly = center + labelDist * Math.sin(angle);
          const val = radarData[axis.key] || 0;

          return (
            <g key={i}>
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#cbd5e1"
                fontSize="10"
                fontFamily="system-ui, sans-serif"
                className="font-medium tracking-tight select-none"
              >
                {axis.label.split(' ')[0]}
                <tspan fill="#dfb15b" dx="3" fontSize="9" fontWeight="bold">
                  {val}
                </tspan>
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
