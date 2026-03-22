'use client'

import * as React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

const cardVariants = cva(
  [
    'relative flex flex-col rounded-xl border',
    'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
  ],
  {
    variants: {
      variant: {
        default:     'bg-dusk border-steel',
        elevated:    'bg-dusk border-steel shadow-card',
        bordered:    'bg-transparent border-mist/25 hover:border-mist/50',
        ghost:       'bg-transparent border-transparent',
        interactive: [
          'bg-dusk border-steel cursor-pointer',
          'hover:border-signal/40 hover:shadow-glow-sm hover:bg-ink',
          'active:scale-[0.99]',
        ],
        signal: [
          'bg-signal/5 border-signal/30',
          'shadow-glow-sm',
        ],
      },
      padding: {
        none: 'p-0',
        sm:   'p-4',
        md:   'p-6',
        lg:   'p-8',
      },
    },
    defaultVariants: { variant: 'default', padding: 'md' },
  }
)

export interface CardProps
  extends Omit<HTMLMotionProps<'div'>, 'children'>,
    VariantProps<typeof cardVariants> {
  children?: React.ReactNode
  asChild?:  boolean
}

function Card({ className, variant, padding, children, ...props }: CardProps) {
  const isInteractive = variant === 'interactive'

  return (
    <motion.div
      className={cn(cardVariants({ variant, padding }), className)}
      whileHover={isInteractive ? { y: -2 } : undefined}
      whileTap={isInteractive ? { scale: 0.99 } : undefined}
      transition={{ duration: 0.15 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col gap-1.5 pb-4 border-b border-steel', className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('font-display font-semibold text-lg text-white leading-tight', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm text-mist leading-snug', className)} {...props} />
  )
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('pt-4 flex-1', className)} {...props} />
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex items-center gap-3 pt-4 border-t border-steel mt-auto', className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
