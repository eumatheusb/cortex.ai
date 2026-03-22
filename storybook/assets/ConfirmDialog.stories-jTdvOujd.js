import{r as n,j as e}from"./iframe-Sy2gFGJ3.js";import{C as r}from"./ConfirmDialog-BcqpJuXB.js";import{B as l}from"./Button-Cw3d5KgM.js";import{A as C}from"./Alert-Bk3Dw-_I.js";import{C as f}from"./circle-x-Jc4l0wu6.js";import{T as g}from"./triangle-alert-U_wi5efy.js";import{T as v}from"./trash-2-DKdoHUIC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-CjmGKbig.js";import"./index-DtrQf-Nc.js";import"./index-D6MEHyiY.js";import"./index-C-FDDq2f.js";import"./Combination-hEgrkgqT.js";import"./index-B90I_nem.js";import"./index-DT1ZH9rQ.js";import"./index-CBH1vlMd.js";import"./utils-44l4s4mB.js";import"./index-BQdhF_pr.js";import"./use-presence-CKHZRRw-.js";import"./proxy-CrbPgRsh.js";import"./info-Uxv0kkki.js";import"./createLucideIcon-D_RK-bSM.js";import"./loader-circle-BvJOM1Fy.js";import"./x-B2qA_yUf.js";import"./circle-check-Blqt4QfW.js";const K={title:"Molecules/ConfirmDialog",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>{const[o,a]=n.useState(!1),[p,m]=n.useState(!1),d=async()=>{m(!0),await new Promise(u=>setTimeout(u,2e3)),m(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"destructive",leftIcon:e.jsx(v,{size:15}),onClick:()=>a(!0),children:"Excluir paciente"}),e.jsx(r,{open:o,onOpenChange:a,variant:"danger",title:"Excluir paciente?",description:"Esta acao e irreversivel. Todos os dados do paciente, historico de consultas e documentos serao permanentemente removidos.",confirmLabel:"Sim, excluir",cancelLabel:"Manter paciente",onConfirm:d,loading:p})]})},name:"Excluir paciente"},s={render:()=>{const[o,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"secondary",leftIcon:e.jsx(f,{size:15}),onClick:()=>a(!0),children:"Cancelar consulta"}),e.jsx(r,{open:o,onOpenChange:a,variant:"warning",title:"Cancelar consulta?",description:"A consulta de Dra. Camila Rocha agendada para 28/03/2026 as 14h sera cancelada. O paciente sera notificado por e-mail.",confirmLabel:"Cancelar consulta",cancelLabel:"Manter",onConfirm:()=>{},icon:e.jsx(g,{size:20})})]})},name:"Cancelar consulta"},i={render:()=>{const[o,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"primary",onClick:()=>a(!0),children:"Enviar orcamento"}),e.jsx(r,{open:o,onOpenChange:a,variant:"info",title:"Enviar orcamento?",description:"O orcamento sera enviado por e-mail para o paciente. Voce podera acompanhar o status na aba de orcamentos.",confirmLabel:"Enviar",cancelLabel:"Revisar",onConfirm:()=>{}})]})},name:"Confirmar envio"},c={render:()=>{const[o,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"destructive",onClick:()=>a(!0),children:"Excluir leads em massa"}),e.jsx(r,{open:o,onOpenChange:a,variant:"danger",title:"Excluir 12 leads?",description:"Os leads selecionados serao permanentemente removidos.",confirmLabel:"Excluir todos",onConfirm:()=>{},children:e.jsx(C,{variant:"error",title:"Atencao",children:"Esta acao nao pode ser desfeita. Voce esta prestes a excluir 12 leads e todos os seus dados associados."})})]})},name:"Com conteudo customizado"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleConfirm = async () => {
      setLoading(true);
      await new Promise(r => setTimeout(r, 2000));
      setLoading(false);
    };
    return <>
        <Button variant="destructive" leftIcon={<Trash2 size={15} />} onClick={() => setOpen(true)}>
          Excluir paciente
        </Button>
        <ConfirmDialog open={open} onOpenChange={setOpen} variant="danger" title="Excluir paciente?" description="Esta acao e irreversivel. Todos os dados do paciente, historico de consultas e documentos serao permanentemente removidos." confirmLabel="Sim, excluir" cancelLabel="Manter paciente" onConfirm={handleConfirm} loading={loading} />
      </>;
  },
  name: 'Excluir paciente'
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button variant="secondary" leftIcon={<XCircle size={15} />} onClick={() => setOpen(true)}>
          Cancelar consulta
        </Button>
        <ConfirmDialog open={open} onOpenChange={setOpen} variant="warning" title="Cancelar consulta?" description="A consulta de Dra. Camila Rocha agendada para 28/03/2026 as 14h sera cancelada. O paciente sera notificado por e-mail." confirmLabel="Cancelar consulta" cancelLabel="Manter" onConfirm={() => {}} icon={<AlertTriangle size={20} />} />
      </>;
  },
  name: 'Cancelar consulta'
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Enviar orcamento
        </Button>
        <ConfirmDialog open={open} onOpenChange={setOpen} variant="info" title="Enviar orcamento?" description="O orcamento sera enviado por e-mail para o paciente. Voce podera acompanhar o status na aba de orcamentos." confirmLabel="Enviar" cancelLabel="Revisar" onConfirm={() => {}} />
      </>;
  },
  name: 'Confirmar envio'
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Excluir leads em massa
        </Button>
        <ConfirmDialog open={open} onOpenChange={setOpen} variant="danger" title="Excluir 12 leads?" description="Os leads selecionados serao permanentemente removidos." confirmLabel="Excluir todos" onConfirm={() => {}}>
          <Alert variant="error" title="Atencao">
            Esta acao nao pode ser desfeita. Voce esta prestes a excluir 12 leads e todos os seus dados associados.
          </Alert>
        </ConfirmDialog>
      </>;
  },
  name: 'Com conteudo customizado'
}`,...c.parameters?.docs?.source}}};const N=["ExcluirPaciente","CancelarConsulta","ConfirmarAcao","ComConteudoCustom"];export{s as CancelarConsulta,c as ComConteudoCustom,i as ConfirmarAcao,t as ExcluirPaciente,N as __namedExportsOrder,K as default};
