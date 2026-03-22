import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

/* ─── tokens ────────────────────────────────────────────────────────────── */
const T = {
  void:    '#090E1A',
  ink:     '#0C1220',
  dusk:    '#1B2845',
  steel:   '#1E2533',
  ash:     '#4A5568',
  mist:    '#94A3B8',
  white:   '#F7F9FC',
  signal:  '#4D71FA',
  signalDark: '#3558D4',
  success: '#22C55E',
  warning: '#F59E0B',
  error:   '#F43F5E',
}

/* ─── Layout helpers ─────────────────────────────────────────────────────── */
function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: T.ash, margin: 0 }}>
        {title}
      </p>
      {children}
    </div>
  )
}

function Grid({ cols = 4, gap = 12, children }: { cols?: number; gap?: number; children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap }}>
      {children}
    </div>
  )
}

function Divider({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '8px 0' }}>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: T.white, margin: 0, whiteSpace: 'nowrap' as const }}>
        {label}
      </h2>
      <div style={{ flex: 1, height: 1, background: T.steel }} />
    </div>
  )
}

function MaterialCard({ label, dims, ratio, width, height, children }: {
  label: string; dims: string; ratio?: string; width?: number; height?: number; children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{
        width: width || 'auto',
        height: height || 'auto',
        aspectRatio: ratio || 'auto',
        background: T.void,
        border: `1px solid ${T.steel}`,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative' as const,
      }}>
        {children}
      </div>
      <div>
        <p style={{ fontSize: 12, fontWeight: 600, color: T.white, margin: 0 }}>{label}</p>
        <p style={{ fontSize: 10, color: T.ash, margin: '2px 0 0' }}>{dims}</p>
      </div>
    </div>
  )
}

/* ─── Reusable SVG Components ────────────────────────────────────────────── */
function CortexIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} fill="none">
      <defs><radialGradient id="icBg" cx="40%" cy="40%" r="65%"><stop offset="0%" stopColor="#1B2845" /><stop offset="100%" stopColor="#090E1A" /></radialGradient></defs>
      <rect width="64" height="64" rx="14" fill="url(#icBg)" />
      <path d="M 42.6,42.6 A 15,15 0 1,1 42.6,21.4" stroke="#4D71FA" strokeWidth="5" strokeLinecap="round" />
      <circle cx="55" cy="32" r="2.5" fill="#4D71FA" />
    </svg>
  )
}

function CortexLogoFull({ height = 20 }: { height?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 64" height={height} fill="none">
      <defs><radialGradient id="lgBg" cx="40%" cy="40%" r="65%"><stop offset="0%" stopColor="#1B2845" /><stop offset="100%" stopColor="#090E1A" /></radialGradient></defs>
      <rect width="64" height="64" rx="14" fill="url(#lgBg)" />
      <path d="M 42.6,42.6 A 15,15 0 1,1 42.6,21.4" stroke="#4D71FA" strokeWidth="5" strokeLinecap="round" />
      <circle cx="55" cy="32" r="2.5" fill="#4D71FA" />
      <text x="80" y="44" fontFamily="'Space Grotesk','Arial Black',sans-serif" fontWeight="700" fontSize="36" letterSpacing="0.8" fill="#F7F9FC">Cortex</text>
    </svg>
  )
}

function CortexWordmark({ height = 14 }: { height?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 52" height={height} fill="none">
      <text x="0" y="40" fontFamily="'Space Grotesk','Arial Black',sans-serif" fontWeight="700" fontSize="44" letterSpacing="1" fill="#F7F9FC">Cortex</text>
      <circle cx="170" cy="12" r="4" fill="#4D71FA" />
    </svg>
  )
}

function DotGrid({ opacity = 0.08 }: { opacity?: number }) {
  return <div style={{ position: 'absolute' as const, inset: 0, backgroundImage: `radial-gradient(circle, ${T.steel} 1px, transparent 1px)`, backgroundSize: '16px 16px', opacity, pointerEvents: 'none' as const }} />
}

