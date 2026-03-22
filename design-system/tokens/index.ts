/**
 * Cortex Design System — Token Exports
 * Single import point for all design tokens
 */

export const colors = {
  // Base
  void:    '#090E1A',
  ink:     '#0C1220',
  dusk:    '#1B2845',
  steel:   '#1E2533',
  ash:     '#4A5568',
  mist:    '#94A3B8',
  white:   '#F7F9FC',

  // Brand
  signal:       '#4D71FA',
  signalDark:   '#3558D4',
  signalLight:  '#7B96FB',
  signalGhost:  'rgba(77, 113, 250, 0.12)',

  // Semantic
  success: '#22C55E',
  warning: '#F59E0B',
  error:   '#F43F5E',
  info:    '#4D71FA',
} as const

export const typography = {
  fontDisplay: "'Space Grotesk', sans-serif",
  fontBody:    "'Inter', sans-serif",
  fontMono:    "'JetBrains Mono', monospace",

  sizeXs:   '12px',
  sizeSm:   '14px',
  sizeBase: '16px',
  sizeMd:   '18px',
  sizeLg:   '20px',
  sizeXl:   '24px',
  size2xl:  '30px',
  size3xl:  '36px',
  size4xl:  '48px',
  size5xl:  '60px',
  size6xl:  '72px',

  weightRegular:  400,
  weightMedium:   500,
  weightSemibold: 600,
  weightBold:     700,

  leadingTight:  1.15,
  leadingSnug:   1.4,
  leadingNormal: 1.6,
} as const

export const spacing = {
  0:  '0px',
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  5:  '20px',
  6:  '24px',
  8:  '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
} as const

export const borderRadius = {
  none: '0px',
  sm:   '4px',
  md:   '8px',
  lg:   '12px',
  xl:   '16px',
  '2xl': '24px',
  full: '9999px',
} as const

export const shadow = {
  sm:     '0 1px 3px rgba(0,0,0,0.4)',
  md:     '0 4px 16px rgba(0,0,0,0.5)',
  lg:     '0 8px 32px rgba(0,0,0,0.6)',
  glow:   '0 0 24px rgba(77, 113, 250, 0.3)',
  glowSm: '0 0 12px rgba(77, 113, 250, 0.2)',
} as const

export const animation = {
  durationFast:   '100ms',
  durationBase:   '200ms',
  durationSlow:   '350ms',
  durationXslow:  '500ms',
  easingDefault:  'cubic-bezier(0.4, 0, 0.2, 1)',
  easingSpring:   'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  easingOut:      'cubic-bezier(0, 0, 0.2, 1)',
} as const

export const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadow,
  animation,
} as const

export type Colors     = typeof colors
export type Typography = typeof typography
export type Spacing    = typeof spacing
export type Tokens     = typeof tokens
