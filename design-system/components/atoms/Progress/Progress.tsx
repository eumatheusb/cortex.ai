'use client'
import * as React from 'react'
import { cn } from '../../utils'

const variantColorMap = {
  default: 'bg-signal',
  success: 'bg-success',
  warning: 'bg-warning',
  error:   'bg-error',
  signal:  'bg-signal',
}

export interface ProgressProps {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: keyof typeof variantColorMap
  label?: string
  showValue?: boolean
  animated?: boolean
  className?: string
}

const trackSizeMap = { sm: 'h-1', md: 'h-2', lg: 'h-3' }

export function Progress({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  label,
  showValue = false,
  animated = true,
  className,
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-xs text-mist">{label}</span>}
          {showValue && <span className="text-xs font-mono text-mist">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={cn('w-full bg-steel rounded-full overflow-hidden', trackSizeMap[size])}>
        <div
          className={cn(
            'h-full rounded-full',
            variantColorMap[variant],
            animated && 'transition-[width] duration-500 ease-out',
          )}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  )
}

export interface CircularProgressProps {
  value: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: keyof typeof variantColorMap
  showValue?: boolean
  strokeWidth?: number
  className?: string
}

const circularSizeMap = { sm: 48, md: 64, lg: 80, xl: 96 }
const strokeColorMap = {
  default: 'stroke-signal',
  success: 'stroke-success',
  warning: 'stroke-warning',
  error:   'stroke-error',
  signal:  'stroke-signal',
}

export function CircularProgress({
  value,
  size = 'md',
  variant = 'default',
  showValue = true,
  strokeWidth = 6,
  className,
}: CircularProgressProps) {
  const px = circularSizeMap[size]
  const radius = (px - strokeWidth * 2) / 2
  const circumference = 2 * Math.PI * radius
  const pct = Math.min(100, Math.max(0, value))
  const offset = circumference - (pct / 100) * circumference
  const fontSize = size === 'sm' ? 'text-[10px]' : size === 'md' ? 'text-xs' : 'text-sm'

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)} style={{ width: px, height: px }}>
      <svg width={px} height={px} className="-rotate-90">
        <circle
          cx={px / 2}
          cy={px / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-steel"
        />
        <circle
          cx={px / 2}
          cy={px / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn(strokeColorMap[variant], 'transition-[stroke-dashoffset] duration-500 ease-out')}
        />
      </svg>
      {showValue && (
        <span className={cn('absolute font-mono text-white', fontSize)}>
          {Math.round(pct)}%
        </span>
      )}
    </div>
  )
}
