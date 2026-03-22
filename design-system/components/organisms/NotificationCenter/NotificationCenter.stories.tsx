'use client'

import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NotificationCenter, type NotificationItem } from './NotificationCenter'
import { UserPlus, Calendar, AlertTriangle, CheckCircle2, Zap, Mail } from 'lucide-react'

const meta: Meta<typeof NotificationCenter> = {
  title: 'Organisms/NotificationCenter',
  component: NotificationCenter,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof NotificationCenter>

const sampleNotifications: NotificationItem[] = [
  {
    id: '1',
    title: 'Novo lead recebido',
    message: 'Maria Silva preencheu o formulario de contato pelo Instagram.',
    icon: <UserPlus size={16} />,
    category: 'leads',
    time: 'Agora mesmo',
    read: false,
  },
  {
    id: '2',
    title: 'Consulta confirmada',
    message: 'Dr. Carlos Mendes confirmou a consulta de amanha as 14h.',
    icon: <Calendar size={16} />,
    category: 'agenda',
    time: '5 min atras',
    read: false,
  },
  {
    id: '3',
    title: 'Automacao disparada',
    message: 'Sequencia de follow-up iniciada para 8 leads qualificados.',
    icon: <Zap size={16} />,
    category: 'sistema',
    time: '15 min atras',
    read: false,
  },
  {
    id: '4',
    title: 'Orcamento aprovado',
    message: 'Paciente Ana Costa aprovou o orcamento de clareamento + facetas.',
    icon: <CheckCircle2 size={16} />,
    category: 'leads',
    time: '1h atras',
    read: false,
  },
  {
    id: '5',
    title: 'Lembrete de consulta',
    message: 'Joao Pereira tem consulta em 30 minutos.',
    icon: <Calendar size={16} />,
    category: 'agenda',
    time: '2h atras',
    read: true,
  },
  {
    id: '6',
    title: 'Falha na sincronizacao',
    message: 'Erro ao sincronizar contatos com Meta Ads. Tente novamente.',
    icon: <AlertTriangle size={16} />,
    category: 'sistema',
    time: '3h atras',
    read: true,
  },
  {
    id: '7',
    title: 'E-mail recebido',
    message: 'Resposta do paciente Roberto Lima sobre orcamento.',
    icon: <Mail size={16} />,
    category: 'leads',
    time: '5h atras',
    read: true,
  },
  {
    id: '8',
    title: 'Backup concluido',
    message: 'Backup automatico do banco de dados realizado com sucesso.',
    category: 'sistema',
    time: 'Ontem, 23:00',
    read: true,
  },
]

/* ── Com notificacoes reais ───────────────────────────────────────────────── */
export const NotificacoesCRM: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState(sampleNotifications)

    const handleMarkAsRead = (id: string) => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, read: true } : n))
      )
    }

    const handleMarkAllRead = () => {
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
    }

    return (
      <div className="flex items-center gap-4 bg-ink p-4 rounded-xl border border-steel">
        <span className="text-sm text-mist">Barra de navegacao</span>
        <NotificationCenter
          notifications={notifications}
          onMarkAsRead={handleMarkAsRead}
          onMarkAllRead={handleMarkAllRead}
        />
      </div>
    )
  },
  name: 'Notificacoes CRM',
}

/* ── Sem notificacoes ─────────────────────────────────────────────────────── */
export const SemNotificacoes: Story = {
  render: () => (
    <div className="flex items-center gap-4 bg-ink p-4 rounded-xl border border-steel">
      <span className="text-sm text-mist">Sem notificacoes</span>
      <NotificationCenter notifications={[]} />
    </div>
  ),
  name: 'Estado vazio',
}

/* ── Todas lidas ──────────────────────────────────────────────────────────── */
export const TodasLidas: Story = {
  render: () => (
    <div className="flex items-center gap-4 bg-ink p-4 rounded-xl border border-steel">
      <span className="text-sm text-mist">Todas lidas</span>
      <NotificationCenter
        notifications={sampleNotifications.map((n) => ({ ...n, read: true }))}
      />
    </div>
  ),
  name: 'Todas lidas',
}
