import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = { args: { placeholder: 'Escreva suas observações...', label: 'Observações' } }
export const WithHint: Story = { args: { label: 'Anotação', placeholder: 'Escreva aqui...', hint: 'Máximo de 500 caracteres.' } }
export const WithError: Story = { args: { label: 'Descrição', placeholder: 'Escreva aqui...', error: 'Campo obrigatório.' } }
export const WithCount: Story = { args: { label: 'Mensagem', placeholder: 'Escreva aqui...', showCount: true, maxLength: 200 } }
export const Disabled: Story = { args: { label: 'Campo desabilitado', value: 'Conteúdo travado', disabled: true } }
