import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '../../utils'

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  required?: boolean
  optional?: boolean
  hint?:     string
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, children, required, optional, hint, ...props }, ref) => (
  <div className="flex flex-col gap-0.5">
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        'flex items-center gap-1.5',
        'font-display text-xs font-medium uppercase tracking-wide',
        'text-mist leading-none',
        'cursor-default select-none',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="text-error ml-0.5" aria-label="obrigatório">*</span>
      )}
      {optional && (
        <span className="text-mist/50 text-xs font-normal normal-case tracking-normal ml-1">(opcional)</span>
      )}
    </LabelPrimitive.Root>
    {hint && (
      <p className="text-xs text-mist/50 mt-1 leading-snug">{hint}</p>
    )}
  </div>
))

Label.displayName = LabelPrimitive.Root.displayName

export { Label }
