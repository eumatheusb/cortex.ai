import{r as d,j as e}from"./iframe-Sy2gFGJ3.js";import{S as l}from"./Slider-35vvJfPU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BdQq_4o_.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-BmPT29Bj.js";import"./index-hCnxOtR-.js";import"./index-iJKTUraZ.js";import"./utils-44l4s4mB.js";const w={title:"Atoms/Slider",component:l,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},showValue:{control:"boolean"}},decorators:[a=>e.jsx("div",{className:"w-[400px]",children:e.jsx(a,{})})]},r={args:{defaultValue:[50],label:"Volume",showValue:!0}},s={name:"Preco de Tratamento",render:()=>{const[a,m]=d.useState([5e3,25e3]);return e.jsx(l,{value:a,onValueChange:m,min:500,max:5e4,step:500,label:"Faixa de Preco",showValue:!0,formatValue:c=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(c),marks:[{value:500,label:"R$ 500"},{value:15e3,label:"R$ 15k"},{value:3e4,label:"R$ 30k"},{value:5e4,label:"R$ 50k"}]})}},o={name:"Range (Duracao do Tratamento)",args:{defaultValue:[3,12],min:1,max:24,step:1,label:"Duracao (meses)",showValue:!0,formatValue:a=>`${a} ${a===1?"mes":"meses"}`}},t={args:{defaultValue:[3],min:1,max:5,step:1,label:"Satisfacao do Paciente",showValue:!0,marks:[{value:1,label:"Ruim"},{value:2,label:"Regular"},{value:3,label:"Bom"},{value:4,label:"Otimo"},{value:5,label:"Excelente"}]}},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(l,{defaultValue:[30],size:"sm",label:"Pequeno",showValue:!0}),e.jsx(l,{defaultValue:[50],size:"md",label:"Medio",showValue:!0}),e.jsx(l,{defaultValue:[70],size:"lg",label:"Grande",showValue:!0})]})},n={args:{defaultValue:[40],disabled:!0,label:"Desabilitado",showValue:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [50],
    label: 'Volume',
    showValue: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Preco de Tratamento',
  render: () => {
    const [value, setValue] = useState([5000, 25000]);
    return <Slider value={value} onValueChange={setValue} min={500} max={50000} step={500} label="Faixa de Preco" showValue formatValue={v => new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(v)} marks={[{
      value: 500,
      label: 'R$ 500'
    }, {
      value: 15000,
      label: 'R$ 15k'
    }, {
      value: 30000,
      label: 'R$ 30k'
    }, {
      value: 50000,
      label: 'R$ 50k'
    }]} />;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Range (Duracao do Tratamento)',
  args: {
    defaultValue: [3, 12],
    min: 1,
    max: 24,
    step: 1,
    label: 'Duracao (meses)',
    showValue: true,
    formatValue: (v: number) => \`\${v} \${v === 1 ? 'mes' : 'meses'}\`
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [3],
    min: 1,
    max: 5,
    step: 1,
    label: 'Satisfacao do Paciente',
    showValue: true,
    marks: [{
      value: 1,
      label: 'Ruim'
    }, {
      value: 2,
      label: 'Regular'
    }, {
      value: 3,
      label: 'Bom'
    }, {
      value: 4,
      label: 'Otimo'
    }, {
      value: 5,
      label: 'Excelente'
    }]
  }
}`,...t.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <Slider defaultValue={[30]} size="sm" label="Pequeno" showValue />
      <Slider defaultValue={[50]} size="md" label="Medio" showValue />
      <Slider defaultValue={[70]} size="lg" label="Grande" showValue />
    </div>
}`,...u.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [40],
    disabled: true,
    label: 'Desabilitado',
    showValue: true
  }
}`,...n.parameters?.docs?.source}}};const k=["Default","PrecoTratamento","RangeSlider","WithMarks","Sizes","Disabled"];export{r as Default,n as Disabled,s as PrecoTratamento,o as RangeSlider,u as Sizes,t as WithMarks,k as __namedExportsOrder,w as default};
