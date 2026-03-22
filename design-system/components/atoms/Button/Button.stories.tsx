import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight, Download, Plus, Trash2 } from 'lucide-react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'outline', 'destructive', 'link'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'icon'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Escalar agora', variant: 'primary' },
}

export const Secondary: Story = {
  args: { children: 'Ver relatório', variant: 'secondary' },
}

export const Ghost: Story = {
  args: { children: 'Cancelar', variant: 'ghost' },
}

export const Outline: Story = {
  args: { children: 'Saiba mais', variant: 'outline' },
}

export const Destructive: Story = {
  args: { children: 'Remover cliente', variant: 'destructive', leftIcon: <Trash2 size={16} /> },
}

export const WithRightIcon: Story = {
  args: { children: 'Próximo passo', variant: 'primary', rightIcon: <ArrowRight size={16} /> },
}

export const WithLeftIcon: Story = {
  args: { children: 'Exportar dados', variant: 'secondary', leftIcon: <Download size={16} /> },
}

export const Loading: Story = {
  args: { children: 'Processando...', variant: 'primary', loading: true },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Pequeno</Button>
      <Button size="md">Médio</Button>
      <Button size="lg">Grande</Button>
      <Button size="icon"><Plus size={16} /></Button>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6 bg-void rounded-xl">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}
