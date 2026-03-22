'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

// ── Types ─────────────────────────────────────────────────────────────────────
export interface PanelConfig {
  id:           string
  defaultSize:  number // percentage
  minSize?:     number // percentage
  maxSize?:     number // percentage
  children:     React.ReactNode
  className?:   string
}

export interface ResizablePanelsProps {
  panels:       PanelConfig[]
  direction?:   'horizontal' | 'vertical'
  storageKey?:  string
  className?:   string
}

// ── Handle Variants ───────────────────────────────────────────────────────────
const handleVariants = cva(
  [
    'relative flex items-center justify-center shrink-0',
    'bg-transparent hover:bg-signal/10 active:bg-signal/20',
    'transition-colors duration-150',
    'group',
  ],
  {
    variants: {
      direction: {
        horizontal: 'w-2 cursor-col-resize',
        vertical:   'h-2 cursor-row-resize',
      },
    },
    defaultVariants: { direction: 'horizontal' },
  }
)

// ── Handle ────────────────────────────────────────────────────────────────────
function ResizeHandle({
  direction,
  onMouseDown,
  onTouchStart,
}: {
  direction: 'horizontal' | 'vertical'
  onMouseDown: (e: React.MouseEvent) => void
  onTouchStart: (e: React.TouchEvent) => void
}) {
  return (
    <div
      className={cn(handleVariants({ direction }))}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      role="separator"
      aria-orientation={direction === 'horizontal' ? 'vertical' : 'horizontal'}
      tabIndex={0}
      onKeyDown={(e) => {
        // Keyboard resize: arrow keys
        if (direction === 'horizontal') {
          if (e.key === 'ArrowLeft') e.currentTarget.dispatchEvent(new CustomEvent('resize-left'))
          if (e.key === 'ArrowRight') e.currentTarget.dispatchEvent(new CustomEvent('resize-right'))
        } else {
          if (e.key === 'ArrowUp') e.currentTarget.dispatchEvent(new CustomEvent('resize-up'))
          if (e.key === 'ArrowDown') e.currentTarget.dispatchEvent(new CustomEvent('resize-down'))
        }
      }}
    >
      {/* Visible handle bar */}
      <div
        className={cn(
          'rounded-full bg-steel group-hover:bg-signal/60 group-active:bg-signal transition-colors',
          direction === 'horizontal' ? 'h-8 w-1' : 'w-8 h-1'
        )}
      />
    </div>
  )
}

// ── ResizablePanels ───────────────────────────────────────────────────────────
function ResizablePanels({
  panels,
  direction = 'horizontal',
  storageKey,
  className,
}: ResizablePanelsProps) {
  // Initialize sizes from storage or defaults
  const getInitialSizes = (): number[] => {
    if (storageKey && typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(`cortex-panels-${storageKey}`)
        if (stored) {
          const parsed = JSON.parse(stored)
          if (Array.isArray(parsed) && parsed.length === panels.length) {
            return parsed
          }
        }
      } catch {
        // ignore parse errors
      }
    }
    return panels.map((p) => p.defaultSize)
  }

  const [sizes, setSizes] = React.useState<number[]>(getInitialSizes)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isDragging = React.useRef(false)

  // Persist sizes to localStorage
  React.useEffect(() => {
    if (storageKey && typeof window !== 'undefined') {
      localStorage.setItem(`cortex-panels-${storageKey}`, JSON.stringify(sizes))
    }
  }, [sizes, storageKey])

  const handleResize = React.useCallback(
    (handleIndex: number, clientPos: number) => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const totalSize = direction === 'horizontal' ? rect.width : rect.height
      const offset = direction === 'horizontal' ? clientPos - rect.left : clientPos - rect.top
      const percentage = (offset / totalSize) * 100

      setSizes((prev) => {
        const next = [...prev]

        // Calculate cumulative sizes before this handle
        let cumulative = 0
        for (let i = 0; i < handleIndex; i++) {
          cumulative += next[i]
        }

        const leftPanel = panels[handleIndex]
        const rightPanel = panels[handleIndex + 1]
        const combined = next[handleIndex] + next[handleIndex + 1]

        let leftSize = percentage - cumulative
        let rightSize = combined - leftSize

        // Apply constraints
        const leftMin = leftPanel.minSize ?? 10
        const leftMax = leftPanel.maxSize ?? 90
        const rightMin = rightPanel.minSize ?? 10
        const rightMax = rightPanel.maxSize ?? 90

        leftSize = Math.max(leftMin, Math.min(leftMax, leftSize))
        rightSize = combined - leftSize
        rightSize = Math.max(rightMin, Math.min(rightMax, rightSize))
        leftSize = combined - rightSize

        next[handleIndex] = leftSize
        next[handleIndex + 1] = rightSize

        return next
      })
    },
    [direction, panels]
  )

  const startResize = React.useCallback(
    (handleIndex: number, startClientPos: number, isTouch: boolean) => {
      isDragging.current = true
      document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize'
      document.body.style.userSelect = 'none'

      const onMove = (e: MouseEvent | TouchEvent) => {
        const clientPos =
          isTouch
            ? (e as TouchEvent).touches[0]?.[direction === 'horizontal' ? 'clientX' : 'clientY']
            : (e as MouseEvent)[direction === 'horizontal' ? 'clientX' : 'clientY']
        if (clientPos !== undefined) handleResize(handleIndex, clientPos)
      }

      const onEnd = () => {
        isDragging.current = false
        document.body.style.cursor = ''
        document.body.style.userSelect = ''
        if (isTouch) {
          document.removeEventListener('touchmove', onMove)
          document.removeEventListener('touchend', onEnd)
        } else {
          document.removeEventListener('mousemove', onMove)
          document.removeEventListener('mouseup', onEnd)
        }
      }

      if (isTouch) {
        document.addEventListener('touchmove', onMove, { passive: false })
        document.addEventListener('touchend', onEnd)
      } else {
        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseup', onEnd)
      }
    },
    [direction, handleResize]
  )

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex overflow-hidden',
        direction === 'horizontal' ? 'flex-row h-full' : 'flex-col w-full',
        className
      )}
    >
      {panels.map((panel, index) => (
        <React.Fragment key={panel.id}>
          {/* Panel */}
          <div
            className={cn(
              'overflow-hidden',
              panel.className
            )}
            style={{
              [direction === 'horizontal' ? 'width' : 'height']: `${sizes[index]}%`,
              flexShrink: 0,
            }}
          >
            {panel.children}
          </div>

          {/* Handle between panels */}
          {index < panels.length - 1 && (
            <ResizeHandle
              direction={direction}
              onMouseDown={(e) => {
                e.preventDefault()
                const pos = direction === 'horizontal' ? e.clientX : e.clientY
                startResize(index, pos, false)
              }}
              onTouchStart={(e) => {
                const pos = direction === 'horizontal'
                  ? e.touches[0].clientX
                  : e.touches[0].clientY
                startResize(index, pos, true)
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export { ResizablePanels, ResizeHandle }
