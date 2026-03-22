import type { Meta, StoryObj } from '@storybook/react'
import { useState, useCallback } from 'react'
import { Combobox, type ComboboxOption } from './Combobox'

const meta: Meta<typeof Combobox> = {
  title: 'Atoms/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    multiple: { control: 'boolean' },
    creatable: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="w-[340px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Combobox>

const pacientes: ComboboxOption[] = [
  { value: 'pac-001', label: 'Ana Paula Silva', description: 'CPF: 123.456.789-00 | Ortodontia' },
  { value: 'pac-002', label: 'Carlos Eduardo Santos', description: 'CPF: 234.567.890-11 | Implante' },
  { value: 'pac-003', label: 'Fernanda Lima', description: 'CPF: 345.678.901-22 | Clareamento' },
  { value: 'pac-004', label: 'Gustavo Henrique', description: 'CPF: 456.789.012-33 | Endodontia' },
  { value: 'pac-005', label: 'Isabella Martins', description: 'CPF: 567.890.123-44 | Protese' },
  { value: 'pac-006', label: 'Joao Pedro Costa', description: 'CPF: 678.901.234-55 | Periodontia' },
  { value: 'pac-007', label: 'Larissa Oliveira', description: 'CPF: 789.012.345-66 | Cirurgia' },
  { value: 'pac-008', label: 'Matheus Almeida', description: 'CPF: 890.123.456-77 | Avaliacao' },
]

export const BuscaPaciente: Story = {
  name: 'Busca de Paciente',
  render: () => {
    const [value, setValue] = useState<string | string[]>('')
    return (
      <Combobox
        options={pacientes}
        value={value}
        onChange={setValue}
        label="Paciente"
        placeholder="Buscar paciente..."
        searchPlaceholder="Nome ou CPF..."
      />
    )
  },
}

export const MultiSelect: Story = {
  name: 'Selecao Multipla (Dentistas)',
  render: () => {
    const dentistas: ComboboxOption[] = [
      { value: 'dr-01', label: 'Dr. Ricardo Mello', description: 'Ortodontia' },
      { value: 'dr-02', label: 'Dra. Camila Reis', description: 'Implantodontia' },
      { value: 'dr-03', label: 'Dr. Felipe Nunes', description: 'Endodontia' },
      { value: 'dr-04', label: 'Dra. Patricia Souza', description: 'Periodontia' },
      { value: 'dr-05', label: 'Dr. Andre Barbosa', description: 'Cirurgia' },
    ]
    const [value, setValue] = useState<string | string[]>([])
    return (
      <Combobox
        options={dentistas}
        value={value}
        onChange={setValue}
        label="Equipe Responsavel"
        placeholder="Selecionar dentistas..."
        multiple
      />
    )
  },
}

export const AsyncLoading: Story = {
  name: 'Busca Assincrona',
  render: () => {
    const [value, setValue] = useState<string | string[]>('')
    const [loading, setLoading] = useState(false)
    const [options, setOptions] = useState<ComboboxOption[]>(pacientes)

    const handleSearch = useCallback((query: string) => {
      setLoading(true)
      setTimeout(() => {
        setOptions(
          pacientes.filter((p) =>
            p.label.toLowerCase().includes(query.toLowerCase()) ||
            p.description?.toLowerCase().includes(query.toLowerCase()),
          ),
        )
        setLoading(false)
      }, 500)
    }, [])

    return (
      <Combobox
        options={options}
        value={value}
        onChange={setValue}
        onSearch={handleSearch}
        label="Busca no CRM"
        placeholder="Digite para buscar..."
        loading={loading}
      />
    )
  },
}

export const Creatable: Story = {
  name: 'Criar Nova Opcao',
  render: () => {
    const [value, setValue] = useState<string | string[]>('')
    const [options, setOptions] = useState<ComboboxOption[]>([
      { value: 'conv-01', label: 'Amil Dental' },
      { value: 'conv-02', label: 'Bradesco Dental' },
      { value: 'conv-03', label: 'SulAmerica Odonto' },
      { value: 'conv-04', label: 'Unimed Dental' },
    ])

    return (
      <Combobox
        options={options}
        value={value}
        onChange={setValue}
        label="Convenio"
        placeholder="Selecionar ou criar..."
        creatable
        onCreateOption={(label) => {
          const newOpt = { value: `conv-${Date.now()}`, label }
          setOptions((prev) => [...prev, newOpt])
          setValue(newOpt.value)
        }}
      />
    )
  },
}

export const WithError: Story = {
  args: {
    options: pacientes,
    label: 'Paciente',
    error: 'Paciente obrigatorio',
    placeholder: 'Selecionar paciente...',
  },
}

export const Disabled: Story = {
  args: {
    options: pacientes,
    label: 'Paciente',
    disabled: true,
    placeholder: 'Indisponivel',
  },
}
