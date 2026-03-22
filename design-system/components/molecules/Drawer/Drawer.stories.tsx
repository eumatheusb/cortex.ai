'use client'

import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Drawer, DrawerRoot, DrawerTrigger, DrawerContent,
  DrawerHeader, DrawerTitle, DrawerDescription,
  DrawerBody, DrawerFooter, DrawerClose,
} from './Drawer'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import { Badge } from '../../atoms/Badge/Badge'
import { Checkbox } from '../../atoms/Checkbox/Checkbox'
import { Filter, User, Phone, Mail, Calendar, MapPin } from 'lucide-react'

const meta: Meta<typeof Drawer> = {
  title: 'Molecules/Drawer',
  component: Drawer,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Drawer>

/* ── Drawer de filtros ────────────────────────────────────────────────────── */
export const DrawerFiltros: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button variant="secondary" leftIcon={<Filter size={15} />} onClick={() => setOpen(true)}>
          Filtros
        </Button>
        <Drawer open={open} onOpenChange={setOpen} side="right" size="md">
          <DrawerHeader>
            <DrawerTitle>Filtros de leads</DrawerTitle>
            <DrawerDescription>Refine sua busca no pipeline.</DrawerDescription>
          </DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col gap-5">
              <Input label="Nome do lead" placeholder="Buscar por nome..." />
              <div>
                <p className="text-sm font-medium text-white mb-3">Status</p>
                <div className="flex flex-col gap-2">
                  {['Novo', 'Qualificado', 'Proposta enviada', 'Fechado'].map((s) => (
                    <label key={s} className="flex items-center gap-2 text-sm text-mist cursor-pointer">
                      <Checkbox />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-white mb-3">Origem</p>
                <div className="flex flex-col gap-2">
                  {['Instagram', 'Google Ads', 'Indicacao', 'Site'].map((o) => (
                    <label key={o} className="flex items-center gap-2 text-sm text-mist cursor-pointer">
                      <Checkbox />
                      {o}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose asChild><Button variant="ghost">Limpar</Button></DrawerClose>
            <Button variant="primary">Aplicar filtros</Button>
          </DrawerFooter>
        </Drawer>
      </>
    )
  },
  name: 'Filtros de leads',
}

/* ── Drawer de detalhes do paciente ───────────────────────────────────────── */
export const DetalhesPaciente: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button variant="secondary" leftIcon={<User size={15} />} onClick={() => setOpen(true)}>
          Ver paciente
        </Button>
        <Drawer open={open} onOpenChange={setOpen} side="right" size="lg">
          <DrawerHeader>
            <DrawerTitle>Dra. Camila Rocha</DrawerTitle>
            <DrawerDescription>Detalhes do paciente</DrawerDescription>
          </DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-signal/20 flex items-center justify-center text-signal font-display font-semibold text-lg">
                  CR
                </div>
                <div>
                  <p className="text-white font-medium">Dra. Camila Rocha</p>
                  <p className="text-sm text-mist">Paciente desde Mar 2024</p>
                </div>
                <Badge variant="success" className="ml-auto">Ativo</Badge>
              </div>

              <div className="grid gap-4">
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={14} className="text-mist" />
                  <span className="text-mist">(19) 99876-5432</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={14} className="text-mist" />
                  <span className="text-mist">camila.rocha@email.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={14} className="text-mist" />
                  <span className="text-mist">Indaiatuba, SP</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar size={14} className="text-mist" />
                  <span className="text-mist">Proxima consulta: 28/03/2026</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-white mb-2">Tratamentos</p>
                <div className="flex flex-wrap gap-2">
                  {['Clareamento', 'Implante', 'Limpeza'].map((t) => (
                    <Badge key={t} variant="primary">{t}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-white mb-2">Historico recente</p>
                <div className="flex flex-col gap-3">
                  {[
                    { date: '15/03/2026', desc: 'Consulta de retorno - Implante' },
                    { date: '01/03/2026', desc: 'Sessao de clareamento #2' },
                    { date: '15/02/2026', desc: 'Sessao de clareamento #1' },
                  ].map((h) => (
                    <div key={h.date} className="flex justify-between text-sm">
                      <span className="text-mist">{h.desc}</span>
                      <span className="text-ash text-xs shrink-0 ml-3">{h.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="ghost">Editar</Button>
            <Button variant="primary">Agendar consulta</Button>
          </DrawerFooter>
        </Drawer>
      </>
    )
  },
  name: 'Detalhes do paciente',
}

/* ── Bottom drawer ────────────────────────────────────────────────────────── */
export const DrawerInferior: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Abrir drawer inferior
        </Button>
        <Drawer open={open} onOpenChange={setOpen} side="bottom" size="md">
          <DrawerHeader>
            <DrawerTitle>Acoes rapidas</DrawerTitle>
            <DrawerDescription>Escolha uma acao para o lead selecionado.</DrawerDescription>
          </DrawerHeader>
          <DrawerBody>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Ligar', icon: Phone },
                { label: 'E-mail', icon: Mail },
                { label: 'Agendar', icon: Calendar },
                { label: 'Ver perfil', icon: User },
              ].map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-dusk hover:bg-steel transition-colors text-mist hover:text-white"
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
          </DrawerBody>
        </Drawer>
      </>
    )
  },
  name: 'Drawer inferior (mobile)',
}

/* ── Left drawer ──────────────────────────────────────────────────────────── */
export const DrawerEsquerdo: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Abrir a esquerda
        </Button>
        <Drawer open={open} onOpenChange={setOpen} side="left" size="sm">
          <DrawerHeader>
            <DrawerTitle>Navegacao</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <nav className="flex flex-col gap-1">
              {['Dashboard', 'Pipeline', 'Pacientes', 'Agenda', 'Relatorios'].map((item) => (
                <button
                  key={item}
                  className="text-left px-3 py-2.5 rounded-lg text-sm text-mist hover:bg-dusk hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </DrawerBody>
        </Drawer>
      </>
    )
  },
  name: 'Drawer esquerdo',
}
