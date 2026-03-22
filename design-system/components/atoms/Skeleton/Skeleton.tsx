'use client'
import * as React from 'react'
import { cn } from '../../utils'

/* ─── Shimmer keyframe ────────────────────────────────────────────────────────
   Definido inline via <style> para não depender do pipeline do Tailwind.
   O gradiente percorre o elemento da esquerda pra direita, criando o efeito
   de "shine" que é o padrão skeleton em dark mode.
──────────────────────────────────────────────────────────────────────────── */
const shimmerStyle = `
  @keyframes cortex-shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position:  400px 0; }
  }
  .skeleton-shimmer {
    background: linear-gradient(
      90deg,
      rgba(148,163,184,0.08) 25%,
      rgba(148,163,184,0.20) 50%,
      rgba(148,163,184,0.08) 75%
    );
    background-size: 800px 100%;
    animation: cortex-shimmer 1.5s infinite linear;
  }
`

function SkeletonStyle() {
  return <style dangerouslySetInnerHTML={{ __html: shimmerStyle }} />
}

export interface SkeletonProps {
  width?: string | number
  height?: string | number
  rounded?: 'sm' | 'md' | 'lg' | 'full'
  className?: string
  style?: React.CSSProperties
}

const roundedMap = {
  sm:   'rounded-sm',
  md:   'rounded-md',
  lg:   'rounded-lg',
  full: 'rounded-full',
}

export function Skeleton({ width, height, rounded = 'md', className, style }: SkeletonProps) {
  return (
    <>
      <SkeletonStyle />
      <div
        className={cn('skeleton-shimmer', roundedMap[rounded], className)}
        style={{ width, height, ...style }}
      />
    </>
  )
}

/* ─── SkeletonText ──────────────────────────────────────────────────────────── */
export interface SkeletonTextProps {
  lines?: number
  lastLineWidth?: string
  className?: string
}

export function SkeletonText({ lines = 3, lastLineWidth = '60%', className }: SkeletonTextProps) {
  return (
    <>
      <SkeletonStyle />
      <div className={cn('flex flex-col gap-2', className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn('skeleton-shimmer rounded-md')}
            style={{
              height: 12,
              width: i === lines - 1 ? lastLineWidth : '100%',
            }}
          />
        ))}
      </div>
    </>
  )
}

/* ─── SkeletonAvatar ─────────────────────────────────────────────────────── */
export interface SkeletonAvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const avatarSizeMap: Record<NonNullable<SkeletonAvatarProps['size']>, { width: number; height: number }> = {
  xs: { width: 20,  height: 20  },
  sm: { width: 24,  height: 24  },
  md: { width: 32,  height: 32  },
  lg: { width: 40,  height: 40  },
  xl: { width: 48,  height: 48  },
}

export function SkeletonAvatar({ size = 'md', className }: SkeletonAvatarProps) {
  const { width, height } = avatarSizeMap[size]
  return (
    <>
      <SkeletonStyle />
      <div
        className={cn('skeleton-shimmer rounded-full shrink-0', className)}
        style={{ width, height }}
      />
    </>
  )
}

/* ─── SkeletonCard ───────────────────────────────────────────────────────── */
export interface SkeletonCardProps {
  hasImage?: boolean
  lines?: number
  className?: string
}

export function SkeletonCard({ hasImage = false, lines = 3, className }: SkeletonCardProps) {
  return (
    <div
      className={cn('rounded-xl border border-steel/60 p-4 flex flex-col gap-4', className)}
      style={{ background: '#0C1220' }}
    >
      <SkeletonStyle />
      {hasImage && (
        <div className="skeleton-shimmer rounded-lg" style={{ height: 160, width: '100%' }} />
      )}
      <div className="flex items-center gap-3">
        <div className="skeleton-shimmer rounded-full shrink-0" style={{ width: 32, height: 32 }} />
        <div className="flex flex-col gap-2 flex-1">
          <div className="skeleton-shimmer rounded-md" style={{ height: 14, width: '60%' }} />
          <div className="skeleton-shimmer rounded-md" style={{ height: 12, width: '40%' }} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="skeleton-shimmer rounded-md"
            style={{ height: 12, width: i === lines - 1 ? '60%' : '100%' }}
          />
        ))}
      </div>
    </div>
  )
}
