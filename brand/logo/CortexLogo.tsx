'use client'

import { motion, useReducedMotion } from 'framer-motion'

// ─── tokens ──────────────────────────────────────────────────────────────────
const T = {
  void:   '#090E1A',
  dusk:   '#1B2845',
  signal: '#4D71FA',
  white:  '#F7F9FC',
} as const

// Arc length: r=15, 270° → 15 × (3π/2) ≈ 70.69
const ARC_LENGTH = 70.69

// ─── types ────────────────────────────────────────────────────────────────────
export type LogoVariant = 'horizontal' | 'icon' | 'wordmark'
export type LogoTheme   = 'dark' | 'light'
export type LogoMode    = 'reveal' | 'idle' | 'loader' | 'static'

interface CortexLogoProps {
  variant?:   LogoVariant
  theme?:     LogoTheme
  /** Height in px — width scales proportionally */
  size?:      number
  mode?:      LogoMode
  className?: string
}

// ─── variants (Framer Motion) ─────────────────────────────────────────────────
const bgVariants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
}

const arcVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.85, ease: [0.4, 0, 0.2, 1], delay: 0.1 },
      opacity:    { duration: 0.1, delay: 0.1 },
    },
  },
}

const dotRevealVariants = {
  hidden:  { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 12,
      delay: 0.85,
    },
  },
}

const dotIdleVariants = {
  idle: {
    scale:   [1, 1.8, 0.5, 1.4, 1],
    opacity: [1, 0.9, 0.3, 0.85, 1],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
}

const wordmarkVariants = {
  hidden: { opacity: 0, x: -14 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay: 0.55 },
  },
}

const spinVariants = {
  spin: {
    rotate: 360,
    transition: {
      duration: 1.1,
      ease: [0.4, 0, 0.6, 1],
      repeat: Infinity,
    },
  },
}

// ─── sub-components ───────────────────────────────────────────────────────────

interface IconMarkProps {
  theme:   LogoTheme
  mode:    LogoMode
  reduced: boolean
  /** Size of the icon bounding box */
  size:    number
}

function IconMark({ theme, mode, reduced, size }: IconMarkProps) {
  const isLoader = mode === 'loader'
  const isReveal = mode === 'reveal' && !reduced
  const isIdle   = (mode === 'idle') && !reduced

  const bgFill   = theme === 'dark'
    ? undefined  // uses gradient
    : T.white
  const markColor = T.signal

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <radialGradient id="cx-bg" cx="40%" cy="40%" r="65%">
          <stop offset="0%"   stopColor={T.dusk} />
          <stop offset="100%" stopColor={T.void} />
        </radialGradient>
      </defs>

      {/* Background */}
      <motion.rect
        width="64" height="64" rx="14"
        fill={theme === 'dark' ? 'url(#cx-bg)' : bgFill}
        variants={isReveal ? bgVariants : undefined}
        initial={isReveal ? 'hidden' : undefined}
        animate={isReveal ? 'show'   : undefined}
      />

      {isLoader ? (
        // ── Loader: spinning chase arc ──────────────────────────────────────
        <>
          {/* Ghost track */}
          <circle
            cx="32" cy="32" r="15"
            stroke={markColor}
            strokeWidth="5"
            strokeOpacity="0.12"
          />
          {/* Spinning chase */}
          <motion.circle
            cx="32" cy="32" r="15"
            stroke={markColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="53 18"
            style={{ originX: '32px', originY: '32px' }}
            variants={spinVariants}
            animate="spin"
          />
          {/* Orbiting dot */}
          <motion.circle
            cx="47" cy="32" r="2.5"
            fill={markColor}
            style={{ originX: '32px', originY: '32px' }}
            variants={spinVariants}
            animate="spin"
          />
        </>
      ) : (
        // ── Static / reveal / idle arc ──────────────────────────────────────
        <>
          <motion.path
            d="M 42.6,42.6 A 15,15 0 1,1 42.6,21.4"
            stroke={markColor}
            strokeWidth="5"
            strokeLinecap="round"
            variants={isReveal ? arcVariants : undefined}
            initial={isReveal ? 'hidden' : undefined}
            animate={isReveal ? 'show'   : undefined}
          />

          <motion.circle
            cx="55" cy="32" r="2.5"
            fill={markColor}
            style={{ originX: '55px', originY: '32px' }}
            variants={isReveal ? dotRevealVariants : undefined}
            initial={isReveal ? 'hidden' : undefined}
            animate={
              isReveal ? 'show' :
              isIdle   ? dotIdleVariants.idle.transition && 'idle' :
              undefined
            }
            {...(isIdle && !isReveal ? {
              animate: dotIdleVariants.idle as any,
            } : {})}
          />
        </>
      )}
    </svg>
  )
}

// ─── main component ────────────────────────────────────────────────────────────

