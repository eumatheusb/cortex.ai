'use client'

import * as React from 'react'
import { motion, type Variants } from 'framer-motion'
import { cn } from '../../utils'

export interface AuthTemplateProps {
  // Content
  children:     React.ReactNode

  // Branding
  logo?:        React.ReactNode
  tagline?:     string

  // Layout
  variant?:     'centered' | 'split'
  splitContent?: React.ReactNode  // only used when variant='split'
  className?:   string
  cardClass?:   string
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0, 0, 0.2, 1] as const } },
}

function AuthTemplate({
  children,
  logo,
  tagline,
  variant = 'centered',
  splitContent,
  className,
  cardClass,
}: AuthTemplateProps) {
  if (variant === 'split') {
    return (
      <div className={cn('flex h-screen overflow-hidden bg-void', className)}>
        {/* Left panel — decorative */}
        <div className="hidden lg:flex lg:flex-1 relative bg-ink border-r border-steel overflow-hidden">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #4D71FA 1px, transparent 1px),
                linear-gradient(to bottom, #4D71FA 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />
          {/* Glow orb */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-signal/10 blur-[120px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center px-16 py-12 w-full">
            {splitContent ?? (
              <div className="max-w-md">
                {logo && <div className="mb-12">{logo}</div>}
                {tagline && (
                  <p className="font-display text-3xl font-bold text-white leading-snug">
                    {tagline}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right panel — form */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 bg-void">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={cn('w-full max-w-sm', cardClass)}
          >
            {/* Mobile logo */}
            {logo && (
              <div className="lg:hidden flex justify-center mb-8">{logo}</div>
            )}
            {children}
          </motion.div>
        </div>
      </div>
    )
  }

  // Default: centered
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col items-center justify-center bg-void px-4 py-12',
        className,
      )}
    >
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-signal/8 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-sm"
      >
        {/* Logo */}
        {logo && (
          <div className="flex justify-center mb-8">{logo}</div>
        )}

        {/* Card */}
        <div
          className={cn(
            'rounded-2xl border border-steel bg-ink/80 backdrop-blur-sm p-8 shadow-2xl',
            cardClass,
          )}
        >
          {children}
        </div>

        {/* Tagline below card */}
        {tagline && (
          <p className="text-center text-xs text-mist/60 mt-6">{tagline}</p>
        )}
      </motion.div>
    </div>
  )
}

export { AuthTemplate }
