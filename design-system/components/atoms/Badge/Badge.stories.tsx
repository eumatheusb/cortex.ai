'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Badge>

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  ),
}

export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="primary" dot>Ativo</Badge>
      <Badge variant="success" dot>Online</Badge>
      <Badge variant="warning" dot>Pendente</Badge>
      <Badge variant="error" dot>Offline</Badge>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge variant="primary" size="sm">Small</Badge>
      <Badge variant="primary" size="md">Medium</Badge>
      <Badge variant="primary" size="lg">Large</Badge>
    </div>
  ),
}

export const WithCount: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge variant="primary" count={5}>Notificações</Badge>
      <Badge variant="error" count={99}>Alertas</Badge>
    </div>
  ),
}
