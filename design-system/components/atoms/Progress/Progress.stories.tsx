import type { Meta, StoryObj } from '@storybook/react'
import { Progress, CircularProgress } from './Progress'

const meta: Meta = {
  title: 'Atoms/Progress',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

export const Linear: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <Progress value={75} label="Leads convertidos" showValue />
      <Progress value={45} variant="success" label="Meta atingida" showValue />
      <Progress value={80} variant="warning" label="Limite de uso" showValue />
      <Progress value={30} variant="error"   label="Taxa de cancelamento" showValue />
    </div>
  ),
}

export const Sizes: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <Progress value={60} size="sm" />
      <Progress value={60} size="md" />
      <Progress value={60} size="lg" />
    </div>
  ),
}

export const Circular: StoryObj = {
  render: () => (
    <div className="flex items-center gap-6">
      <CircularProgress value={72} size="sm" />
      <CircularProgress value={45} size="md" variant="success" />
      <CircularProgress value={88} size="lg" variant="warning" />
      <CircularProgress value={30} size="xl" variant="error" />
    </div>
  ),
}
