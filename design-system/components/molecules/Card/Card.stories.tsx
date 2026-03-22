'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'
import { Badge } from '../../atoms/Badge/Badge'
import { Button } from '../../atoms/Button/Button'

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Card>

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[640px]">
      {(['default', 'elevated', 'bordered', 'ghost', 'interactive', 'signal'] as const).map(v => (
        <Card key={v} variant={v}>
          <CardContent>
            <p className="text-sm font-semibold text-white capitalize">{v}</p>
            <p className="text-xs text-mist mt-1">Variante do card</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
}

export const Full: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Dra. Camila Rocha</CardTitle>
          <Badge variant="success" dot>Ativo</Badge>
        </div>
        <CardDescription>OdontoVida SP — São Paulo</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
            <span className="text-mist">Ticket médio</span>
            <span className="text-white font-mono">R$3.200</span>
          </div>
          <div className="flex justify-between">
            <span className="text-mist">Origem</span>
            <span className="text-white">Meta Ads</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="sm" className="w-full">Ver detalhes</Button>
      </CardFooter>
    </Card>
  ),
}

export const Signal: Story = {
  render: () => (
    <Card variant="signal" className="w-72">
      <CardContent>
        <p className="font-display text-xs font-semibold uppercase tracking-wider text-signal-light mb-3">Meta do mês</p>
        <p className="font-display font-bold text-3xl text-white">68%</p>
        <div className="mt-3 h-1.5 rounded-full bg-signal/20">
          <div className="h-full w-[68%] rounded-full bg-signal" />
        </div>
        <p className="text-xs text-mist mt-2">R$48.2K de R$70K</p>
      </CardContent>
    </Card>
  ),
}
