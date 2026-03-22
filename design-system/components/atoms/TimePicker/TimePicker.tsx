'use client'
import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '../../utils'

export interface TimePickerProps {
  value?: string
  onChange?: (time: string) => void
  format?: '24h' | '12h'
  step?: 15 | 30 | 60
  minTime?: string
  maxTime?: string
  disabledTimes?: string[]
  placeholder?: string
  disabled?: boolean
  label?: string
  error?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'px-3.5 py-2.5 text-xs',
  md: 'px-4 py-3 text-sm',
  lg: 'px-5 py-3.5 text-base',
}

function generateTimes(format: '24h' | '12h', step: number): string[] {
  const times: string[] = []
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += step) {
      const hh = String(h).padStart(2, '0')
      const mm = String(m).padStart(2, '0')
      if (format === '24h') {
        times.push(`${hh}:${mm}`)
      } else {
        const period = h >= 12 ? 'PM' : 'AM'
        const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h
        times.push(`${h12}:${mm} ${period}`)
      }
    }
  }
  return times
}

function timeToMinutes(time: string): number {
  const clean = time.replace(/ (AM|PM)/, '')
  const [hStr, mStr] = clean.split(':')
  let h = parseInt(hStr, 10)
  const m = parseInt(mStr, 10)
  if (time.includes('PM') && h < 12) h += 12
  if (time.includes('AM') && h === 12) h = 0
  return h * 60 + m
}

export function TimePicker({
  value,
  onChange,
  format = '24h',
  step = 15,
  minTime,
  maxTime,
  disabledTimes = [],
  placeholder = 'Selecione um horario',
  disabled = false,
  label,
  error,
  size = 'md',
  className,
}: TimePickerProps) {
  const [open, setOpen] = React.useState(false)
  const times = React.useMemo(() => generateTimes(format, step), [format, step])
  const listRef = React.useRef<HTMLDivElement>(null)

  const minMinutes = minTime ? timeToMinutes(minTime) : -1
  const maxMinutes = maxTime ? timeToMinutes(maxTime) : Infinity

  const isDisabledTime = React.useCallback(
    (time: string) => {
      const mins = timeToMinutes(time)
      if (mins <= minMinutes || mins >= maxMinutes) return true
      return disabledTimes.includes(time)
    },
    [minMinutes, maxMinutes, disabledTimes],
  )

  React.useEffect(() => {
    if (open && value && listRef.current) {
      const selected = listRef.current.querySelector('[data-selected="true"]')
      if (selected) {
        selected.scrollIntoView({ block: 'center' })
      }
    }
  }, [open, value])

  const inputId = React.useId()

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-medium font-display text-mist uppercase tracking-wide"
        >
          {label}
        </label>
      )}

      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild disabled={disabled}>
          <button
            id={inputId}
            type="button"
            className={cn(
              'flex w-full items-center justify-between gap-2',
              'bg-dusk border border-steel rounded-md',
              'text-white font-body',
              'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
              'hover:border-mist/30',
              'focus:outline-none focus:border-signal focus:ring-2 focus:ring-signal/20',
              'disabled:opacity-40 disabled:cursor-not-allowed',
              error && 'border-error focus:border-error focus:ring-error/20',
              sizeMap[size],
            )}
            aria-label={label ?? placeholder}
          >
            <span className={cn(!value && 'text-mist/40')}>
              {value ?? placeholder}
            </span>
            <Clock className="h-4 w-4 text-mist/60 shrink-0" aria-hidden />
          </button>
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align="start"
            sideOffset={8}
            className={cn(
              'z-50 w-48 rounded-lg border border-steel bg-dusk shadow-modal',
              'outline-none',
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
              'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
            )}
          >
            <div
              ref={listRef}
              className="max-h-60 overflow-y-auto p-1"
              role="listbox"
              aria-label="Horarios disponiveis"
            >
              {times.map((time) => {
                const isSelected = time === value
                const isOff = isDisabledTime(time)

                return (
                  <motion.button
                    key={time}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    data-selected={isSelected}
                    disabled={isOff}
                    onClick={() => {
                      onChange?.(time)
                      setOpen(false)
                    }}
                    className={cn(
                      'w-full text-left rounded-md px-3 py-1.5 text-sm font-mono',
                      'text-mist outline-none cursor-pointer',
                      'hover:bg-ink hover:text-white',
                      'focus:bg-ink focus:text-white',
                      isSelected && 'bg-signal/10 text-white',
                      isOff && 'opacity-30 pointer-events-none',
                    )}
                    whileHover={!isOff ? { x: 2 } : undefined}
                    transition={{ duration: 0.1 }}
                  >
                    {time}
                  </motion.button>
                )
              })}
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>

      {error && (
        <p className="text-xs text-error">{error}</p>
      )}
    </div>
  )
}
