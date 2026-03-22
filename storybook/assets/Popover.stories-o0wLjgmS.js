import{j as e}from"./iframe-Sy2gFGJ3.js";import{P as o,a as i,b as n,c as l}from"./Popover-Cb-FbwsG.js";import{B as m}from"./Button-Cw3d5KgM.js";import{B as c}from"./Badge-X57OZ0QY.js";import{U as d}from"./user-D6y8Kvqo.js";import{M as p}from"./map-pin-DeVqSY53.js";import{C as x}from"./calendar-BbE5IKxr.js";import{I as v}from"./info-Uxv0kkki.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNXORVt-.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-D6MEHyiY.js";import"./index-C-FDDq2f.js";import"./Combination-hEgrkgqT.js";import"./index-DtrQf-Nc.js";import"./index-Bl9tSzGv.js";import"./index-iJKTUraZ.js";import"./index-B90I_nem.js";import"./index-DT1ZH9rQ.js";import"./utils-44l4s4mB.js";import"./x-B2qA_yUf.js";import"./createLucideIcon-D_RK-bSM.js";import"./index-CBH1vlMd.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./loader-circle-BvJOM1Fy.js";const O={title:"Atoms/Popover",parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsxs(o,{children:[e.jsx(i,{asChild:!0,children:e.jsx(m,{variant:"secondary",leftIcon:e.jsx(v,{size:15}),children:"Detalhes do lead"})}),e.jsxs(n,{children:[e.jsx("p",{className:"text-sm font-semibold text-white mb-1",children:"Dra. Camila Rocha"}),e.jsx("p",{className:"text-xs text-mist",children:"Última interação há 2 dias. Score de qualificação: 87/100."})]})]})},a={render:()=>e.jsxs(o,{children:[e.jsx(i,{asChild:!0,children:e.jsx(m,{variant:"secondary",children:"Perfil do dentista"})}),e.jsxs(n,{className:"relative",children:[e.jsx(l,{}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(d,{size:14,className:"text-signal"}),e.jsx("p",{className:"text-sm font-semibold text-white",children:"Dr. Rodrigo Lima"}),e.jsx(c,{variant:"success",size:"sm",children:"Ativo"})]}),e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs text-mist",children:[e.jsx(p,{size:12}),e.jsx("span",{children:"Sorriso Total — São Paulo"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-xs text-mist",children:[e.jsx(x,{size:12}),e.jsx("span",{children:"Cliente desde Jan/2025"})]})]}),e.jsxs("p",{className:"text-xs text-mist border-t border-steel pt-2",children:["Ticket médio: ",e.jsx("span",{className:"text-white font-medium",children:"R$2.800"})]})]})]})]})},r={render:()=>e.jsx("div",{className:"flex items-center gap-4",children:["start","center","end"].map(s=>e.jsxs(o,{children:[e.jsx(i,{asChild:!0,children:e.jsx(m,{variant:"outline",size:"sm",children:s})}),e.jsx(n,{align:s,children:e.jsxs("p",{className:"text-xs text-mist",children:["Alinhamento: ",e.jsx("span",{className:"text-white font-medium",children:s})]})})]},s))})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" leftIcon={<Info size={15} />}>Detalhes do lead</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm font-semibold text-white mb-1">Dra. Camila Rocha</p>
        <p className="text-xs text-mist">Última interação há 2 dias. Score de qualificação: 87/100.</p>
      </PopoverContent>
    </Popover>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Perfil do dentista</Button>
      </PopoverTrigger>
      <PopoverContent className="relative">
        <PopoverClose />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <User size={14} className="text-signal" />
            <p className="text-sm font-semibold text-white">Dr. Rodrigo Lima</p>
            <Badge variant="success" size="sm">Ativo</Badge>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-xs text-mist">
              <MapPin size={12} />
              <span>Sorriso Total — São Paulo</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-mist">
              <Calendar size={12} />
              <span>Cliente desde Jan/2025</span>
            </div>
          </div>
          <p className="text-xs text-mist border-t border-steel pt-2">Ticket médio: <span className="text-white font-medium">R$2.800</span></p>
        </div>
      </PopoverContent>
    </Popover>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      {(['start', 'center', 'end'] as const).map(align => <Popover key={align}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">{align}</Button>
          </PopoverTrigger>
          <PopoverContent align={align}>
            <p className="text-xs text-mist">Alinhamento: <span className="text-white font-medium">{align}</span></p>
          </PopoverContent>
        </Popover>)}
    </div>
}`,...r.parameters?.docs?.source}}};const F=["Default","ComClose","Alinhamentos"];export{r as Alinhamentos,a as ComClose,t as Default,F as __namedExportsOrder,O as default};
