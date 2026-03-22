import type { Meta, StoryObj } from '@storybook/react'
import { Users, DollarSign, TrendingUp, Target } from 'lucide-react'
import { Stat, StatGrid } from './Stat'

const meta: Meta<typeof Stat> = {
  title: 'Molecules/Stat',
  component: Stat,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj<typeof Stat>

export const Default: Story = {
  args: {
    label: 'Faturamento',
    value: 'R$48.2K',
    trend: 'up',
    trendValue: '+12.4%',
    trendLabel: 'vs mês anterior',
    icon: <DollarSign size={18} />,
  },
}

export const CRMDashboard: Story = {
  render: () => (
    <StatGrid cols={4}>
      <Stat
        label="Leads gerados"
        value="1.284"
        trend="up"
        trendValue="+18%"
        trendLabel="este mês"
        icon={<Users size={18} />}
      />
      <Stat
        label="Faturamento"
        value="R$48.2K"
        trend="up"
        trendValue="+12.4%"
        trendLabel="vs mês anterior"
        variant="signal"
        icon={<DollarSign size={18} />}
      />
      <Stat
        label="Taxa de conversão"
        value="6.8%"
        trend="down"
        trendValue="-0.3pp"
        trendLabel="vs semana passada"
        icon={<Target size={18} />}
      />
      <Stat
        label="Ticket médio"
        value="R$1.240"
        trend="up"
        trendValue="+R$80"
        trendLabel="vs mês anterior"
        icon={<TrendingUp size={18} />}
      />
    </StatGrid>
  ),
}

export const Loading: Story = {
  args: { label: 'Carregando...', value: '', loading: true },
}
