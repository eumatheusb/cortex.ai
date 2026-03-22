'use client'
import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '../../utils'

export interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  size?: 'sm' | 'md' | 'lg'
  id?: string
  className?: string
}

const sizeMap = {
  sm: { track: 'h-4 w-7', thumb: 'h-3 w-3 data-[state=checked]:translate-x-3' },
  md: { track: 'h-5 w-9', thumb: 'h-4 w-4 data-[state=checked]:translate-x-4' },
  lg: { track: 'h-6 w-11', thumb: 'h-5 w-5 data-[state=checked]:translate-x-5' },
}

export function Switch({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  label,
  size = 'md',
  id,
  className,
}: SwitchProps) {
  const inputId = id ?? React.useId()
  const { track, thumb } = sizeMap[size]

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <SwitchPrimitive.Root
        id={inputId}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={cn(
          track,
          'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent',
          'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-void',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          'data-[state=unchecked]:bg-steel',
          'data-[state=checked]:bg-signal',
        )}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            thumb,
            'pointer-events-none block rounded-full bg-white shadow-sm',
            'transition-transform duration-[200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]',
            'translate-x-0',
          )}
        />
      </SwitchPrimitive.Root>

      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'text-sm text-white font-body cursor-pointer',
            disabled && 'opacity-40 cursor-not-allowed',
          )}
        >
          {label}
        </label>
      )}
    </div>
  )
}
