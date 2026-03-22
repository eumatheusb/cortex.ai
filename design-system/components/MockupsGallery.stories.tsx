import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

/* ─── tokens ────────────────────────────────────────────────────────────── */
const t = {
  void:       '#090E1A',
  ink:        '#0C1220',
  dusk:       '#1B2845',
  steel:      '#1E2533',
  ash:        '#4A5568',
  mist:       '#94A3B8',
  white:      '#F7F9FC',
  signal:     '#4D71FA',
  signalDark: '#3558D4',
  signalGlow: 'rgba(77,113,250,0.15)',
}

/* ─── types ─────────────────────────────────────────────────────────────── */
type MockupTag =
  | 'BAG' | 'BOTTLE' | 'CAP' | 'CARDS' | 'DESK' | 'DETAIL'
  | 'EXPERIENCE' | 'FLATLAY' | 'HERO' | 'KIT' | 'LIFESTYLE'
  | 'MUG' | 'PHONE' | 'PREMIUM' | 'TECH' | 'TSHIRT' | 'UNBOXING'

interface MockupItem {
  id: string
  title: string
  tags: MockupTag[]
  signalBg?: boolean
  render: () => React.ReactNode
}

/* ─── css-in-js helpers ─────────────────────────────────────────────────── */
const css = (obj: React.CSSProperties): React.CSSProperties => obj

const cortexLogoInline = (size: 'sm' | 'md' | 'lg' = 'sm') => {
  const sizes = { sm: 14, md: 20, lg: 32 }
  return (
    <span style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      fontSize: sizes[size],
      letterSpacing: '0.05em',
    }}>
      <span style={{ color: t.white }}>Cor</span>
      <span style={{ color: t.signal }}>tex</span>
    </span>
  )
}

const cortexIcon = (size = 28) => (
  <div style={{
    width: size, height: size,
    border: `${Math.max(2, size / 10)}px solid ${t.signal}`,
    borderRightColor: 'transparent',
    borderRadius: '50%',
    position: 'relative' as const,
    transform: 'rotate(-45deg)',
    flexShrink: 0,
  }}>
    <div style={{
      position: 'absolute' as const,
      width: size / 5, height: size / 5,
      background: t.signal,
      borderRadius: '50%',
      top: -1, right: size / -5,
    }} />
  </div>
)

const centerWrap = css({
  width: '100%', height: '100%',
  position: 'absolute', inset: 0,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  flexDirection: 'column',
})

/* ─── mockup renders ────────────────────────────────────────────────────── */

const RenderBagUrban = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 30%, #1a1f2e, ${t.void})` }}>
    <div style={{
      width: 160, height: 200,
      background: 'linear-gradient(180deg, #151a28, #0d1118 60%, #0a0e16)',
      borderRadius: '8px 8px 20px 20px',
      position: 'relative',
      boxShadow: 'inset 0 0 40px rgba(0,0,0,0.4), 0 20px 50px rgba(0,0,0,0.7)',
    }}>
      <div style={{ position: 'absolute', top: -30, left: 20, width: 80, height: 30, border: `2px solid ${t.ash}`, borderBottom: 'none', borderRadius: '40px 40px 0 0' }} />
      <div style={{ position: 'absolute', top: -30, right: 20, width: 80, height: 30, border: `2px solid ${t.ash}`, borderBottom: 'none', borderRadius: '40px 40px 0 0' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)', borderRadius: 'inherit' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' as const }}>
        <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center' }}>{cortexIcon(24)}</div>
        {cortexLogoInline('md')}
      </div>
    </div>
  </div>
)

const RenderBottleHero = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 60%, #151a28, ${t.void})` }}>
    <div style={{
      width: 70, height: 220,
      background: 'linear-gradient(90deg, #0e1320, #1a2035 30%, #252d42 50%, #1a2035 70%, #0e1320)',
      borderRadius: '10px 10px 14px 14px',
      position: 'relative',
      boxShadow: '0 30px 60px rgba(0,0,0,0.8), 4px 0 15px rgba(0,0,0,0.3), -4px 0 15px rgba(0,0,0,0.3)',
    }}>
      <div style={{ position: 'absolute', top: -28, left: '50%', transform: 'translateX(-50%)', width: 36, height: 28, background: 'linear-gradient(90deg, #181e30, #2a3350 50%, #181e30)', borderRadius: '6px 6px 2px 2px' }} />
      <div style={{ position: 'absolute', top: 20, left: 12, width: 3, height: 140, background: 'linear-gradient(180deg, rgba(255,255,255,0.12), transparent)', borderRadius: 2 }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.35 }}>
        {cortexLogoInline('sm')}
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: -2, right: -2, height: 8, background: 'linear-gradient(90deg, #0c1018, #1e2538 50%, #0c1018)', borderRadius: '0 0 16px 16px' }} />
    </div>
  </div>
)

