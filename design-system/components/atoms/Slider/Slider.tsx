'use client'
import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '../../utils'

export interface SliderProps {
  value?: number[]
  defaultValue?: number[]
  onValueChange?: (value: number[]) => void
  onValueCommit?: (value: number[]) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  showValue?: boolean
  label?: string
  formatValue?: (value: number) => string
  marks?: { value: number; label?: string }[]
  className?: string
}

const trackSizeMap = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
}

const thumbSizeMap = {
  sm: 'h-3.5 w-3.5',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

export function Slider({
  value,
  defaultValue = [0],
  onValueChange,
  onValueCommit,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  size = 'md',
  showValue = false,
  label,
  formatValue = (v) => String(v),
  marks,
  className,
}: SliderProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const currentValue = value ?? internalValue

  const handleValueChange = React.useCallback(
    (val: number[]) => {
      if (!value) setInternalValue(val)
      onValueChange?.(val)
    },
    [value, onValueChange],
  )

  return (
    <div className={cn('flex flex-col gap-2 w-full', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-xs font-medium font-display text-mist uppercase tracking-wide">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-xs font-mono text-mist">
              {currentValue.length === 1
                ? formatValue(currentValue[0])
                : `${formatValue(currentValue[0])} — ${formatValue(currentValue[currentValue.length - 1])}`}
            </span>
          )}
        </div>
      )}

      <SliderPrimitive.Root
        value={currentValue}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        onValueCommit={onValueCommit}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className={cn(
          'relative flex w-full touch-none select-none items-center',
          disabled && 'opacity-40 pointer-events-none',
        )}
      >
        <SliderPrimitive.Track
          className={cn(
            'relative w-full grow overflow-hidden rounded-full bg-steel',
            trackSizeMap[size],
          )}
        >
          <SliderPrimitive.Range className="absolute h-full bg-signal rounded-full" />
        </SliderPrimitive.Track>

        {currentValue.map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            className={cn(
              thumbSizeMap[size],
              'block rounded-full border-2 border-signal bg-white shadow-sm',
              'transition-colors duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
              'hover:border-signal-light hover:shadow-glow-sm',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-void',
              'cursor-grab active:cursor-grabbing',
            )}
          />
        ))}
      </SliderPrimitive.Root>

      {marks && marks.length > 0 && (
        <div className="relative w-full h-5">
          {marks.map((mark) => {
            const pct = ((mark.value - min) / (max - min)) * 100
            return (
              <span
                key={mark.value}
                className="absolute text-[10px] text-ash -translate-x-1/2"
                style={{ left: `${pct}%` }}
              >
                {mark.label ?? formatValue(mark.value)}
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}
