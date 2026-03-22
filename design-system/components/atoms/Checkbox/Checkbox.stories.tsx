import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = { args: { label: 'Aceitar termos de uso' } }
export const Checked: Story = { args: { label: 'Opção selecionada', checked: true } }
export const Indeterminate: Story = { args: { label: 'Seleção parcial', indeterminate: true } }
export const WithHint: Story = { args: { label: 'Receber notificações', hint: 'Você pode alterar isso nas configurações.' } }
export const WithError: Story = { args: { label: 'Campo obrigatório', error: 'Este campo é obrigatório.' } }
export const Disabled: Story = { args: { label: 'Opção desabilitada', disabled: true } }
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm" label="Small" />
      <Checkbox size="md" label="Medium (padrão)" />
      <Checkbox size="lg" label="Large" />
    </div>
  ),
}
