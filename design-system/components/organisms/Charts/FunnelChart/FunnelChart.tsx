'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../utils'

export interface FunnelStep {
  label: string
  value: number
  color?: string
}

export interface FunnelChartProps {
  steps:          FunnelStep[]
  height?:        number
  showConversion?: boolean
  showValues?:    boolean
  className?:     string
  formatValue?:   (value: number) => string
}

const DEFAULT_COLORS = [
  'var(--color-signal)',
  '#7B96FB',
  'var(--color-warning)',
  '#F59E0B',
  'var(--color-success)',
  'var(--color-error)',
]

function FunnelChart({
  steps,
  height,
  showConversion = true,
  showValues = true,
  className,
  formatValue = (v) => v.toLocaleString('pt-BR'),
}: FunnelChartProps) {
  if (!steps.length) return null

  const maxValue = steps[0].value
  const minWidthPct = 20

  function getWidth(value: number): number {
    if (maxValue === 0) return minWidthPct
    const pct = (value / maxValue) * 100
    return Math.max(pct, minWidthPct)
  }

  const stepHeight = height ? height / steps.length : undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
      className={cn('flex w-full flex-col items-center gap-0', className)}
      role="img"
      aria-label="Grafico de funil"
    >
      {steps.map((step, i) => {
        const widthPct = getWidth(step.value)
        const color = step.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length]
        const prevValue = i > 0 ? steps[i - 1].value : null
        const conversionRate =
          prevValue && prevValue > 0
            ? ((step.value / prevValue) * 100).toFixed(1)
            : null

        return (
          <React.Fragment key={step.label}>
            {/* Conversion indicator between steps */}
            {showConversion && conversionRate && (
              <div className="flex items-center gap-2 py-1">
                <div className="h-px w-6 bg-steel" />
                <span className="font-mono text-xs text-mist">
                  {conversionRate}%
                </span>
                <div className="h-px w-6 bg-steel" />
              </div>
            )}

            {/* Funnel step */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
              className="relative flex items-center justify-center rounded-lg"
              style={{
                width: `${widthPct}%`,
                minHeight: stepHeight || 56,
                backgroundColor: color,
                opacity: 0.85 + (0.15 * (steps.length - i)) / steps.length,
              }}
            >
              <div className="flex flex-col items-center gap-0.5 px-4 py-3">
                <span className="font-display text-sm font-semibold text-white">
                  {step.label}
                </span>
                {showValues && (
                  <span className="font-mono text-xs font-medium text-white/80">
                    {formatValue(step.value)}
                  </span>
                )}
              </div>
            </motion.div>
          </React.Fragment>
        )
      })}
    </motion.div>
  )
}

export { FunnelChart }
