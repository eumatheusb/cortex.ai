import{j as e}from"./iframe-Sy2gFGJ3.js";import{c as l}from"./utils-44l4s4mB.js";import{B as m}from"./Button-Cw3d5KgM.js";import{B as b}from"./Badge-X57OZ0QY.js";import{A as P}from"./Avatar-DY5rXuPS.js";import{S as T}from"./Spinner-CaTpxaSm.js";import{B as D}from"./Breadcrumb-Bry6prGf.js";import{m as i}from"./proxy-CrbPgRsh.js";import{A as z}from"./arrow-left-DOUA41Ax.js";import{S as g}from"./square-pen-BXDME0hw.js";import{P as w}from"./phone-0vPKg6sk.js";import{M as k}from"./mail-Dw-7_K0y.js";import{M as q}from"./map-pin-DeVqSY53.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBH1vlMd.js";import"./loader-circle-BvJOM1Fy.js";import"./createLucideIcon-D_RK-bSM.js";import"./chevron-right-CVjuRCxC.js";import"./use-presence-CKHZRRw-.js";const o={hidden:{opacity:0,y:12},visible:a=>({opacity:1,y:0,transition:{duration:.25,delay:a*.06,ease:[0,0,.2,1]}})};function d({title:a,subtitle:t,avatarName:p,avatarSrc:u,status:x,statusVariant:N="primary",breadcrumbs:f,onBack:h,sections:S,sidebar:s,actions:v,loading:R,className:C}){return R?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx(T,{size:"lg"})}):e.jsxs(i.div,{initial:"hidden",animate:"visible",className:l("flex flex-col gap-6",C),children:[e.jsxs(i.div,{variants:o,custom:0,className:"flex items-center gap-3",children:[h&&e.jsx(m,{variant:"ghost",size:"icon",onClick:h,"aria-label":"Voltar",children:e.jsx(z,{size:18})}),f&&e.jsx(D,{items:f})]}),e.jsxs(i.div,{variants:o,custom:1,className:"flex items-start justify-between gap-4 flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[(p||u)&&e.jsx(P,{name:p,src:u,size:"xl"}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("div",{className:"flex items-center gap-2.5 flex-wrap",children:[e.jsx("h1",{className:"font-display font-bold text-2xl text-white leading-tight",children:a}),x&&e.jsx(b,{variant:N,size:"md",dot:!0,children:x})]}),t&&e.jsx("p",{className:"text-sm text-mist",children:t})]})]}),v&&e.jsx("div",{className:"flex items-center gap-2 shrink-0",children:v})]}),e.jsxs("div",{className:l("grid gap-4",s?"grid-cols-1 lg:grid-cols-3":"grid-cols-1"),children:[e.jsx("div",{className:l("flex flex-col gap-4",s?"lg:col-span-2":""),children:S.map((r,B)=>e.jsxs(i.section,{variants:o,custom:B+2,className:l("rounded-xl border border-steel bg-dusk p-5",r.className),children:[e.jsx("h2",{className:"font-display font-semibold text-sm text-mist uppercase tracking-wider mb-4",children:r.title}),r.children]},r.id))}),s&&e.jsx(i.aside,{variants:o,custom:2,className:"flex flex-col gap-4",children:s})]})]})}d.__docgenInfo={description:"",methods:[],displayName:"DetailTemplate",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},avatarName:{required:!1,tsType:{name:"string"},description:""},avatarSrc:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"string"},description:""},statusVariant:{required:!1,tsType:{name:"BadgeProps['variant']",raw:"BadgeProps['variant']"},description:"",defaultValue:{value:"'primary'",computed:!1}},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},sections:{required:!0,tsType:{name:"Array",elements:[{name:"DetailSection"}],raw:"DetailSection[]"},description:""},sidebar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Z={title:"Templates/DetailTemplate",component:d,parameters:{layout:"fullscreen"}},j=e.jsx("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[{label:"Clínica",value:"OdontoVida SP"},{label:"Cidade",value:"São Paulo, SP"},{label:"Origem",value:"Meta Ads"},{label:"Ticket",value:"R$3.200"}].map(({label:a,value:t})=>e.jsxs("div",{children:[e.jsx("p",{className:"text-mist text-xs mb-0.5",children:a}),e.jsx("p",{className:"text-white font-medium",children:t})]},a))}),y=e.jsx("div",{className:"flex flex-col gap-3 text-sm",children:[{icon:e.jsx(w,{size:14}),value:"(11) 99999-8888"},{icon:e.jsx(k,{size:14}),value:"camila@odontovida.com"},{icon:e.jsx(q,{size:14}),value:"Av. Paulista, 1000"}].map(({icon:a,value:t})=>e.jsxs("div",{className:"flex items-center gap-2 text-mist",children:[a,e.jsx("span",{children:t})]},t))}),n={render:()=>e.jsx(d,{title:"Dra. Camila Rocha",subtitle:"OdontoVida SP — São Paulo",avatarName:"Camila Rocha",status:"Fechado",statusVariant:"success",breadcrumbs:[{label:"CRM"},{label:"Leads"},{label:"Dra. Camila Rocha"}],onBack:()=>{},actions:e.jsx(m,{variant:"primary",leftIcon:e.jsx(g,{size:15}),children:"Editar"}),sections:[{id:"info",title:"Informações",children:j},{id:"contact",title:"Contato",children:y}]})},c={render:()=>e.jsx(d,{title:"Dra. Camila Rocha",subtitle:"OdontoVida SP — São Paulo",avatarName:"Camila Rocha",status:"Fechado",statusVariant:"success",breadcrumbs:[{label:"CRM"},{label:"Leads"},{label:"Dra. Camila Rocha"}],onBack:()=>{},actions:e.jsx(m,{variant:"primary",leftIcon:e.jsx(g,{size:15}),children:"Editar"}),sections:[{id:"info",title:"Informações",children:j},{id:"contact",title:"Contato",children:y}],sidebar:e.jsxs("div",{className:"rounded-xl border border-steel bg-dusk p-5 flex flex-col gap-4",children:[e.jsx("p",{className:"font-display text-xs font-semibold uppercase tracking-wider text-mist",children:"Linha do tempo"}),[{date:"Hoje",label:"Proposta enviada",variant:"primary"},{date:"Ontem",label:"Ligação realizada",variant:"default"},{date:"18 Mar",label:"Lead criado",variant:"default"}].map((a,t)=>e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(b,{variant:a.variant,size:"sm",children:a.date}),e.jsx("p",{className:"text-sm text-mist",children:a.label})]},t))]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <DetailTemplate title="Dra. Camila Rocha" subtitle="OdontoVida SP — São Paulo" avatarName="Camila Rocha" status="Fechado" statusVariant="success" breadcrumbs={[{
    label: 'CRM'
  }, {
    label: 'Leads'
  }, {
    label: 'Dra. Camila Rocha'
  }]} onBack={() => {}} actions={<Button variant="primary" leftIcon={<Edit size={15} />}>Editar</Button>} sections={[{
    id: 'info',
    title: 'Informações',
    children: infoSection
  }, {
    id: 'contact',
    title: 'Contato',
    children: contactSection
  }]} />
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <DetailTemplate title="Dra. Camila Rocha" subtitle="OdontoVida SP — São Paulo" avatarName="Camila Rocha" status="Fechado" statusVariant="success" breadcrumbs={[{
    label: 'CRM'
  }, {
    label: 'Leads'
  }, {
    label: 'Dra. Camila Rocha'
  }]} onBack={() => {}} actions={<Button variant="primary" leftIcon={<Edit size={15} />}>Editar</Button>} sections={[{
    id: 'info',
    title: 'Informações',
    children: infoSection
  }, {
    id: 'contact',
    title: 'Contato',
    children: contactSection
  }]} sidebar={<div className="rounded-xl border border-steel bg-dusk p-5 flex flex-col gap-4">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-mist">Linha do tempo</p>
          {[{
      date: 'Hoje',
      label: 'Proposta enviada',
      variant: 'primary'
    }, {
      date: 'Ontem',
      label: 'Ligação realizada',
      variant: 'default'
    }, {
      date: '18 Mar',
      label: 'Lead criado',
      variant: 'default'
    }].map((ev, i) => <div key={i} className="flex items-start gap-3">
              <Badge variant={ev.variant as any} size="sm">{ev.date}</Badge>
              <p className="text-sm text-mist">{ev.label}</p>
            </div>)}
        </div>} />
}`,...c.parameters?.docs?.source}}};const ee=["Default","WithSidebar"];export{n as Default,c as WithSidebar,ee as __namedExportsOrder,Z as default};
