import{j as e}from"./iframe-Sy2gFGJ3.js";import{C as s,P as a}from"./Progress-vGMXjw87.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";const u={title:"Atoms/Progress",parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-[400px]",children:[e.jsx(a,{value:75,label:"Leads convertidos",showValue:!0}),e.jsx(a,{value:45,variant:"success",label:"Meta atingida",showValue:!0}),e.jsx(a,{value:80,variant:"warning",label:"Limite de uso",showValue:!0}),e.jsx(a,{value:30,variant:"error",label:"Taxa de cancelamento",showValue:!0})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-[400px]",children:[e.jsx(a,{value:60,size:"sm"}),e.jsx(a,{value:60,size:"md"}),e.jsx(a,{value:60,size:"lg"})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{value:72,size:"sm"}),e.jsx(s,{value:45,size:"md",variant:"success"}),e.jsx(s,{value:88,size:"lg",variant:"warning"}),e.jsx(s,{value:30,size:"xl",variant:"error"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-[400px]">
      <Progress value={75} label="Leads convertidos" showValue />
      <Progress value={45} variant="success" label="Meta atingida" showValue />
      <Progress value={80} variant="warning" label="Limite de uso" showValue />
      <Progress value={30} variant="error" label="Taxa de cancelamento" showValue />
    </div>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-[400px]">
      <Progress value={60} size="sm" />
      <Progress value={60} size="md" />
      <Progress value={60} size="lg" />
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <CircularProgress value={72} size="sm" />
      <CircularProgress value={45} size="md" variant="success" />
      <CircularProgress value={88} size="lg" variant="warning" />
      <CircularProgress value={30} size="xl" variant="error" />
    </div>
}`,...i.parameters?.docs?.source}}};const d=["Linear","Sizes","Circular"];export{i as Circular,r as Linear,l as Sizes,d as __namedExportsOrder,u as default};
