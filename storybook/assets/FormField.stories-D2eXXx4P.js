import{j as e}from"./iframe-Sy2gFGJ3.js";import{F as c,a as o}from"./FormField-CiQooiKX.js";import{M as i}from"./mail-Dw-7_K0y.js";import{B as s}from"./building-2-CBdJemfA.js";import{P as d}from"./phone-0vPKg6sk.js";import"./preload-helper-PPVm8Dsz.js";import"./Label-4IHVqqo0.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./utils-44l4s4mB.js";import"./Input-_vBWQZEw.js";import"./index-CBH1vlMd.js";import"./createLucideIcon-D_RK-bSM.js";const C={title:"Molecules/FormField",parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-[360px]",children:[e.jsx(o,{label:"Nome completo",placeholder:"Dr. Fulano de Tal"}),e.jsx(o,{label:"E-mail",placeholder:"doutor@clinica.com",leftIcon:e.jsx(i,{size:15}),required:!0}),e.jsx(o,{label:"Telefone",placeholder:"(11) 99999-9999",leftIcon:e.jsx(d,{size:15}),hint:"Com DDD"}),e.jsx(o,{label:"Clínica",placeholder:"Nome da clínica",leftIcon:e.jsx(s,{size:15}),error:"Campo obrigatório."})]})},a={render:()=>e.jsx("div",{className:"w-[420px]",children:e.jsxs(c,{title:"Dados do lead",description:"Preencha as informações básicas para cadastrar um novo lead no CRM.",children:[e.jsx(o,{label:"Nome",placeholder:"Dr. Rodrigo Lima",required:!0}),e.jsx(o,{label:"E-mail",placeholder:"rodrigo@sorriso.com",leftIcon:e.jsx(i,{size:15})}),e.jsx(o,{label:"Clínica",placeholder:"Sorriso Total",leftIcon:e.jsx(s,{size:15}),optional:!0})]})}),name:"Com FormSection"},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-[360px]",children:[e.jsx(o,{label:"Padrão",placeholder:"Digite aqui..."}),e.jsx(o,{label:"Com dica",placeholder:"Digite aqui...",hint:"Máximo de 50 caracteres"}),e.jsx(o,{label:"Com erro",placeholder:"Digite aqui...",error:"Este campo é obrigatório."}),e.jsx(o,{label:"Desabilitado",placeholder:"Sem edição",disabled:!0})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-[360px]">
      <FormField label="Nome completo" placeholder="Dr. Fulano de Tal" />
      <FormField label="E-mail" placeholder="doutor@clinica.com" leftIcon={<Mail size={15} />} required />
      <FormField label="Telefone" placeholder="(11) 99999-9999" leftIcon={<Phone size={15} />} hint="Com DDD" />
      <FormField label="Clínica" placeholder="Nome da clínica" leftIcon={<Building2 size={15} />} error="Campo obrigatório." />
    </div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[420px]">
      <FormSection title="Dados do lead" description="Preencha as informações básicas para cadastrar um novo lead no CRM.">
        <FormField label="Nome" placeholder="Dr. Rodrigo Lima" required />
        <FormField label="E-mail" placeholder="rodrigo@sorriso.com" leftIcon={<Mail size={15} />} />
        <FormField label="Clínica" placeholder="Sorriso Total" leftIcon={<Building2 size={15} />} optional />
      </FormSection>
    </div>,
  name: 'Com FormSection'
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-[360px]">
      <FormField label="Padrão" placeholder="Digite aqui..." />
      <FormField label="Com dica" placeholder="Digite aqui..." hint="Máximo de 50 caracteres" />
      <FormField label="Com erro" placeholder="Digite aqui..." error="Este campo é obrigatório." />
      <FormField label="Desabilitado" placeholder="Sem edição" disabled />
    </div>
}`,...l.parameters?.docs?.source}}};const S=["Default","ComSecao","Estados"];export{a as ComSecao,r as Default,l as Estados,S as __namedExportsOrder,C as default};