const RenderCapDetail = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 70%, #141926, ${t.void})` }}>
    <div style={{ position: 'relative', width: 180, height: 120 }}>
      <div style={{
        width: 140, height: 90, margin: '0 auto',
        background: 'linear-gradient(180deg, #1a2030, #141a28 50%, #10151f)',
        borderRadius: '70px 70px 0 0',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
      }}>
        <div style={{ position: 'absolute', top: 35, left: '50%', transform: 'translateX(-50%)', opacity: 0.2 }}>
          {cortexLogoInline('sm')}
        </div>
      </div>
      <div style={{ width: 180, height: 20, background: 'linear-gradient(180deg, #1e2538, #141a28)', borderRadius: '0 0 90px 90px', boxShadow: '0 6px 20px rgba(0,0,0,0.7)' }} />
    </div>
  </div>
)

const RenderCapSignal = () => (
  <div style={{ ...centerWrap, background: `linear-gradient(135deg, ${t.signal}, ${t.signalDark})` }}>
    <div style={{ position: 'relative', width: 180, height: 120 }}>
      <div style={{
        width: 140, height: 90, margin: '0 auto',
        background: 'linear-gradient(180deg, #1a2030, #10151f)',
        borderRadius: '70px 70px 0 0',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
      }}>
        <div style={{ position: 'absolute', top: 35, left: '50%', transform: 'translateX(-50%)' }}>
          {cortexLogoInline('sm')}
        </div>
      </div>
      <div style={{ width: 180, height: 20, background: 'linear-gradient(180deg, #1e2538, #141a28)', borderRadius: '0 0 90px 90px' }} />
    </div>
  </div>
)

const RenderTshirtHero = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 40%, #141926, ${t.void})` }}>
    <div style={{ position: 'relative', width: 200, height: 240 }}>
      <div style={{
        width: 200, height: 220,
        background: 'linear-gradient(180deg, #151a28, #101520 40%, #0d1118)',
        clipPath: 'polygon(30% 0%, 70% 0%, 72% 5%, 100% 15%, 90% 18%, 85% 40%, 85% 100%, 15% 100%, 15% 40%, 10% 18%, 0% 15%, 28% 5%)',
        position: 'relative',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
      }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 60, height: 18, borderRadius: '0 0 30px 30px', background: 'linear-gradient(180deg, #0a0e16, #0f141e)' }} />
        <div style={{ position: 'absolute', top: 60, left: 32 }}>{cortexLogoInline('sm')}</div>
      </div>
    </div>
  </div>
)

const RenderTshirtFlatlay = () => (
  <div style={{ ...centerWrap, background: `linear-gradient(180deg, ${t.ink}, ${t.void})` }}>
    <div style={{ position: 'relative', width: 220, height: 200 }}>
      <div style={{
        width: 200, height: 180,
        background: 'linear-gradient(180deg, #141a28, #0d1118)',
        clipPath: 'polygon(30% 0%, 70% 0%, 72% 5%, 100% 15%, 90% 18%, 85% 40%, 85% 100%, 15% 100%, 15% 40%, 10% 18%, 0% 15%, 28% 5%)',
      }} />
      <div style={{ position: 'absolute', top: 20, right: -30, display: 'flex', gap: 4, alignItems: 'center' }}>
        <div style={{ width: 32, height: 22, border: `2px solid ${t.ash}`, borderRadius: 6, background: 'rgba(77,113,250,0.08)' }} />
        <div style={{ width: 8, height: 2, background: t.ash }} />
        <div style={{ width: 32, height: 22, border: `2px solid ${t.ash}`, borderRadius: 6, background: 'rgba(77,113,250,0.08)' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 20, right: -20, width: 24, height: 36, border: `3px solid ${t.ash}`, borderRadius: 6 }} />
    </div>
  </div>
)

const RenderBomberJacket = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 40%, #161c2c, ${t.void})` }}>
    <div style={{ position: 'relative', width: 210, height: 240 }}>
      <div style={{
        width: 210, height: 230,
        background: 'linear-gradient(180deg, #181e2e, #121828 50%, #0e1320)',
        clipPath: 'polygon(25% 0%, 75% 0%, 78% 3%, 100% 12%, 95% 16%, 92% 45%, 95% 100%, 5% 100%, 8% 45%, 5% 16%, 0% 12%, 22% 3%)',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 80, height: 20, background: 'linear-gradient(180deg, #222a3e, #1a2234)', borderRadius: '0 0 6px 6px' }} />
        <div style={{ position: 'absolute', top: 22, left: '50%', transform: 'translateX(-50%)', width: 2, height: 170, background: 'linear-gradient(180deg, #2a3350, #1e2538 50%, #2a3350)' }} />
        <div style={{ position: 'absolute', top: 55, left: 35 }}>{cortexLogoInline('sm')}</div>
      </div>
    </div>
  </div>
)

const RenderHoodieDark = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 35%, #151b2a, ${t.void})` }}>
    <div style={{ position: 'relative', width: 210, height: 250 }}>
      <div style={{
        width: 210, height: 240,
        background: 'linear-gradient(180deg, #161c2c, #111828 50%, #0d1220)',
        clipPath: 'polygon(25% 8%, 38% 0%, 62% 0%, 75% 8%, 78% 10%, 100% 20%, 95% 24%, 90% 50%, 90% 100%, 10% 100%, 10% 50%, 5% 24%, 0% 20%, 22% 10%)',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: -2, left: '50%', transform: 'translateX(-50%)', width: 100, height: 40, background: 'linear-gradient(180deg, #1e2538, #161c2c)', borderRadius: '50px 50px 0 0' }} />
        <div style={{ position: 'absolute', top: 50, left: 80, width: 2, height: 40, background: t.ash, borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 50, right: 80, width: 2, height: 40, background: t.ash, borderRadius: 1 }} />
        <div style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)', width: 120, height: 50, borderTop: '1px solid rgba(255,255,255,0.04)', borderRadius: '0 0 8px 8px' }} />
        <div style={{ position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)' }}>{cortexLogoInline('md')}</div>
      </div>
    </div>
  </div>
)

