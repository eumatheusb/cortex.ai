import{j as e,r as B}from"./iframe-Sy2gFGJ3.js";import{M as v,a as r,b as l,c as s,d as t,e as i,f as M}from"./Modal-CjfBB0Wc.js";import{B as a}from"./Button-Cw3d5KgM.js";import{I as h}from"./Input-_vBWQZEw.js";import{S as D,a as N,b as y,c as T,d as j}from"./Select-D4U7xN8E.js";import{T as z}from"./Textarea-DDoSZ3oi.js";import{A as I}from"./Alert-Bk3Dw-_I.js";import{M as f}from"./mail-Dw-7_K0y.js";import{B as F}from"./building-2-CBdJemfA.js";import{P as E}from"./plus-uf6RnP68.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjmGKbig.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-DtrQf-Nc.js";import"./index-D6MEHyiY.js";import"./index-C-FDDq2f.js";import"./Combination-hEgrkgqT.js";import"./index-B90I_nem.js";import"./index-DT1ZH9rQ.js";import"./index-CBH1vlMd.js";import"./utils-44l4s4mB.js";import"./x-B2qA_yUf.js";import"./createLucideIcon-D_RK-bSM.js";import"./index-BQdhF_pr.js";import"./use-presence-CKHZRRw-.js";import"./proxy-CrbPgRsh.js";import"./loader-circle-BvJOM1Fy.js";import"./index-BdQq_4o_.js";import"./index-BmPT29Bj.js";import"./index-Bl9tSzGv.js";import"./index-iJKTUraZ.js";import"./index-hCnxOtR-.js";import"./index-CuGgj0mu.js";import"./chevron-down-blV75o58.js";import"./check-C92KmPKj.js";import"./info-Uxv0kkki.js";import"./circle-x-Jc4l0wu6.js";import"./triangle-alert-U_wi5efy.js";import"./circle-check-Blqt4QfW.js";const fe={title:"Organisms/Modal",component:v,parameters:{layout:"centered"},tags:["autodocs"]};function d({label:o,size:n,children:b,trigger:S}){const[C,g]=B.useState(!1);return e.jsxs(e.Fragment,{children:[S??e.jsx(a,{variant:"primary",onClick:()=>g(!0),children:o}),e.jsx(v,{open:C,onOpenChange:g,size:n,children:b})]})}const c={render:()=>e.jsxs(d,{label:"Novo lead",size:"md",children:[e.jsxs(r,{children:[e.jsx(l,{children:"Novo lead"}),e.jsx(s,{children:"Preencha os dados do lead para continuar."})]}),e.jsx(t,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(h,{label:"Nome",placeholder:"Dr. Fulano de Tal",leftIcon:e.jsx(f,{size:15}),required:!0}),e.jsx(h,{label:"Clínica",placeholder:"Sorriso Total",leftIcon:e.jsx(F,{size:15})}),e.jsxs(D,{children:[e.jsx(N,{children:e.jsx(y,{placeholder:"Status inicial"})}),e.jsxs(T,{children:[e.jsx(j,{value:"novo",children:"Novo"}),e.jsx(j,{value:"qualificado",children:"Qualificado"}),e.jsx(j,{value:"proposta",children:"Proposta"})]})]}),e.jsx(z,{label:"Observações",placeholder:"Notas sobre o lead...",rows:3})]})}),e.jsxs(i,{children:[e.jsx(M,{asChild:!0,children:e.jsx(a,{variant:"ghost",children:"Cancelar"})}),e.jsx(a,{variant:"primary",leftIcon:e.jsx(E,{size:15}),children:"Salvar lead"})]})]})},m={render:()=>e.jsx("div",{className:"flex flex-wrap gap-3",children:["sm","md","lg","xl","2xl"].map(o=>e.jsxs(d,{label:`Abrir ${o}`,size:o,children:[e.jsxs(r,{children:[e.jsxs(l,{children:["Modal — ",o]}),e.jsxs(s,{children:["Exemplo do tamanho ",e.jsx("strong",{children:o}),"."]})]}),e.jsx(t,{children:e.jsxs("p",{className:"text-sm text-mist",children:["Este modal usa ",e.jsxs("code",{className:"text-signal bg-dusk px-1 rounded",children:['size="',o,'"']}),". Use ",e.jsx("code",{className:"text-signal bg-dusk px-1 rounded",children:"md"})," para formulários padrão,"," ",e.jsx("code",{className:"text-signal bg-dusk px-1 rounded",children:"lg/xl"})," para conteúdo maior."]})}),e.jsx(i,{children:e.jsx(M,{asChild:!0,children:e.jsx(a,{variant:"ghost",children:"Fechar"})})})]},o))})},p={render:()=>e.jsxs(d,{label:"Excluir lead",size:"sm",trigger:e.jsx(a,{variant:"destructive",children:"Excluir lead"}),children:[e.jsxs(r,{children:[e.jsx(l,{children:"Excluir lead"}),e.jsx(s,{children:"Esta ação não pode ser desfeita."})]}),e.jsx(t,{children:e.jsxs(I,{variant:"error",title:"Atenção",children:["O lead ",e.jsx("strong",{children:"Dra. Camila Rocha"})," e todos os seus dados serão removidos permanentemente."]})}),e.jsxs(i,{children:[e.jsx(M,{asChild:!0,children:e.jsx(a,{variant:"ghost",children:"Cancelar"})}),e.jsx(a,{variant:"destructive",children:"Confirmar exclusão"})]})]}),name:"Destrutivo — confirmação"},u={render:()=>e.jsxs(d,{label:"Modal com scroll",size:"md",children:[e.jsxs(r,{children:[e.jsx(l,{children:"Termos de uso"}),e.jsx(s,{children:"Leia com atenção antes de continuar."})]}),e.jsx(t,{children:e.jsx("div",{className:"flex flex-col gap-4 text-sm text-mist leading-relaxed",children:Array.from({length:8}).map((o,n)=>e.jsxs("p",{children:[e.jsxs("span",{className:"text-white font-medium",children:["Cláusula ",n+1,"."]})," ","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."]},n))})}),e.jsxs(i,{children:[e.jsx(M,{asChild:!0,children:e.jsx(a,{variant:"ghost",children:"Recusar"})}),e.jsx(a,{variant:"primary",children:"Aceitar e continuar"})]})]}),name:"Com scroll no body"},x={render:()=>e.jsxs(d,{label:"Abrir modal",size:"sm",children:[e.jsxs(r,{showClose:!1,children:[e.jsx(l,{children:"Sessão expirada"}),e.jsx(s,{children:"Faça login novamente para continuar."})]}),e.jsx(t,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(h,{label:"E-mail",placeholder:"voce@clinica.com",leftIcon:e.jsx(f,{size:15})}),e.jsx(h,{label:"Senha",type:"password",placeholder:"••••••••"})]})}),e.jsx(i,{children:e.jsx(a,{variant:"primary",className:"w-full",children:"Entrar"})})]}),name:"Sem botão de fechar"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ModalDemo label="Novo lead" size="md">
      <ModalHeader>
        <ModalTitle>Novo lead</ModalTitle>
        <ModalDescription>Preencha os dados do lead para continuar.</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <Input label="Nome" placeholder="Dr. Fulano de Tal" leftIcon={<Mail size={15} />} required />
          <Input label="Clínica" placeholder="Sorriso Total" leftIcon={<Building2 size={15} />} />
          <Select>
            <SelectTrigger><SelectValue placeholder="Status inicial" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="novo">Novo</SelectItem>
              <SelectItem value="qualificado">Qualificado</SelectItem>
              <SelectItem value="proposta">Proposta</SelectItem>
            </SelectContent>
          </Select>
          <Textarea label="Observações" placeholder="Notas sobre o lead..." rows={3} />
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild><Button variant="ghost">Cancelar</Button></ModalClose>
        <Button variant="primary" leftIcon={<Plus size={15} />}>Salvar lead</Button>
      </ModalFooter>
    </ModalDemo>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      {(['sm', 'md', 'lg', 'xl', '2xl'] as const).map(size => <ModalDemo key={size} label={\`Abrir \${size}\`} size={size}>
          <ModalHeader>
            <ModalTitle>Modal — {size}</ModalTitle>
            <ModalDescription>Exemplo do tamanho <strong>{size}</strong>.</ModalDescription>
          </ModalHeader>
          <ModalBody>
            <p className="text-sm text-mist">
              Este modal usa <code className="text-signal bg-dusk px-1 rounded">size="{size}"</code>.
              Use <code className="text-signal bg-dusk px-1 rounded">md</code> para formulários padrão,{' '}
              <code className="text-signal bg-dusk px-1 rounded">lg/xl</code> para conteúdo maior.
            </p>
          </ModalBody>
          <ModalFooter>
            <ModalClose asChild><Button variant="ghost">Fechar</Button></ModalClose>
          </ModalFooter>
        </ModalDemo>)}
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ModalDemo label="Excluir lead" size="sm" trigger={<Button variant="destructive">Excluir lead</Button>}>
      <ModalHeader>
        <ModalTitle>Excluir lead</ModalTitle>
        <ModalDescription>Esta ação não pode ser desfeita.</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <Alert variant="error" title="Atenção">
          O lead <strong>Dra. Camila Rocha</strong> e todos os seus dados serão removidos permanentemente.
        </Alert>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild><Button variant="ghost">Cancelar</Button></ModalClose>
        <Button variant="destructive">Confirmar exclusão</Button>
      </ModalFooter>
    </ModalDemo>,
  name: 'Destrutivo — confirmação'
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ModalDemo label="Modal com scroll" size="md">
      <ModalHeader>
        <ModalTitle>Termos de uso</ModalTitle>
        <ModalDescription>Leia com atenção antes de continuar.</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4 text-sm text-mist leading-relaxed">
          {Array.from({
          length: 8
        }).map((_, i) => <p key={i}>
              <span className="text-white font-medium">Cláusula {i + 1}.</span>{' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>)}
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalClose asChild><Button variant="ghost">Recusar</Button></ModalClose>
        <Button variant="primary">Aceitar e continuar</Button>
      </ModalFooter>
    </ModalDemo>,
  name: 'Com scroll no body'
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ModalDemo label="Abrir modal" size="sm">
      <ModalHeader showClose={false}>
        <ModalTitle>Sessão expirada</ModalTitle>
        <ModalDescription>Faça login novamente para continuar.</ModalDescription>
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-4">
          <Input label="E-mail" placeholder="voce@clinica.com" leftIcon={<Mail size={15} />} />
          <Input label="Senha" type="password" placeholder="••••••••" />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button variant="primary" className="w-full">Entrar</Button>
      </ModalFooter>
    </ModalDemo>,
  name: 'Sem botão de fechar'
}`,...x.parameters?.docs?.source}}};const be=["Default","Tamanhos","Destrutivo","ComScroll","SemBotaoFechar"];export{u as ComScroll,c as Default,p as Destrutivo,x as SemBotaoFechar,m as Tamanhos,be as __namedExportsOrder,fe as default};
