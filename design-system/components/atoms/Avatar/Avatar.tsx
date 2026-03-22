import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'

const avatarVariants = cva(
  'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full select-none',
  {
    variants: {
      size: {
        xs: 'h-5  w-5  text-[8px]',
        sm: 'h-6  w-6  text-[10px]',
        md: 'h-8  w-8  text-xs',
        lg: 'h-10 w-10 text-sm',
        xl: 'h-12 w-12 text-base',
      },
    },
    defaultVariants: { size: 'md' },
  }
)

const statusDotVariants = cva(
  'absolute bottom-0 right-0 rounded-full border-2 border-void',
  {
    variants: {
      status: {
        online:  'bg-success',
        offline: 'bg-ash',
        busy:    'bg-warning',
        away:    'bg-warning/60',
      },
      size: {
        xs: 'h-1   w-1',
        sm: 'h-1.5 w-1.5',
        md: 'h-2   w-2',
        lg: 'h-2.5 w-2.5',
        xl: 'h-3   w-3',
      },
    },
    defaultVariants: { size: 'md' },
  }
)

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function getAvatarColor(name: string): string {
  const colors = [
    'from-signal to-signal-dark',
    'from-success/80 to-success',
    'from-warning/80 to-warning',
    'from-error/80 to-error',
    'from-mist/80 to-ash',
  ]
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length]
}

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?:    string
  alt?:    string
  name?:   string
  status?: 'online' | 'offline' | 'busy' | 'away'
}

function Avatar({ className, size, src, alt, name, status, ...props }: AvatarProps) {
  const [imgError, setImgError] = React.useState(false)
  const showImage    = src && !imgError
  const showInitials = !showImage && name
  const gradientClass = name ? getAvatarColor(name) : 'from-dusk to-steel'

  return (
    <div
      role="img"
      aria-label={alt ?? name ?? 'Avatar'}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt ?? name ?? ''}
          className="h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span
          className={cn(
            'flex h-full w-full items-center justify-center bg-gradient-to-br font-display font-bold text-white',
            gradientClass
          )}
        >
          {showInitials ? getInitials(name!) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[55%] w-[55%] text-mist">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          )}
        </span>
      )}

      {status && (
        <span
          className={cn(statusDotVariants({ status, size }))}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  )
}

function AvatarGroup({
  avatars,
  max = 4,
  size = 'md',
}: {
  avatars: AvatarProps[]
  max?: number
  size?: AvatarProps['size']
}) {
  const visible  = avatars.slice(0, max)
  const overflow = avatars.length - max

  return (
    <div className="flex -space-x-2">
      {visible.map((avatar, i) => (
        <Avatar
          key={i}
          {...avatar}
          size={size}
          className={cn('ring-2 ring-void', avatar.className)}
        />
      ))}
      {overflow > 0 && (
        <div
          className={cn(
            avatarVariants({ size }),
            'bg-dusk border border-steel ring-2 ring-void font-display font-semibold text-mist'
          )}
        >
          +{overflow}
        </div>
      )}
    </div>
  )
}

export { Avatar, AvatarGroup }
