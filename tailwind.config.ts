import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#e4e7ed',
          200: '#c8d0d9',
          300: '#aeb8c6',
          400: '#8a9eb2',
          500: '#64748b', // blue-gray
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fdf6f0',
          100: '#fae9d7',
          200: '#f5d1b8',
          300: '#f0b98a',
          400: '#e89a4c',
          500: '#d97706', // gold/amber
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        code: {
          100: '#f3f4f6',
          500: '#0ea5e9',
          900: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'artistic-gradient': 'linear-gradient(135deg, #f5f7fa 0%, #e4e7ed 100%)',
        'terminal-grid': 'repeating-linear-gradient(0deg, #e4e7ed, #e4e7ed 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, #e4e7ed, #e4e7ed 1px, transparent 1px, transparent 32px)'
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#334155',
            fontFamily: 'Playfair Display, ui-serif, Georgia, serif',
            h1: {
              fontFamily: 'Playfair Display, ui-serif, Georgia, serif',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h2: {
              fontFamily: 'Playfair Display, ui-serif, Georgia, serif',
              fontWeight: '600',
            },
            code: {
              color: '#0ea5e9',
              backgroundColor: '#f3f4f6',
              fontFamily: 'Fira Code, ui-monospace, SFMono-Regular, monospace',
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
            },
            a: {
              color: '#d97706',
              textDecoration: 'underline',
              '&:hover': {
                color: '#b45309',
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config; 