function GridLines({ opacity = 0.06 }: { opacity?: number }) {
  return <div style={{ position: 'absolute' as const, inset: 0, backgroundImage: `linear-gradient(${T.steel} 0.5px, transparent 0.5px), linear-gradient(90deg, ${T.steel} 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px', opacity, pointerEvents: 'none' as const }} />
}

function SignalBar({ position = 'bottom' }: { position?: 'top' | 'bottom' }) {
  const posStyle = position === 'bottom' ? { bottom: 0 } : { top: 0 }
  return <div style={{ position: 'absolute' as const, left: 0, right: 0, height: 3, background: T.signal, ...posStyle }} />
}

/* ─── page / section wrapper ─────────────────────────────────────────── */
const page: React.CSSProperties = {
  background: T.void,
  color: T.white,
  fontFamily: "'Inter', sans-serif",
  padding: '48px 56px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
}

/* ================================================================== */
/*  SECTION 1: Digital Product Materials                              */
/* ================================================================== */

function LandingPageHero() {
  return (
    <div style={{ background: T.void, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' as const, padding: '40px 20px', minHeight: 320 }}>
      <GridLines />
      {/* Nav bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', background: 'rgba(9,14,26,0.85)', backdropFilter: 'blur(8px)', borderBottom: `1px solid rgba(30,37,51,0.5)`, zIndex: 2 }}>
        <CortexLogoFull height={14} />
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ fontSize: 9, color: T.mist }}>Produto</span>
          <span style={{ fontSize: 9, color: T.mist }}>Resultados</span>
          <span style={{ fontSize: 9, color: T.mist }}>Planos</span>
          <span style={{ fontSize: 9, background: T.signal, color: T.white, padding: '3px 10px', borderRadius: 4, fontWeight: 600 }}>Falar com especialista</span>
        </div>
      </div>
      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: T.white, lineHeight: 1.15, letterSpacing: '-0.02em', position: 'relative', zIndex: 1, margin: 0 }}>
        Do lead ao lucro.<br />Um sistema.
      </h3>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: T.mist, marginTop: 10, maxWidth: 320, lineHeight: 1.5, position: 'relative', zIndex: 1 }}>
        Stack completa de crescimento para clinicas odontologicas. CRM proprio, IA proprietaria, resultado comprovavel.
      </p>
      <div style={{ marginTop: 16, background: T.signal, color: T.white, padding: '8px 20px', borderRadius: 6, fontWeight: 600, fontSize: 10, fontFamily: "'Space Grotesk', sans-serif", boxShadow: '0 0 16px rgba(77,113,250,0.3)', position: 'relative', zIndex: 1 }}>
        Ver como funciona
      </div>
    </div>
  )
}

function DashboardMini() {
  const kpis = [
    { label: 'Leads', value: '1.247', trend: '+18%' },
    { label: 'Conversao', value: '23,4%', trend: '+2.1pp' },
    { label: 'Faturamento', value: 'R$ 487K', trend: '+31%' },
    { label: 'CAC', value: 'R$ 142', trend: '-12%' },
  ]
  return (
    <div style={{ background: T.void, display: 'flex', height: '100%', minHeight: 280 }}>
      {/* Sidebar */}
      <div style={{ width: 80, background: T.ink, borderRight: `1px solid ${T.steel}`, padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: 4, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
          <CortexIcon size={16} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 9, color: T.white }}>Cortex</span>
        </div>
        {['Dashboard', 'Pipeline', 'Contatos', 'Campanhas', 'Analytics'].map((n, i) => (
          <div key={n} style={{ padding: '4px 6px', borderRadius: 4, fontSize: 7, color: i === 0 ? T.white : T.mist, background: i === 0 ? 'rgba(77,113,250,0.12)' : 'transparent', borderLeft: i === 0 ? `2px solid ${T.signal}` : '2px solid transparent' }}>{n}</div>
        ))}
      </div>
      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ height: 28, borderBottom: `1px solid ${T.steel}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', flexShrink: 0 }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 9, color: T.white }}>Bom dia, Dr. Fabio</span>
          <div style={{ width: 18, height: 18, borderRadius: '50%', background: T.dusk, border: `1px solid ${T.signal}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6, fontWeight: 600, color: T.white }}>FA</div>
        </div>
        <div style={{ padding: 10, flex: 1 }}>
          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6, marginBottom: 8 }}>
            {kpis.map(k => (
              <div key={k.label} style={{ background: T.dusk, border: `1px solid ${T.steel}`, borderRadius: 6, padding: 8 }}>
                <div style={{ fontSize: 6, color: T.mist }}>{k.label}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 11, color: T.white, marginTop: 2 }}>{k.value}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 7, color: T.success, marginTop: 1 }}>{k.trend}</div>
              </div>
            ))}
          </div>
          {/* Funnel mini */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 6 }}>
            {[
              { w: '100%', bg: T.signal, t: '1.247 leads' },
              { w: '72%', bg: T.signalDark, t: '291 qualif.' },
              { w: '40%', bg: '#2a4aa0', t: '128 prop.' },
              { w: '23%', bg: T.success, t: '58 fechados' },
            ].map(f => (
              <div key={f.t} style={{ width: f.w, height: 14, borderRadius: 3, background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: 6, color: T.white }}>{f.t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function OGImagePreview() {
  return (
    <div style={{ background: T.void, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: 140 }}>
      <DotGrid opacity={0.12} />
      <div style={{ position: 'absolute', top: 12, left: 12 }}><CortexLogoFull height={10} /></div>
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' as const }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: T.white }}>Do lead ao lucro. Um sistema.</div>
        <div style={{ width: 40, height: 2, background: T.signal, margin: '6px auto 0' }} />
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 8, color: T.signal, marginTop: 8 }}>cortex.com.br</div>
      </div>
    </div>
  )
}

/* ================================================================== */
/*  SECTION 2: Ads & Social Media                                     */
/* ================================================================== */

function AdFeedAwareness() {
  return (
    <div style={{ background: T.void, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <DotGrid />
      <div style={{ textAlign: 'center' as const, position: 'relative', zIndex: 1, padding: 20 }}>
        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: T.white, lineHeight: 1.15, margin: 0 }}>
          Lead nao e resultado.<br /><span style={{ color: T.signal }}>Faturamento</span> e.
        </h4>
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)' }}><CortexWordmark height={8} /></div>
    </div>
  )
}

function AdFeedConsideration() {
  return (
    <div style={{ background: T.void, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
      <div style={{ textAlign: 'center' as const }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 32, color: T.signal, textShadow: '0 0 24px rgba(77,113,250,0.25)' }}>+230%</div>
        <div style={{ fontSize: 8, color: T.mist, marginTop: 4 }}>de crescimento medio em faturamento</div>
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)' }}><CortexWordmark height={8} /></div>
    </div>
  )
}

function AdFeedConversion() {
  return (
    <div style={{ background: T.void, display: 'flex', height: '100%', position: 'relative' }}>
      <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: T.steel }} />
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px 12px' }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 9, color: T.ash, marginBottom: 8 }}>Antes</div>
        {['4 fornecedores', 'Dados fragmentados', 'Lead sem rastreio', 'Zero visao de ROI'].map(t => (
          <div key={t} style={{ fontSize: 7, color: T.ash, textDecoration: 'line-through', opacity: 0.6, marginBottom: 4 }}>{t}</div>
        ))}
      </div>
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px 12px' }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 9, color: T.signal, marginBottom: 8 }}>Cortex</div>
        {['1 sistema completo', 'CRM proprietario', 'Lead ao faturamento', 'ROI em tempo real'].map(t => (
          <div key={t} style={{ fontSize: 7, color: T.white, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="8" height="8" viewBox="0 0 16 16" fill="none" stroke={T.signal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.3 4L6 11.3 2.7 8" /></svg>
            {t}
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)' }}><CortexWordmark height={7} /></div>
    </div>
  )
}

function StoryHero() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', position: 'relative' }}>
      <GridLines />
      <div style={{ marginTop: '20%' }}><CortexIcon size={20} /></div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' as const, padding: '0 16px', position: 'relative', zIndex: 1 }}>
        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 11, color: T.white, lineHeight: 1.2, margin: 0 }}>
          Voce nao precisa de mais uma ferramenta.<br /><span style={{ color: T.signal }}>Precisa de um sistema que funcione.</span>
        </h4>
      </div>
      <div style={{ marginBottom: '20%', fontSize: 7, color: T.mist }}>Conhecer o Cortex</div>
    </div>
  )
}

function StoryData() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, height: '100%' }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: 8, color: T.ash }}>1.247 leads</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: 10, color: T.mist }}>23% conversao</div>
      <div style={{ textAlign: 'center' as const }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 16, color: T.signal, textShadow: '0 0 20px rgba(77,113,250,0.2)' }}>R$ 487K</div>
        <div style={{ fontSize: 6, color: T.mist, marginTop: 4 }}>faturamento operado pelo Cortex</div>
      </div>
    </div>
  )
}

function StorySystem() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', position: 'relative' }}>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 10, color: T.white, marginTop: '22%', position: 'relative', zIndex: 1 }}>Do lead ao lucro</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginTop: 16, position: 'relative', zIndex: 1 }}>
        <div style={{ position: 'absolute', top: 8, bottom: 8, left: '50%', width: 1, background: T.signal, transform: 'translateX(-50%)', zIndex: 0 }} />
        {['Lead', 'Qualificacao', 'Conversao', 'Lucro'].map((n, i) => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 6, position: 'relative', zIndex: 1 }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: T.dusk, border: `1px solid ${i === 3 ? T.signal : T.steel}`, boxShadow: i === 3 ? '0 0 8px rgba(77,113,250,0.25)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: i === 3 ? T.signal : T.mist }} />
            </div>
            <span style={{ fontSize: 7, color: T.white }}>{n}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CarouselSlide1() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 16, height: '100%', position: 'relative' }}>
      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 11, color: T.white, lineHeight: 1.2, margin: 0 }}>
        Sua clinica ainda depende de <span style={{ color: T.error }}>4 fornecedores</span> que nao conversam?
      </h4>
      <div style={{ position: 'absolute', bottom: 16, right: 16, fontSize: 6, color: T.ash }}>Deslize &gt;</div>
      <SignalBar />
    </div>
  )
}

function CarouselSlide2() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 16, height: '100%', position: 'relative' }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 24, color: T.signal }}>73%</div>
      <div style={{ fontSize: 7, color: T.mist, marginTop: 4, maxWidth: 140, lineHeight: 1.4 }}>das clinicas perdem leads por falta de integracao entre ferramentas</div>
      <SignalBar />
    </div>
  )
}

function CarouselSlide3() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 16, height: '100%', position: 'relative' }}>
      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 12, color: T.white, lineHeight: 1.2, margin: 0, marginBottom: 10 }}>Um sistema.<br />Do lead ao lucro.</h4>
      {['CRM proprietario', 'Trafego integrado', 'IA de qualificacao', 'Analytics unificado'].map(f => (
        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <div style={{ width: 10, height: 2, background: T.signal, borderRadius: 1, flexShrink: 0 }} />
          <span style={{ fontSize: 7, color: T.white }}>{f}</span>
        </div>
      ))}
      <SignalBar />
    </div>
  )
}

function CarouselSlide4() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 20, color: T.success }}>+230%</div>
      <div style={{ fontSize: 7, color: T.mist, marginTop: 4, textAlign: 'center' as const }}>crescimento medio de faturamento</div>
      <div style={{ fontSize: 6, color: T.ash, marginTop: 8, textAlign: 'center' as const }}>Dados reais de clinicas operadas pelo Cortex</div>
      <SignalBar />
    </div>
  )
}

function CarouselSlide5() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
      <CortexLogoFull height={16} />
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 9, color: T.white, marginTop: 12, textAlign: 'center' as const }}>Agende uma demonstracao gratuita</div>
      <div style={{ fontSize: 7, color: T.signal, marginTop: 6 }}>cortex.com.br</div>
      <SignalBar />
    </div>
  )
}

function GoogleLeaderboard() {
  return (
    <div style={{ background: T.void, border: `1px solid ${T.steel}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', height: 32 }}>
      <CortexIcon size={12} />
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 7, color: T.white, flex: 1, textAlign: 'center' as const, padding: '0 8px' }}>Do lead ao lucro. Sistema completo para clinicas.</span>
      <span style={{ fontSize: 6, fontWeight: 600, color: T.white, background: T.signal, padding: '3px 8px', borderRadius: 3, whiteSpace: 'nowrap' as const }}>Saiba mais</span>
    </div>
  )
}

function GoogleMedRect() {
  return (
    <div style={{ background: T.void, border: `1px solid ${T.steel}`, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <DotGrid opacity={0.1} />
      <div style={{ position: 'absolute', top: 10 }}><CortexWordmark height={6} /></div>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 10, color: T.white, textAlign: 'center' as const, padding: '0 12px', position: 'relative', zIndex: 1 }}>Stack completa do lead ao lucro</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: 7, color: T.signal, marginTop: 4, position: 'relative', zIndex: 1 }}>+230% faturamento medio</div>
      <div style={{ position: 'absolute', bottom: 10, fontSize: 6, fontWeight: 600, color: T.white, background: T.signal, padding: '4px 10px', borderRadius: 4 }}>Conhecer o Cortex</div>
    </div>
  )
}

