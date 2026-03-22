'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { ResizablePanels } from './ResizablePanels'
import {
  LayoutDashboard, Users, Calendar, BarChart3, Mail, Phone,
  ArrowRightLeft, ChevronRight,
} from 'lucide-react'

const meta: Meta<typeof ResizablePanels> = {
  title: 'Molecules/ResizablePanels',
  component: ResizablePanels,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof ResizablePanels>

/* ── Layout CRM (sidebar + content + detail) ─────────────────────────────── */
export const LayoutCRM: Story = {
  render: () => (
    <div className="h-[600px] bg-void">
      <ResizablePanels
        direction="horizontal"
        storageKey="crm-layout"
        panels={[
          {
            id: 'sidebar',
            defaultSize: 20,
            minSize: 15,
            maxSize: 30,
            children: (
              <div className="h-full bg-ink border-r border-steel flex flex-col">
                <div className="px-4 py-4 border-b border-steel">
                  <span className="font-display font-bold text-white text-sm">Cortex CRM</span>
                </div>
                <nav className="flex-1 p-3">
                  <ul className="flex flex-col gap-1">
                    {[
                      { icon: LayoutDashboard, label: 'Dashboard' },
                      { icon: ArrowRightLeft, label: 'Pipeline' },
                      { icon: Users, label: 'Pacientes', active: true },
                      { icon: Calendar, label: 'Agenda' },
                      { icon: BarChart3, label: 'Relatorios' },
                    ].map(({ icon: Icon, label, active }) => (
                      <li key={label}>
                        <button
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                            active ? 'bg-signal/10 text-white' : 'text-mist hover:bg-dusk hover:text-white'
                          } transition-colors`}
                        >
                          <Icon size={16} />
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ),
          },
          {
            id: 'content',
            defaultSize: 50,
            minSize: 30,
            maxSize: 70,
            children: (
              <div className="h-full bg-void flex flex-col">
                <div className="px-6 py-4 border-b border-steel">
                  <h2 className="font-display font-semibold text-white">Pacientes</h2>
                  <p className="text-xs text-mist mt-0.5">247 pacientes cadastrados</p>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 px-6 py-3 border-b border-steel hover:bg-dusk/50 cursor-pointer transition-colors ${
                        i === 2 ? 'bg-signal/5' : ''
                      }`}
                    >
                      <div className="h-9 w-9 rounded-full bg-signal/20 flex items-center justify-center text-signal text-xs font-medium shrink-0">
                        P{i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white truncate">Paciente {i + 1}</p>
                        <p className="text-xs text-mist">Ultima consulta: {15 + i}/03/2026</p>
                      </div>
                      <ChevronRight size={14} className="text-ash" />
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            id: 'detail',
            defaultSize: 30,
            minSize: 20,
            maxSize: 45,
            children: (
              <div className="h-full bg-ink border-l border-steel flex flex-col">
                <div className="px-6 py-4 border-b border-steel">
                  <h3 className="font-display font-semibold text-white text-sm">Detalhes</h3>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-signal/20 flex items-center justify-center text-signal font-display font-semibold text-lg mb-3">
                      P3
                    </div>
                    <p className="font-medium text-white">Paciente 3</p>
                    <p className="text-xs text-mist mt-0.5">Desde Jan 2025</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone size={14} className="text-mist" />
                      <span className="text-mist">(19) 99876-5432</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail size={14} className="text-mist" />
                      <span className="text-mist">paciente3@email.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={14} className="text-mist" />
                      <span className="text-mist">Proxima: 28/03/2026</span>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  ),
  name: 'Layout CRM (3 paineis)',
}

/* ── Vertical ─────────────────────────────────────────────────────────────── */
export const PaineisVerticais: Story = {
  render: () => (
    <div className="h-[500px] w-full max-w-2xl mx-auto bg-void">
      <ResizablePanels
        direction="vertical"
        panels={[
          {
            id: 'editor',
            defaultSize: 60,
            minSize: 30,
            maxSize: 80,
            children: (
              <div className="h-full bg-ink p-6 border-b border-steel">
                <p className="text-sm text-white font-medium mb-2">Editor</p>
                <p className="text-sm text-mist">Arraste o handle abaixo para redimensionar os paineis.</p>
              </div>
            ),
          },
          {
            id: 'terminal',
            defaultSize: 40,
            minSize: 20,
            maxSize: 70,
            children: (
              <div className="h-full bg-void p-6">
                <p className="text-sm text-white font-medium mb-2">Terminal</p>
                <div className="font-mono text-xs text-mist space-y-1">
                  <p>$ npm run dev</p>
                  <p className="text-success">Ready on http://localhost:3000</p>
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  ),
  name: 'Paineis verticais',
}

/* ── Dois paineis ─────────────────────────────────────────────────────────── */
export const DoisPaineis: Story = {
  render: () => (
    <div className="h-[400px] bg-void">
      <ResizablePanels
        direction="horizontal"
        panels={[
          {
            id: 'left',
            defaultSize: 50,
            minSize: 25,
            maxSize: 75,
            children: (
              <div className="h-full bg-ink p-6 flex items-center justify-center">
                <p className="text-sm text-mist">Painel esquerdo</p>
              </div>
            ),
          },
          {
            id: 'right',
            defaultSize: 50,
            minSize: 25,
            maxSize: 75,
            children: (
              <div className="h-full bg-void p-6 flex items-center justify-center">
                <p className="text-sm text-mist">Painel direito</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  ),
  name: 'Dois paineis simples',
}
