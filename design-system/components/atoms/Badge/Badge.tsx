import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

const badgeVariants = cva(
  [
    'inline-flex items-center gap-1.5',
    'font-display font-medium leading-none',
    'rounded-full border',
    'transition-colors duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
  ],
  {
    variants: {
      variant: {
        default:     'bg-dusk border-steel text-mist',
        primary:     'bg-signal/12 border-signal/30 text-signal-light',
        success:     'bg-success/12 border-success/30 text-success',
        warning:     'bg-warning/12 border-warning/30 text-warning',
        error:       'bg-error/12 border-error/30 text-error',
        info:        'bg-signal/12 border-signal/25 text-signal-light',
        solid:       'bg-signal border-signal text-white',
        ghost:       'bg-transparent border-transparent text-mist',
      },
      size: {
        sm: 'text-xs  px-2.5 py-1   font-medium',
        md: 'text-xs  px-3   py-1.5 font-medium',
        lg: 'text-sm  px-3.5 py-1.5 font-medium',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
  count?: number
}

function Badge({ className, variant, size, dot, count, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className={cn('h-1.5 w-1.5 rounded-full shrink-0', {
            'bg-signal-light': variant === 'primary' || variant === 'solid' || variant === 'info',
            'bg-success':      variant === 'success',
            'bg-warning':      variant === 'warning',
            'bg-error':        variant === 'error',
            'bg-mist':         variant === 'default',
          })}
          aria-hidden
        />
      )}
      {count !== undefined ? count : children}
    </span>
  )
}

export { Badge, badgeVariants }
