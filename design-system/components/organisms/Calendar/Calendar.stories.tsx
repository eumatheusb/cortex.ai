import type { Meta, StoryObj } from '@storybook/react'
import { Calendar, type CalendarEvent } from './Calendar'

const meta: Meta<typeof Calendar> = {
  title: 'Organisms/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj<typeof Calendar>

function makeDate(dayOffset: number, hour: number): Date {
  const d = new Date()
  d.setDate(d.getDate() + dayOffset)
  d.setHours(hour, 0, 0, 0)
  return d
}

const agendaConsultorio: CalendarEvent[] = [
  {
    id: '1',
    title: 'Maria Silva - Implante',
    start: makeDate(0, 8),
    end: makeDate(0, 9),
    category: 'consulta',
  },
  {
    id: '2',
    title: 'Joao Santos - Avaliacao',
    start: makeDate(0, 10),
    end: makeDate(0, 11),
    category: 'consulta',
  },
  {
    id: '3',
    title: 'Ana Costa - Retorno',
    start: makeDate(0, 14),
    end: makeDate(0, 15),
    category: 'retorno',
  },
  {
    id: '4',
    title: 'Pedro Oliveira - Urgencia',
    start: makeDate(1, 9),
    end: makeDate(1, 10),
    category: 'urgencia',
  },
  {
    id: '5',
    title: 'Lucia Ferreira - Clareamento',
    start: makeDate(1, 11),
    end: makeDate(1, 12),
    category: 'consulta',
  },
  {
    id: '6',
    title: 'Carlos Mendes - Ortodontia',
    start: makeDate(2, 8),
    end: makeDate(2, 9),
    category: 'consulta',
  },
  {
    id: '7',
    title: 'Fernanda Lima - Retorno',
    start: makeDate(2, 15),
    end: makeDate(2, 16),
    category: 'retorno',
  },
  {
    id: '8',
    title: 'Roberto Alves - Protese',
    start: makeDate(3, 10),
    end: makeDate(3, 12),
    category: 'consulta',
  },
  {
    id: '9',
    title: 'Juliana Rocha - Lentes',
    start: makeDate(4, 9),
    end: makeDate(4, 10),
    category: 'consulta',
  },
  {
    id: '10',
    title: 'Almoco - Bloqueio',
    start: makeDate(0, 12),
    end: makeDate(0, 13),
    category: 'bloqueio',
  },
]

export const AgendaConsultorio: Story = {
  args: {
    events: agendaConsultorio,
    view: 'month',
  },
}

export const VistaSemanall: Story = {
  args: {
    events: agendaConsultorio,
    view: 'week',
  },
}

export const VistaDiaria: Story = {
  args: {
    events: agendaConsultorio,
    view: 'day',
  },
}

export const Vazio: Story = {
  args: {
    events: [],
    view: 'month',
  },
}
