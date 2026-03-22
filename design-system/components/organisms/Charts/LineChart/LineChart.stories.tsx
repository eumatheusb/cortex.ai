import type { Meta, StoryObj } from '@storybook/react'
import { LineChart } from './LineChart'

const meta: Meta<typeof LineChart> = {
  title: 'Organisms/Charts/LineChart',
  component: LineChart,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj<typeof LineChart>

const leadsData = [
  { semana: 'Sem 1',  Meta: 85,  Google: 42, Organico: 18 },
  { semana: 'Sem 2',  Meta: 92,  Google: 38, Organico: 22 },
  { semana: 'Sem 3',  Meta: 78,  Google: 45, Organico: 15 },
  { semana: 'Sem 4',  Meta: 105, Google: 52, Organico: 25 },
  { semana: 'Sem 5',  Meta: 112, Google: 48, Organico: 20 },
  { semana: 'Sem 6',  Meta: 98,  Google: 55, Organico: 28 },
  { semana: 'Sem 7',  Meta: 125, Google: 60, Organico: 32 },
  { semana: 'Sem 8',  Meta: 118, Google: 58, Organico: 27 },
  { semana: 'Sem 9',  Meta: 135, Google: 65, Organico: 35 },
  { semana: 'Sem 10', Meta: 142, Google: 62, Organico: 30 },
  { semana: 'Sem 11', Meta: 155, Google: 70, Organico: 38 },
  { semana: 'Sem 12', Meta: 168, Google: 75, Organico: 42 },
]

export const LeadsPorSemana: Story = {
  args: {
    data: leadsData,
    xAxisKey: 'semana',
    series: [
      { dataKey: 'Meta', name: 'Meta Ads', filled: true },
      { dataKey: 'Google', name: 'Google Ads', filled: true },
      { dataKey: 'Organico', name: 'Organico', filled: true },
    ],
    height: 420,
  },
}

export const LinhasSimples: Story = {
  args: {
    data: leadsData,
    xAxisKey: 'semana',
    series: [
      { dataKey: 'Meta', name: 'Meta Ads' },
      { dataKey: 'Google', name: 'Google Ads' },
      { dataKey: 'Organico', name: 'Organico', dashed: true },
    ],
    height: 400,
  },
}

export const SemDots: Story = {
  args: {
    data: leadsData,
    xAxisKey: 'semana',
    series: [
      { dataKey: 'Meta', name: 'Meta Ads', showDots: false, filled: true },
    ],
    height: 350,
  },
}
