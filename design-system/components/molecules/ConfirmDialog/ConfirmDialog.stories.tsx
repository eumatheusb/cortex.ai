'use client'

import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ConfirmDialog } from './ConfirmDialog'
import { Button } from '../../atoms/Button/Button'
import { Alert } from '../../molecules/Alert/Alert'
import { Trash2, XCircle, AlertTriangle } from 'lucide-react'

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Molecules/ConfirmDialog',
  component: ConfirmDialog,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof ConfirmDialog>

/* ── Excluir paciente ─────────────────────────────────────────────────────── */
export const ExcluirPaciente: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const handleConfirm = async () => {
      setLoading(true)
      await new Promise((r) => setTimeout(r, 2000))
      setLoading(false)
    }

    return (
      <>
        <Button variant="destructive" leftIcon={<Trash2 size={15} />} onClick={() => setOpen(true)}>
          Excluir paciente
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          variant="danger"
          title="Excluir paciente?"
          description="Esta acao e irreversivel. Todos os dados do paciente, historico de consultas e documentos serao permanentemente removidos."
          confirmLabel="Sim, excluir"
          cancelLabel="Manter paciente"
          onConfirm={handleConfirm}
          loading={loading}
        />
      </>
    )
  },
  name: 'Excluir paciente',
}

/* ── Cancelar consulta ────────────────────────────────────────────────────── */
export const CancelarConsulta: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    return (
      <>
        <Button variant="secondary" leftIcon={<XCircle size={15} />} onClick={() => setOpen(true)}>
          Cancelar consulta
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          variant="warning"
          title="Cancelar consulta?"
          description="A consulta de Dra. Camila Rocha agendada para 28/03/2026 as 14h sera cancelada. O paciente sera notificado por e-mail."
          confirmLabel="Cancelar consulta"
          cancelLabel="Manter"
          onConfirm={() => {}}
          icon={<AlertTriangle size={20} />}
        />
      </>
    )
  },
  name: 'Cancelar consulta',
}

/* ── Info variant ─────────────────────────────────────────────────────────── */
export const ConfirmarAcao: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    return (
      <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Enviar orcamento
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          variant="info"
          title="Enviar orcamento?"
          description="O orcamento sera enviado por e-mail para o paciente. Voce podera acompanhar o status na aba de orcamentos."
          confirmLabel="Enviar"
          cancelLabel="Revisar"
          onConfirm={() => {}}
        />
      </>
    )
  },
  name: 'Confirmar envio',
}

/* ── Com conteudo customizado ─────────────────────────────────────────────── */
export const ComConteudoCustom: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Excluir leads em massa
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          variant="danger"
          title="Excluir 12 leads?"
          description="Os leads selecionados serao permanentemente removidos."
          confirmLabel="Excluir todos"
          onConfirm={() => {}}
        >
          <Alert variant="error" title="Atencao">
            Esta acao nao pode ser desfeita. Voce esta prestes a excluir 12 leads e todos os seus dados associados.
          </Alert>
        </ConfirmDialog>
      </>
    )
  },
  name: 'Com conteudo customizado',
}
