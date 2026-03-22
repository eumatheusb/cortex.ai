import type { Meta, StoryObj } from '@storybook/react'
import { ToastProvider, useToast } from './Toast'
import { Button } from '../../atoms/Button/Button'

const meta: Meta = {
  title: 'Molecules/Toast',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <ToastProvider><Story /></ToastProvider>],
}
export default meta

function ToastDemo() {
  const { toast } = useToast()
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="secondary" onClick={() => toast.default('Notificação padrão', { description: 'Algo aconteceu no sistema.' })}>Default</Button>
      <Button variant="secondary" onClick={() => toast.success('Lead convertido!', { description: 'Dra. Camila Rocha assinou o contrato.' })}>Success</Button>
      <Button variant="secondary" onClick={() => toast.warning('Limite próximo', { description: 'Você atingiu 80% do seu plano.' })}>Warning</Button>
      <Button variant="secondary" onClick={() => toast.error('Erro ao salvar', { description: 'Tente novamente em instantes.' })}>Error</Button>
      <Button variant="secondary" onClick={() => toast.info('Nova integração', { description: 'Meta Ads conectado com sucesso.', action: { label: 'Ver detalhes', onClick: () => {} } })}>Com ação</Button>
    </div>
  )
}

export const AllVariants: StoryObj = { render: () => <ToastDemo /> }
