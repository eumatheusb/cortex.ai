import{C as d}from"./Calendar-BC3GKdQ9.js";import"./iframe-Sy2gFGJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./chevron-left-CnzWn-l5.js";import"./createLucideIcon-D_RK-bSM.js";import"./chevron-right-CVjuRCxC.js";import"./index-BQdhF_pr.js";import"./plus-uf6RnP68.js";const D={title:"Organisms/Calendar",component:d,tags:["autodocs"],parameters:{layout:"padded"}};function e(i,c){const t=new Date;return t.setDate(t.getDate()+i),t.setHours(c,0,0,0),t}const n=[{id:"1",title:"Maria Silva - Implante",start:e(0,8),end:e(0,9),category:"consulta"},{id:"2",title:"Joao Santos - Avaliacao",start:e(0,10),end:e(0,11),category:"consulta"},{id:"3",title:"Ana Costa - Retorno",start:e(0,14),end:e(0,15),category:"retorno"},{id:"4",title:"Pedro Oliveira - Urgencia",start:e(1,9),end:e(1,10),category:"urgencia"},{id:"5",title:"Lucia Ferreira - Clareamento",start:e(1,11),end:e(1,12),category:"consulta"},{id:"6",title:"Carlos Mendes - Ortodontia",start:e(2,8),end:e(2,9),category:"consulta"},{id:"7",title:"Fernanda Lima - Retorno",start:e(2,15),end:e(2,16),category:"retorno"},{id:"8",title:"Roberto Alves - Protese",start:e(3,10),end:e(3,12),category:"consulta"},{id:"9",title:"Juliana Rocha - Lentes",start:e(4,9),end:e(4,10),category:"consulta"},{id:"10",title:"Almoco - Bloqueio",start:e(0,12),end:e(0,13),category:"bloqueio"}],a={args:{events:n,view:"month"}},r={args:{events:n,view:"week"}},o={args:{events:n,view:"day"}},s={args:{events:[],view:"month"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    events: agendaConsultorio,
    view: 'month'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    events: agendaConsultorio,
    view: 'week'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    events: agendaConsultorio,
    view: 'day'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    events: [],
    view: 'month'
  }
}`,...s.parameters?.docs?.source}}};const V=["AgendaConsultorio","VistaSemanall","VistaDiaria","Vazio"];export{a as AgendaConsultorio,s as Vazio,o as VistaDiaria,r as VistaSemanall,V as __namedExportsOrder,D as default};
