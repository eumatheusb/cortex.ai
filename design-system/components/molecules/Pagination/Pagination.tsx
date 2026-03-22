'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '../../utils'

export interface PaginationProps {
  currentPage:  number
  totalPages:   number
  onPageChange: (page: number) => void
  siblingCount?: number
  showEdges?:   boolean
  className?:   string
}

function getPageRange(current: number, total: number, siblings: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const leftSibling  = Math.max(current - siblings, 1)
  const rightSibling = Math.min(current + siblings, total)
  const showLeftDots  = leftSibling > 2
  const showRightDots = rightSibling < total - 1

  if (!showLeftDots && showRightDots) {
    const leftItems = 3 + 2 * siblings
    return [...Array.from({ length: leftItems }, (_, i) => i + 1), '...', total]
  }
  if (showLeftDots && !showRightDots) {
    const rightItems = 3 + 2 * siblings
    return [1, '...', ...Array.from({ length: rightItems }, (_, i) => total - rightItems + i + 1)]
  }
  return [1, '...', ...Array.from({ length: rightSibling - leftSibling + 1 }, (_, i) => leftSibling + i), '...', total]
}

function PageButton({
  page,
  active,
  disabled,
  onClick,
}: {
  page:     number | '...'
  active?:  boolean
  disabled?: boolean
  onClick?: () => void
}) {
  if (page === '...') {
    return (
      <span className="flex h-9 w-9 items-center justify-center text-mist">
        <MoreHorizontal size={16} />
      </span>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-current={active ? 'page' : undefined}
      aria-label={`Página ${page}`}
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium font-display',
        'transition-all duration-[200ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal',
        active
          ? 'bg-signal text-white shadow-glow-sm'
          : 'text-mist hover:bg-dusk hover:text-white border border-transparent hover:border-steel',
        disabled && 'opacity-40 pointer-events-none'
      )}
    >
      {page}
    </button>
  )
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
}: PaginationProps) {
  const pages = getPageRange(currentPage, totalPages, siblingCount)
  const canPrev = currentPage > 1
  const canNext = currentPage < totalPages

  return (
    <nav
      role="navigation"
      aria-label="Paginação"
      className={cn('flex items-center gap-1', className)}
    >
      {/* Prev */}
      <button
        type="button"
        onClick={() => canPrev && onPageChange(currentPage - 1)}
        disabled={!canPrev}
        aria-label="Página anterior"
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-md',
          'text-mist border border-steel transition-all duration-[200ms]',
          'hover:bg-dusk hover:text-white hover:border-mist/40',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal',
          !canPrev && 'opacity-40 pointer-events-none'
        )}
      >
        <ChevronLeft size={16} />
      </button>

      {/* Pages */}
      {pages.map((page, i) => (
        <PageButton
          key={i}
          page={page}
          active={page === currentPage}
          onClick={typeof page === 'number' ? () => onPageChange(page) : undefined}
        />
      ))}

      {/* Next */}
      <button
        type="button"
        onClick={() => canNext && onPageChange(currentPage + 1)}
        disabled={!canNext}
        aria-label="Próxima página"
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-md',
          'text-mist border border-steel transition-all duration-[200ms]',
          'hover:bg-dusk hover:text-white hover:border-mist/40',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal',
          !canNext && 'opacity-40 pointer-events-none'
        )}
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  )
}

export { Pagination }