const RenderPhoneCase = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 50%, #141926, ${t.void})` }}>
    <div style={{
      width: 130, height: 260,
      background: 'linear-gradient(135deg, #181e30, #111828 40%, #0d1220)',
      borderRadius: 22,
      position: 'relative',
      transform: 'perspective(600px) rotateY(-8deg) rotateX(2deg)',
      boxShadow: '0 30px 60px rgba(0,0,0,0.7), 12px 12px 30px rgba(0,0,0,0.5), inset 0 0 0 2px rgba(255,255,255,0.04)',
    }}>
      <div style={{ position: 'absolute', top: 12, left: 12, width: 50, height: 50, background: '#0a0e16', borderRadius: 12, display: 'flex', flexWrap: 'wrap' as const, gap: 4, padding: 6, alignItems: 'center', justifyContent: 'center' }}>
        {[0,1,2].map(i => <div key={i} style={{ width: 16, height: 16, borderRadius: '50%', background: 'radial-gradient(circle, #1a2035, #0a0e16 60%)', border: '1px solid #2a3350' }} />)}
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' as const }}>
        <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center' }}>{cortexIcon(24)}</div>
        {cortexLogoInline('sm')}
      </div>
    </div>
  </div>
)

const RenderMugLifestyle = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 80%, #161c2c, ${t.void})`, paddingTop: 40 }}>
    <div style={{ position: 'relative', width: 180, height: 180 }}>
      <div style={{
        width: 100, height: 110,
        background: 'linear-gradient(90deg, #0e1320, #1a2035 30%, #222a3e 50%, #1a2035 70%, #0e1320)',
        borderRadius: '4px 4px 10px 10px',
        position: 'relative',
        boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
      }}>
        <div style={{ position: 'absolute', top: -3, left: -2, right: -2, height: 6, background: 'linear-gradient(90deg, #1a2035, #2e3858 50%, #1a2035)', borderRadius: '3px 3px 0 0' }} />
        <div style={{ position: 'absolute', top: 20, right: -25, width: 25, height: 50, border: '5px solid #1a2035', borderLeft: 'none', borderRadius: '0 14px 14px 0' }} />
        <div style={{ position: 'absolute', top: 35, left: '50%', transform: 'translateX(-50%)' }}>{cortexLogoInline('sm')}</div>
        <div style={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
          {[30,24,20].map((h,i) => (
            <div key={i} style={{
              width: 2, height: h, borderRadius: 1,
              background: 'linear-gradient(180deg, transparent, rgba(148,163,184,0.15) 50%, transparent)',
              animation: 'none',
            }} />
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: -15, left: -40, width: 260, height: 30, background: 'linear-gradient(180deg, #141926, #0c1018)', borderRadius: '50%' }} />
    </div>
  </div>
)

const RenderCardsLuxury = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 50%, #141926, ${t.void})` }}>
    <div style={{ position: 'relative', width: 220, height: 160, transform: 'perspective(600px) rotateX(25deg) rotateZ(-5deg)' }}>
      {[0,1,2].map(i => (
        <div key={i} style={{
          position: 'absolute',
          width: 200, height: 120,
          background: 'linear-gradient(135deg, #141a28, #0e1320)',
          borderRadius: 8,
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          border: '1px solid rgba(255,255,255,0.04)',
          top: i * 8, left: i * 8,
        }}>
          {i === 2 && (
            <>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' as const }}>
                <div style={{ marginBottom: 6, display: 'flex', justifyContent: 'center' }}>{cortexIcon(20)}</div>
                {cortexLogoInline('sm')}
              </div>
              <div style={{ position: 'absolute', bottom: 16, left: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: t.ash, letterSpacing: '0.06em' }}>cortex.ai</div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
)

const RenderNotebookPremium = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 50%, #151b2a, ${t.void})` }}>
    <div style={{
      width: 150, height: 210,
      background: 'linear-gradient(135deg, #161c2c, #0f1520 60%, #0c1018)',
      borderRadius: '4px 10px 10px 4px',
      position: 'relative',
      boxShadow: '0 20px 50px rgba(0,0,0,0.6), 4px 4px 20px rgba(0,0,0,0.4)',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: 8, height: '100%', background: 'linear-gradient(90deg, #0a0e16, #141a28)', borderRadius: '4px 0 0 4px' }} />
      <div style={{ position: 'absolute', top: 0, right: 20, width: 3, height: '100%', background: t.signal, borderRadius: 1, boxShadow: '0 0 6px rgba(77,113,250,0.3)' }} />
      <div style={{ position: 'absolute', bottom: -20, left: 40, width: 2, height: 30, background: t.signal }} />
      <div style={{ position: 'absolute', top: '40%', left: '55%', transform: 'translate(-50%,-50%)', opacity: 0.3, textAlign: 'center' as const }}>
        <div style={{ marginBottom: 6, display: 'flex', justifyContent: 'center' }}>{cortexIcon(20)}</div>
        {cortexLogoInline('sm')}
      </div>
    </div>
  </div>
)

const RenderAirpodsCase = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 50%, #151b2a, ${t.void})` }}>
    <div style={{
      width: 80, height: 100,
      background: 'linear-gradient(135deg, #181e30, #111828 60%, #0d1220)',
      borderRadius: '16px 16px 22px 22px',
      position: 'relative',
      boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
    }}>
      <div style={{ position: 'absolute', top: 32, left: 0, right: 0, height: 2, background: 'rgba(0,0,0,0.4)' }} />
      <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', width: 6, height: 6, borderRadius: '50%', background: t.signal, boxShadow: '0 0 8px rgba(77,113,250,0.5)' }} />
      <div style={{ position: 'absolute', top: 58, left: '50%', transform: 'translateX(-50%)' }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.05em' }}>
          <span style={{ color: t.white }}>Cor</span><span style={{ color: t.signal }}>tex</span>
        </span>
      </div>
    </div>
  </div>
)

const RenderPenExecutive = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 50%, #141926, ${t.void})` }}>
    <div style={{ transform: 'rotate(-30deg)' }}>
      <div style={{
        width: 12, height: 220,
        background: 'linear-gradient(90deg, #0e1320, #1e2538 30%, #2a3350 50%, #1e2538 70%, #0e1320)',
        borderRadius: '6px 6px 2px 2px',
        position: 'relative',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      }}>
        <div style={{ position: 'absolute', top: 10, right: -6, width: 4, height: 50, background: t.signal, borderRadius: 2, boxShadow: '0 0 6px rgba(77,113,250,0.3)' }} />
        <div style={{ position: 'absolute', bottom: -16, left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '16px solid #1e2538' }} />
        <div style={{ position: 'absolute', top: 20, left: 2, width: 1, height: 160, background: 'linear-gradient(180deg, rgba(255,255,255,0.12), transparent)' }} />
      </div>
    </div>
  </div>
)

const RenderPowerBank = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 50%, #141926, ${t.void})` }}>
    <div style={{
      width: 130, height: 70,
      background: 'linear-gradient(180deg, #181e30, #111828 50%, #0d1220)',
      borderRadius: 12,
      position: 'relative',
      boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
    }}>
      <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)' }}>{cortexLogoInline('sm')}</div>
      <div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: '50%',
            background: i < 3 ? t.signal : t.steel,
            boxShadow: i < 3 ? '0 0 6px rgba(77,113,250,0.5)' : 'none',
          }} />
        ))}
      </div>
      <div style={{ position: 'absolute', right: -2, top: '50%', transform: 'translateY(-50%)', width: 6, height: 10, background: '#0a0e16', borderRadius: '0 3px 3px 0' }} />
    </div>
  </div>
)

