import type { Meta, StoryObj } from '@storybook/react'
import { Mail, Phone, Building2 } from 'lucide-react'
import { FormField, FormSection } from './FormField'

const meta: Meta = {
  title: 'Molecules/FormField',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

export const Default: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 w-[360px]">
      <FormField label="Nome completo" placeholder="Dr. Fulano de Tal" />
      <FormField label="E-mail" placeholder="doutor@clinica.com" leftIcon={<Mail size={15} />} required />
      <FormField label="Telefone" placeholder="(11) 99999-9999" leftIcon={<Phone size={15} />} hint="Com DDD" />
      <FormField label="Clínica" placeholder="Nome da clínica" leftIcon={<Building2 size={15} />} error="Campo obrigatório." />
    </div>
  ),
}

export const ComSecao: StoryObj = {
  render: () => (
    <div className="w-[420px]">
      <FormSection
        title="Dados do lead"
        description="Preencha as informações básicas para cadastrar um novo lead no CRM."
      >
        <FormField label="Nome" placeholder="Dr. Rodrigo Lima" required />
        <FormField label="E-mail" placeholder="rodrigo@sorriso.com" leftIcon={<Mail size={15} />} />
        <FormField label="Clínica" placeholder="Sorriso Total" leftIcon={<Building2 size={15} />} optional />
      </FormSection>
    </div>
  ),
  name: 'Com FormSection',
}

export const Estados: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 w-[360px]">
      <FormField label="Padrão" placeholder="Digite aqui..." />
      <FormField label="Com dica" placeholder="Digite aqui..." hint="Máximo de 50 caracteres" />
      <FormField label="Com erro" placeholder="Digite aqui..." error="Este campo é obrigatório." />
      <FormField label="Desabilitado" placeholder="Sem edição" disabled />
    </div>
  ),
}
