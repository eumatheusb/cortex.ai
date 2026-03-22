import type { Meta, StoryObj } from '@storybook/react'
import { PieChart } from './PieChart'

const meta: Meta<typeof PieChart> = {
  title: 'Organisms/Charts/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj<typeof PieChart>

const origemLeads = [
  { name: 'Meta Ads', value: 450 },
  { name: 'Google Ads', value: 300 },
  { name: 'Indicacao', value: 150 },
  { name: 'Organico', value: 100 },
]

export const OrigemDosLeads: Story = {
  args: {
    data: origemLeads,
    variant: 'donut',
    height: 420,
  },
}

export const PieCompleto: Story = {
  args: {
    data: origemLeads,
    variant: 'pie',
    labelPosition: 'internal',
    height: 420,
  },
}

export const SemLegenda: Story = {
  args: {
    data: origemLeads,
    variant: 'donut',
    showLegend: false,
    labelPosition: 'external',
    height: 350,
  },
}

const procedimentos = [
  { name: 'Implante', value: 35 },
  { name: 'Ortodontia', value: 25 },
  { name: 'Clareamento', value: 18 },
  { name: 'Protese', value: 12 },
  { name: 'Lentes', value: 7 },
  { name: 'Outros', value: 3 },
]

export const ProcedimentosRealizados: Story = {
  args: {
    data: procedimentos,
    variant: 'donut',
    height: 420,
    formatValue: (v: number) => `${v} proc.`,
  },
}
