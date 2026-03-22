'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../../utils'
import { Tooltip } from '../../atoms/Tooltip/Tooltip'
import { Badge } from '../../atoms/Badge/Badge'

// ── Types ─────────────────────────────────────────────────────────────────────
export interface NavItem {
  id:       string
  label:    string
  icon:     React.ReactNode
  href?:    string
  badge?:   string | number
  badgeVariant?: 'primary' | 'error' | 'warning' | 'success'
  children?: NavItem[]
  onClick?: () => void
}

export interface SidebarProps {
  items:           NavItem[]
  activeId?:       string
  onNavigate?:     (item: NavItem) => void
  logo?:           React.ReactNode
  logoCollapsed?:  React.ReactNode
  footer?:         React.ReactNode
  defaultCollapsed?: boolean
  className?:      string
}

// ── Context ───────────────────────────────────────────────────────────────────
const SidebarContext = React.createContext<{
  collapsed: boolean
  activeId?: string
  onNavigate?: (item: NavItem) => void
}>({ collapsed: false })

// ── NavItem Component ─────────────────────────────────────────────────────────
function SidebarNavItem({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const { collapsed, activeId, onNavigate } = React.useContext(SidebarContext)
  const [expanded, setExpanded] = React.useState(false)
  const isActive  = activeId === item.id
  const hasChildren = !!item.children?.length

  const handleClick = () => {
    if (hasChildren) { setExpanded(p => !p); return }
    item.onClick?.()
    onNavigate?.(item)
  }

  const content = (
    <button
      type="button"
      onClick={handleClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group w-full flex items-center gap-3 rounded-lg px-3 py-2.5',
        'text-sm font-medium font-body',
        'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70',
        depth > 0 && 'ml-4 pl-3 border-l border-steel',
        isActive
          ? 'bg-signal/10 text-white border-signal/0'
          : 'text-mist hover:bg-dusk hover:text-white',
        collapsed && 'justify-center px-2'
      )}
    >
      {/* Active indicator */}
      {isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-signal rounded-r-full" />
      )}

      {/* Icon */}
      <span className={cn(
        'shrink-0 transition-colors',
        isActive ? 'text-signal' : 'text-mist/50 group-hover:text-mist'
      )}>
        {item.icon}
      </span>

      {/* Label */}
      <AnimatePresence>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.15 }}
            className="flex-1 text-left truncate"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Badge */}
      {!collapsed && item.badge && (
        <Badge variant={item.badgeVariant ?? 'primary'} size="sm">
          {item.badge}
        </Badge>
      )}

      {/* Chevron for children */}
      {!collapsed && hasChildren && (
        <ChevronRight
          size={14}
          className={cn('shrink-0 text-ash transition-transform', expanded && 'rotate-90')}
        />
      )}
    </button>
  )

  return (
    <li className="relative">
      {collapsed ? (
        <Tooltip content={item.label} side="right">
          {content}
        </Tooltip>
      ) : content}

      {/* Children */}
      <AnimatePresence>
        {hasChildren && expanded && !collapsed && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-1 flex flex-col gap-1"
          >
            {item.children!.map(child => (
              <SidebarNavItem key={child.id} item={child} depth={depth + 1} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
function Sidebar({
  items,
  activeId,
  onNavigate,
  logo,
  logoCollapsed,
  footer,
  defaultCollapsed = false,
  className,
}: SidebarProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed)

  return (
    <SidebarContext.Provider value={{ collapsed, activeId, onNavigate }}>
      <motion.aside
        animate={{ width: collapsed ? 72 : 240 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          'relative flex flex-col h-full shrink-0',
          'bg-ink border-r border-steel',
          'overflow-hidden',
          className
        )}
      >
        {/* Logo */}
        <div className={cn(
          'flex items-center h-16 shrink-0 border-b border-steel px-4',
          collapsed ? 'justify-center' : 'justify-between'
        )}>
          <AnimatePresence mode="wait">
            {collapsed ? (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                {logoCollapsed ?? logo}
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex-1 min-w-0"
              >
                {logo}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-3">
          <ul className="flex flex-col gap-1">
            {items.map(item => (
              <SidebarNavItem key={item.id} item={item} />
            ))}
          </ul>
        </nav>

        {/* Footer */}
        {footer && (
          <div className="shrink-0 border-t border-steel px-3 py-4">
            {footer}
          </div>
        )}

        {/* Collapse toggle */}
        <button
          type="button"
          onClick={() => setCollapsed(p => !p)}
          aria-label={collapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
          className={cn(
            'absolute top-4 -right-3 z-10',
            'flex h-6 w-6 items-center justify-center',
            'rounded-full bg-dusk border border-steel text-mist',
            'hover:text-white hover:border-mist/40 hover:shadow-md',
            'transition-all duration-[200ms]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/70'
          )}
        >
          {collapsed
            ? <ChevronRight size={12} />
            : <ChevronLeft  size={12} />
          }
        </button>
      </motion.aside>
    </SidebarContext.Provider>
  )
}

export { Sidebar }
