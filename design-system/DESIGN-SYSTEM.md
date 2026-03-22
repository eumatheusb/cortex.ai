# Cortex Design System

> Sistema de componentes da plataforma Cortex — Sistema operacional de crescimento para dentistas.

**Versao:** 2.0.0
**Data:** 2026-03-22
**Status:** Complete — todos os 7 phases entregues (59 componentes)

---

## Visao Geral

O Cortex DS e uma biblioteca de componentes React construida sobre os tokens da marca Cortex. Foi projetada para ser **dark mode first** (com light mode support), **WCAG AA compliant**, e visualmente premium — transmitindo tecnologia e autoridade.

### Principios de design

- **Dark Premium** — `void #090E1A` como canvas principal, profundidade em camadas
- **Light Mode** — Tema alternativo para contextos especificos, invertendo a hierarquia de cores
- **Signal Blue** — `#4D71FA` como accent unico, hierarquia de acao clara
- **Motion with purpose** — Framer Motion apenas onde agrega percepcao de qualidade
- **Token-driven** — zero valores hardcoded, tudo via CSS variables
- **Owned code** — sem dependencia de bibliotecas de UI externas alem de primitivas Radix

---

## Stack Tecnica

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 14+ App Router |
| Estilos | Tailwind CSS v4 + CSS Variables |
| Variantes | class-variance-authority (CVA) |
| Animacoes | Framer Motion |
| Tabelas | TanStack Table v8 |
| Charts | Recharts |
| Primitivas | Radix UI (Dialog, Label, Tooltip, Select, Accordion, etc.) |
| Command | cmdk |
| Date Picker | react-day-picker |
| Drag and Drop | @dnd-kit/core + @dnd-kit/sortable |
| Icones | Lucide React |
| Tipografia | Space Grotesk (display) + Inter (body) + JetBrains Mono |
| Documentacao | Storybook 8 (CSF3 + autodocs) |
| Testes | Jest + @testing-library/react |

---

## Estrutura de Arquivos

```
outputs/design-system/cortex/
├── tokens/
│   ├── tokens.yaml           # 67 tokens W3C DTCG v1.0
│   ├── global.css            # CSS Variables + reset + dark/light modes
│   ├── tailwind.config.ts    # Tailwind v4 config com todos os tokens
│   └── index.ts              # TypeScript types (Colors, Typography, etc.)
│
├── components/
│   ├── utils.ts              # cn() = clsx + tailwind-merge
│   ├── index.ts              # Master barrel export
│   │
│   ├── atoms/                # 23 componentes primitivos
│   │   ├── Accordion/
│   │   ├── Avatar/
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Checkbox/
│   │   ├── Combobox/
│   │   ├── DatePicker/
│   │   ├── Input/
│   │   ├── Label/
│   │   ├── Logo/
│   │   ├── OTPInput/
│   │   ├── Popover/
│   │   ├── Progress/
│   │   ├── RadioGroup/
│   │   ├── Select/
│   │   ├── Skeleton/
│   │   ├── Slider/
│   │   ├── Spinner/
│   │   ├── Switch/
│   │   ├── Tag/
│   │   ├── Textarea/
│   │   ├── TimePicker/
│   │   └── Tooltip/
│   │
│   ├── molecules/            # 17 componentes compostos
│   │   ├── Alert/
│   │   ├── AvatarUpload/
│   │   ├── Breadcrumb/
│   │   ├── Card/
│   │   ├── ConfirmDialog/
│   │   ├── Drawer/
│   │   ├── DropdownMenu/
│   │   ├── FileUpload/
│   │   ├── FormField/
│   │   ├── KPICard/
│   │   ├── NavigationMenu/
│   │   ├── Pagination/
│   │   ├── ResizablePanels/
│   │   ├── Stat/
│   │   ├── Stepper/
│   │   ├── Tabs/
│   │   └── Toast/
│   │
│   ├── organisms/            # 15 blocos complexos
│   │   ├── Calendar/
│   │   ├── Charts/
│   │   │   ├── BarChart/
│   │   │   ├── FunnelChart/
│   │   │   ├── LineChart/
│   │   │   └── PieChart/
│   │   ├── CommandPalette/
│   │   ├── DataTable/
│   │   ├── EmptyState/
│   │   ├── KanbanBoard/
│   │   ├── Modal/
│   │   ├── NotificationCenter/
│   │   ├── PageHeader/
│   │   ├── Sidebar/
│   │   └── Timeline/
│   │
│   └── templates/            # 4 layouts de pagina
│       ├── AuthTemplate/
│       ├── CRMListTemplate/
│       ├── DashboardTemplate/
│       └── DetailTemplate/
│
├── .storybook/
│   ├── main.ts               # @storybook/nextjs, a11y addon, MDX support
│   └── preview.ts            # Default bg: cortex-dark, theme switcher
│
└── .state.yaml               # Phase tracking
```

