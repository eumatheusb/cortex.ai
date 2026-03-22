import{j as a,r as c}from"./iframe-Sy2gFGJ3.js";import{P as m}from"./Pagination-CRz3Fvl1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./chevron-left-CnzWn-l5.js";import"./createLucideIcon-D_RK-bSM.js";import"./chevron-right-CVjuRCxC.js";import"./ellipsis-B4tOXUw5.js";const j={title:"Molecules/Pagination",parameters:{layout:"centered"},tags:["autodocs"]};function t({totalPages:o=10}){const[n,i]=c.useState(1);return a.jsxs("div",{className:"flex flex-col items-center gap-3",children:[a.jsx(m,{currentPage:n,totalPages:o,onPageChange:i}),a.jsxs("p",{className:"text-xs text-mist",children:["Página ",n," de ",o]})]})}const e={render:()=>a.jsx(t,{})},s={render:()=>a.jsx(t,{totalPages:4}),name:"Poucas páginas"},r={render:()=>a.jsx(t,{totalPages:50}),name:"Muitas páginas"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationDemo />
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationDemo totalPages={4} />,
  name: 'Poucas páginas'
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationDemo totalPages={50} />,
  name: 'Muitas páginas'
}`,...r.parameters?.docs?.source}}};const D=["Default","PoucasPaginas","MuitasPaginas"];export{e as Default,r as MuitasPaginas,s as PoucasPaginas,D as __namedExportsOrder,j as default};
