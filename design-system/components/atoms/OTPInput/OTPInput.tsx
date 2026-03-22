'use client'
import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils'

export interface OTPInputProps {
  length?: 4 | 6
  value?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  disabled?: boolean
  error?: string
  autoFocus?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizesMap = {
  sm: 'w-9 h-10 text-sm',
  md: 'w-11 h-12 text-base',
  lg: 'w-14 h-14 text-lg',
}

export function OTPInput({
  length = 6,
  value: controlledValue,
  onChange,
  onComplete,
  disabled = false,
  error,
  autoFocus = true,
  size = 'md',
  className,
}: OTPInputProps) {
  const [internalValue, setInternalValue] = React.useState('')
  const value = controlledValue ?? internalValue
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

  const digits = React.useMemo(() => {
    const arr = value.split('').slice(0, length)
    while (arr.length < length) arr.push('')
    return arr
  }, [value, length])

  const setValue = React.useCallback(
    (newVal: string) => {
      const cleaned = newVal.replace(/\D/g, '').slice(0, length)
      if (controlledValue === undefined) setInternalValue(cleaned)
      onChange?.(cleaned)
      if (cleaned.length === length) {
        onComplete?.(cleaned)
      }
    },
    [controlledValue, length, onChange, onComplete],
  )

  const focusIndex = React.useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, length - 1))
      inputRefs.current[clamped]?.focus()
    },
    [length],
  )

  const handleChange = React.useCallback(
    (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const char = e.target.value.replace(/\D/g, '').slice(-1)
      if (!char) return

      const newDigits = [...digits]
      newDigits[index] = char
      const newVal = newDigits.join('')
      setValue(newVal)

      if (index < length - 1) {
        focusIndex(index + 1)
      }
    },
    [digits, length, setValue, focusIndex],
  )

  const handleKeyDown = React.useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace') {
        e.preventDefault()
        const newDigits = [...digits]
        if (digits[index]) {
          newDigits[index] = ''
          setValue(newDigits.join(''))
        } else if (index > 0) {
          newDigits[index - 1] = ''
          setValue(newDigits.join(''))
          focusIndex(index - 1)
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        focusIndex(index - 1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        focusIndex(index + 1)
      }
    },
    [digits, setValue, focusIndex],
  )

  const handlePaste = React.useCallback(
    (e: React.ClipboardEvent) => {
      e.preventDefault()
      const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length)
      setValue(pasted)
      focusIndex(Math.min(pasted.length, length - 1))
    },
    [length, setValue, focusIndex],
  )

  React.useEffect(() => {
    if (autoFocus) {
      inputRefs.current[0]?.focus()
    }
  }, [autoFocus])

  return (
    <div className={cn('flex flex-col gap-2 items-center', className)}>
      <div
        className="flex items-center gap-2"
        role="group"
        aria-label="Codigo de verificacao"
      >
        {digits.map((digit, i) => (
          <React.Fragment key={i}>
            {length === 6 && i === 3 && (
              <span className="text-ash mx-1 select-none" aria-hidden>—</span>
            )}
            <motion.input
              ref={(el) => { inputRefs.current[i] = el }}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={1}
              value={digit}
              disabled={disabled}
              onChange={(e) => handleChange(i, e)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={handlePaste}
              onFocus={(e) => e.target.select()}
              className={cn(
                sizesMap[size],
                'text-center font-mono font-semibold rounded-md',
                'bg-dusk border border-steel text-white',
                'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
                'focus:outline-none focus:border-signal focus:ring-2 focus:ring-signal/20',
                'hover:border-mist/30',
                'disabled:opacity-40 disabled:cursor-not-allowed',
                error && 'border-error focus:border-error focus:ring-error/20',
                digit && 'border-signal/40 bg-signal/5',
              )}
              aria-label={`Digito ${i + 1} de ${length}`}
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.15 }}
            />
          </React.Fragment>
        ))}
      </div>

      {error && (
        <p className="text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
