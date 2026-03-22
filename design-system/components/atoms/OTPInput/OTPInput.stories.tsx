import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { OTPInput } from './OTPInput'

const meta: Meta<typeof OTPInput> = {
  title: 'Atoms/OTPInput',
  component: OTPInput,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    length: { control: 'select', options: [4, 6] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof OTPInput>

export const SixDigits: Story = {
  name: 'Verificacao WhatsApp (6 digitos)',
  render: () => {
    const [value, setValue] = useState('')
    const [status, setStatus] = useState('')
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-mist">
          Digite o codigo enviado para o WhatsApp do paciente
        </p>
        <OTPInput
          length={6}
          value={value}
          onChange={setValue}
          onComplete={(code) => setStatus(`Codigo recebido: ${code}`)}
        />
        {status && <p className="text-xs text-success">{status}</p>}
      </div>
    )
  },
}

export const FourDigits: Story = {
  name: 'Confirmacao SMS (4 digitos)',
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-mist">Codigo de confirmacao SMS</p>
        <OTPInput
          length={4}
          value={value}
          onChange={setValue}
          onComplete={(code) => alert(`Confirmado: ${code}`)}
        />
      </div>
    )
  },
}

export const WithError: Story = {
  args: {
    length: 6,
    error: 'Codigo invalido. Tente novamente.',
  },
}

export const Disabled: Story = {
  args: {
    length: 6,
    disabled: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-6">
      <div>
        <p className="text-xs text-mist mb-2 text-center">Pequeno</p>
        <OTPInput length={4} size="sm" autoFocus={false} />
      </div>
      <div>
        <p className="text-xs text-mist mb-2 text-center">Medio</p>
        <OTPInput length={4} size="md" autoFocus={false} />
      </div>
      <div>
        <p className="text-xs text-mist mb-2 text-center">Grande</p>
        <OTPInput length={4} size="lg" autoFocus={false} />
      </div>
    </div>
  ),
}

export const PreFilled: Story = {
  name: 'Pre-preenchido',
  args: {
    length: 6,
    value: '483921',
    autoFocus: false,
  },
}
