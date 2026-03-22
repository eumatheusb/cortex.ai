'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TagList } from './Tag'

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Tag>

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
    </div>
  ),
}

export const Removable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag removable onRemove={() => {}}>Meta Ads</Tag>
      <Tag variant="primary" removable onRemove={() => {}}>Google Ads</Tag>
      <Tag variant="success" removable onRemove={() => {}}>Indicação</Tag>
    </div>
  ),
}

export const List: Story = {
  render: () => (
    <TagList
      tags={['Implante', 'Ortodontia', 'Clareamento', 'Prótese', 'Faceta']}
      variant="primary"
      onRemove={() => {}}
    />
  ),
}
