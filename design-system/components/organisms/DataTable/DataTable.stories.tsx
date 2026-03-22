'use client'

import type { Meta, StoryObj } from '@storybook/react'
import type { ColumnDef } from '@tanstack/react-table'
import { DataTable } from './DataTable'
import { Badge } from '../../atoms/Badge/Badge'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { Button } from '../../atoms/Button/Button'

interface Lead {
  id:      string
  name:    string
  clinic:  string
  city:    string
  value:   number
  status:  'Novo' | 'Qualificado' | 'Proposta' | 'Fechado' | 'Perdido'
  source:  string
}

const leads: Lead[] = [
  { id: '001', name: 'Dra. Camila Rocha',   clinic: 'OdontoVida SP',  city: 'São Paulo',      value: 3200, status: 'Fechado',     source: 'Meta Ads'   },
  { id: '002', name: 'Dr. Rodrigo Lima',    clinic: 'Sorriso Total',  city: 'Campinas',       value: 2800, status: 'Proposta',    source: 'Google Ads' },
  { id: '003', name: 'Dra. Fernanda Costa', clinic: 'Clínica Bella',  city: 'Curitiba',       value: 5100, status: 'Qualificado', source: 'Indicação'  },
  { id: '004', name: 'Dr. Marcelo Andrade', clinic: 'DenteSã MG',     city: 'Belo Horizonte', value: 1900, status: 'Novo',        source: 'Meta Ads'   },
  { id: '005', name: 'Dra. Juliana Melo',   clinic: 'OralPro',        city: 'Recife',         value: 4200, status: 'Fechado',     source: 'Google Ads' },
  { id: '006', name: 'Dr. André Santos',    clinic: 'Smile Center',   city: 'Salvador',       value: 2100, status: 'Perdido',     source: 'Meta Ads'   },
  { id: '007', name: 'Dra. Patrícia Lima',  clinic: 'ImplantMax',     city: 'Fortaleza',      value: 6800, status: 'Proposta',    source: 'Indicação'  },
]

const statusVariant: Record<Lead['status'], any> = {
  Novo:        'default',
  Qualificado: 'primary',
  Proposta:    'warning',
  Fechado:     'success',
  Perdido:     'error',
}

const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: 'name',
    header: 'Dentista',
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar name={row.original.name} size="sm" />
        <div>
          <p className="font-medium text-white text-sm">{row.original.name}</p>
          <p className="text-xs text-mist">{row.original.clinic}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'city',
    header: 'Cidade',
    cell: ({ getValue }) => <span className="text-mist">{getValue() as string}</span>,
  },
  {
    accessorKey: 'source',
    header: 'Origem',
    cell: ({ getValue }) => <Badge variant="default" size="sm">{getValue() as string}</Badge>,
  },
  {
    accessorKey: 'value',
    header: 'Valor',
    cell: ({ getValue }) => (
      <span className="font-mono text-sm font-medium text-white">
        R${(getValue() as number).toLocaleString('pt-BR')}
      </span>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ getValue }) => {
      const s = getValue() as Lead['status']
      return <Badge variant={statusVariant[s]}>{s}</Badge>
    },
  },
  {
    id: '__actions__',
    header: '',
    cell: () => (
      <div className="flex justify-end">
        <Button variant="ghost" size="sm">Ver</Button>
      </div>
    ),
    enableSorting: false,
  },
]

const meta: Meta<typeof DataTable> = {
  title: 'Organisms/DataTable',
  component: DataTable as any,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof DataTable>

export const LeadsTable: Story = {
  render: () => (
    <DataTable<Lead>
      data={leads}
      columns={columns}
      searchable
      selectable
      searchPlaceholder="Buscar dentista ou clínica..."
      pageSize={5}
      emptyTitle="Nenhum lead encontrado"
      emptyDescription="Tente ajustar o filtro."
      onRowClick={(row) => console.log('Lead:', row)}
    />
  ),
}

export const Loading: Story = {
  render: () => (
    <DataTable<Lead>
      data={[]}
      columns={columns}
      loading
    />
  ),
}

export const Empty: Story = {
  render: () => (
    <DataTable<Lead>
      data={[]}
      columns={columns}
      emptyTitle="Nenhum lead encontrado"
      emptyDescription="Adicione seu primeiro lead para começar."
    />
  ),
}
