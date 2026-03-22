import{j as e}from"./iframe-Sy2gFGJ3.js";import{T as l,a as d,b as a,c as r}from"./Tabs-DAezfVQ3.js";import{C as n,d as i}from"./Card-BzvBjAML.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-CGbfTMwF.js";import"./index-BmPT29Bj.js";import"./index-DtrQf-Nc.js";import"./index-C-FDDq2f.js";import"./index-DT1ZH9rQ.js";import"./utils-44l4s4mB.js";import"./index-CBH1vlMd.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";const R={title:"Molecules/Tabs",parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsx("div",{className:"w-[480px]",children:e.jsxs(l,{defaultValue:"leads",children:[e.jsxs(d,{children:[e.jsx(a,{value:"leads",badge:12,children:"Leads"}),e.jsx(a,{value:"clientes",children:"Clientes"}),e.jsx(a,{value:"relatorios",children:"Relatórios"})]}),e.jsx(r,{value:"leads",children:e.jsx(n,{children:e.jsx(i,{children:e.jsx("p",{className:"text-mist text-sm",children:"Conteúdo de Leads"})})})}),e.jsx(r,{value:"clientes",children:e.jsx(n,{children:e.jsx(i,{children:e.jsx("p",{className:"text-mist text-sm",children:"Conteúdo de Clientes"})})})}),e.jsx(r,{value:"relatorios",children:e.jsx(n,{children:e.jsx(i,{children:e.jsx("p",{className:"text-mist text-sm",children:"Conteúdo de Relatórios"})})})})]})})},t={render:()=>e.jsx("div",{className:"w-[480px]",children:e.jsxs(l,{defaultValue:"semana",children:[e.jsxs(d,{variant:"pill",children:[e.jsx(a,{value:"hoje",variant:"pill",children:"Hoje"}),e.jsx(a,{value:"semana",variant:"pill",children:"Semana"}),e.jsx(a,{value:"mes",variant:"pill",children:"Mês"}),e.jsx(a,{value:"ano",variant:"pill",children:"Ano"})]}),e.jsx(r,{value:"semana",children:e.jsx("p",{className:"text-mist text-sm mt-2",children:"Dados da semana"})})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[480px]">
      <Tabs defaultValue="leads">
        <TabsList>
          <TabsTrigger value="leads" badge={12}>Leads</TabsTrigger>
          <TabsTrigger value="clientes">Clientes</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
        </TabsList>
        <TabsContent value="leads">
          <Card><CardContent><p className="text-mist text-sm">Conteúdo de Leads</p></CardContent></Card>
        </TabsContent>
        <TabsContent value="clientes">
          <Card><CardContent><p className="text-mist text-sm">Conteúdo de Clientes</p></CardContent></Card>
        </TabsContent>
        <TabsContent value="relatorios">
          <Card><CardContent><p className="text-mist text-sm">Conteúdo de Relatórios</p></CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[480px]">
      <Tabs defaultValue="semana">
        <TabsList variant="pill">
          <TabsTrigger value="hoje" variant="pill">Hoje</TabsTrigger>
          <TabsTrigger value="semana" variant="pill">Semana</TabsTrigger>
          <TabsTrigger value="mes" variant="pill">Mês</TabsTrigger>
          <TabsTrigger value="ano" variant="pill">Ano</TabsTrigger>
        </TabsList>
        <TabsContent value="semana">
          <p className="text-mist text-sm mt-2">Dados da semana</p>
        </TabsContent>
      </Tabs>
    </div>
}`,...t.parameters?.docs?.source}}};const w=["Line","Pill"];export{s as Line,t as Pill,w as __namedExportsOrder,R as default};
