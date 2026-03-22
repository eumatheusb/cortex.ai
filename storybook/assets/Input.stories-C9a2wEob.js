import{j as e}from"./iframe-Sy2gFGJ3.js";import{I as s}from"./Input-_vBWQZEw.js";import{S as l}from"./search-BFJJvwjI.js";import{M as o}from"./mail-Dw-7_K0y.js";import{L as t}from"./lock-BtVyTJ4E.js";import{P as d}from"./phone-0vPKg6sk.js";import{B as p}from"./building-2-CBdJemfA.js";import{D as m}from"./dollar-sign-CR9WNfou.js";import{E as u}from"./eye-BuUHAGBg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBH1vlMd.js";import"./utils-44l4s4mB.js";import"./createLucideIcon-D_RK-bSM.js";const E={title:"Atoms/Input",component:s,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(s,{placeholder:"Digite algo..."}),e.jsx(s,{placeholder:"Com ícone esquerdo",leftIcon:e.jsx(o,{size:15})}),e.jsx(s,{placeholder:"Pesquisar...",leftIcon:e.jsx(l,{size:15})}),e.jsx(s,{type:"password",placeholder:"Senha",leftIcon:e.jsx(t,{size:15}),rightIcon:e.jsx(u,{size:15})})]})},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(s,{size:"sm",placeholder:"Small (sm)",leftIcon:e.jsx(l,{size:13})}),e.jsx(s,{size:"md",placeholder:"Medium (md) — padrão",leftIcon:e.jsx(l,{size:15})}),e.jsx(s,{size:"lg",placeholder:"Large (lg)",leftIcon:e.jsx(l,{size:17})})]})},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(s,{placeholder:"Padrão"}),e.jsx(s,{placeholder:"Hover / Focus",leftIcon:e.jsx(o,{size:15})}),e.jsx(s,{placeholder:"Com erro",state:"error",hint:"E-mail inválido",leftIcon:e.jsx(o,{size:15})}),e.jsx(s,{placeholder:"Com sucesso",state:"success",hint:"E-mail verificado",leftIcon:e.jsx(o,{size:15})}),e.jsx(s,{placeholder:"Desabilitado",disabled:!0,leftIcon:e.jsx(o,{size:15})}),e.jsx(s,{placeholder:"Somente leitura",readOnly:!0,value:"dr.rodrigo@sorriso.com",leftIcon:e.jsx(o,{size:15})})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(s,{label:"E-mail",placeholder:"voce@clinica.com",leftIcon:e.jsx(o,{size:15})}),e.jsx(s,{label:"Senha",type:"password",placeholder:"••••••••",leftIcon:e.jsx(t,{size:15})}),e.jsx(s,{label:"Telefone",placeholder:"(11) 99999-9999",leftIcon:e.jsx(d,{size:15}),hint:"Com DDD"}),e.jsx(s,{label:"Nome da clínica",placeholder:"Sorriso Total",leftIcon:e.jsx(p,{size:15}),required:!0}),e.jsx(s,{label:"Ticket médio",placeholder:"0,00",leftIcon:e.jsx(m,{size:15}),error:"Valor obrigatório."})]}),name:"Com label e hints"},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-3 w-80",children:[e.jsx(s,{size:"sm",placeholder:"Buscar leads...",leftIcon:e.jsx(l,{size:13})}),e.jsx(s,{size:"md",placeholder:"Buscar por nome ou clínica...",leftIcon:e.jsx(l,{size:15})}),e.jsx(s,{size:"lg",placeholder:"Pesquisa avançada...",leftIcon:e.jsx(l,{size:17})})]}),name:"Campos de busca"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input placeholder="Digite algo..." />
      <Input placeholder="Com ícone esquerdo" leftIcon={<Mail size={15} />} />
      <Input placeholder="Pesquisar..." leftIcon={<Search size={15} />} />
      <Input type="password" placeholder="Senha" leftIcon={<Lock size={15} />} rightIcon={<Eye size={15} />} />
    </div>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input size="sm" placeholder="Small (sm)" leftIcon={<Search size={13} />} />
      <Input size="md" placeholder="Medium (md) — padrão" leftIcon={<Search size={15} />} />
      <Input size="lg" placeholder="Large (lg)" leftIcon={<Search size={17} />} />
    </div>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input placeholder="Padrão" />
      <Input placeholder="Hover / Focus" leftIcon={<Mail size={15} />} />
      <Input placeholder="Com erro" state="error" hint="E-mail inválido" leftIcon={<Mail size={15} />} />
      <Input placeholder="Com sucesso" state="success" hint="E-mail verificado" leftIcon={<Mail size={15} />} />
      <Input placeholder="Desabilitado" disabled leftIcon={<Mail size={15} />} />
      <Input placeholder="Somente leitura" readOnly value="dr.rodrigo@sorriso.com" leftIcon={<Mail size={15} />} />
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input label="E-mail" placeholder="voce@clinica.com" leftIcon={<Mail size={15} />} />
      <Input label="Senha" type="password" placeholder="••••••••" leftIcon={<Lock size={15} />} />
      <Input label="Telefone" placeholder="(11) 99999-9999" leftIcon={<Phone size={15} />} hint="Com DDD" />
      <Input label="Nome da clínica" placeholder="Sorriso Total" leftIcon={<Building2 size={15} />} required />
      <Input label="Ticket médio" placeholder="0,00" leftIcon={<DollarSign size={15} />} error="Valor obrigatório." />
    </div>,
  name: 'Com label e hints'
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3 w-80">
      <Input size="sm" placeholder="Buscar leads..." leftIcon={<Search size={13} />} />
      <Input size="md" placeholder="Buscar por nome ou clínica..." leftIcon={<Search size={15} />} />
      <Input size="lg" placeholder="Pesquisa avançada..." leftIcon={<Search size={17} />} />
    </div>,
  name: 'Campos de busca'
}`,...n.parameters?.docs?.source}}};const N=["Default","Tamanhos","Estados","ComLabel","Busca"];export{n as Busca,i as ComLabel,a as Default,c as Estados,r as Tamanhos,N as __namedExportsOrder,E as default};
