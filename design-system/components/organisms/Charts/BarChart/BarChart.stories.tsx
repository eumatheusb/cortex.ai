import type { Meta, StoryObj } from '@storybook/react'
import { BarChart } from './BarChart'

const meta: Meta<typeof BarChart> = {
  title: 'Organisms/Charts/BarChart',
  component: BarChart,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj<typeof BarChart>

const monthlyRevenueData = [
  { mes: 'Jan', 'Oral Unic': 185000, 'Clinica Fabio': 142000, 'Unidade Centro': 98000 },
  { mes: 'Fev', 'Oral Unic': 198000, 'Clinica Fabio': 155000, 'Unidade Centro': 105000 },
  { mes: 'Mar', 'Oral Unic': 210000, 'Clinica Fabio': 148000, 'Unidade Centro': 112000 },
  { mes: 'Abr', 'Oral Unic': 195000, 'Clinica Fabio': 162000, 'Unidade Centro': 99000 },
  { mes: 'Mai', 'Oral Unic': 225000, 'Clinica Fabio': 170000, 'Unidade Centro': 118000 },
  { mes: 'Jun', 'Oral Unic': 240000, 'Clinica Fabio': 158000, 'Unidade Centro': 125000 },
  { mes: 'Jul', 'Oral Unic': 218000, 'Clinica Fabio': 165000, 'Unidade Centro': 110000 },
  { mes: 'Ago', 'Oral Unic': 232000, 'Clinica Fabio': 172000, 'Unidade Centro': 128000 },
  { mes: 'Set', 'Oral Unic': 245000, 'Clinica Fabio': 180000, 'Unidade Centro': 135000 },
  { mes: 'Out', 'Oral Unic': 258000, 'Clinica Fabio': 175000, 'Unidade Centro': 142000 },
  { mes: 'Nov', 'Oral Unic': 270000, 'Clinica Fabio': 188000, 'Unidade Centro': 148000 },
  { mes: 'Dez', 'Oral Unic': 295000, 'Clinica Fabio': 195000, 'Unidade Centro': 155000 },
]

const formatBRL = (v: number) => `R$${(v / 1000).toFixed(0)}k`

export const FaturamentoMensalPorClinica: Story = {
  args: {
    data: monthlyRevenueData,
    xAxisKey: 'mes',
    series: [
      { dataKey: 'Oral Unic', name: 'Oral Unic' },
      { dataKey: 'Clinica Fabio', name: 'Clinica Fabio' },
      { dataKey: 'Unidade Centro', name: 'Unidade Centro' },
    ],
    formatValue: formatBRL,
    height: 420,
  },
}

export const Stacked: Story = {
  args: {
    data: monthlyRevenueData,
    xAxisKey: 'mes',
    series: [
      { dataKey: 'Oral Unic', name: 'Oral Unic' },
      { dataKey: 'Clinica Fabio', name: 'Clinica Fabio' },
      { dataKey: 'Unidade Centro', name: 'Unidade Centro' },
    ],
    stacked: true,
    formatValue: formatBRL,
    height: 420,
  },
}

export const Horizontal: Story = {
  args: {
    data: monthlyRevenueData.slice(0, 6),
    xAxisKey: 'mes',
    series: [
      { dataKey: 'Oral Unic', name: 'Oral Unic' },
    ],
    layout: 'horizontal',
    formatValue: formatBRL,
    height: 350,
  },
}
