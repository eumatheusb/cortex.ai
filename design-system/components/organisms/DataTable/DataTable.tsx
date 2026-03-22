'use client'

import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
  type RowSelectionState,
} from '@tanstack/react-table'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpDown, ArrowUp, ArrowDown, Search } from 'lucide-react'
import { cn } from '../../utils'
import { Input } from '../../atoms/Input/Input'
import { Spinner } from '../../atoms/Spinner/Spinner'
import { Pagination } from '../../molecules/Pagination/Pagination'
import { EmptyState } from '../EmptyState/EmptyState'

export interface DataTableProps<TData> {
  data:           TData[]
  columns:        ColumnDef<TData, any>[]
  searchable?:    boolean
  searchPlaceholder?: string
  selectable?:    boolean
  loading?:       boolean
  pageSize?:      number
  className?:     string
  onRowClick?:    (row: TData) => void
  emptyTitle?:    string
  emptyDescription?: string
  toolbar?:       React.ReactNode
}

function DataTable<TData>({
  data,
  columns,
  searchable = false,
  searchPlaceholder = 'Buscar...',
  selectable = false,
  loading = false,
  pageSize = 10,
  className,
  onRowClick,
  emptyTitle = 'Nenhum resultado',
  emptyDescription = 'Tente ajustar os filtros ou adicionar novos dados.',
  toolbar,
}: DataTableProps<TData>) {
  const [sorting, setSorting]       = React.useState<SortingState>([])
  const [filters, setFilters]       = React.useState<ColumnFiltersState>([])
  const [globalFilter, setGlobal]   = React.useState('')
  const [rowSelection, setSelection] = React.useState<RowSelectionState>({})
  const [pageIndex, setPageIndex]   = React.useState(0)

  const selectionColumn: ColumnDef<TData, any> = {
    id: '__select__',
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllPageRowsSelected()}
        ref={el => { if (el) el.indeterminate = table.getIsSomePageRowsSelected() }}
        onChange={table.getToggleAllPageRowsSelectedHandler()}
        aria-label="Selecionar todos"
        className="accent-signal h-4 w-4 rounded cursor-pointer"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
        aria-label="Selecionar linha"
        className="accent-signal h-4 w-4 rounded cursor-pointer"
        onClick={e => e.stopPropagation()}
      />
    ),
    size: 44,
    enableSorting: false,
  }

  const allColumns = selectable ? [selectionColumn, ...columns] : columns

  const table = useReactTable({
    data,
    columns: allColumns,
    state: { sorting, columnFilters: filters, globalFilter, rowSelection, pagination: { pageIndex, pageSize } },
    onSortingChange:       setSorting,
    onColumnFiltersChange: setFilters,
    onGlobalFilterChange:  setGlobal,
    onRowSelectionChange:  setSelection,
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        const next = updater({ pageIndex, pageSize })
        setPageIndex(next.pageIndex)
      }
    },
    getCoreRowModel:       getCoreRowModel(),
    getSortedRowModel:     getSortedRowModel(),
    getFilteredRowModel:   getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection:    selectable,
    manualPagination:      false,
  })

  const selectedCount = Object.keys(rowSelection).length
  const totalPages    = table.getPageCount()
  const rows          = table.getRowModel().rows

  return (
    <div className={cn('flex flex-col gap-4', className)}>

      {/* Toolbar */}
      {(searchable || toolbar || selectedCount > 0) && (
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {searchable && (
              <Input
                placeholder={searchPlaceholder}
                value={globalFilter}
                onChange={e => { setGlobal(e.target.value); setPageIndex(0) }}
                leftIcon={<Search size={15} />}
                className="max-w-xs"
                aria-label="Buscar na tabela"
              />
            )}
            {selectedCount > 0 && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs text-mist font-medium whitespace-nowrap"
              >
                {selectedCount} selecionado{selectedCount > 1 ? 's' : ''}
              </motion.span>
            )}
          </div>
          {toolbar && <div className="flex items-center gap-2">{toolbar}</div>}
        </div>
      )}

      {/* Table */}
      <div className="rounded-xl border border-steel overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            {/* Head */}
            <thead className="bg-ink">
              {table.getHeaderGroups().map(hg => (
                <tr key={hg.id}>
                  {hg.headers.map(header => {
                    const canSort = header.column.getCanSort()
                    const sorted  = header.column.getIsSorted()

                    return (
                      <th
                        key={header.id}
                        style={{ width: header.getSize() !== 150 ? header.getSize() : undefined }}
                        className={cn(
                          'px-4 py-3 text-left font-display text-xs font-medium uppercase tracking-wide text-mist',
                          'border-b border-steel',
                          canSort && 'cursor-pointer select-none hover:text-white transition-colors'
                        )}
                        onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                        aria-sort={sorted === 'asc' ? 'ascending' : sorted === 'desc' ? 'descending' : undefined}
                      >
                        {header.isPlaceholder ? null : (
                          <div className="flex items-center gap-1.5">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {canSort && (
                              <span className="text-ash">
                                {sorted === 'asc'  ? <ArrowUp   size={12} /> :
                                 sorted === 'desc' ? <ArrowDown size={12} /> :
                                                    <ArrowUpDown size={12} />}
                              </span>
                            )}
                          </div>
                        )}
                      </th>
                    )
                  })}
                </tr>
              ))}
            </thead>

            {/* Body */}
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={allColumns.length} className="py-16 text-center">
                    <Spinner size="lg" className="mx-auto" />
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={allColumns.length}>
                    <EmptyState
                      title={emptyTitle}
                      description={emptyDescription}
                      size="sm"
                    />
                  </td>
                </tr>
              ) : (
                <AnimatePresence>
                  {rows.map((row, i) => (
                    <motion.tr
                      key={row.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15, delay: i * 0.02 }}
                      onClick={() => onRowClick?.(row.original)}
                      className={cn(
                        'border-b border-steel last:border-0 transition-colors duration-[150ms]',
                        row.getIsSelected() ? 'bg-signal-ghost' : 'bg-transparent hover:bg-ink',
                        onRowClick && 'cursor-pointer'
                      )}
                    >
                      {row.getVisibleCells().map(cell => (
                        <td
                          key={cell.id}
                          className="px-4 py-3.5 text-sm text-white font-body align-middle"
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </AnimatePresence>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer: count + pagination */}
      {!loading && rows.length > 0 && (
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-mist font-body">
            {table.getFilteredRowModel().rows.length} registro{table.getFilteredRowModel().rows.length !== 1 ? 's' : ''}
            {selectedCount > 0 && ` · ${selectedCount} selecionado${selectedCount > 1 ? 's' : ''}`}
          </p>
          {totalPages > 1 && (
            <Pagination
              currentPage={pageIndex + 1}
              totalPages={totalPages}
              onPageChange={p => setPageIndex(p - 1)}
            />
          )}
        </div>
      )}
    </div>
  )
}

export { DataTable }
