import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'Atoms/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    showValue: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    defaultValue: [50],
    label: 'Volume',
    showValue: true,
  },
}

export const PrecoTratamento: Story = {
  name: 'Preco de Tratamento',
  render: () => {
    const [value, setValue] = useState([5000, 25000])
    return (
      <Slider
        value={value}
        onValueChange={setValue}
        min={500}
        max={50000}
        step={500}
        label="Faixa de Preco"
        showValue
        formatValue={(v) =>
          new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v)
        }
        marks={[
          { value: 500, label: 'R$ 500' },
          { value: 15000, label: 'R$ 15k' },
          { value: 30000, label: 'R$ 30k' },
          { value: 50000, label: 'R$ 50k' },
        ]}
      />
    )
  },
}

export const RangeSlider: Story = {
  name: 'Range (Duracao do Tratamento)',
  args: {
    defaultValue: [3, 12],
    min: 1,
    max: 24,
    step: 1,
    label: 'Duracao (meses)',
    showValue: true,
    formatValue: (v: number) => `${v} ${v === 1 ? 'mes' : 'meses'}`,
  },
}

export const WithMarks: Story = {
  args: {
    defaultValue: [3],
    min: 1,
    max: 5,
    step: 1,
    label: 'Satisfacao do Paciente',
    showValue: true,
    marks: [
      { value: 1, label: 'Ruim' },
      { value: 2, label: 'Regular' },
      { value: 3, label: 'Bom' },
      { value: 4, label: 'Otimo' },
      { value: 5, label: 'Excelente' },
    ],
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Slider defaultValue={[30]} size="sm" label="Pequeno" showValue />
      <Slider defaultValue={[50]} size="md" label="Medio" showValue />
      <Slider defaultValue={[70]} size="lg" label="Grande" showValue />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    defaultValue: [40],
    disabled: true,
    label: 'Desabilitado',
    showValue: true,
  },
}
