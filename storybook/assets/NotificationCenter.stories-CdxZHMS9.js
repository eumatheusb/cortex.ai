import{r as u,j as e}from"./iframe-Sy2gFGJ3.js";import{N as o}from"./NotificationCenter-Dbc8XjvN.js";import{U as x}from"./user-plus-CO27LSLf.js";import{C as d}from"./calendar-BbE5IKxr.js";import{Z as g}from"./zap-BUDTiPoc.js";import{C as N}from"./circle-check-Blqt4QfW.js";import{T as b}from"./triangle-alert-U_wi5efy.js";import{M as v}from"./mail-Dw-7_K0y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNXORVt-.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-D6MEHyiY.js";import"./index-C-FDDq2f.js";import"./Combination-hEgrkgqT.js";import"./index-DtrQf-Nc.js";import"./index-Bl9tSzGv.js";import"./index-iJKTUraZ.js";import"./index-B90I_nem.js";import"./index-DT1ZH9rQ.js";import"./index-CBH1vlMd.js";import"./utils-44l4s4mB.js";import"./bell-CVKoNlR7.js";import"./createLucideIcon-D_RK-bSM.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./index-BQdhF_pr.js";import"./check-C92KmPKj.js";const V={title:"Organisms/NotificationCenter",component:o,parameters:{layout:"centered"},tags:["autodocs"]},l=[{id:"1",title:"Novo lead recebido",message:"Maria Silva preencheu o formulario de contato pelo Instagram.",icon:e.jsx(x,{size:16}),category:"leads",time:"Agora mesmo",read:!1},{id:"2",title:"Consulta confirmada",message:"Dr. Carlos Mendes confirmou a consulta de amanha as 14h.",icon:e.jsx(d,{size:16}),category:"agenda",time:"5 min atras",read:!1},{id:"3",title:"Automacao disparada",message:"Sequencia de follow-up iniciada para 8 leads qualificados.",icon:e.jsx(g,{size:16}),category:"sistema",time:"15 min atras",read:!1},{id:"4",title:"Orcamento aprovado",message:"Paciente Ana Costa aprovou o orcamento de clareamento + facetas.",icon:e.jsx(N,{size:16}),category:"leads",time:"1h atras",read:!1},{id:"5",title:"Lembrete de consulta",message:"Joao Pereira tem consulta em 30 minutos.",icon:e.jsx(d,{size:16}),category:"agenda",time:"2h atras",read:!0},{id:"6",title:"Falha na sincronizacao",message:"Erro ao sincronizar contatos com Meta Ads. Tente novamente.",icon:e.jsx(b,{size:16}),category:"sistema",time:"3h atras",read:!0},{id:"7",title:"E-mail recebido",message:"Resposta do paciente Roberto Lima sobre orcamento.",icon:e.jsx(v,{size:16}),category:"leads",time:"5h atras",read:!0},{id:"8",title:"Backup concluido",message:"Backup automatico do banco de dados realizado com sucesso.",category:"sistema",time:"Ontem, 23:00",read:!0}],a={render:()=>{const[r,c]=u.useState(l),p=i=>{c(n=>n.map(m=>m.id===i?{...m,read:!0}:m))},f=()=>{c(i=>i.map(n=>({...n,read:!0})))};return e.jsxs("div",{className:"flex items-center gap-4 bg-ink p-4 rounded-xl border border-steel",children:[e.jsx("span",{className:"text-sm text-mist",children:"Barra de navegacao"}),e.jsx(o,{notifications:r,onMarkAsRead:p,onMarkAllRead:f})]})},name:"Notificacoes CRM"},t={render:()=>e.jsxs("div",{className:"flex items-center gap-4 bg-ink p-4 rounded-xl border border-steel",children:[e.jsx("span",{className:"text-sm text-mist",children:"Sem notificacoes"}),e.jsx(o,{notifications:[]})]}),name:"Estado vazio"},s={render:()=>e.jsxs("div",{className:"flex items-center gap-4 bg-ink p-4 rounded-xl border border-steel",children:[e.jsx("span",{className:"text-sm text-mist",children:"Todas lidas"}),e.jsx(o,{notifications:l.map(r=>({...r,read:!0}))})]}),name:"Todas lidas"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notifications, setNotifications] = React.useState(sampleNotifications);
    const handleMarkAsRead = (id: string) => {
      setNotifications(prev => prev.map(n => n.id === id ? {
        ...n,
        read: true
      } : n));
    };
    const handleMarkAllRead = () => {
      setNotifications(prev => prev.map(n => ({
        ...n,
        read: true
      })));
    };
    return <div className="flex items-center gap-4 bg-ink p-4 rounded-xl border border-steel">
        <span className="text-sm text-mist">Barra de navegacao</span>
        <NotificationCenter notifications={notifications} onMarkAsRead={handleMarkAsRead} onMarkAllRead={handleMarkAllRead} />
      </div>;
  },
  name: 'Notificacoes CRM'
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 bg-ink p-4 rounded-xl border border-steel">
      <span className="text-sm text-mist">Sem notificacoes</span>
      <NotificationCenter notifications={[]} />
    </div>,
  name: 'Estado vazio'
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 bg-ink p-4 rounded-xl border border-steel">
      <span className="text-sm text-mist">Todas lidas</span>
      <NotificationCenter notifications={sampleNotifications.map(n => ({
      ...n,
      read: true
    }))} />
    </div>,
  name: 'Todas lidas'
}`,...s.parameters?.docs?.source}}};const W=["NotificacoesCRM","SemNotificacoes","TodasLidas"];export{a as NotificacoesCRM,t as SemNotificacoes,s as TodasLidas,W as __namedExportsOrder,V as default};
