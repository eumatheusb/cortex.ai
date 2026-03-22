'use client'
import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { Command } from 'cmdk'
import { Check, ChevronDown, Loader2, Plus, Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../utils'

export interface ComboboxOption {
  value: string
  label: string
  description?: string
  disabled?: boolean
}

export interface ComboboxProps {
  options: ComboboxOption[]
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  onSearch?: (query: string) => void
  onCreateOption?: (label: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  label?: string
  error?: string
  disabled?: boolean
  loading?: boolean
  multiple?: boolean
  creatable?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'px-3.5 py-2.5 text-xs',
  md: 'px-4 py-3 text-sm',
  lg: 'px-5 py-3.5 text-base',
}

export function Combobox({
  options,
  value,
  onChange,
  onSearch,
  onCreateOption,
  placeholder = 'Selecione...',
  searchPlaceholder = 'Buscar...',
  emptyMessage = 'Nenhum resultado encontrado.',
  label,
  error,
  disabled = false,
  loading = false,
  multiple = false,
  creatable = false,
  size = 'md',
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const inputId = React.useId()

  const selectedValues = React.useMemo(() => {
    if (!value) return []
    return Array.isArray(value) ? value : [value]
  }, [value])

  const selectedLabels = React.useMemo(() => {
    return selectedValues
      .map((v) => options.find((o) => o.value === v)?.label ?? v)
  }, [selectedValues, options])

  const displayText = React.useMemo(() => {
    if (selectedLabels.length === 0) return ''
    if (selectedLabels.length === 1) return selectedLabels[0]
    return `${selectedLabels.length} selecionados`
  }, [selectedLabels])

  const handleSelect = React.useCallback(
    (optionValue: string) => {
      if (multiple) {
        const current = selectedValues
        const next = current.includes(optionValue)
          ? current.filter((v) => v !== optionValue)
          : [...current, optionValue]
        onChange?.(next)
      } else {
        onChange?.(optionValue)
        setOpen(false)
      }
    },
    [multiple, selectedValues, onChange],
  )

  const handleRemove = React.useCallback(
    (val: string, e: React.MouseEvent) => {
      e.stopPropagation()
      if (multiple) {
        onChange?.(selectedValues.filter((v) => v !== val))
      } else {
        onChange?.('')
      }
    },
    [multiple, selectedValues, onChange],
  )

  const handleSearchChange = React.useCallback(
    (query: string) => {
      setSearch(query)
      onSearch?.(query)
    },
    [onSearch],
  )

  const filteredHasExact = options.some(
    (o) => o.label.toLowerCase() === search.toLowerCase(),
  )

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
            role="combobox"
            aria-expanded={open}
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
          >
            {multiple && selectedValues.length > 0 ? (
              <div className="flex flex-wrap gap-1 flex-1 min-w-0">
                {selectedValues.slice(0, 3).map((v) => {
                  const opt = options.find((o) => o.value === v)
                  return (
                    <span
                      key={v}
                      className="inline-flex items-center gap-1 bg-signal/10 text-signal text-xs rounded px-1.5 py-0.5"
                    >
                      {opt?.label ?? v}
                      <X
                        className="h-3 w-3 cursor-pointer hover:text-white"
                        onClick={(e) => handleRemove(v, e)}
                      />
                    </span>
                  )
                })}
                {selectedValues.length > 3 && (
                  <span className="text-xs text-mist">+{selectedValues.length - 3}</span>
                )}
              </div>
            ) : (
              <span className={cn('truncate', !displayText && 'text-mist/40')}>
                {displayText || placeholder}
              </span>
            )}

            <ChevronDown
              className={cn(
                'h-4 w-4 text-mist/60 shrink-0 transition-transform duration-200',
                open && 'rotate-180',
              )}
              aria-hidden
            />
          </button>
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align="start"
            sideOffset={8}
            className={cn(
              'z-50 w-[var(--radix-popover-trigger-width)] rounded-lg border border-steel bg-dusk shadow-modal',
              'outline-none',
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
              'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
            )}
          >
            <Command shouldFilter={!onSearch} className="flex flex-col">
              <div className="flex items-center gap-2 border-b border-steel px-3 py-2">
                <Search className="h-4 w-4 text-mist/50 shrink-0" aria-hidden />
                <Command.Input
                  value={search}
                  onValueChange={handleSearchChange}
                  placeholder={searchPlaceholder}
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-mist/40"
                />
                {loading && <Loader2 className="h-4 w-4 text-mist animate-spin" aria-hidden />}
              </div>

              <Command.List className="max-h-60 overflow-y-auto p-1">
                <Command.Empty className="py-6 text-center text-sm text-mist">
                  {emptyMessage}
                </Command.Empty>

                <AnimatePresence>
                  {options.map((option) => {
                    const isSelected = selectedValues.includes(option.value)

                    return (
                      <Command.Item
                        key={option.value}
                        value={option.label}
                        disabled={option.disabled}
                        onSelect={() => handleSelect(option.value)}
                        className={cn(
                          'relative flex items-center gap-2 rounded-md px-3 py-2 text-sm cursor-pointer',
                          'text-mist outline-none',
                          'data-[selected=true]:bg-ink data-[selected=true]:text-white',
                          'data-[disabled=true]:opacity-30 data-[disabled=true]:pointer-events-none',
                          isSelected && 'bg-signal/5',
                        )}
                      >
                        {multiple && (
                          <span
                            className={cn(
                              'flex items-center justify-center w-4 h-4 rounded border shrink-0',
                              isSelected
                                ? 'bg-signal border-signal'
                                : 'border-steel',
                            )}
                          >
                            {isSelected && <Check className="h-3 w-3 text-white" />}
                          </span>
                        )}

                        <div className="flex flex-col flex-1 min-w-0">
                          <span className="truncate">{option.label}</span>
                          {option.description && (
                            <span className="text-xs text-ash truncate">{option.description}</span>
                          )}
                        </div>

                        {!multiple && isSelected && (
                          <Check className="h-3.5 w-3.5 text-signal shrink-0" />
                        )}
                      </Command.Item>
                    )
                  })}
                </AnimatePresence>

                {creatable && search && !filteredHasExact && (
                  <Command.Item
                    value={`__create__${search}`}
                    onSelect={() => {
                      onCreateOption?.(search)
                      setSearch('')
                    }}
                    className={cn(
                      'flex items-center gap-2 rounded-md px-3 py-2 text-sm cursor-pointer',
                      'text-signal outline-none',
                      'data-[selected=true]:bg-signal/10',
                    )}
                  >
                    <Plus className="h-4 w-4" />
                    <span>Criar &ldquo;{search}&rdquo;</span>
                  </Command.Item>
                )}
              </Command.List>
            </Command>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>

      {error && (
        <p className="text-xs text-error">{error}</p>
      )}
    </div>
  )
}
