'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

// ── Variants ──────────────────────────────────────────────────────────────────
const accordionItemVariants = cva(
  ['border-b border-steel last:border-b-0'],
  {
    variants: {
      variant: {
        default: '',
        card: 'bg-ink rounded-xl border border-steel mb-2 last:mb-0',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

// ── Types ─────────────────────────────────────────────────────────────────────
export type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  variant?: 'default' | 'card'
  className?: string
}

export type AccordionItemProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> &
  VariantProps<typeof accordionItemVariants>

export type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>

export type AccordionContentProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>

// ── Context ───────────────────────────────────────────────────────────────────
const AccordionVariantContext = React.createContext<'default' | 'card'>('default')

// ── Root ──────────────────────────────────────────────────────────────────────
function Accordion({ variant = 'default', className, ...props }: AccordionProps) {
  return (
    <AccordionVariantContext.Provider value={variant}>
      <AccordionPrimitive.Root
        className={cn('w-full', className)}
        {...(props as any)}
      />
    </AccordionVariantContext.Provider>
  )
}

// ── Item ──────────────────────────────────────────────────────────────────────
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, variant: variantProp, ...props }, ref) => {
  const contextVariant = React.useContext(AccordionVariantContext)
  const variant = variantProp ?? contextVariant

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(accordionItemVariants({ variant }), className)}
      {...props}
    />
  )
})
AccordionItem.displayName = 'AccordionItem'

// ── Trigger ───────────────────────────────────────────────────────────────────
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between gap-3 py-4 px-4',
        'font-display font-medium text-sm text-white',
        'transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]',
        'hover:text-signal-light',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 focus-visible:rounded-md',
        'disabled:pointer-events-none disabled:opacity-40',
        '[&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        size={16}
        className="shrink-0 text-mist transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
        aria-hidden
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

// ── Content ───────────────────────────────────────────────────────────────────
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-sm text-mist',
      'data-[state=open]:animate-accordion-down',
      'data-[state=closed]:animate-accordion-up',
    )}
    {...props}
  >
    <div className={cn('px-4 pb-4 pt-0 leading-relaxed', className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
