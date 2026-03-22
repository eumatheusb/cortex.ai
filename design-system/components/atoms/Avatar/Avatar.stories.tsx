'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Avatar>

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar name="Fábio Avelar" size="xs" />
      <Avatar name="Fábio Avelar" size="sm" />
      <Avatar name="Fábio Avelar" size="md" />
      <Avatar name="Fábio Avelar" size="lg" />
      <Avatar name="Fábio Avelar" size="xl" />
    </div>
  ),
}

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Camila Rocha" status="online" />
      <Avatar name="Rodrigo Lima" status="busy" />
      <Avatar name="Fernanda Costa" status="away" />
      <Avatar name="Marcelo Andrade" status="offline" />
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup
      max={4}
      avatars={[
        { name: 'Camila Rocha' },
        { name: 'Rodrigo Lima' },
        { name: 'Fernanda Costa' },
        { name: 'Marcelo Andrade' },
        { name: 'Juliana Melo' },
        { name: 'André Santos' },
      ]}
    />
  ),
}

export const Initials: Story = {
  render: () => (
    <div className="flex gap-3">
      {['Ana Lima', 'Bruno Costa', 'Carla Santos', 'Diego Rocha', 'Eva Mendes'].map(name => (
        <Avatar key={name} name={name} size="md" />
      ))}
    </div>
  ),
}
