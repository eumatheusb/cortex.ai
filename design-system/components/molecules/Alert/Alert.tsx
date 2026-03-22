'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

const alertVariants = cva(
  [
    'relative flex gap-3 rounded-xl border p-4',
    'font-body text-sm',
  ],
  {
    variants: {
      variant: {
        info:        'bg-signal/8  border-signal/25 text-white',
        success:     'bg-success/8 border-success/25 text-white',
        warning:     'bg-warning/8 border-warning/25 text-white',
        error:       'bg-error/8   border-error/25   text-white',
        default:     'bg-dusk      border-steel       text-white',
      },
    },
    defaultVariants: { variant: 'info' },
  }
)

const iconMap = {
  info:    <Info    size={18} className="text-signal-light shrink-0 mt-0.5" />,
  success: <CheckCircle2 size={18} className="text-success shrink-0 mt-0.5" />,
  warning: <AlertTriangle size={18} className="text-warning shrink-0 mt-0.5" />,
  error:   <XCircle size={18} className="text-error shrink-0 mt-0.5" />,
  default: <Info    size={18} className="text-mist shrink-0 mt-0.5" />,
}

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?:       string
  dismissible?: boolean
  onDismiss?:   () => void
  icon?:        React.ReactNode
}

function Alert({
  className,
  variant = 'info',
  title,
  children,
  dismissible,
  onDismiss,
  icon,
  ...props
}: AlertProps) {
  const [visible, setVisible] = React.useState(true)

  const handleDismiss = () => {
    setVisible(false)
    onDismiss?.()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="alert"
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className={cn(alertVariants({ variant }), className)}
          {...(props as any)}
        >
          {icon ?? (variant ? iconMap[variant] : null)}

          <div className="flex-1 min-w-0">
            {title && (
              <p className="font-display font-semibold text-sm mb-1 text-white">
                {title}
              </p>
            )}
            {children && (
              <div className="text-sm text-mist leading-snug">{children}</div>
            )}
          </div>

          {dismissible && (
            <button
              type="button"
              onClick={handleDismiss}
              className="shrink-0 text-mist hover:text-white transition-colors mt-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal rounded"
              aria-label="Fechar alerta"
            >
              <X size={16} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { Alert }
