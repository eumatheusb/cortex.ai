import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'
import { Card, CardContent } from '../Card/Card'

const meta: Meta = {
  title: 'Molecules/Tabs',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta

export const Line: StoryObj = {
  render: () => (
    <div className="w-[480px]">
      <Tabs defaultValue="leads">
        <TabsList>
          <TabsTrigger value="leads" badge={12}>Leads</TabsTrigger>
          <TabsTrigger value="clientes">Clientes</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
        </TabsList>
        <TabsContent value="leads">
          <Card><CardContent><p className="text-mist text-sm">Conteúdo de Leads</p></CardContent></Card>
        </TabsContent>
        <TabsContent value="clientes">
          <Card><CardContent><p className="text-mist text-sm">Conteúdo de Clientes</p></CardContent></Card>
        </TabsContent>
        <TabsContent value="relatorios">
          <Card><CardContent><p className="text-mist text-sm">Conteúdo de Relatórios</p></CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const Pill: StoryObj = {
  render: () => (
    <div className="w-[480px]">
      <Tabs defaultValue="semana">
        <TabsList variant="pill">
          <TabsTrigger value="hoje" variant="pill">Hoje</TabsTrigger>
          <TabsTrigger value="semana" variant="pill">Semana</TabsTrigger>
          <TabsTrigger value="mes" variant="pill">Mês</TabsTrigger>
          <TabsTrigger value="ano" variant="pill">Ano</TabsTrigger>
        </TabsList>
        <TabsContent value="semana">
          <p className="text-mist text-sm mt-2">Dados da semana</p>
        </TabsContent>
      </Tabs>
    </div>
  ),
}
