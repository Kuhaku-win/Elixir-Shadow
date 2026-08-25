/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: 'rgb(var(--bg-base-rgb) / <alpha-value>)',
          900: 'rgb(var(--bg-surface-rgb) / <alpha-value>)',
          850: 'rgb(var(--bg-card-rgb) / <alpha-value>)',
          800: 'rgb(var(--bg-card-hover-rgb) / <alpha-value>)',
          750: 'rgb(var(--bg-subtle-rgb) / <alpha-value>)',
          700: 'rgb(var(--bg-muted-rgb) / <alpha-value>)',
          600: 'rgb(var(--border-subtle-rgb) / <alpha-value>)',
        },
        gold: {
          100: 'rgb(var(--accent-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--accent-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--accent-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--accent-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--accent-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--accent-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--accent-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--accent-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--accent-900-rgb) / <alpha-value>)',
        },
        slate: {
          100: 'rgb(var(--slate-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--slate-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--slate-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--slate-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--slate-500-rgb) / <alpha-value>)',
        },
        amber: {
          450: '#fb923c',
          550: '#d97706',
        },
        elixir: {
          ruby: '#e11d48',
          emerald: '#10b981',
          sapphire: '#0284c7',
          amethyst: '#9333ea',
          copper: '#c2410c',
          silver: '#94a3b8',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Noto Serif SC', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'var(--gradient-gold)',
        'dark-radial': 'radial-gradient(ellipse at top, rgb(var(--bg-subtle-rgb)) 0%, rgb(var(--bg-base-rgb)) 70%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgb(var(--accent-500-rgb) / 0.15) 50%, transparent 100%)',
      },
      boxShadow: {
        'gold-glow': 'var(--theme-glow)',
        'gold-glow-lg': 'var(--theme-glow-lg)',
        'obsidian-card': '0 10px 30px -10px rgba(0, 0, 0, 0.4), 0 0 1px 1px rgb(var(--accent-500-rgb) / 0.15)',
      },
      animation: {
        'shimmer': 'shimmer 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
