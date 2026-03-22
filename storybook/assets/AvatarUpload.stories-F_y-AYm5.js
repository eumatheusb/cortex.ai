import{A as c}from"./AvatarUpload-Bm65qIIt.js";import"./iframe-Sy2gFGJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./user-D6y8Kvqo.js";import"./createLucideIcon-D_RK-bSM.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./index-BQdhF_pr.js";import"./x-B2qA_yUf.js";import"./upload-xKV16Sai.js";const h={title:"Molecules/AvatarUpload",component:c,tags:["autodocs"],parameters:{layout:"centered"}},a={args:{size:"lg",fallbackInitials:"MS",onUpload:async i=>{await new Promise(n=>setTimeout(n,2e3)),console.log("Uploaded:",i.name)}}},e={args:{value:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",size:"lg"}},o={args:{size:"sm",fallbackInitials:"JR"}},s={args:{size:"md"}},r={args:{size:"lg",loading:!0,fallbackInitials:"PO"}},t={args:{size:"md",disabled:!0,fallbackInitials:"AC"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    fallbackInitials: 'MS',
    onUpload: async file => {
      // Simula upload
      await new Promise(r => setTimeout(r, 2000));
      console.log('Uploaded:', file.name);
    }
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    size: 'lg'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    fallbackInitials: 'JR'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    loading: true,
    fallbackInitials: 'PO'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: true,
    fallbackInitials: 'AC'
  }
}`,...t.parameters?.docs?.source}}};const k=["UploadFotoPaciente","ComFotoExistente","PequenoComIniciais","MedioSemFoto","Loading","Desabilitado"];export{e as ComFotoExistente,t as Desabilitado,r as Loading,s as MedioSemFoto,o as PequenoComIniciais,a as UploadFotoPaciente,k as __namedExportsOrder,h as default};
