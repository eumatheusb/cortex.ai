'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils'

export type TimelineItemType = 'default' | 'success' | 'warning' | 'error' | 'signal'

export interface TimelineItem {
  id:           string
  title:        string
  description?: string
  date:         string
  icon?:        React.ReactNode
  type?:        TimelineItemType
}

export interface TimelineProps {
  items:        TimelineItem[]
  alternating?: boolean
  loading?:     boolean
  className?:   string
}

const TYPE_STYLES: Record<TimelineItemType, { dot: string; line: string; icon: string }> = {
  default: { dot: 'bg-steel border-mist',           line: 'bg-steel',   icon: 'text-mist' },
  signal:  { dot: 'bg-signal/20 border-signal',     line: 'bg-signal/30', icon: 'text-signal' },
  success: { dot: 'bg-success/20 border-success',   line: 'bg-success/30', icon: 'text-success' },
  warning: { dot: 'bg-warning/20 border-warning',   line: 'bg-warning/30', icon: 'text-warning' },
  error:   { dot: 'bg-error/20 border-error',       line: 'bg-error/30', icon: 'text-error' },
}

function TimelineItemCard({
  item,
  index,
  side,
}: {
  item: TimelineItem
  index: number
  side: 'left' | 'right' | 'default'
}) {
  const type = item.type || 'default'
  const styles = TYPE_STYLES[type]

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -20 : side === 'right' ? 20 : 0, y: side === 'default' ? 12 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0, 0, 0.2, 1] }}
      className={cn(
        'relative flex gap-4',
        side === 'left' && 'flex-row-reverse text-right',
        side === 'right' && 'flex-row text-left',
        side === 'default' && 'flex-row'
      )}
    >
      {/* Dot */}
      <div className="relative flex flex-col items-center">
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full border-2 shrink-0',
            styles.dot
          )}
        >
          {item.icon ? (
            <span className={styles.icon}>{item.icon}</span>
          ) : (
            <div className={cn('h-2.5 w-2.5 rounded-full', styles.dot.replace('border-', 'bg-').split(' ')[0])} />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <span className="block font-mono text-xs text-mist mb-1">{item.date}</span>
        <h4 className="font-display text-sm font-semibold text-white">{item.title}</h4>
        {item.description && (
          <p className="mt-1 text-sm text-mist leading-relaxed">{item.description}</p>
        )}
      </div>
    </motion.div>
  )
}

function Timeline({ items, alternating = false, loading = false, className }: TimelineProps) {
  if (loading) {
    return (
      <div className={cn('flex flex-col gap-6', className)}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-10 w-10 rounded-full bg-steel animate-pulse shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-20 rounded bg-steel animate-pulse" />
              <div className="h-4 w-40 rounded bg-steel animate-pulse" />
              <div className="h-3 w-60 rounded bg-steel animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!alternating) {
    return (
      <div className={cn('relative', className)}>
        {/* Connector line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
          className="absolute left-5 top-0 bottom-0 w-px bg-steel origin-top"
          style={{ transform: 'translateX(-50%)' }}
        />

        <div className="flex flex-col">
          {items.map((item, i) => (
            <TimelineItemCard key={item.id} item={item} index={i} side="default" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={cn('relative', className)}>
      {/* Center connector line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
        className="absolute left-1/2 top-0 bottom-0 w-px bg-steel origin-top hidden md:block"
        style={{ transform: 'translateX(-50%)' }}
      />
      {/* Mobile connector */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
        className="absolute left-5 top-0 bottom-0 w-px bg-steel origin-top md:hidden"
        style={{ transform: 'translateX(-50%)' }}
      />

      <div className="flex flex-col">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0

          return (
            <div key={item.id} className="md:grid md:grid-cols-[1fr_40px_1fr]">
              {/* Left content */}
              <div className={cn('hidden md:block', !isLeft && 'invisible')}>
                {isLeft && (
                  <TimelineItemCard item={item} index={i} side="left" />
                )}
              </div>

              {/* Center dot (desktop) */}
              <div className="hidden md:flex md:flex-col md:items-center">
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full border-2 shrink-0',
                    TYPE_STYLES[item.type || 'default'].dot
                  )}
                >
                  {item.icon ? (
                    <span className={TYPE_STYLES[item.type || 'default'].icon}>
                      {item.icon}
                    </span>
                  ) : (
                    <div className="h-2.5 w-2.5 rounded-full bg-mist" />
                  )}
                </div>
              </div>

              {/* Right content */}
              <div className={cn('hidden md:block', isLeft && 'invisible')}>
                {!isLeft && (
                  <TimelineItemCard item={item} index={i} side="right" />
                )}
              </div>

              {/* Mobile fallback */}
              <div className="md:hidden">
                <TimelineItemCard item={item} index={i} side="default" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Timeline }
