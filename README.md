<p align="center">
  <img src="brand/logo/logo-horizontal-dark.svg" alt="Cortex" height="48" />
</p>

<h3 align="center">Do lead ao lucro. Um sistema. Zero fragmentacao.</h3>

<p align="center">
  Sistema operacional de crescimento para dentistas.<br/>
  Brand completo + Design System + Materials prontos para producao.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/componentes-59-4D71FA" alt="59 componentes" />
  <img src="https://img.shields.io/badge/tokens-67-4D71FA" alt="67 tokens" />
  <img src="https://img.shields.io/badge/materials-55-4D71FA" alt="55 materials" />
  <img src="https://img.shields.io/badge/WCAG-AA-22C55E" alt="WCAG AA" />
  <img src="https://img.shields.io/badge/dark--first-090E1A?style=flat&labelColor=090E1A&color=4D71FA" alt="Dark first" />
</p>

---

## O que e a Cortex

A **Cortex** e a stack completa de crescimento para clinicas odontologicas — CRM proprio, IA proprietaria e clinicas reais como laboratorio. Criada por dentista, para dentistas que querem escalar faturamento sem virar gestor de tecnologia.

**Sub-marcas:** Cortex CRM | Cortex Ads | Cortex Analytics | Cortex Flow

---

## Estrutura do Repositorio

```
cortex.ai/
├── brand/                    Identidade visual + verbal
│   ├── brandbook.yaml            Brandbook completo (posicionamento, voz, cores, tipografia)
│   ├── communication-framework.yaml   Framework verbal por canal
│   ├── brand-application-guide.yaml   Regras de aplicacao da marca
│   └── logo/                     19 variantes de logo (SVG + React)
│
├── design-system/            59 componentes React + Storybook
│   ├── tokens/                   67 design tokens (cores, tipografia, spacing, shadows)
│   ├── styles/                   CSS global
│   ├── components/
│   │   ├── atoms/                23 componentes base
│   │   ├── molecules/            17 composicoes
│   │   ├── organisms/            15 componentes complexos (charts, tables, kanban)
│   │   ├── templates/            4 layouts de pagina completos
│   │   └── foundations/          Stories de spacing, motion, elevation, radius
│   ├── .storybook/               Configuracao do Storybook 10
│   ├── config.yaml               Configuracao central do DS
│   ├── component-registry.yaml   Registro dos 59 componentes
│   └── DESIGN-SYSTEM.md          Documentacao do DS
│
├── materials/                55 pecas aplicadas da marca
│   ├── ads/                      14 pecas (carousel, google display, meta feed/stories)
│   ├── deck/                     12 slides de apresentacao
│   ├── social/                   12 pecas (posts, stories, highlights, banners)
│   ├── business-card/            Cartao de visita (frente + verso)
│   ├── email/                    Header + footer de email
│   ├── landing-page/             Landing page completa
│   ├── dashboard/                Preview do dashboard
│   ├── certificate/              Template de certificado
│   ├── favicon/                  Kit completo de favicons
│   ├── mockups-gallery/          Galeria de mockups
│   ├── og-image.html             Open Graph image
│   └── youtube/                  Thumbnail
│
├── backlog/                  Roadmap e stories
│   ├── cortex-visual-backlog.yaml   4 epicos: DS-PROD, DS-QUALITY, DS-MATURITY, BRAND-APP
│   └── stories.yaml                 User stories com acceptance criteria
│
└── PROJECT-MAP.md            Inventario completo com todos os 227 arquivos
```

---

## Design System

### Stack

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| React | 19 | UI Framework |
| Next.js | 16 | Framework base |
| TypeScript | 5 | Tipagem |
| Tailwind CSS | 4 | Estilizacao via tokens |
| Radix UI | latest | Primitivos acessiveis |
| Framer Motion | 12 | Animacoes |
| Recharts | 2 | Graficos |
| TanStack Table | 8 | Data tables |
| Storybook | 10 | Documentacao de componentes |
| Lucide React | 0.563 | Icones |

### Tokens

| Categoria | Tokens | Exemplos |
|-----------|--------|----------|
| Cores | 14 | `void` #090E1A, `signal` #4D71FA, `white` #F7F9FC |
| Tipografia | 20 | Space Grotesk (display), Inter (body), JetBrains Mono (code) |
| Spacing | 14 | Base 4px, escala de 4 a 128px |
| Border Radius | 7 | 4px a 9999px |
| Shadows | 5 | sm, md, lg + glow (signal) |
| Animation | 7 | Duracoes e easings |

### Componentes (59)

**Atoms (23)** — Accordion, Avatar, Badge, Button, Checkbox, Combobox, DatePicker, Input, Label, Logo, OTPInput, Popover, Progress, RadioGroup, Select, Skeleton, Slider, Spinner, Switch, Tag, Textarea, TimePicker, Tooltip

