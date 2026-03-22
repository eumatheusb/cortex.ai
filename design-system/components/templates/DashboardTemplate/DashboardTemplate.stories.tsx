'use client'

import type { Meta, StoryObj } from '@storybook/react'
import {
  LayoutDashboard, Users, DollarSign, Settings,
  BarChart3, Bell, Search, TrendingUp, Target,
} from 'lucide-react'
import { DashboardTemplate } from './DashboardTemplate'
import { PageHeader }        from '../../organisms/PageHeader/PageHeader'
import { Stat, StatGrid }    from '../../molecules/Stat/Stat'
import { Card, CardHeader, CardTitle, CardContent } from '../../molecules/Card/Card'
import { Badge }             from '../../atoms/Badge/Badge'
import { Avatar }            from '../../atoms/Avatar/Avatar'
import { Button }            from '../../atoms/Button/Button'
import { Input }             from '../../atoms/Input/Input'

const navItems = [
  { id: 'dashboard', label: 'Dashboard',    icon: <LayoutDashboard size={18} />, href: '#' },
  { id: 'leads',     label: 'Leads',        icon: <Users           size={18} />, href: '#', badge: 24, badgeVariant: 'primary' as const },
  { id: 'crm',       label: 'CRM',          icon: <BarChart3       size={18} />, href: '#' },
  { id: 'faturamento', label: 'Faturamento', icon: <DollarSign     size={18} />, href: '#' },
  { id: 'settings',  label: 'Configurações', icon: <Settings       size={18} />, href: '#' },
]

const logoFull = (
  <span className="font-display font-bold text-xl tracking-tight text-white">
    Cor<span className="text-signal">tex</span>
  </span>
)

const logoCollapsed = (
  <span className="font-display font-bold text-xl text-signal">Cx</span>
)

const topBar = (
  <div className="flex items-center justify-between w-full gap-4">
    <Input
      placeholder="Buscar clínicas, leads..."
      leftIcon={<Search size={15} />}
      className="max-w-sm"
    />
    <div className="flex items-center gap-3 ml-auto">
      <Button variant="ghost" size="icon" aria-label="Notificações">
        <Bell size={18} />
      </Button>
      <Avatar name="Fábio Avelar" size="sm" status="online" />
    </div>
  </div>
)

const meta: Meta<typeof DashboardTemplate> = {
  title: 'Templates/DashboardTemplate',
  component: DashboardTemplate,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof DashboardTemplate>

export const CortexDashboard: Story = {
  render: () => (
    <DashboardTemplate
      sidebar={{ items: navItems, activeId: 'dashboard', logo: logoFull, logoCollapsed }}
      header={topBar}
    >
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">

        {/* Page Header */}
        <PageHeader
          title="Dashboard"
          description="Visão geral de performance da sua clínica."
          badge="Ao vivo"
          badgeVariant="success"
          actions={
            <Button variant="primary" leftIcon={<TrendingUp size={16} />}>
              Ver relatório
            </Button>
          }
        />

        {/* Stats */}
        <StatGrid cols={4}>
          <Stat label="Leads gerados"    value="1.284" trend="up"      trendValue="+18%"    trendLabel="este mês"       icon={<Users       size={18} />} />
          <Stat label="Faturamento"      value="R$48.2K" trend="up"    trendValue="+12.4%"  trendLabel="vs mês anterior" variant="signal"  icon={<DollarSign  size={18} />} />
          <Stat label="Taxa conversão"   value="6.8%"  trend="down"    trendValue="-0.3pp"  trendLabel="vs semana"       icon={<Target      size={18} />} />
          <Stat label="Ticket médio"     value="R$1.240" trend="up"    trendValue="+R$80"   trendLabel="vs mês anterior" icon={<TrendingUp  size={18} />} />
        </StatGrid>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Leads recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col divide-y divide-steel">
                {[
                  { name: 'Dra. Camila Rocha',   clinic: 'OdontoVida SP',   value: 'R$3.200', status: 'Fechado',   variant: 'success' },
                  { name: 'Dr. Rodrigo Lima',     clinic: 'Sorriso Total',   value: 'R$2.800', status: 'Proposta',  variant: 'warning' },
                  { name: 'Dra. Fernanda Costa',  clinic: 'Clínica Bella',   value: 'R$5.100', status: 'Qualif.',   variant: 'primary' },
                  { name: 'Dr. Marcelo Andrade',  clinic: 'DenteSã MG',      value: 'R$1.900', status: 'Novo',      variant: 'default' },
                ].map((lead, i) => (
                  <div key={i} className="flex items-center gap-3 py-3">
                    <Avatar name={lead.name} size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{lead.name}</p>
                      <p className="text-xs text-mist">{lead.clinic}</p>
                    </div>
                    <p className="text-sm font-mono font-medium text-white shrink-0">{lead.value}</p>
                    <Badge variant={lead.variant as any} size="sm">{lead.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick stats */}
          <div className="flex flex-col gap-4">
            <Card variant="signal" padding="md">
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-signal-light mb-3">Meta do mês</p>
              <p className="font-display font-bold text-3xl text-white">68%</p>
              <div className="mt-3 h-1.5 rounded-full bg-signal/20">
                <div className="h-full w-[68%] rounded-full bg-signal" />
              </div>
              <p className="text-xs text-mist mt-2">R$48.2K de R$70K</p>
            </Card>

            <Card padding="md">
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-mist mb-3">Funil de vendas</p>
              {[
                { label: 'Novos leads',  value: 284, pct: 100 },
                { label: 'Qualificados', value: 142, pct: 50 },
                { label: 'Propostas',    value: 68,  pct: 24 },
                { label: 'Fechados',     value: 19,  pct: 7  },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 mb-2.5 last:mb-0">
                  <p className="text-xs text-mist w-24 shrink-0">{s.label}</p>
                  <div className="flex-1 h-1 rounded-full bg-steel">
                    <div
                      className="h-full rounded-full bg-signal"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                  <p className="text-xs font-mono text-white w-8 text-right">{s.value}</p>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  ),
}
