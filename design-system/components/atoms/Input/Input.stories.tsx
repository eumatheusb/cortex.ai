'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { Mail, Search, Eye, Lock, Phone, Building2, DollarSign } from 'lucide-react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input placeholder="Digite algo..." />
      <Input placeholder="Com ícone esquerdo" leftIcon={<Mail size={15} />} />
      <Input placeholder="Pesquisar..." leftIcon={<Search size={15} />} />
      <Input type="password" placeholder="Senha" leftIcon={<Lock size={15} />} rightIcon={<Eye size={15} />} />
    </div>
  ),
}

export const Tamanhos: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input size="sm" placeholder="Small (sm)" leftIcon={<Search size={13} />} />
      <Input size="md" placeholder="Medium (md) — padrão" leftIcon={<Search size={15} />} />
      <Input size="lg" placeholder="Large (lg)" leftIcon={<Search size={17} />} />
    </div>
  ),
}

export const Estados: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input placeholder="Padrão" />
      <Input placeholder="Hover / Focus" leftIcon={<Mail size={15} />} />
      <Input placeholder="Com erro" state="error" hint="E-mail inválido" leftIcon={<Mail size={15} />} />
      <Input placeholder="Com sucesso" state="success" hint="E-mail verificado" leftIcon={<Mail size={15} />} />
      <Input placeholder="Desabilitado" disabled leftIcon={<Mail size={15} />} />
      <Input placeholder="Somente leitura" readOnly value="dr.rodrigo@sorriso.com" leftIcon={<Mail size={15} />} />
    </div>
  ),
}

export const ComLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="E-mail" placeholder="voce@clinica.com" leftIcon={<Mail size={15} />} />
      <Input label="Senha" type="password" placeholder="••••••••" leftIcon={<Lock size={15} />} />
      <Input label="Telefone" placeholder="(11) 99999-9999" leftIcon={<Phone size={15} />} hint="Com DDD" />
      <Input label="Nome da clínica" placeholder="Sorriso Total" leftIcon={<Building2 size={15} />} required />
      <Input label="Ticket médio" placeholder="0,00" leftIcon={<DollarSign size={15} />} error="Valor obrigatório." />
    </div>
  ),
  name: 'Com label e hints',
}

export const Busca: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <Input size="sm" placeholder="Buscar leads..." leftIcon={<Search size={13} />} />
      <Input size="md" placeholder="Buscar por nome ou clínica..." leftIcon={<Search size={15} />} />
      <Input size="lg" placeholder="Pesquisa avançada..." leftIcon={<Search size={17} />} />
    </div>
  ),
  name: 'Campos de busca',
}
