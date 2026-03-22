import type { Meta, StoryObj } from '@storybook/react'
import { AvatarUpload } from './AvatarUpload'

const meta: Meta<typeof AvatarUpload> = {
  title: 'Molecules/AvatarUpload',
  component: AvatarUpload,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof AvatarUpload>

export const UploadFotoPaciente: Story = {
  args: {
    size: 'lg',
    fallbackInitials: 'MS',
    onUpload: async (file) => {
      // Simula upload
      await new Promise((r) => setTimeout(r, 2000))
      console.log('Uploaded:', file.name)
    },
  },
}

export const ComFotoExistente: Story = {
  args: {
    value: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    size: 'lg',
  },
}

export const PequenoComIniciais: Story = {
  args: {
    size: 'sm',
    fallbackInitials: 'JR',
  },
}

export const MedioSemFoto: Story = {
  args: {
    size: 'md',
  },
}

export const Loading: Story = {
  args: {
    size: 'lg',
    loading: true,
    fallbackInitials: 'PO',
  },
}

export const Desabilitado: Story = {
  args: {
    size: 'md',
    disabled: true,
    fallbackInitials: 'AC',
  },
}
