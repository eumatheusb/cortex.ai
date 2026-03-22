import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TimePicker } from './TimePicker'

const meta: Meta<typeof TimePicker> = {
  title: 'Atoms/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    format: { control: 'select', options: ['24h', '12h'] },
    step: { control: 'select', options: [15, 30, 60] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="w-[280px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TimePicker>

export const AgendamentoConsulta: Story = {
  name: 'Agendamento de Consulta',
  render: () => {
    const [time, setTime] = useState<string | undefined>(undefined)
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Horario da Consulta"
        placeholder="Selecione o horario"
        minTime="08:00"
        maxTime="18:00"
        step={30}
      />
    )
  },
}

export const Format24h: Story = {
  name: '24 horas (step 15min)',
  render: () => {
    const [time, setTime] = useState<string | undefined>('14:30')
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Horario"
        format="24h"
        step={15}
      />
    )
  },
}

export const Format12h: Story = {
  name: '12 horas (AM/PM)',
  render: () => {
    const [time, setTime] = useState<string | undefined>('2:30 PM')
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Horario"
        format="12h"
        step={30}
      />
    )
  },
}

export const DisabledTimes: Story = {
  name: 'Horarios Indisponiveis (almoco)',
  render: () => {
    const [time, setTime] = useState<string | undefined>(undefined)
    return (
      <TimePicker
        value={time}
        onChange={setTime}
        label="Horario Disponivel"
        minTime="08:00"
        maxTime="18:00"
        step={30}
        disabledTimes={['12:00', '12:30', '13:00']}
      />
    )
  },
}

export const WithError: Story = {
  args: {
    label: 'Horario',
    value: '22:00',
    error: 'Horario fora do expediente',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Horario',
    disabled: true,
    placeholder: 'Indisponivel',
  },
}
