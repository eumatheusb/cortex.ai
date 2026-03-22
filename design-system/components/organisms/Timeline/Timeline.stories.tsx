import type { Meta, StoryObj } from '@storybook/react'
import {
  UserPlus,
  ClipboardCheck,
  FileText,
  Stethoscope,
  CalendarCheck,
} from 'lucide-react'
import { Timeline } from './Timeline'

const meta: Meta<typeof Timeline> = {
  title: 'Organisms/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj<typeof Timeline>

export const HistoricoPaciente: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Primeira consulta',
        description: 'Paciente Maria Silva realizou primeira consulta. Queixa principal: dor no dente 36. Radiografia solicitada.',
        date: '15/01/2026 - 09:00',
        icon: <UserPlus size={16} />,
        type: 'signal',
      },
      {
        id: '2',
        title: 'Avaliacao completa',
        description: 'Avaliacao clinica e radiografica concluida. Diagnostico: necessidade de implante no elemento 36.',
        date: '22/01/2026 - 10:30',
        icon: <ClipboardCheck size={16} />,
        type: 'warning',
      },
      {
        id: '3',
        title: 'Plano de tratamento aprovado',
        description: 'Paciente aprovou plano de tratamento. Valor total: R$ 8.500. Pagamento em 10x no cartao.',
        date: '29/01/2026 - 14:00',
        icon: <FileText size={16} />,
        type: 'success',
      },
      {
        id: '4',
        title: 'Procedimento realizado',
        description: 'Implante do elemento 36 realizado com sucesso. Sem intercorrencias. Medicacao prescrita.',
        date: '12/02/2026 - 08:00',
        icon: <Stethoscope size={16} />,
        type: 'success',
      },
      {
        id: '5',
        title: 'Retorno agendado',
        description: 'Retorno para acompanhamento agendado para 30 dias. Verificar osseointegrracao.',
        date: '12/03/2026 - 09:00',
        icon: <CalendarCheck size={16} />,
        type: 'default',
      },
    ],
    alternating: false,
  },
}

export const AlternandoLados: Story = {
  args: {
    ...HistoricoPaciente.args,
    alternating: true,
  },
}

export const Loading: Story = {
  args: {
    items: [],
    loading: true,
  },
}
