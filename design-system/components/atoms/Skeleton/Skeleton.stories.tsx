import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard } from './Skeleton'

const meta: Meta = {
  title: 'Atoms/Skeleton',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

export const Default: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 w-[320px]">
      <Skeleton height={20} className="w-3/4" />
      <Skeleton height={16} className="w-full" />
      <Skeleton height={16} className="w-1/2" />
    </div>
  ),
}

export const Text: StoryObj = {
  render: () => <div className="w-[320px]"><SkeletonText lines={4} /></div>,
}

export const Avatars: StoryObj = {
  render: () => (
    <div className="flex items-center gap-3">
      <SkeletonAvatar size="xs" />
      <SkeletonAvatar size="sm" />
      <SkeletonAvatar size="md" />
      <SkeletonAvatar size="lg" />
      <SkeletonAvatar size="xl" />
    </div>
  ),
}

export const Card: StoryObj = {
  render: () => <div className="w-[360px]"><SkeletonCard hasImage lines={3} /></div>,
}