function GoogleSkyscraper() {
  return (
    <div style={{ background: T.void, border: `1px solid ${T.steel}`, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 6px', height: '100%', position: 'relative' }}>
      <CortexIcon size={12} />
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 7, color: T.white, textAlign: 'center' as const, lineHeight: 1.2, marginTop: 16 }}>Do lead ao lucro. Um sistema.</div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 14, color: T.signal }}>+230%</div>
        <div style={{ fontSize: 5, color: T.mist, marginTop: 2 }}>faturamento</div>
      </div>
      <div style={{ fontSize: 5, fontWeight: 600, color: T.white, background: T.signal, padding: '3px 8px', borderRadius: 3 }}>Saiba mais</div>
    </div>
  )
}

function YouTubeThumbnail() {
  return (
    <div style={{ background: T.void, position: 'relative', display: 'flex', height: '100%', minHeight: 120 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(77,113,250,0.08), transparent 70%)' }} />
      <div style={{ position: 'absolute', top: 12, left: 12 }}><CortexIcon size={16} /></div>
      <div style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', width: '55%', zIndex: 1 }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: T.white, lineHeight: 1.15 }}>Como gerar 230% mais faturamento na sua clinica</div>
      </div>
      <div style={{ position: 'absolute', top: 12, right: 24, background: T.signal, borderRadius: 4, padding: '3px 8px', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 10, color: T.white }}>+230%</div>
      <div style={{ position: 'absolute', right: 12, bottom: 0, width: 80, height: 110, background: T.dusk, borderRadius: '8px 8px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 24, color: 'rgba(247,249,252,0.15)' }}>FA</span>
      </div>
      <SignalBar />
    </div>
  )
}

/* ================================================================== */
/*  SECTION 3: Social Media Kit                                       */
/* ================================================================== */

function PostStatement() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
      <SignalBar position="top" />
      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 11, color: T.white, textAlign: 'center' as const, lineHeight: 1.2, padding: '0 12px', margin: 0 }}>
        Nao existe marketing de performance sem <span style={{ color: T.signal }}>sistema de operacao</span>.
      </h4>
      <div style={{ position: 'absolute', bottom: 12 }}><CortexWordmark height={6} /></div>
    </div>
  )
}

function PostMetric() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 28, color: T.signal, textShadow: '0 0 24px rgba(77,113,250,0.25)' }}>23,4%</div>
      <div style={{ fontSize: 7, color: T.mist, marginTop: 4, textAlign: 'center' as const, maxWidth: 160 }}>taxa de conversao media dos clientes Cortex</div>
      <div style={{ fontSize: 5, color: T.ash, marginTop: 8 }}>#CortexCRM #DoLeadAoLucro</div>
      <div style={{ position: 'absolute', bottom: 12 }}><CortexWordmark height={6} /></div>
    </div>
  )
}

function PostTip() {
  return (
    <div style={{ background: T.void, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
      <div style={{ background: T.dusk, border: `1px solid ${T.steel}`, borderRadius: 6, padding: 12, margin: 10 }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 9, color: T.white, marginBottom: 6 }}>3 sinais de que seu CRM esta te sabotando</div>
        <div style={{ fontSize: 6, color: T.mist, lineHeight: 1.7 }}>
          <strong style={{ color: T.white }}>1.</strong> Voce nao sabe qual campanha gerou cada lead.<br />
          <strong style={{ color: T.white }}>2.</strong> Leads novos ficam sem resposta por mais de 2 horas.<br />
          <strong style={{ color: T.white }}>3.</strong> O relatorio mensal depende de uma planilha manual.
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 12 }}><CortexWordmark height={6} /></div>
    </div>
  )
}

function StoryAnnouncement() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', position: 'relative' }}>
      <GridLines />
      <div style={{ marginTop: '22%', position: 'relative', zIndex: 1 }}><CortexIcon size={16} /></div>
      <div style={{ marginTop: 10, background: T.signal, color: T.white, fontSize: 5, fontWeight: 500, padding: '2px 8px', borderRadius: 50, position: 'relative', zIndex: 1 }}>Novidade</div>
      <div style={{ marginTop: 12, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 10, color: T.white, textAlign: 'center' as const, lineHeight: 1.2, padding: '0 14px', position: 'relative', zIndex: 1 }}>Cortex Flow agora com integracao WhatsApp Business</div>
      <div style={{ marginTop: 6, fontSize: 6, color: T.mist, textAlign: 'center' as const, padding: '0 16px', lineHeight: 1.5, position: 'relative', zIndex: 1 }}>Follow-up automatico, respostas inteligentes e rastreamento completo.</div>
    </div>
  )
}

function StoryPoll() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
      <div style={{ marginTop: '28%', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 10, color: T.white, textAlign: 'center' as const, lineHeight: 1.2, padding: '0 12px' }}>Quantos sistemas diferentes voce usa para gerenciar sua clinica?</div>
      <div style={{ marginTop: 16, width: '70%', height: 40, border: `1px dashed ${T.steel}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 5, color: T.ash }}>Enquete Instagram</div>
    </div>
  )
}

const highlightIcons: Record<string, React.ReactNode> = {
  Produto: <svg viewBox="0 0 24 24" width="16" height="16" stroke={T.white} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
  Resultados: <svg viewBox="0 0 24 24" width="16" height="16" stroke={T.white} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  Cases: <svg viewBox="0 0 24 24" width="16" height="16" stroke={T.white} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  FAQ: <svg viewBox="0 0 24 24" width="16" height="16" stroke={T.white} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>,
  Contato: <svg viewBox="0 0 24 24" width="16" height="16" stroke={T.white} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
}

function LinkedInBanner() {
  return (
    <div style={{ background: T.void, display: 'flex', alignItems: 'center', position: 'relative', height: '100%', minHeight: 50 }}>
      <DotGrid />
      <div style={{ flex: 1, paddingLeft: 20, position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 10, color: T.white, lineHeight: 1.15 }}>Do lead ao lucro. Um sistema.</div>
        <div style={{ fontSize: 6, color: T.mist, marginTop: 3 }}>Stack completa de crescimento para clinicas odontologicas.</div>
      </div>
      <div style={{ paddingRight: 20, position: 'relative', zIndex: 1 }}><CortexLogoFull height={14} /></div>
    </div>
  )
}

function TwitterHeader() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', height: '100%', minHeight: 44 }}>
      <GridLines opacity={0.04} />
      <CortexWordmark height={10} />
      <div style={{ fontSize: 6, color: T.mist, marginTop: 4, position: 'relative', zIndex: 1 }}>Do lead ao lucro. Um sistema. Zero fragmentacao.</div>
    </div>
  )
}

/* ================================================================== */
/*  SECTION 4: Email                                                  */
/* ================================================================== */

function EmailHeader() {
  return (
    <div style={{ background: T.void, display: 'flex', justifyContent: 'center', padding: 0 }}>
      <div style={{ width: '100%', maxWidth: 400, background: T.void }}>
        <div style={{ padding: '16px 20px', borderBottom: `2px solid ${T.signal}`, display: 'flex', justifyContent: 'center' }}>
          <CortexLogoFull height={16} />
        </div>
      </div>
    </div>
  )
}

function EmailFooter() {
  return (
    <div style={{ background: T.ink, display: 'flex', justifyContent: 'center', padding: 0 }}>
      <div style={{ width: '100%', maxWidth: 400, background: T.ink }}>
        <div style={{ padding: '0 20px' }}><div style={{ height: 1, background: T.steel }} /></div>
        <div style={{ padding: '16px 20px 8px', textAlign: 'center' as const }}><CortexWordmark height={10} /></div>
        <div style={{ textAlign: 'center' as const, padding: '0 20px 8px' }}>
          <span style={{ fontSize: 8, color: T.ash }}>Cortex | Grupo Fabio Avelar | Sao Paulo, SP</span>
        </div>
        <div style={{ textAlign: 'center' as const, padding: '0 20px 16px' }}>
          <span style={{ fontSize: 8, color: T.mist, textDecoration: 'underline' }}>Gerenciar preferencias</span>
          <span style={{ fontSize: 8, color: T.ash }}> | </span>
          <span style={{ fontSize: 8, color: T.mist, textDecoration: 'underline' }}>Cancelar inscricao</span>
        </div>
      </div>
    </div>
  )
}

/* ================================================================== */
/*  SECTION 4b: Business Card                                         */
/* ================================================================== */

function BusinessCardFront() {
  return (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 20, height: '100%', position: 'relative' }}>
      <CortexLogoFull height={12} />
      <div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 12, color: T.white }}>Fabio Avelar</div>
        <div style={{ fontSize: 7, color: T.mist }}>CEO & Fundador</div>
      </div>
      <SignalBar />
    </div>
  )
}

function BusinessCardBack() {
  return (
    <div style={{ background: T.void, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 20, height: '100%', position: 'relative' }}>
      <SignalBar position="top" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {[
          { icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72', text: '(11) 99999-0000' },
          { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z', text: 'fabio@cortex.com.br' },
          { icon: '', text: 'cortex.com.br' },
        ].map(c => (
          <div key={c.text} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: T.signal, flexShrink: 0 }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 6, color: T.mist }}>{c.text}</span>
          </div>
        ))}
        <div style={{ fontSize: 5, color: T.ash, marginTop: 4 }}>Do lead ao lucro. Um sistema. Zero fragmentacao.</div>
      </div>
      <div style={{ width: 36, height: 36, background: T.dusk, border: `1px solid ${T.steel}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 5, color: T.ash }}>QR</span>
      </div>
    </div>
  )
}