export function CortexLogo({
  variant  = 'horizontal',
  theme    = 'dark',
  size     = 64,
  mode     = 'reveal',
  className,
}: CortexLogoProps) {
  const reduced = useReducedMotion() ?? false
  const textColor = theme === 'dark' ? T.white : T.void

  // ── icon only ──────────────────────────────────────────────────────────────
  if (variant === 'icon') {
    return (
      <span className={className} style={{ display: 'inline-block' }}>
        <IconMark theme={theme} mode={mode} reduced={reduced} size={size} />
      </span>
    )
  }

  // ── wordmark only ──────────────────────────────────────────────────────────
  if (variant === 'wordmark') {
    const isReveal = mode === 'reveal' && !reduced
    return (
      <motion.svg
        viewBox="0 0 180 52"
        height={size}
        width={(size * 180) / 52}
        fill="none"
        role="img"
        aria-label="Cortex"
        className={className}
      >
        <motion.text
          x="0" y="40"
          fontFamily="'Space Grotesk', 'Arial Black', sans-serif"
          fontWeight="700"
          fontSize="44"
          letterSpacing="1"
          fill={textColor}
          variants={isReveal ? wordmarkVariants : undefined}
          initial={isReveal ? 'hidden' : undefined}
          animate={isReveal ? 'show'   : undefined}
        >
          Cortex
        </motion.text>
        <circle cx="170" cy="12" r="4" fill={T.signal} />
      </motion.svg>
    )
  }

  // ── horizontal combination (default) ──────────────────────────────────────
  const iconSize  = size
  const gap       = Math.round(size * 0.25)
  const fontSize  = Math.round(size * 0.5625)   // 36/64 ratio
  const textX     = iconSize + gap
  const textY     = Math.round(iconSize * 0.69)  // ~44/64 baseline ratio
  const totalW    = textX + Math.round(fontSize * 3.5)  // approx wordmark width
  const isReveal  = mode === 'reveal' && !reduced

  return (
    <motion.svg
      viewBox={`0 0 ${totalW} ${iconSize}`}
      height={iconSize}
      width={totalW}
      fill="none"
      role="img"
      aria-label="Cortex"
      className={className}
    >
      <defs>
        <radialGradient id="cx-h-bg" cx="40%" cy="40%" r="65%">
          <stop offset="0%"   stopColor={T.dusk} />
          <stop offset="100%" stopColor={T.void} />
        </radialGradient>
      </defs>

      {/* Icon portion — rendered inline for sizing control */}
      <motion.rect
        width={iconSize} height={iconSize} rx={Math.round(iconSize * 0.22)}
        fill={theme === 'dark' ? 'url(#cx-h-bg)' : T.white}
        variants={isReveal ? bgVariants : undefined}
        initial={isReveal ? 'hidden' : undefined}
        animate={isReveal ? 'show'   : undefined}
      />

      {mode === 'loader' ? (
        <>
          <circle
            cx={iconSize / 2} cy={iconSize / 2} r={iconSize * 0.234}
            stroke={T.signal} strokeWidth={iconSize * 0.078} strokeOpacity="0.12"
          />
          <motion.circle
            cx={iconSize / 2} cy={iconSize / 2} r={iconSize * 0.234}
            stroke={T.signal} strokeWidth={iconSize * 0.078}
            strokeLinecap="round" strokeDasharray="53 18"
            style={{ originX: `${iconSize / 2}px`, originY: `${iconSize / 2}px` }}
            variants={spinVariants} animate="spin"
          />
        </>
      ) : (
        <>
          {/* Scale arc coords relative to size (designed at 64px) */}
          <motion.path
            d={`M ${iconSize * 0.666},${iconSize * 0.666} A ${iconSize * 0.234},${iconSize * 0.234} 0 1,1 ${iconSize * 0.666},${iconSize * 0.334}`}
            stroke={T.signal}
            strokeWidth={iconSize * 0.078}
            strokeLinecap="round"
            variants={isReveal ? arcVariants : undefined}
            initial={isReveal ? 'hidden' : undefined}
            animate={isReveal ? 'show'   : undefined}
          />
          <motion.circle
            cx={iconSize * 0.859} cy={iconSize * 0.5} r={iconSize * 0.039}
            fill={T.signal}
            style={{
              originX: `${iconSize * 0.859}px`,
              originY: `${iconSize * 0.5}px`,
            }}
            variants={isReveal ? dotRevealVariants : undefined}
            initial={isReveal ? 'hidden' : undefined}
            animate={isReveal ? 'show'   : undefined}
          />
        </>
      )}

      {/* Wordmark */}
      <motion.text
        x={textX} y={textY}
        fontFamily="'Space Grotesk', 'Arial Black', sans-serif"
        fontWeight="700"
        fontSize={fontSize}
        letterSpacing="0.8"
        fill={textColor}
        variants={isReveal ? wordmarkVariants : undefined}
        initial={isReveal ? 'hidden' : undefined}
        animate={isReveal ? 'show'   : undefined}
      >
        Cortex
      </motion.text>
    </motion.svg>
  )
}
