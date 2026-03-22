import type { Meta, StoryObj } from '@storybook/react'
import { FunnelChart } from './FunnelChart'

const meta: Meta<typeof FunnelChart> = {
  title: 'Organisms/Charts/FunnelChart',
  component: FunnelChart,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj<typeof FunnelChart>

export const FunilDeConversao: Story = {
  args: {
    steps: [
      { label: 'Lead', value: 1000 },
      { label: 'Contato', value: 650 },
      { label: 'Agendamento', value: 320 },
      { label: 'Compareceu', value: 240 },
      { label: 'Fechou', value: 180 },
    ],
  },
}

export const CoresCustomizadas: Story = {
  args: {
    steps: [
      { label: 'Visitantes', value: 5000, color: 'var(--color-signal)' },
      { label: 'Leads', value: 1200, color: '#7B96FB' },
      { label: 'Qualificados', value: 480, color: 'var(--color-warning)' },
      { label: 'Propostas', value: 192, color: '#F59E0B' },
      { label: 'Clientes', value: 96, color: 'var(--color-success)' },
    ],
  },
}

export const SemConversao: Story = {
  args: {
    steps: [
      { label: 'Lead', value: 1000 },
      { label: 'Contato', value: 650 },
      { label: 'Agendamento', value: 320 },
      { label: 'Compareceu', value: 240 },
      { label: 'Fechou', value: 180 },
    ],
    showConversion: false,
  },
}
