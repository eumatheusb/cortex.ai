import{r as m,j as e}from"./iframe-Sy2gFGJ3.js";import{R as n}from"./RadioGroup-B5_ReX1Y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./index-BQdhF_pr.js";import"./use-presence-CKHZRRw-.js";import"./proxy-CrbPgRsh.js";const x={title:"Atoms/RadioGroup",component:n,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{defaultValue:"monthly",items:[{value:"monthly",label:"Mensal",hint:"Cobrado todo mês"},{value:"annual",label:"Anual",hint:"Economize 20%"},{value:"custom",label:"Personalizado",disabled:!0}]}},l={args:{orientation:"horizontal",defaultValue:"semana",items:[{value:"hoje",label:"Hoje"},{value:"semana",label:"Semana"},{value:"mes",label:"Mês"},{value:"ano",label:"Ano"}]}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-ash uppercase tracking-wider mb-3",children:"Small"}),e.jsx(n,{size:"sm",defaultValue:"crm",orientation:"horizontal",items:[{value:"crm",label:"CRM"},{value:"relatorio",label:"Relatório"},{value:"config",label:"Config."}]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-ash uppercase tracking-wider mb-3",children:"Medium (padrão)"}),e.jsx(n,{size:"md",defaultValue:"crm",orientation:"horizontal",items:[{value:"crm",label:"CRM"},{value:"relatorio",label:"Relatório"},{value:"config",label:"Config."}]})]})]})},t={render:()=>{const[r,i]=m.useState("whatsapp");return e.jsxs("div",{className:"flex flex-col gap-2 w-72",children:[e.jsx("p",{className:"text-xs text-ash uppercase tracking-wider",children:"Canal de contato preferido"}),e.jsx(n,{value:r,onChange:i,items:[{value:"whatsapp",label:"WhatsApp",hint:"Resposta em até 5 min"},{value:"email",label:"E-mail",hint:"Resposta em até 1h"},{value:"telefone",label:"Telefone",hint:"Horário comercial"},{value:"sms",label:"SMS",disabled:!0}]}),e.jsxs("p",{className:"text-xs text-mist mt-1",children:["Selecionado: ",e.jsx("span",{className:"text-signal",children:r})]})]})},name:"Caso de uso — canal de contato"},o={args:{defaultValue:"basico",items:[{value:"basico",label:"Básico",hint:"Até 50 leads/mês"},{value:"profissional",label:"Profissional",hint:"Até 200 leads/mês"},{value:"enterprise",label:"Enterprise",hint:"Ilimitado",disabled:!0}]},name:"Com itens desabilitados"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'monthly',
    items: [{
      value: 'monthly',
      label: 'Mensal',
      hint: 'Cobrado todo mês'
    }, {
      value: 'annual',
      label: 'Anual',
      hint: 'Economize 20%'
    }, {
      value: 'custom',
      label: 'Personalizado',
      disabled: true
    }]
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    defaultValue: 'semana',
    items: [{
      value: 'hoje',
      label: 'Hoje'
    }, {
      value: 'semana',
      label: 'Semana'
    }, {
      value: 'mes',
      label: 'Mês'
    }, {
      value: 'ano',
      label: 'Ano'
    }]
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs text-ash uppercase tracking-wider mb-3">Small</p>
        <RadioGroup size="sm" defaultValue="crm" orientation="horizontal" items={[{
        value: 'crm',
        label: 'CRM'
      }, {
        value: 'relatorio',
        label: 'Relatório'
      }, {
        value: 'config',
        label: 'Config.'
      }]} />
      </div>
      <div>
        <p className="text-xs text-ash uppercase tracking-wider mb-3">Medium (padrão)</p>
        <RadioGroup size="md" defaultValue="crm" orientation="horizontal" items={[{
        value: 'crm',
        label: 'CRM'
      }, {
        value: 'relatorio',
        label: 'Relatório'
      }, {
        value: 'config',
        label: 'Config.'
      }]} />
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [canal, setCanal] = React.useState('whatsapp');
    return <div className="flex flex-col gap-2 w-72">
        <p className="text-xs text-ash uppercase tracking-wider">Canal de contato preferido</p>
        <RadioGroup value={canal} onChange={setCanal} items={[{
        value: 'whatsapp',
        label: 'WhatsApp',
        hint: 'Resposta em até 5 min'
      }, {
        value: 'email',
        label: 'E-mail',
        hint: 'Resposta em até 1h'
      }, {
        value: 'telefone',
        label: 'Telefone',
        hint: 'Horário comercial'
      }, {
        value: 'sms',
        label: 'SMS',
        disabled: true
      }]} />
        <p className="text-xs text-mist mt-1">Selecionado: <span className="text-signal">{canal}</span></p>
      </div>;
  },
  name: 'Caso de uso — canal de contato'
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'basico',
    items: [{
      value: 'basico',
      label: 'Básico',
      hint: 'Até 50 leads/mês'
    }, {
      value: 'profissional',
      label: 'Profissional',
      hint: 'Até 200 leads/mês'
    }, {
      value: 'enterprise',
      label: 'Enterprise',
      hint: 'Ilimitado',
      disabled: true
    }]
  },
  name: 'Com itens desabilitados'
}`,...o.parameters?.docs?.source}}};const f=["Default","Horizontal","Tamanhos","CasoDeUso","ComDesabilitados"];export{t as CasoDeUso,o as ComDesabilitados,a as Default,l as Horizontal,s as Tamanhos,f as __namedExportsOrder,x as default};
