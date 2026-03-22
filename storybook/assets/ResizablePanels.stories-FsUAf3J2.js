import{j as e}from"./iframe-Sy2gFGJ3.js";import{R as l}from"./ResizablePanels-DR7JfrkP.js";import{L as d}from"./layout-dashboard-BOvEdERx.js";import{A as c}from"./arrow-right-left-CMgeO2H3.js";import{U as o}from"./users-B1LTeiEI.js";import{C as n}from"./calendar-BbE5IKxr.js";import{C as x}from"./chart-column-D_IDMIHe.js";import{C as p}from"./chevron-right-CVjuRCxC.js";import{P as h}from"./phone-0vPKg6sk.js";import{M as f}from"./mail-Dw-7_K0y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBH1vlMd.js";import"./utils-44l4s4mB.js";import"./createLucideIcon-D_RK-bSM.js";const D={title:"Molecules/ResizablePanels",component:l,parameters:{layout:"fullscreen"},tags:["autodocs"]},i={render:()=>e.jsx("div",{className:"h-[600px] bg-void",children:e.jsx(l,{direction:"horizontal",storageKey:"crm-layout",panels:[{id:"sidebar",defaultSize:20,minSize:15,maxSize:30,children:e.jsxs("div",{className:"h-full bg-ink border-r border-steel flex flex-col",children:[e.jsx("div",{className:"px-4 py-4 border-b border-steel",children:e.jsx("span",{className:"font-display font-bold text-white text-sm",children:"Cortex CRM"})}),e.jsx("nav",{className:"flex-1 p-3",children:e.jsx("ul",{className:"flex flex-col gap-1",children:[{icon:d,label:"Dashboard"},{icon:c,label:"Pipeline"},{icon:o,label:"Pacientes",active:!0},{icon:n,label:"Agenda"},{icon:x,label:"Relatorios"}].map(({icon:r,label:s,active:m})=>e.jsx("li",{children:e.jsxs("button",{className:`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${m?"bg-signal/10 text-white":"text-mist hover:bg-dusk hover:text-white"} transition-colors`,children:[e.jsx(r,{size:16}),s]})},s))})})]})},{id:"content",defaultSize:50,minSize:30,maxSize:70,children:e.jsxs("div",{className:"h-full bg-void flex flex-col",children:[e.jsxs("div",{className:"px-6 py-4 border-b border-steel",children:[e.jsx("h2",{className:"font-display font-semibold text-white",children:"Pacientes"}),e.jsx("p",{className:"text-xs text-mist mt-0.5",children:"247 pacientes cadastrados"})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:Array.from({length:10}).map((r,s)=>e.jsxs("div",{className:`flex items-center gap-3 px-6 py-3 border-b border-steel hover:bg-dusk/50 cursor-pointer transition-colors ${s===2?"bg-signal/5":""}`,children:[e.jsxs("div",{className:"h-9 w-9 rounded-full bg-signal/20 flex items-center justify-center text-signal text-xs font-medium shrink-0",children:["P",s+1]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("p",{className:"text-sm text-white truncate",children:["Paciente ",s+1]}),e.jsxs("p",{className:"text-xs text-mist",children:["Ultima consulta: ",15+s,"/03/2026"]})]}),e.jsx(p,{size:14,className:"text-ash"})]},s))})]})},{id:"detail",defaultSize:30,minSize:20,maxSize:45,children:e.jsxs("div",{className:"h-full bg-ink border-l border-steel flex flex-col",children:[e.jsx("div",{className:"px-6 py-4 border-b border-steel",children:e.jsx("h3",{className:"font-display font-semibold text-white text-sm",children:"Detalhes"})}),e.jsxs("div",{className:"flex-1 p-6",children:[e.jsxs("div",{className:"flex flex-col items-center text-center mb-6",children:[e.jsx("div",{className:"h-16 w-16 rounded-full bg-signal/20 flex items-center justify-center text-signal font-display font-semibold text-lg mb-3",children:"P3"}),e.jsx("p",{className:"font-medium text-white",children:"Paciente 3"}),e.jsx("p",{className:"text-xs text-mist mt-0.5",children:"Desde Jan 2025"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx(h,{size:14,className:"text-mist"}),e.jsx("span",{className:"text-mist",children:"(19) 99876-5432"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx(f,{size:14,className:"text-mist"}),e.jsx("span",{className:"text-mist",children:"paciente3@email.com"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx(n,{size:14,className:"text-mist"}),e.jsx("span",{className:"text-mist",children:"Proxima: 28/03/2026"})]})]})]})]})}]})}),name:"Layout CRM (3 paineis)"},t={render:()=>e.jsx("div",{className:"h-[500px] w-full max-w-2xl mx-auto bg-void",children:e.jsx(l,{direction:"vertical",panels:[{id:"editor",defaultSize:60,minSize:30,maxSize:80,children:e.jsxs("div",{className:"h-full bg-ink p-6 border-b border-steel",children:[e.jsx("p",{className:"text-sm text-white font-medium mb-2",children:"Editor"}),e.jsx("p",{className:"text-sm text-mist",children:"Arraste o handle abaixo para redimensionar os paineis."})]})},{id:"terminal",defaultSize:40,minSize:20,maxSize:70,children:e.jsxs("div",{className:"h-full bg-void p-6",children:[e.jsx("p",{className:"text-sm text-white font-medium mb-2",children:"Terminal"}),e.jsxs("div",{className:"font-mono text-xs text-mist space-y-1",children:[e.jsx("p",{children:"$ npm run dev"}),e.jsx("p",{className:"text-success",children:"Ready on http://localhost:3000"})]})]})}]})}),name:"Paineis verticais"},a={render:()=>e.jsx("div",{className:"h-[400px] bg-void",children:e.jsx(l,{direction:"horizontal",panels:[{id:"left",defaultSize:50,minSize:25,maxSize:75,children:e.jsx("div",{className:"h-full bg-ink p-6 flex items-center justify-center",children:e.jsx("p",{className:"text-sm text-mist",children:"Painel esquerdo"})})},{id:"right",defaultSize:50,minSize:25,maxSize:75,children:e.jsx("div",{className:"h-full bg-void p-6 flex items-center justify-center",children:e.jsx("p",{className:"text-sm text-mist",children:"Painel direito"})})}]})}),name:"Dois paineis simples"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="h-[600px] bg-void">
      <ResizablePanels direction="horizontal" storageKey="crm-layout" panels={[{
      id: 'sidebar',
      defaultSize: 20,
      minSize: 15,
      maxSize: 30,
      children: <div className="h-full bg-ink border-r border-steel flex flex-col">
                <div className="px-4 py-4 border-b border-steel">
                  <span className="font-display font-bold text-white text-sm">Cortex CRM</span>
                </div>
                <nav className="flex-1 p-3">
                  <ul className="flex flex-col gap-1">
                    {[{
              icon: LayoutDashboard,
              label: 'Dashboard'
            }, {
              icon: ArrowRightLeft,
              label: 'Pipeline'
            }, {
              icon: Users,
              label: 'Pacientes',
              active: true
            }, {
              icon: Calendar,
              label: 'Agenda'
            }, {
              icon: BarChart3,
              label: 'Relatorios'
            }].map(({
              icon: Icon,
              label,
              active
            }) => <li key={label}>
                        <button className={\`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm \${active ? 'bg-signal/10 text-white' : 'text-mist hover:bg-dusk hover:text-white'} transition-colors\`}>
                          <Icon size={16} />
                          {label}
                        </button>
                      </li>)}
                  </ul>
                </nav>
              </div>
    }, {
      id: 'content',
      defaultSize: 50,
      minSize: 30,
      maxSize: 70,
      children: <div className="h-full bg-void flex flex-col">
                <div className="px-6 py-4 border-b border-steel">
                  <h2 className="font-display font-semibold text-white">Pacientes</h2>
                  <p className="text-xs text-mist mt-0.5">247 pacientes cadastrados</p>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {Array.from({
            length: 10
          }).map((_, i) => <div key={i} className={\`flex items-center gap-3 px-6 py-3 border-b border-steel hover:bg-dusk/50 cursor-pointer transition-colors \${i === 2 ? 'bg-signal/5' : ''}\`}>
                      <div className="h-9 w-9 rounded-full bg-signal/20 flex items-center justify-center text-signal text-xs font-medium shrink-0">
                        P{i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white truncate">Paciente {i + 1}</p>
                        <p className="text-xs text-mist">Ultima consulta: {15 + i}/03/2026</p>
                      </div>
                      <ChevronRight size={14} className="text-ash" />
                    </div>)}
                </div>
              </div>
    }, {
      id: 'detail',
      defaultSize: 30,
      minSize: 20,
      maxSize: 45,
      children: <div className="h-full bg-ink border-l border-steel flex flex-col">
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
    }]} />
    </div>,
  name: 'Layout CRM (3 paineis)'
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="h-[500px] w-full max-w-2xl mx-auto bg-void">
      <ResizablePanels direction="vertical" panels={[{
      id: 'editor',
      defaultSize: 60,
      minSize: 30,
      maxSize: 80,
      children: <div className="h-full bg-ink p-6 border-b border-steel">
                <p className="text-sm text-white font-medium mb-2">Editor</p>
                <p className="text-sm text-mist">Arraste o handle abaixo para redimensionar os paineis.</p>
              </div>
    }, {
      id: 'terminal',
      defaultSize: 40,
      minSize: 20,
      maxSize: 70,
      children: <div className="h-full bg-void p-6">
                <p className="text-sm text-white font-medium mb-2">Terminal</p>
                <div className="font-mono text-xs text-mist space-y-1">
                  <p>$ npm run dev</p>
                  <p className="text-success">Ready on http://localhost:3000</p>
                </div>
              </div>
    }]} />
    </div>,
  name: 'Paineis verticais'
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="h-[400px] bg-void">
      <ResizablePanels direction="horizontal" panels={[{
      id: 'left',
      defaultSize: 50,
      minSize: 25,
      maxSize: 75,
      children: <div className="h-full bg-ink p-6 flex items-center justify-center">
                <p className="text-sm text-mist">Painel esquerdo</p>
              </div>
    }, {
      id: 'right',
      defaultSize: 50,
      minSize: 25,
      maxSize: 75,
      children: <div className="h-full bg-void p-6 flex items-center justify-center">
                <p className="text-sm text-mist">Painel direito</p>
              </div>
    }]} />
    </div>,
  name: 'Dois paineis simples'
}`,...a.parameters?.docs?.source}}};const M=["LayoutCRM","PaineisVerticais","DoisPaineis"];export{a as DoisPaineis,i as LayoutCRM,t as PaineisVerticais,M as __namedExportsOrder,D as default};
