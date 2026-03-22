'use client'

import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, Info, XCircle } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'
import { Button } from '../../atoms/Button/Button'

// ── Variants ──────────────────────────────────────────────────────────────────
const confirmDialogVariants = cva(
  ['relative z-50 flex flex-col', 'bg-ink border rounded-2xl shadow-lg', 'w-full mx-4 max-w-md outline-none'],
  {
    variants: {
      variant: {
        danger:  'border-error/30',
        warning: 'border-warning/30',
        info:    'border-signal/30',
      },
    },
    defaultVariants: { variant: 'danger' },
  }
)

const iconContainerVariants = cva(
  ['flex items-center justify-center h-10 w-10 rounded-full shrink-0'],
  {
    variants: {
      variant: {
        danger:  'bg-error/10 text-error',
        warning: 'bg-warning/10 text-warning',
        info:    'bg-signal/10 text-signal',
      },
    },
    defaultVariants: { variant: 'danger' },
  }
)

// ── Motion ────────────────────────────────────────────────────────────────────
const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
}

const contentVariants = {
  hidden:  { opacity: 0, scale: 0.95, y: 8 },
  visible: { opacity: 1, scale: 1,    y: 0 },
  exit:    { opacity: 0, scale: 0.95, y: 8 },
}

// ── Types ─────────────────────────────────────────────────────────────────────
export interface ConfirmDialogProps extends VariantProps<typeof confirmDialogVariants> {
  open:          boolean
  onOpenChange:  (open: boolean) => void
  title:         string
  description?:  string
  confirmLabel?: string
  cancelLabel?:  string
  onConfirm:     () => void | Promise<void>
  loading?:      boolean
  icon?:         React.ReactNode
  children?:     React.ReactNode
  className?:    string
}

const defaultIcons = {
  danger:  <XCircle size={20} />,
  warning: <AlertTriangle size={20} />,
  info:    <Info size={20} />,
}

const confirmButtonVariant = {
  danger:  'destructive' as const,
  warning: 'primary' as const,
  info:    'primary' as const,
}

// ── Component ─────────────────────────────────────────────────────────────────
function ConfirmDialog({
  open,
  onOpenChange,
  variant = 'danger',
  title,
  description,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  onConfirm,
  loading = false,
  icon,
  children,
  className,
}: ConfirmDialogProps) {
  const resolvedVariant = variant ?? 'danger'

  const handleConfirm = async () => {
    await onConfirm()
    if (!loading) onOpenChange(false)
  }

  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialogPrimitive.Portal>
        <AnimatePresence>
          {open && (
            <>
              <AlertDialogPrimitive.Overlay asChild>
                <motion.div
                  className="fixed inset-0 z-50 bg-void/80 backdrop-blur-sm"
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.2 }}
                />
              </AlertDialogPrimitive.Overlay>

              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <AlertDialogPrimitive.Content asChild>
                  <motion.div
                    className={cn(confirmDialogVariants({ variant: resolvedVariant }), className)}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.2, ease: [0.175, 0.885, 0.32, 1.1] }}
                  >
                    {/* Header */}
                    <div className="flex gap-4 px-6 pt-6 pb-2">
                      <div className={cn(iconContainerVariants({ variant: resolvedVariant }))}>
                        {icon ?? defaultIcons[resolvedVariant]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <AlertDialogPrimitive.Title className="font-display font-semibold text-base text-white leading-tight">
                          {title}
                        </AlertDialogPrimitive.Title>
                        {description && (
                          <AlertDialogPrimitive.Description className="text-sm text-mist leading-snug mt-1.5">
                            {description}
                          </AlertDialogPrimitive.Description>
                        )}
                      </div>
                    </div>

                    {/* Custom content */}
                    {children && (
                      <div className="px-6 py-3">{children}</div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-steel">
                      <AlertDialogPrimitive.Cancel asChild>
                        <Button variant="ghost" disabled={loading}>
                          {cancelLabel}
                        </Button>
                      </AlertDialogPrimitive.Cancel>
                      <AlertDialogPrimitive.Action asChild>
                        <Button
                          variant={confirmButtonVariant[resolvedVariant]}
                          loading={loading}
                          onClick={handleConfirm}
                        >
                          {confirmLabel}
                        </Button>
                      </AlertDialogPrimitive.Action>
                    </div>
                  </motion.div>
                </AlertDialogPrimitive.Content>
              </div>
            </>
          )}
        </AnimatePresence>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  )
}

export { ConfirmDialog }
