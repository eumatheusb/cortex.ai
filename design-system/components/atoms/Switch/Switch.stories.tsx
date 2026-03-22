import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = { args: { label: 'Ativar notificações' } }
export const Checked: Story = { args: { label: 'Modo escuro', defaultChecked: true } }
export const Disabled: Story = { args: { label: 'Opção desabilitada', disabled: true } }
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium (padrão)" />
      <Switch size="lg" label="Large" />
    </div>
  ),
}
