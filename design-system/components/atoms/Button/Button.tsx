import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { cn } from '../../utils'

const buttonVariants = cva(
  // Base
  [
    'relative inline-flex items-center justify-center overflow-hidden',
    'font-display font-semibold leading-none',
    'border',
    'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
    'cursor-pointer select-none whitespace-nowrap',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 focus-visible:ring-offset-2 focus-visible:ring-offset-void',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-signal text-white border-signal',
          'hover:bg-signal-dark hover:border-signal-dark',
          'active:scale-[0.98]',
          'shadow-sm hover:shadow-glow-sm',
        ],
        secondary: [
          'bg-dusk text-white border-mist/20',
          'hover:bg-steel hover:border-mist/30',
          'active:scale-[0.98]',
        ],
        ghost: [
          'bg-transparent text-mist border-transparent',
          'hover:bg-white/5 hover:text-white',
          'active:scale-[0.98]',
        ],
        outline: [
          'bg-transparent text-signal border-mist/20',
          'hover:bg-signal-ghost hover:border-signal/40',
          'active:scale-[0.98]',
        ],
        destructive: [
          'bg-error/10 text-error border-error/30',
          'hover:bg-error/20 hover:border-error/50',
          'active:scale-[0.98]',
        ],
        link: [
          'bg-transparent text-signal border-transparent',
          'underline-offset-4 hover:underline hover:text-signal-light',
          'p-0 h-auto',
        ],
      },
      size: {
        sm:   'h-9  px-4   text-xs  gap-2   rounded-md',
        md:   'h-11 px-5   text-sm  gap-2   rounded-md',
        lg:   'h-12 px-6   text-base gap-2.5 rounded-lg',
        icon: 'h-11 w-11 p-0 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size:    'md',
    },
  }
)

export interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    const isDisabled = disabled || loading
    const loaderSize = size === 'sm' ? 'h-3.5 w-3.5' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'
    const iconSize   = size === 'sm' ? '[&>svg]:h-3.5 [&>svg]:w-3.5' : size === 'lg' ? '[&>svg]:h-5 [&>svg]:w-5' : '[&>svg]:h-4 [&>svg]:w-4'
    const gapSize    = size === 'sm' ? 'gap-1.5' : size === 'lg' ? 'gap-2.5' : 'gap-2'

    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={isDisabled}
        whileTap={!isDisabled ? { scale: 0.97 } : undefined}
        {...props}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Loader2 className={cn(loaderSize, 'animate-spin')} aria-hidden />
          </span>
        )}

        <span className={cn('inline-flex items-center justify-center', gapSize, loading && 'opacity-0 invisible')}>
          {leftIcon && (
            <span className={cn('shrink-0', iconSize)} aria-hidden>{leftIcon}</span>
          )}
          {children}
          {rightIcon && (
            <span className={cn('shrink-0', iconSize)} aria-hidden>{rightIcon}</span>
          )}
        </span>
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
