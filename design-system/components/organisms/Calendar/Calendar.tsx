'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Plus,
} from 'lucide-react'
import { cn } from '../../utils'

export type CalendarView = 'month' | 'week' | 'day'

export type EventCategory = 'consulta' | 'retorno' | 'urgencia' | 'bloqueio' | 'default'

export interface CalendarEvent {
  id:        string
  title:     string
  start:     Date
  end:       Date
  category?: EventCategory
  allDay?:   boolean
}

export interface CalendarProps {
  events?:        CalendarEvent[]
  view?:          CalendarView
  initialDate?:   Date
  onEventClick?:  (event: CalendarEvent) => void
  onSlotClick?:   (date: Date) => void
  onEventDrop?:   (event: CalendarEvent, newStart: Date) => void
  className?:     string
}

const CATEGORY_COLORS: Record<EventCategory, { bg: string; border: string; text: string }> = {
  consulta: { bg: 'bg-signal/15', border: 'border-signal/40', text: 'text-signal-light' },
  retorno:  { bg: 'bg-success/15', border: 'border-success/40', text: 'text-success' },
  urgencia: { bg: 'bg-error/15', border: 'border-error/40', text: 'text-error' },
  bloqueio: { bg: 'bg-ash/15', border: 'border-ash/40', text: 'text-mist' },
  default:  { bg: 'bg-signal/10', border: 'border-signal/30', text: 'text-signal-light' },
}

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
const MONTHS = [
  'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
]

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function getDaysInMonth(year: number, month: number): Date[] {
  const days: Date[] = []
  const firstDay = new Date(year, month, 1)
  const startOffset = firstDay.getDay()

  for (let i = startOffset - 1; i >= 0; i--) {
    days.push(new Date(year, month, -i))
  }

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(year, month, d))
  }

  const remaining = 42 - days.length
  for (let d = 1; d <= remaining; d++) {
    days.push(new Date(year, month + 1, d))
  }

  return days
}

function getWeekDays(date: Date): Date[] {
  const day = date.getDay()
  const start = new Date(date)
  start.setDate(date.getDate() - day)
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    return d
  })
}

const HOURS = Array.from({ length: 14 }, (_, i) => i + 7) // 7am to 8pm

function MiniMonthPicker({
  current,
  onChange,
}: {
  current: Date
  onChange: (d: Date) => void
}) {
  const [year, setYear] = React.useState(current.getFullYear())

  return (
    <div className="rounded-lg border border-steel bg-ink p-3">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={() => setYear((y) => y - 1)}
          className="p-1 rounded hover:bg-steel text-mist transition-colors"
          aria-label="Ano anterior"
        >
          <ChevronLeft size={14} />
        </button>
        <span className="font-display text-sm font-semibold text-white">{year}</span>
        <button
          onClick={() => setYear((y) => y + 1)}
          className="p-1 rounded hover:bg-steel text-mist transition-colors"
          aria-label="Proximo ano"
        >
          <ChevronRight size={14} />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {MONTHS.map((m, i) => (
          <button
            key={m}
            onClick={() => onChange(new Date(year, i, 1))}
            className={cn(
              'rounded px-2 py-1 text-xs font-medium transition-colors',
              current.getMonth() === i && current.getFullYear() === year
                ? 'bg-signal text-white'
                : 'text-mist hover:bg-steel hover:text-white'
            )}
          >
            {m.slice(0, 3)}
          </button>
        ))}
      </div>
    </div>
  )
}