---

## Tokens de Cor

### Base / Fundos

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-void` | `#090E1A` | Canvas principal — background de toda a aplicacao |
| `--color-ink` | `#0C1220` | Background secundario — navbars, headers |
| `--color-dusk` | `#1B2845` | Superficies — cards, paineis, modais |
| `--color-steel` | `#1E2533` | Bordas, divisores, separadores |
| `--color-ash` | `#4A5568` | Texto desabilitado, placeholders |
| `--color-mist` | `#94A3B8` | Labels, captions, metadata |
| `--color-white` | `#F7F9FC` | Texto principal sobre fundo escuro |

### Brand

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-signal` | `#4D71FA` | Accent primario — CTAs, links, highlights |
| `--color-signal-dark` | `#3558D4` | Hover state do signal |
| `--color-signal-light` | `#7B96FB` | Variante mais clara |
| `--color-signal-ghost` | `rgba(77,113,250,0.12)` | Background sutil |

### Semanticas

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-success` | `#22C55E` | Positivo, confirmado, ativo |
| `--color-warning` | `#F59E0B` | Atencao, pendente |
| `--color-error` | `#F43F5E` | Erro, destrutivo |
| `--color-info` | `#4D71FA` | Informativo (= signal) |

---

## Componentes

### Atoms (23)

| Componente | Variantes principais | Destaques |
|------------|---------------------|-----------|
| `Accordion` | single, multiple | collapsible, animated, disabled |
| `Avatar` | image/initials/fallback | status dot, AvatarGroup, gradient por nome |
| `Badge` | default, primary, success, warning, error, info, ghost | dot, count |
| `Button` | primary, secondary, ghost, outline, destructive, link | loading, icons, Framer whileTap |
| `Checkbox` | --- | label, hint, error, indeterminate |
| `Combobox` | --- | search, async, creatable, multi-select |
| `DatePicker` | --- | range, locale pt-BR, clearable, portal |
| `Input` | default, error, success | leftIcon, rightIcon, hint |
| `Label` | --- | required *, optional, hint |
| `Logo` | horizontal, icon, wordmark | static, loader, idle modes |
| `OTPInput` | --- | configurable length, autoFocus |
| `Popover` | --- | portal, animated, anchor |
| `Progress` | default, success, warning, error | showValue, label, CircularProgress |
| `RadioGroup` | --- | horizontal/vertical, hint, disabled |
| `Select` | --- | groups, separator, label, disabled |
| `Skeleton` | --- | SkeletonText, SkeletonAvatar, SkeletonCard |
| `Slider` | --- | range, step, min/max, label |
| `Spinner` | default, inverted, muted | SpinnerOverlay |
| `Switch` | sm, md, lg | label, disabled |
| `Tag` | default, primary, success, warning, error | removable + AnimatePresence |
| `Textarea` | --- | showCount, maxLength, auto-resize |
| `TimePicker` | --- | 12h/24h, step, clearable |
| `Tooltip` | top, right, bottom, left | portal, animado, delay |

### Molecules (17)

