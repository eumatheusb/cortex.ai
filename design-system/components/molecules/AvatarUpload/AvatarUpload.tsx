'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, ZoomIn, ZoomOut, Upload, User } from 'lucide-react'
import { cn } from '../../utils'

export interface AvatarUploadProps {
  value?:        string
  fallbackInitials?: string
  onUpload?:     (file: File) => void | Promise<void>
  onRemove?:     () => void
  maxSizeMB?:    number
  acceptedTypes?: string[]
  loading?:      boolean
  disabled?:     boolean
  size?:         'sm' | 'md' | 'lg'
  className?:    string
}

const SIZE_MAP = {
  sm: { container: 'h-16 w-16', icon: 14, text: 'text-sm' },
  md: { container: 'h-24 w-24', icon: 20, text: 'text-lg' },
  lg: { container: 'h-32 w-32', icon: 28, text: 'text-2xl' },
}

const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp']

function AvatarUpload({
  value,
  fallbackInitials,
  onUpload,
  onRemove,
  maxSizeMB = 5,
  acceptedTypes = ACCEPTED_TYPES,
  loading = false,
  disabled = false,
  size = 'md',
  className,
}: AvatarUploadProps) {
  const [preview, setPreview] = React.useState<string | null>(value || null)
  const [zoom, setZoom] = React.useState(1)
  const [error, setError] = React.useState<string | null>(null)
  const [isUploading, setIsUploading] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const sizeConfig = SIZE_MAP[size]

  React.useEffect(() => {
    setPreview(value || null)
  }, [value])

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setError(null)

    if (!acceptedTypes.includes(file.type)) {
      setError('Formato nao suportado. Use JPG, PNG ou WebP.')
      return
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`Arquivo muito grande. Maximo ${maxSizeMB}MB.`)
      return
    }

    const reader = new FileReader()
    reader.onload = () => setPreview(reader.result as string)
    reader.readAsDataURL(file)

    if (onUpload) {
      setIsUploading(true)
      Promise.resolve(onUpload(file)).finally(() => setIsUploading(false))
    }

    if (inputRef.current) inputRef.current.value = ''
  }

  function handleRemove() {
    setPreview(null)
    setZoom(1)
    setError(null)
    onRemove?.()
  }

  const showLoading = loading || isUploading

  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      {/* Avatar container */}
      <div className="relative group">
        <div
          className={cn(
            'relative overflow-hidden rounded-full border-2 border-steel transition-all',
            'flex items-center justify-center bg-ink',
            sizeConfig.container,
            !disabled && 'cursor-pointer hover:border-signal/40',
            showLoading && 'animate-pulse'
          )}
          onClick={() => !disabled && !showLoading && inputRef.current?.click()}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-label="Upload de foto"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              if (!disabled && !showLoading) inputRef.current?.click()
            }
          }}
        >
          {preview ? (
            <img
              src={preview}
              alt="Avatar"
              className="h-full w-full object-cover"
              style={{ transform: `scale(${zoom})` }}
            />
          ) : fallbackInitials ? (
            <span className={cn('font-display font-bold text-signal', sizeConfig.text)}>
              {fallbackInitials}
            </span>
          ) : (
            <User size={sizeConfig.icon} className="text-mist" />
          )}

          {/* Overlay */}
          {!disabled && !showLoading && (
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={sizeConfig.icon} className="text-white" />
            </div>
          )}

          {/* Loading spinner */}
          {showLoading && (
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-void/70">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="h-6 w-6 rounded-full border-2 border-signal border-t-transparent"
              />
            </div>
          )}
        </div>

        {/* Remove button */}
        <AnimatePresence>
          {preview && !disabled && !showLoading && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={handleRemove}
              className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-error text-white shadow-sm hover:bg-error/80 transition-colors"
              aria-label="Remover foto"
            >
              <X size={12} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Zoom control */}
      {preview && !disabled && (
        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoom((z) => Math.max(1, z - 0.1))}
            className="rounded p-1 text-mist hover:bg-steel hover:text-white transition-colors"
            aria-label="Reduzir zoom"
          >
            <ZoomOut size={14} />
          </button>
          <input
            type="range"
            min="1"
            max="2"
            step="0.05"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            className="h-1 w-20 appearance-none rounded-full bg-steel accent-signal"
            aria-label="Ajustar zoom"
          />
          <button
            onClick={() => setZoom((z) => Math.min(2, z + 0.1))}
            className="rounded p-1 text-mist hover:bg-steel hover:text-white transition-colors"
            aria-label="Aumentar zoom"
          >
            <ZoomIn size={14} />
          </button>
        </div>
      )}

      {/* Upload button (alternative) */}
      {!preview && !disabled && (
        <button
          onClick={() => inputRef.current?.click()}
          className="flex items-center gap-1.5 rounded-lg border border-steel px-3 py-1.5 text-xs font-medium text-mist hover:bg-steel hover:text-white transition-colors"
        >
          <Upload size={12} />
          Escolher foto
        </button>
      )}

      {/* Hidden input */}
      <input
        ref={inputRef}
        type="file"
        accept={acceptedTypes.join(',')}
        onChange={handleFileSelect}
        className="sr-only"
        aria-hidden="true"
      />

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-error"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export { AvatarUpload }
