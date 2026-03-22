import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils'
import { Button, buttonVariants, type ButtonProps } from '../../atoms/Button/Button'

export interface EmptyStateAction {
  label:    string
  onClick?: () => void
  href?:    string
  variant?: ButtonProps['variant']
  icon?:    React.ReactNode
}

export interface EmptyStateProps {
  icon?:        React.ReactNode
  title:        string
  description?: string
  actions?:     EmptyStateAction[]
  size?:        'sm' | 'md' | 'lg'
  className?:   string
}

const sizeMap = {
  sm: { icon: 'h-10 w-10', title: 'text-base', desc: 'text-xs', wrapper: 'py-8 gap-3' },
  md: { icon: 'h-14 w-14', title: 'text-lg',   desc: 'text-sm', wrapper: 'py-12 gap-4' },
  lg: { icon: 'h-20 w-20', title: 'text-2xl',  desc: 'text-base', wrapper: 'py-20 gap-5' },
}

function EmptyState({
  icon,
  title,
  description,
  actions,
  size = 'md',
  className,
}: EmptyStateProps) {
  const s = sizeMap[size]

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
      className={cn(
        'flex flex-col items-center justify-center text-center w-full',
        s.wrapper,
        className
      )}
    >
      {/* Icon container */}
      {icon && (
        <div className={cn(
          'flex items-center justify-center rounded-2xl border border-steel bg-dusk text-mist mb-1',
          s.icon
        )}>
          {icon}
        </div>
      )}

      {/* Default illustration when no icon */}
      {!icon && (
        <div className={cn(
          'flex items-center justify-center rounded-2xl border border-steel bg-dusk mb-1',
          s.icon
        )}>
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className="h-1/2 w-1/2 text-ash"
            aria-hidden
          >
            <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
            <path d="M16 24h16M16 30h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="24" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      )}

      {/* Text */}
      <div className="flex flex-col gap-1.5 max-w-sm">
        <h3 className={cn('font-display font-semibold text-white', s.title)}>
          {title}
        </h3>
        {description && (
          <p className={cn('text-mist leading-snug', s.desc)}>
            {description}
          </p>
        )}
      </div>

      {/* Actions */}
      {actions && actions.length > 0 && (
        <div className="flex items-center gap-3 mt-2 flex-wrap justify-center">
          {actions.map((action, i) =>
            action.href ? (
              <a
                key={i}
                href={action.href}
                className={cn(buttonVariants({ variant: action.variant ?? (i === 0 ? 'primary' : 'secondary'), size: 'md' }))}
              >
                {action.icon && <span className="shrink-0 [&>svg]:h-4 [&>svg]:w-4" aria-hidden>{action.icon}</span>}
                {action.label}
              </a>
            ) : (
              <Button
                key={i}
                variant={action.variant ?? (i === 0 ? 'primary' : 'secondary')}
                leftIcon={action.icon}
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            )
          )}
        </div>
      )}
    </motion.div>
  )
}

export { EmptyState }