| Componente | Destaques |
|------------|-----------|
| `Alert` | 5 variantes, dismissivel com AnimatePresence, icone automatico |
| `AvatarUpload` | preview, crop, validacao de tipo/tamanho |
| `Breadcrumb` | aria-current, showHome, separador customizavel |
| `Card` | 6 variantes, hover lift no interactive, sub-components completos |
| `ConfirmDialog` | destructive variant, loading, custom actions |
| `Drawer` | 4 lados, overlay, sub-components, animated |
| `DropdownMenu` | checkbox items, shortcuts, groups, destructive |
| `FileUpload` | drag-and-drop, file list, preview, size limit |
| `FormField` | Label + Input compostos, FormSection com fieldset |
| `KPICard` | KPIGrid, trend, sparkline, valor animado |
| `NavigationMenu` | groups, links, icons, active indicator |
| `Pagination` | algoritmo smart de range, ellipsis, ARIA completo |
| `ResizablePanels` | horizontal/vertical, resize handle, collapsible |
| `Stat` | valor animado, trend up/down/neutral, StatGrid 2/3/4 colunas |
| `Stepper` | horizontal/vertical, step status, clickable |
| `Tabs` | badge, animated indicator, orientation |
| `Toast` | ToastProvider + useToast hook, 4 variantes, action button |

### Organisms (15)

| Componente | Destaques |
|------------|-----------|
| `BarChart` | Recharts, responsive, animated, tooltip, stacked |
| `Calendar` | month/week/day views, events, categories, navigation |
| `CommandPalette` | cmdk, search, keyboard nav, groups, shortcuts |
| `DataTable` | TanStack Table: sort, filter, selecao, paginacao, stagger rows |
| `EmptyState` | 3 tamanhos, acoes, SVG fallback, framer fade-up |
| `FunnelChart` | Recharts, conversion rates, step labels |
| `KanbanBoard` | @dnd-kit drag-and-drop, columns, cards |
| `LineChart` | Recharts, area fill, curved/linear, responsive |
| `Modal` | Radix Dialog, 6 tamanhos, overlay fade + content scale |
| `NotificationCenter` | categories, mark read, timestamps, animated list |
| `PageHeader` | title + badge + description + breadcrumb + meta + actions |
| `PieChart` | Recharts, donut variant, labels, responsive |
| `Sidebar` | Colapsivel 240px a 72px, context, tooltips collapsed, subnav, badge |
| `Timeline` | vertical layout, icons, types, timestamps |

### Templates (4)

| Template | Layout | Variantes |
|----------|--------|-----------|
| `DashboardTemplate` | Sidebar + TopBar + main scrollavel | --- |
| `CRMListTemplate` | PageHeader + Alert + DataTable | --- |
| `DetailTemplate` | Profile header + secoes + sidebar opcional | com/sem sidebar |
| `AuthTemplate` | Form centralizado ou split com painel decorativo | centered, split |

---

## Charts e Data Visualization

O Cortex DS inclui 4 componentes de chart construidos sobre **Recharts**, com tema dark automatico e tokens integrados:

- **BarChart** — graficos de barras (vertical/horizontal, stacked)
- **LineChart** — graficos de linha (area fill, curved/linear)
- **PieChart** — graficos de pizza/donut com labels
- **FunnelChart** — funil de conversao com taxas entre etapas

Todos os charts sao responsive, animated, e incluem tooltip + legend integrados. As cores seguem a paleta semantica do DS (signal, success, warning, error).

---

## Form Components Avancados

Alem de Input, Checkbox, RadioGroup e Select, o DS inclui:

- **Combobox** — search com autocomplete, async, creatable, multi-select (cmdk)
- **DatePicker** — seletor de data com range e locale pt-BR (react-day-picker)
- **TimePicker** — seletor de hora 12h/24h
- **OTPInput** — input de verificacao com N digitos
- **Slider** — range slider com step
- **FileUpload** — drag-and-drop com preview e lista de arquivos
- **AvatarUpload** — upload de avatar com crop e preview
- **Stepper** — wizard de etapas horizontal/vertical

---

## Acessibilidade

