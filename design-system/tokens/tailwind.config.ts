/**
 * Cortex Design System — Tailwind CSS v4 Config
 * All values sourced from tokens.yaml (brandbook Cortex)
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: ['class', '[data-theme="cortex-dark"]'],
  theme: {
    extend: {
      colors: {
        // Base
        void:    '#090E1A',
        ink:     '#0C1220',
        dusk:    '#1B2845',
        steel:   '#1E2533',
        ash:     '#4A5568',
        mist:    '#94A3B8',
        white:   '#F7F9FC',

        // Brand
        signal: {
          DEFAULT: '#4D71FA',
          dark:    '#3558D4',
          light:   '#7B96FB',
          ghost:   'rgba(77, 113, 250, 0.12)',
        },

        // Semantic
        success: '#22C55E',
        warning: '#F59E0B',
        error:   '#F43F5E',
        info:    '#4D71FA',
      },

      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },

      fontSize: {
        xs:   ['12px', { lineHeight: '1.6' }],
        sm:   ['14px', { lineHeight: '1.6' }],
        base: ['16px', { lineHeight: '1.6' }],
        md:   ['18px', { lineHeight: '1.4' }],
        lg:   ['20px', { lineHeight: '1.4' }],
        xl:   ['24px', { lineHeight: '1.15' }],
        '2xl': ['30px', { lineHeight: '1.15' }],
        '3xl': ['36px', { lineHeight: '1.15' }],
        '4xl': ['48px', { lineHeight: '1.15' }],
        '5xl': ['60px', { lineHeight: '1.1' }],
        '6xl': ['72px', { lineHeight: '1.1' }],
      },

      fontWeight: {
        regular:  '400',
        medium:   '500',
        semibold: '600',
        bold:     '700',
      },

      spacing: {
        '1':  '4px',
        '2':  '8px',
        '3':  '12px',
        '4':  '16px',
        '5':  '20px',
        '6':  '24px',
        '8':  '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },

      borderRadius: {
        none: '0px',
        sm:   '4px',
        md:   '8px',
        lg:   '12px',
        xl:   '16px',
        '2xl': '24px',
        full: '9999px',
      },

      boxShadow: {
        sm:      '0 1px 3px rgba(0,0,0,0.4)',
        md:      '0 4px 16px rgba(0,0,0,0.5)',
        lg:      '0 8px 32px rgba(0,0,0,0.6)',
        glow:    '0 0 24px rgba(77, 113, 250, 0.3)',
        'glow-sm': '0 0 12px rgba(77, 113, 250, 0.2)',
      },

      transitionDuration: {
        fast:   '100ms',
        base:   '200ms',
        slow:   '350ms',
        xslow:  '500ms',
      },

      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring:  'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        out:     'cubic-bezier(0, 0, 0.2, 1)',
      },

      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 12px rgba(77, 113, 250, 0.2)' },
          '50%':       { boxShadow: '0 0 24px rgba(77, 113, 250, 0.4)' },
        },
      },

      animation: {
        'fade-in':    'fade-in 200ms cubic-bezier(0, 0, 0.2, 1)',
        'scale-in':   'scale-in 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
