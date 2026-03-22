'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Accordion>

const faqItems = [
  {
    value: 'clareamento',
    question: 'O clareamento dental e seguro?',
    answer:
      'Sim, o clareamento dental supervisionado por um profissional e um procedimento seguro. Utilizamos produtos com concentracao controlada de peroxido de hidrogenio, minimizando riscos de sensibilidade. O tratamento dura em media 3 sessoes.',
  },
  {
    value: 'implante',
    question: 'Quanto tempo dura o processo de implante?',
    answer:
      'O processo completo de implante dentario leva entre 3 a 6 meses, incluindo a fase de osseointegração. A cirurgia em si dura de 1 a 2 horas. Apos a instalacao do implante, aguardamos a cicatrizacao antes de colocar a protese definitiva.',
  },
  {
    value: 'ortodontia',
    question: 'Qual a diferenca entre aparelho fixo e alinhadores?',
    answer:
      'O aparelho fixo utiliza brackets colados nos dentes, sendo mais indicado para casos complexos. Os alinhadores transparentes (tipo Invisalign) sao removiveis e mais esteticos, ideais para correcoes leves a moderadas. Ambos tem excelentes resultados quando bem indicados.',
  },
  {
    value: 'facetas',
    question: 'Facetas de porcelana duram quanto tempo?',
    answer:
      'Facetas de porcelana bem cuidadas duram entre 10 a 15 anos. A durabilidade depende de habitos como nao roer unhas, evitar alimentos muito duros e manter a higiene bucal rigorosa. Revisoes semestrais ajudam a garantir a longevidade.',
  },
  {
    value: 'profilaxia',
    question: 'Com que frequencia devo fazer limpeza?',
    answer:
      'Recomendamos limpeza profissional (profilaxia) a cada 6 meses. Para pacientes com historico de doenca periodontal, o intervalo pode ser reduzido para 3 a 4 meses conforme avaliacao do dentista.',
  },
]

/* ── Single expand (default) ──────────────────────────────────────────────── */
export const FAQTratamentos: Story = {
  render: () => (
    <div className="max-w-lg">
      <h3 className="font-display font-semibold text-white text-lg mb-4">
        Perguntas frequentes
      </h3>
      <Accordion type="single" collapsible defaultValue="clareamento">
        {faqItems.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
  name: 'FAQ Tratamentos',
}

/* ── Multiple expand ──────────────────────────────────────────────────────── */
export const MultipleExpand: Story = {
  render: () => (
    <div className="max-w-lg">
      <h3 className="font-display font-semibold text-white text-lg mb-4">
        Multipla expansao
      </h3>
      <Accordion type="multiple" defaultValue={['clareamento', 'implante']}>
        {faqItems.slice(0, 3).map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
}

/* ── Card variant ─────────────────────────────────────────────────────────── */
export const CardVariant: Story = {
  render: () => (
    <div className="max-w-lg">
      <Accordion type="single" collapsible variant="card">
        {faqItems.slice(0, 3).map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
}

/* ── Disabled items ───────────────────────────────────────────────────────── */
export const ComItemDesabilitado: Story = {
  render: () => (
    <div className="max-w-lg">
      <Accordion type="single" collapsible>
        <AccordionItem value="ativo">
          <AccordionTrigger>Item ativo</AccordionTrigger>
          <AccordionContent>Este item pode ser expandido normalmente.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="desabilitado" disabled>
          <AccordionTrigger>Item desabilitado</AccordionTrigger>
          <AccordionContent>Este conteudo nao aparece.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="outro">
          <AccordionTrigger>Outro item ativo</AccordionTrigger>
          <AccordionContent>Este tambem funciona normalmente.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  name: 'Com item desabilitado',
}
