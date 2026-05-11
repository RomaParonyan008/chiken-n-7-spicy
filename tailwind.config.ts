import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background
        'bg-dark': '#0B0B0B',
        'bg-surface': '#1A1A1A',
        // Primary (red)
        'primary': '#D62828',
        'primary-dark': '#BA181B',
        // Accent (yellow)
        'accent': '#FFC300',
        'accent-light': '#FFBA08',
        // Secondary (orange)
        'secondary': '#F77F00',
        'secondary-light': '#FF8800',
        // Text
        'text-white': '#FFFFFF',
        'text-light': '#F5F5F5',
        'text-muted': '#A1A1A1',
        // Food
        'food': '#C68642',
        'food-dark': '#8D5524',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #D62828, #F77F00, #FFC300)',
        'gradient-red': 'linear-gradient(135deg, #BA181B, #D62828)',
      },
      animation: {
        'fire-flicker': 'fireFlicker 2s ease-in-out infinite',
        'fire-glow': 'fireGlow 1.5s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fireFlicker: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        fireGlow: {
          '0%': { boxShadow: '0 0 20px #D62828, 0 0 40px #F77F00' },
          '100%': { boxShadow: '0 0 40px #D62828, 0 0 80px #F77F00' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
