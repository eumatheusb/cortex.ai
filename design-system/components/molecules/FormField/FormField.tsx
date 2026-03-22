import * as React from 'react'
import { Label }  from '../../atoms/Label/Label'
import { Input, type InputProps } from '../../atoms/Input/Input'
import { cn } from '../../utils'

export interface FormFieldProps extends InputProps {
  label:    string
  hint?:    string
  error?:   string
  optional?: boolean
  className?: string
  containerClassName?: string
}

/**
 * FormField — Label + Input compostos.
 * Ponto único de verdade para campos de formulário no DS Cortex.
 */
function FormField({
  label,
  hint,
  error,
  required,
  optional,
  id,
  className,
  containerClassName,
  ...inputProps
}: FormFieldProps) {
  const fieldId = id ?? React.useId()

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', containerClassName)}>
      <Label
        htmlFor={fieldId}
        required={required}
        optional={optional}
        hint={undefined}
      >
        {label}
      </Label>

      <Input
        id={fieldId}
        hint={!error ? hint : undefined}
        error={error}
        required={required}
        className={className}
        {...inputProps}
      />
    </div>
  )
}

export interface FormSectionProps {
  title?:       string
  description?: string
  children:     React.ReactNode
  className?:   string
}

function FormSection({ title, description, children, className }: FormSectionProps) {
  return (
    <fieldset className={cn('flex flex-col gap-5 border-0 p-0 m-0', className)}>
      {(title || description) && (
        <div className="flex flex-col gap-1 pb-4 border-b border-steel">
          {title && (
            <legend className="font-display font-semibold text-base text-white">
              {title}
            </legend>
          )}
          {description && (
            <p className="text-sm text-mist leading-snug">{description}</p>
          )}
        </div>
      )}
      {children}
    </fieldset>
  )
}

export { FormField, FormSection }