const RenderUsbDrive = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 50%, #151b2a, ${t.void})` }}>
    <div style={{
      width: 50, height: 80,
      background: 'linear-gradient(90deg, #181e30, #252d42 50%, #181e30)',
      borderRadius: 6,
      position: 'relative',
      boxShadow: '0 15px 30px rgba(0,0,0,0.6)',
    }}>
      <div style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', width: 14, height: 14, border: `2px solid ${t.ash}`, borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: -18, left: '50%', transform: 'translateX(-50%)', width: 20, height: 18, background: 'linear-gradient(90deg, #2a3350, #3a4568 50%, #2a3350)', borderRadius: '0 0 4px 4px' }}>
        <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', width: 12, height: 6, background: '#0a0e16', borderRadius: 2 }} />
      </div>
      <div style={{ position: 'absolute', top: 32, left: '50%', transform: 'translateX(-50%)' }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 9, letterSpacing: '0.05em' }}>
          <span style={{ color: t.white }}>Cor</span><span style={{ color: t.signal }}>tex</span>
        </span>
      </div>
    </div>
  </div>
)

const RenderStickerPack = () => (
  <div style={{ ...centerWrap, background: `linear-gradient(180deg, ${t.ink}, ${t.void})` }}>
    <div style={{ position: 'relative', width: 260, height: 260 }}>
      <div style={{ position: 'absolute', top: 10, left: 10, width: 70, height: 70, borderRadius: '50%', background: t.void, border: `2px solid ${t.signal}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-8deg)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
        {cortexIcon(24)}
      </div>
      <div style={{ position: 'absolute', top: 5, right: 40, width: 60, height: 60, borderRadius: 10, background: t.void, border: `2px solid ${t.steel}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(5deg)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
        {cortexLogoInline('sm')}
      </div>
      <div style={{ position: 'absolute', top: 90, left: 60, width: 140, height: 36, borderRadius: 18, background: t.void, border: `2px solid ${t.steel}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-3deg)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)', fontFamily: "'JetBrains Mono', monospace", fontSize: 7, color: t.mist, letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>
        Do lead ao lucro. Zero fragmentacao.
      </div>
      <div style={{ position: 'absolute', bottom: 60, left: 20, width: 55, height: 55, borderRadius: 6, background: t.void, border: `2px solid ${t.steel}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(4deg)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 2, width: 30, height: 30 }}>
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} style={{ background: i % 2 === 0 ? t.signal : 'transparent', borderRadius: 1 }} />
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 30, width: 65, height: 65, borderRadius: 8, background: t.void, border: `2px solid ${t.steel}`, overflow: 'hidden', transform: 'rotate(-6deg)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
        <div style={{ width: '100%', height: '100%', background: `repeating-linear-gradient(45deg, ${t.signal} 0px, ${t.signal} 2px, transparent 2px, transparent 8px)`, opacity: 0.3 }} />
      </div>
      <div style={{ position: 'absolute', bottom: 10, left: 100, width: 50, height: 50, borderRadius: '50%', background: t.signal, border: `2px solid ${t.signal}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(12deg)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 6, color: t.void, textTransform: 'uppercase' as const, letterSpacing: '0.06em', textAlign: 'center' as const, lineHeight: 1.3 }}>CORTEX<br />2026</span>
      </div>
    </div>
  </div>
)

const RenderDeskSetup = () => (
  <div style={{ ...centerWrap, background: `linear-gradient(180deg, #0e1320, ${t.void})` }}>
    <div style={{ position: 'relative', width: 280, height: 200 }}>
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: 280, height: 160,
        background: 'linear-gradient(180deg, #111828, #0d1118)',
        borderRadius: 8, border: '1px solid rgba(255,255,255,0.03)',
      }}>
        <div style={{ position: 'absolute', bottom: 10, right: 12, opacity: 0.15 }}>{cortexLogoInline('sm')}</div>
        <div style={{ position: 'absolute', top: 20, left: 20, width: 60, height: 80, background: 'linear-gradient(135deg, #161c2c, #0f1520)', borderRadius: '2px 6px 6px 2px', border: '1px solid rgba(255,255,255,0.03)' }} />
        <div style={{ position: 'absolute', top: 15, left: 90, width: 4, height: 70, background: 'linear-gradient(90deg, #1e2538, #2a3350 50%, #1e2538)', borderRadius: 2, transform: 'rotate(5deg)' }} />
        <div style={{ position: 'absolute', top: 10, right: 30, width: 40, height: 45, background: 'linear-gradient(90deg, #141a28, #1e2538 50%, #141a28)', borderRadius: '3px 3px 6px 6px', position: 'relative' as any }}>
          <div style={{ position: 'absolute', top: 8, right: -10, width: 10, height: 22, border: '3px solid #1a2035', borderLeft: 'none', borderRadius: '0 8px 8px 0' }} />
        </div>
      </div>
    </div>
  </div>
)

const RenderFlatlayKit = () => (
  <div style={{ ...centerWrap, background: `linear-gradient(135deg, ${t.signal}, ${t.signalDark})` }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, width: 260, padding: 10 }}>
      {['Tshirt','Bottle','Cap','Mug','Notebook','Cards','Stickers','Pen'].map(label => (
        <div key={label} style={{
          background: 'rgba(9,14,26,0.85)', borderRadius: 6,
          aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 6, boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 7, color: t.mist, textTransform: 'uppercase' as const, letterSpacing: '0.04em', textAlign: 'center' as const }}>{label}</span>
        </div>
      ))}
    </div>
  </div>
)

const RenderUnboxing = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 60%, #161c2c, ${t.void})` }}>
    <div style={{ position: 'relative', width: 220, height: 220, perspective: 500 }}>
      <div style={{ position: 'absolute', bottom: 110, left: 5, width: 210, height: 20, background: 'linear-gradient(180deg, #1e2538, #161c2c)', borderRadius: '4px 4px 0 0', transform: 'rotateX(-30deg)', transformOrigin: 'bottom center', boxShadow: '0 -4px 15px rgba(0,0,0,0.3)' }} />
      <div style={{ position: 'absolute', bottom: 90, left: 30, width: 80, height: 60, background: 'rgba(77,113,250,0.2)', transform: 'rotate(-5deg)', clipPath: 'polygon(10% 0%, 90% 0%, 100% 30%, 85% 100%, 15% 100%, 0% 30%)' }} />
      <div style={{ position: 'absolute', bottom: 95, right: 25, width: 70, height: 55, background: 'rgba(77,113,250,0.2)', transform: 'rotate(8deg)', clipPath: 'polygon(10% 0%, 90% 0%, 100% 30%, 85% 100%, 15% 100%, 0% 30%)' }} />
      <div style={{ position: 'absolute', bottom: 20, left: 10, width: 200, height: 100, background: 'linear-gradient(180deg, #181e30, #0f1520)', borderRadius: 4, boxShadow: '0 15px 40px rgba(0,0,0,0.6)' }}>
        <div style={{ position: 'absolute', inset: 4, background: t.signal, borderRadius: 2, opacity: 0.15 }} />
      </div>
      <div style={{ position: 'absolute', bottom: 50, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>{cortexLogoInline('md')}</div>
    </div>
  </div>
)

const RenderLanyardBadge = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 30%, #141926, ${t.void})` }}>
    <div style={{ position: 'relative', width: 120, height: 280 }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 16, height: 140, background: 'linear-gradient(90deg, #0d1118, #161c2c 50%, #0d1118)', borderRadius: 2 }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 2, height: 140, background: t.signal, opacity: 0.4 }} />
      </div>
      <div style={{ position: 'absolute', top: 130, left: '50%', transform: 'translateX(-50%)', width: 20, height: 16, background: '#2a3350', borderRadius: 2 }} />
      <div style={{
        position: 'absolute', top: 148, left: '50%', transform: 'translateX(-50%)',
        width: 100, height: 130,
        background: 'linear-gradient(180deg, #161c2c, #0f1520)',
        borderRadius: 8, boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        border: '1px solid rgba(255,255,255,0.04)',
        display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center', gap: 8, padding: 12,
      }}>
        <div style={{ width: 40, height: 40, background: t.steel, borderRadius: '50%' }} />
        {cortexIcon(18)}
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 7, color: t.mist, textTransform: 'uppercase' as const }}>Team Member</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 6, color: t.ash }}>Cortex // 2026</span>
      </div>
    </div>
  </div>
)