/* ================================================================== */
/*  SECTION 5: Deck Slides                                            */
/* ================================================================== */

const deckSlides: { num: string; title: string; render: () => React.ReactNode }[] = [
  { num: '01', title: 'Cover', render: () => (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
      <GridLines />
      <CortexLogoFull height={16} />
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: T.white, marginTop: 10, position: 'relative', zIndex: 1 }}>Do lead ao lucro. Um sistema.</div>
      <div style={{ fontSize: 7, color: T.mist, marginTop: 4, position: 'relative', zIndex: 1 }}>Stack completa de crescimento para clinicas odontologicas</div>
      <SignalBar />
    </div>
  )},
  { num: '02', title: 'Problem', render: () => (
    <div style={{ background: T.void, padding: 16, height: '100%', position: 'relative' }}>
      <div style={{ fontSize: 5, color: T.signal, textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 }}>O problema</div>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 10, color: T.white, lineHeight: 1.2 }}>O mercado vende pecas. <span style={{ color: T.mist, fontWeight: 400 }}>Voce precisa de um sistema.</span></div>
      <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
        {[{ v: '4+', l: 'fornecedores' }, { v: '73%', l: 'leads perdidos' }, { v: '0', l: 'visao de ROI' }].map(s => (
          <div key={s.v}><div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 12, color: T.error }}>{s.v}</div><div style={{ fontSize: 5, color: T.mist, marginTop: 2 }}>{s.l}</div></div>
        ))}
      </div>
      <SignalBar />
    </div>
  )},
  { num: '03', title: 'Solution', render: () => (
    <div style={{ background: T.void, padding: 16, display: 'flex', gap: 16, height: '100%', position: 'relative' }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 5, color: T.signal, textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 }}>A solucao</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 10, color: T.white }}>Cortex: inteligencia que opera.</div>
        <div style={{ fontSize: 6, color: T.mist, marginTop: 4, lineHeight: 1.5 }}>Uma unica plataforma que conecta captacao, qualificacao, conversao e analise.</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {['CRM', 'Trafego', 'Analytics', 'Automacao'].map(p => (
          <div key={p} style={{ background: T.dusk, border: `1px solid ${T.steel}`, borderRadius: 4, padding: '4px 8px', fontSize: 6, color: T.white, display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 4, height: 4, borderRadius: 2, background: 'rgba(77,113,250,0.5)' }} />{p}
          </div>
        ))}
      </div>
      <SignalBar />
    </div>
  )},
  { num: '04', title: 'Features', render: () => (
    <div style={{ background: T.void, padding: 12, height: '100%', position: 'relative' }}>
      <div style={{ fontSize: 5, color: T.signal, textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 }}>4 pilares</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 4 }}>
        {[{ t: 'CRM', d: 'Pipeline visual' }, { t: 'Ads', d: 'Trafego integrado' }, { t: 'Analytics', d: 'Dashboard unico' }, { t: 'Flow', d: 'Automacao completa' }].map(f => (
          <div key={f.t} style={{ background: T.dusk, border: `1px solid ${T.steel}`, borderRadius: 4, padding: 6 }}>
            <div style={{ fontSize: 7, fontWeight: 600, color: T.white }}>{f.t}</div>
            <div style={{ fontSize: 5, color: T.mist, marginTop: 2 }}>{f.d}</div>
          </div>
        ))}
      </div>
      <SignalBar />
    </div>
  )},
  { num: '05', title: 'How It Works', render: () => (
    <div style={{ background: T.void, padding: 12, height: '100%', position: 'relative' }}>
      <div style={{ fontSize: 5, color: T.signal, textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 }}>Como funciona</div>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 9, color: T.white, marginBottom: 8 }}>3 etapas para sair do caos</div>
      <div style={{ display: 'flex', gap: 8 }}>
        {[{ n: '01', t: 'Onboarding 48h' }, { n: '02', t: 'Operacao ativa' }, { n: '03', t: 'Crescimento' }].map(s => (
          <div key={s.n} style={{ flex: 1 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 14, color: 'rgba(77,113,250,0.2)' }}>{s.n}</div>
            <div style={{ fontSize: 6, fontWeight: 600, color: T.white, marginTop: 2 }}>{s.t}</div>
          </div>
        ))}
      </div>
      <SignalBar />
    </div>
  )},
  { num: '06', title: 'Metrics', render: () => (
    <div style={{ background: T.void, padding: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', position: 'relative' }}>
      <div style={{ fontSize: 5, color: T.signal, textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 }}>Numeros reais</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 6, marginTop: 6 }}>
        {[{ v: '+230%', c: T.success, l: 'faturamento' }, { v: '23,4%', c: T.signal, l: 'conversao' }, { v: 'R$142', c: T.signal, l: 'CAC medio' }, { v: '48h', c: T.signal, l: 'onboarding' }].map(m => (
          <div key={m.v} style={{ textAlign: 'center' as const }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 12, color: m.c }}>{m.v}</div>
            <div style={{ fontSize: 5, color: T.mist, marginTop: 2 }}>{m.l}</div>
          </div>
        ))}
      </div>
      <SignalBar />
    </div>
  )},
  { num: '07', title: 'Comparison', render: () => (
    <div style={{ background: T.void, padding: 10, height: '100%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ fontSize: 5, color: T.signal, textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 }}>Comparativo</div>
      <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 5 }}>
        <thead><tr>
          <th style={{ textAlign: 'left' as const, padding: 3, color: T.mist, borderBottom: `1px solid ${T.steel}` }}>Feature</th>
          <th style={{ textAlign: 'left' as const, padding: 3, color: T.mist, borderBottom: `1px solid ${T.steel}` }}>Generico</th>
          <th style={{ textAlign: 'left' as const, padding: 3, color: T.signal, borderBottom: `1px solid ${T.steel}`, fontWeight: 600 }}>Cortex</th>
        </tr></thead>
        <tbody>
          {['CRM odonto', 'Trafego integrado', 'Lead rastreado', 'Dashboard ROI'].map(f => (
            <tr key={f}>
              <td style={{ padding: 3, color: T.white, borderBottom: `1px solid rgba(30,37,51,0.5)` }}>{f}</td>
              <td style={{ padding: 3, color: T.error, borderBottom: `1px solid rgba(30,37,51,0.5)` }}>Nao</td>
              <td style={{ padding: 3, color: T.success, borderBottom: `1px solid rgba(30,37,51,0.5)` }}>Sim</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SignalBar />
    </div>
  )},
  { num: '08', title: 'Testimonial', render: () => (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: 12, position: 'relative', textAlign: 'center' as const }}>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 24, color: 'rgba(77,113,250,0.2)', lineHeight: 1 }}>"</div>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 7, color: T.white, lineHeight: 1.4, marginTop: -8, padding: '0 4px' }}>Em 6 meses com o Cortex, saimos de R$ 180K para R$ 487K de faturamento.</div>
      <div style={{ fontSize: 5, color: T.mist, marginTop: 6 }}>Dr. Fabio Avelar, CEO</div>
      <div style={{ marginTop: 6, background: 'rgba(77,113,250,0.12)', padding: '2px 8px', borderRadius: 50, fontSize: 5, color: T.signal }}>+170% em 6 meses</div>
      <SignalBar />
    </div>
  )},
  { num: '09', title: 'Pricing', render: () => (
    <div style={{ background: T.void, padding: 10, height: '100%', position: 'relative' }}>
      <div style={{ fontSize: 5, color: T.signal, textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 }}>Planos</div>
      <div style={{ display: 'flex', gap: 4 }}>
        {[{ n: 'Starter', p: 'R$297' }, { n: 'Pro', p: 'R$997', feat: true }, { n: 'Enterprise', p: 'Custom' }].map(pl => (
          <div key={pl.n} style={{ flex: 1, background: T.dusk, border: `1px solid ${pl.feat ? T.signal : T.steel}`, borderRadius: 4, padding: 6, boxShadow: pl.feat ? '0 0 12px rgba(77,113,250,0.15)' : 'none' }}>
            <div style={{ fontSize: 6, fontWeight: 600, color: T.white }}>{pl.n}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 10, color: T.white, marginTop: 2 }}>{pl.p}</div>
          </div>
        ))}
      </div>
      <SignalBar />
    </div>
  )},
  { num: '10', title: 'Team', render: () => (
    <div style={{ background: T.void, padding: 10, height: '100%', position: 'relative' }}>
      <div style={{ fontSize: 5, color: T.signal, textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 }}>Quem faz</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 6, marginTop: 6 }}>
        {[{ i: 'FA', n: 'Fabio Avelar', r: 'CEO' }, { i: 'DS', n: 'Diego Santos', r: 'CTO' }, { i: 'ML', n: 'Marina Lima', r: 'Produto' }, { i: 'RC', n: 'Rafael Costa', r: 'Growth' }].map(m => (
          <div key={m.i} style={{ textAlign: 'center' as const }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', background: T.dusk, border: `1px solid ${T.steel}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 3px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 6, color: 'rgba(247,249,252,0.3)' }}>{m.i}</div>
            <div style={{ fontSize: 5, fontWeight: 500, color: T.white }}>{m.n}</div>
            <div style={{ fontSize: 4, color: T.mist }}>{m.r}</div>
          </div>
        ))}
      </div>
      <SignalBar />
    </div>
  )},
  { num: '11', title: 'Roadmap', render: () => (
    <div style={{ background: T.void, padding: 10, height: '100%', position: 'relative' }}>
      <div style={{ fontSize: 5, color: T.signal, textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 }}>Proximos passos</div>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 8, color: T.white, marginBottom: 6 }}>Roadmap 2026</div>
      <div style={{ display: 'flex', gap: 4 }}>
        {[{ q: 'Q1', t: 'Fundacao', done: true }, { q: 'Q2', t: 'Inteligencia', active: true }, { q: 'Q3', t: 'Escala' }, { q: 'Q4', t: 'Dominio' }].map(p => (
          <div key={p.q} style={{ flex: 1 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: p.done ? T.success : p.active ? T.signal : T.steel, marginBottom: 4, boxShadow: p.active ? '0 0 6px rgba(77,113,250,0.4)' : 'none' }} />
            <div style={{ fontSize: 5, color: T.mist, marginBottom: 2 }}>{p.q}</div>
            <div style={{ fontSize: 5, fontWeight: 600, color: T.white }}>{p.t}</div>
          </div>
        ))}
      </div>
      <SignalBar />
    </div>
  )},
  { num: '12', title: 'CTA', render: () => (
    <div style={{ background: T.void, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
      <GridLines opacity={0.04} />
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: T.white, textAlign: 'center' as const, position: 'relative', zIndex: 1 }}>Vamos conversar?</div>
      <div style={{ display: 'flex', gap: 12, marginTop: 10, position: 'relative', zIndex: 1 }}>
        {[{ l: 'Email', v: 'contato@cortex.com.br' }, { l: 'WhatsApp', v: '(11) 99999-0000' }, { l: 'Site', v: 'cortex.com.br' }].map(c => (
          <div key={c.l} style={{ textAlign: 'center' as const }}>
            <div style={{ fontSize: 5, color: T.mist }}>{c.l}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 6, color: T.signal }}>{c.v}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, position: 'relative', zIndex: 1 }}><CortexLogoFull height={14} /></div>
      <SignalBar />
    </div>
  )},
]

