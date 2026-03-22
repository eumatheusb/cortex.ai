import{r as d,j as o}from"./iframe-Sy2gFGJ3.js";import{T as a}from"./TimePicker-BzIQ3EIv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNXORVt-.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-D6MEHyiY.js";import"./index-C-FDDq2f.js";import"./Combination-hEgrkgqT.js";import"./index-DtrQf-Nc.js";import"./index-Bl9tSzGv.js";import"./index-iJKTUraZ.js";import"./index-B90I_nem.js";import"./index-DT1ZH9rQ.js";import"./utils-44l4s4mB.js";import"./createLucideIcon-D_RK-bSM.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";const E={title:"Atoms/TimePicker",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{format:{control:"select",options:["24h","12h"]},step:{control:"select",options:[15,30,60]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}},decorators:[e=>o.jsx("div",{className:"w-[280px]",children:o.jsx(e,{})})]},t={name:"Agendamento de Consulta",render:()=>{const[e,r]=d.useState(void 0);return o.jsx(a,{value:e,onChange:r,label:"Horario da Consulta",placeholder:"Selecione o horario",minTime:"08:00",maxTime:"18:00",step:30})}},s={name:"24 horas (step 15min)",render:()=>{const[e,r]=d.useState("14:30");return o.jsx(a,{value:e,onChange:r,label:"Horario",format:"24h",step:15})}},i={name:"12 horas (AM/PM)",render:()=>{const[e,r]=d.useState("2:30 PM");return o.jsx(a,{value:e,onChange:r,label:"Horario",format:"12h",step:30})}},n={name:"Horarios Indisponiveis (almoco)",render:()=>{const[e,r]=d.useState(void 0);return o.jsx(a,{value:e,onChange:r,label:"Horario Disponivel",minTime:"08:00",maxTime:"18:00",step:30,disabledTimes:["12:00","12:30","13:00"]})}},m={args:{label:"Horario",value:"22:00",error:"Horario fora do expediente"}},l={args:{label:"Horario",disabled:!0,placeholder:"Indisponivel"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Agendamento de Consulta',
  render: () => {
    const [time, setTime] = useState<string | undefined>(undefined);
    return <TimePicker value={time} onChange={setTime} label="Horario da Consulta" placeholder="Selecione o horario" minTime="08:00" maxTime="18:00" step={30} />;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '24 horas (step 15min)',
  render: () => {
    const [time, setTime] = useState<string | undefined>('14:30');
    return <TimePicker value={time} onChange={setTime} label="Horario" format="24h" step={15} />;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '12 horas (AM/PM)',
  render: () => {
    const [time, setTime] = useState<string | undefined>('2:30 PM');
    return <TimePicker value={time} onChange={setTime} label="Horario" format="12h" step={30} />;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Horarios Indisponiveis (almoco)',
  render: () => {
    const [time, setTime] = useState<string | undefined>(undefined);
    return <TimePicker value={time} onChange={setTime} label="Horario Disponivel" minTime="08:00" maxTime="18:00" step={30} disabledTimes={['12:00', '12:30', '13:00']} />;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Horario',
    value: '22:00',
    error: 'Horario fora do expediente'
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Horario',
    disabled: true,
    placeholder: 'Indisponivel'
  }
}`,...l.parameters?.docs?.source}}};const F=["AgendamentoConsulta","Format24h","Format12h","DisabledTimes","WithError","Disabled"];export{t as AgendamentoConsulta,l as Disabled,n as DisabledTimes,i as Format12h,s as Format24h,m as WithError,F as __namedExportsOrder,E as default};
