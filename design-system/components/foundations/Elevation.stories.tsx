import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Elevation',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta

const T = {
  void:   '#090E1A',
  ink:    '#0C1220',
  dusk:   '#1B2845',
  steel:  '#1E2533',
  ash:    '#4A5568',
  mist:   '#94A3B8',
  white:  '#F7F9FC',
  signal: '#4D71FA',
}

/* ── Shadows ─────────────────────────────────────────────────────────────── */
export const Sombras: StoryObj = {
  render: () => {
    const shadows: { token: string; css: string; label: string; usage: string }[] = [
      {
        token: '--shadow-sm',
        css: '0 1px 3px rgba(0,0,0,0.3)',
        label: 'sm',
        usage: 'Inputs, elementos interativos sutis',
      },
      {
        token: '--shadow-card',
        css: '0 4px 24px rgba(0,0,0,0.4)',
        label: 'card',
        usage: 'Cards, painéis, containers flutuantes',
      },
      {
        token: '--shadow-modal',
        css: '0 8px 48px rgba(0,0,0,0.6)',
        label: 'modal',
        usage: 'Modais, drawers, overlays',
      },
      {
        token: '--shadow-glow-sm',
        css: '0 0 12px rgba(77,113,250,0.35)',
        label: 'glow-sm',
        usage: 'Focus ring sutil, botão primário hover',
      },
      {
        token: '--shadow-glow',
        css: '0 0 24px rgba(77,113,250,0.4)',
        label: 'glow',
        usage: 'CTAs em destaque, logo, elementos de marca',
      },
    ]

    return (
      <div style={{ background: T.void, borderRadius: 12, padding: 40, maxWidth: 720 }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: T.white, marginTop: 0 }}>
          Sombras
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {shadows.map(({ token, css, label, usage }) => (
            <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              <div style={{
                width: 80,
                height: 80,
                background: T.dusk,
                borderRadius: 12,
                boxShadow: css,
                flexShrink: 0,
              }} />
              <div>
                <p style={{ fontFamily: 'monospace', fontSize: 13, color: T.white, margin: '0 0 4px' }}>
                  shadow-<strong>{label}</strong>
                </p>
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: T.ash, margin: '0 0 6px' }}>{css}</p>
                <p style={{ fontSize: 12, color: T.mist, margin: 0 }}>{usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  name: 'Sombras',
}

/* ── Z-index ─────────────────────────────────────────────────────────────── */
export const ZIndex: StoryObj = {
  render: () => {
    const layers: { token: string; value: number; label: string; example: string }[] = [
      { token: '--z-index-base',     value: 0,   label: 'Base',     example: 'Conteúdo estático da página' },
      { token: '--z-index-raised',   value: 10,  label: 'Raised',   example: 'Cards com hover elevation' },
      { token: '--z-index-dropdown', value: 100, label: 'Dropdown', example: 'DropdownMenu, Select, Popover' },
      { token: '--z-index-sticky',   value: 200, label: 'Sticky',   example: 'PageHeader, Sidebar, Navbar' },
      { token: '--z-index-overlay',  value: 300, label: 'Overlay',  example: 'Sheet overlay, backdrop' },
      { token: '--z-index-modal',    value: 400, label: 'Modal',    example: 'Modal, Dialog, Drawer' },
      { token: '--z-index-toast',    value: 500, label: 'Toast',    example: 'Notificações Toast' },
      { token: '--z-index-tooltip',  value: 600, label: 'Tooltip',  example: 'Tooltip — sempre no topo' },
    ]

    return (
      <div style={{ background: T.ink, borderRadius: 12, padding: 32, maxWidth: 640 }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: T.white, marginTop: 0 }}>
          Hierarquia de camadas (z-index)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[...layers].reverse().map(({ token, value, label, example }) => (
            <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '10px 0', borderBottom: `1px solid ${T.steel}` }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 8,
                background: `rgba(77,113,250,${0.05 + (value / 600) * 0.4})`,
                border: `1px solid rgba(77,113,250,${0.1 + (value / 600) * 0.4})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: 'monospace', fontSize: 12, fontWeight: 700, color: T.signal }}>{value}</span>
              </div>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: T.white, margin: '0 0 2px' }}>
                  z-{label.toLowerCase()}
                </p>
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: T.ash, margin: '0 0 2px' }}>{token}</p>
                <p style={{ fontSize: 12, color: T.mist, margin: 0 }}>{example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  name: 'Z-index',
}
