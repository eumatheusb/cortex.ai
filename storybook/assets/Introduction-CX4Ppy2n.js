import{j as e}from"./iframe-Sy2gFGJ3.js";import{useMDXComponents as r}from"./index-BTuBFUt4.js";import"./preload-helper-PPVm8Dsz.js";function o(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(n.h1,{id:"cortex-design-system",children:"Cortex Design System"}),`
`,e.jsx("p",{style:{fontSize:18,color:"#94A3B8",marginTop:8},children:e.jsxs(n.p,{children:["O sistema de componentes da plataforma ",e.jsx("strong",{style:{color:"#F7F9FC"},children:"Cortex"})," — sistema operacional de crescimento para dentistas."]})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"o-que-é-o-cortex-ds",children:"O que é o Cortex DS"}),`
`,e.jsx(n.p,{children:"O Cortex DS é uma biblioteca de componentes React construída com:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Next.js 14+ App Router"})," — arquitetura de produção"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tailwind CSS v4"})," + CSS Variables — tokens integrados"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Framer Motion"})," — animações premium e microinterações"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"shadcn/ui"})," (owned code) — componentes sob controle total"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TanStack Table"})," — tabelas com sort, filter, seleção e paginação"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Radix UI"})," — primitivas acessíveis (Dialog, Label, Tooltip)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lucide React"})," — ícones consistentes"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Todos os componentes são ",e.jsx(n.strong,{children:"dark mode first"}),", ",e.jsx(n.strong,{children:"WCAG AA compliant"})," e construídos sobre os tokens da marca Cortex."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"paleta-de-tokens",children:"Paleta de Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token | Hex | Uso |
|-------|-----|-----|
| `,e.jsx(n.code,{children:"void"})," | ",e.jsx(n.code,{children:"#090E1A"}),` | Background principal |
| `,e.jsx(n.code,{children:"ink"})," | ",e.jsx(n.code,{children:"#0C1220"}),` | Background secundário |
| `,e.jsx(n.code,{children:"dusk"})," | ",e.jsx(n.code,{children:"#1B2845"}),` | Cards, painéis |
| `,e.jsx(n.code,{children:"steel"})," | ",e.jsx(n.code,{children:"#1E2533"}),` | Bordas, divisores |
| `,e.jsx(n.code,{children:"ash"})," | ",e.jsx(n.code,{children:"#4A5568"}),` | Texto desabilitado |
| `,e.jsx(n.code,{children:"mist"})," | ",e.jsx(n.code,{children:"#94A3B8"}),` | Labels, captions |
| `,e.jsx(n.code,{children:"white"})," | ",e.jsx(n.code,{children:"#F7F9FC"}),` | Texto principal |
| `,e.jsx(n.code,{children:"signal"})," | ",e.jsx(n.code,{children:"#4D71FA"}),` | Accent — CTAs, links |
| `,e.jsx(n.code,{children:"success"})," | ",e.jsx(n.code,{children:"#22C55E"}),` | Estado positivo |
| `,e.jsx(n.code,{children:"warning"})," | ",e.jsx(n.code,{children:"#F59E0B"}),` | Estado de atenção |
| `,e.jsx(n.code,{children:"error"})," | ",e.jsx(n.code,{children:"#F43F5E"})," | Estado de erro |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tipografia",children:"Tipografia"}),`
`,e.jsxs(n.p,{children:[`| Família | Uso |
|---------|-----|
| Space Grotesk | Títulos, headings, display (`,e.jsx(n.code,{children:"font-display"}),`) |
| Inter | Corpo, UI, labels (default) |
| JetBrains Mono | Valores numéricos, código (`,e.jsx(n.code,{children:"font-mono"}),") |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"estrutura-atômica",children:"Estrutura Atômica"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`components/
├── atoms/          # Button, Input, Badge, Avatar, Spinner, Tag, Label, Tooltip
├── molecules/      # Card, Alert, Stat, FormField, Breadcrumb, Pagination
├── organisms/      # Modal, Sidebar, PageHeader, EmptyState, DataTable
└── templates/      # DashboardTemplate, CRMListTemplate, DetailTemplate, AuthTemplate
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"uso-básico",children:"Uso básico"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, Badge, Card, CardContent } from '@/components'

export function Example() {
  return (
    <Card variant="interactive">
      <CardContent>
        <Badge variant="success" dot>Ativo</Badge>
        <Button variant="primary">Novo lead</Button>
      </CardContent>
    </Card>
  )
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Cortex DS v1.0 — Março 2026 · Grupo Fábio Avelar"})})]})}function c(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{c as default};
