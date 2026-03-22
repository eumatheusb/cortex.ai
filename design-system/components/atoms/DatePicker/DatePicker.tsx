'use client'
import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { DayPicker, type DateRange } from 'react-day-picker'
import { ptBR } from 'react-day-picker/locale'
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'
import { format as fnsFormat } from 'date-fns'
import { ptBR as dateFnsPtBR } from 'date-fns/locale'
import { cn } from '../../utils'

export interface DatePickerProps {
  mode?: 'single' | 'range'
  value?: Date | null
  rangeValue?: DateRange
  onChange?: (date: Date | undefined) => void
  onRangeChange?: (range: DateRange | undefined) => void
  minDate?: Date
  maxDate?: Date
  disabledDates?: Date[]
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'px-3.5 py-2.5 text-xs',
  md: 'px-4 py-3 text-sm',
  lg: 'px-5 py-3.5 text-base',
}

function formatDate(date: Date): string {
  return fnsFormat(date, 'dd/MM/yyyy', { locale: dateFnsPtBR })
}

function formatRange(range: DateRange | undefined): string {
  if (!range?.from) return ''
  if (!range.to) return formatDate(range.from)
  return `${formatDate(range.from)} — ${formatDate(range.to)}`
}

export function DatePicker({
  mode = 'single',
  value,
  rangeValue,
  onChange,
  onRangeChange,
  minDate,
  maxDate,
  disabledDates,
  placeholder = 'Selecione uma data',
  label,
  error,
  disabled = false,
  size = 'md',
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const inputId = React.useId()

  const displayText = React.useMemo(() => {
    if (mode === 'range') return formatRange(rangeValue)
    return value ? formatDate(value) : ''
  }, [mode, value, rangeValue])

  const disabledMatcher = React.useMemo(() => {
    const matchers: Array<Date | { before: Date } | { after: Date }> = []
    if (minDate) matchers.push({ before: minDate })
    if (maxDate) matchers.push({ after: maxDate })
    if (disabledDates) matchers.push(...disabledDates)
    return matchers
  }, [minDate, maxDate, disabledDates])

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
            <span className={cn(!displayText && 'text-mist/40')}>
              {displayText || placeholder}
            </span>
            <CalendarDays className="h-4 w-4 text-mist/60 shrink-0" aria-hidden />
          </button>
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align="start"
            sideOffset={8}
            className={cn(
              'z-50 rounded-lg border border-steel bg-dusk shadow-modal p-3',
              'outline-none',
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
              'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
            )}
          >
            {mode === 'single' ? (
              <DayPicker
                mode="single"
                selected={value ?? undefined}
                onSelect={(date) => {
                  onChange?.(date ?? undefined)
                  if (date) setOpen(false)
                }}
                disabled={disabledMatcher}
                locale={ptBR}
                showOutsideDays
                classNames={{
                  root: 'cortex-calendar',
                  months: 'flex flex-col',
                  month_caption: 'flex items-center justify-center py-2',
                  caption_label: 'text-sm font-display font-semibold text-white capitalize',
                  nav: 'flex items-center justify-between absolute inset-x-0 top-0 px-1 py-2',
                  button_previous: 'p-1 rounded-md text-mist hover:text-white hover:bg-ink transition-colors',
                  button_next: 'p-1 rounded-md text-mist hover:text-white hover:bg-ink transition-colors',
                  weekdays: 'grid grid-cols-7 mb-1',
                  weekday: 'text-[10px] font-medium text-ash text-center uppercase w-9',
                  weeks: '',
                  week: 'grid grid-cols-7',
                  day: 'p-0',
                  day_button: cn(
                    'w-9 h-9 text-xs rounded-md text-mist',
                    'hover:bg-ink hover:text-white',
                    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal',
                    'transition-colors duration-150',
                  ),
                  today: 'font-bold text-signal',
                  selected: 'bg-signal text-white hover:bg-signal-dark',
                  outside: 'opacity-30',
                  disabled: 'opacity-20 pointer-events-none',
                  range_start: 'bg-signal text-white rounded-l-md',
                  range_end: 'bg-signal text-white rounded-r-md',
                  range_middle: 'bg-signal/10 text-white',
                }}
                components={{
                  Chevron: ({ orientation }) =>
                    orientation === 'left' ? (
                      <ChevronLeft className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    ),
                }}
              />
            ) : (
              <DayPicker
                mode="range"
                selected={rangeValue}
                onSelect={(range) => {
                  onRangeChange?.(range ?? undefined)
                }}
                disabled={disabledMatcher}
                locale={ptBR}
                showOutsideDays
                classNames={{
                  root: 'cortex-calendar',
                  months: 'flex flex-col',
                  month_caption: 'flex items-center justify-center py-2',
                  caption_label: 'text-sm font-display font-semibold text-white capitalize',
                  nav: 'flex items-center justify-between absolute inset-x-0 top-0 px-1 py-2',
                  button_previous: 'p-1 rounded-md text-mist hover:text-white hover:bg-ink transition-colors',
                  button_next: 'p-1 rounded-md text-mist hover:text-white hover:bg-ink transition-colors',
                  weekdays: 'grid grid-cols-7 mb-1',
                  weekday: 'text-[10px] font-medium text-ash text-center uppercase w-9',
                  weeks: '',
                  week: 'grid grid-cols-7',
                  day: 'p-0',
                  day_button: cn(
                    'w-9 h-9 text-xs rounded-md text-mist',
                    'hover:bg-ink hover:text-white',
                    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal',
                    'transition-colors duration-150',
                  ),
                  today: 'font-bold text-signal',
                  selected: 'bg-signal text-white hover:bg-signal-dark',
                  outside: 'opacity-30',
                  disabled: 'opacity-20 pointer-events-none',
                  range_start: 'bg-signal text-white rounded-l-md',
                  range_end: 'bg-signal text-white rounded-r-md',
                  range_middle: 'bg-signal/10 text-white',
                }}
                components={{
                  Chevron: ({ orientation }) =>
                    orientation === 'left' ? (
                      <ChevronLeft className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    ),
                }}
              />
            )}
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>

      {error && (
        <p className="text-xs text-error">{error}</p>
      )}
    </div>
  )
}
