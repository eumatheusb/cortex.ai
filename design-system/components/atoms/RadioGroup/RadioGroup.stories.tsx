import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { RadioGroup } from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'Atoms/RadioGroup',
  component: RadioGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  args: {
    defaultValue: 'monthly',
    items: [
      { value: 'monthly', label: 'Mensal',        hint: 'Cobrado todo mês' },
      { value: 'annual',  label: 'Anual',          hint: 'Economize 20%' },
      { value: 'custom',  label: 'Personalizado',  disabled: true },
    ],
  },
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    defaultValue: 'semana',
    items: [
      { value: 'hoje',   label: 'Hoje' },
      { value: 'semana', label: 'Semana' },
      { value: 'mes',    label: 'Mês' },
      { value: 'ano',    label: 'Ano' },
    ],
  },
}

export const Tamanhos: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs text-ash uppercase tracking-wider mb-3">Small</p>
        <RadioGroup
          size="sm"
          defaultValue="crm"
          orientation="horizontal"
          items={[
            { value: 'crm',       label: 'CRM' },
            { value: 'relatorio', label: 'Relatório' },
            { value: 'config',    label: 'Config.' },
          ]}
        />
      </div>
      <div>
        <p className="text-xs text-ash uppercase tracking-wider mb-3">Medium (padrão)</p>
        <RadioGroup
          size="md"
          defaultValue="crm"
          orientation="horizontal"
          items={[
            { value: 'crm',       label: 'CRM' },
            { value: 'relatorio', label: 'Relatório' },
            { value: 'config',    label: 'Config.' },
          ]}
        />
      </div>
    </div>
  ),
}

export const CasoDeUso: Story = {
  render: () => {
    const [canal, setCanal] = React.useState('whatsapp')
    return (
      <div className="flex flex-col gap-2 w-72">
        <p className="text-xs text-ash uppercase tracking-wider">Canal de contato preferido</p>
        <RadioGroup
          value={canal}
          onChange={setCanal}
          items={[
            { value: 'whatsapp', label: 'WhatsApp',  hint: 'Resposta em até 5 min' },
            { value: 'email',    label: 'E-mail',    hint: 'Resposta em até 1h' },
            { value: 'telefone', label: 'Telefone',  hint: 'Horário comercial' },
            { value: 'sms',      label: 'SMS',       disabled: true },
          ]}
        />
        <p className="text-xs text-mist mt-1">Selecionado: <span className="text-signal">{canal}</span></p>
      </div>
    )
  },
  name: 'Caso de uso — canal de contato',
}

export const ComDesabilitados: Story = {
  args: {
    defaultValue: 'basico',
    items: [
      { value: 'basico',      label: 'Básico',      hint: 'Até 50 leads/mês' },
      { value: 'profissional', label: 'Profissional', hint: 'Até 200 leads/mês' },
      { value: 'enterprise',  label: 'Enterprise',  hint: 'Ilimitado', disabled: true },
    ],
  },
  name: 'Com itens desabilitados',
}