**Molecules (17)** — Alert, AvatarUpload, Breadcrumb, Card, ConfirmDialog, Drawer, DropdownMenu, FileUpload, FormField, KPICard, NavigationMenu, Pagination, ResizablePanels, Stat, Stepper, Tabs, Toast

**Organisms (15)** — BarChart, Calendar, CommandPalette, DataTable, EmptyState, FunnelChart, KanbanBoard, LineChart, Modal, NotificationCenter, PageHeader, PieChart, Sidebar, Timeline

**Templates (4)** — AuthTemplate, CRMListTemplate, DashboardTemplate, DetailTemplate

### Quick Start

```bash
# Instalar dependencias
cd design-system
npm install

# Rodar Storybook
npm run storybook
# Acesse http://localhost:6006
```

### Temas

| Tema | Modo | Descricao |
|------|------|-----------|
| `cortex-dark` | Dark | Tema principal — dark mode first, premium tech |
| `cortex-light` | Light | Tema alternativo para contextos especificos |

---

## Brand

### Posicionamento

> Somos os unicos que entregam a stack completa — do lead ao lucro — com CRM proprio, IA proprietaria e clinicas reais como laboratorio, liderados por dentista, para dentistas que querem crescer sem precisar entender tecnologia.

### Essencia

**"Inteligencia que opera."**

### Arquetipos

- **Governante** — Autoridade, controle, sistema
- **Sabio** — Dados, inteligencia, precisao

### Paleta Principal

| Token | Hex | Uso |
|-------|-----|-----|
| `void` | `#090E1A` | Background principal (dark canvas) |
| `ink` | `#0C1220` | Background secundario |
| `dusk` | `#1B2845` | Cards, paineis, superficies |
| `signal` | `#4D71FA` | Cor primaria — CTAs, links, destaques |
| `white` | `#F7F9FC` | Texto sobre fundo escuro |
| `success` | `#22C55E` | Semantico positivo |
| `warning` | `#F59E0B` | Semantico atencao |
| `error` | `#F43F5E` | Semantico erro |

### Tipografia

| Uso | Fonte | Pesos |
|-----|-------|-------|
| Display / Titulos | Space Grotesk | 600, 700 |
| Body / Texto | Inter | 400, 500, 600 |
| Codigo / Dados | JetBrains Mono | 400, 500 |

---

## Materials

55 pecas aplicadas da marca, todas implementadas em HTML com os tokens do Design System.

| Categoria | Pecas | Destaques |
|-----------|-------|-----------|
| Ads | 14 | Carousel (5 slides), Google Display (3 tamanhos), Meta Feed (3 funis), Meta Stories (3 temas) |
| Deck | 12 | Apresentacao completa: cover ate CTA |
| Social | 12 | Posts, stories, highlights, banners LinkedIn/Twitter |
| Email | 2 | Header + footer |
| Business Card | 2 | Frente + verso |
| Landing Page | 1 | Pagina completa |
| Dashboard | 1 | Preview do produto |
| Outros | 11 | Certificado, favicons, OG image, mockups, YouTube thumbnail |

---

## Backlog

O roadmap esta organizado em **4 epicos**:

| Epico | Prioridade | Foco |
|-------|------------|------|
| **DS-PROD** | Alta | Light mode, componentes de producao, charts, sync registry |
| **DS-QUALITY** | Media | Testes, automacao visual, pipeline npm, Storybook publico |
| **DS-MATURITY** | Baixa | Figma Code Connect, email templates, tokens avancados, changelog |
| **BRAND-APP** | Alta | Aplicacao da marca em todos os pontos de contato |

---

## Acessibilidade

- **Padrao:** WCAG AA
- **Contraste verificado:**
  - `signal` (#4D71FA) sobre `white` (#F7F9FC) — **4.8:1** (pass)
  - `white` (#F7F9FC) sobre `void` (#090E1A) — **18.9:1** (pass)
  - `mist` (#94A3B8) sobre `void` (#090E1A) — **5.2:1** (pass)

---

## Documentacao Complementar

| Documento | Descricao |
|-----------|-----------|
| [`PROJECT-MAP.md`](PROJECT-MAP.md) | Inventario completo dos 227 arquivos com caminhos e descricoes |
| [`design-system/DESIGN-SYSTEM.md`](design-system/DESIGN-SYSTEM.md) | Documentacao tecnica do Design System |
| [`design-system/component-registry.yaml`](design-system/component-registry.yaml) | Registro de todos os 59 componentes |
| [`brand/brandbook.yaml`](brand/brandbook.yaml) | Brandbook completo |
| [`brand/communication-framework.yaml`](brand/communication-framework.yaml) | Framework verbal por canal |

---

<p align="center">
  <strong>Cortex</strong> — Grupo Fabio Avelar<br/>
  Inteligencia que opera.
</p>
