import{j as e}from"./iframe-Sy2gFGJ3.js";import{S as t}from"./Switch-BgoFKEcw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-hCnxOtR-.js";import"./index-iJKTUraZ.js";import"./utils-44l4s4mB.js";const g={title:"Atoms/Switch",component:t,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{label:"Ativar notificações"}},r={args:{label:"Modo escuro",defaultChecked:!0}},s={args:{label:"Opção desabilitada",disabled:!0}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{size:"sm",label:"Small"}),e.jsx(t,{size:"md",label:"Medium (padrão)"}),e.jsx(t,{size:"lg",label:"Large"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ativar notificações'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Modo escuro',
    defaultChecked: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Opção desabilitada',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium (padrão)" />
      <Switch size="lg" label="Large" />
    </div>
}`,...o.parameters?.docs?.source}}};const S=["Default","Checked","Disabled","Sizes"];export{r as Checked,a as Default,s as Disabled,o as Sizes,S as __namedExportsOrder,g as default};