const RenderToteBag = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 40%, #141926, ${t.void})` }}>
    <div style={{ position: 'relative', width: 180, height: 200 }}>
      <div style={{ position: 'absolute', top: -30, left: 40, width: 30, height: 30, border: '4px solid #1a2035', borderBottom: 'none', borderRadius: '15px 15px 0 0' }} />
      <div style={{ position: 'absolute', top: -30, right: 40, width: 30, height: 30, border: '4px solid #1a2035', borderBottom: 'none', borderRadius: '15px 15px 0 0' }} />
      <div style={{
        width: 180, height: 180,
        background: 'linear-gradient(180deg, #161c2c, #111828 50%, #0d1118)',
        clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
        position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
      }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' as const }}>
          <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center' }}>{cortexIcon(36)}</div>
          {cortexLogoInline('lg')}
        </div>
      </div>
    </div>
  </div>
)

const RenderUmbrella = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 50%, #141926, ${t.void})` }}>
    <div style={{
      width: 200, height: 200, borderRadius: '50%',
      background: 'conic-gradient(#161c2c 0deg, #1a2035 45deg, #141a28 45deg, #181e30 90deg, #161c2c 90deg, #1a2035 135deg, #141a28 135deg, #181e30 180deg, #161c2c 180deg, #1a2035 225deg, #141a28 225deg, #181e30 270deg, #161c2c 270deg, #1a2035 315deg, #141a28 315deg, #181e30 360deg)',
      position: 'relative',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 0 40px rgba(0,0,0,0.3)',
    }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 12, height: 12, background: t.signal, borderRadius: '50%', boxShadow: '0 0 12px rgba(77,113,250,0.5)' }} />
      {[0,45,90,135,180,225,270,315].map(deg => (
        <div key={deg} style={{ position: 'absolute', top: '50%', left: '50%', width: 1, height: 100, background: 'rgba(255,255,255,0.04)', transformOrigin: 'top center', transform: `rotate(${deg}deg)` }} />
      ))}
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)' }}>{cortexLogoInline('sm')}</div>
    </div>
  </div>
)

