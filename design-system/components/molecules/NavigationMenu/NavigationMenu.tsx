'use client'

import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

// ── Types ─────────────────────────────────────────────────────────────────────
export interface NavMenuLink {
  label:       string
  href:        string
  description?: string
  icon?:       React.ReactNode
}

export interface NavMenuGroup {
  label:    string
  children: NavMenuLink[]
}

export type NavMenuItem = NavMenuLink | NavMenuGroup

export interface NavigationMenuProps {
  items:     NavMenuItem[]
  logo?:     React.ReactNode
  actions?:  React.ReactNode
  className?: string
}

function isGroup(item: NavMenuItem): item is NavMenuGroup {
  return 'children' in item
}

// ── Navigation Menu ───────────────────────────────────────────────────────────
function NavigationMenu({ items, logo, actions, className }: NavigationMenuProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <div className={cn('relative', className)}>
      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-2 h-16 px-4">
        {/* Logo */}
        {logo && <div className="mr-6 shrink-0">{logo}</div>}

        <NavigationMenuPrimitive.Root className="relative flex-1">
          <NavigationMenuPrimitive.List className="flex items-center gap-1">
            {items.map((item, i) =>
              isGroup(item) ? (
                <NavigationMenuPrimitive.Item key={i}>
                  <NavigationMenuPrimitive.Trigger
                    className={cn(
                      'group inline-flex items-center gap-1.5 px-3 py-2 rounded-md',
                      'text-sm font-medium text-mist',
                      'transition-colors duration-150',
                      'hover:text-white hover:bg-dusk',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60',
                      'data-[state=open]:text-white data-[state=open]:bg-dusk',
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      size={12}
                      className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden
                    />
                  </NavigationMenuPrimitive.Trigger>

                  <NavigationMenuPrimitive.Content
                    className={cn(
                      'absolute top-full left-0 mt-2 w-auto min-w-[28rem]',
                      'bg-ink border border-steel rounded-xl shadow-lg p-3',
                      'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2',
                      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2',
                    )}
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {item.children.map((link, j) => (
                        <NavigationMenuPrimitive.Link
                          key={j}
                          href={link.href}
                          className={cn(
                            'flex items-start gap-3 px-3 py-3 rounded-lg',
                            'transition-colors duration-100',
                            'hover:bg-dusk group/link',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60',
                          )}
                        >
                          {link.icon && (
                            <span className="shrink-0 mt-0.5 text-mist/60 group-hover/link:text-signal transition-colors">
                              {link.icon}
                            </span>
                          )}
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-white leading-tight">
                              {link.label}
                            </p>
                            {link.description && (
                              <p className="text-xs text-ash mt-0.5 leading-snug line-clamp-2">
                                {link.description}
                              </p>
                            )}
                          </div>
                        </NavigationMenuPrimitive.Link>
                      ))}
                    </div>
                  </NavigationMenuPrimitive.Content>
                </NavigationMenuPrimitive.Item>
              ) : (
                <NavigationMenuPrimitive.Item key={i}>
                  <NavigationMenuPrimitive.Link
                    href={item.href}
                    className={cn(
                      'inline-flex items-center px-3 py-2 rounded-md',
                      'text-sm font-medium text-mist',
                      'transition-colors duration-150',
                      'hover:text-white hover:bg-dusk',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60',
                    )}
                  >
                    {item.icon && (
                      <span className="mr-2 text-mist/60" aria-hidden>
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </NavigationMenuPrimitive.Link>
                </NavigationMenuPrimitive.Item>
              )
            )}

            {/* Animated indicator */}
            <NavigationMenuPrimitive.Indicator
              className="data-[state=visible]:animate-in data-[state=visible]:fade-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out top-full flex h-1.5 items-end justify-center overflow-hidden z-10"
            >
              <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-steel shadow-md" />
            </NavigationMenuPrimitive.Indicator>
          </NavigationMenuPrimitive.List>

          <div className="perspective-[2000px] absolute top-full left-0 w-full">
            <NavigationMenuPrimitive.Viewport
              className="relative mt-1.5 w-full origin-top-center overflow-hidden rounded-xl"
            />
          </div>
        </NavigationMenuPrimitive.Root>

        {/* Actions */}
        {actions && <div className="ml-auto flex items-center gap-2 shrink-0">{actions}</div>}
      </div>

      {/* Mobile navigation */}
      <div className="flex md:hidden items-center justify-between h-14 px-4">
        {logo && <div className="shrink-0">{logo}</div>}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg',
            'text-mist hover:text-white hover:bg-dusk transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60'
          )}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-steel bg-ink"
          >
            <nav className="px-4 py-3 flex flex-col gap-1">
              {items.map((item, i) =>
                isGroup(item) ? (
                  <MobileGroup key={i} group={item} />
                ) : (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-mist hover:text-white hover:bg-dusk transition-colors"
                  >
                    {item.icon && <span className="text-mist/60">{item.icon}</span>}
                    {item.label}
                  </a>
                )
              )}
              {actions && <div className="mt-3 pt-3 border-t border-steel">{actions}</div>}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Mobile Group ──────────────────────────────────────────────────────────────
function MobileGroup({ group }: { group: NavMenuGroup }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          'w-full flex items-center justify-between px-3 py-2.5 rounded-lg',
          'text-sm font-medium text-mist hover:text-white hover:bg-dusk transition-colors',
        )}
      >
        {group.label}
        <ChevronDown
          size={14}
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden pl-3"
          >
            {group.children.map((link, j) => (
              <a
                key={j}
                href={link.href}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-mist hover:text-white hover:bg-dusk transition-colors"
              >
                {link.icon && <span className="text-mist/60">{link.icon}</span>}
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { NavigationMenu }
