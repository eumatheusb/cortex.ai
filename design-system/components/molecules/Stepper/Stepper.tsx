'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Check, AlertCircle } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

// ── Types ─────────────────────────────────────────────────────────────────────
export type StepStatus = 'complete' | 'active' | 'pending' | 'error'

export interface StepItem {
  id:          string
  label:       string
  description?: string
  icon?:       React.ReactNode
  status:      StepStatus
}

export interface StepperProps {
  steps:       StepItem[]
  orientation?: 'horizontal' | 'vertical'
  onStepClick?: (step: StepItem, index: number) => void
  className?:  string
}

// ── Variants ──────────────────────────────────────────────────────────────────
const stepIndicatorVariants = cva(
  [
    'relative flex items-center justify-center shrink-0',
    'rounded-full border-2 transition-all duration-200',
    'font-display font-semibold text-xs',
  ],
  {
    variants: {
      status: {
        complete: 'bg-signal border-signal text-white',
        active:   'bg-signal/10 border-signal text-signal',
        pending:  'bg-transparent border-steel text-ash',
        error:    'bg-error/10 border-error text-error',
      },
      size: {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
      },
    },
    defaultVariants: { status: 'pending', size: 'md' },
  }
)

// ── Step Indicator ────────────────────────────────────────────────────────────
function StepIndicator({
  step,
  index,
  size = 'md',
}: {
  step: StepItem
  index: number
  size?: 'sm' | 'md'
}) {
  const iconSize = size === 'sm' ? 14 : 16

  return (
    <motion.div
      className={cn(stepIndicatorVariants({ status: step.status, size }))}
      initial={false}
      animate={{
        scale: step.status === 'active' ? 1.05 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {step.status === 'complete' ? (
        <Check size={iconSize} strokeWidth={2.5} />
      ) : step.status === 'error' ? (
        <AlertCircle size={iconSize} />
      ) : step.icon ? (
        <span className="[&>svg]:h-4 [&>svg]:w-4">{step.icon}</span>
      ) : (
        <span>{index + 1}</span>
      )}

      {/* Active pulse ring */}
      {step.status === 'active' && (
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-signal"
          animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.div>
  )
}

// ── Connector ─────────────────────────────────────────────────────────────────
function StepConnector({
  isComplete,
  orientation,
}: {
  isComplete: boolean
  orientation: 'horizontal' | 'vertical'
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden',
        orientation === 'horizontal'
          ? 'flex-1 h-0.5 mx-2 self-center'
          : 'w-0.5 min-h-6 ml-5 my-1'
      )}
    >
      <div className="absolute inset-0 bg-steel" />
      <motion.div
        className="absolute inset-0 bg-signal origin-left"
        initial={false}
        animate={{
          scaleX: isComplete ? 1 : 0,
          scaleY: isComplete ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        style={{
          transformOrigin: orientation === 'horizontal' ? 'left' : 'top',
        }}
      />
    </div>
  )
}

// ── Stepper ───────────────────────────────────────────────────────────────────
function Stepper({
  steps,
  orientation = 'horizontal',
  onStepClick,
  className,
}: StepperProps) {
  const isHorizontal = orientation === 'horizontal'

  return (
    <div
      className={cn(
        'flex',
        isHorizontal ? 'flex-row items-start' : 'flex-col',
        className
      )}
      role="list"
      aria-label="Progresso"
    >
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div
            className={cn(
              'flex',
              isHorizontal
                ? 'flex-col items-center gap-2 min-w-0'
                : 'flex-row items-start gap-3'
            )}
            role="listitem"
            aria-current={step.status === 'active' ? 'step' : undefined}
          >
            {/* Indicator */}
            <button
              type="button"
              onClick={() => onStepClick?.(step, index)}
              disabled={!onStepClick}
              className={cn(
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 rounded-full',
                onStepClick ? 'cursor-pointer' : 'cursor-default'
              )}
              aria-label={`${step.label}: ${step.status}`}
            >
              <StepIndicator step={step} index={index} />
            </button>

            {/* Text */}
            <div
              className={cn(
                isHorizontal ? 'text-center max-w-24' : 'pt-1.5 min-w-0 flex-1'
              )}
            >
              <p
                className={cn(
                  'text-sm font-medium font-display leading-tight',
                  step.status === 'active' || step.status === 'complete'
                    ? 'text-white'
                    : step.status === 'error'
                    ? 'text-error'
                    : 'text-mist'
                )}
              >
                {step.label}
              </p>
              {step.description && (
                <p className="text-xs text-ash mt-0.5 leading-snug">
                  {step.description}
                </p>
              )}
            </div>
          </div>

          {/* Connector */}
          {index < steps.length - 1 && (
            <StepConnector
              isComplete={step.status === 'complete'}
              orientation={orientation}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export { Stepper }
