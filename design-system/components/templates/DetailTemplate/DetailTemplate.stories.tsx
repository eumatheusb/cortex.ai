'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { DetailTemplate } from './DetailTemplate'
import { Button } from '../../atoms/Button/Button'
import { Badge } from '../../atoms/Badge/Badge'
import { Edit, Phone, Mail, MapPin } from 'lucide-react'

const meta: Meta<typeof DetailTemplate> = {
  title: 'Templates/DetailTemplate',
  component: DetailTemplate,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof DetailTemplate>

const infoSection = (
  <div className="grid grid-cols-2 gap-4 text-sm">
    {[
      { label: 'Clínica',   value: 'OdontoVida SP' },
      { label: 'Cidade',    value: 'São Paulo, SP' },
      { label: 'Origem',    value: 'Meta Ads' },
      { label: 'Ticket',    value: 'R$3.200' },
    ].map(({ label, value }) => (
      <div key={label}>
        <p className="text-mist text-xs mb-0.5">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    ))}
  </div>
)

const contactSection = (
  <div className="flex flex-col gap-3 text-sm">
    {[
      { icon: <Phone size={14} />,   value: '(11) 99999-8888' },
      { icon: <Mail size={14} />,    value: 'camila@odontovida.com' },
      { icon: <MapPin size={14} />,  value: 'Av. Paulista, 1000' },
    ].map(({ icon, value }) => (
      <div key={value} className="flex items-center gap-2 text-mist">
        {icon}
        <span>{value}</span>
      </div>
    ))}
  </div>
)

export const Default: Story = {
  render: () => (
    <DetailTemplate
      title="Dra. Camila Rocha"
      subtitle="OdontoVida SP — São Paulo"
      avatarName="Camila Rocha"
      status="Fechado"
      statusVariant="success"
      breadcrumbs={[{ label: 'CRM' }, { label: 'Leads' }, { label: 'Dra. Camila Rocha' }]}
      onBack={() => {}}
      actions={<Button variant="primary" leftIcon={<Edit size={15} />}>Editar</Button>}
      sections={[
        { id: 'info',    title: 'Informações', children: infoSection },
        { id: 'contact', title: 'Contato',     children: contactSection },
      ]}
    />
  ),
}

export const WithSidebar: Story = {
  render: () => (
    <DetailTemplate
      title="Dra. Camila Rocha"
      subtitle="OdontoVida SP — São Paulo"
      avatarName="Camila Rocha"
      status="Fechado"
      statusVariant="success"
      breadcrumbs={[{ label: 'CRM' }, { label: 'Leads' }, { label: 'Dra. Camila Rocha' }]}
      onBack={() => {}}
      actions={<Button variant="primary" leftIcon={<Edit size={15} />}>Editar</Button>}
      sections={[
        { id: 'info',    title: 'Informações', children: infoSection },
        { id: 'contact', title: 'Contato',     children: contactSection },
      ]}
      sidebar={
        <div className="rounded-xl border border-steel bg-dusk p-5 flex flex-col gap-4">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-mist">Linha do tempo</p>
          {[
            { date: 'Hoje',       label: 'Proposta enviada',  variant: 'primary' },
            { date: 'Ontem',      label: 'Ligação realizada', variant: 'default' },
            { date: '18 Mar',     label: 'Lead criado',       variant: 'default' },
          ].map((ev, i) => (
            <div key={i} className="flex items-start gap-3">
              <Badge variant={ev.variant as any} size="sm">{ev.date}</Badge>
              <p className="text-sm text-mist">{ev.label}</p>
            </div>
          ))}
        </div>
      }
    />
  ),
}
