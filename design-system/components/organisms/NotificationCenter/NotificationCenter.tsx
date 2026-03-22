'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, Check, CheckCheck, Inbox, Settings } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

// ── Types ─────────────────────────────────────────────────────────────────────
export type NotificationCategory = 'sistema' | 'leads' | 'agenda'

export interface NotificationItem {
  id:        string
  title:     string
  message?:  string
  icon?:     React.ReactNode
  category:  NotificationCategory
  time:      string
  read:      boolean
  onClick?:  () => void
}

export interface NotificationCenterProps {
  notifications:   NotificationItem[]
  onMarkAsRead?:   (id: string) => void
  onMarkAllRead?:  () => void
  onClearAll?:     () => void
  className?:      string
}

// ── Variants ──────────────────────────────────────────────────────────────────
const notificationItemVariants = cva(
  [
    'flex gap-3 px-4 py-3 cursor-pointer',
    'transition-colors duration-150',
    'hover:bg-dusk',
    'border-b border-steel last:border-b-0',
  ],
  {
    variants: {
      read: {
        true:  'opacity-60',
        false: 'bg-signal/5',
      },
    },
    defaultVariants: { read: true },
  }
)

const categoryColors: Record<NotificationCategory, string> = {
  sistema: 'bg-signal',
  leads:   'bg-success',
  agenda:  'bg-warning',
}

// ── Tab Button ────────────────────────────────────────────────────────────────
function CategoryTab({
  label,
  active,
  count,
  onClick,
}: {
  label: string
  active: boolean
  count: number
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative px-3 py-2 text-xs font-medium rounded-md transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60',
        active
          ? 'bg-ink text-white shadow-sm'
          : 'text-mist hover:text-white'
      )}
    >
      {label}
      {count > 0 && (
        <span className="ml-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-signal/20 px-1 text-[10px] text-signal font-medium">
          {count}
        </span>
      )}
    </button>
  )
}

// ── Notification Item ─────────────────────────────────────────────────────────
function NotificationRow({
  notification,
  onMarkAsRead,
}: {
  notification: NotificationItem
  onMarkAsRead?: (id: string) => void
}) {
  return (
    <div
      className={cn(notificationItemVariants({ read: notification.read }))}
      onClick={() => {
        notification.onClick?.()
        if (!notification.read) onMarkAsRead?.(notification.id)
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          notification.onClick?.()
          if (!notification.read) onMarkAsRead?.(notification.id)
        }
      }}
    >
      {/* Unread dot + icon */}
      <div className="relative shrink-0 mt-0.5">
        {notification.icon ? (
          <span className="text-mist">{notification.icon}</span>
        ) : (
          <span className={cn('block h-2 w-2 rounded-full mt-1.5', categoryColors[notification.category])} />
        )}
        {!notification.read && !notification.icon && (
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-signal ring-2 ring-ink" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white leading-tight truncate">
          {notification.title}
        </p>
        {notification.message && (
          <p className="text-xs text-mist mt-0.5 line-clamp-2 leading-snug">
            {notification.message}
          </p>
        )}
        <p className="text-[11px] text-ash mt-1">{notification.time}</p>
      </div>

      {/* Mark as read */}
      {!notification.read && onMarkAsRead && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onMarkAsRead(notification.id)
          }}
          className="shrink-0 text-mist hover:text-signal transition-colors self-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal rounded p-0.5"
          aria-label="Marcar como lida"
        >
          <Check size={14} />
        </button>
      )}
    </div>
  )
}

// ── Empty State ───────────────────────────────────────────────────────────────
function EmptyNotifications() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="h-12 w-12 rounded-full bg-dusk flex items-center justify-center mb-3">
        <Inbox size={20} className="text-mist" />
      </div>
      <p className="text-sm font-medium text-mist">Nenhuma notificacao</p>
      <p className="text-xs text-ash mt-1">Voce esta em dia!</p>
    </div>
  )
}

// ── NotificationCenter ────────────────────────────────────────────────────────
function NotificationCenter({
  notifications,
  onMarkAsRead,
  onMarkAllRead,
  onClearAll,
  className,
}: NotificationCenterProps) {
  const [activeCategory, setActiveCategory] = React.useState<'todas' | NotificationCategory>('todas')

  const unreadCount = notifications.filter((n) => !n.read).length

  const filteredNotifications =
    activeCategory === 'todas'
      ? notifications
      : notifications.filter((n) => n.category === activeCategory)

  const categoryCount = (cat: NotificationCategory) =>
    notifications.filter((n) => n.category === cat && !n.read).length

  return (
    <PopoverPrimitive.Root>
      {/* Trigger */}
      <PopoverPrimitive.Trigger asChild>
        <button
          type="button"
          className={cn(
            'relative flex h-10 w-10 items-center justify-center rounded-lg',
            'text-mist hover:text-white hover:bg-dusk transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60',
            className
          )}
          aria-label={`Notificacoes${unreadCount > 0 ? `, ${unreadCount} nao lidas` : ''}`}
        >
          <Bell size={18} />
          {unreadCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-0.5 -right-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-signal px-1 text-[10px] font-bold text-white ring-2 ring-ink"
            >
              {unreadCount > 99 ? '99+' : unreadCount}
            </motion.span>
          )}
        </button>
      </PopoverPrimitive.Trigger>

      {/* Content */}
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="end"
          sideOffset={8}
          className={cn(
            'z-50 w-80 sm:w-96 bg-ink border border-steel rounded-2xl shadow-lg overflow-hidden',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2',
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-steel">
            <h3 className="font-display font-semibold text-sm text-white">
              Notificacoes
            </h3>
            <div className="flex items-center gap-2">
              {onMarkAllRead && unreadCount > 0 && (
                <button
                  type="button"
                  onClick={onMarkAllRead}
                  className="text-xs text-mist hover:text-signal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal rounded px-1"
                  aria-label="Marcar todas como lidas"
                >
                  <CheckCheck size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex gap-1 px-3 py-2 bg-dusk/50 border-b border-steel">
            <CategoryTab
              label="Todas"
              active={activeCategory === 'todas'}
              count={unreadCount}
              onClick={() => setActiveCategory('todas')}
            />
            <CategoryTab
              label="Sistema"
              active={activeCategory === 'sistema'}
              count={categoryCount('sistema')}
              onClick={() => setActiveCategory('sistema')}
            />
            <CategoryTab
              label="Leads"
              active={activeCategory === 'leads'}
              count={categoryCount('leads')}
              onClick={() => setActiveCategory('leads')}
            />
            <CategoryTab
              label="Agenda"
              active={activeCategory === 'agenda'}
              count={categoryCount('agenda')}
              onClick={() => setActiveCategory('agenda')}
            />
          </div>

          {/* List */}
          <div className="max-h-80 overflow-y-auto">
            {filteredNotifications.length === 0 ? (
              <EmptyNotifications />
            ) : (
              <AnimatePresence initial={false}>
                {filteredNotifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <NotificationRow
                      notification={notification}
                      onMarkAsRead={onMarkAsRead}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

export { NotificationCenter }
