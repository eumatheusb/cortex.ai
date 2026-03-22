import * as React from 'react'
import { cn } from '../../utils'
import { Breadcrumb, type BreadcrumbItem } from '../../molecules/Breadcrumb/Breadcrumb'
import { Badge, type BadgeProps } from '../../atoms/Badge/Badge'

export interface PageHeaderProps {
  title:        string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  actions?:     React.ReactNode
  badge?:       string
  badgeVariant?: BadgeProps['variant']
  meta?:        React.ReactNode
  className?:   string
}

function PageHeader({
  title,
  description,
  breadcrumbs,
  actions,
  badge,
  badgeVariant = 'primary',
  meta,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        'flex flex-col gap-4 pb-6 border-b border-steel',
        className
      )}
    >
      {/* Breadcrumb */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumb items={breadcrumbs} />
      )}

      {/* Title row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="font-display font-bold text-3xl text-white leading-tight truncate">
              {title}
            </h1>
            {badge && (
              <Badge variant={badgeVariant} size="md">
                {badge}
              </Badge>
            )}
          </div>

          {description && (
            <p className="text-sm text-mist/80 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          {meta && (
            <div className="flex items-center gap-4 mt-1">
              {meta}
            </div>
          )}
        </div>

        {/* Actions */}
        {actions && (
          <div className="flex items-center gap-3 shrink-0">
            {actions}
          </div>
        )}
      </div>
    </header>
  )
}

export { PageHeader }
