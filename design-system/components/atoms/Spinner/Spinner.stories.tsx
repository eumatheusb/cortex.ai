'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Spinner>

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner variant="primary" />
      <Spinner variant="muted" />
      <div className="bg-signal p-3 rounded-lg">
        <Spinner variant="white" />
      </div>
    </div>
  ),
}
