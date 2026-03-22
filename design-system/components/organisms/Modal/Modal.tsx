'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

const modalVariants = cva(
  [
    'relative z-50 flex flex-col',
    'bg-ink border border-steel rounded-2xl shadow-lg',
    'w-full mx-4 outline-none',
    'max-h-[90vh] overflow-hidden',
  ],
  {
    variants: {
      size: {
        sm:   'max-w-sm',
        md:   'max-w-md',
        lg:   'max-w-lg',
        xl:   'max-w-xl',
        '2xl': 'max-w-2xl',
        full: 'max-w-[calc(100vw-2rem)] h-[90vh]',
      },
    },
    defaultVariants: { size: 'md' },
  }
)

const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
}

const contentVariants = {
  hidden:  { opacity: 0, scale: 0.95, y: 8 },
  visible: { opacity: 1, scale: 1,    y: 0 },
  exit:    { opacity: 0, scale: 0.95, y: 8 },
}

// ── Primitives ────────────────────────────────────────────────────────────────
const ModalRoot    = DialogPrimitive.Root
const ModalTrigger = DialogPrimitive.Trigger
const ModalPortal  = DialogPrimitive.Portal
const ModalClose   = DialogPrimitive.Close

// ── Overlay ───────────────────────────────────────────────────────────────────
const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} asChild {...props}>
    <motion.div
      className={cn(
        'fixed inset-0 z-50 bg-void/80 backdrop-blur-sm',
        className
      )}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2 }}
    />
  </DialogPrimitive.Overlay>
))
ModalOverlay.displayName = 'ModalOverlay'

// ── Content ───────────────────────────────────────────────────────────────────
interface ModalContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof modalVariants> {}

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ModalContentProps
>(({ className, size, children, ...props }, ref) => (
  <ModalPortal>
    <AnimatePresence>
      <ModalOverlay />
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <DialogPrimitive.Content ref={ref} asChild {...props}>
          <motion.div
            className={cn(modalVariants({ size }), className)}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2, ease: [0.175, 0.885, 0.32, 1.1] }}
          >
            {children}
          </motion.div>
        </DialogPrimitive.Content>
      </div>
    </AnimatePresence>
  </ModalPortal>
))
ModalContent.displayName = 'ModalContent'

// ── Header ────────────────────────────────────────────────────────────────────
function ModalHeader({
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
        <ModalClose asChild>
          <button
            className="shrink-0 text-mist hover:text-white transition-colors mt-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal rounded-md p-0.5"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </ModalClose>
      )}
    </div>
  )
}

function ModalTitle({ className, ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn('font-display font-semibold text-lg text-white leading-tight', className)}
      {...props}
    />
  )
}

function ModalDescription({ className, ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn('text-sm text-mist leading-snug', className)}
      {...props}
    />
  )
}

// ── Body ──────────────────────────────────────────────────────────────────────
function ModalBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex-1 overflow-y-auto px-6 py-5', className)}
      {...props}
    />
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function ModalFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
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

// Convenience wrapper: Modal = Root + Content combined
interface ModalProps extends DialogPrimitive.DialogProps, VariantProps<typeof modalVariants> {}

function Modal({ children, size, ...props }: ModalProps) {
  return (
    <ModalRoot {...props}>
      <ModalContent size={size}>{children}</ModalContent>
    </ModalRoot>
  )
}

export {
  Modal,
  ModalRoot,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  ModalClose,
}
