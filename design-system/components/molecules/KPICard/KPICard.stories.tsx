import type { Meta, StoryObj } from '@storybook/react'
import { Users, DollarSign, Target, Receipt } from 'lucide-react'
import { KPICard, KPIGrid } from './KPICard'

const meta: Meta<typeof KPICard> = {
  title: 'Molecules/KPICard',
  component: KPICard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj<typeof KPICard>

export const Default: Story = {
  args: {
    label: 'Leads hoje',
    value: '47',
    trend: 'up',
    trendValue: '+12%',
    trendLabel: 'vs ontem',
    icon: <Users size={18} />,
    sparklineData: [12, 18, 15, 22, 28, 25, 32, 38, 35, 42, 45, 47],
  },
}

export const CRMDashboard: Story = {
  render: () => (
    <KPIGrid cols={4}>
      <KPICard
        label="Leads hoje"
        value={47}
        animateValue
        trend="up"
        trendValue="+12%"
        trendLabel="vs ontem"
        icon={<Users size={18} />}
        sparklineData={[12, 18, 15, 22, 28, 25, 32, 38, 35, 42, 45, 47]}
      />
      <KPICard
        label="Taxa conversao"
        value="18%"
        trend="up"
        trendValue="+2.3pp"
        trendLabel="vs mes anterior"
        variant="signal"
        icon={<Target size={18} />}
        sparklineData={[12, 13, 14, 13, 15, 14, 16, 15, 17, 16, 17, 18]}
        sparklineColor="var(--color-signal)"
      />
      <KPICard
        label="Faturamento"
        value="R$ 234k"
        trend="up"
        trendValue="+8.5%"
        trendLabel="vs mes anterior"
        variant="success"
        icon={<DollarSign size={18} />}
        sparklineData={[180, 195, 188, 205, 212, 198, 220, 215, 228, 225, 230, 234]}
        sparklineColor="var(--color-success)"
      />
      <KPICard
        label="Ticket medio"
        value="R$ 3.200"
        trend="down"
        trendValue="-R$ 150"
        trendLabel="vs mes anterior"
        icon={<Receipt size={18} />}
        sparklineData={[3400, 3350, 3380, 3300, 3280, 3320, 3250, 3290, 3210, 3240, 3220, 3200]}
        sparklineColor="var(--color-error)"
      />
    </KPIGrid>
  ),
}

export const Loading: Story = {
  args: {
    label: 'Carregando...',
    value: '',
    loading: true,
  },
}

export const ComAnimacao: Story = {
  args: {
    label: 'Pacientes atendidos',
    value: 1284,
    animateValue: true,
    trend: 'up',
    trendValue: '+18%',
    trendLabel: 'este mes',
    icon: <Users size={18} />,
  },
}
