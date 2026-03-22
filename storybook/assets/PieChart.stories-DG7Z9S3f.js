import{P as s}from"./PieChart-DoDsD8yu.js";import"./iframe-Sy2gFGJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./generateCategoricalChart-wr-NjOHd.js";const h={title:"Organisms/Charts/PieChart",component:s,tags:["autodocs"],parameters:{layout:"padded"}},t=[{name:"Meta Ads",value:450},{name:"Google Ads",value:300},{name:"Indicacao",value:150},{name:"Organico",value:100}],e={args:{data:t,variant:"donut",height:420}},a={args:{data:t,variant:"pie",labelPosition:"internal",height:420}},r={args:{data:t,variant:"donut",showLegend:!1,labelPosition:"external",height:350}},i=[{name:"Implante",value:35},{name:"Ortodontia",value:25},{name:"Clareamento",value:18},{name:"Protese",value:12},{name:"Lentes",value:7},{name:"Outros",value:3}],o={args:{data:i,variant:"donut",height:420,formatValue:n=>`${n} proc.`}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: origemLeads,
    variant: 'donut',
    height: 420
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: origemLeads,
    variant: 'pie',
    labelPosition: 'internal',
    height: 420
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    data: origemLeads,
    variant: 'donut',
    showLegend: false,
    labelPosition: 'external',
    height: 350
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: procedimentos,
    variant: 'donut',
    height: 420,
    formatValue: (v: number) => \`\${v} proc.\`
  }
}`,...o.parameters?.docs?.source}}};const v=["OrigemDosLeads","PieCompleto","SemLegenda","ProcedimentosRealizados"];export{e as OrigemDosLeads,a as PieCompleto,o as ProcedimentosRealizados,r as SemLegenda,v as __namedExportsOrder,h as default};