/* ================================================================== */
/*  SECTION 6: Physical Mockups — CSS/SVG                             */
/* ================================================================== */

function TshirtMockup({ label, feminine }: { label: string; feminine?: boolean }) {
  const w = feminine ? 100 : 110
  const shoulderW = feminine ? 42 : 50
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <svg width={w} height={120} viewBox="0 0 110 120" fill="none">
        {/* Shirt outline */}
        <path d={feminine
          ? 'M30,10 L20,18 L8,40 L18,44 L24,28 L24,110 L86,110 L86,28 L92,44 L102,40 L90,18 L80,10 C75,6 68,4 55,4 C42,4 35,6 30,10Z'
          : 'M28,8 L15,18 L5,42 L18,46 L24,28 L24,112 L86,112 L86,28 L92,46 L105,42 L95,18 L82,8 C76,4 68,2 55,2 C42,2 34,4 28,8Z'
        } fill="#111" stroke="#333" strokeWidth="1" />
        {/* Collar */}
        <path d="M40,8 Q55,16 70,8" stroke="#333" strokeWidth="1" fill="none" />
        {/* Logo on chest */}
        <text x="55" y="52" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="8" fill={T.white}>Cor<tspan fill={T.signal}>tex</tspan></text>
      </svg>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>{label}</span>
      <span style={{ fontSize: 6, color: T.ash }}>Algodao premium, preto fosco</span>
    </div>
  )
}

function BomberMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <svg width={120} height={130} viewBox="0 0 120 130" fill="none">
        <path d="M25,12 L10,28 L5,55 L12,58 L18,35 L18,122 L102,122 L102,35 L108,58 L115,55 L110,28 L95,12 C88,6 75,2 60,2 C45,2 32,6 25,12Z" fill="#111" stroke="#333" strokeWidth="1" />
        {/* Collar band */}
        <path d="M35,12 Q60,20 85,12" stroke={T.signal} strokeWidth="2" fill="none" />
        {/* Zipper */}
        <line x1="60" y1="14" x2="60" y2="122" stroke="#333" strokeWidth="1" />
        {/* Cuffs */}
        <rect x="14" y="118" width="24" height="4" rx="2" fill="#222" stroke="#333" strokeWidth="0.5" />
        <rect x="82" y="118" width="24" height="4" rx="2" fill="#222" stroke="#333" strokeWidth="0.5" />
        {/* Logo chest */}
        <text x="40" y="50" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="7" fill={T.white}>Cor<tspan fill={T.signal}>tex</tspan></text>
        {/* Back text hint */}
        <text x="60" y="75" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="5" fill="rgba(247,249,252,0.08)">CORTEX</text>
      </svg>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Bomber Jacket</span>
      <span style={{ fontSize: 6, color: T.ash }}>Logo bordado peito, CORTEX costas</span>
    </div>
  )
}

function PufferMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <svg width={120} height={130} viewBox="0 0 120 130" fill="none">
        {/* Puffy body with quilting */}
        <path d="M25,14 L8,30 L4,58 L14,60 L20,38 L20,124 L100,124 L100,38 L106,60 L116,58 L112,30 L95,14 C88,6 75,2 60,2 C45,2 32,6 25,14Z" fill="#111" stroke="#333" strokeWidth="1" />
        {/* Horizontal quilting lines */}
        {[40, 55, 70, 85, 100].map(y => <line key={y} x1="22" y1={y} x2="98" y2={y} stroke="#222" strokeWidth="0.8" />)}
        {/* Signal blue side stripe */}
        <line x1="20" y1="38" x2="20" y2="124" stroke={T.signal} strokeWidth="2" />
        <line x1="100" y1="38" x2="100" y2="124" stroke={T.signal} strokeWidth="2" />
        {/* Logo */}
        <text x="60" y="50" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="7" fill={T.white}>Cor<tspan fill={T.signal}>tex</tspan></text>
      </svg>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Puffer Jacket</span>
      <span style={{ fontSize: 6, color: T.ash }}>Detalhe Signal Blue lateral</span>
    </div>
  )
}

function WindbreakerMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <svg width={110} height={120} viewBox="0 0 110 120" fill="none">
        <path d="M25,10 L12,24 L6,50 L16,52 L20,32 L20,112 L90,112 L90,32 L94,52 L104,50 L98,24 L85,10 C78,4 68,2 55,2 C42,2 32,4 25,10Z" fill="#111" stroke="#333" strokeWidth="1" />
        {/* Hood */}
        <path d="M32,10 Q55,0 78,10" stroke="#444" strokeWidth="1" fill="none" />
        {/* Diagonal zipper */}
        <line x1="55" y1="10" x2="55" y2="112" stroke="#333" strokeWidth="0.8" strokeDasharray="2,2" />
        {/* Reflective strip */}
        <line x1="20" y1="70" x2="90" y2="70" stroke="rgba(247,249,252,0.15)" strokeWidth="1.5" />
        <text x="55" y="48" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="7" fill={T.white}>Cor<tspan fill={T.signal}>tex</tspan></text>
      </svg>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Corta-vento</span>
      <span style={{ fontSize: 6, color: T.ash }}>Detalhe refletivo</span>
    </div>
  )
}

function CapMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <svg width={90} height={70} viewBox="0 0 90 70" fill="none">
        {/* Brim */}
        <ellipse cx="45" cy="52" rx="40" ry="8" fill="#222" stroke="#333" strokeWidth="0.8" />
        {/* Crown */}
        <path d="M10,50 Q10,10 45,8 Q80,10 80,50" fill="#111" stroke="#333" strokeWidth="1" />
        {/* Button top */}
        <circle cx="45" cy="8" r="2" fill="#222" stroke="#333" strokeWidth="0.5" />
        {/* Panel lines */}
        <line x1="45" y1="8" x2="30" y2="50" stroke="#222" strokeWidth="0.5" />
        <line x1="45" y1="8" x2="60" y2="50" stroke="#222" strokeWidth="0.5" />
        {/* Logo icon */}
        <circle cx="45" cy="32" r="8" fill="none" stroke={T.signal} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="20,8" />
        <circle cx="52" cy="32" r="1.5" fill={T.signal} />
      </svg>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Bone</span>
      <span style={{ fontSize: 6, color: T.ash }}>Logo icon bordado, preto fosco</span>
    </div>
  )
}

function SqueezeMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <svg width={50} height={120} viewBox="0 0 50 120" fill="none">
        {/* Cap */}
        <rect x="16" y="2" width="18" height="12" rx="3" fill="#222" stroke="#333" strokeWidth="0.8" />
        {/* Neck */}
        <rect x="19" y="14" width="12" height="6" fill="#111" stroke="#333" strokeWidth="0.5" />
        {/* Body */}
        <path d="M12,20 L12,110 Q12,116 18,116 L32,116 Q38,116 38,110 L38,20 Z" fill="#111" stroke="#333" strokeWidth="1" />
        {/* Logo engraved */}
        <text x="25" y="65" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="6" fill="rgba(247,249,252,0.12)">Cor<tspan fill="rgba(77,113,250,0.3)">tex</tspan></text>
      </svg>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Squeeze</span>
      <span style={{ fontSize: 6, color: T.ash }}>Inox preto, logo gravado</span>
    </div>
  )
}

function MugMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <svg width={80} height={80} viewBox="0 0 80 80" fill="none">
        {/* Body */}
        <rect x="10" y="10" width="45" height="55" rx="4" fill="#111" stroke="#333" strokeWidth="1" />
        {/* Handle */}
        <path d="M55,22 Q72,22 72,40 Q72,58 55,58" stroke="#333" strokeWidth="2" fill="none" />
        {/* Rim */}
        <rect x="8" y="8" width="49" height="4" rx="2" fill="#222" stroke="#333" strokeWidth="0.5" />
        {/* Logo */}
        <text x="32" y="42" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="7" fill={T.signal}>Cor<tspan fill={T.signal}>tex</tspan></text>
      </svg>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Caneca</span>
      <span style={{ fontSize: 6, color: T.ash }}>Logo Signal Blue</span>
    </div>
  )
}

function MoleskineMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ width: 70, height: 100, background: '#111', border: `1px solid #333`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        {/* Elastic band */}
        <div style={{ position: 'absolute', right: 8, top: 0, bottom: 0, width: 1, background: T.signal }} />
        {/* Debossed logo */}
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 8, color: 'rgba(247,249,252,0.06)' }}>Cortex</span>
      </div>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Moleskine</span>
      <span style={{ fontSize: 6, color: T.ash }}>Logo debossed, capa dark</span>
    </div>
  )
}

function StickerPack() {
  const stickers = [
    { content: <CortexIcon size={16} />, label: 'Icon' },
    { content: <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 5, color: T.white }}>Cor<span style={{ color: T.signal }}>tex</span></span>, label: 'Logo' },
    { content: <span style={{ fontSize: 4, color: T.mist, textAlign: 'center' as const, lineHeight: 1.2 }}>Do lead<br/>ao lucro</span>, label: 'Tagline' },
    { content: <DotGrid opacity={0.3} />, label: 'Pattern' },
    { content: <span style={{ fontSize: 3, color: T.signal, fontWeight: 600, textAlign: 'center' as const }}>Inteligencia<br/>que opera.</span>, label: 'Essencia' },
    { content: <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 5, color: T.signal, fontWeight: 700 }}>+230%</span>, label: 'Metric' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4 }}>
        {stickers.map((s, i) => (
          <div key={i} style={{ width: 36, height: 36, borderRadius: 6, background: T.void, border: `1px solid ${T.steel}`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {s.content}
          </div>
        ))}
      </div>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Adesivo Pack</span>
      <span style={{ fontSize: 6, color: T.ash }}>6 variantes, vinil premium</span>
    </div>
  )
}

function DeskMatMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ width: 160, height: 80, background: '#111', border: `1px solid #333`, borderRadius: 6, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <DotGrid opacity={0.04} />
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 8, color: 'rgba(247,249,252,0.05)', position: 'relative', zIndex: 1 }}>Cor<span style={{ color: 'rgba(77,113,250,0.1)' }}>tex</span></span>
      </div>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Desk Mat</span>
      <span style={{ fontSize: 6, color: T.ash }}>800x400mm, grid sutil</span>
    </div>
  )
}

function BadgeLanyardMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <svg width={60} height={110} viewBox="0 0 60 110" fill="none">
        {/* Lanyard */}
        <line x1="30" y1="0" x2="30" y2="20" stroke={T.signal} strokeWidth="3" />
        {/* Clip */}
        <rect x="25" y="18" width="10" height="6" rx="1" fill="#444" />
        {/* Card */}
        <rect x="8" y="24" width="44" height="80" rx="4" fill="#111" stroke="#333" strokeWidth="1" />
        {/* Photo placeholder */}
        <circle cx="30" cy="48" r="10" fill={T.dusk} stroke={T.steel} strokeWidth="0.5" />
        <text x="30" y="51" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="8" fill="rgba(247,249,252,0.2)">FA</text>
        {/* Name */}
        <text x="30" y="70" textAnchor="middle" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="5" fill={T.white}>Fabio Avelar</text>
        <text x="30" y="78" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="4" fill={T.mist}>CEO & Fundador</text>
        {/* Logo */}
        <text x="30" y="95" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="5" fill="rgba(247,249,252,0.15)">Cortex</text>
      </svg>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Cracha/Lanyard</span>
      <span style={{ fontSize: 6, color: T.ash }}>Lanyard Signal Blue</span>
    </div>
  )
}

function BackdropMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ width: 180, height: 120, background: T.void, border: `1px solid ${T.steel}`, borderRadius: 4, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <DotGrid opacity={0.06} />
        <CortexLogoFull height={16} />
      </div>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Backdrop</span>
      <span style={{ fontSize: 6, color: T.ash }}>3:2, pattern dots + logo</span>
    </div>
  )
}

function RollupMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ width: 60, height: 150, background: T.void, border: `1px solid ${T.steel}`, borderRadius: 2, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }}>
        <GridLines opacity={0.04} />
        <div style={{ position: 'relative', zIndex: 1, marginTop: 8 }}><CortexIcon size={16} /></div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 6, color: T.white, textAlign: 'center' as const, marginTop: 10, position: 'relative', zIndex: 1, lineHeight: 1.2 }}>Do lead ao lucro.<br/>Um sistema.</div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 14, color: T.signal }}>+230%</div>
          <div style={{ fontSize: 4, color: T.mist, marginTop: 2 }}>faturamento</div>
        </div>
        <div style={{ position: 'relative', zIndex: 1, fontSize: 4, color: T.signal, marginBottom: 4 }}>cortex.com.br</div>
        <SignalBar />
      </div>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Roll-up Banner</span>
      <span style={{ fontSize: 6, color: T.ash }}>85x200cm</span>
    </div>
  )
}

function CertificateMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ width: 200, height: 140, background: T.void, border: `1px solid ${T.steel}`, borderRadius: 4, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Double border */}
        <div style={{ position: 'absolute', inset: 4, border: `1px solid ${T.steel}`, borderRadius: 3, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 6, border: '1px solid rgba(77,113,250,0.1)', borderRadius: 2, pointerEvents: 'none' }} />
        {/* Accent lines */}
        <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', width: 40, height: 1, background: 'linear-gradient(90deg, transparent, #4D71FA, transparent)' }} />
        <div style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)', width: 40, height: 1, background: 'linear-gradient(90deg, transparent, #4D71FA, transparent)' }} />
        <CortexLogoFull height={10} />
        <div style={{ fontSize: 4, color: T.mist, textTransform: 'uppercase' as const, letterSpacing: 2, marginTop: 4 }}>Certificado de conclusao</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 10, color: T.white, borderBottom: `1px solid ${T.signal}`, paddingBottom: 2, marginTop: 6, minWidth: 100, textAlign: 'center' as const }}>Nome do Participante</div>
        <div style={{ fontSize: 4, color: T.mist, marginTop: 4, textAlign: 'center' as const, maxWidth: 140, lineHeight: 1.4 }}>Concluiu com exito o programa de capacitacao Cortex CRM</div>
        <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
          <div style={{ textAlign: 'center' as const }}>
            <div style={{ fontSize: 3, color: T.mist }}>Data</div>
            <div style={{ fontSize: 4, color: T.white }}>22/03/2026</div>
          </div>
          <div style={{ textAlign: 'center' as const }}>
            <div style={{ width: 30, height: 0.5, background: T.steel, marginBottom: 2 }} />
            <div style={{ fontSize: 3, color: T.mist }}>Fabio Avelar</div>
          </div>
        </div>
      </div>
      <span style={{ fontSize: 8, color: T.white, fontWeight: 600 }}>Certificado</span>
      <span style={{ fontSize: 6, color: T.ash }}>A4 landscape, Signal Blue accents</span>
    </div>
  )
}

/* ================================================================== */
/*  STORY: MaterialsShowcase                                          */
/* ================================================================== */

