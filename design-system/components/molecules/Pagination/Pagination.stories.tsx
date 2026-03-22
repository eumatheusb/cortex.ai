import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Pagination } from './Pagination'

const meta: Meta = {
  title: 'Molecules/Pagination',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

function PaginationDemo({ totalPages = 10 }: { totalPages?: number }) {
  const [page, setPage] = React.useState(1)
  return (
    <div className="flex flex-col items-center gap-3">
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
      <p className="text-xs text-mist">Página {page} de {totalPages}</p>
    </div>
  )
}

export const Default: StoryObj = {
  render: () => <PaginationDemo />,
}

export const PoucasPaginas: StoryObj = {
  render: () => <PaginationDemo totalPages={4} />,
  name: 'Poucas páginas',
}

export const MuitasPaginas: StoryObj = {
  render: () => <PaginationDemo totalPages={50} />,
  name: 'Muitas páginas',
}
