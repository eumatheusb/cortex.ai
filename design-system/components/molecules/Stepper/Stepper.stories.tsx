'use client'

import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stepper, type StepItem } from './Stepper'
import { Button } from '../../atoms/Button/Button'
import { UserPlus, ClipboardList, FileCheck, ThumbsUp } from 'lucide-react'

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Stepper>

/* ── Onboarding de paciente (horizontal) ──────────────────────────────────── */
export const OnboardingPaciente: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = React.useState(1)

    const steps: StepItem[] = [
      { id: 'dados',     label: 'Dados',     description: 'Informacoes pessoais', icon: <UserPlus size={16} />,       status: activeIndex > 0 ? 'complete' : activeIndex === 0 ? 'active' : 'pending' },
      { id: 'anamnese',  label: 'Anamnese',  description: 'Historico de saude',   icon: <ClipboardList size={16} />,  status: activeIndex > 1 ? 'complete' : activeIndex === 1 ? 'active' : 'pending' },
      { id: 'plano',     label: 'Plano',     description: 'Plano de tratamento',  icon: <FileCheck size={16} />,      status: activeIndex > 2 ? 'complete' : activeIndex === 2 ? 'active' : 'pending' },
      { id: 'aprovacao', label: 'Aprovacao', description: 'Aprovacao do paciente', icon: <ThumbsUp size={16} />,      status: activeIndex > 3 ? 'complete' : activeIndex === 3 ? 'active' : 'pending' },
    ]

    return (
      <div className="max-w-2xl space-y-8">
        <Stepper
          steps={steps}
          orientation="horizontal"
          onStepClick={(_, index) => setActiveIndex(index)}
        />
        <div className="flex justify-between">
          <Button
            variant="ghost"
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
          >
            Voltar
          </Button>
          <Button
            variant="primary"
            onClick={() => setActiveIndex(Math.min(3, activeIndex + 1))}
            disabled={activeIndex === 3}
          >
            {activeIndex === 3 ? 'Concluir' : 'Proximo'}
          </Button>
        </div>
      </div>
    )
  },
  name: 'Onboarding de paciente',
}

/* ── Vertical ─────────────────────────────────────────────────────────────── */
export const Vertical: Story = {
  render: () => {
    const steps: StepItem[] = [
      { id: 'dados',      label: 'Dados pessoais',        description: 'Nome, CPF, contato',                status: 'complete' },
      { id: 'anamnese',   label: 'Anamnese',              description: 'Historico medico e alergias',       status: 'complete' },
      { id: 'plano',      label: 'Plano de tratamento',   description: 'Procedimentos e valores',           status: 'active' },
      { id: 'aprovacao',  label: 'Aprovacao do paciente',  description: 'Assinatura e aceite',              status: 'pending' },
    ]

    return (
      <div className="max-w-sm">
        <Stepper steps={steps} orientation="vertical" />
      </div>
    )
  },
}

/* ── Com erro ─────────────────────────────────────────────────────────────── */
export const ComErro: Story = {
  render: () => {
    const steps: StepItem[] = [
      { id: 'dados',     label: 'Dados',     status: 'complete' },
      { id: 'anamnese',  label: 'Anamnese',  status: 'complete' },
      { id: 'plano',     label: 'Plano',     description: 'Erro na validacao do plano', status: 'error' },
      { id: 'aprovacao', label: 'Aprovacao', status: 'pending' },
    ]

    return (
      <div className="max-w-2xl">
        <Stepper steps={steps} orientation="horizontal" />
      </div>
    )
  },
  name: 'Com estado de erro',
}

/* ── Todos completos ──────────────────────────────────────────────────────── */
export const TodosCompletos: Story = {
  render: () => {
    const steps: StepItem[] = [
      { id: 'dados',     label: 'Dados',     status: 'complete' },
      { id: 'anamnese',  label: 'Anamnese',  status: 'complete' },
      { id: 'plano',     label: 'Plano',     status: 'complete' },
      { id: 'aprovacao', label: 'Aprovacao', status: 'complete' },
    ]

    return (
      <div className="max-w-2xl">
        <Stepper steps={steps} orientation="horizontal" />
      </div>
    )
  },
  name: 'Todos completos',
}
