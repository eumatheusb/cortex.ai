import{j as e}from"./iframe-Sy2gFGJ3.js";import{C as r,a as d,b as l,c as o,d as i,e as c}from"./Card-BzvBjAML.js";import{B as m}from"./Badge-X57OZ0QY.js";import{B as x}from"./Button-Cw3d5KgM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBH1vlMd.js";import"./utils-44l4s4mB.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./loader-circle-BvJOM1Fy.js";import"./createLucideIcon-D_RK-bSM.js";const y={title:"Molecules/Card",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-4 w-[640px]",children:["default","elevated","bordered","ghost","interactive","signal"].map(n=>e.jsx(r,{variant:n,children:e.jsxs(i,{children:[e.jsx("p",{className:"text-sm font-semibold text-white capitalize",children:n}),e.jsx("p",{className:"text-xs text-mist mt-1",children:"Variante do card"})]})},n))})},s={render:()=>e.jsxs(r,{className:"w-80",children:[e.jsxs(d,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{children:"Dra. Camila Rocha"}),e.jsx(m,{variant:"success",dot:!0,children:"Ativo"})]}),e.jsx(o,{children:"OdontoVida SP — São Paulo"})]}),e.jsx(i,{children:e.jsxs("div",{className:"flex flex-col gap-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-mist",children:"Ticket médio"}),e.jsx("span",{className:"text-white font-mono",children:"R$3.200"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-mist",children:"Origem"}),e.jsx("span",{className:"text-white",children:"Meta Ads"})]})]})}),e.jsx(c,{children:e.jsx(x,{variant:"primary",size:"sm",className:"w-full",children:"Ver detalhes"})})]})},t={render:()=>e.jsx(r,{variant:"signal",className:"w-72",children:e.jsxs(i,{children:[e.jsx("p",{className:"font-display text-xs font-semibold uppercase tracking-wider text-signal-light mb-3",children:"Meta do mês"}),e.jsx("p",{className:"font-display font-bold text-3xl text-white",children:"68%"}),e.jsx("div",{className:"mt-3 h-1.5 rounded-full bg-signal/20",children:e.jsx("div",{className:"h-full w-[68%] rounded-full bg-signal"})}),e.jsx("p",{className:"text-xs text-mist mt-2",children:"R$48.2K de R$70K"})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 w-[640px]">
      {(['default', 'elevated', 'bordered', 'ghost', 'interactive', 'signal'] as const).map(v => <Card key={v} variant={v}>
          <CardContent>
            <p className="text-sm font-semibold text-white capitalize">{v}</p>
            <p className="text-xs text-mist mt-1">Variante do card</p>
          </CardContent>
        </Card>)}
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Dra. Camila Rocha</CardTitle>
          <Badge variant="success" dot>Ativo</Badge>
        </div>
        <CardDescription>OdontoVida SP — São Paulo</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
            <span className="text-mist">Ticket médio</span>
            <span className="text-white font-mono">R$3.200</span>
          </div>
          <div className="flex justify-between">
            <span className="text-mist">Origem</span>
            <span className="text-white">Meta Ads</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="sm" className="w-full">Ver detalhes</Button>
      </CardFooter>
    </Card>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="signal" className="w-72">
      <CardContent>
        <p className="font-display text-xs font-semibold uppercase tracking-wider text-signal-light mb-3">Meta do mês</p>
        <p className="font-display font-bold text-3xl text-white">68%</p>
        <div className="mt-3 h-1.5 rounded-full bg-signal/20">
          <div className="h-full w-[68%] rounded-full bg-signal" />
        </div>
        <p className="text-xs text-mist mt-2">R$48.2K de R$70K</p>
      </CardContent>
    </Card>
}`,...t.parameters?.docs?.source}}};const R=["Variants","Full","Signal"];export{s as Full,t as Signal,a as Variants,R as __namedExportsOrder,y as default};
