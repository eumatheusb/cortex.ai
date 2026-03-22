'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { NavigationMenu, type NavMenuItem } from './NavigationMenu'
import { Button } from '../../atoms/Button/Button'
import {
  LayoutDashboard, ArrowRightLeft, Users, Calendar, BarChart3,
  PieChart, TrendingUp, FileText, Settings, UserCog, Bell,
  Building2, Stethoscope, Smile, Shield,
} from 'lucide-react'

const meta: Meta<typeof NavigationMenu> = {
  title: 'Molecules/NavigationMenu',
  component: NavigationMenu,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof NavigationMenu>

const cortexMenuItems: NavMenuItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard size={16} />,
  },
  {
    label: 'Pipeline',
    children: [
      { label: 'Visao geral', href: '/pipeline', icon: <ArrowRightLeft size={16} />, description: 'Funil de vendas com drag-and-drop' },
      { label: 'Leads ativos', href: '/pipeline/leads', icon: <Users size={16} />, description: 'Leads em andamento no funil' },
      { label: 'Conversoes', href: '/pipeline/conversoes', icon: <TrendingUp size={16} />, description: 'Metricas de conversao por etapa' },
      { label: 'Automacoes', href: '/pipeline/automacoes', icon: <Settings size={16} />, description: 'Fluxos automaticos do funil' },
    ],
  },
  {
    label: 'Pacientes',
    children: [
      { label: 'Todos os pacientes', href: '/pacientes', icon: <Users size={16} />, description: 'Lista completa de pacientes' },
      { label: 'Novo paciente', href: '/pacientes/novo', icon: <UserCog size={16} />, description: 'Cadastrar novo paciente' },
      { label: 'Tratamentos', href: '/pacientes/tratamentos', icon: <Stethoscope size={16} />, description: 'Planos de tratamento ativos' },
      { label: 'Odontograma', href: '/pacientes/odontograma', icon: <Smile size={16} />, description: 'Mapeamento dental do paciente' },
    ],
  },
  {
    label: 'Agenda',
    href: '/agenda',
    icon: <Calendar size={16} />,
  },
  {
    label: 'Relatorios',
    children: [
      { label: 'Resumo mensal', href: '/relatorios/mensal', icon: <PieChart size={16} />, description: 'Visao geral do mes' },
      { label: 'Performance', href: '/relatorios/performance', icon: <TrendingUp size={16} />, description: 'KPIs e metricas de performance' },
      { label: 'Financeiro', href: '/relatorios/financeiro', icon: <BarChart3 size={16} />, description: 'Receita, custos e lucratividade' },
      { label: 'Exportar', href: '/relatorios/exportar', icon: <FileText size={16} />, description: 'Baixar relatorios em PDF' },
    ],
  },
]

/* ── Menu do Cortex ───────────────────────────────────────────────────────── */
export const MenuCortex: Story = {
  render: () => (
    <div className="bg-ink border-b border-steel">
      <NavigationMenu
        items={cortexMenuItems}
        logo={
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-signal flex items-center justify-center text-white font-display font-bold text-sm">
              C
            </div>
            <span className="font-display font-semibold text-white text-sm">Cortex</span>
          </div>
        }
        actions={
          <div className="flex items-center gap-2">
            <button className="h-9 w-9 rounded-lg flex items-center justify-center text-mist hover:text-white hover:bg-dusk transition-colors">
              <Bell size={16} />
            </button>
            <div className="h-8 w-8 rounded-full bg-signal/20 flex items-center justify-center text-signal font-display font-semibold text-xs">
              FA
            </div>
          </div>
        }
      />
    </div>
  ),
  name: 'Menu Cortex completo',
}

/* ── Simples sem mega-menu ────────────────────────────────────────────────── */
export const MenuSimples: Story = {
  render: () => (
    <div className="bg-ink border-b border-steel">
      <NavigationMenu
        items={[
          { label: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={16} /> },
          { label: 'Pacientes', href: '/pacientes', icon: <Users size={16} /> },
          { label: 'Agenda', href: '/agenda', icon: <Calendar size={16} /> },
          { label: 'Relatorios', href: '/relatorios', icon: <BarChart3 size={16} /> },
        ]}
        logo={
          <span className="font-display font-bold text-white">CRM</span>
        }
      />
    </div>
  ),
  name: 'Menu simples',
}
