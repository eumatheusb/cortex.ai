import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'

const meta: Meta = {
  title: 'Atoms/Label',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

export const Default: StoryObj = {
  render: () => <Label>Nome completo</Label>,
}

export const Variantes: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Label>Padrão</Label>
      <Label required>Obrigatório</Label>
      <Label optional>Opcional</Label>
      <Label hint="Será usado para login e notificações.">Com hint</Label>
      <Label required hint="Insira o CPF sem pontos ou traços.">Com hint e obrigatório</Label>
    </div>
  ),
}
