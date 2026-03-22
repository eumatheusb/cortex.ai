'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { LayoutDashboard, Users, FileText, Settings } from 'lucide-react'
import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={[{ label: 'CRM' }, { label: 'Leads' }]} />
      <Breadcrumb items={[{ label: 'CRM' }, { label: 'Leads' }, { label: 'Dra. Camila Rocha' }]} />
      <Breadcrumb items={[{ label: 'Configurações' }, { label: 'Integrações' }, { label: 'Meta Ads' }]} />
    </div>
  ),
}

export const ComHome: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Breadcrumb showHome items={[{ label: 'CRM' }, { label: 'Leads' }]} />
      <Breadcrumb showHome items={[{ label: 'Relatórios' }, { label: 'Performance' }, { label: 'Março 2026' }]} />
      <Breadcrumb showHome items={[{ label: 'Configurações' }, { label: 'Integrações' }]} />
    </div>
  ),
  name: 'Com ícone Home',
}

export const ComLinks: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        showHome
        items={[
          { label: 'CRM', href: '#crm' },
          { label: 'Leads', href: '#leads' },
          { label: 'Dra. Camila Rocha' },
        ]}
      />
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '#dashboard' },
          { label: 'Relatórios', href: '#relatorios' },
          { label: 'Desempenho por clínica', href: '#desempenho' },
          { label: 'OdontoVida SP' },
        ]}
      />
    </div>
  ),
  name: 'Com hrefs navegáveis',
}

export const ComIcones: Story = {
  render: () => (
    <Breadcrumb
      showHome
      items={[
        { label: 'Dashboard', href: '#', icon: <LayoutDashboard size={13} /> },
        { label: 'CRM', href: '#', icon: <Users size={13} /> },
        { label: 'Relatórios', href: '#', icon: <FileText size={13} /> },
        { label: 'Configurações', icon: <Settings size={13} /> },
      ]}
    />
  ),
  name: 'Com ícones por item',
}

export const SeparadorCustom: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        separator={<span className="text-ash text-xs">/</span>}
        items={[{ label: 'CRM', href: '#' }, { label: 'Leads', href: '#' }, { label: 'Dra. Camila' }]}
      />
      <Breadcrumb
        separator={<span className="text-ash text-xs">·</span>}
        items={[{ label: 'CRM', href: '#' }, { label: 'Leads', href: '#' }, { label: 'Dra. Camila' }]}
      />
    </div>
  ),
  name: 'Separador customizado',
}
