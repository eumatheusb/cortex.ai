import{j as e}from"./iframe-Sy2gFGJ3.js";import{S as c,a as o,b as s,c as n,d as t,e as i,f as m,g as S}from"./Select-D4U7xN8E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-oOhmCGhA.js";import"./index-BdQq_4o_.js";import"./index-DvBiN_jY.js";import"./index-rfoyWmEq.js";import"./index-BmPT29Bj.js";import"./index-D6MEHyiY.js";import"./index-C-FDDq2f.js";import"./Combination-hEgrkgqT.js";import"./index-DtrQf-Nc.js";import"./index-Bl9tSzGv.js";import"./index-iJKTUraZ.js";import"./index-B90I_nem.js";import"./index-hCnxOtR-.js";import"./index-CuGgj0mu.js";import"./utils-44l4s4mB.js";import"./chevron-down-blV75o58.js";import"./createLucideIcon-D_RK-bSM.js";import"./check-C92KmPKj.js";const M={title:"Atoms/Select",parameters:{layout:"centered"},tags:["autodocs"]},l={render:()=>e.jsxs(c,{children:[e.jsx(o,{className:"w-[240px]",children:e.jsx(s,{placeholder:"Selecione um status"})}),e.jsxs(n,{children:[e.jsx(t,{value:"novo",children:"Novo"}),e.jsx(t,{value:"qualificado",children:"Qualificado"}),e.jsx(t,{value:"proposta",children:"Proposta"}),e.jsx(t,{value:"fechado",children:"Fechado"})]})]})},a={render:()=>e.jsxs(c,{children:[e.jsx(o,{className:"w-[240px]",children:e.jsx(s,{placeholder:"Selecione uma clínica"})}),e.jsxs(n,{children:[e.jsxs(i,{children:[e.jsx(m,{children:"São Paulo"}),e.jsx(t,{value:"sp1",children:"OdontoVida SP"}),e.jsx(t,{value:"sp2",children:"Sorriso Total"})]}),e.jsx(S,{}),e.jsxs(i,{children:[e.jsx(m,{children:"Minas Gerais"}),e.jsx(t,{value:"mg1",children:"DenteSã MG"}),e.jsx(t,{value:"mg2",children:"Clínica Bella"})]})]})]})},r={render:()=>e.jsxs(c,{disabled:!0,children:[e.jsx(o,{className:"w-[240px]",children:e.jsx(s,{placeholder:"Campo desabilitado"})}),e.jsx(n,{children:e.jsx(t,{value:"a",children:"Opção A"})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Selecione um status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="novo">Novo</SelectItem>
        <SelectItem value="qualificado">Qualificado</SelectItem>
        <SelectItem value="proposta">Proposta</SelectItem>
        <SelectItem value="fechado">Fechado</SelectItem>
      </SelectContent>
    </Select>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Selecione uma clínica" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>São Paulo</SelectLabel>
          <SelectItem value="sp1">OdontoVida SP</SelectItem>
          <SelectItem value="sp2">Sorriso Total</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Minas Gerais</SelectLabel>
          <SelectItem value="mg1">DenteSã MG</SelectItem>
          <SelectItem value="mg2">Clínica Bella</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Select disabled>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Campo desabilitado" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Opção A</SelectItem>
      </SelectContent>
    </Select>
}`,...r.parameters?.docs?.source}}};const A=["Default","WithGroups","Disabled"];export{l as Default,r as Disabled,a as WithGroups,A as __namedExportsOrder,M as default};
