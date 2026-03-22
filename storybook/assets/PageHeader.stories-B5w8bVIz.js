import{j as e}from"./iframe-Sy2gFGJ3.js";import{P as s}from"./PageHeader-CBRcqjtT.js";import{B as o}from"./Button-Cw3d5KgM.js";import{D as t}from"./download-BCpghMP0.js";import{P as i}from"./plus-uf6RnP68.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./Breadcrumb-Bry6prGf.js";import"./createLucideIcon-D_RK-bSM.js";import"./chevron-right-CVjuRCxC.js";import"./Badge-X57OZ0QY.js";import"./index-CBH1vlMd.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./loader-circle-BvJOM1Fy.js";const N={title:"Organisms/PageHeader",component:s,parameters:{layout:"padded"},tags:["autodocs"]},a={render:()=>e.jsx("div",{className:"bg-void p-6 rounded-xl",children:e.jsx(s,{title:"Leads",description:"Gerencie todos os leads da sua carteira.",badge:"284 ativos",breadcrumbs:[{label:"CRM"},{label:"Leads"}],actions:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{variant:"secondary",leftIcon:e.jsx(t,{size:15}),children:"Exportar"}),e.jsx(o,{variant:"primary",leftIcon:e.jsx(i,{size:15}),children:"Novo lead"})]})})})},r={render:()=>e.jsx("div",{className:"bg-void p-6 rounded-xl",children:e.jsx(s,{title:"Dashboard",description:"Visão geral de performance da sua clínica.",badge:"Ao vivo",badgeVariant:"success",actions:e.jsx(o,{variant:"primary",children:"Ver relatório"})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-void p-6 rounded-xl">
      <PageHeader title="Leads" description="Gerencie todos os leads da sua carteira." badge="284 ativos" breadcrumbs={[{
      label: 'CRM'
    }, {
      label: 'Leads'
    }]} actions={<div className="flex gap-2">
            <Button variant="secondary" leftIcon={<Download size={15} />}>Exportar</Button>
            <Button variant="primary" leftIcon={<Plus size={15} />}>Novo lead</Button>
          </div>} />
    </div>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-void p-6 rounded-xl">
      <PageHeader title="Dashboard" description="Visão geral de performance da sua clínica." badge="Ao vivo" badgeVariant="success" actions={<Button variant="primary">Ver relatório</Button>} />
    </div>
}`,...r.parameters?.docs?.source}}};const P=["Default","Live"];export{a as Default,r as Live,P as __namedExportsOrder,N as default};
