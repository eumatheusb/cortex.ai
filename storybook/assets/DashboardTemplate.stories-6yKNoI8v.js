import{j as e}from"./iframe-Sy2gFGJ3.js";import{c as n}from"./utils-44l4s4mB.js";import{S as f}from"./Sidebar-Dp1EuqOu.js";import{m as h}from"./proxy-CrbPgRsh.js";import{P as g}from"./PageHeader-CBRcqjtT.js";import{a as b,S as t}from"./Stat-XbZdCJDB.js";import{C as l,a as N,b as j,d as w}from"./Card-BzvBjAML.js";import{B as C}from"./Badge-X57OZ0QY.js";import{A as o}from"./Avatar-DY5rXuPS.js";import{B as m}from"./Button-Cw3d5KgM.js";import{I as y}from"./Input-_vBWQZEw.js";import{T as d}from"./trending-up-Bs1SttDU.js";import{U as c}from"./users-B1LTeiEI.js";import{D as p}from"./dollar-sign-CR9WNfou.js";import{a as R}from"./trending-down-D1n0kLdf.js";import{S}from"./search-BFJJvwjI.js";import{B as T}from"./bell-CVKoNlR7.js";import{L as z}from"./layout-dashboard-BOvEdERx.js";import{C as D}from"./chart-column-D_IDMIHe.js";import{S as $}from"./settings-DfLQBH76.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-MfjyU_4n.js";import"./index-DvBiN_jY.js";import"./index-oOhmCGhA.js";import"./index-rfoyWmEq.js";import"./index-D6MEHyiY.js";import"./index-C-FDDq2f.js";import"./index-DtrQf-Nc.js";import"./index-Bl9tSzGv.js";import"./index-iJKTUraZ.js";import"./index-B90I_nem.js";import"./index-DT1ZH9rQ.js";import"./index-CuGgj0mu.js";import"./index-BQdhF_pr.js";import"./use-presence-CKHZRRw-.js";import"./chevron-right-CVjuRCxC.js";import"./createLucideIcon-D_RK-bSM.js";import"./chevron-left-CnzWn-l5.js";import"./Breadcrumb-Bry6prGf.js";import"./index-CBH1vlMd.js";import"./minus-B1JpuK0J.js";import"./loader-circle-BvJOM1Fy.js";function r({sidebar:a,header:s,children:x,className:u,contentClass:v}){return e.jsxs("div",{className:n("flex h-screen overflow-hidden bg-void",u),children:[e.jsx(f,{...a}),e.jsxs("div",{className:"flex flex-col flex-1 min-w-0 overflow-hidden",children:[s&&e.jsx("header",{className:"shrink-0 h-16 flex items-center px-6 border-b border-steel bg-ink/60 backdrop-blur-sm z-10",children:s}),e.jsx(h.main,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.25,ease:[0,0,.2,1]},className:n("flex-1 overflow-y-auto p-6",v),children:x})]})]})}r.__docgenInfo={description:"",methods:[],displayName:"DashboardTemplate",props:{sidebar:{required:!0,tsType:{name:"Omit",elements:[{name:"SidebarProps"},{name:"literal",value:"'className'"}],raw:"Omit<SidebarProps, 'className'>"},description:""},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},contentClass:{required:!1,tsType:{name:"string"},description:""}}};const k=[{id:"dashboard",label:"Dashboard",icon:e.jsx(z,{size:18}),href:"#"},{id:"leads",label:"Leads",icon:e.jsx(c,{size:18}),href:"#",badge:24,badgeVariant:"primary"},{id:"crm",label:"CRM",icon:e.jsx(D,{size:18}),href:"#"},{id:"faturamento",label:"Faturamento",icon:e.jsx(p,{size:18}),href:"#"},{id:"settings",label:"Configurações",icon:e.jsx($,{size:18}),href:"#"}],L=e.jsxs("span",{className:"font-display font-bold text-xl tracking-tight text-white",children:["Cor",e.jsx("span",{className:"text-signal",children:"tex"})]}),V=e.jsx("span",{className:"font-display font-bold text-xl text-signal",children:"Cx"}),B=e.jsxs("div",{className:"flex items-center justify-between w-full gap-4",children:[e.jsx(y,{placeholder:"Buscar clínicas, leads...",leftIcon:e.jsx(S,{size:15}),className:"max-w-sm"}),e.jsxs("div",{className:"flex items-center gap-3 ml-auto",children:[e.jsx(m,{variant:"ghost",size:"icon","aria-label":"Notificações",children:e.jsx(T,{size:18})}),e.jsx(o,{name:"Fábio Avelar",size:"sm",status:"online"})]})]}),Ce={title:"Templates/DashboardTemplate",component:r,parameters:{layout:"fullscreen"}},i={render:()=>e.jsx(r,{sidebar:{items:k,activeId:"dashboard",logo:L,logoCollapsed:V},header:B,children:e.jsxs("div",{className:"flex flex-col gap-6 max-w-7xl mx-auto",children:[e.jsx(g,{title:"Dashboard",description:"Visão geral de performance da sua clínica.",badge:"Ao vivo",badgeVariant:"success",actions:e.jsx(m,{variant:"primary",leftIcon:e.jsx(d,{size:16}),children:"Ver relatório"})}),e.jsxs(b,{cols:4,children:[e.jsx(t,{label:"Leads gerados",value:"1.284",trend:"up",trendValue:"+18%",trendLabel:"este mês",icon:e.jsx(c,{size:18})}),e.jsx(t,{label:"Faturamento",value:"R$48.2K",trend:"up",trendValue:"+12.4%",trendLabel:"vs mês anterior",variant:"signal",icon:e.jsx(p,{size:18})}),e.jsx(t,{label:"Taxa conversão",value:"6.8%",trend:"down",trendValue:"-0.3pp",trendLabel:"vs semana",icon:e.jsx(R,{size:18})}),e.jsx(t,{label:"Ticket médio",value:"R$1.240",trend:"up",trendValue:"+R$80",trendLabel:"vs mês anterior",icon:e.jsx(d,{size:18})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[e.jsxs(l,{className:"lg:col-span-2",children:[e.jsx(N,{children:e.jsx(j,{children:"Leads recentes"})}),e.jsx(w,{children:e.jsx("div",{className:"flex flex-col divide-y divide-steel",children:[{name:"Dra. Camila Rocha",clinic:"OdontoVida SP",value:"R$3.200",status:"Fechado",variant:"success"},{name:"Dr. Rodrigo Lima",clinic:"Sorriso Total",value:"R$2.800",status:"Proposta",variant:"warning"},{name:"Dra. Fernanda Costa",clinic:"Clínica Bella",value:"R$5.100",status:"Qualif.",variant:"primary"},{name:"Dr. Marcelo Andrade",clinic:"DenteSã MG",value:"R$1.900",status:"Novo",variant:"default"}].map((a,s)=>e.jsxs("div",{className:"flex items-center gap-3 py-3",children:[e.jsx(o,{name:a.name,size:"sm"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-white truncate",children:a.name}),e.jsx("p",{className:"text-xs text-mist",children:a.clinic})]}),e.jsx("p",{className:"text-sm font-mono font-medium text-white shrink-0",children:a.value}),e.jsx(C,{variant:a.variant,size:"sm",children:a.status})]},s))})})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(l,{variant:"signal",padding:"md",children:[e.jsx("p",{className:"font-display text-xs font-semibold uppercase tracking-wider text-signal-light mb-3",children:"Meta do mês"}),e.jsx("p",{className:"font-display font-bold text-3xl text-white",children:"68%"}),e.jsx("div",{className:"mt-3 h-1.5 rounded-full bg-signal/20",children:e.jsx("div",{className:"h-full w-[68%] rounded-full bg-signal"})}),e.jsx("p",{className:"text-xs text-mist mt-2",children:"R$48.2K de R$70K"})]}),e.jsxs(l,{padding:"md",children:[e.jsx("p",{className:"font-display text-xs font-semibold uppercase tracking-wider text-mist mb-3",children:"Funil de vendas"}),[{label:"Novos leads",value:284,pct:100},{label:"Qualificados",value:142,pct:50},{label:"Propostas",value:68,pct:24},{label:"Fechados",value:19,pct:7}].map((a,s)=>e.jsxs("div",{className:"flex items-center gap-3 mb-2.5 last:mb-0",children:[e.jsx("p",{className:"text-xs text-mist w-24 shrink-0",children:a.label}),e.jsx("div",{className:"flex-1 h-1 rounded-full bg-steel",children:e.jsx("div",{className:"h-full rounded-full bg-signal",style:{width:`${a.pct}%`}})}),e.jsx("p",{className:"text-xs font-mono text-white w-8 text-right",children:a.value})]},s))]})]})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardTemplate sidebar={{
    items: navItems,
    activeId: 'dashboard',
    logo: logoFull,
    logoCollapsed
  }} header={topBar}>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">

        {/* Page Header */}
        <PageHeader title="Dashboard" description="Visão geral de performance da sua clínica." badge="Ao vivo" badgeVariant="success" actions={<Button variant="primary" leftIcon={<TrendingUp size={16} />}>
              Ver relatório
            </Button>} />

        {/* Stats */}
        <StatGrid cols={4}>
          <Stat label="Leads gerados" value="1.284" trend="up" trendValue="+18%" trendLabel="este mês" icon={<Users size={18} />} />
          <Stat label="Faturamento" value="R$48.2K" trend="up" trendValue="+12.4%" trendLabel="vs mês anterior" variant="signal" icon={<DollarSign size={18} />} />
          <Stat label="Taxa conversão" value="6.8%" trend="down" trendValue="-0.3pp" trendLabel="vs semana" icon={<Target size={18} />} />
          <Stat label="Ticket médio" value="R$1.240" trend="up" trendValue="+R$80" trendLabel="vs mês anterior" icon={<TrendingUp size={18} />} />
        </StatGrid>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Leads recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col divide-y divide-steel">
                {[{
                name: 'Dra. Camila Rocha',
                clinic: 'OdontoVida SP',
                value: 'R$3.200',
                status: 'Fechado',
                variant: 'success'
              }, {
                name: 'Dr. Rodrigo Lima',
                clinic: 'Sorriso Total',
                value: 'R$2.800',
                status: 'Proposta',
                variant: 'warning'
              }, {
                name: 'Dra. Fernanda Costa',
                clinic: 'Clínica Bella',
                value: 'R$5.100',
                status: 'Qualif.',
                variant: 'primary'
              }, {
                name: 'Dr. Marcelo Andrade',
                clinic: 'DenteSã MG',
                value: 'R$1.900',
                status: 'Novo',
                variant: 'default'
              }].map((lead, i) => <div key={i} className="flex items-center gap-3 py-3">
                    <Avatar name={lead.name} size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{lead.name}</p>
                      <p className="text-xs text-mist">{lead.clinic}</p>
                    </div>
                    <p className="text-sm font-mono font-medium text-white shrink-0">{lead.value}</p>
                    <Badge variant={lead.variant as any} size="sm">{lead.status}</Badge>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* Quick stats */}
          <div className="flex flex-col gap-4">
            <Card variant="signal" padding="md">
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-signal-light mb-3">Meta do mês</p>
              <p className="font-display font-bold text-3xl text-white">68%</p>
              <div className="mt-3 h-1.5 rounded-full bg-signal/20">
                <div className="h-full w-[68%] rounded-full bg-signal" />
              </div>
              <p className="text-xs text-mist mt-2">R$48.2K de R$70K</p>
            </Card>

            <Card padding="md">
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-mist mb-3">Funil de vendas</p>
              {[{
              label: 'Novos leads',
              value: 284,
              pct: 100
            }, {
              label: 'Qualificados',
              value: 142,
              pct: 50
            }, {
              label: 'Propostas',
              value: 68,
              pct: 24
            }, {
              label: 'Fechados',
              value: 19,
              pct: 7
            }].map((s, i) => <div key={i} className="flex items-center gap-3 mb-2.5 last:mb-0">
                  <p className="text-xs text-mist w-24 shrink-0">{s.label}</p>
                  <div className="flex-1 h-1 rounded-full bg-steel">
                    <div className="h-full rounded-full bg-signal" style={{
                  width: \`\${s.pct}%\`
                }} />
                  </div>
                  <p className="text-xs font-mono text-white w-8 text-right">{s.value}</p>
                </div>)}
            </Card>
          </div>
        </div>
      </div>
    </DashboardTemplate>
}`,...i.parameters?.docs?.source}}};const ye=["CortexDashboard"];export{i as CortexDashboard,ye as __namedExportsOrder,Ce as default};
