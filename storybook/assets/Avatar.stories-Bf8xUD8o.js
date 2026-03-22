import{j as a}from"./iframe-Sy2gFGJ3.js";import{A as e,a as m}from"./Avatar-DY5rXuPS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBH1vlMd.js";import"./utils-44l4s4mB.js";const v={title:"Atoms/Avatar",component:e,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>a.jsxs("div",{className:"flex items-end gap-4",children:[a.jsx(e,{name:"Fábio Avelar",size:"xs"}),a.jsx(e,{name:"Fábio Avelar",size:"sm"}),a.jsx(e,{name:"Fábio Avelar",size:"md"}),a.jsx(e,{name:"Fábio Avelar",size:"lg"}),a.jsx(e,{name:"Fábio Avelar",size:"xl"})]})},r={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(e,{name:"Camila Rocha",status:"online"}),a.jsx(e,{name:"Rodrigo Lima",status:"busy"}),a.jsx(e,{name:"Fernanda Costa",status:"away"}),a.jsx(e,{name:"Marcelo Andrade",status:"offline"})]})},n={render:()=>a.jsx(m,{max:4,avatars:[{name:"Camila Rocha"},{name:"Rodrigo Lima"},{name:"Fernanda Costa"},{name:"Marcelo Andrade"},{name:"Juliana Melo"},{name:"André Santos"}]})},o={render:()=>a.jsx("div",{className:"flex gap-3",children:["Ana Lima","Bruno Costa","Carla Santos","Diego Rocha","Eva Mendes"].map(t=>a.jsx(e,{name:t,size:"md"},t))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      <Avatar name="Fábio Avelar" size="xs" />
      <Avatar name="Fábio Avelar" size="sm" />
      <Avatar name="Fábio Avelar" size="md" />
      <Avatar name="Fábio Avelar" size="lg" />
      <Avatar name="Fábio Avelar" size="xl" />
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar name="Camila Rocha" status="online" />
      <Avatar name="Rodrigo Lima" status="busy" />
      <Avatar name="Fernanda Costa" status="away" />
      <Avatar name="Marcelo Andrade" status="offline" />
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={4} avatars={[{
    name: 'Camila Rocha'
  }, {
    name: 'Rodrigo Lima'
  }, {
    name: 'Fernanda Costa'
  }, {
    name: 'Marcelo Andrade'
  }, {
    name: 'Juliana Melo'
  }, {
    name: 'André Santos'
  }]} />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3">
      {['Ana Lima', 'Bruno Costa', 'Carla Santos', 'Diego Rocha', 'Eva Mendes'].map(name => <Avatar key={name} name={name} size="md" />)}
    </div>
}`,...o.parameters?.docs?.source}}};const u=["Sizes","WithStatus","Group","Initials"];export{n as Group,o as Initials,s as Sizes,r as WithStatus,u as __namedExportsOrder,v as default};