function MonthView({
  date,
  events,
  today,
  onSlotClick,
  onEventClick,
}: {
  date: Date
  events: CalendarEvent[]
  today: Date
  onSlotClick?: (d: Date) => void
  onEventClick?: (e: CalendarEvent) => void
}) {
  const days = getDaysInMonth(date.getFullYear(), date.getMonth())

  return (
    <div className="grid grid-cols-7">
      {WEEKDAYS.map((wd) => (
        <div
          key={wd}
          className="border-b border-steel px-2 py-2 text-center font-display text-xs font-medium uppercase tracking-wide text-mist"
        >
          {wd}
        </div>
      ))}
      {days.map((day, i) => {
        const isCurrentMonth = day.getMonth() === date.getMonth()
        const isToday = isSameDay(day, today)
        const dayEvents = events.filter((e) => isSameDay(e.start, day))

        return (
          <div
            key={i}
            onClick={() => onSlotClick?.(day)}
            className={cn(
              'group relative min-h-[80px] border-b border-r border-steel p-1.5 transition-colors cursor-pointer',
              'hover:bg-ink/50',
              !isCurrentMonth && 'opacity-40'
            )}
          >
            <span
              className={cn(
                'inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium',
                isToday
                  ? 'bg-signal text-white font-bold'
                  : 'text-mist group-hover:text-white'
              )}
            >
              {day.getDate()}
            </span>
            <div className="mt-1 flex flex-col gap-0.5">
              {dayEvents.slice(0, 3).map((evt) => {
                const cat = evt.category || 'default'
                const colors = CATEGORY_COLORS[cat]
                return (
                  <button
                    key={evt.id}
                    onClick={(e) => {
                      e.stopPropagation()
                      onEventClick?.(evt)
                    }}
                    className={cn(
                      'w-full truncate rounded border-l-2 px-1.5 py-0.5 text-left text-[10px] font-medium transition-opacity hover:opacity-80',
                      colors.bg,
                      colors.border,
                      colors.text
                    )}
                  >
                    {evt.title}
                  </button>
                )
              })}
              {dayEvents.length > 3 && (
                <span className="text-[10px] text-mist px-1">
                  +{dayEvents.length - 3} mais
                </span>
              )}
            </div>
            <div className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Plus size={12} className="text-mist" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function WeekView({
  date,
  events,
  today,
  onSlotClick,
  onEventClick,
}: {
  date: Date
  events: CalendarEvent[]
  today: Date
  onSlotClick?: (d: Date) => void
  onEventClick?: (e: CalendarEvent) => void
}) {
  const weekDays = getWeekDays(date)

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="grid grid-cols-[60px_repeat(7,1fr)] border-b border-steel">
        <div />
        {weekDays.map((day, i) => (
          <div
            key={i}
            className={cn(
              'border-l border-steel px-2 py-2 text-center',
              isSameDay(day, today) && 'bg-signal/5'
            )}
          >
            <span className="block font-display text-xs text-mist">{WEEKDAYS[day.getDay()]}</span>
            <span
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold',
                isSameDay(day, today) ? 'bg-signal text-white' : 'text-white'
              )}
            >
              {day.getDate()}
            </span>
          </div>
        ))}
      </div>

      {/* Time grid */}
      <div className="grid grid-cols-[60px_repeat(7,1fr)] overflow-y-auto max-h-[600px]">
        {HOURS.map((hour) => (
          <React.Fragment key={hour}>
            <div className="border-b border-steel py-3 pr-2 text-right">
              <span className="font-mono text-xs text-mist">{`${hour}:00`}</span>
            </div>
            {weekDays.map((day, di) => {
              const hourEvents = events.filter((e) => {
                return isSameDay(e.start, day) && e.start.getHours() === hour
              })

              return (
                <div
                  key={di}
                  onClick={() => {
                    const slot = new Date(day)
                    slot.setHours(hour)
                    onSlotClick?.(slot)
                  }}
                  className={cn(
                    'relative border-b border-l border-steel min-h-[48px] p-0.5 cursor-pointer hover:bg-ink/50 transition-colors',
                    isSameDay(day, today) && 'bg-signal/3'
                  )}
                >
                  {hourEvents.map((evt) => {
                    const cat = evt.category || 'default'
                    const colors = CATEGORY_COLORS[cat]
                    return (
                      <button
                        key={evt.id}
                        onClick={(e) => {
                          e.stopPropagation()
                          onEventClick?.(evt)
                        }}
                        className={cn(
                          'w-full truncate rounded border-l-2 px-1.5 py-1 text-left text-[11px] font-medium',
                          colors.bg,
                          colors.border,
                          colors.text
                        )}
                      >
                        {evt.title}
                      </button>
                    )
                  })}
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

function DayView({
  date,
  events,
  onSlotClick,
  onEventClick,
}: {
  date: Date
  events: CalendarEvent[]
  onSlotClick?: (d: Date) => void
  onEventClick?: (e: CalendarEvent) => void
}) {
  return (
    <div className="flex flex-col overflow-y-auto max-h-[600px]">
      {HOURS.map((hour) => {
        const hourEvents = events.filter(
          (e) => isSameDay(e.start, date) && e.start.getHours() === hour
        )

        return (
          <div
            key={hour}
            onClick={() => {
              const slot = new Date(date)
              slot.setHours(hour)
              onSlotClick?.(slot)
            }}
            className="flex min-h-[56px] cursor-pointer border-b border-steel hover:bg-ink/50 transition-colors"
          >
            <div className="w-16 shrink-0 py-3 pr-2 text-right">
              <span className="font-mono text-xs text-mist">{`${hour}:00`}</span>
            </div>
            <div className="flex-1 border-l border-steel p-1 flex flex-col gap-1">
              {hourEvents.map((evt) => {
                const cat = evt.category || 'default'
                const colors = CATEGORY_COLORS[cat]
                return (
                  <button
                    key={evt.id}
                    onClick={(e) => {
                      e.stopPropagation()
                      onEventClick?.(evt)
                    }}
                    className={cn(
                      'w-full rounded border-l-2 px-3 py-2 text-left text-sm font-medium',
                      colors.bg,
                      colors.border,
                      colors.text
                    )}
                  >
                    <span className="block">{evt.title}</span>
                    <span className="block text-xs opacity-70">
                      {evt.start.getHours()}:00 - {evt.end.getHours()}:00
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Calendar({
  events = [],
  view: initialView = 'month',
  initialDate,
  onEventClick,
  onSlotClick,
  onEventDrop,
  className,
}: CalendarProps) {
  const today = new Date()
  const [currentDate, setCurrentDate] = React.useState(initialDate || today)
  const [view, setView] = React.useState<CalendarView>(initialView)
  const [showMiniPicker, setShowMiniPicker] = React.useState(false)

  function navigate(dir: -1 | 1) {
    const d = new Date(currentDate)
    if (view === 'month') d.setMonth(d.getMonth() + dir)
    else if (view === 'week') d.setDate(d.getDate() + dir * 7)
    else d.setDate(d.getDate() + dir)
    setCurrentDate(d)
  }

  function goToday() {
    setCurrentDate(new Date())
  }

  const title =
    view === 'day'
      ? `${currentDate.getDate()} de ${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`
      : `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
      className={cn('flex flex-col rounded-xl border border-steel bg-dusk overflow-hidden', className)}
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-steel px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg p-1.5 hover:bg-steel text-mist hover:text-white transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="rounded-lg p-1.5 hover:bg-steel text-mist hover:text-white transition-colors"
            aria-label="Proximo"
          >
            <ChevronRight size={18} />
          </button>
          <div className="relative">
            <button
              onClick={() => setShowMiniPicker((v) => !v)}
              className="font-display text-lg font-semibold text-white hover:text-signal transition-colors"
            >
              {title}
            </button>
            <AnimatePresence>
              {showMiniPicker && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute top-full left-0 z-20 mt-2"
                >
                  <MiniMonthPicker
                    current={currentDate}
                    onChange={(d) => {
                      setCurrentDate(d)
                      setShowMiniPicker(false)
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={goToday}
            className="rounded-lg border border-steel px-3 py-1.5 text-xs font-medium text-mist hover:bg-steel hover:text-white transition-colors"
          >
            Hoje
          </button>
          <div className="flex rounded-lg border border-steel overflow-hidden">
            {(['month', 'week', 'day'] as CalendarView[]).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={cn(
                  'px-3 py-1.5 text-xs font-medium capitalize transition-colors',
                  view === v
                    ? 'bg-signal text-white'
                    : 'text-mist hover:bg-steel hover:text-white'
                )}
              >
                {v === 'month' ? 'Mes' : v === 'week' ? 'Semana' : 'Dia'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        {view === 'month' && (
          <MonthView
            date={currentDate}
            events={events}
            today={today}
            onSlotClick={onSlotClick}
            onEventClick={onEventClick}
          />
        )}
        {view === 'week' && (
          <WeekView
            date={currentDate}
            events={events}
            today={today}
            onSlotClick={onSlotClick}
            onEventClick={onEventClick}
          />
        )}
        {view === 'day' && (
          <DayView
            date={currentDate}
            events={events}
            onSlotClick={onSlotClick}
            onEventClick={onEventClick}
          />
        )}
      </div>
    </motion.div>
  )
}

export { Calendar }
