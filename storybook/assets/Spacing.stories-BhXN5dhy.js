import{j as e}from"./iframe-Sy2gFGJ3.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Foundations/Spacing",parameters:{layout:"padded"},tags:["autodocs"]},a={ink:"#0C1220",dusk:"#1B2845",steel:"#1E2533",ash:"#4A5568",mist:"#94A3B8",white:"#F7F9FC",signal:"#4D71FA"},t={render:()=>{const p=[1,2,3,4,5,6,8,10,12,16,20,24,32,40,48,64];return e.jsxs("div",{style:{background:a.ink,borderRadius:12,padding:32,maxWidth:720},children:[e.jsx("h2",{style:{fontFamily:"'Space Grotesk', sans-serif",fontSize:16,fontWeight:700,color:a.white,marginTop:0},children:"Escala de espaçamento — base 4px"}),e.jsxs("p",{style:{fontSize:13,color:a.mist,marginBottom:32,lineHeight:1.5},children:["O Cortex usa uma grade base de ",e.jsx("strong",{style:{color:a.white},children:"4px"}),". Todos os espaços de margin, padding, gap e dimensões de componentes são múltiplos de 4px (= 1 unidade Tailwind = 0.25rem)."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:p.map(n=>{const s=n*4;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("p",{style:{fontFamily:"monospace",fontSize:12,color:a.ash,margin:0,width:40,textAlign:"right"},children:n}),e.jsx("div",{style:{width:s,height:20,background:a.signal,borderRadius:2,flexShrink:0}}),e.jsxs("p",{style:{fontFamily:"monospace",fontSize:12,color:a.mist,margin:0},children:[s,"px"]}),e.jsxs("p",{style:{fontSize:12,color:a.ash,margin:0},children:["= ",(s/16).toFixed(4).replace(/\.?0+$/,""),"rem"]})]},n)})})]})},name:"Escala base 4px"},o={render:()=>e.jsxs("div",{style:{background:a.ink,borderRadius:12,padding:32,maxWidth:640},children:[e.jsx("h2",{style:{fontFamily:"'Space Grotesk', sans-serif",fontSize:16,fontWeight:700,color:a.white,marginTop:0},children:"Anatomia dos componentes"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[{label:"Button sm",h:"h-8 (32px)",px:"px-3 (12px)",gap:"gap-1.5 (6px)"},{label:"Button md",h:"h-9 (36px)",px:"px-4 (16px)",gap:"gap-2 (8px)"},{label:"Button lg",h:"h-10 (40px)",px:"px-5 (20px)",gap:"gap-2 (8px)"},{label:"Input sm",h:"h-8 (32px)",px:"px-3 (12px)",gap:"gap-2 (8px)"},{label:"Input md",h:"h-9 (36px)",px:"px-3 (12px)",gap:"gap-2 (8px)"},{label:"Input lg",h:"h-10 (40px)",px:"px-4 (16px)",gap:"gap-2 (8px)"},{label:"Card",h:"p-5 (20px)",px:"gap-4 (16px)",gap:"rounded-lg"},{label:"Modal body",h:"px-6 (24px)",px:"py-4 (16px)",gap:"gap-4 (16px)"}].map(({label:p,h:n,px:s,gap:r})=>e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:24,padding:"10px 0",borderBottom:`1px solid ${a.steel}`},children:[e.jsx("p",{style:{fontFamily:"'Space Grotesk', sans-serif",fontWeight:600,fontSize:13,color:a.white,margin:0,width:100},children:p}),e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[n,s,r].map(d=>e.jsx("span",{style:{fontFamily:"monospace",fontSize:12,color:a.mist,background:a.dusk,padding:"2px 8px",borderRadius:4},children:d},d))})]},p))})]}),name:"Anatomia dos componentes"},i={render:()=>e.jsxs("div",{style:{background:a.ink,borderRadius:12,padding:32,maxWidth:640},children:[e.jsx("h2",{style:{fontFamily:"'Space Grotesk', sans-serif",fontSize:16,fontWeight:700,color:a.white,marginTop:0},children:"Gaps de layout recomendados"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[{ctx:"Dentro de um Form (entre campos)",gap:"gap-4 (16px)"},{ctx:"Grupo de botões",gap:"gap-2 (8px)"},{ctx:"Seções dentro de uma Card",gap:"gap-3 (12px)"},{ctx:"Seções dentro de uma página",gap:"gap-8 (32px)"},{ctx:"Seções principais (Organisms)",gap:"gap-12 (48px)"},{ctx:"Padding da página (lateral)",gap:"px-12 (48px)"},{ctx:"Padding de PageHeader",gap:"py-7 (28px)"},{ctx:"Gap da Sidebar nav items",gap:"gap-1 (4px)"}].map(({ctx:p,gap:n})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:`1px solid ${a.steel}`},children:[e.jsx("p",{style:{fontSize:13,color:a.mist,margin:0},children:p}),e.jsx("span",{style:{fontFamily:"monospace",fontSize:12,color:a.signal,background:"rgba(77,113,250,0.1)",padding:"3px 10px",borderRadius:4},children:n})]},p))})]}),name:"Gaps de layout"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const steps = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64];
    return <div style={{
      background: T.ink,
      borderRadius: 12,
      padding: 32,
      maxWidth: 720
    }}>
        <h2 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 16,
        fontWeight: 700,
        color: T.white,
        marginTop: 0
      }}>
          Escala de espaçamento — base 4px
        </h2>
        <p style={{
        fontSize: 13,
        color: T.mist,
        marginBottom: 32,
        lineHeight: 1.5
      }}>
          O Cortex usa uma grade base de <strong style={{
          color: T.white
        }}>4px</strong>. Todos os espaços de margin, padding, gap e dimensões de componentes são múltiplos de 4px (= 1 unidade Tailwind = 0.25rem).
        </p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          {steps.map(step => {
          const px = step * 4;
          return <div key={step} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16
          }}>
                <p style={{
              fontFamily: 'monospace',
              fontSize: 12,
              color: T.ash,
              margin: 0,
              width: 40,
              textAlign: 'right'
            }}>{step}</p>
                <div style={{
              width: px,
              height: 20,
              background: T.signal,
              borderRadius: 2,
              flexShrink: 0
            }} />
                <p style={{
              fontFamily: 'monospace',
              fontSize: 12,
              color: T.mist,
              margin: 0
            }}>{px}px</p>
                <p style={{
              fontSize: 12,
              color: T.ash,
              margin: 0
            }}>= {(px / 16).toFixed(4).replace(/\\.?0+$/, '')}rem</p>
              </div>;
        })}
        </div>
      </div>;
  },
  name: 'Escala base 4px'
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: T.ink,
    borderRadius: 12,
    padding: 32,
    maxWidth: 640
  }}>
      <h2 style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 700,
      color: T.white,
      marginTop: 0
    }}>
        Anatomia dos componentes
      </h2>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        {[{
        label: 'Button sm',
        h: 'h-8 (32px)',
        px: 'px-3 (12px)',
        gap: 'gap-1.5 (6px)'
      }, {
        label: 'Button md',
        h: 'h-9 (36px)',
        px: 'px-4 (16px)',
        gap: 'gap-2 (8px)'
      }, {
        label: 'Button lg',
        h: 'h-10 (40px)',
        px: 'px-5 (20px)',
        gap: 'gap-2 (8px)'
      }, {
        label: 'Input sm',
        h: 'h-8 (32px)',
        px: 'px-3 (12px)',
        gap: 'gap-2 (8px)'
      }, {
        label: 'Input md',
        h: 'h-9 (36px)',
        px: 'px-3 (12px)',
        gap: 'gap-2 (8px)'
      }, {
        label: 'Input lg',
        h: 'h-10 (40px)',
        px: 'px-4 (16px)',
        gap: 'gap-2 (8px)'
      }, {
        label: 'Card',
        h: 'p-5 (20px)',
        px: 'gap-4 (16px)',
        gap: 'rounded-lg'
      }, {
        label: 'Modal body',
        h: 'px-6 (24px)',
        px: 'py-4 (16px)',
        gap: 'gap-4 (16px)'
      }].map(({
        label,
        h,
        px,
        gap
      }) => <div key={label} style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 24,
        padding: '10px 0',
        borderBottom: \`1px solid \${T.steel}\`
      }}>
            <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: 13,
          color: T.white,
          margin: 0,
          width: 100
        }}>{label}</p>
            <div style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap'
        }}>
              {[h, px, gap].map(v => <span key={v} style={{
            fontFamily: 'monospace',
            fontSize: 12,
            color: T.mist,
            background: T.dusk,
            padding: '2px 8px',
            borderRadius: 4
          }}>{v}</span>)}
            </div>
          </div>)}
      </div>
    </div>,
  name: 'Anatomia dos componentes'
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: T.ink,
    borderRadius: 12,
    padding: 32,
    maxWidth: 640
  }}>
      <h2 style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: 16,
      fontWeight: 700,
      color: T.white,
      marginTop: 0
    }}>
        Gaps de layout recomendados
      </h2>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        {[{
        ctx: 'Dentro de um Form (entre campos)',
        gap: 'gap-4 (16px)'
      }, {
        ctx: 'Grupo de botões',
        gap: 'gap-2 (8px)'
      }, {
        ctx: 'Seções dentro de uma Card',
        gap: 'gap-3 (12px)'
      }, {
        ctx: 'Seções dentro de uma página',
        gap: 'gap-8 (32px)'
      }, {
        ctx: 'Seções principais (Organisms)',
        gap: 'gap-12 (48px)'
      }, {
        ctx: 'Padding da página (lateral)',
        gap: 'px-12 (48px)'
      }, {
        ctx: 'Padding de PageHeader',
        gap: 'py-7 (28px)'
      }, {
        ctx: 'Gap da Sidebar nav items',
        gap: 'gap-1 (4px)'
      }].map(({
        ctx,
        gap
      }) => <div key={ctx} style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: \`1px solid \${T.steel}\`
      }}>
            <p style={{
          fontSize: 13,
          color: T.mist,
          margin: 0
        }}>{ctx}</p>
            <span style={{
          fontFamily: 'monospace',
          fontSize: 12,
          color: T.signal,
          background: 'rgba(77,113,250,0.1)',
          padding: '3px 10px',
          borderRadius: 4
        }}>{gap}</span>
          </div>)}
      </div>
    </div>,
  name: 'Gaps de layout'
}`,...i.parameters?.docs?.source}}};const c=["EscalaBase","AnatomiaDosComponentes","LayoutGaps"];export{o as AnatomiaDosComponentes,t as EscalaBase,i as LayoutGaps,c as __namedExportsOrder,g as default};