function MaterialsShowcase() {
  return (
    <div style={page}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <CortexLogoFull height={24} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 24, color: T.white }}>Brand Applications</span>
        </div>
        <p style={{ fontSize: 13, color: T.mist, margin: 0, lineHeight: 1.6 }}>
          Todos os 53 materiais de marca Cortex renderizados visualmente. Do lead ao lucro. Um sistema. Zero fragmentacao.
        </p>
      </div>

      {/* SECTION 1: Digital Product */}
      <div>
        <Divider label="Secao 1 -- Materiais Digitais -- Produto" />
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 16, marginTop: 16 }}>
          <MaterialCard label="Landing Page" dims="Desktop, full hero section" ratio="4/3">
            <LandingPageHero />
          </MaterialCard>
          <MaterialCard label="Dashboard CRM" dims="Sidebar, 4 KPIs, tabela, funil" ratio="4/3">
            <DashboardMini />
          </MaterialCard>
          <MaterialCard label="OG Image" dims="1200x630" ratio="1200/630">
            <OGImagePreview />
          </MaterialCard>
        </div>
      </div>

      {/* SECTION 2: Ads & Social */}
      <div>
        <Divider label="Secao 2 -- Ads & Social Media" />

        <Block title="Meta Feed Ads (1:1)">
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <MaterialCard label="Awareness" dims="1080x1080" width={280} height={280}><AdFeedAwareness /></MaterialCard>
            <MaterialCard label="Consideration" dims="1080x1080" width={280} height={280}><AdFeedConsideration /></MaterialCard>
            <MaterialCard label="Conversion" dims="1080x1080" width={280} height={280}><AdFeedConversion /></MaterialCard>
          </div>
        </Block>

        <div style={{ marginTop: 24 }} />
        <Block title="Meta Stories (9:16)">
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <MaterialCard label="Hero" dims="1080x1920" width={200} height={356}><StoryHero /></MaterialCard>
            <MaterialCard label="Data Cascade" dims="1080x1920" width={200} height={356}><StoryData /></MaterialCard>
            <MaterialCard label="System Visual" dims="1080x1920" width={200} height={356}><StorySystem /></MaterialCard>
          </div>
        </Block>

        <div style={{ marginTop: 24 }} />
        <Block title="Carrossel (1:1, 5 slides)">
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <MaterialCard label="Slide 1 — Hook" dims="1080x1080" width={200} height={200}><CarouselSlide1 /></MaterialCard>
            <MaterialCard label="Slide 2 — Insight" dims="1080x1080" width={200} height={200}><CarouselSlide2 /></MaterialCard>
            <MaterialCard label="Slide 3 — Solution" dims="1080x1080" width={200} height={200}><CarouselSlide3 /></MaterialCard>
            <MaterialCard label="Slide 4 — Proof" dims="1080x1080" width={200} height={200}><CarouselSlide4 /></MaterialCard>
            <MaterialCard label="Slide 5 — CTA" dims="1080x1080" width={200} height={200}><CarouselSlide5 /></MaterialCard>
          </div>
        </Block>

        <div style={{ marginTop: 24 }} />
        <Block title="Google Display">
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginTop: 8 }}>
            <MaterialCard label="Leaderboard" dims="728x90" width={364} height={45}><GoogleLeaderboard /></MaterialCard>
            <MaterialCard label="Medium Rectangle" dims="300x250" width={200} height={167}><GoogleMedRect /></MaterialCard>
            <MaterialCard label="Wide Skyscraper" dims="160x600" width={80} height={300}><GoogleSkyscraper /></MaterialCard>
          </div>
        </Block>

        <div style={{ marginTop: 24 }} />
        <Block title="YouTube Thumbnail (16:9)">
          <MaterialCard label="Thumbnail" dims="1280x720" width={420} ratio="16/9"><YouTubeThumbnail /></MaterialCard>
        </Block>
      </div>

      {/* SECTION 3: Social Media Kit */}
      <div>
        <Divider label="Secao 3 -- Social Media Kit" />

        <Block title="Posts (1:1)">
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <MaterialCard label="Statement" dims="1080x1080" width={200} height={200}><PostStatement /></MaterialCard>
            <MaterialCard label="Metric" dims="1080x1080" width={200} height={200}><PostMetric /></MaterialCard>
            <MaterialCard label="Tip / Educacional" dims="1080x1080" width={200} height={200}><PostTip /></MaterialCard>
          </div>
        </Block>

        <div style={{ marginTop: 24 }} />
        <Block title="Stories (9:16)">
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <MaterialCard label="Announcement" dims="1080x1920" width={150} height={267}><StoryAnnouncement /></MaterialCard>
            <MaterialCard label="Poll" dims="1080x1920" width={150} height={267}><StoryPoll /></MaterialCard>
          </div>
        </Block>

        <div style={{ marginTop: 24 }} />
        <Block title="Highlight Covers (circle)">
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            {Object.entries(highlightIcons).map(([name, icon]) => (
              <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: T.void, border: `1px solid ${T.steel}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {icon}
                </div>
                <span style={{ fontSize: 8, color: T.white }}>{name}</span>
              </div>
            ))}
          </div>
        </Block>

        <div style={{ marginTop: 24 }} />
        <Block title="Banners">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
            <MaterialCard label="LinkedIn Banner" dims="1584x396" ratio="1584/396"><LinkedInBanner /></MaterialCard>
            <MaterialCard label="Twitter/X Header" dims="1500x500" ratio="1500/500"><TwitterHeader /></MaterialCard>
          </div>
        </Block>
      </div>

      {/* SECTION 4: Communication */}
      <div>
        <Divider label="Secao 4 -- Comunicacao" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 500, margin: '16px auto 0' }}>
          <MaterialCard label="Email Header" dims="600px width">
            <EmailHeader />
          </MaterialCard>
          <MaterialCard label="Email Footer" dims="600px width">
            <EmailFooter />
          </MaterialCard>
        </div>
        <div style={{ marginTop: 24 }} />
        <Block title="Cartao de Visita (90x50mm ratio)">
          <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
            <MaterialCard label="Frente" dims="1063x591px (90x50mm)" width={280} height={156}><BusinessCardFront /></MaterialCard>
            <MaterialCard label="Verso" dims="1063x591px (90x50mm)" width={280} height={156}><BusinessCardBack /></MaterialCard>
          </div>
        </Block>
      </div>

      {/* SECTION 5: Presentation Deck */}
      <div>
        <Divider label="Secao 5 -- Presentation Deck" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 16 }}>
          {deckSlides.map(s => (
            <MaterialCard key={s.num} label={`${s.num} — ${s.title}`} dims="1920x1080" ratio="16/9">
              {s.render()}
            </MaterialCard>
          ))}
        </div>
      </div>

      {/* SECTION 6: Physical Mockups */}
      <div>
        <Divider label="Secao 6 -- Materiais Fisicos -- Mockups CSS/SVG" />
        <p style={{ fontSize: 11, color: T.mist, margin: '8px 0 16px', lineHeight: 1.5 }}>
          Mockups visuais em CSS/SVG puro. Preto fosco + Signal Blue details. Premium/minimalista.
        </p>

        <Block title="Vestuario">
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const, marginTop: 8, padding: 24, background: T.ink, borderRadius: 12, border: `1px solid ${T.steel}` }}>
            <TshirtMockup label="Camiseta" />
            <TshirtMockup label="Babylook" feminine />
            <BomberMockup />
            <PufferMockup />
            <WindbreakerMockup />
            <CapMockup />
          </div>
        </Block>

        <div style={{ marginTop: 24 }} />
        <Block title="Acessorios & Escritorio">
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const, alignItems: 'flex-end', marginTop: 8, padding: 24, background: T.ink, borderRadius: 12, border: `1px solid ${T.steel}` }}>
            <SqueezeMockup />
            <MugMockup />
            <MoleskineMockup />
            <StickerPack />
            <DeskMatMockup />
            <BadgeLanyardMockup />
          </div>
        </Block>

        <div style={{ marginTop: 24 }} />
        <Block title="Eventos & Impressos">
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const, alignItems: 'flex-end', marginTop: 8, padding: 24, background: T.ink, borderRadius: 12, border: `1px solid ${T.steel}` }}>
            <BackdropMockup />
            <RollupMockup />
            <CertificateMockup />
          </div>
        </Block>
      </div>

      {/* Footer */}
      <div style={{ borderTop: `1px solid ${T.steel}`, paddingTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: T.white }}>
          Cor<span style={{ color: T.signal }}>tex</span> Brand Applications
        </span>
        <p style={{ fontSize: 12, color: T.mist, margin: 0 }}>
          53 materiais -- Digital + Ads + Social + Deck + Fisicos -- Marco 2026
        </p>
      </div>
    </div>
  )
}

/* ================================================================== */
/*  STORY: DigitalAds (focused on ads only)                           */
/* ================================================================== */

function DigitalAds() {
  return (
    <div style={page}>
      <div>
        <Divider label="Digital Ads -- Todos os formatos" />
        <Block title="Meta Feed Ads (1:1)">
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <MaterialCard label="Awareness" dims="1080x1080" width={300} height={300}><AdFeedAwareness /></MaterialCard>
            <MaterialCard label="Consideration" dims="1080x1080" width={300} height={300}><AdFeedConsideration /></MaterialCard>
            <MaterialCard label="Conversion" dims="1080x1080" width={300} height={300}><AdFeedConversion /></MaterialCard>
          </div>
        </Block>
        <div style={{ marginTop: 32 }} />
        <Block title="Meta Stories (9:16)">
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <MaterialCard label="Hero" dims="1080x1920" width={220} height={391}><StoryHero /></MaterialCard>
            <MaterialCard label="Data Cascade" dims="1080x1920" width={220} height={391}><StoryData /></MaterialCard>
            <MaterialCard label="System Visual" dims="1080x1920" width={220} height={391}><StorySystem /></MaterialCard>
          </div>
        </Block>
        <div style={{ marginTop: 32 }} />
        <Block title="Carrossel (5 slides)">
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            {[CarouselSlide1, CarouselSlide2, CarouselSlide3, CarouselSlide4, CarouselSlide5].map((Slide, i) => (
              <MaterialCard key={i} label={`Slide ${i + 1}`} dims="1080x1080" width={220} height={220}><Slide /></MaterialCard>
            ))}
          </div>
        </Block>
        <div style={{ marginTop: 32 }} />
        <Block title="Google Display">
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginTop: 8 }}>
            <MaterialCard label="728x90" dims="Leaderboard" width={400} height={50}><GoogleLeaderboard /></MaterialCard>
            <MaterialCard label="300x250" dims="Medium Rect" width={220} height={183}><GoogleMedRect /></MaterialCard>
            <MaterialCard label="160x600" dims="Skyscraper" width={90} height={338}><GoogleSkyscraper /></MaterialCard>
          </div>
        </Block>
        <div style={{ marginTop: 32 }} />
        <Block title="YouTube Thumbnail">
          <MaterialCard label="Thumbnail" dims="1280x720" width={480} ratio="16/9"><YouTubeThumbnail /></MaterialCard>
        </Block>
      </div>
    </div>
  )
}

/* ================================================================== */
/*  STORY: PhysicalMockups (focused on physical items)                */
/* ================================================================== */

function PhysicalMockups() {
  return (
    <div style={page}>
      <div>
        <Divider label="Materiais Fisicos -- Mockups CSS/SVG" />
        <p style={{ fontSize: 13, color: T.mist, margin: '8px 0 24px', lineHeight: 1.6 }}>
          Visualizacao de todos os materiais fisicos da marca Cortex. Preto fosco + Signal Blue (#4D71FA). Premium/minimalista.
        </p>
      </div>

      <Block title="Vestuario">
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' as const, marginTop: 8, padding: 32, background: T.ink, borderRadius: 12, border: `1px solid ${T.steel}` }}>
          <TshirtMockup label="Camiseta" />
          <TshirtMockup label="Babylook" feminine />
          <BomberMockup />
          <PufferMockup />
          <WindbreakerMockup />
          <CapMockup />
        </div>
      </Block>

      <Block title="Acessorios & Escritorio">
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' as const, alignItems: 'flex-end', marginTop: 8, padding: 32, background: T.ink, borderRadius: 12, border: `1px solid ${T.steel}` }}>
          <SqueezeMockup />
          <MugMockup />
          <MoleskineMockup />
          <StickerPack />
          <DeskMatMockup />
          <BadgeLanyardMockup />
        </div>
      </Block>

      <Block title="Eventos & Impressos">
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' as const, alignItems: 'flex-end', marginTop: 8, padding: 32, background: T.ink, borderRadius: 12, border: `1px solid ${T.steel}` }}>
          <BackdropMockup />
          <RollupMockup />
          <CertificateMockup />
        </div>
      </Block>
    </div>
  )
}

/* ================================================================== */
/*  STORY: PresentationDeck (focused on deck slides)                  */
/* ================================================================== */

function PresentationDeck() {
  return (
    <div style={page}>
      <div>
        <Divider label="Presentation Deck -- 12 slides" />
        <p style={{ fontSize: 13, color: T.mist, margin: '8px 0 0', lineHeight: 1.6 }}>
          Deck completo de vendas/investidor. 16:9, cada slide renderizado em miniatura legivel.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 16 }}>
        {deckSlides.map(s => (
          <MaterialCard key={s.num} label={`${s.num} — ${s.title}`} dims="1920x1080 (16:9)" ratio="16/9" width={340}>
            {s.render()}
          </MaterialCard>
        ))}
      </div>
    </div>
  )
}

/* ================================================================== */
/*  CSF3 Meta & Exports                                               */
/* ================================================================== */

const meta: Meta = {
  title: 'Cortex DS / Brand Applications',
  parameters: { layout: 'fullscreen' },
}
export default meta

export const MaterialsShowcaseStory: StoryObj = {
  name: 'MaterialsShowcase',
  render: () => <MaterialsShowcase />,
}

export const DigitalAdsStory: StoryObj = {
  name: 'DigitalAds',
  render: () => <DigitalAds />,
}

export const PhysicalMockupsStory: StoryObj = {
  name: 'PhysicalMockups',
  render: () => <PhysicalMockups />,
}

export const PresentationDeckStory: StoryObj = {
  name: 'PresentationDeck',
  render: () => <PresentationDeck />,
}
