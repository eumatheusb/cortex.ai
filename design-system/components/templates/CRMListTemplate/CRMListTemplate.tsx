'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Plus, Download, Filter } from 'lucide-react'
import { cn } from '../../utils'
import { PageHeader }        from '../../organisms/PageHeader/PageHeader'
import { DataTable, type DataTableProps } from '../../organisms/DataTable/DataTable'
import { Button }            from '../../atoms/Button/Button'
import { Badge }             from '../../atoms/Badge/Badge'
import { Alert }             from '../../molecules/Alert/Alert'
import { type BreadcrumbItem } from '../../molecules/Breadcrumb/Breadcrumb'

export interface CRMListTemplateProps<TData> {
  // Header
  title:        string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  badge?:       string

  // Table
  table: DataTableProps<TData>

  // Actions
  onAdd?:      () => void
  addLabel?:   string
  onExport?:   () => void
  onFilter?:   () => void
  filterActive?: boolean

  // Alerts
  alert?: {
    variant: 'info' | 'success' | 'warning' | 'error'
    title?:  string
    message: string
  }

  className?: string
}

function CRMListTemplate<TData>({
  title,
  description,
  breadcrumbs,
  badge,
  table,
  onAdd,
  addLabel = 'Adicionar',
  onExport,
  onFilter,
  filterActive,
  alert,
  className,
}: CRMListTemplateProps<TData>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
      className={cn('flex flex-col gap-6', className)}
    >
      {/* Alert */}
      {alert && (
        <Alert variant={alert.variant} title={alert.title} dismissible>
          {alert.message}
        </Alert>
      )}

      {/* Page Header */}
      <PageHeader
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        badge={badge}
        actions={
          <div className="flex items-center gap-2">
            {onFilter && (
              <Button
                variant={filterActive ? 'outline' : 'ghost'}
                size="md"
                leftIcon={<Filter size={15} />}
                onClick={onFilter}
              >
                Filtros
                {filterActive && (
                  <Badge variant="primary" size="sm" className="ml-1">
                    Ativo
                  </Badge>
                )}
              </Button>
            )}
            {onExport && (
              <Button
                variant="secondary"
                size="md"
                leftIcon={<Download size={15} />}
                onClick={onExport}
              >
                Exportar
              </Button>
            )}
            {onAdd && (
              <Button
                variant="primary"
                size="md"
                leftIcon={<Plus size={15} />}
                onClick={onAdd}
              >
                {addLabel}
              </Button>
            )}
          </div>
        }
      />

      {/* Table */}
      <DataTable {...table} />
    </motion.div>
  )
}

export { CRMListTemplate }
