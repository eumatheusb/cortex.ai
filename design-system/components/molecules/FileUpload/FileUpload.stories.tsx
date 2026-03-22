import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FileUpload, type FileItem } from './FileUpload'

const meta: Meta<typeof FileUpload> = {
  title: 'Molecules/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    maxSizeMB: { control: 'number' },
    maxFiles: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <div className="w-[440px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof FileUpload>

export const UploadRaioX: Story = {
  name: 'Upload de Raio-X',
  render: () => {
    const [files, setFiles] = useState<FileItem[]>([])
    return (
      <FileUpload
        value={files}
        onChange={setFiles}
        label="Radiografia"
        hint="Formatos aceitos: JPEG, PNG, DICOM"
        accept="image/jpeg,image/png,.dcm"
        maxSizeMB={50}
        onUpload={async (file) => {
          await new Promise((r) => setTimeout(r, 1500))
          if (Math.random() > 0.8) throw new Error('Falha')
        }}
      />
    )
  },
}

export const FotoIntraoral: Story = {
  name: 'Foto Intraoral',
  render: () => {
    const [files, setFiles] = useState<FileItem[]>([])
    return (
      <FileUpload
        value={files}
        onChange={setFiles}
        label="Fotos Intraorais"
        hint="Envie ate 6 fotos do protocolo fotografico"
        accept="image/*"
        maxFiles={6}
        maxSizeMB={10}
        onUpload={async () => {
          await new Promise((r) => setTimeout(r, 1000))
        }}
      />
    )
  },
}

export const DocumentosPaciente: Story = {
  name: 'Documentos do Paciente',
  render: () => {
    const [files, setFiles] = useState<FileItem[]>([])
    return (
      <FileUpload
        value={files}
        onChange={setFiles}
        label="Documentos"
        hint="RG, CPF, comprovante de endereco"
        accept=".pdf,image/*"
        maxFiles={5}
        maxSizeMB={5}
      />
    )
  },
}

export const SingleFile: Story = {
  name: 'Arquivo Unico',
  render: () => {
    const [files, setFiles] = useState<FileItem[]>([])
    return (
      <FileUpload
        value={files}
        onChange={setFiles}
        label="Atestado Medico"
        multiple={false}
        maxFiles={1}
        accept=".pdf"
        maxSizeMB={2}
      />
    )
  },
}

export const WithError: Story = {
  render: () => (
    <FileUpload
      label="Exame"
      error="Arquivo obrigatorio para prosseguir"
      accept="image/*,.pdf"
    />
  ),
}

export const Disabled: Story = {
  args: {
    label: 'Upload',
    disabled: true,
  },
}
