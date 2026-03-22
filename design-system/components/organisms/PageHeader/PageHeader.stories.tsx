'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { PageHeader } from './PageHeader'
import { Button } from '../../atoms/Button/Button'
import { Plus, Download } from 'lucide-react'

const meta: Meta<typeof PageHeader> = {
  title: 'Organisms/PageHeader',
  component: PageHeader,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PageHeader>

export const Default: Story = {
  render: () => (
    <div className="bg-void p-6 rounded-xl">
      <PageHeader
        title="Leads"
        description="Gerencie todos os leads da sua carteira."
        badge="284 ativos"
        breadcrumbs={[{ label: 'CRM' }, { label: 'Leads' }]}
        actions={
          <div className="flex gap-2">
            <Button variant="secondary" leftIcon={<Download size={15} />}>Exportar</Button>
            <Button variant="primary" leftIcon={<Plus size={15} />}>Novo lead</Button>
          </div>
        }
      />
    </div>
  ),
}

export const Live: Story = {
  render: () => (
    <div className="bg-void p-6 rounded-xl">
      <PageHeader
        title="Dashboard"
        description="Visão geral de performance da sua clínica."
        badge="Ao vivo"
        badgeVariant="success"
        actions={<Button variant="primary">Ver relatório</Button>}
      />
    </div>
  ),
}
