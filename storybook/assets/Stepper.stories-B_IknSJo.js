import{j as a,r as m}from"./iframe-Sy2gFGJ3.js";import{S as t}from"./Stepper-DNk3IdZ4.js";import{B as d}from"./Button-Cw3d5KgM.js";import{U as u}from"./user-plus-CO27LSLf.js";import{c}from"./createLucideIcon-D_RK-bSM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBH1vlMd.js";import"./utils-44l4s4mB.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./check-C92KmPKj.js";import"./circle-alert-gwLM68A0.js";import"./loader-circle-BvJOM1Fy.js";const v=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],x=c("clipboard-list",v);const b=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],h=c("file-check",b);const g=[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}],["path",{d:"M7 10v12",key:"1qc93n"}]],A=c("thumbs-up",g),E={title:"Molecules/Stepper",component:t,parameters:{layout:"padded"},tags:["autodocs"]},o={render:()=>{const[e,r]=m.useState(1),l=[{id:"dados",label:"Dados",description:"Informacoes pessoais",icon:a.jsx(u,{size:16}),status:e>0?"complete":e===0?"active":"pending"},{id:"anamnese",label:"Anamnese",description:"Historico de saude",icon:a.jsx(x,{size:16}),status:e>1?"complete":e===1?"active":"pending"},{id:"plano",label:"Plano",description:"Plano de tratamento",icon:a.jsx(h,{size:16}),status:e>2?"complete":e===2?"active":"pending"},{id:"aprovacao",label:"Aprovacao",description:"Aprovacao do paciente",icon:a.jsx(A,{size:16}),status:e>3?"complete":e===3?"active":"pending"}];return a.jsxs("div",{className:"max-w-2xl space-y-8",children:[a.jsx(t,{steps:l,orientation:"horizontal",onStepClick:(I,p)=>r(p)}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx(d,{variant:"ghost",onClick:()=>r(Math.max(0,e-1)),disabled:e===0,children:"Voltar"}),a.jsx(d,{variant:"primary",onClick:()=>r(Math.min(3,e+1)),disabled:e===3,children:e===3?"Concluir":"Proximo"})]})]})},name:"Onboarding de paciente"},s={render:()=>{const e=[{id:"dados",label:"Dados pessoais",description:"Nome, CPF, contato",status:"complete"},{id:"anamnese",label:"Anamnese",description:"Historico medico e alergias",status:"complete"},{id:"plano",label:"Plano de tratamento",description:"Procedimentos e valores",status:"active"},{id:"aprovacao",label:"Aprovacao do paciente",description:"Assinatura e aceite",status:"pending"}];return a.jsx("div",{className:"max-w-sm",children:a.jsx(t,{steps:e,orientation:"vertical"})})}},i={render:()=>{const e=[{id:"dados",label:"Dados",status:"complete"},{id:"anamnese",label:"Anamnese",status:"complete"},{id:"plano",label:"Plano",description:"Erro na validacao do plano",status:"error"},{id:"aprovacao",label:"Aprovacao",status:"pending"}];return a.jsx("div",{className:"max-w-2xl",children:a.jsx(t,{steps:e,orientation:"horizontal"})})},name:"Com estado de erro"},n={render:()=>{const e=[{id:"dados",label:"Dados",status:"complete"},{id:"anamnese",label:"Anamnese",status:"complete"},{id:"plano",label:"Plano",status:"complete"},{id:"aprovacao",label:"Aprovacao",status:"complete"}];return a.jsx("div",{className:"max-w-2xl",children:a.jsx(t,{steps:e,orientation:"horizontal"})})},name:"Todos completos"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeIndex, setActiveIndex] = React.useState(1);
    const steps: StepItem[] = [{
      id: 'dados',
      label: 'Dados',
      description: 'Informacoes pessoais',
      icon: <UserPlus size={16} />,
      status: activeIndex > 0 ? 'complete' : activeIndex === 0 ? 'active' : 'pending'
    }, {
      id: 'anamnese',
      label: 'Anamnese',
      description: 'Historico de saude',
      icon: <ClipboardList size={16} />,
      status: activeIndex > 1 ? 'complete' : activeIndex === 1 ? 'active' : 'pending'
    }, {
      id: 'plano',
      label: 'Plano',
      description: 'Plano de tratamento',
      icon: <FileCheck size={16} />,
      status: activeIndex > 2 ? 'complete' : activeIndex === 2 ? 'active' : 'pending'
    }, {
      id: 'aprovacao',
      label: 'Aprovacao',
      description: 'Aprovacao do paciente',
      icon: <ThumbsUp size={16} />,
      status: activeIndex > 3 ? 'complete' : activeIndex === 3 ? 'active' : 'pending'
    }];
    return <div className="max-w-2xl space-y-8">
        <Stepper steps={steps} orientation="horizontal" onStepClick={(_, index) => setActiveIndex(index)} />
        <div className="flex justify-between">
          <Button variant="ghost" onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))} disabled={activeIndex === 0}>
            Voltar
          </Button>
          <Button variant="primary" onClick={() => setActiveIndex(Math.min(3, activeIndex + 1))} disabled={activeIndex === 3}>
            {activeIndex === 3 ? 'Concluir' : 'Proximo'}
          </Button>
        </div>
      </div>;
  },
  name: 'Onboarding de paciente'
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const steps: StepItem[] = [{
      id: 'dados',
      label: 'Dados pessoais',
      description: 'Nome, CPF, contato',
      status: 'complete'
    }, {
      id: 'anamnese',
      label: 'Anamnese',
      description: 'Historico medico e alergias',
      status: 'complete'
    }, {
      id: 'plano',
      label: 'Plano de tratamento',
      description: 'Procedimentos e valores',
      status: 'active'
    }, {
      id: 'aprovacao',
      label: 'Aprovacao do paciente',
      description: 'Assinatura e aceite',
      status: 'pending'
    }];
    return <div className="max-w-sm">
        <Stepper steps={steps} orientation="vertical" />
      </div>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const steps: StepItem[] = [{
      id: 'dados',
      label: 'Dados',
      status: 'complete'
    }, {
      id: 'anamnese',
      label: 'Anamnese',
      status: 'complete'
    }, {
      id: 'plano',
      label: 'Plano',
      description: 'Erro na validacao do plano',
      status: 'error'
    }, {
      id: 'aprovacao',
      label: 'Aprovacao',
      status: 'pending'
    }];
    return <div className="max-w-2xl">
        <Stepper steps={steps} orientation="horizontal" />
      </div>;
  },
  name: 'Com estado de erro'
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const steps: StepItem[] = [{
      id: 'dados',
      label: 'Dados',
      status: 'complete'
    }, {
      id: 'anamnese',
      label: 'Anamnese',
      status: 'complete'
    }, {
      id: 'plano',
      label: 'Plano',
      status: 'complete'
    }, {
      id: 'aprovacao',
      label: 'Aprovacao',
      status: 'complete'
    }];
    return <div className="max-w-2xl">
        <Stepper steps={steps} orientation="horizontal" />
      </div>;
  },
  name: 'Todos completos'
}`,...n.parameters?.docs?.source}}};const B=["OnboardingPaciente","Vertical","ComErro","TodosCompletos"];export{i as ComErro,o as OnboardingPaciente,n as TodosCompletos,s as Vertical,B as __namedExportsOrder,E as default};
