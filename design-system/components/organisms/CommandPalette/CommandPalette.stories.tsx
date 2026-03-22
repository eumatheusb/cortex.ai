'use client'

import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CommandPalette, type CommandItem } from './CommandPalette'
import { Button } from '../../atoms/Button/Button'
import {
  LayoutDashboard, Users, Calendar, BarChart3, Settings,
  Plus, Search, FileText, Phone, Mail, Zap, UserPlus,
  PieChart, ArrowRightLeft, Command,
} from 'lucide-react'

const meta: Meta<typeof CommandPalette> = {
  title: 'Organisms/CommandPalette',
  component: CommandPalette,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof CommandPalette>

const crmCommands: CommandItem[] = [
  // Navegacao
  { id: 'nav-dashboard', label: 'Ir para Dashboard', icon: <LayoutDashboard size={16} />, group: 'Navegacao', shortcut: ['G', 'D'], onSelect: () => {}, keywords: ['home', 'inicio'] },
  { id: 'nav-pipeline',  label: 'Ir para Pipeline',  icon: <ArrowRightLeft size={16} />, group: 'Navegacao', shortcut: ['G', 'P'], onSelect: () => {}, keywords: ['funil', 'leads'] },
  { id: 'nav-pacientes', label: 'Ir para Pacientes', icon: <Users size={16} />,          group: 'Navegacao', shortcut: ['G', 'C'], onSelect: () => {}, keywords: ['clientes', 'contatos'] },
  { id: 'nav-agenda',    label: 'Ir para Agenda',    icon: <Calendar size={16} />,        group: 'Navegacao', shortcut: ['G', 'A'], onSelect: () => {}, keywords: ['calendario', 'consultas'] },
  { id: 'nav-relatorios', label: 'Ir para Relatorios', icon: <BarChart3 size={16} />,     group: 'Navegacao', shortcut: ['G', 'R'], onSelect: () => {} },

  // Pacientes
  { id: 'pac-novo',     label: 'Novo paciente',        icon: <UserPlus size={16} />, group: 'Pacientes', shortcut: ['N', 'P'], onSelect: () => {}, keywords: ['criar', 'adicionar'] },
  { id: 'pac-buscar',   label: 'Buscar paciente',      icon: <Search size={16} />,   group: 'Pacientes', shortcut: ['/', 'P'], onSelect: () => {} },
  { id: 'pac-ligar',    label: 'Ligar para paciente',  icon: <Phone size={16} />,    group: 'Pacientes', onSelect: () => {} },
  { id: 'pac-email',    label: 'Enviar e-mail',        icon: <Mail size={16} />,     group: 'Pacientes', onSelect: () => {} },

  // Acoes
  { id: 'act-lead',     label: 'Criar novo lead',        icon: <Plus size={16} />,      group: 'Acoes', shortcut: ['N', 'L'], onSelect: () => {} },
  { id: 'act-consulta', label: 'Agendar consulta',       icon: <Calendar size={16} />,  group: 'Acoes', shortcut: ['N', 'C'], onSelect: () => {} },
  { id: 'act-orcamento', label: 'Gerar orcamento',       icon: <FileText size={16} />,  group: 'Acoes', onSelect: () => {} },
  { id: 'act-relatorio', label: 'Gerar relatorio mensal', icon: <PieChart size={16} />, group: 'Acoes', onSelect: () => {} },
  { id: 'act-automacao', label: 'Executar automacao',     icon: <Zap size={16} />,      group: 'Acoes', onSelect: () => {} },

  // Sistema
  { id: 'sys-config',  label: 'Configuracoes',    icon: <Settings size={16} />,   group: 'Sistema', shortcut: ['Ctrl', ','], onSelect: () => {} },
]

/* ── Default ──────────────────────────────────────────────────────────────── */
export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <div className="flex flex-col items-center gap-4">
        <Button
          variant="secondary"
          leftIcon={<Command size={15} />}
          onClick={() => setOpen(true)}
        >
          Paleta de comandos
        </Button>
        <p className="text-xs text-ash">
          Ou pressione <kbd className="font-mono bg-dusk px-1.5 py-0.5 rounded border border-steel text-mist">Cmd+K</kbd>
        </p>
        <CommandPalette
          items={crmCommands}
          recentIds={['nav-dashboard', 'pac-novo', 'act-consulta']}
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    )
  },
  name: 'Comandos CRM',
}

/* ── Sem recentes ─────────────────────────────────────────────────────────── */
export const SemRecentes: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Abrir paleta
        </Button>
        <CommandPalette
          items={crmCommands}
          open={open}
          onOpenChange={setOpen}
          placeholder="O que voce quer fazer?"
        />
      </>
    )
  },
  name: 'Sem itens recentes',
}
