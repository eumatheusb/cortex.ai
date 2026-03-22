import{j as e}from"./iframe-Sy2gFGJ3.js";import{A as t,a as o,b as r,c as i}from"./Accordion-C3wNPsx-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-BmPT29Bj.js";import"./index-DT1ZH9rQ.js";import"./index-DtrQf-Nc.js";import"./index-CBH1vlMd.js";import"./utils-44l4s4mB.js";import"./chevron-down-blV75o58.js";import"./createLucideIcon-D_RK-bSM.js";const q={title:"Atoms/Accordion",component:t,parameters:{layout:"padded"},tags:["autodocs"]},l=[{value:"clareamento",question:"O clareamento dental e seguro?",answer:"Sim, o clareamento dental supervisionado por um profissional e um procedimento seguro. Utilizamos produtos com concentracao controlada de peroxido de hidrogenio, minimizando riscos de sensibilidade. O tratamento dura em media 3 sessoes."},{value:"implante",question:"Quanto tempo dura o processo de implante?",answer:"O processo completo de implante dentario leva entre 3 a 6 meses, incluindo a fase de osseointegração. A cirurgia em si dura de 1 a 2 horas. Apos a instalacao do implante, aguardamos a cicatrizacao antes de colocar a protese definitiva."},{value:"ortodontia",question:"Qual a diferenca entre aparelho fixo e alinhadores?",answer:"O aparelho fixo utiliza brackets colados nos dentes, sendo mais indicado para casos complexos. Os alinhadores transparentes (tipo Invisalign) sao removiveis e mais esteticos, ideais para correcoes leves a moderadas. Ambos tem excelentes resultados quando bem indicados."},{value:"facetas",question:"Facetas de porcelana duram quanto tempo?",answer:"Facetas de porcelana bem cuidadas duram entre 10 a 15 anos. A durabilidade depende de habitos como nao roer unhas, evitar alimentos muito duros e manter a higiene bucal rigorosa. Revisoes semestrais ajudam a garantir a longevidade."},{value:"profilaxia",question:"Com que frequencia devo fazer limpeza?",answer:"Recomendamos limpeza profissional (profilaxia) a cada 6 meses. Para pacientes com historico de doenca periodontal, o intervalo pode ser reduzido para 3 a 4 meses conforme avaliacao do dentista."}],n={render:()=>e.jsxs("div",{className:"max-w-lg",children:[e.jsx("h3",{className:"font-display font-semibold text-white text-lg mb-4",children:"Perguntas frequentes"}),e.jsx(t,{type:"single",collapsible:!0,defaultValue:"clareamento",children:l.map(a=>e.jsxs(o,{value:a.value,children:[e.jsx(r,{children:a.question}),e.jsx(i,{children:a.answer})]},a.value))})]}),name:"FAQ Tratamentos"},s={render:()=>e.jsxs("div",{className:"max-w-lg",children:[e.jsx("h3",{className:"font-display font-semibold text-white text-lg mb-4",children:"Multipla expansao"}),e.jsx(t,{type:"multiple",defaultValue:["clareamento","implante"],children:l.slice(0,3).map(a=>e.jsxs(o,{value:a.value,children:[e.jsx(r,{children:a.question}),e.jsx(i,{children:a.answer})]},a.value))})]})},c={render:()=>e.jsx("div",{className:"max-w-lg",children:e.jsx(t,{type:"single",collapsible:!0,variant:"card",children:l.slice(0,3).map(a=>e.jsxs(o,{value:a.value,children:[e.jsx(r,{children:a.question}),e.jsx(i,{children:a.answer})]},a.value))})})},d={render:()=>e.jsx("div",{className:"max-w-lg",children:e.jsxs(t,{type:"single",collapsible:!0,children:[e.jsxs(o,{value:"ativo",children:[e.jsx(r,{children:"Item ativo"}),e.jsx(i,{children:"Este item pode ser expandido normalmente."})]}),e.jsxs(o,{value:"desabilitado",disabled:!0,children:[e.jsx(r,{children:"Item desabilitado"}),e.jsx(i,{children:"Este conteudo nao aparece."})]}),e.jsxs(o,{value:"outro",children:[e.jsx(r,{children:"Outro item ativo"}),e.jsx(i,{children:"Este tambem funciona normalmente."})]})]})}),name:"Com item desabilitado"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg">
      <h3 className="font-display font-semibold text-white text-lg mb-4">
        Perguntas frequentes
      </h3>
      <Accordion type="single" collapsible defaultValue="clareamento">
        {faqItems.map(item => <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>)}
      </Accordion>
    </div>,
  name: 'FAQ Tratamentos'
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg">
      <h3 className="font-display font-semibold text-white text-lg mb-4">
        Multipla expansao
      </h3>
      <Accordion type="multiple" defaultValue={['clareamento', 'implante']}>
        {faqItems.slice(0, 3).map(item => <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>)}
      </Accordion>
    </div>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg">
      <Accordion type="single" collapsible variant="card">
        {faqItems.slice(0, 3).map(item => <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>)}
      </Accordion>
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg">
      <Accordion type="single" collapsible>
        <AccordionItem value="ativo">
          <AccordionTrigger>Item ativo</AccordionTrigger>
          <AccordionContent>Este item pode ser expandido normalmente.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="desabilitado" disabled>
          <AccordionTrigger>Item desabilitado</AccordionTrigger>
          <AccordionContent>Este conteudo nao aparece.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="outro">
          <AccordionTrigger>Outro item ativo</AccordionTrigger>
          <AccordionContent>Este tambem funciona normalmente.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>,
  name: 'Com item desabilitado'
}`,...d.parameters?.docs?.source}}};const C=["FAQTratamentos","MultipleExpand","CardVariant","ComItemDesabilitado"];export{c as CardVariant,d as ComItemDesabilitado,n as FAQTratamentos,s as MultipleExpand,C as __namedExportsOrder,q as default};
