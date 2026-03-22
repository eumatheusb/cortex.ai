'use client'
import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../utils'

export interface RadioItemProps {
  value: string
  label: string
  hint?: string
  disabled?: boolean
}

export interface RadioGroupProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  disabled?: boolean
  orientation?: 'horizontal' | 'vertical'
  name?: string
  size?: 'sm' | 'md'
  items: RadioItemProps[]
  className?: string
}

const sizeMap = {
  sm: { circle: 'h-4 w-4', dot: 'h-1.5 w-1.5' },
  md: { circle: 'h-5 w-5', dot: 'h-2 w-2' },
}

export function RadioGroup({
  value,
  defaultValue,
  onChange,
  disabled,
  orientation = 'vertical',
  name,
  size = 'md',
  items,
  className,
}: RadioGroupProps) {
  const [selected, setSelected] = React.useState(value ?? defaultValue ?? '')
  const groupName = name ?? React.useId()
  const { circle, dot } = sizeMap[size]

  React.useEffect(() => {
    if (value !== undefined) setSelected(value)
  }, [value])

  const handleChange = (itemValue: string) => {
    setSelected(itemValue)
    onChange?.(itemValue)
  }

  return (
    <div
      role="radiogroup"
      className={cn(
        'flex gap-3',
        orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
        className,
      )}
    >
      {items.map((item) => {
        const isSelected = selected === item.value
        const isDisabled = disabled || item.disabled
        const itemId = `${groupName}-${item.value}`

        return (
          <div key={item.value} className="flex items-start gap-2.5">
            <button
              role="radio"
              aria-checked={isSelected}
              id={itemId}
              type="button"
              disabled={isDisabled}
              onClick={() => !isDisabled && handleChange(item.value)}
              className={cn(
                circle,
                'shrink-0 mt-0.5 rounded-full border-2 flex items-center justify-center',
                'transition-all duration-[200ms] focus-visible:outline-none',
                'focus-visible:ring-2 focus-visible:ring-signal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-void',
                'disabled:opacity-40 disabled:cursor-not-allowed',
                isSelected
                  ? 'border-signal bg-transparent'
                  : 'border-steel bg-dusk hover:border-mist/40',
              )}
            >
              <AnimatePresence>
                {isSelected && (
                  <motion.span
                    key="dot"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                    className={cn(dot, 'rounded-full bg-signal block')}
                  />
                )}
              </AnimatePresence>
            </button>

            <div className="flex flex-col gap-0.5">
              <label
                htmlFor={itemId}
                className={cn(
                  'text-sm text-white font-body leading-snug cursor-pointer',
                  isDisabled && 'opacity-40 cursor-not-allowed',
                )}
              >
                {item.label}
              </label>
              {item.hint && (
                <span className="text-xs text-mist/60">{item.hint}</span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
