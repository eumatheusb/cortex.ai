import{j as e}from"./iframe-Sy2gFGJ3.js";import{L as r}from"./Label-4IHVqqo0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./utils-44l4s4mB.js";const d={title:"Atoms/Label",parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>e.jsx(r,{children:"Nome completo"})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{children:"Padrão"}),e.jsx(r,{required:!0,children:"Obrigatório"}),e.jsx(r,{optional:!0,children:"Opcional"}),e.jsx(r,{hint:"Será usado para login e notificações.",children:"Com hint"}),e.jsx(r,{required:!0,hint:"Insira o CPF sem pontos ou traços.",children:"Com hint e obrigatório"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Label>Nome completo</Label>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Label>Padrão</Label>
      <Label required>Obrigatório</Label>
      <Label optional>Opcional</Label>
      <Label hint="Será usado para login e notificações.">Com hint</Label>
      <Label required hint="Insira o CPF sem pontos ou traços.">Com hint e obrigatório</Label>
    </div>
}`,...o.parameters?.docs?.source}}};const m=["Default","Variantes"];export{a as Default,o as Variantes,m as __namedExportsOrder,d as default};
