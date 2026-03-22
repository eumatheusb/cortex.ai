import{r as m,j as o}from"./iframe-Sy2gFGJ3.js";import{F as r}from"./FileUpload-ByTLTP5_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-44l4s4mB.js";import"./proxy-CrbPgRsh.js";import"./use-presence-CKHZRRw-.js";import"./upload-xKV16Sai.js";import"./createLucideIcon-D_RK-bSM.js";import"./index-BQdhF_pr.js";import"./file-text-CqIGGm1G.js";import"./circle-alert-gwLM68A0.js";import"./circle-check-Blqt4QfW.js";import"./x-B2qA_yUf.js";const E={title:"Molecules/FileUpload",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean"},multiple:{control:"boolean"},maxSizeMB:{control:"number"},maxFiles:{control:"number"}},decorators:[e=>o.jsx("div",{className:"w-[440px]",children:o.jsx(e,{})})]},t={name:"Upload de Raio-X",render:()=>{const[e,a]=m.useState([]);return o.jsx(r,{value:e,onChange:a,label:"Radiografia",hint:"Formatos aceitos: JPEG, PNG, DICOM",accept:"image/jpeg,image/png,.dcm",maxSizeMB:50,onUpload:async p=>{if(await new Promise(d=>setTimeout(d,1500)),Math.random()>.8)throw new Error("Falha")}})}},s={name:"Foto Intraoral",render:()=>{const[e,a]=m.useState([]);return o.jsx(r,{value:e,onChange:a,label:"Fotos Intraorais",hint:"Envie ate 6 fotos do protocolo fotografico",accept:"image/*",maxFiles:6,maxSizeMB:10,onUpload:async()=>{await new Promise(p=>setTimeout(p,1e3))}})}},i={name:"Documentos do Paciente",render:()=>{const[e,a]=m.useState([]);return o.jsx(r,{value:e,onChange:a,label:"Documentos",hint:"RG, CPF, comprovante de endereco",accept:".pdf,image/*",maxFiles:5,maxSizeMB:5})}},l={name:"Arquivo Unico",render:()=>{const[e,a]=m.useState([]);return o.jsx(r,{value:e,onChange:a,label:"Atestado Medico",multiple:!1,maxFiles:1,accept:".pdf",maxSizeMB:2})}},n={render:()=>o.jsx(r,{label:"Exame",error:"Arquivo obrigatorio para prosseguir",accept:"image/*,.pdf"})},c={args:{label:"Upload",disabled:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Upload de Raio-X',
  render: () => {
    const [files, setFiles] = useState<FileItem[]>([]);
    return <FileUpload value={files} onChange={setFiles} label="Radiografia" hint="Formatos aceitos: JPEG, PNG, DICOM" accept="image/jpeg,image/png,.dcm" maxSizeMB={50} onUpload={async file => {
      await new Promise(r => setTimeout(r, 1500));
      if (Math.random() > 0.8) throw new Error('Falha');
    }} />;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Foto Intraoral',
  render: () => {
    const [files, setFiles] = useState<FileItem[]>([]);
    return <FileUpload value={files} onChange={setFiles} label="Fotos Intraorais" hint="Envie ate 6 fotos do protocolo fotografico" accept="image/*" maxFiles={6} maxSizeMB={10} onUpload={async () => {
      await new Promise(r => setTimeout(r, 1000));
    }} />;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Documentos do Paciente',
  render: () => {
    const [files, setFiles] = useState<FileItem[]>([]);
    return <FileUpload value={files} onChange={setFiles} label="Documentos" hint="RG, CPF, comprovante de endereco" accept=".pdf,image/*" maxFiles={5} maxSizeMB={5} />;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Arquivo Unico',
  render: () => {
    const [files, setFiles] = useState<FileItem[]>([]);
    return <FileUpload value={files} onChange={setFiles} label="Atestado Medico" multiple={false} maxFiles={1} accept=".pdf" maxSizeMB={2} />;
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <FileUpload label="Exame" error="Arquivo obrigatorio para prosseguir" accept="image/*,.pdf" />
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};const C=["UploadRaioX","FotoIntraoral","DocumentosPaciente","SingleFile","WithError","Disabled"];export{c as Disabled,i as DocumentosPaciente,s as FotoIntraoral,l as SingleFile,t as UploadRaioX,n as WithError,C as __namedExportsOrder,E as default};
