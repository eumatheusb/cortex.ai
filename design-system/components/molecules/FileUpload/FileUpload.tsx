'use client'
import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, X, FileImage, FileText, CheckCircle2, AlertCircle } from 'lucide-react'
import { cn } from '../../utils'

export interface FileItem {
  id: string
  file: File
  preview?: string
  progress: number
  status: 'pending' | 'uploading' | 'done' | 'error'
  error?: string
}

export interface FileUploadProps {
  value?: FileItem[]
  onChange?: (files: FileItem[]) => void
  onUpload?: (file: File) => Promise<void>
  accept?: string
  maxFiles?: number
  maxSizeMB?: number
  multiple?: boolean
  disabled?: boolean
  label?: string
  hint?: string
  error?: string
  className?: string
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1048576).toFixed(1)} MB`
}

function generateId(): string {
  return Math.random().toString(36).slice(2, 10)
}

function isImage(file: File): boolean {
  return file.type.startsWith('image/')
}

export function FileUpload({
  value: controlledValue,
  onChange,
  onUpload,
  accept,
  maxFiles = 10,
  maxSizeMB = 25,
  multiple = true,
  disabled = false,
  label,
  hint,
  error,
  className,
}: FileUploadProps) {
  const [internalFiles, setInternalFiles] = React.useState<FileItem[]>([])
  const files = controlledValue ?? internalFiles
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const setFiles = React.useCallback(
    (next: FileItem[] | ((prev: FileItem[]) => FileItem[])) => {
      if (controlledValue === undefined) {
        setInternalFiles(next)
      }
      if (typeof next === 'function') {
        onChange?.(next(files))
      } else {
        onChange?.(next)
      }
    },
    [controlledValue, files, onChange],
  )

  const processFiles = React.useCallback(
    async (incoming: File[]) => {
      const maxBytes = maxSizeMB * 1024 * 1024
      const remaining = maxFiles - files.length

      const toAdd = incoming.slice(0, remaining).map((file): FileItem => {
        if (file.size > maxBytes) {
          return {
            id: generateId(),
            file,
            progress: 0,
            status: 'error',
            error: `Arquivo excede ${maxSizeMB}MB`,
          }
        }
        return {
          id: generateId(),
          file,
          preview: isImage(file) ? URL.createObjectURL(file) : undefined,
          progress: 0,
          status: 'pending',
        }
      })

      setFiles((prev) => [...prev, ...toAdd])

      for (const item of toAdd) {
        if (item.status === 'error') continue
        if (onUpload) {
          setFiles((prev) =>
            prev.map((f) => (f.id === item.id ? { ...f, status: 'uploading', progress: 30 } : f)),
          )
          try {
            await onUpload(item.file)
            setFiles((prev) =>
              prev.map((f) => (f.id === item.id ? { ...f, status: 'done', progress: 100 } : f)),
            )
          } catch {
            setFiles((prev) =>
              prev.map((f) =>
                f.id === item.id ? { ...f, status: 'error', error: 'Falha no upload' } : f,
              ),
            )
          }
        } else {
          setFiles((prev) =>
            prev.map((f) => (f.id === item.id ? { ...f, status: 'done', progress: 100 } : f)),
          )
        }
      }
    },
    [files.length, maxFiles, maxSizeMB, onUpload, setFiles],
  )

  const handleDrop = React.useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      if (disabled) return
      const dropped = Array.from(e.dataTransfer.files)
      processFiles(dropped)
    },
    [disabled, processFiles],
  )

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = Array.from(e.target.files ?? [])
      processFiles(selected)
      if (inputRef.current) inputRef.current.value = ''
    },
    [processFiles],
  )

  const removeFile = React.useCallback(
    (id: string) => {
      setFiles((prev) => {
        const removed = prev.find((f) => f.id === id)
        if (removed?.preview) URL.revokeObjectURL(removed.preview)
        return prev.filter((f) => f.id !== id)
      })
    },
    [setFiles],
  )

  return (
    <div className={cn('flex flex-col gap-2 w-full', className)}>
      {label && (
        <span className="text-xs font-medium font-display text-mist uppercase tracking-wide">
          {label}
        </span>
      )}

      <div
        onDragOver={(e) => {
          e.preventDefault()
          if (!disabled) setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current?.click()}
        className={cn(
          'relative flex flex-col items-center justify-center gap-3 p-8',
          'border-2 border-dashed rounded-lg cursor-pointer',
          'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
          isDragging
            ? 'border-signal bg-signal/5'
            : 'border-steel hover:border-mist/40 hover:bg-ink/50',
          error && 'border-error',
          disabled && 'opacity-40 pointer-events-none cursor-not-allowed',
        )}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label="Area de upload de arquivos"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            inputRef.current?.click()
          }
        }}
      >
        <motion.div
          animate={isDragging ? { scale: 1.1, y: -4 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Upload className={cn('h-8 w-8', isDragging ? 'text-signal' : 'text-mist/40')} />
        </motion.div>

        <div className="text-center">
          <p className="text-sm text-mist">
            <span className="text-signal font-medium">Clique para selecionar</span> ou arraste arquivos
          </p>
          <p className="text-xs text-ash mt-1">
            {accept ? `Formatos: ${accept}` : 'Qualquer formato'} | Max {maxSizeMB}MB
            {maxFiles < 10 && ` | Max ${maxFiles} arquivo${maxFiles > 1 ? 's' : ''}`}
          </p>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleInputChange}
          className="sr-only"
          tabIndex={-1}
        />
      </div>

      {(hint || error) && (
        <p className={cn('text-xs', error ? 'text-error' : 'text-mist')}>{error ?? hint}</p>
      )}

      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col gap-2"
          >
            {files.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex items-center gap-3 p-3 bg-ink border border-steel rounded-lg"
              >
                {item.preview ? (
                  <img
                    src={item.preview}
                    alt={item.file.name}
                    className="h-10 w-10 rounded object-cover shrink-0"
                  />
                ) : (
                  <div className="h-10 w-10 rounded bg-dusk flex items-center justify-center shrink-0">
                    {isImage(item.file) ? (
                      <FileImage className="h-5 w-5 text-mist/60" />
                    ) : (
                      <FileText className="h-5 w-5 text-mist/60" />
                    )}
                  </div>
                )}

                <div className="flex flex-col flex-1 min-w-0 gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-white truncate">{item.file.name}</span>
                    <span className="text-[10px] text-ash shrink-0">
                      {formatFileSize(item.file.size)}
                    </span>
                  </div>

                  {item.status === 'uploading' && (
                    <div className="w-full h-1 bg-steel rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-signal rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}

                  {item.status === 'error' && (
                    <span className="text-[10px] text-error flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {item.error}
                    </span>
                  )}

                  {item.status === 'done' && (
                    <span className="text-[10px] text-success flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Concluido
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile(item.id)
                  }}
                  className="shrink-0 p-1 text-mist/60 hover:text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal"
                  aria-label={`Remover ${item.file.name}`}
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
