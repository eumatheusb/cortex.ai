import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Radius',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta

const T = {
  ink:    '#0C1220',
  dusk:   '#1B2845',
  steel:  '#1E2533',
  ash:    '#4A5568',
  mist:   '#94A3B8',
  white:  '#F7F9FC',
  signal: '#4D71FA',
}

/* ── Escala ───────────────────────────────────────────────────────────────── */
export const EscalaDeRadius: StoryObj = {
  render: () => {
    const radii: { token: string; value: string; label: string; usage: string }[] = [
      { token: '--radius-sm',   value: '4px',    label: 'sm',   usage: 'Badges, tags, chips, inputs (interior)' },
      { token: '--radius-md',   value: '8px',    label: 'md',   usage: 'Botões, inputs, tooltips, dropdowns' },
      { token: '--radius-lg',   value: '12px',   label: 'lg',   usage: 'Cards, modais, sidebars, painéis' },
      { token: '--radius-xl',   value: '16px',   label: 'xl',   usage: 'Containers maiores, drawers, sheets' },
      { token: '--radius-full', value: '9999px', label: 'full', usage: 'Avatars, progress circular, tags pill' },
    ]

    return (
      <div style={{ background: T.ink, borderRadius: 12, padding: 32, maxWidth: 720 }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: T.white, marginTop: 0 }}>
          Escala de border-radius
        </h2>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 28, marginBottom: 40 }}>
          {radii.map(({ token, value, label }) => {
            const px = label === 'full' ? 9999 : parseInt(value)
            const boxSize = 80
            const actualRadius = Math.min(px, boxSize / 2)
            return (
              <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: boxSize,
                  height: boxSize,
                  background: T.dusk,
                  border: `2px solid ${T.signal}`,
                  borderRadius: actualRadius,
                }} />
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: T.white, margin: 0 }}>radius-{label}</p>
                <p style={{ fontFamily: 'monospace', fontSize: 10, color: T.ash, margin: 0 }}>{value}</p>
              </div>
            )
          })}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {radii.map(({ token, value, label, usage }) => (
            <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '10px 0', borderBottom: `1px solid ${T.steel}` }}>
              <p style={{ fontFamily: 'monospace', fontSize: 12, color: T.signal, margin: 0, width: 140 }}>radius-{label}</p>
              <p style={{ fontFamily: 'monospace', fontSize: 12, color: T.ash, margin: 0, width: 60 }}>{value}</p>
              <p style={{ fontSize: 12, color: T.mist, margin: 0 }}>{usage}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  name: 'Escala de radius',
}

/* ── Uso nos componentes ─────────────────────────────────────────────────── */
export const UsoNosComponentes: StoryObj = {
  render: () => (
    <div style={{ background: T.ink, borderRadius: 12, padding: 32, maxWidth: 600 }}>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: T.white, marginTop: 0 }}>
        Radius por componente
      </h2>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        {/* sm */}
        <div>
          <p style={{ fontSize: 10, color: T.ash, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>radius-sm — 4px</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Badge', 'Tag', 'Chip', 'Dot'].map(n => (
              <div key={n} style={{ padding: '3px 10px', background: T.dusk, borderRadius: 4, fontSize: 12, color: T.mist }}>{n}</div>
            ))}
          </div>
        </div>

        {/* md */}
        <div>
          <p style={{ fontSize: 10, color: T.ash, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>radius-md — 8px</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Button', 'Input', 'Select', 'Tooltip', 'Dropdown'].map(n => (
              <div key={n} style={{ padding: '6px 14px', background: T.dusk, borderRadius: 8, fontSize: 12, color: T.mist }}>{n}</div>
            ))}
          </div>
        </div>

        {/* lg */}
        <div>
          <p style={{ fontSize: 10, color: T.ash, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>radius-lg — 12px</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Card', 'Modal', 'Toast', 'Alert', 'Sidebar'].map(n => (
              <div key={n} style={{ padding: '10px 16px', background: T.dusk, borderRadius: 12, fontSize: 12, color: T.mist }}>{n}</div>
            ))}
          </div>
        </div>

        {/* full */}
        <div>
          <p style={{ fontSize: 10, color: T.ash, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>radius-full — 9999px</p>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 40, height: 40, background: T.signal, borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: T.white }}>CR</div>
            <div style={{ height: 8, width: 120, background: T.dusk, borderRadius: 9999 }} />
            <div style={{ padding: '3px 12px', background: T.dusk, borderRadius: 9999, fontSize: 12, color: T.mist }}>Pill</div>
          </div>
        </div>
      </div>
    </div>
  ),
  name: 'Uso nos componentes',
}
