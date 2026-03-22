'use client'

import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Modal, ModalHeader, ModalTitle, ModalDescription,
  ModalBody, ModalFooter, ModalClose,
} from './Modal'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../atoms/Select/Select'
import { Textarea } from '../../atoms/Textarea/Textarea'
import { Alert } from '../../molecules/Alert/Alert'
import { Mail, Building2, AlertTriangle, Plus } from 'lucide-react'

const meta: Meta<typeof Modal> = {
  title: 'Organisms/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Modal>

/* helper */
function ModalDemo({
  label,
  size,
  children,
  trigger,
}: {
  label: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  children: React.ReactNode
  trigger?: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      {trigger ?? <Button variant="primary" onClick={() => setOpen(true)}>{label}</Button>}
      <Modal open={open} onOpenChange={setOpen} size={size}>
        {children}
      </Modal>
    </>
  )
}

/* ── Default ──────────────────────────────────────────────────────────────── */
export const Default: Story = {
  render: () => (
    <ModalDemo label="Novo lead" size="md">
      <ModalHeader>
        <ModalTitle>Novo lead</ModalTitle>
        <ModalDescription>Preencha os dados do lead para continuar.</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <Input label="Nome" placeholder="Dr. Fulano de Tal" leftIcon={<Mail size={15} />} required />
          <Input label="Clínica" placeholder="Sorriso Total" leftIcon={<Building2 size={15} />} />
          <Select>
            <SelectTrigger><SelectValue placeholder="Status inicial" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="novo">Novo</SelectItem>
              <SelectItem value="qualificado">Qualificado</SelectItem>
              <SelectItem value="proposta">Proposta</SelectItem>
            </SelectContent>
          </Select>
          <Textarea label="Observações" placeholder="Notas sobre o lead..." rows={3} />
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild><Button variant="ghost">Cancelar</Button></ModalClose>
        <Button variant="primary" leftIcon={<Plus size={15} />}>Salvar lead</Button>
      </ModalFooter>
    </ModalDemo>
  ),
}

/* ── Tamanhos ─────────────────────────────────────────────────────────────── */
export const Tamanhos: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {(['sm', 'md', 'lg', 'xl', '2xl'] as const).map(size => (
        <ModalDemo key={size} label={`Abrir ${size}`} size={size}>
          <ModalHeader>
            <ModalTitle>Modal — {size}</ModalTitle>
            <ModalDescription>Exemplo do tamanho <strong>{size}</strong>.</ModalDescription>
          </ModalHeader>
          <ModalBody>
            <p className="text-sm text-mist">
              Este modal usa <code className="text-signal bg-dusk px-1 rounded">size="{size}"</code>.
              Use <code className="text-signal bg-dusk px-1 rounded">md</code> para formulários padrão,{' '}
              <code className="text-signal bg-dusk px-1 rounded">lg/xl</code> para conteúdo maior.
            </p>
          </ModalBody>
          <ModalFooter>
            <ModalClose asChild><Button variant="ghost">Fechar</Button></ModalClose>
          </ModalFooter>
        </ModalDemo>
      ))}
    </div>
  ),
}

/* ── Destrutivo / Confirmação ─────────────────────────────────────────────── */
export const Destrutivo: Story = {
  render: () => (
    <ModalDemo
      label="Excluir lead"
      size="sm"
      trigger={<Button variant="destructive">Excluir lead</Button>}
    >
      <ModalHeader>
        <ModalTitle>Excluir lead</ModalTitle>
        <ModalDescription>Esta ação não pode ser desfeita.</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <Alert variant="error" title="Atenção">
          O lead <strong>Dra. Camila Rocha</strong> e todos os seus dados serão removidos permanentemente.
        </Alert>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild><Button variant="ghost">Cancelar</Button></ModalClose>
        <Button variant="destructive">Confirmar exclusão</Button>
      </ModalFooter>
    </ModalDemo>
  ),
  name: 'Destrutivo — confirmação',
}

/* ── Com scroll ───────────────────────────────────────────────────────────── */
export const ComScroll: Story = {
  render: () => (
    <ModalDemo label="Modal com scroll" size="md">
      <ModalHeader>
        <ModalTitle>Termos de uso</ModalTitle>
        <ModalDescription>Leia com atenção antes de continuar.</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4 text-sm text-mist leading-relaxed">
          {Array.from({ length: 8 }).map((_, i) => (
            <p key={i}>
              <span className="text-white font-medium">Cláusula {i + 1}.</span>{' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
          ))}
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild><Button variant="ghost">Recusar</Button></ModalClose>
        <Button variant="primary">Aceitar e continuar</Button>
      </ModalFooter>
    </ModalDemo>
  ),
  name: 'Com scroll no body',
}

/* ── Sem botão fechar ─────────────────────────────────────────────────────── */
export const SemBotaoFechar: Story = {
  render: () => (
    <ModalDemo label="Abrir modal" size="sm">
      <ModalHeader showClose={false}>
        <ModalTitle>Sessão expirada</ModalTitle>
        <ModalDescription>Faça login novamente para continuar.</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <Input label="E-mail" placeholder="voce@clinica.com" leftIcon={<Mail size={15} />} />
          <Input label="Senha" type="password" placeholder="••••••••" />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button variant="primary" className="w-full">Entrar</Button>
      </ModalFooter>
    </ModalDemo>
  ),
  name: 'Sem botão de fechar',
}