- **WCAG AA** em todos os pares de contraste
- `signal` (#4D71FA) sobre `white` (#F7F9FC): **4.8:1**
- `white` (#F7F9FC) sobre `void` (#090E1A): **18.9:1**
- `mist` (#94A3B8) sobre `void` (#090E1A): **5.2:1**
- Radix UI primitivas: Dialog, Label, Tooltip, Select, Accordion, AlertDialog com ARIA nativo
- `aria-label`, `aria-current`, `aria-live` implementados nos componentes criticos
- Keyboard navigation em CommandPalette, KanbanBoard, Tabs, NavigationMenu

---

## Como usar

```bash
# Importar componentes pelo barrel export
import { Button, Badge, Card, DataTable, DashboardTemplate } from '@/components'

# Importar charts
import { BarChart, LineChart, PieChart, FunnelChart } from '@/components'

# Importar tokens CSS
import '@/tokens/global.css'
```

```tsx
// Exemplo — pagina de lista CRM
<DashboardTemplate sidebar={sidebarProps} header={topBar}>
  <CRMListTemplate
    title="Leads"
    badge="284 ativos"
    table={{ data: leads, columns, searchable: true, selectable: true }}
    onAdd={() => openModal()}
  />
</DashboardTemplate>
```

```tsx
// Exemplo — dashboard com charts
<StatGrid cols={4}>
  <KPICard label="Leads" value="1.284" trend="up" trendValue="+18%" />
  <KPICard label="Faturamento" value="R$48.2K" trend="up" />
</StatGrid>

<BarChart
  data={monthlyData}
  series={[{ key: 'leads', label: 'Leads', color: 'signal' }]}
/>
```

---

## Storybook

```bash
cd outputs/design-system/cortex
npx storybook dev -p 6006
```

Stories disponiveis:
- `Atoms/Button` — todos os estados e variantes
- `Cortex DS / Showcase` — catalogo completo com todos os 59 componentes
- `Templates/DashboardTemplate` — CRM dashboard completo
- `Templates/CRMListTemplate` — tabela de leads
- `Templates/DetailTemplate` — pagina de detalhe
- `Templates/AuthTemplate` — login centered, split, nova senha
- `Foundations/` — Elevation, Motion, Radius, Spacing

---

## Historico de Fases

| Phase | Entregavel | Status |
|-------|-----------|--------|
| 1 | Setup e Tokens (67 tokens W3C DTCG) | Complete |
| 2 | Atoms (8 componentes base) | Complete |
| 3 | Molecules (6 componentes compostos) | Complete |
| 4 | Organisms (5 blocos complexos) | Complete |
| 5 | Templates (4 layouts) | Complete |
| 6 | Promocao e Documentacao | Complete |
| 7 | Expansion (24 novos componentes: forms, charts, data viz, navigation, panels) | Complete |

---

## Dependencias Principais

```json
{
  "dependencies": {
    "@radix-ui/react-accordion": "^1.x",
    "@radix-ui/react-alert-dialog": "^1.x",
    "@radix-ui/react-checkbox": "^1.x",
    "@radix-ui/react-dialog": "^1.x",
    "@radix-ui/react-dropdown-menu": "^2.x",
    "@radix-ui/react-label": "^2.x",
    "@radix-ui/react-popover": "^1.x",
    "@radix-ui/react-radio-group": "^1.x",
    "@radix-ui/react-select": "^2.x",
    "@radix-ui/react-slider": "^1.x",
    "@radix-ui/react-switch": "^1.x",
    "@radix-ui/react-tabs": "^1.x",
    "@radix-ui/react-tooltip": "^1.x",
    "@dnd-kit/core": "^6.x",
    "@dnd-kit/sortable": "^8.x",
    "@tanstack/react-table": "^8.x",
    "class-variance-authority": "^0.7",
    "clsx": "^2.x",
    "cmdk": "^1.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.4",
    "react-day-picker": "^8.x",
    "recharts": "^2.x",
    "tailwind-merge": "^2.x"
  }
}
```

---

*Cortex DS v2.0 -- Grupo Fabio Avelar -- 2026-03-22*
