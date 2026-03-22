import type { Meta, StoryObj } from '@storybook/react'
import { KanbanBoard } from './KanbanBoard'

const meta: Meta<typeof KanbanBoard> = {
  title: 'Organisms/KanbanBoard',
  component: KanbanBoard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj<typeof KanbanBoard>

export const PipelineDeLeads: Story = {
  args: {
    columns: [
      {
        id: 'novo',
        title: 'Novo',
        color: 'var(--color-signal)',
        cards: [
          {
            id: 'l1',
            title: 'Maria Silva',
            subtitle: 'Meta Ads - Implante',
            value: 'R$ 8.500',
            initials: 'MS',
            tags: ['Implante'],
          },
          {
            id: 'l2',
            title: 'Joao Santos',
            subtitle: 'Google Ads - Ortodontia',
            value: 'R$ 12.000',
            initials: 'JS',
            tags: ['Ortodontia'],
          },
          {
            id: 'l3',
            title: 'Ana Costa',
            subtitle: 'Indicacao',
            value: 'R$ 5.200',
            initials: 'AC',
          },
        ],
      },
      {
        id: 'contato',
        title: 'Contato',
        color: '#7B96FB',
        cards: [
          {
            id: 'l4',
            title: 'Pedro Oliveira',
            subtitle: 'WhatsApp respondido',
            value: 'R$ 6.800',
            initials: 'PO',
            tags: ['Lentes'],
          },
          {
            id: 'l5',
            title: 'Lucia Ferreira',
            subtitle: 'Ligacao realizada',
            value: 'R$ 3.500',
            initials: 'LF',
          },
        ],
      },
      {
        id: 'agendado',
        title: 'Agendado',
        color: 'var(--color-warning)',
        cards: [
          {
            id: 'l6',
            title: 'Carlos Mendes',
            subtitle: 'Consulta 25/03 as 10h',
            value: 'R$ 15.000',
            initials: 'CM',
            tags: ['Protese'],
          },
        ],
      },
      {
        id: 'compareceu',
        title: 'Compareceu',
        color: '#F59E0B',
        cards: [
          {
            id: 'l7',
            title: 'Fernanda Lima',
            subtitle: 'Avaliacao concluida',
            value: 'R$ 9.200',
            initials: 'FL',
            tags: ['Implante'],
          },
          {
            id: 'l8',
            title: 'Roberto Alves',
            subtitle: 'Orcamento enviado',
            value: 'R$ 7.400',
            initials: 'RA',
          },
        ],
      },
      {
        id: 'fechou',
        title: 'Fechou',
        color: 'var(--color-success)',
        cards: [
          {
            id: 'l9',
            title: 'Juliana Rocha',
            subtitle: 'Contrato assinado',
            value: 'R$ 11.000',
            initials: 'JR',
            tags: ['Ortodontia'],
          },
        ],
      },
      {
        id: 'perdido',
        title: 'Perdido',
        color: 'var(--color-error)',
        cards: [
          {
            id: 'l10',
            title: 'Marcos Dias',
            subtitle: 'Nao retornou contato',
            value: 'R$ 4.000',
            initials: 'MD',
          },
        ],
      },
    ],
  },
}

export const Loading: Story = {
  args: {
    columns: [],
    loading: true,
  },
}

export const ColunasVazias: Story = {
  args: {
    columns: [
      { id: 'novo', title: 'Novo', color: 'var(--color-signal)', cards: [] },
      { id: 'contato', title: 'Contato', color: '#7B96FB', cards: [] },
      { id: 'agendado', title: 'Agendado', color: 'var(--color-warning)', cards: [] },
    ],
  },
}
