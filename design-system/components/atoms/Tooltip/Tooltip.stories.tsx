import type { Meta, StoryObj } from '@storybook/react'
import { Info, HelpCircle, AlertTriangle } from 'lucide-react'
import { Tooltip } from './Tooltip'
import { Button } from '../Button/Button'
import { Badge } from '../Badge/Badge'

const meta: Meta = {
  title: 'Atoms/Tooltip',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

export const Default: StoryObj = {
  render: () => (
    <Tooltip content="Clique para ver os detalhes do lead">
      <Button variant="secondary">Hover aqui</Button>
    </Tooltip>
  ),
}

export const Posicoes: StoryObj = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 place-items-center p-8">
      <Tooltip content="Tooltip no topo" side="top">
        <Button variant="outline" size="sm">top</Button>
      </Tooltip>
      <Tooltip content="Tooltip à direita" side="right">
        <Button variant="outline" size="sm">right</Button>
      </Tooltip>
      <Tooltip content="Tooltip embaixo" side="bottom">
        <Button variant="outline" size="sm">bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip à esquerda" side="left">
        <Button variant="outline" size="sm">left</Button>
      </Tooltip>
    </div>
  ),
}

export const ComIcones: StoryObj = {
  render: () => (
    <div className="flex items-center gap-6">
      <Tooltip content="Esta ação não pode ser desfeita.">
        <AlertTriangle size={18} className="text-warning cursor-help" />
      </Tooltip>
      <Tooltip content="Score calculado com base nas interações dos últimos 30 dias.">
        <Info size={18} className="text-mist cursor-help" />
      </Tooltip>
      <Tooltip content="Leads qualificados têm score acima de 70.">
        <HelpCircle size={18} className="text-mist cursor-help" />
      </Tooltip>
    </div>
  ),
}

export const ComBadge: StoryObj = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip content="12 leads aguardando qualificação">
        <Badge variant="warning">12 pendentes</Badge>
      </Tooltip>
      <Tooltip content="6 leads convertidos este mês">
        <Badge variant="success" dot>Convertidos</Badge>
      </Tooltip>
    </div>
  ),
}
