'use client'
import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react'
import { cn } from '../../utils'

type ToastVariant = 'default' | 'success' | 'warning' | 'error' | 'info'

export interface ToastItem {
  id: string
  title: string
  description?: string
  variant?: ToastVariant
  duration?: number
  closable?: boolean
  action?: { label: string; onClick: () => void }
}

interface ToastContextValue {
  toasts: ToastItem[]
  addToast: (toast: Omit<ToastItem, 'id'>) => string
  removeToast: (id: string) => void
}

const ToastContext = React.createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([])

  const addToast = React.useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).slice(2)
    setToasts((prev) => [...prev, { id, ...toast }])
    if (toast.duration !== 0) {
      setTimeout(() => removeToast(id), toast.duration ?? 4000)
    }
    return id
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

const variantStyles: Record<ToastVariant, { border: string; icon: React.ReactNode }> = {
  default: { border: 'border-l-steel',    icon: <Info className="h-4 w-4 text-mist" /> },
  success: { border: 'border-l-success',  icon: <CheckCircle2 className="h-4 w-4 text-success" /> },
  warning: { border: 'border-l-warning',  icon: <AlertTriangle className="h-4 w-4 text-warning" /> },
  error:   { border: 'border-l-error',    icon: <XCircle className="h-4 w-4 text-error" /> },
  info:    { border: 'border-l-signal',   icon: <Info className="h-4 w-4 text-signal" /> },
}

function ToastItem({ toast, onClose }: { toast: ToastItem; onClose: () => void }) {
  const { border, icon } = variantStyles[toast.variant ?? 'default']

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        'pointer-events-auto min-w-[320px] max-w-[480px]',
        'bg-dusk border border-steel border-l-4 rounded-lg shadow-modal',
        'px-4 py-3.5 flex items-start gap-3',
        border,
      )}
    >
      <span className="shrink-0 mt-0.5">{icon}</span>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white">{toast.title}</p>
        {toast.description && (
          <p className="text-xs text-mist/80 mt-0.5">{toast.description}</p>
        )}
        {toast.action && (
          <button
            onClick={toast.action.onClick}
            className="mt-1.5 text-xs text-signal underline underline-offset-2 hover:text-signal-light transition-colors"
          >
            {toast.action.label}
          </button>
        )}
      </div>

      {toast.closable !== false && (
        <button
          onClick={onClose}
          className="shrink-0 text-mist/40 hover:text-white transition-colors duration-150 mt-0.5"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </motion.div>
  )
}

export function useToast() {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')

  const { addToast, removeToast } = ctx

  return {
    toast: {
      default: (title: string, opts?: Partial<ToastItem>) => addToast({ title, variant: 'default', ...opts }),
      success: (title: string, opts?: Partial<ToastItem>) => addToast({ title, variant: 'success', ...opts }),
      error:   (title: string, opts?: Partial<ToastItem>) => addToast({ title, variant: 'error', ...opts }),
      warning: (title: string, opts?: Partial<ToastItem>) => addToast({ title, variant: 'warning', ...opts }),
      info:    (title: string, opts?: Partial<ToastItem>) => addToast({ title, variant: 'info', ...opts }),
      dismiss: (id: string) => removeToast(id),
    },
  }
}

export { ToastContext }
