import{r as p,j as t}from"./iframe-Sy2gFGJ3.js";import{D as o}from"./DatePicker-DGscmUq7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNXORVt-.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-D6MEHyiY.js";import"./index-C-FDDq2f.js";import"./Combination-hEgrkgqT.js";import"./index-DtrQf-Nc.js";import"./index-Bl9tSzGv.js";import"./index-iJKTUraZ.js";import"./index-B90I_nem.js";import"./index-DT1ZH9rQ.js";import"./utils-44l4s4mB.js";import"./createLucideIcon-D_RK-bSM.js";import"./chevron-left-CnzWn-l5.js";import"./chevron-right-CVjuRCxC.js";const N={title:"Atoms/DatePicker",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{mode:{control:"select",options:["single","range"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}},decorators:[e=>t.jsx("div",{className:"w-[300px]",children:t.jsx(e,{})})]},d={name:"Data da Consulta",render:()=>{const[e,a]=p.useState(null);return t.jsx(o,{mode:"single",value:e,onChange:r=>a(r??null),label:"Data da Consulta",placeholder:"dd/mm/aaaa",minDate:new Date})}},l={name:"Periodo de Tratamento (Range)",render:()=>{const[e,a]=p.useState(void 0);return t.jsx(o,{mode:"range",rangeValue:e,onRangeChange:a,label:"Periodo do Tratamento",placeholder:"Selecione o periodo"})}},i={name:"Com datas min/max",render:()=>{const[e,a]=p.useState(null),r=new Date,n=new Date;return n.setMonth(n.getMonth()+3),t.jsx(o,{mode:"single",value:e,onChange:s=>a(s??null),label:"Agendar (proximo trimestre)",minDate:r,maxDate:n})}},m={name:"Datas bloqueadas",render:()=>{const[e,a]=p.useState(null),r=new Date,n=[1,3,5].map(s=>{const D=new Date;return D.setDate(r.getDate()+s),D});return t.jsx(o,{mode:"single",value:e,onChange:s=>a(s??null),label:"Datas disponiveis",disabledDates:n,minDate:r})}},c={render:()=>t.jsx(o,{mode:"single",label:"Data de Nascimento",error:"Data obrigatoria"})},u={args:{label:"Data",disabled:!0,placeholder:"Indisponivel"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Data da Consulta',
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return <DatePicker mode="single" value={date} onChange={d => setDate(d ?? null)} label="Data da Consulta" placeholder="dd/mm/aaaa" minDate={new Date()} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Periodo de Tratamento (Range)',
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>(undefined);
    return <DatePicker mode="range" rangeValue={range} onRangeChange={setRange} label="Periodo do Tratamento" placeholder="Selecione o periodo" />;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Com datas min/max',
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    const today = new Date();
    const threeMonths = new Date();
    threeMonths.setMonth(threeMonths.getMonth() + 3);
    return <DatePicker mode="single" value={date} onChange={d => setDate(d ?? null)} label="Agendar (proximo trimestre)" minDate={today} maxDate={threeMonths} />;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Datas bloqueadas',
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    const today = new Date();
    const blocked = [1, 3, 5].map(d => {
      const dt = new Date();
      dt.setDate(today.getDate() + d);
      return dt;
    });
    return <DatePicker mode="single" value={date} onChange={d => setDate(d ?? null)} label="Datas disponiveis" disabledDates={blocked} minDate={today} />;
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <DatePicker mode="single" label="Data de Nascimento" error="Data obrigatoria" />
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Data',
    disabled: true,
    placeholder: 'Indisponivel'
  }
}`,...u.parameters?.docs?.source}}};const q=["DataConsulta","PeriodoTratamento","WithMinMax","DisabledDates","WithError","Disabled"];export{d as DataConsulta,u as Disabled,m as DisabledDates,l as PeriodoTratamento,c as WithError,i as WithMinMax,q as __namedExportsOrder,N as default};
