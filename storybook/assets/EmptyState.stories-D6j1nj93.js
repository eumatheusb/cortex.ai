import{j as e}from"./iframe-Sy2gFGJ3.js";import{E as s}from"./EmptyState-Dg6ioQxX.js";import{P as d}from"./plus-uf6RnP68.js";import{F as c}from"./file-text-CqIGGm1G.js";import{U as m}from"./users-B1LTeiEI.js";import{c as l}from"./createLucideIcon-D_RK-bSM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./Button-Cw3d5KgM.js";import"./index-CBH1vlMd.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./loader-circle-BvJOM1Fy.js";const n=[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],p=l("search-x",n),E={title:"Organisms/EmptyState",component:s,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>e.jsx("div",{className:"w-96 bg-dusk rounded-xl p-8",children:e.jsx(s,{icon:e.jsx(m,{size:32}),title:"Nenhum lead encontrado",description:"Adicione seu primeiro lead ou ajuste os filtros para ver resultados.",actions:[{label:"Adicionar lead",variant:"primary",icon:e.jsx(d,{size:16}),onClick:()=>{}}]})})},a={render:()=>e.jsx("div",{className:"w-96 bg-dusk rounded-xl p-8",children:e.jsx(s,{icon:e.jsx(p,{size:32}),title:"Sem resultados",description:"Nenhum resultado para 'Dr. João'. Tente outro termo.",size:"sm"})})},t={render:()=>e.jsx("div",{className:"w-96 bg-dusk rounded-xl p-8",children:e.jsx(s,{icon:e.jsx(c,{size:32}),title:"Nenhum relatório gerado",description:"Gere seu primeiro relatório de performance.",actions:[{label:"Gerar relatório",variant:"primary",icon:e.jsx(d,{size:16}),onClick:()=>{}},{label:"Ver exemplos",variant:"secondary",href:"#"}]})}),name:"Com múltiplos actions"},i={render:()=>e.jsx("div",{className:"flex flex-col gap-6 w-[500px]",children:["sm","md","lg"].map(r=>e.jsx("div",{className:"bg-dusk rounded-xl p-4 border border-steel",children:e.jsx(s,{icon:e.jsx(m,{size:r==="sm"?20:r==="md"?28:36}),title:`EmptyState ${r}`,description:"Exemplo de empty state.",size:r,actions:[{label:"Ação",onClick:()=>{}}]})},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-96 bg-dusk rounded-xl p-8">
      <EmptyState icon={<Users size={32} />} title="Nenhum lead encontrado" description="Adicione seu primeiro lead ou ajuste os filtros para ver resultados." actions={[{
      label: 'Adicionar lead',
      variant: 'primary',
      icon: <Plus size={16} />,
      onClick: () => {}
    }]} />
    </div>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-96 bg-dusk rounded-xl p-8">
      <EmptyState icon={<SearchX size={32} />} title="Sem resultados" description="Nenhum resultado para 'Dr. João'. Tente outro termo." size="sm" />
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-96 bg-dusk rounded-xl p-8">
      <EmptyState icon={<FileText size={32} />} title="Nenhum relatório gerado" description="Gere seu primeiro relatório de performance." actions={[{
      label: 'Gerar relatório',
      variant: 'primary',
      icon: <Plus size={16} />,
      onClick: () => {}
    }, {
      label: 'Ver exemplos',
      variant: 'secondary',
      href: '#'
    }]} />
    </div>,
  name: 'Com múltiplos actions'
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[500px]">
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="bg-dusk rounded-xl p-4 border border-steel">
          <EmptyState icon={<Users size={size === 'sm' ? 20 : size === 'md' ? 28 : 36} />} title={\`EmptyState \${size}\`} description="Exemplo de empty state." size={size} actions={[{
        label: 'Ação',
        onClick: () => {}
      }]} />
        </div>)}
    </div>
}`,...i.parameters?.docs?.source}}};const C=["Default","SemResultados","ComMultiplosActions","Tamanhos"];export{t as ComMultiplosActions,o as Default,a as SemResultados,i as Tamanhos,C as __namedExportsOrder,E as default};
