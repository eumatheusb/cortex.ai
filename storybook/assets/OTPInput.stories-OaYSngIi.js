import{r as m,j as e}from"./iframe-Sy2gFGJ3.js";import{O as t}from"./OTPInput-Djy0nM4J.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";const j={title:"Atoms/OTPInput",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{length:{control:"select",options:[4,6]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},autoFocus:{control:"boolean"}}},a={name:"Verificacao WhatsApp (6 digitos)",render:()=>{const[l,d]=m.useState(""),[s,p]=m.useState("");return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("p",{className:"text-sm text-mist",children:"Digite o codigo enviado para o WhatsApp do paciente"}),e.jsx(t,{length:6,value:l,onChange:d,onComplete:u=>p(`Codigo recebido: ${u}`)}),s&&e.jsx("p",{className:"text-xs text-success",children:s})]})}},o={name:"Confirmacao SMS (4 digitos)",render:()=>{const[l,d]=m.useState("");return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("p",{className:"text-sm text-mist",children:"Codigo de confirmacao SMS"}),e.jsx(t,{length:4,value:l,onChange:d,onComplete:s=>alert(`Confirmado: ${s}`)})]})}},r={args:{length:6,error:"Codigo invalido. Tente novamente."}},n={args:{length:6,disabled:!0}},c={render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-mist mb-2 text-center",children:"Pequeno"}),e.jsx(t,{length:4,size:"sm",autoFocus:!1})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-mist mb-2 text-center",children:"Medio"}),e.jsx(t,{length:4,size:"md",autoFocus:!1})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-mist mb-2 text-center",children:"Grande"}),e.jsx(t,{length:4,size:"lg",autoFocus:!1})]})]})},i={name:"Pre-preenchido",args:{length:6,value:"483921",autoFocus:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Verificacao WhatsApp (6 digitos)',
  render: () => {
    const [value, setValue] = useState('');
    const [status, setStatus] = useState('');
    return <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-mist">
          Digite o codigo enviado para o WhatsApp do paciente
        </p>
        <OTPInput length={6} value={value} onChange={setValue} onComplete={code => setStatus(\`Codigo recebido: \${code}\`)} />
        {status && <p className="text-xs text-success">{status}</p>}
      </div>;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Confirmacao SMS (4 digitos)',
  render: () => {
    const [value, setValue] = useState('');
    return <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-mist">Codigo de confirmacao SMS</p>
        <OTPInput length={4} value={value} onChange={setValue} onComplete={code => alert(\`Confirmado: \${code}\`)} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: 'Codigo invalido. Tente novamente.'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-6">
      <div>
        <p className="text-xs text-mist mb-2 text-center">Pequeno</p>
        <OTPInput length={4} size="sm" autoFocus={false} />
      </div>
      <div>
        <p className="text-xs text-mist mb-2 text-center">Medio</p>
        <OTPInput length={4} size="md" autoFocus={false} />
      </div>
      <div>
        <p className="text-xs text-mist mb-2 text-center">Grande</p>
        <OTPInput length={4} size="lg" autoFocus={false} />
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Pre-preenchido',
  args: {
    length: 6,
    value: '483921',
    autoFocus: false
  }
}`,...i.parameters?.docs?.source}}};const C=["SixDigits","FourDigits","WithError","Disabled","Sizes","PreFilled"];export{n as Disabled,o as FourDigits,i as PreFilled,a as SixDigits,c as Sizes,r as WithError,C as __namedExportsOrder,j as default};
