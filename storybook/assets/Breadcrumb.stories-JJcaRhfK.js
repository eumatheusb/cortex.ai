import{j as e}from"./iframe-Sy2gFGJ3.js";import{B as a}from"./Breadcrumb-Bry6prGf.js";import{L as t}from"./layout-dashboard-BOvEdERx.js";import{U as i}from"./users-B1LTeiEI.js";import{F as c}from"./file-text-CqIGGm1G.js";import{S as n}from"./settings-DfLQBH76.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./createLucideIcon-D_RK-bSM.js";import"./chevron-right-CVjuRCxC.js";const j={title:"Molecules/Breadcrumb",component:a,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{items:[{label:"CRM"},{label:"Leads"}]}),e.jsx(a,{items:[{label:"CRM"},{label:"Leads"},{label:"Dra. Camila Rocha"}]}),e.jsx(a,{items:[{label:"Configurações"},{label:"Integrações"},{label:"Meta Ads"}]})]})},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{showHome:!0,items:[{label:"CRM"},{label:"Leads"}]}),e.jsx(a,{showHome:!0,items:[{label:"Relatórios"},{label:"Performance"},{label:"Março 2026"}]}),e.jsx(a,{showHome:!0,items:[{label:"Configurações"},{label:"Integrações"}]})]}),name:"Com ícone Home"},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{showHome:!0,items:[{label:"CRM",href:"#crm"},{label:"Leads",href:"#leads"},{label:"Dra. Camila Rocha"}]}),e.jsx(a,{items:[{label:"Dashboard",href:"#dashboard"},{label:"Relatórios",href:"#relatorios"},{label:"Desempenho por clínica",href:"#desempenho"},{label:"OdontoVida SP"}]})]}),name:"Com hrefs navegáveis"},o={render:()=>e.jsx(a,{showHome:!0,items:[{label:"Dashboard",href:"#",icon:e.jsx(t,{size:13})},{label:"CRM",href:"#",icon:e.jsx(i,{size:13})},{label:"Relatórios",href:"#",icon:e.jsx(c,{size:13})},{label:"Configurações",icon:e.jsx(n,{size:13})}]}),name:"Com ícones por item"},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{separator:e.jsx("span",{className:"text-ash text-xs",children:"/"}),items:[{label:"CRM",href:"#"},{label:"Leads",href:"#"},{label:"Dra. Camila"}]}),e.jsx(a,{separator:e.jsx("span",{className:"text-ash text-xs",children:"·"}),items:[{label:"CRM",href:"#"},{label:"Leads",href:"#"},{label:"Dra. Camila"}]})]}),name:"Separador customizado"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Breadcrumb items={[{
      label: 'CRM'
    }, {
      label: 'Leads'
    }]} />
      <Breadcrumb items={[{
      label: 'CRM'
    }, {
      label: 'Leads'
    }, {
      label: 'Dra. Camila Rocha'
    }]} />
      <Breadcrumb items={[{
      label: 'Configurações'
    }, {
      label: 'Integrações'
    }, {
      label: 'Meta Ads'
    }]} />
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Breadcrumb showHome items={[{
      label: 'CRM'
    }, {
      label: 'Leads'
    }]} />
      <Breadcrumb showHome items={[{
      label: 'Relatórios'
    }, {
      label: 'Performance'
    }, {
      label: 'Março 2026'
    }]} />
      <Breadcrumb showHome items={[{
      label: 'Configurações'
    }, {
      label: 'Integrações'
    }]} />
    </div>,
  name: 'Com ícone Home'
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Breadcrumb showHome items={[{
      label: 'CRM',
      href: '#crm'
    }, {
      label: 'Leads',
      href: '#leads'
    }, {
      label: 'Dra. Camila Rocha'
    }]} />
      <Breadcrumb items={[{
      label: 'Dashboard',
      href: '#dashboard'
    }, {
      label: 'Relatórios',
      href: '#relatorios'
    }, {
      label: 'Desempenho por clínica',
      href: '#desempenho'
    }, {
      label: 'OdontoVida SP'
    }]} />
    </div>,
  name: 'Com hrefs navegáveis'
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb showHome items={[{
    label: 'Dashboard',
    href: '#',
    icon: <LayoutDashboard size={13} />
  }, {
    label: 'CRM',
    href: '#',
    icon: <Users size={13} />
  }, {
    label: 'Relatórios',
    href: '#',
    icon: <FileText size={13} />
  }, {
    label: 'Configurações',
    icon: <Settings size={13} />
  }]} />,
  name: 'Com ícones por item'
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Breadcrumb separator={<span className="text-ash text-xs">/</span>} items={[{
      label: 'CRM',
      href: '#'
    }, {
      label: 'Leads',
      href: '#'
    }, {
      label: 'Dra. Camila'
    }]} />
      <Breadcrumb separator={<span className="text-ash text-xs">·</span>} items={[{
      label: 'CRM',
      href: '#'
    }, {
      label: 'Leads',
      href: '#'
    }, {
      label: 'Dra. Camila'
    }]} />
    </div>,
  name: 'Separador customizado'
}`,...m.parameters?.docs?.source}}};const M=["Default","ComHome","ComLinks","ComIcones","SeparadorCustom"];export{r as ComHome,o as ComIcones,l as ComLinks,s as Default,m as SeparadorCustom,M as __namedExportsOrder,j as default};
