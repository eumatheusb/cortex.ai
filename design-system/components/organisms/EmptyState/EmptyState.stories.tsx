'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from './EmptyState'
import { Users, FileText, SearchX, Plus, Download } from 'lucide-react'

const meta: Meta<typeof EmptyState> = {
  title: 'Organisms/EmptyState',
  component: EmptyState,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  render: () => (
    <div className="w-96 bg-dusk rounded-xl p-8">
      <EmptyState
        icon={<Users size={32} />}
        title="Nenhum lead encontrado"
        description="Adicione seu primeiro lead ou ajuste os filtros para ver resultados."
        actions={[{ label: 'Adicionar lead', variant: 'primary', icon: <Plus size={16} />, onClick: () => {} }]}
      />
    </div>
  ),
}

export const SemResultados: Story = {
  render: () => (
    <div className="w-96 bg-dusk rounded-xl p-8">
      <EmptyState
        icon={<SearchX size={32} />}
        title="Sem resultados"
        description="Nenhum resultado para 'Dr. João'. Tente outro termo."
        size="sm"
      />
    </div>
  ),
}

export const ComMultiplosActions: Story = {
  render: () => (
    <div className="w-96 bg-dusk rounded-xl p-8">
      <EmptyState
        icon={<FileText size={32} />}
        title="Nenhum relatório gerado"
        description="Gere seu primeiro relatório de performance."
        actions={[
          { label: 'Gerar relatório', variant: 'primary', icon: <Plus size={16} />, onClick: () => {} },
          { label: 'Ver exemplos', variant: 'secondary', href: '#' },
        ]}
      />
    </div>
  ),
  name: 'Com múltiplos actions',
}

export const Tamanhos: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[500px]">
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size} className="bg-dusk rounded-xl p-4 border border-steel">
          <EmptyState
            icon={<Users size={size === 'sm' ? 20 : size === 'md' ? 28 : 36} />}
            title={`EmptyState ${size}`}
            description="Exemplo de empty state."
            size={size}
            actions={[{ label: 'Ação', onClick: () => {} }]}
          />
        </div>
      ))}
    </div>
  ),
}
