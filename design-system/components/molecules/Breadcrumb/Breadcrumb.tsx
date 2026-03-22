import * as React from 'react'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '../../utils'

export interface BreadcrumbItem {
  label:   string
  href?:   string
  icon?:   React.ReactNode
}

export interface BreadcrumbProps {
  items:       BreadcrumbItem[]
  showHome?:   boolean
  className?:  string
  separator?:  React.ReactNode
}

function Breadcrumb({
  items,
  showHome = false,
  className,
  separator,
}: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = showHome
    ? [{ label: 'Início', href: '/', icon: <Home size={14} /> }, ...items]
    : items

  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center', className)}>
      <ol className="flex items-center gap-1.5 flex-wrap">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1

          return (
            <li key={index} className="flex items-center gap-1.5">
              {/* Separator */}
              {index > 0 && (
                <span className="text-ash" aria-hidden>
                  {separator ?? <ChevronRight size={14} />}
                </span>
              )}

              {/* Item */}
              {isLast ? (
                <span
                  aria-current="page"
                  className="flex items-center gap-1 font-body text-sm font-medium text-white"
                >
                  {item.icon}
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href ?? '#'}
                  className="flex items-center gap-1 font-body text-sm text-mist hover:text-white transition-colors duration-[200ms] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal rounded-sm"
                >
                  {item.icon}
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export { Breadcrumb }
