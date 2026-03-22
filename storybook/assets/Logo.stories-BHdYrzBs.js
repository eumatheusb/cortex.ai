import{r as g,j as e}from"./iframe-Sy2gFGJ3.js";import{C as r}from"./Logo-BfYfbnVs.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";const h={title:"Atoms/Logo",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["horizontal","icon","wordmark"]},theme:{control:"select",options:["dark","light"]},mode:{control:"select",options:["reveal","idle","loader","static"]},size:{control:{type:"range",min:24,max:128,step:4}}}},i={args:{variant:"horizontal",theme:"dark",mode:"reveal",size:64}},s={render:()=>{const o=["horizontal","icon","wordmark"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,background:"#0C1220",padding:40,borderRadius:12},children:[e.jsx("p",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#4A5568",margin:0},children:"Variantes — dark theme"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:40,flexWrap:"wrap"},children:o.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(r,{variant:a,theme:"dark",mode:"static",size:48},a),e.jsx("span",{style:{fontFamily:"monospace",fontSize:11,color:"#4A5568"},children:a})]},a))}),e.jsx("p",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#4A5568",margin:0},children:"Variantes — light theme"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:40,flexWrap:"wrap",background:"#F7F9FC",padding:24,borderRadius:8},children:o.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx(r,{variant:a,theme:"light",mode:"static",size:48},a),e.jsx("span",{style:{fontFamily:"monospace",fontSize:11,color:"#4A5568"},children:a})]},a))})]})},name:"Variantes × Temas"},n={render:()=>{const[o,a]=g.useState(0),c=[{mode:"reveal",label:"reveal",desc:"Entrada cinematic — logo aparece com animação completa"},{mode:"idle",label:"idle",desc:"Pulsação sutil no dot — usado em sessões ativas"},{mode:"loader",label:"loader",desc:"Spinner — estado de loading ou processamento"},{mode:"static",label:"static",desc:"Sem animação — para PDFs, emails, favicon"}];return e.jsxs("div",{style:{background:"#0C1220",borderRadius:12,padding:32,maxWidth:640},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:32},children:[e.jsx("p",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#4A5568",margin:0},children:"Modos de animação"}),e.jsx("button",{onClick:()=>a(t=>t+1),style:{fontFamily:"monospace",fontSize:12,color:"#4D71FA",background:"transparent",border:"1px solid #4D71FA",borderRadius:6,padding:"4px 12px",cursor:"pointer"},children:"↺ Replay reveal"})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:28},children:c.map(({mode:t,label:p,desc:m})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24,padding:"16px 0",borderBottom:"1px solid #1E2533"},children:[e.jsx(r,{variant:"icon",theme:"dark",mode:t,size:48},t==="reveal"?o:t),e.jsxs("div",{children:[e.jsxs("p",{style:{fontFamily:"monospace",fontSize:13,color:"#F7F9FC",margin:"0 0 4px"},children:['mode="',p,'"']}),e.jsx("p",{style:{fontSize:12,color:"#94A3B8",margin:0},children:m})]})]},t))})]})},name:"Modos de animação"},d={render:()=>{const o=[24,32,48,64,96];return e.jsxs("div",{style:{background:"#0C1220",borderRadius:12,padding:32},children:[e.jsx("p",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#4A5568",marginBottom:28},children:"Escala de tamanhos"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:o.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24},children:[e.jsx(r,{variant:"horizontal",theme:"dark",mode:"static",size:a}),e.jsxs("span",{style:{fontFamily:"monospace",fontSize:11,color:"#4A5568"},children:["size=",a]})]},a))})]})},name:"Tamanhos"},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:560},children:[e.jsxs("div",{style:{background:"#0C1220",border:"1px solid #1E2533",borderRadius:12,padding:"16px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(r,{variant:"horizontal",theme:"dark",mode:"static",size:36}),e.jsx("div",{style:{display:"flex",gap:8},children:["Dashboard","CRM","Relatórios"].map(o=>e.jsx("div",{style:{fontSize:13,color:"#94A3B8",padding:"6px 12px",borderRadius:6},children:o},o))})]}),e.jsxs("div",{style:{background:"#090E1A",border:"1px solid #1E2533",borderRadius:12,padding:"24px 20px",width:220},children:[e.jsx(r,{variant:"icon",theme:"dark",mode:"static",size:40}),e.jsx("div",{style:{marginTop:24,display:"flex",flexDirection:"column",gap:4},children:["Dashboard","Leads","Relatórios","Config."].map(o=>e.jsx("div",{style:{fontSize:13,color:"#94A3B8",padding:"8px 12px",borderRadius:6,background:o==="Dashboard"?"#1B2845":"transparent"},children:o},o))})]}),e.jsxs("div",{style:{background:"#090E1A",border:"1px solid #1E2533",borderRadius:12,padding:40,display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[e.jsx(r,{variant:"horizontal",theme:"dark",mode:"loader",size:48}),e.jsx("p",{style:{fontSize:13,color:"#94A3B8",margin:0},children:"Carregando o Cortex..."})]})]}),name:"Uso contextual"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'horizontal',
    theme: 'dark',
    mode: 'reveal',
    size: 64
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants: LogoVariant[] = ['horizontal', 'icon', 'wordmark'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      background: '#0C1220',
      padding: 40,
      borderRadius: 12
    }}>
        <p style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#4A5568',
        margin: 0
      }}>
          Variantes — dark theme
        </p>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 40,
        flexWrap: 'wrap'
      }}>
          {variants.map(variant => <div key={variant} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
              <CortexLogo key={variant} variant={variant} theme="dark" mode="static" size={48} />
              <span style={{
            fontFamily: 'monospace',
            fontSize: 11,
            color: '#4A5568'
          }}>{variant}</span>
            </div>)}
        </div>
        <p style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#4A5568',
        margin: 0
      }}>
          Variantes — light theme
        </p>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 40,
        flexWrap: 'wrap',
        background: '#F7F9FC',
        padding: 24,
        borderRadius: 8
      }}>
          {variants.map(variant => <div key={variant} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
              <CortexLogo key={variant} variant={variant} theme="light" mode="static" size={48} />
              <span style={{
            fontFamily: 'monospace',
            fontSize: 11,
            color: '#4A5568'
          }}>{variant}</span>
            </div>)}
        </div>
      </div>;
  },
  name: 'Variantes × Temas'
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [replayKey, setReplayKey] = React.useState(0);
    const modes: {
      mode: LogoMode;
      label: string;
      desc: string;
    }[] = [{
      mode: 'reveal',
      label: 'reveal',
      desc: 'Entrada cinematic — logo aparece com animação completa'
    }, {
      mode: 'idle',
      label: 'idle',
      desc: 'Pulsação sutil no dot — usado em sessões ativas'
    }, {
      mode: 'loader',
      label: 'loader',
      desc: 'Spinner — estado de loading ou processamento'
    }, {
      mode: 'static',
      label: 'static',
      desc: 'Sem animação — para PDFs, emails, favicon'
    }];
    return <div style={{
      background: '#0C1220',
      borderRadius: 12,
      padding: 32,
      maxWidth: 640
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32
      }}>
          <p style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#4A5568',
          margin: 0
        }}>
            Modos de animação
          </p>
          <button onClick={() => setReplayKey(k => k + 1)} style={{
          fontFamily: 'monospace',
          fontSize: 12,
          color: '#4D71FA',
          background: 'transparent',
          border: '1px solid #4D71FA',
          borderRadius: 6,
          padding: '4px 12px',
          cursor: 'pointer'
        }}>
            ↺ Replay reveal
          </button>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }}>
          {modes.map(({
          mode,
          label,
          desc
        }) => <div key={mode} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          padding: '16px 0',
          borderBottom: '1px solid #1E2533'
        }}>
              <CortexLogo key={mode === 'reveal' ? replayKey : mode} variant="icon" theme="dark" mode={mode} size={48} />
              <div>
                <p style={{
              fontFamily: 'monospace',
              fontSize: 13,
              color: '#F7F9FC',
              margin: '0 0 4px'
            }}>mode="{label}"</p>
                <p style={{
              fontSize: 12,
              color: '#94A3B8',
              margin: 0
            }}>{desc}</p>
              </div>
            </div>)}
        </div>
      </div>;
  },
  name: 'Modos de animação'
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizes = [24, 32, 48, 64, 96] as const;
    return <div style={{
      background: '#0C1220',
      borderRadius: 12,
      padding: 32
    }}>
        <p style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#4A5568',
        marginBottom: 28
      }}>
          Escala de tamanhos
        </p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          {sizes.map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 24
        }}>
              <CortexLogo variant="horizontal" theme="dark" mode="static" size={size} />
              <span style={{
            fontFamily: 'monospace',
            fontSize: 11,
            color: '#4A5568'
          }}>size={size}</span>
            </div>)}
        </div>
      </div>;
  },
  name: 'Tamanhos'
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 560
  }}>

      {/* Navbar */}
      <div style={{
      background: '#0C1220',
      border: '1px solid #1E2533',
      borderRadius: 12,
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
        <CortexLogo variant="horizontal" theme="dark" mode="static" size={36} />
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          {['Dashboard', 'CRM', 'Relatórios'].map(n => <div key={n} style={{
          fontSize: 13,
          color: '#94A3B8',
          padding: '6px 12px',
          borderRadius: 6
        }}>{n}</div>)}
        </div>
      </div>

      {/* Sidebar */}
      <div style={{
      background: '#090E1A',
      border: '1px solid #1E2533',
      borderRadius: 12,
      padding: '24px 20px',
      width: 220
    }}>
        <CortexLogo variant="icon" theme="dark" mode="static" size={40} />
        <div style={{
        marginTop: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>
          {['Dashboard', 'Leads', 'Relatórios', 'Config.'].map(n => <div key={n} style={{
          fontSize: 13,
          color: '#94A3B8',
          padding: '8px 12px',
          borderRadius: 6,
          background: n === 'Dashboard' ? '#1B2845' : 'transparent'
        }}>{n}</div>)}
        </div>
      </div>

      {/* Loading screen */}
      <div style={{
      background: '#090E1A',
      border: '1px solid #1E2533',
      borderRadius: 12,
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }}>
        <CortexLogo variant="horizontal" theme="dark" mode="loader" size={48} />
        <p style={{
        fontSize: 13,
        color: '#94A3B8',
        margin: 0
      }}>Carregando o Cortex...</p>
      </div>

    </div>,
  name: 'Uso contextual'
}`,...l.parameters?.docs?.source}}};const b=["Default","Variantes","Modos","Tamanhos","UsoContextual"];export{i as Default,n as Modos,d as Tamanhos,l as UsoContextual,s as Variantes,b as __namedExportsOrder,h as default};
