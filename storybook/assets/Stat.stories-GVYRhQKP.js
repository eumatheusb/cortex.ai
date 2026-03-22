import{j as e}from"./iframe-Sy2gFGJ3.js";import{S as a,a as o}from"./Stat-XbZdCJDB.js";import{U as l}from"./users-B1LTeiEI.js";import{D as n}from"./dollar-sign-CR9WNfou.js";import{a as d}from"./trending-down-D1n0kLdf.js";import{T as i}from"./trending-up-Bs1SttDU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBH1vlMd.js";import"./utils-44l4s4mB.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./minus-B1JpuK0J.js";import"./createLucideIcon-D_RK-bSM.js";const V={title:"Molecules/Stat",component:a,tags:["autodocs"],parameters:{layout:"padded"}},r={args:{label:"Faturamento",value:"R$48.2K",trend:"up",trendValue:"+12.4%",trendLabel:"vs mês anterior",icon:e.jsx(n,{size:18})}},t={render:()=>e.jsxs(o,{cols:4,children:[e.jsx(a,{label:"Leads gerados",value:"1.284",trend:"up",trendValue:"+18%",trendLabel:"este mês",icon:e.jsx(l,{size:18})}),e.jsx(a,{label:"Faturamento",value:"R$48.2K",trend:"up",trendValue:"+12.4%",trendLabel:"vs mês anterior",variant:"signal",icon:e.jsx(n,{size:18})}),e.jsx(a,{label:"Taxa de conversão",value:"6.8%",trend:"down",trendValue:"-0.3pp",trendLabel:"vs semana passada",icon:e.jsx(d,{size:18})}),e.jsx(a,{label:"Ticket médio",value:"R$1.240",trend:"up",trendValue:"+R$80",trendLabel:"vs mês anterior",icon:e.jsx(i,{size:18})})]})},s={args:{label:"Carregando...",value:"",loading:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Faturamento',
    value: 'R$48.2K',
    trend: 'up',
    trendValue: '+12.4%',
    trendLabel: 'vs mês anterior',
    icon: <DollarSign size={18} />
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <StatGrid cols={4}>
      <Stat label="Leads gerados" value="1.284" trend="up" trendValue="+18%" trendLabel="este mês" icon={<Users size={18} />} />
      <Stat label="Faturamento" value="R$48.2K" trend="up" trendValue="+12.4%" trendLabel="vs mês anterior" variant="signal" icon={<DollarSign size={18} />} />
      <Stat label="Taxa de conversão" value="6.8%" trend="down" trendValue="-0.3pp" trendLabel="vs semana passada" icon={<Target size={18} />} />
      <Stat label="Ticket médio" value="R$1.240" trend="up" trendValue="+R$80" trendLabel="vs mês anterior" icon={<TrendingUp size={18} />} />
    </StatGrid>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Carregando...',
    value: '',
    loading: true
  }
}`,...s.parameters?.docs?.source}}};const f=["Default","CRMDashboard","Loading"];export{t as CRMDashboard,r as Default,s as Loading,f as __namedExportsOrder,V as default};
