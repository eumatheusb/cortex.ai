'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Alert>

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-full max-w-lg">
      <Alert variant="info" title="Informação">
        Seu plano será renovado em 7 dias.
      </Alert>
      <Alert variant="success" title="Sucesso">
        Lead convertido com sucesso.
      </Alert>
      <Alert variant="warning" title="Atenção">
        Limite de leads atingindo 80% da capacidade.
      </Alert>
      <Alert variant="error" title="Erro">
        Falha ao sincronizar com o CRM. Tente novamente.
      </Alert>
    </div>
  ),
}

export const Dismissible: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-full max-w-lg">
      <Alert variant="success" title="Campanha ativada" dismissible>
        Sua campanha Meta Ads foi ativada com sucesso.
      </Alert>
      <Alert variant="warning" dismissible>
        Taxa de conversão caiu 0.3pp em relação à semana anterior.
      </Alert>
    </div>
  ),
}
