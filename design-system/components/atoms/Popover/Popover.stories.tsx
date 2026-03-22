import type { Meta, StoryObj } from '@storybook/react'
import { Info, Calendar, User, MapPin } from 'lucide-react'
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from './Popover'
import { Button } from '../Button/Button'
import { Badge } from '../Badge/Badge'

const meta: Meta = {
  title: 'Atoms/Popover',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

export const Default: StoryObj = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" leftIcon={<Info size={15} />}>Detalhes do lead</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm font-semibold text-white mb-1">Dra. Camila Rocha</p>
        <p className="text-xs text-mist">Última interação há 2 dias. Score de qualificação: 87/100.</p>
      </PopoverContent>
    </Popover>
  ),
}

export const ComClose: StoryObj = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Perfil do dentista</Button>
      </PopoverTrigger>
      <PopoverContent className="relative">
        <PopoverClose />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <User size={14} className="text-signal" />
            <p className="text-sm font-semibold text-white">Dr. Rodrigo Lima</p>
            <Badge variant="success" size="sm">Ativo</Badge>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-xs text-mist">
              <MapPin size={12} />
              <span>Sorriso Total — São Paulo</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-mist">
              <Calendar size={12} />
              <span>Cliente desde Jan/2025</span>
            </div>
          </div>
          <p className="text-xs text-mist border-t border-steel pt-2">Ticket médio: <span className="text-white font-medium">R$2.800</span></p>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Alinhamentos: StoryObj = {
  render: () => (
    <div className="flex items-center gap-4">
      {(['start', 'center', 'end'] as const).map(align => (
        <Popover key={align}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">{align}</Button>
          </PopoverTrigger>
          <PopoverContent align={align}>
            <p className="text-xs text-mist">Alinhamento: <span className="text-white font-medium">{align}</span></p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}
