import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Brand/Guidelines',
  parameters: { layout: 'padded' },
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
  success:'#22C55E',
  error:  '#F43F5E',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: T.white, marginBottom: 20, paddingBottom: 12, borderBottom: `1px solid ${T.steel}` }}>{title}</h2>
      {children}
    </div>
  )
}

function VoiceCard({ title, yes, no }: { title: string; yes: string; no: string }) {
  return (
    <div style={{ background: T.dusk, borderRadius: 12, padding: 20, borderLeft: `3px solid ${T.signal}` }}>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: T.white, margin: '0 0 12px' }}>{title}</p>
      <div style={{ display: 'flex', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: T.success, margin: '0 0 6px' }}>FAZER</p>
          <p style={{ fontSize: 13, color: T.mist, margin: 0, lineHeight: 1.5 }}>{yes}</p>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: T.error, margin: '0 0 6px' }}>EVITAR</p>
          <p style={{ fontSize: 13, color: T.ash, margin: 0, lineHeight: 1.5, textDecoration: 'line-through', textDecorationColor: T.ash }}>{no}</p>
        </div>
      </div>
    </div>
  )
}

export const VozDaMarca: StoryObj = {
  render: () => (
    <div style={{ background: T.ink, borderRadius: 16, padding: 40, maxWidth: 780 }}>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: T.white, margin: 0 }}>
          Brand Guidelines
        </h1>
        <p style={{ fontSize: 14, color: T.mist, marginTop: 8 }}>
          Cortex — sistema operacional de crescimento para dentistas brasileiros.
        </p>
      </div>

      <Section title="Arquétipo">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: T.dusk, borderRadius: 12, padding: 20 }}>
            <p style={{ fontSize: 32, margin: '0 0 8px' }}>65%</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, color: T.white, margin: '0 0 8px' }}>Governante</p>
            <p style={{ fontSize: 13, color: T.mist, margin: 0, lineHeight: 1.5 }}>
              Controle, clareza, excelência operacional. O CEO da clínica. O Cortex não é um assistente — é a central de comando.
            </p>
          </div>
          <div style={{ background: T.dusk, borderRadius: 12, padding: 20 }}>
            <p style={{ fontSize: 32, margin: '0 0 8px' }}>35%</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, color: T.white, margin: '0 0 8px' }}>Sábio</p>
            <p style={{ fontSize: 13, color: T.mist, margin: 0, lineHeight: 1.5 }}>
              Inteligência, análise, insight baseado em dados. O consultor estratégico que transforma números em decisões.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Voz da marca — 5 atributos">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <VoiceCard
            title="Direta"
            yes="Seu lead perdeu 3 oportunidades esta semana."
            no="Pode ser que talvez alguns leads não tenham sido totalmente aproveitados..."
          />
          <VoiceCard
            title="Confiante"
            yes="Taxa de conversão caiu 18%. Veja o relatório."
            no="Parece que talvez a conversão pode ter diminuído um pouco."
          />
          <VoiceCard
            title="Pragmática"
            yes="3 leads sem follow-up. Agendar agora?"
            no="Identificamos que há leads que podem necessitar de acompanhamento adicional..."
          />
          <VoiceCard
            title="Séria"
            yes="Relatório de performance — Março 2026"
            no="Ei! Olha seus dados mais recentes!"
          />
          <VoiceCard
            title="Acessível"
            yes="Funil de captação com 34% de aproveitamento."
            no="Pipeline de conversão com NPS normalizado por cohort."
          />
        </div>
      </Section>

      <Section title="Posicionamento">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { label: 'Tagline', text: 'Controle total da sua clínica.' },
            { label: 'Elevador (10s)', text: 'Cortex é a plataforma que transforma dados clínicos em decisões. CRM, relatórios e inteligência em um só lugar.' },
            { label: 'Pitch (30s)', text: 'Dentistas perdem oportunidades porque os dados ficam espalhados — WhatsApp, planilha, sistema. O Cortex centraliza tudo: lead, paciente, campanha e resultado. Você vê o que está acontecendo e age imediatamente.' },
          ].map(({ label, text }) => (
            <div key={label} style={{ background: T.dusk, borderRadius: 8, padding: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: T.signal, margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>
              <p style={{ fontSize: 14, color: T.white, margin: 0, lineHeight: 1.6, fontStyle: label === 'Tagline' ? 'italic' : undefined }}>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Logo — regras de uso">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: T.success, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Fazer</p>
            <ul style={{ fontSize: 13, color: T.mist, lineHeight: 1.8, margin: 0, paddingLeft: 16 }}>
              <li>Usar no mínimo 32px de altura</li>
              <li>Manter zona de respiro de 50% da altura</li>
              <li>Tema <code style={{ color: T.signal, background: T.void, padding: '1px 6px', borderRadius: 4 }}>dark</code> em fundos escuros, <code style={{ color: T.signal, background: T.void, padding: '1px 6px', borderRadius: 4 }}>light</code> em claros</li>
              <li>Usar <code style={{ color: T.signal, background: T.void, padding: '1px 6px', borderRadius: 4 }}>icon</code> para favicon / sidebar colapsada</li>
              <li>Usar <code style={{ color: T.signal, background: T.void, padding: '1px 6px', borderRadius: 4 }}>static</code> para PDFs e emails</li>
            </ul>
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: T.error, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Não fazer</p>
            <ul style={{ fontSize: 13, color: T.mist, lineHeight: 1.8, margin: 0, paddingLeft: 16 }}>
              <li>Distorcer ou alterar proporções</li>
              <li>Usar sobre fundos com padrão complexo</li>
              <li>Usar cores fora da paleta oficial</li>
              <li>Separar ícone do wordmark na variante horizontal</li>
              <li>Reduzir abaixo de 24px</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Paleta de cores">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
          {[
            { name: 'void',    hex: T.void,    label: 'Fundo profundo' },
            { name: 'ink',     hex: T.ink,     label: 'Fundo padrão' },
            { name: 'dusk',    hex: T.dusk,    label: 'Superfícies' },
            { name: 'steel',   hex: T.steel,   label: 'Bordas' },
            { name: 'ash',     hex: T.ash,     label: 'Disabled' },
            { name: 'mist',    hex: T.mist,    label: 'Texto secundário' },
            { name: 'white',   hex: T.white,   label: 'Texto primário' },
          ].map(({ name, hex, label }) => {
            const isDark = ['#090E1A', '#0C1220'].includes(hex)
            return (
              <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ height: 48, borderRadius: 8, background: hex, border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.06)' }} />
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: T.white, margin: 0 }}>{name}</p>
                <p style={{ fontFamily: 'monospace', fontSize: 10, color: T.ash, margin: 0 }}>{hex}</p>
              </div>
            )
          })}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginTop: 16 }}>
          {[
            { name: 'signal',  hex: T.signal,  label: 'Marca / CTA' },
            { name: 'success', hex: T.success, label: 'Positivo' },
            { name: 'warning', hex: '#F59E0B', label: 'Atenção' },
            { name: 'error',   hex: T.error,   label: 'Erro' },
          ].map(({ name, hex }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ height: 48, borderRadius: 8, background: hex }} />
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: T.white, margin: 0 }}>{name}</p>
              <p style={{ fontFamily: 'monospace', fontSize: 10, color: T.ash, margin: 0 }}>{hex}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Tipografia">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ background: T.dusk, borderRadius: 8, padding: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: T.ash, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Display — Space Grotesk</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 36, color: T.white, margin: 0 }}>
              Controle total da clínica.
            </p>
          </div>
          <div style={{ background: T.dusk, borderRadius: 8, padding: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: T.ash, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Body — Inter</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: T.mist, margin: 0, lineHeight: 1.7 }}>
              Sistema operacional de crescimento para dentistas. CRM próprio, IA proprietária e clínicas reais como laboratório.
            </p>
          </div>
          <div style={{ background: T.dusk, borderRadius: 8, padding: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: T.ash, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Mono — JetBrains Mono</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 28, color: T.white }}>R$48.200</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, color: T.signal }}>+18%</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: T.mist }}>6.8%</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  ),
  name: 'Voz, Arquétipo e Identidade',
}
