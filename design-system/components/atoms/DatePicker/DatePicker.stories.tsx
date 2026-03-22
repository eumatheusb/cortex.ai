import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'Atoms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    mode: { control: 'select', options: ['single', 'range'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const DataConsulta: Story = {
  name: 'Data da Consulta',
  render: () => {
    const [date, setDate] = useState<Date | null>(null)
    return (
      <DatePicker
        mode="single"
        value={date}
        onChange={(d) => setDate(d ?? null)}
        label="Data da Consulta"
        placeholder="dd/mm/aaaa"
        minDate={new Date()}
      />
    )
  },
}

export const PeriodoTratamento: Story = {
  name: 'Periodo de Tratamento (Range)',
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>(undefined)
    return (
      <DatePicker
        mode="range"
        rangeValue={range}
        onRangeChange={setRange}
        label="Periodo do Tratamento"
        placeholder="Selecione o periodo"
      />
    )
  },
}

export const WithMinMax: Story = {
  name: 'Com datas min/max',
  render: () => {
    const [date, setDate] = useState<Date | null>(null)
    const today = new Date()
    const threeMonths = new Date()
    threeMonths.setMonth(threeMonths.getMonth() + 3)
    return (
      <DatePicker
        mode="single"
        value={date}
        onChange={(d) => setDate(d ?? null)}
        label="Agendar (proximo trimestre)"
        minDate={today}
        maxDate={threeMonths}
      />
    )
  },
}

export const DisabledDates: Story = {
  name: 'Datas bloqueadas',
  render: () => {
    const [date, setDate] = useState<Date | null>(null)
    const today = new Date()
    const blocked = [1, 3, 5].map((d) => {
      const dt = new Date()
      dt.setDate(today.getDate() + d)
      return dt
    })
    return (
      <DatePicker
        mode="single"
        value={date}
        onChange={(d) => setDate(d ?? null)}
        label="Datas disponiveis"
        disabledDates={blocked}
        minDate={today}
      />
    )
  },
}

export const WithError: Story = {
  render: () => (
    <DatePicker
      mode="single"
      label="Data de Nascimento"
      error="Data obrigatoria"
    />
  ),
}

export const Disabled: Story = {
  args: {
    label: 'Data',
    disabled: true,
    placeholder: 'Indisponivel',
  },
}