const RenderKeychain = () => (
  <div style={{ ...centerWrap, background: `radial-gradient(ellipse at 50% 50%, #151b2a, ${t.void})` }}>
    <div style={{ position: 'relative', width: 60, height: 120 }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 30, height: 30, border: '3px solid #2a3350', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', top: 26, left: '50%', transform: 'translateX(-50%)', width: 8, height: 14, background: '#2a3350', borderRadius: 2 }} />
      <div style={{
        position: 'absolute', top: 42, left: '50%', transform: 'translateX(-50%)',
        width: 44, height: 56,
        background: 'linear-gradient(135deg, #1e2538, #141a28)',
        borderRadius: 8, boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid rgba(255,255,255,0.04)',
      }}>
        {cortexIcon(20)}
      </div>
    </div>
  </div>
)

/* ─── data ──────────────────────────────────────────────────────────────── */
const MOCKUPS: MockupItem[] = [
  { id: 'bag-urban',       title: 'Bag Urban',         tags: ['BAG','LIFESTYLE','PREMIUM'],       render: RenderBagUrban },
  { id: 'bottle-hero',     title: 'Bottle Hero',       tags: ['BOTTLE','HERO','PREMIUM'],         render: RenderBottleHero },
  { id: 'cap-detail',      title: 'Cap Detail',        tags: ['CAP','DETAIL','PREMIUM'],          render: RenderCapDetail },
  { id: 'cap-signal',      title: 'Cap Signal',        tags: ['CAP','HERO','PREMIUM'],            signalBg: true, render: RenderCapSignal },
  { id: 'tshirt-hero',     title: 'Tshirt Hero',       tags: ['TSHIRT','HERO','PREMIUM'],         render: RenderTshirtHero },
  { id: 'tshirt-flatlay',  title: 'Tshirt Flatlay',    tags: ['TSHIRT','FLATLAY','LIFESTYLE'],    render: RenderTshirtFlatlay },
  { id: 'bomber-jacket',   title: 'Bomber Jacket',     tags: ['TSHIRT','HERO','PREMIUM'],         render: RenderBomberJacket },
  { id: 'hoodie-dark',     title: 'Hoodie Dark',       tags: ['TSHIRT','LIFESTYLE','PREMIUM'],    render: RenderHoodieDark },
  { id: 'phone-case',      title: 'Phone Case',        tags: ['PHONE','TECH','PREMIUM'],          render: RenderPhoneCase },
  { id: 'mug-lifestyle',   title: 'Mug Lifestyle',     tags: ['MUG','LIFESTYLE','PREMIUM'],       render: RenderMugLifestyle },
  { id: 'cards-luxury',    title: 'Cards Luxury',      tags: ['CARDS','PREMIUM','DETAIL'],        render: RenderCardsLuxury },
  { id: 'notebook-premium',title: 'Notebook Premium',  tags: ['PREMIUM','DETAIL','LIFESTYLE'],    render: RenderNotebookPremium },
  { id: 'airpods-case',    title: 'Airpods Case',      tags: ['TECH','DETAIL','PREMIUM'],         render: RenderAirpodsCase },
  { id: 'pen-executive',   title: 'Pen Executive',     tags: ['PREMIUM','DETAIL','EXPERIENCE'],   render: RenderPenExecutive },
  { id: 'power-bank',      title: 'Power Bank',        tags: ['TECH','PREMIUM','EXPERIENCE'],     render: RenderPowerBank },
  { id: 'usb-drive',       title: 'USB Drive',         tags: ['TECH','DETAIL','PREMIUM'],         render: RenderUsbDrive },
  { id: 'sticker-pack',    title: 'Sticker Pack',      tags: ['DETAIL','EXPERIENCE','FLATLAY'],   render: RenderStickerPack },
  { id: 'desk-setup',      title: 'Desk Setup',        tags: ['DESK','LIFESTYLE','EXPERIENCE'],   render: RenderDeskSetup },
  { id: 'flatlay-kit',     title: 'Flatlay Kit',       tags: ['KIT','FLATLAY','HERO'],            signalBg: true, render: RenderFlatlayKit },
  { id: 'unboxing',        title: 'Unboxing',          tags: ['UNBOXING','EXPERIENCE','PREMIUM'], render: RenderUnboxing },
  { id: 'lanyard-badge',   title: 'Lanyard Badge',     tags: ['DETAIL','EXPERIENCE','PREMIUM'],   render: RenderLanyardBadge },
  { id: 'tote-bag',        title: 'Tote Bag',          tags: ['BAG','HERO','LIFESTYLE'],          render: RenderToteBag },
  { id: 'umbrella',        title: 'Umbrella',          tags: ['LIFESTYLE','PREMIUM','DETAIL'],    render: RenderUmbrella },
  { id: 'keychain',        title: 'Keychain',          tags: ['DETAIL','PREMIUM','TECH'],         render: RenderKeychain },
]

const HIGHLIGHT_IDS = ['bag-urban', 'tshirt-hero', 'phone-case', 'cards-luxury', 'unboxing', 'flatlay-kit']

const ALL_TAGS: MockupTag[] = [
  'BAG','BOTTLE','CAP','CARDS','DESK','DETAIL','EXPERIENCE','FLATLAY',
  'HERO','KIT','LIFESTYLE','MUG','PHONE','PREMIUM','TECH','TSHIRT','UNBOXING',
]

/* ─── styles ────────────────────────────────────────────────────────────── */
const s = {
  page: css({
    background: t.void, minHeight: '100vh', color: t.white,
    fontFamily: "'Inter', sans-serif", WebkitFontSmoothing: 'antialiased',
  }),
  header: css({
    padding: '48px 48px 0', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 16,
  }),
  headerCount: css({
    fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: t.signal,
    letterSpacing: '0.08em', background: t.signalGlow, padding: '6px 14px',
    borderRadius: 4, border: '1px solid rgba(77,113,250,0.2)',
  }),
  headerTitle: css({
    fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700,
    letterSpacing: '0.2em', textTransform: 'uppercase' as const,
  }),
  headerMeta: css({
    fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: t.mist, letterSpacing: '0.06em',
  }),
  headerBadge: css({
    fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: t.ash,
    letterSpacing: '0.12em', textTransform: 'uppercase' as const,
    border: `1px solid ${t.steel}`, padding: '4px 12px', borderRadius: 3,
  }),
  filtersBar: css({
    padding: '24px 48px', display: 'flex', flexWrap: 'wrap' as const, gap: 8,
    borderBottom: `1px solid ${t.steel}`, marginBottom: 32,
  }),
  filterBtn: (active: boolean): React.CSSProperties => ({
    fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.08em',
    textTransform: 'uppercase' as const, padding: '6px 14px',
    border: `1px solid ${active ? t.signal : t.steel}`, borderRadius: 4,
    background: active ? t.signal : 'transparent',
    color: active ? t.void : t.mist, cursor: 'pointer',
    transition: 'all 0.25s ease', fontWeight: active ? 500 : 400,
  }),
  grid: css({
    padding: '0 48px',
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
  }),
  card: css({
    borderRadius: 12, overflow: 'hidden', background: t.ink,
    border: `1px solid ${t.steel}`, transition: 'all 0.4s ease',
  }),
  cardVisual: css({
    width: '100%', minHeight: 360, position: 'relative', overflow: 'hidden',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }),
  cardInfo: css({
    padding: '16px 20px 20px', borderTop: `1px solid ${t.steel}`,
  }),
  cardTitle: css({
    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14,
    letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 8,
  }),
  cardTags: css({ display: 'flex', gap: 6, flexWrap: 'wrap' as const }),
  tag: css({
    fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.06em',
    textTransform: 'uppercase' as const, padding: '3px 8px', borderRadius: 3,
    background: 'rgba(77,113,250,0.1)', color: t.signal,
    border: '1px solid rgba(77,113,250,0.15)',
  }),
  footer: css({
    marginTop: 64, padding: '32px 48px', borderTop: `1px solid ${t.steel}`,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    flexWrap: 'wrap' as const, gap: 16,
  }),
  footerText: css({
    fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: t.ash,
    letterSpacing: '0.08em', textTransform: 'uppercase' as const,
  }),
  logoSection: css({
    padding: '80px 48px 100px', display: 'flex', flexDirection: 'column' as const,
    alignItems: 'center', gap: 20,
  }),
  logoTagline: css({
    fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: t.ash,
    letterSpacing: '0.1em', textTransform: 'uppercase' as const,
  }),
}

/* ─── MockupsGallery component ──────────────────────────────────────────── */
interface MockupsGalleryProps {
  items?: MockupItem[]
  showFilters?: boolean
  showHeader?: boolean
  showFooter?: boolean
  columns?: 2 | 3 | 4
}

const MockupsGallery: React.FC<MockupsGalleryProps> = ({
  items = MOCKUPS,
  showFilters = true,
  showHeader = true,
  showFooter = true,
  columns = 4,
}) => {
  const [activeFilter, setActiveFilter] = React.useState<string>('ALL')

  const filtered = activeFilter === 'ALL'
    ? items
    : items.filter(m => m.tags.includes(activeFilter as MockupTag))

  const tagCounts = React.useMemo(() => {
    const counts: Record<string, number> = {}
    ALL_TAGS.forEach(tag => {
      counts[tag] = items.filter(m => m.tags.includes(tag)).length
    })
    return counts
  }, [items])

  return (
    <div style={s.page}>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {showHeader && (
        <header style={s.header}>
          <span style={s.headerCount}>{items.length}</span>
          <span style={s.headerTitle}>Product Mockups</span>
          <span style={s.headerMeta}>{items.length} ITEMS // 2026</span>
          <span style={s.headerBadge}>Colecao</span>
        </header>
      )}

      {showFilters && (
        <nav style={s.filtersBar}>
          <button
            style={s.filterBtn(activeFilter === 'ALL')}
            onClick={() => setActiveFilter('ALL')}
          >
            ALL ({items.length})
          </button>
          {ALL_TAGS.map(tag => (
            tagCounts[tag] > 0 && (
              <button
                key={tag}
                style={s.filterBtn(activeFilter === tag)}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            )
          ))}
        </nav>
      )}

      <main style={{ ...s.grid, gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {filtered.map(item => (
          <article key={item.id} style={s.card}>
            <div style={s.cardVisual}>
              {item.render()}
            </div>
            <div style={s.cardInfo}>
              <div style={s.cardTitle}>{item.title}</div>
              <div style={s.cardTags}>
                {item.tags.map(tag => (
                  <span key={tag} style={s.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </main>

      {showFooter && (
        <>
          <footer style={s.footer}>
            <span style={s.footerText}><span style={{ color: t.signal }}>CORTEX</span> // BRAND SHOWCASE</span>
            <span style={s.footerText}>MOCKUPS — <span style={{ color: t.signal }}>{items.length} ITEMS</span></span>
            <span style={s.footerText}>2026 COLLECTION</span>
          </footer>
          <section style={s.logoSection}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 64" fill="none" style={{ maxWidth: 320 }}>
              <defs>
                <radialGradient id="icon-bg-sb" cx="40%" cy="40%" r="65%">
                  <stop offset="0%" stopColor="#1B2845"/>
                  <stop offset="100%" stopColor="#090E1A"/>
                </radialGradient>
              </defs>
              <rect width="64" height="64" rx="14" fill="url(#icon-bg-sb)"/>
              <path d="M 42.6,42.6 A 15,15 0 1,1 42.6,21.4" stroke="#4D71FA" strokeWidth="5" strokeLinecap="round"/>
              <circle cx="55" cy="32" r="2.5" fill="#4D71FA"/>
              <text x="80" y="44" fontFamily="'Space Grotesk', 'Arial Black', sans-serif" fontWeight="700" fontSize="36" letterSpacing="0.8" fill="#F7F9FC">Cortex</text>
            </svg>
            <span style={s.logoTagline}>Inteligencia que opera.</span>
          </section>
        </>
      )}
    </div>
  )
}

/* ─── Storybook meta ────────────────────────────────────────────────────── */
const meta: Meta = {
  title: 'Cortex DS / Mockups Gallery',
  parameters: { layout: 'fullscreen' },
}

export default meta

/* ─── Stories ───────────────────────────────────────────────────────────── */
export const Gallery: StoryObj = {
  render: () => <MockupsGallery />,
}

export const Highlights: StoryObj = {
  render: () => (
    <MockupsGallery
      items={MOCKUPS.filter(m => HIGHLIGHT_IDS.includes(m.id))}
      showFilters={false}
      columns={3}
    />
  ),
}
