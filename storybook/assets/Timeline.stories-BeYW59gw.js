import{j as e}from"./iframe-Sy2gFGJ3.js";import{T as n}from"./Timeline-BSTdqurI.js";import{U as r}from"./user-plus-CO27LSLf.js";import{c as i}from"./createLucideIcon-D_RK-bSM.js";import{F as s}from"./file-text-CqIGGm1G.js";import{S as c}from"./stethoscope-DwNk1iNX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";const d=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],p=i("calendar-check",d);const l=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],m=i("clipboard-check",l),S={title:"Organisms/Timeline",component:n,tags:["autodocs"],parameters:{layout:"padded"}},a={args:{items:[{id:"1",title:"Primeira consulta",description:"Paciente Maria Silva realizou primeira consulta. Queixa principal: dor no dente 36. Radiografia solicitada.",date:"15/01/2026 - 09:00",icon:e.jsx(r,{size:16}),type:"signal"},{id:"2",title:"Avaliacao completa",description:"Avaliacao clinica e radiografica concluida. Diagnostico: necessidade de implante no elemento 36.",date:"22/01/2026 - 10:30",icon:e.jsx(m,{size:16}),type:"warning"},{id:"3",title:"Plano de tratamento aprovado",description:"Paciente aprovou plano de tratamento. Valor total: R$ 8.500. Pagamento em 10x no cartao.",date:"29/01/2026 - 14:00",icon:e.jsx(s,{size:16}),type:"success"},{id:"4",title:"Procedimento realizado",description:"Implante do elemento 36 realizado com sucesso. Sem intercorrencias. Medicacao prescrita.",date:"12/02/2026 - 08:00",icon:e.jsx(c,{size:16}),type:"success"},{id:"5",title:"Retorno agendado",description:"Retorno para acompanhamento agendado para 30 dias. Verificar osseointegrracao.",date:"12/03/2026 - 09:00",icon:e.jsx(p,{size:16}),type:"default"}],alternating:!1}},o={args:{...a.args,alternating:!0}},t={args:{items:[],loading:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      title: 'Primeira consulta',
      description: 'Paciente Maria Silva realizou primeira consulta. Queixa principal: dor no dente 36. Radiografia solicitada.',
      date: '15/01/2026 - 09:00',
      icon: <UserPlus size={16} />,
      type: 'signal'
    }, {
      id: '2',
      title: 'Avaliacao completa',
      description: 'Avaliacao clinica e radiografica concluida. Diagnostico: necessidade de implante no elemento 36.',
      date: '22/01/2026 - 10:30',
      icon: <ClipboardCheck size={16} />,
      type: 'warning'
    }, {
      id: '3',
      title: 'Plano de tratamento aprovado',
      description: 'Paciente aprovou plano de tratamento. Valor total: R$ 8.500. Pagamento em 10x no cartao.',
      date: '29/01/2026 - 14:00',
      icon: <FileText size={16} />,
      type: 'success'
    }, {
      id: '4',
      title: 'Procedimento realizado',
      description: 'Implante do elemento 36 realizado com sucesso. Sem intercorrencias. Medicacao prescrita.',
      date: '12/02/2026 - 08:00',
      icon: <Stethoscope size={16} />,
      type: 'success'
    }, {
      id: '5',
      title: 'Retorno agendado',
      description: 'Retorno para acompanhamento agendado para 30 dias. Verificar osseointegrracao.',
      date: '12/03/2026 - 09:00',
      icon: <CalendarCheck size={16} />,
      type: 'default'
    }],
    alternating: false
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...HistoricoPaciente.args,
    alternating: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    loading: true
  }
}`,...t.parameters?.docs?.source}}};const R=["HistoricoPaciente","AlternandoLados","Loading"];export{o as AlternandoLados,a as HistoricoPaciente,t as Loading,R as __namedExportsOrder,S as default};
