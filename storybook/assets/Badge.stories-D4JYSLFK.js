import{j as a}from"./iframe-Sy2gFGJ3.js";import{B as r}from"./Badge-X57OZ0QY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBH1vlMd.js";import"./utils-44l4s4mB.js";const m={title:"Atoms/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"]},e={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-3",children:[a.jsx(r,{variant:"default",children:"Default"}),a.jsx(r,{variant:"primary",children:"Primary"}),a.jsx(r,{variant:"success",children:"Success"}),a.jsx(r,{variant:"warning",children:"Warning"}),a.jsx(r,{variant:"error",children:"Error"}),a.jsx(r,{variant:"info",children:"Info"}),a.jsx(r,{variant:"ghost",children:"Ghost"})]})},n={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-3",children:[a.jsx(r,{variant:"primary",dot:!0,children:"Ativo"}),a.jsx(r,{variant:"success",dot:!0,children:"Online"}),a.jsx(r,{variant:"warning",dot:!0,children:"Pendente"}),a.jsx(r,{variant:"error",dot:!0,children:"Offline"})]})},s={render:()=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(r,{variant:"primary",size:"sm",children:"Small"}),a.jsx(r,{variant:"primary",size:"md",children:"Medium"}),a.jsx(r,{variant:"primary",size:"lg",children:"Large"})]})},i={render:()=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(r,{variant:"primary",count:5,children:"Notificações"}),a.jsx(r,{variant:"error",count:99,children:"Alertas"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <Badge variant="primary" dot>Ativo</Badge>
      <Badge variant="success" dot>Online</Badge>
      <Badge variant="warning" dot>Pendente</Badge>
      <Badge variant="error" dot>Offline</Badge>
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Badge variant="primary" size="sm">Small</Badge>
      <Badge variant="primary" size="md">Medium</Badge>
      <Badge variant="primary" size="lg">Large</Badge>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Badge variant="primary" count={5}>Notificações</Badge>
      <Badge variant="error" count={99}>Alertas</Badge>
    </div>
}`,...i.parameters?.docs?.source}}};const g=["AllVariants","WithDot","Sizes","WithCount"];export{e as AllVariants,s as Sizes,i as WithCount,n as WithDot,g as __namedExportsOrder,m as default};
