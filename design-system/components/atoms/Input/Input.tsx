import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

const inputVariants = cva(
  [
    'w-full flex items-center',
    'bg-dusk border border-steel rounded-md',
    'text-white font-body placeholder:text-mist/40',
    'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
    'focus-within:border-signal focus-within:ring-2 focus-within:ring-signal/20',
    'hover:border-mist/30',
    'has-[:disabled]:opacity-40 has-[:disabled]:pointer-events-none',
  ],
  {
    variants: {
      size: {
        sm: 'px-3.5 py-2.5  text-xs  gap-2',
        md: 'px-4   py-3    text-sm  gap-2.5',
        lg: 'px-5   py-3.5  text-base gap-3',
      },
      state: {
        default: '',
        error:   'border-error focus-within:border-error focus-within:ring-error/20',
        success: 'border-success focus-within:border-success focus-within:ring-success/20',
      },
    },
    defaultVariants: { size: 'md', state: 'default' },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftIcon?:  React.ReactNode
  rightIcon?: React.ReactNode
  hint?:      string
  error?:     string
  label?:     string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, state, leftIcon, rightIcon, hint, error, label, id, ...props }, ref) => {
    const inputId    = id ?? React.useId()
    const hintId     = `${inputId}-hint`
    const resolvedState = error ? 'error' : state

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium font-display text-mist uppercase tracking-wide"
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}

        <div className={cn(inputVariants({ size, state: resolvedState }), className)}>
          {leftIcon && (
            <span className="shrink-0 text-mist/50 [&>svg]:h-4 [&>svg]:w-4" aria-hidden>
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className="flex-1 bg-transparent outline-none min-w-0 text-inherit placeholder:text-mist/40"
            aria-describedby={hint || error ? hintId : undefined}
            aria-invalid={!!error}
            {...props}
          />

          {rightIcon && (
            <span className="shrink-0 text-mist/50 [&>svg]:h-4 [&>svg]:w-4" aria-hidden>
              {rightIcon}
            </span>
          )}
        </div>

        {(hint || error) && (
          <p
            id={hintId}
            className={cn('text-xs', error ? 'text-error' : 'text-mist')}
          >
            {error ?? hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
