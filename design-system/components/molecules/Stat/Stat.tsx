'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

const statVariants = cva(
  'flex flex-col gap-3 rounded-xl border p-5 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
  {
    variants: {
      variant: {
        default:  'bg-dusk border-steel',
        elevated: 'bg-dusk border-steel shadow-md',
        signal:   'bg-signal/5 border-signal/20 shadow-glow-sm',
        success:  'bg-success/5 border-success/20',
        warning:  'bg-warning/5 border-warning/20',
        error:    'bg-error/5   border-error/20',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

type Trend = 'up' | 'down' | 'neutral'

export interface StatProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statVariants> {
  label:       string
  value:       string | number
  prefix?:     string
  suffix?:     string
  trend?:      Trend
  trendValue?: string
  trendLabel?: string
  icon?:       React.ReactNode
  loading?:    boolean
}

const trendConfig: Record<Trend, { icon: React.ReactNode; color: string }> = {
  up:      { icon: <TrendingUp  size={14} />, color: 'text-success' },
  down:    { icon: <TrendingDown size={14} />, color: 'text-error' },
  neutral: { icon: <Minus       size={14} />, color: 'text-mist' },
}

function Stat({
  className,
  variant,
  label,
  value,
  prefix,
  suffix,
  trend,
  trendValue,
  trendLabel,
  icon,
  loading,
  ...props
}: StatProps) {
  const trendCfg = trend ? trendConfig[trend] : null

  return (
    <div className={cn(statVariants({ variant }), className)} {...props}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="font-display text-xs font-medium uppercase tracking-wide text-mist">
          {label}
        </p>
        {icon && (
          <span className="text-mist/60" aria-hidden>
            {icon}
          </span>
        )}
      </div>

      {/* Value */}
      <div className="flex items-baseline gap-1">
        {prefix && (
          <span className="font-mono text-lg text-mist">{prefix}</span>
        )}
        {loading ? (
          <div className="h-9 w-24 rounded-md bg-steel animate-pulse" />
        ) : (
          <motion.span
            key={String(value)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
            className="font-display font-bold text-4xl text-white tabular-nums"
          >
            {value}
          </motion.span>
        )}
        {suffix && (
          <span className="font-mono text-lg text-mist">{suffix}</span>
        )}
      </div>

      {/* Trend */}
      {trendCfg && (trendValue || trendLabel) && (
        <div className={cn('flex items-center gap-1.5 text-xs font-medium', trendCfg.color)}>
          {trendCfg.icon}
          {trendValue && <span className="font-mono">{trendValue}</span>}
          {trendLabel && <span className="text-mist font-normal">{trendLabel}</span>}
        </div>
      )}
    </div>
  )
}

function StatGrid({
  children,
  cols = 4,
}: {
  children: React.ReactNode
  cols?: 2 | 3 | 4
}) {
  return (
    <div
      className={cn('grid gap-4', {
        'grid-cols-1 sm:grid-cols-2':                cols === 2,
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': cols === 3,
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4': cols === 4,
      })}
    >
      {children}
    </div>
  )
}

export { Stat, StatGrid }
