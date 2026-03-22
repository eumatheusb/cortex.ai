'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

// ── Variants ──────────────────────────────────────────────────────────────────
const drawerVariants = cva(
  [
    'fixed z-50 flex flex-col',
    'bg-ink border-steel shadow-lg',
    'outline-none overflow-hidden',
  ],
  {
    variants: {
      side: {
        left:   'inset-y-0 left-0 border-r w-80 max-w-[85vw]',
        right:  'inset-y-0 right-0 border-l w-80 max-w-[85vw]',
        bottom: 'inset-x-0 bottom-0 border-t max-h-[85vh] rounded-t-2xl',
      },
      size: {
        sm:  '',
        md:  '',
        lg:  '',
        xl:  '',
        full: '',
      },
    },
    compoundVariants: [
      // Left / right sizes
      { side: 'left',  size: 'sm',   class: 'w-64 max-w-[85vw]' },
      { side: 'left',  size: 'md',   class: 'w-80 max-w-[85vw]' },
      { side: 'left',  size: 'lg',   class: 'w-96 max-w-[85vw]' },
      { side: 'left',  size: 'xl',   class: 'w-[32rem] max-w-[85vw]' },
      { side: 'left',  size: 'full', class: 'w-screen' },
      { side: 'right', size: 'sm',   class: 'w-64 max-w-[85vw]' },
      { side: 'right', size: 'md',   class: 'w-80 max-w-[85vw]' },
      { side: 'right', size: 'lg',   class: 'w-96 max-w-[85vw]' },
      { side: 'right', size: 'xl',   class: 'w-[32rem] max-w-[85vw]' },
      { side: 'right', size: 'full', class: 'w-screen' },
      // Bottom sizes
      { side: 'bottom', size: 'sm',   class: 'h-48' },
      { side: 'bottom', size: 'md',   class: 'h-72' },
      { side: 'bottom', size: 'lg',   class: 'h-96' },
      { side: 'bottom', size: 'xl',   class: 'h-[32rem]' },
      { side: 'bottom', size: 'full', class: 'h-[85vh]' },
    ],
    defaultVariants: { side: 'right', size: 'md' },
  }
)

// ── Motion configs ────────────────────────────────────────────────────────────
const slideVariants = {
  left:   { hidden: { x: '-100%' }, visible: { x: 0 }, exit: { x: '-100%' } },
  right:  { hidden: { x: '100%' },  visible: { x: 0 }, exit: { x: '100%' } },
  bottom: { hidden: { y: '100%' },  visible: { y: 0 }, exit: { y: '100%' } },
}

const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
}

// ── Types ─────────────────────────────────────────────────────────────────────
export interface DrawerProps
  extends DialogPrimitive.DialogProps,
    VariantProps<typeof drawerVariants> {}

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof drawerVariants> {}

// ── Primitives ────────────────────────────────────────────────────────────────
const DrawerRoot    = DialogPrimitive.Root
const DrawerTrigger = DialogPrimitive.Trigger
const DrawerPortal  = DialogPrimitive.Portal
const DrawerClose   = DialogPrimitive.Close

// ── Overlay ───────────────────────────────────────────────────────────────────
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} asChild {...props}>
    <motion.div
      className={cn('fixed inset-0 z-50 bg-void/80 backdrop-blur-sm', className)}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2 }}
    />
  </DialogPrimitive.Overlay>
))
DrawerOverlay.displayName = 'DrawerOverlay'

// ── Content ───────────────────────────────────────────────────────────────────
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(({ className, side = 'right', size, children, ...props }, ref) => (
  <DrawerPortal>
    <AnimatePresence>
      <DrawerOverlay />
      <DialogPrimitive.Content ref={ref} asChild {...props}>
        <motion.div
          className={cn(drawerVariants({ side, size }), className)}
          variants={slideVariants[side ?? 'right']}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* Snap handle for bottom drawer */}
          {side === 'bottom' && (
            <div className="flex justify-center py-3" aria-hidden>
              <div className="h-1.5 w-10 rounded-full bg-steel" />
            </div>
          )}
          {children}
        </motion.div>
      </DialogPrimitive.Content>
    </AnimatePresence>
  </DrawerPortal>
))
DrawerContent.displayName = 'DrawerContent'

// ── Header ────────────────────────────────────────────────────────────────────
function DrawerHeader({
  className,
  showClose = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { showClose?: boolean }) {
  return (
    <div
      className={cn(
        'flex items-start justify-between gap-4 px-6 py-5 border-b border-steel shrink-0',
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-1 flex-1">{props.children}</div>
      {showClose && (
        <DrawerClose asChild>
          <button
            className="shrink-0 text-mist hover:text-white transition-colors mt-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal rounded-md p-0.5"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </DrawerClose>
      )}
    </div>
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn('font-display font-semibold text-lg text-white leading-tight', className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn('text-sm text-mist leading-snug', className)}
      {...props}
    />
  )
}

// ── Body ──────────────────────────────────────────────────────────────────────
function DrawerBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex-1 overflow-y-auto px-6 py-5', className)}
      {...props}
    />
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function DrawerFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-3 px-6 py-4 border-t border-steel shrink-0',
        className
      )}
      {...props}
    />
  )
}

// ── Convenience wrapper ───────────────────────────────────────────────────────
function Drawer({ children, side, size, ...props }: DrawerProps) {
  return (
    <DrawerRoot {...props}>
      <DrawerContent side={side} size={size}>
        {children}
      </DrawerContent>
    </DrawerRoot>
  )
}

export {
  Drawer,
  DrawerRoot,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  DrawerClose,
  DrawerOverlay,
}
