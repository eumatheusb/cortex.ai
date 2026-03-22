'use client'
import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { motion, AnimatePresence } from 'framer-motion'
import { Minus } from 'lucide-react'
import { cn } from '../../utils'

export interface CheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  indeterminate?: boolean
  label?: string
  hint?: string
  error?: string
  size?: 'sm' | 'md' | 'lg'
  id?: string
  className?: string
}

const sizeMap = {
  sm: { box: 'h-4 w-4', icon: 'h-2.5 w-2.5' },
  md: { box: 'h-5 w-5', icon: 'h-3 w-3' },
  lg: { box: 'h-6 w-6', icon: 'h-3.5 w-3.5' },
}

export function Checkbox({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  indeterminate,
  label,
  hint,
  error,
  size = 'md',
  id,
  className,
}: CheckboxProps) {
  const inputId = id ?? React.useId()
  const { box, icon } = sizeMap[size]

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <div className="flex items-start gap-2.5">
        <CheckboxPrimitive.Root
          id={inputId}
          checked={indeterminate ? 'indeterminate' : checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          className={cn(
            box,
            'shrink-0 rounded-sm border transition-all duration-[200ms]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-void',
            'disabled:opacity-40 disabled:cursor-not-allowed',
            'data-[state=unchecked]:bg-dusk data-[state=unchecked]:border-steel',
            'data-[state=checked]:bg-signal data-[state=checked]:border-signal',
            'data-[state=indeterminate]:bg-signal data-[state=indeterminate]:border-signal',
            error && 'border-error data-[state=unchecked]:border-error',
          )}
        >
          <CheckboxPrimitive.Indicator className="flex items-center justify-center" forceMount>
            <AnimatePresence>
              {indeterminate ? (
                <motion.span
                  key="indeterminate"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Minus className={cn(icon, 'text-white')} strokeWidth={3} />
                </motion.span>
              ) : (
                <motion.svg
                  key="check"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className={cn(icon, 'text-white')}
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'text-sm text-white font-body leading-snug cursor-pointer',
              disabled && 'opacity-40 cursor-not-allowed',
            )}
          >
            {label}
          </label>
        )}
      </div>

      {(hint || error) && (
        <p className={cn('text-xs ml-7', error ? 'text-error' : 'text-mist/60')}>
          {error ?? hint}
        </p>
      )}
    </div>
  )
}
