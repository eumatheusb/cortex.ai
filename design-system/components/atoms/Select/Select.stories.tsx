import type { Meta, StoryObj } from '@storybook/react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator } from './Select'

const meta: Meta = {
  title: 'Atoms/Select',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

export const Default: StoryObj = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Selecione um status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="novo">Novo</SelectItem>
        <SelectItem value="qualificado">Qualificado</SelectItem>
        <SelectItem value="proposta">Proposta</SelectItem>
        <SelectItem value="fechado">Fechado</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithGroups: StoryObj = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Selecione uma clínica" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>São Paulo</SelectLabel>
          <SelectItem value="sp1">OdontoVida SP</SelectItem>
          <SelectItem value="sp2">Sorriso Total</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Minas Gerais</SelectLabel>
          <SelectItem value="mg1">DenteSã MG</SelectItem>
          <SelectItem value="mg2">Clínica Bella</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: StoryObj = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Campo desabilitado" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Opção A</SelectItem>
      </SelectContent>
    </Select>
  ),
}
