'use client'

import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { motion } from 'framer-motion'

const meta: Meta = {
  title: 'Foundations/Motion',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta

/* ── helpers ─────────────────────────────────────────────────────────────── */
const T = {
  ink:    '#0C1220',
  dusk:   '#1B2845',
  steel:  '#1E2533',
  ash:    '#4A5568',
  mist:   '#94A3B8',
  white:  '#F7F9FC',
  signal: '#4D71FA',
}

function TokenRow({ name, value, children }: { name: string; value: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '12px 0', borderBottom: `1px solid ${T.steel}` }}>
      <div style={{ width: 180 }}>
        <p style={{ fontFamily: 'monospace', fontSize: 13, color: T.white, margin: 0 }}>{name}</p>
        <p style={{ fontFamily: 'monospace', fontSize: 11, color: T.ash, margin: '2px 0 0' }}>{value}</p>
      </div>
      {children}
    </div>
  )
}

/* ── Durations ────────────────────────────────────────────────────────────── */
export const Duracoes: StoryObj = {
  render: () => {
    const durations: { token: string; ms: number; label: string }[] = [
      { token: '--duration-fast',   ms: 150,  label: 'Micro-interações, hover, focus' },
      { token: '--duration-base',   ms: 200,  label: 'Padrão — tooltips, dropdowns' },
      { token: '--duration-slow',   ms: 300,  label: 'Modais, drawers, transitions de página' },
      { token: '--duration-slower', ms: 500,  label: 'Onboarding, reveal de logo, elementos hero' },
    ]

    const [key, setKey] = React.useState(0)

    return (
      <div style={{ background: T.ink, borderRadius: 12, padding: 32, maxWidth: 680 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: T.white, margin: 0 }}>Durações</h2>
          <button
            onClick={() => setKey(k => k + 1)}
            style={{ fontFamily: 'monospace', fontSize: 12, color: T.signal, background: 'transparent', border: `1px solid ${T.signal}`, borderRadius: 6, padding: '4px 12px', cursor: 'pointer' }}
          >
            ↺ Replay
          </button>
        </div>

        {durations.map(({ token, ms, label }) => (
          <TokenRow key={token} name={token} value={`${ms}ms`}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
              <motion.div
                key={key}
                initial={{ x: 0, opacity: 0.3 }}
                animate={{ x: 160, opacity: 1 }}
                transition={{ duration: ms / 1000, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: T.signal,
                  flexShrink: 0,
                }}
              />
              <p style={{ fontSize: 12, color: T.mist, margin: 0 }}>{label}</p>
            </div>
          </TokenRow>
        ))}
      </div>
    )
  },
  name: 'Durações',
}

/* ── Easings ──────────────────────────────────────────────────────────────── */
export const Easings: StoryObj = {
  render: () => {
    const easings: { token: string; value: [number, number, number, number]; label: string }[] = [
      { token: '--ease-default', value: [0.4, 0, 0.2, 1],  label: 'Standard — uso geral' },
      { token: '--ease-out',     value: [0, 0, 0.2, 1],    label: 'Entrar em cena (elementos surgindo)' },
      { token: '--ease-in',      value: [0.4, 0, 1, 1],    label: 'Sair de cena (elementos sumindo)' },
      { token: '--ease-spring',  value: [0.34, 1.56, 0.64, 1], label: 'Spring — feedback tátil, confirmações' },
    ]

    const [key, setKey] = React.useState(0)

    return (
      <div style={{ background: T.ink, borderRadius: 12, padding: 32, maxWidth: 680 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: T.white, margin: 0 }}>Curvas de easing</h2>
          <button
            onClick={() => setKey(k => k + 1)}
            style={{ fontFamily: 'monospace', fontSize: 12, color: T.signal, background: 'transparent', border: `1px solid ${T.signal}`, borderRadius: 6, padding: '4px 12px', cursor: 'pointer' }}
          >
            ↺ Replay
          </button>
        </div>

        {easings.map(({ token, value, label }) => (
          <TokenRow key={token} name={token} value={`cubic-bezier(${value.join(', ')})`}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 200, position: 'relative', height: 10 }}>
                <div style={{ position: 'absolute', inset: '4px 0', borderRadius: 2, background: T.steel }} />
                <motion.div
                  key={key}
                  initial={{ x: 0 }}
                  animate={{ x: 190 }}
                  transition={{ duration: 0.6, ease: value }}
                  style={{
                    position: 'absolute',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: T.signal,
                  }}
                />
              </div>
              <p style={{ fontSize: 12, color: T.mist, margin: 0 }}>{label}</p>
            </div>
          </TokenRow>
        ))}
      </div>
    )
  },
  name: 'Easings',
}

/* ── Princípios ───────────────────────────────────────────────────────────── */
export const Principios: StoryObj = {
  render: () => (
    <div style={{ background: T.ink, borderRadius: 12, padding: 32, maxWidth: 640 }}>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: T.white, marginTop: 0 }}>Princípios de motion</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          { title: 'Funcional antes de decorativo', desc: 'Toda animação deve comunicar algo — estado, hierarquia, feedback. Nunca apenas estética.' },
          { title: 'Reduza para usuários sensíveis', desc: 'Verifique prefers-reduced-motion. O Cortex usa useReducedMotion() do Framer Motion em todos os componentes animados.' },
          { title: 'fast para micro, slow para macro', desc: '150ms para hover/focus. 200ms para dropdowns. 300ms para modais. 500ms para reveals de hero e logo.' },
          { title: 'ease-default como padrão', desc: 'Use cubic-bezier(0.4, 0, 0.2, 1) para a maioria das transições. ease-spring para feedback confirmativo.' },
          { title: 'Não duplique no CSS e no JS', desc: 'Tokens em globals.css são a fonte da verdade. Framer Motion usa os valores dos tokens diretamente.' },
        ].map(({ title, desc }) => (
          <div key={title} style={{ padding: 16, background: T.dusk, borderRadius: 8, borderLeft: `3px solid ${T.signal}` }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: T.white, margin: '0 0 6px' }}>{title}</p>
            <p style={{ fontSize: 13, color: T.mist, margin: 0, lineHeight: 1.5 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  ),
  name: 'Princípios de uso',
}
