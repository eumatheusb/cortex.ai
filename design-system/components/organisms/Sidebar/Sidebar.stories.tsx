import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import {
  LayoutDashboard, Users, BarChart3, Settings,
  FileText, Bell, Zap, ChevronDown,
} from 'lucide-react'
import { Sidebar, type NavItem } from './Sidebar'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { Badge } from '../../atoms/Badge/Badge'

const meta: Meta = {
  title: 'Organisms/Sidebar',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
}
export default meta

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard',   icon: <LayoutDashboard size={18} />, href: '#' },
  { id: 'crm',       label: 'CRM / Leads', icon: <Users size={18} />, badge: 12, badgeVariant: 'primary',
    children: [
      { id: 'leads-ativos',    label: 'Leads ativos',    icon: <Users size={16} /> },
      { id: 'leads-arquivados',label: 'Arquivados',      icon: <FileText size={16} /> },
    ]
  },
  { id: 'relatorios', label: 'Relatórios', icon: <BarChart3 size={18} /> },
  { id: 'notificacoes', label: 'Notificações', icon: <Bell size={18} />, badge: 3, badgeVariant: 'error' },
  { id: 'integracoes', label: 'Integrações', icon: <Zap size={18} /> },
  { id: 'configuracoes', label: 'Configurações', icon: <Settings size={18} /> },
]

const Logo = () => (
  <span className="font-display font-bold text-lg text-white">
    Cor<span className="text-signal">tex</span>
  </span>
)

const LogoIcon = () => (
  <span className="font-display font-bold text-base text-signal">C</span>
)

const SidebarFooter = () => (
  <div className="flex items-center gap-2 px-1 py-1 rounded-lg hover:bg-dusk cursor-pointer transition-colors">
    <Avatar name="Matheus Batista" size="sm" status="online" />
    <div className="flex-1 min-w-0">
      <p className="text-xs font-medium text-white truncate">Matheus Batista</p>
      <p className="text-xs text-mist truncate">Admin</p>
    </div>
    <ChevronDown size={12} className="text-ash shrink-0" />
  </div>
)

function SidebarWrapper({ defaultCollapsed = false }: { defaultCollapsed?: boolean }) {
  const [activeId, setActiveId] = React.useState('dashboard')
  return (
    <div className="flex h-screen bg-void">
      <Sidebar
        items={navItems}
        activeId={activeId}
        onNavigate={(item) => setActiveId(item.id)}
        logo={<Logo />}
        logoCollapsed={<LogoIcon />}
        footer={<SidebarFooter />}
        defaultCollapsed={defaultCollapsed}
      />
      <div className="flex-1 p-8">
        <p className="text-mist text-sm">Conteúdo principal — item ativo: <span className="text-white font-medium">{activeId}</span></p>
        <Badge variant="primary" className="mt-2">Clique nos itens do menu</Badge>
      </div>
    </div>
  )
}

export const Expanded: StoryObj = {
  render: () => <SidebarWrapper />,
  name: 'Expandida',
}

export const Collapsed: StoryObj = {
  render: () => <SidebarWrapper defaultCollapsed />,
  name: 'Recolhida (padrão)',
}
