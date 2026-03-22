import * as React from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

const tagVariants = cva(
  [
    'inline-flex items-center',
    'font-display text-xs font-medium',
    'rounded-md border',
    'transition-colors duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
  ],
  {
    variants: {
      variant: {
        default:   'bg-dusk border-steel text-mist hover:border-mist/40',
        primary:   'bg-signal/12 border-signal/25 text-signal-light hover:bg-signal/15',
        success:   'bg-success/12 border-success/25 text-success',
        warning:   'bg-warning/12 border-warning/25 text-warning',
        error:     'bg-error/12 border-error/25 text-error',
      },
      size: {
        sm: 'h-5 px-2 text-[10px]',
        md: 'h-6 px-2.5 py-1 text-xs',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  }
)

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  onRemove?: () => void
  removable?: boolean
}

function Tag({ className, variant, size, onRemove, removable, children, ...props }: TagProps) {
  return (
    <AnimatePresence>
      <motion.span
        layout
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.15 }}
        className={cn(tagVariants({ variant, size }), className)}
        {...(props as any)}
      >
        {children}

        {(removable || onRemove) && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-1.5 -mr-0.5 rounded-sm opacity-60 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 transition-opacity duration-[150ms]"
            aria-label={`Remover ${typeof children === 'string' ? children : 'tag'}`}
          >
            <X className="h-3 w-3" strokeWidth={2.5} aria-hidden />
          </button>
        )}
      </motion.span>
    </AnimatePresence>
  )
}

function TagList({
  tags,
  onRemove,
  variant,
}: {
  tags?: string[]
  onRemove?: (tag: string) => void
  variant?: TagProps['variant']
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      <AnimatePresence>
        {(tags ?? []).map((tag) => (
          <Tag
            key={tag}
            variant={variant}
            onRemove={onRemove ? () => onRemove(tag) : undefined}
            removable={!!onRemove}
          >
            {tag}
          </Tag>
        ))}
      </AnimatePresence>
    </div>
  )
}

export { Tag, TagList }
