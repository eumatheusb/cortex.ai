import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import {
  MoreHorizontal, Edit, Trash2, Eye, Download, Copy,
  Settings, Users, Bell, LogOut, ChevronDown,
  Star, Archive, Share2,
} from 'lucide-react'
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut,
  DropdownMenuCheckboxItem, DropdownMenuGroup,
} from './DropdownMenu'
import { Button } from '../../atoms/Button/Button'
import { Avatar } from '../../atoms/Avatar/Avatar'

const meta: Meta = {
  title: 'Molecules/DropdownMenu',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

export const Default: StoryObj = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Ações do lead</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Eye />Ver detalhes<DropdownMenuShortcut>⌘V</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuItem><Edit />Editar<DropdownMenuShortcut>⌘E</DropdownMenuShortcut></DropdownMenuItem>
        <DropdownMenuItem><Copy />Duplicar</DropdownMenuItem>
        <DropdownMenuItem><Download />Exportar</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive><Trash2 />Excluir<DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const ComCheckboxItems: StoryObj = {
  render: () => {
    const [starred, setStarred]   = React.useState(true)
    const [archived, setArchived] = React.useState(false)
    const [shared, setShared]     = React.useState(false)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" leftIcon={<Settings size={15} />}>Preferências</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Visibilidade do lead</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={starred} onCheckedChange={setStarred}>
            <Star className="h-4 w-4 mr-1 text-warning" />
            Favoritado
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={archived} onCheckedChange={setArchived}>
            <Archive className="h-4 w-4 mr-1" />
            Arquivado
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={shared} onCheckedChange={setShared}>
            <Share2 className="h-4 w-4 mr-1" />
            Compartilhado com equipe
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
  name: 'Com CheckboxItems',
}

export const ComGrupos: StoryObj = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" leftIcon={<Settings size={15} />} rightIcon={<ChevronDown size={13} />}>
          Configurações
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Conta</DropdownMenuLabel>
          <DropdownMenuItem><Users />Perfil<DropdownMenuShortcut>⌘P</DropdownMenuShortcut></DropdownMenuItem>
          <DropdownMenuItem><Bell />Notificações</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Equipe</DropdownMenuLabel>
          <DropdownMenuItem><Users />Membros</DropdownMenuItem>
          <DropdownMenuItem><Settings />Permissões</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive><LogOut />Sair<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  name: 'Com grupos e separadores',
}

export const MenuUsuario: StoryObj = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-dusk transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60">
          <Avatar name="Matheus Batista" size="sm" status="online" />
          <div className="text-left">
            <p className="text-xs font-medium text-white">Matheus Batista</p>
            <p className="text-xs text-mist">Admin</p>
          </div>
          <ChevronDown size={13} className="text-ash ml-1" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Users />Perfil</DropdownMenuItem>
        <DropdownMenuItem><Settings />Configurações</DropdownMenuItem>
        <DropdownMenuItem><Bell />Notificações</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive><LogOut />Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  name: 'Menu de usuário',
}

export const AlinhamentoDireita: StoryObj = {
  render: () => (
    <div className="flex justify-end w-64">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem><Eye />Ver</DropdownMenuItem>
          <DropdownMenuItem><Edit />Editar</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem destructive><Trash2 />Excluir</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
  name: 'Alinhado à direita',
}
