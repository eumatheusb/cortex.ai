'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts'
import { cn } from '../../utils'

const kpiVariants = cva(
  'relative flex flex-col gap-3 rounded-xl border p-5 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden',
  {
    variants: {
      variant: {
        default:  'bg-dusk border-steel',
        elevated: 'bg-dusk border-steel shadow-card',
        signal:   'bg-signal/5 border-signal/20 shadow-glow-sm',
        success:  'bg-success/5 border-success/20',
        warning:  'bg-warning/5 border-warning/20',
        error:    'bg-error/5 border-error/20',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

type Trend = 'up' | 'down' | 'neutral'

export interface KPICardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof kpiVariants> {
  label:         string
  value:         string | number
  prefix?:       string
  suffix?:       string
  trend?:        Trend
  trendValue?:   string
  trendLabel?:   string
  icon?:         React.ReactNode
  loading?:      boolean
  sparklineData?: number[]
  sparklineColor?: string
  animateValue?:  boolean
}

const trendConfig: Record<Trend, { icon: React.ReactNode; color: string }> = {
  up:      { icon: <TrendingUp size={14} />,   color: 'text-success' },
  down:    { icon: <TrendingDown size={14} />,  color: 'text-error' },
  neutral: { icon: <Minus size={14} />,         color: 'text-mist' },
}

function useCountUp(target: number, duration: number = 1000, enabled: boolean = true) {
  const [current, setCurrent] = React.useState(enabled ? 0 : target)

  React.useEffect(() => {
    if (!enabled) {
      setCurrent(target)
      return
    }

    let startTime: number | null = null
    let rafId: number

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * target))

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration, enabled])

  return current
}

function SparklineMini({
  data,
  color = 'var(--color-signal)',
}: {
  data: number[]
  color?: string
}) {
  const chartData = data.map((v, i) => ({ i, v }))

  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 opacity-30">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.4} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="v"
            stroke={color}
            strokeWidth={1.5}
            fill="url(#sparkGradient)"
            dot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

function KPICard({
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
  sparklineData,
  sparklineColor,
  animateValue = false,
  ...props
}: KPICardProps) {
  const trendCfg = trend ? trendConfig[trend] : null
  const numericValue = typeof value === 'number' ? value : null
  const animatedNum = useCountUp(
    numericValue ?? 0,
    1000,
    animateValue && numericValue !== null
  )
  const displayValue =
    animateValue && numericValue !== null
      ? animatedNum.toLocaleString('pt-BR')
      : value

  return (
    <div
      className={cn(kpiVariants({ variant }), className)}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between relative z-10">
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
      <div className="flex items-baseline gap-1 relative z-10">
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
            {displayValue}
          </motion.span>
        )}
        {suffix && (
          <span className="font-mono text-lg text-mist">{suffix}</span>
        )}
      </div>

      {/* Trend */}
      {trendCfg && (trendValue || trendLabel) && (
        <div className={cn('flex items-center gap-1.5 text-xs font-medium relative z-10', trendCfg.color)}>
          {trendCfg.icon}
          {trendValue && <span className="font-mono">{trendValue}</span>}
          {trendLabel && <span className="text-mist font-normal">{trendLabel}</span>}
        </div>
      )}

      {/* Sparkline */}
      {sparklineData && sparklineData.length > 1 && (
        <SparklineMini data={sparklineData} color={sparklineColor} />
      )}
    </div>
  )
}

function KPIGrid({
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

export { KPICard, KPIGrid }
