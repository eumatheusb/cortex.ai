import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

const spinnerVariants = cva(
  'animate-spin rounded-full border-solid border-t-transparent duration-700',
  {
    variants: {
      size: {
        xs: 'h-3  w-3  border-[1.5px]',
        sm: 'h-4  w-4  border-2',
        md: 'h-6  w-6  border-2',
        lg: 'h-8  w-8  border-[2.5px]',
        xl: 'h-12 w-12 border-[2.5px]',
      },
      variant: {
        primary: 'border-signal',
        white:   'border-white',
        muted:   'border-mist/40',
      },
    },
    defaultVariants: { size: 'md', variant: 'primary' },
  }
)

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string
}

function Spinner({ className, size, variant, label = 'Carregando...', ...props }: SpinnerProps) {
  return (
    <span role="status" aria-label={label} className="inline-flex" {...props}>
      <span className={cn(spinnerVariants({ size, variant }), className)} aria-hidden />
      <span className="sr-only">{label}</span>
    </span>
  )
}

function SpinnerOverlay({ label }: { label?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-void/60 backdrop-blur-sm rounded-inherit z-10">
      <Spinner size="lg" label={label} />
    </div>
  )
}

export { Spinner, SpinnerOverlay }
