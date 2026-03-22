'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Command as CommandPrimitive } from 'cmdk'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, CornerDownLeft, ArrowUp, ArrowDown } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

// ── Types ─────────────────────────────────────────────────────────────────────
export interface CommandItem {
  id:        string
  label:     string
  icon?:     React.ReactNode
  shortcut?: string[]
  group:     string
  onSelect:  () => void
  keywords?: string[]
}

export interface CommandPaletteProps {
  items:         CommandItem[]
  recentIds?:    string[]
  open?:         boolean
  onOpenChange?: (open: boolean) => void
  placeholder?:  string
  className?:    string
}

// ── Motion ────────────────────────────────────────────────────────────────────
const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
}

const contentVariants = {
  hidden:  { opacity: 0, scale: 0.96, y: -8 },
  visible: { opacity: 1, scale: 1,    y: 0 },
  exit:    { opacity: 0, scale: 0.96, y: -8 },
}

// ── Component ─────────────────────────────────────────────────────────────────
function CommandPalette({
  items,
  recentIds = [],
  open: controlledOpen,
  onOpenChange,
  placeholder = 'Buscar comandos, pacientes, acoes...',
  className,
}: CommandPaletteProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  const setOpen = React.useCallback(
    (value: boolean) => {
      if (!isControlled) setInternalOpen(value)
      onOpenChange?.(value)
    },
    [isControlled, onOpenChange]
  )

  // Keyboard shortcut: Cmd+K / Ctrl+K
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(!open)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, setOpen])

  // Group items
  const grouped = React.useMemo(() => {
    const groups = new Map<string, CommandItem[]>()

    // Recent items first
    if (recentIds.length > 0) {
      const recentItems = recentIds
        .map((id) => items.find((i) => i.id === id))
        .filter(Boolean) as CommandItem[]
      if (recentItems.length > 0) {
        groups.set('Recentes', recentItems)
      }
    }

    // Then by group
    for (const item of items) {
      const existing = groups.get(item.group) ?? []
      existing.push(item)
      groups.set(item.group, existing)
    }

    return groups
  }, [items, recentIds])

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <AnimatePresence>
          {open && (
            <>
              <DialogPrimitive.Overlay asChild>
                <motion.div
                  className="fixed inset-0 z-50 bg-void/80 backdrop-blur-sm"
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.15 }}
                />
              </DialogPrimitive.Overlay>

              <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
                <DialogPrimitive.Content asChild>
                  <motion.div
                    className={cn(
                      'w-full max-w-lg mx-4',
                      'bg-ink border border-steel rounded-2xl shadow-lg overflow-hidden',
                      className
                    )}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.15, ease: [0.175, 0.885, 0.32, 1.1] }}
                  >
                    <DialogPrimitive.Title className="sr-only">
                      Paleta de comandos
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description className="sr-only">
                      Busque e execute comandos rapidamente.
                    </DialogPrimitive.Description>

                    <CommandPrimitive
                      className="flex flex-col"
                      label="Paleta de comandos"
                    >
                      {/* Search input */}
                      <div className="flex items-center gap-3 px-4 border-b border-steel">
                        <Search size={16} className="text-mist shrink-0" aria-hidden />
                        <CommandPrimitive.Input
                          placeholder={placeholder}
                          className={cn(
                            'flex-1 h-12 bg-transparent text-sm text-white placeholder:text-ash',
                            'outline-none border-none',
                            'font-body'
                          )}
                        />
                        <kbd className="hidden sm:flex items-center gap-0.5 text-[10px] text-ash font-mono bg-dusk px-1.5 py-0.5 rounded border border-steel">
                          ESC
                        </kbd>
                      </div>

                      {/* Results */}
                      <CommandPrimitive.List className="max-h-72 overflow-y-auto p-2">
                        <CommandPrimitive.Empty className="py-8 text-center text-sm text-mist">
                          Nenhum resultado encontrado.
                        </CommandPrimitive.Empty>

                        {Array.from(grouped.entries()).map(([group, groupItems]) => (
                          <CommandPrimitive.Group
                            key={group}
                            heading={group}
                            className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-ash [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider"
                          >
                            {groupItems.map((item) => (
                              <CommandPrimitive.Item
                                key={item.id}
                                value={`${item.label} ${item.keywords?.join(' ') ?? ''}`}
                                onSelect={() => {
                                  item.onSelect()
                                  setOpen(false)
                                }}
                                className={cn(
                                  'flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer',
                                  'text-sm text-mist font-body',
                                  'transition-colors duration-100',
                                  'data-[selected=true]:bg-signal/10 data-[selected=true]:text-white',
                                  'hover:bg-dusk'
                                )}
                              >
                                {item.icon && (
                                  <span className="shrink-0 text-mist/60" aria-hidden>
                                    {item.icon}
                                  </span>
                                )}
                                <span className="flex-1 truncate">{item.label}</span>
                                {item.shortcut && (
                                  <span className="flex items-center gap-0.5 shrink-0">
                                    {item.shortcut.map((key, i) => (
                                      <kbd
                                        key={i}
                                        className="inline-flex h-5 min-w-5 items-center justify-center rounded bg-dusk px-1 text-[10px] font-mono text-ash border border-steel"
                                      >
                                        {key}
                                      </kbd>
                                    ))}
                                  </span>
                                )}
                              </CommandPrimitive.Item>
                            ))}
                          </CommandPrimitive.Group>
                        ))}
                      </CommandPrimitive.List>

                      {/* Footer */}
                      <div className="flex items-center gap-4 px-4 py-2.5 border-t border-steel text-[11px] text-ash">
                        <span className="inline-flex items-center gap-1">
                          <ArrowUp size={10} />
                          <ArrowDown size={10} />
                          navegar
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <CornerDownLeft size={10} />
                          selecionar
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <kbd className="font-mono">ESC</kbd>
                          fechar
                        </span>
                      </div>
                    </CommandPrimitive>
                  </motion.div>
                </DialogPrimitive.Content>
              </div>
            </>
          )}
        </AnimatePresence>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export { CommandPalette }
