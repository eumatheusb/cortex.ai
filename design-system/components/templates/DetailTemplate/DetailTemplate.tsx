'use client'

import * as React from 'react'
import { motion, type Variants } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { cn } from '../../utils'
import { Button }     from '../../atoms/Button/Button'
import { Badge, type BadgeProps } from '../../atoms/Badge/Badge'
import { Avatar }     from '../../atoms/Avatar/Avatar'
import { Spinner }    from '../../atoms/Spinner/Spinner'
import { type BreadcrumbItem } from '../../molecules/Breadcrumb/Breadcrumb'
import { Breadcrumb } from '../../molecules/Breadcrumb/Breadcrumb'

export interface DetailSection {
  id:        string
  title:     string
  children:  React.ReactNode
  className?: string
}

export interface DetailTemplateProps {
  // Identity
  title:       string
  subtitle?:   string
  avatarName?: string
  avatarSrc?:  string
  status?:     string
  statusVariant?: BadgeProps['variant']

  // Navigation
  breadcrumbs?: BreadcrumbItem[]
  onBack?:      () => void

  // Layout
  sections:    DetailSection[]
  sidebar?:    React.ReactNode
  actions?:    React.ReactNode
  loading?:    boolean
  className?:  string
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.25, delay: i * 0.06, ease: [0, 0, 0.2, 1] as const },
  }),
}

function DetailTemplate({
  title,
  subtitle,
  avatarName,
  avatarSrc,
  status,
  statusVariant = 'primary',
  breadcrumbs,
  onBack,
  sections,
  sidebar,
  actions,
  loading,
  className,
}: DetailTemplateProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={cn('flex flex-col gap-6', className)}
    >
      {/* Nav */}
      <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3">
        {onBack && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            aria-label="Voltar"
          >
            <ArrowLeft size={18} />
          </Button>
        )}
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
      </motion.div>

      {/* Profile header */}
      <motion.div
        variants={fadeUp}
        custom={1}
        className="flex items-start justify-between gap-4 flex-wrap"
      >
        <div className="flex items-center gap-4">
          {(avatarName || avatarSrc) && (
            <Avatar name={avatarName} src={avatarSrc} size="xl" />
          )}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="font-display font-bold text-2xl text-white leading-tight">
                {title}
              </h1>
              {status && (
                <Badge variant={statusVariant} size="md" dot>
                  {status}
                </Badge>
              )}
            </div>
            {subtitle && (
              <p className="text-sm text-mist">{subtitle}</p>
            )}
          </div>
        </div>

        {actions && (
          <div className="flex items-center gap-2 shrink-0">
            {actions}
          </div>
        )}
      </motion.div>

      {/* Body */}
      <div className={cn('grid gap-4', sidebar ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1')}>
        {/* Main sections */}
        <div className={cn('flex flex-col gap-4', sidebar ? 'lg:col-span-2' : '')}>
          {sections.map((section, i) => (
            <motion.section
              key={section.id}
              variants={fadeUp}
              custom={i + 2}
              className={cn(
                'rounded-xl border border-steel bg-dusk p-5',
                section.className
              )}
            >
              <h2 className="font-display font-semibold text-sm text-mist uppercase tracking-wider mb-4">
                {section.title}
              </h2>
              {section.children}
            </motion.section>
          ))}
        </div>

        {/* Sidebar */}
        {sidebar && (
          <motion.aside
            variants={fadeUp}
            custom={2}
            className="flex flex-col gap-4"
          >
            {sidebar}
          </motion.aside>
        )}
      </div>
    </motion.div>
  )
}

export { DetailTemplate }
