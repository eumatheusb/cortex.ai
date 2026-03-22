import{j as e}from"./iframe-Sy2gFGJ3.js";import{T as o}from"./Tooltip-MfjyU_4n.js";import{B as t}from"./Button-Cw3d5KgM.js";import{B as a}from"./Badge-X57OZ0QY.js";import{T as c}from"./triangle-alert-U_wi5efy.js";import{I as l}from"./info-Uxv0kkki.js";import{c as d}from"./createLucideIcon-D_RK-bSM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-D6MEHyiY.js";import"./index-C-FDDq2f.js";import"./index-DtrQf-Nc.js";import"./index-Bl9tSzGv.js";import"./index-iJKTUraZ.js";import"./index-B90I_nem.js";import"./index-DT1ZH9rQ.js";import"./index-CuGgj0mu.js";import"./utils-44l4s4mB.js";import"./index-CBH1vlMd.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./loader-circle-BvJOM1Fy.js";const p=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],m=d("circle-question-mark",p),M={title:"Atoms/Tooltip",parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsx(o,{content:"Clique para ver os detalhes do lead",children:e.jsx(t,{variant:"secondary",children:"Hover aqui"})})},r={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 place-items-center p-8",children:[e.jsx(o,{content:"Tooltip no topo",side:"top",children:e.jsx(t,{variant:"outline",size:"sm",children:"top"})}),e.jsx(o,{content:"Tooltip à direita",side:"right",children:e.jsx(t,{variant:"outline",size:"sm",children:"right"})}),e.jsx(o,{content:"Tooltip embaixo",side:"bottom",children:e.jsx(t,{variant:"outline",size:"sm",children:"bottom"})}),e.jsx(o,{content:"Tooltip à esquerda",side:"left",children:e.jsx(t,{variant:"outline",size:"sm",children:"left"})})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(o,{content:"Esta ação não pode ser desfeita.",children:e.jsx(c,{size:18,className:"text-warning cursor-help"})}),e.jsx(o,{content:"Score calculado com base nas interações dos últimos 30 dias.",children:e.jsx(l,{size:18,className:"text-mist cursor-help"})}),e.jsx(o,{content:"Leads qualificados têm score acima de 70.",children:e.jsx(m,{size:18,className:"text-mist cursor-help"})})]})},n={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(o,{content:"12 leads aguardando qualificação",children:e.jsx(a,{variant:"warning",children:"12 pendentes"})}),e.jsx(o,{content:"6 leads convertidos este mês",children:e.jsx(a,{variant:"success",dot:!0,children:"Convertidos"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="Clique para ver os detalhes do lead">
      <Button variant="secondary">Hover aqui</Button>
    </Tooltip>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6 place-items-center p-8">
      <Tooltip content="Tooltip no topo" side="top">
        <Button variant="outline" size="sm">top</Button>
      </Tooltip>
      <Tooltip content="Tooltip à direita" side="right">
        <Button variant="outline" size="sm">right</Button>
      </Tooltip>
      <Tooltip content="Tooltip embaixo" side="bottom">
        <Button variant="outline" size="sm">bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip à esquerda" side="left">
        <Button variant="outline" size="sm">left</Button>
      </Tooltip>
    </div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <Tooltip content="Esta ação não pode ser desfeita.">
        <AlertTriangle size={18} className="text-warning cursor-help" />
      </Tooltip>
      <Tooltip content="Score calculado com base nas interações dos últimos 30 dias.">
        <Info size={18} className="text-mist cursor-help" />
      </Tooltip>
      <Tooltip content="Leads qualificados têm score acima de 70.">
        <HelpCircle size={18} className="text-mist cursor-help" />
      </Tooltip>
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Tooltip content="12 leads aguardando qualificação">
        <Badge variant="warning">12 pendentes</Badge>
      </Tooltip>
      <Tooltip content="6 leads convertidos este mês">
        <Badge variant="success" dot>Convertidos</Badge>
      </Tooltip>
    </div>
}`,...n.parameters?.docs?.source}}};const D=["Default","Posicoes","ComIcones","ComBadge"];export{n as ComBadge,i as ComIcones,s as Default,r as Posicoes,D as __namedExportsOrder,M as default};
