'use client'
import * as React from 'react'
import { cn } from '../../utils'

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
  label?: string
  hint?: string
  error?: string
  resize?: 'none' | 'vertical' | 'both'
  showCount?: boolean
  maxLength?: number
}

const sizeMap = {
  sm: 'px-3.5 py-2.5 text-xs',
  md: 'px-4 py-3 text-sm',
  lg: 'px-5 py-3.5 text-base',
}

const resizeMap = {
  none: 'resize-none',
  vertical: 'resize-y',
  both: 'resize',
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
    className,
    size = 'md',
    label,
    hint,
    error,
    resize = 'vertical',
    showCount,
    maxLength,
    id,
    value,
    onChange,
    rows = 4,
    ...props
  }, ref) => {
    const inputId = id ?? React.useId()
    const [count, setCount] = React.useState(
      typeof value === 'string' ? value.length : 0
    )

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCount(e.target.value.length)
      onChange?.(e)
    }

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

        <div className="relative">
          <textarea
            ref={ref}
            id={inputId}
            rows={rows}
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
            className={cn(
              'w-full bg-dusk border border-steel rounded-md',
              'text-white font-body placeholder:text-mist/40',
              'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
              'hover:border-mist/30',
              'focus:outline-none focus:border-signal focus:ring-2 focus:ring-signal/20',
              'disabled:opacity-40 disabled:cursor-not-allowed',
              sizeMap[size],
              resizeMap[resize],
              error && 'border-error focus:border-error focus:ring-error/20',
              showCount && maxLength && 'pb-8',
              className,
            )}
            {...props}
          />

          {showCount && maxLength && (
            <span className="absolute bottom-2.5 right-3 text-xs text-mist/50 pointer-events-none">
              {count} / {maxLength}
            </span>
          )}
        </div>

        {(hint || error) && (
          <p className={cn('text-xs', error ? 'text-error' : 'text-mist/60')}>
            {error ?? hint}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
