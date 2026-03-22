# Cortex — Mapa Completo do Projeto

> **Cortex** — Sistema operacional de crescimento para dentistas.
> Do lead ao lucro. Um sistema. Zero fragmentacao.

**Marca-mae:** Grupo Fabio Avelar
**Sub-marcas:** Cortex CRM, Cortex Ads, Cortex Analytics, Cortex Flow
**Status:** Design System completo (59 componentes) + Brand completo + Materials aplicados

---

## Visao Geral da Estrutura

```
cortex.ai/
├── brand/                    # Identidade visual, verbal e logos
├── design-system/            # React + Tailwind + Storybook (59 componentes)
├── materials/                # Pecas aplicadas (ads, deck, social, email...)
├── backlog/                  # Epicos e stories do produto
├── PROJECT-MAP.md            # Este documento
└── .gitignore
```

**Total de arquivos:** 227

---

## 1. Brand — Identidade da Marca

A base estrategica e visual da Cortex. Contem o brandbook completo, framework de comunicacao, guia de aplicacao e todos os assets de logo.

| Arquivo | Caminho | Descricao |
|---------|---------|-----------|
| Brandbook | `brand/brandbook.yaml` | Identidade completa: posicionamento, voz, personalidade, arquetipos, visual identity, tipografia, cores, espacamento |
| Communication Framework | `brand/communication-framework.yaml` | Framework verbal: tom de voz, pilares de comunicacao, diretrizes de copy |
| Brand Application Guide | `brand/brand-application-guide.yaml` | Regras de aplicacao da marca em todos os pontos de contato |

### 1.1 Logos (19 arquivos)

| Arquivo | Caminho | Descricao |
|---------|---------|-----------|
| Logo React Component | `brand/logo/CortexLogo.tsx` | Componente React do logo |
| Favicon SVG | `brand/logo/favicon.svg` | Favicon em SVG |
| Icon Dark | `brand/logo/icon-dark.svg` | Icone para fundo escuro |
| Icon Light | `brand/logo/icon-light.svg` | Icone para fundo claro |
| Icon on Signal | `brand/logo/icon-on-signal.svg` | Icone sobre cor primaria (signal) |
| Logo Beam | `brand/logo/logo-beam.svg` | Variante animada — beam |
| Logo Glitch | `brand/logo/logo-glitch.svg` | Variante animada — glitch |
| Logo Horizontal Dark | `brand/logo/logo-horizontal-dark.svg` | Logo horizontal para fundo escuro |
| Logo Horizontal Light | `brand/logo/logo-horizontal-light.svg` | Logo horizontal para fundo claro |
| Logo Idle | `brand/logo/logo-idle.svg` | Logo estado idle |
| Logo Loader | `brand/logo/logo-loader.svg` | Logo variante loader/loading |
| Logo Reveal | `brand/logo/logo-reveal.svg` | Variante animada — reveal |
| Logo Ripple | `brand/logo/logo-ripple.svg` | Variante animada — ripple |
| Logo Scan | `brand/logo/logo-scan.svg` | Variante animada — scan |
| Logo Stagger | `brand/logo/logo-stagger.svg` | Variante animada — stagger |
| Logo Typewriter | `brand/logo/logo-typewriter.svg` | Variante animada — typewriter |
| Logo Vertical Dark | `brand/logo/logo-vertical-dark.svg` | Logo vertical para fundo escuro |
| Wordmark Dark | `brand/logo/wordmark-dark.svg` | Wordmark para fundo escuro |
| Wordmark Light | `brand/logo/wordmark-light.svg` | Wordmark para fundo claro |

---

## 2. Design System — 59 Componentes React

Design System completo construido com **React + Tailwind CSS + Radix UI + Framer Motion**, documentado no **Storybook 10**. Dark-mode first com suporte a light mode.

### 2.1 Configuracao e Infra

| Arquivo | Caminho | Descricao |
|---------|---------|-----------|
| Package | `design-system/package.json` | Dependencias do projeto (React 19, Next 16, Storybook 10, Radix UI, Recharts) |
| TypeScript Config | `design-system/tsconfig.json` | Configuracao TypeScript |
| PostCSS Config | `design-system/postcss.config.mjs` | Configuracao PostCSS / Tailwind |
| DS Config | `design-system/config.yaml` | Configuracao central do Design System: tokens, temas, pipeline, acessibilidade |
| DS State | `design-system/.state.yaml` | Estado atual do pipeline de build |
| Component Registry | `design-system/component-registry.yaml` | Registro de todos os 59 componentes com status |
| Design System Docs | `design-system/DESIGN-SYSTEM.md` | Documentacao principal do DS |
| Setup Summary | `design-system/docs/setup-summary.md` | Resumo do setup inicial |

### 2.2 Storybook

| Arquivo | Caminho | Descricao |
|---------|---------|-----------|
| Main Config | `design-system/.storybook/main.ts` | Configuracao principal do Storybook |
| Preview Head | `design-system/.storybook/preview-head.html` | Head customizado (fonts, meta) |
| Preview Config | `design-system/.storybook/preview.tsx` | Decorators, temas, configuracao global |

### 2.3 Tokens

| Arquivo | Caminho | Descricao |
|---------|---------|-----------|
| Tokens YAML | `design-system/tokens/tokens.yaml` | Tokens fonte: 67 tokens (cores, tipografia, espacamento, radius, sombras, animacao) |
| Global CSS | `design-system/tokens/global.css` | CSS variables geradas dos tokens |
| Tokens Index | `design-system/tokens/index.ts` | Exportacao TypeScript dos tokens |
| Tailwind Config | `design-system/tokens/tailwind.config.ts` | Configuracao Tailwind com tokens mapeados |
| Globals CSS | `design-system/styles/globals.css` | Estilos globais base |

### 2.4 Componentes — Stories de Showcase

| Arquivo | Caminho | Descricao |
|---------|---------|-----------|
| Introduction | `design-system/components/Introduction.mdx` | Pagina de boas-vindas do Storybook |
| Brand Stories | `design-system/components/Brand.stories.tsx` | Showcase dos tokens e brand |
| Brand Applications | `design-system/components/BrandApplications.stories.tsx` | Showcase de aplicacoes da marca |
| Mockups Gallery | `design-system/components/MockupsGallery.stories.tsx` | Galeria de mockups |
| Showcase | `design-system/components/Showcase.stories.tsx` | Showcase geral dos componentes |
| Components Index | `design-system/components/index.ts` | Barrel export de todos os componentes |
| Utils | `design-system/components/utils.ts` | Utilidades compartilhadas (cn, cva helpers) |

### 2.5 Foundations (4 stories)

| Story | Caminho |
|-------|---------|
| Elevation | `design-system/components/foundations/Elevation.stories.tsx` |
| Motion | `design-system/components/foundations/Motion.stories.tsx` |
| Radius | `design-system/components/foundations/Radius.stories.tsx` |
| Spacing | `design-system/components/foundations/Spacing.stories.tsx` |

### 2.6 Atoms — 23 Componentes

Componentes atomicos, a base do Design System.

| Componente | Componente | Story |
|------------|-----------|-------|
| Accordion | `design-system/components/atoms/Accordion/Accordion.tsx` | `Accordion.stories.tsx` |
| Avatar | `design-system/components/atoms/Avatar/Avatar.tsx` | `Avatar.stories.tsx` |
| Badge | `design-system/components/atoms/Badge/Badge.tsx` | `Badge.stories.tsx` |
| Button | `design-system/components/atoms/Button/Button.tsx` | `Button.stories.tsx` |
| Checkbox | `design-system/components/atoms/Checkbox/Checkbox.tsx` | `Checkbox.stories.tsx` |
| Combobox | `design-system/components/atoms/Combobox/Combobox.tsx` | `Combobox.stories.tsx` |
| DatePicker | `design-system/components/atoms/DatePicker/DatePicker.tsx` | `DatePicker.stories.tsx` |
| Input | `design-system/components/atoms/Input/Input.tsx` | `Input.stories.tsx` |
| Label | `design-system/components/atoms/Label/Label.tsx` | `Label.stories.tsx` |
| Logo | `design-system/components/atoms/Logo/Logo.tsx` | `Logo.stories.tsx` |
| OTPInput | `design-system/components/atoms/OTPInput/OTPInput.tsx` | `OTPInput.stories.tsx` |
| Popover | `design-system/components/atoms/Popover/Popover.tsx` | `Popover.stories.tsx` |
| Progress | `design-system/components/atoms/Progress/Progress.tsx` | `Progress.stories.tsx` |
| RadioGroup | `design-system/components/atoms/RadioGroup/RadioGroup.tsx` | `RadioGroup.stories.tsx` |
| Select | `design-system/components/atoms/Select/Select.tsx` | `Select.stories.tsx` |
| Skeleton | `design-system/components/atoms/Skeleton/Skeleton.tsx` | `Skeleton.stories.tsx` |
| Slider | `design-system/components/atoms/Slider/Slider.tsx` | `Slider.stories.tsx` |
| Spinner | `design-system/components/atoms/Spinner/Spinner.tsx` | `Spinner.stories.tsx` |
| Switch | `design-system/components/atoms/Switch/Switch.tsx` | `Switch.stories.tsx` |
| Tag | `design-system/components/atoms/Tag/Tag.tsx` | `Tag.stories.tsx` |
| Textarea | `design-system/components/atoms/Textarea/Textarea.tsx` | `Textarea.stories.tsx` |
| TimePicker | `design-system/components/atoms/TimePicker/TimePicker.tsx` | `TimePicker.stories.tsx` |
| Tooltip | `design-system/components/atoms/Tooltip/Tooltip.tsx` | `Tooltip.stories.tsx` |

Barrel export: `design-system/components/atoms/index.ts`

### 2.7 Molecules — 17 Componentes

Composicoes de atoms para padroes de UI recorrentes.

| Componente | Componente | Story |
|------------|-----------|-------|
| Alert | `design-system/components/molecules/Alert/Alert.tsx` | `Alert.stories.tsx` |
| AvatarUpload | `design-system/components/molecules/AvatarUpload/AvatarUpload.tsx` | `AvatarUpload.stories.tsx` |
| Breadcrumb | `design-system/components/molecules/Breadcrumb/Breadcrumb.tsx` | `Breadcrumb.stories.tsx` |
| Card | `design-system/components/molecules/Card/Card.tsx` | `Card.stories.tsx` |
| ConfirmDialog | `design-system/components/molecules/ConfirmDialog/ConfirmDialog.tsx` | `ConfirmDialog.stories.tsx` |
| Drawer | `design-system/components/molecules/Drawer/Drawer.tsx` | `Drawer.stories.tsx` |
| DropdownMenu | `design-system/components/molecules/DropdownMenu/DropdownMenu.tsx` | `DropdownMenu.stories.tsx` |
| FileUpload | `design-system/components/molecules/FileUpload/FileUpload.tsx` | `FileUpload.stories.tsx` |
| FormField | `design-system/components/molecules/FormField/FormField.tsx` | `FormField.stories.tsx` |
| KPICard | `design-system/components/molecules/KPICard/KPICard.tsx` | `KPICard.stories.tsx` |
| NavigationMenu | `design-system/components/molecules/NavigationMenu/NavigationMenu.tsx` | `NavigationMenu.stories.tsx` |
| Pagination | `design-system/components/molecules/Pagination/Pagination.tsx` | `Pagination.stories.tsx` |
| ResizablePanels | `design-system/components/molecules/ResizablePanels/ResizablePanels.tsx` | `ResizablePanels.stories.tsx` |
| Stat | `design-system/components/molecules/Stat/Stat.tsx` | `Stat.stories.tsx` |
| Stepper | `design-system/components/molecules/Stepper/Stepper.tsx` | `Stepper.stories.tsx` |
| Tabs | `design-system/components/molecules/Tabs/Tabs.tsx` | `Tabs.stories.tsx` |
| Toast | `design-system/components/molecules/Toast/Toast.tsx` | `Toast.stories.tsx` |

Barrel export: `design-system/components/molecules/index.ts`

### 2.8 Organisms — 15 Componentes

Componentes complexos que combinam atoms e molecules.

| Componente | Componente | Story |
|------------|-----------|-------|
| Calendar | `design-system/components/organisms/Calendar/Calendar.tsx` | `Calendar.stories.tsx` |
| BarChart | `design-system/components/organisms/Charts/BarChart/BarChart.tsx` | `BarChart.stories.tsx` |
| FunnelChart | `design-system/components/organisms/Charts/FunnelChart/FunnelChart.tsx` | `FunnelChart.stories.tsx` |
| LineChart | `design-system/components/organisms/Charts/LineChart/LineChart.tsx` | `LineChart.stories.tsx` |
| PieChart | `design-system/components/organisms/Charts/PieChart/PieChart.tsx` | `PieChart.stories.tsx` |
| CommandPalette | `design-system/components/organisms/CommandPalette/CommandPalette.tsx` | `CommandPalette.stories.tsx` |
| DataTable | `design-system/components/organisms/DataTable/DataTable.tsx` | `DataTable.stories.tsx` |
| EmptyState | `design-system/components/organisms/EmptyState/EmptyState.tsx` | `EmptyState.stories.tsx` |
| KanbanBoard | `design-system/components/organisms/KanbanBoard/KanbanBoard.tsx` | `KanbanBoard.stories.tsx` |
| Modal | `design-system/components/organisms/Modal/Modal.tsx` | `Modal.stories.tsx` |
| NotificationCenter | `design-system/components/organisms/NotificationCenter/NotificationCenter.tsx` | `NotificationCenter.stories.tsx` |
| PageHeader | `design-system/components/organisms/PageHeader/PageHeader.tsx` | `PageHeader.stories.tsx` |
| Sidebar | `design-system/components/organisms/Sidebar/Sidebar.tsx` | `Sidebar.stories.tsx` |
| Timeline | `design-system/components/organisms/Timeline/Timeline.tsx` | `Timeline.stories.tsx` |

Barrel exports: `design-system/components/organisms/index.ts`, `design-system/components/organisms/Charts/index.ts`

### 2.9 Templates — 4 Componentes

Layouts completos de pagina prontos para uso.

| Template | Componente | Story | Descricao |
|----------|-----------|-------|-----------|
| AuthTemplate | `design-system/components/templates/AuthTemplate/AuthTemplate.tsx` | `AuthTemplate.stories.tsx` | Login/signup — variantes centered, split, new-password |
| CRMListTemplate | `design-system/components/templates/CRMListTemplate/CRMListTemplate.tsx` | `CRMListTemplate.stories.tsx` | PageHeader + Alert + DataTable para listagem de leads |
| DashboardTemplate | `design-system/components/templates/DashboardTemplate/DashboardTemplate.tsx` | `DashboardTemplate.stories.tsx` | Sidebar + header + conteudo scrollavel — dashboard CRM |
| DetailTemplate | `design-system/components/templates/DetailTemplate/DetailTemplate.tsx` | `DetailTemplate.stories.tsx` | Perfil + secoes + sidebar panel com animacoes staggered |

Barrel export: `design-system/components/templates/index.ts`

---

## 3. Materials — Pecas Aplicadas da Marca

Todos os pontos de contato visuais da Cortex, implementados em HTML com os tokens do Design System.

### 3.1 Ads (14 pecas)

| Peca | Caminho | Formato |
|------|---------|---------|
| Carousel Slide 1 | `materials/ads/carousel/slide-1.html` | Meta Carousel |
| Carousel Slide 2 | `materials/ads/carousel/slide-2.html` | Meta Carousel |
| Carousel Slide 3 | `materials/ads/carousel/slide-3.html` | Meta Carousel |
| Carousel Slide 4 | `materials/ads/carousel/slide-4.html` | Meta Carousel |
| Carousel Slide 5 | `materials/ads/carousel/slide-5.html` | Meta Carousel |
| Google Display 160x600 | `materials/ads/google-display/160x600.html` | Skyscraper |
| Google Display 300x250 | `materials/ads/google-display/300x250.html` | Medium Rectangle |
| Google Display 728x90 | `materials/ads/google-display/728x90.html` | Leaderboard |
| Meta Feed — Awareness | `materials/ads/meta-feed/awareness.html` | Feed Topo de Funil |
| Meta Feed — Consideration | `materials/ads/meta-feed/consideration.html` | Feed Meio de Funil |
| Meta Feed — Conversion | `materials/ads/meta-feed/conversion.html` | Feed Fundo de Funil |
| Meta Stories — Data | `materials/ads/meta-stories/data.html` | Story com dados |
| Meta Stories — Hero | `materials/ads/meta-stories/hero.html` | Story hero |
| Meta Stories — System | `materials/ads/meta-stories/system.html` | Story sistema |

### 3.2 Business Card (2 pecas)

| Peca | Caminho |
|------|---------|
| Frente | `materials/business-card/front.html` |
| Verso | `materials/business-card/back.html` |

### 3.3 Certificado

| Peca | Caminho |
|------|---------|
| Template | `materials/certificate/template.html` |

### 3.4 Dashboard

| Peca | Caminho |
|------|---------|
| Dashboard Preview | `materials/dashboard/index.html` |

### 3.5 Deck de Apresentacao (12 slides)

| Slide | Caminho | Conteudo |
|-------|---------|----------|
| 01 | `materials/deck/01-cover.html` | Capa |
| 02 | `materials/deck/02-problem.html` | Problema |
| 03 | `materials/deck/03-solution.html` | Solucao |
| 04 | `materials/deck/04-features.html` | Features |
| 05 | `materials/deck/05-how-it-works.html` | Como funciona |
| 06 | `materials/deck/06-metrics.html` | Metricas |
| 07 | `materials/deck/07-comparison.html` | Comparativo |
| 08 | `materials/deck/08-testimonial.html` | Depoimento |
| 09 | `materials/deck/09-pricing.html` | Precos |
| 10 | `materials/deck/10-team.html` | Time |
| 11 | `materials/deck/11-roadmap.html` | Roadmap |
| 12 | `materials/deck/12-cta.html` | CTA Final |

### 3.6 Email (2 pecas)

| Peca | Caminho |
|------|---------|
| Header | `materials/email/header.html` |
| Footer | `materials/email/footer.html` |

### 3.7 Favicon (7 arquivos)

| Arquivo | Caminho |
|---------|---------|
| Android Chrome 192 | `materials/favicon/android-chrome-192.html` |
| Android Chrome 512 | `materials/favicon/android-chrome-512.html` |
| Apple Touch Icon | `materials/favicon/apple-touch-icon.html` |
| Favicon 16px | `materials/favicon/favicon-16.html` |
| Favicon 32px | `materials/favicon/favicon-32.html` |
| Favicon SVG | `materials/favicon/favicon.svg` |
| Web Manifest | `materials/favicon/site.webmanifest` |

### 3.8 Landing Page

| Peca | Caminho |
|------|---------|
| Landing Page | `materials/landing-page/index.html` |

### 3.9 Mockups Gallery

| Peca | Caminho |
|------|---------|
| Galeria de Mockups | `materials/mockups-gallery/index.html` |

### 3.10 OG Image

| Peca | Caminho |
|------|---------|
| Open Graph Image | `materials/og-image.html` |

### 3.11 Social Media (12 pecas)

| Peca | Caminho | Formato |
|------|---------|---------|
| Highlight Cover 1 | `materials/social/highlight-cover-1.html` | Instagram Highlight |
| Highlight Cover 2 | `materials/social/highlight-cover-2.html` | Instagram Highlight |
| Highlight Cover 3 | `materials/social/highlight-cover-3.html` | Instagram Highlight |
| Highlight Cover 4 | `materials/social/highlight-cover-4.html` | Instagram Highlight |
| Highlight Cover 5 | `materials/social/highlight-cover-5.html` | Instagram Highlight |
| LinkedIn Banner | `materials/social/linkedin-banner.html` | LinkedIn |
| Post Metrica | `materials/social/post-metric.html` | Feed Post |
| Post Statement | `materials/social/post-statement.html` | Feed Post |
| Post Dica | `materials/social/post-tip.html` | Feed Post |
| Story Anuncio | `materials/social/story-announcement.html` | Instagram Story |
| Story Enquete | `materials/social/story-poll.html` | Instagram Story |
| Twitter Header | `materials/social/twitter-header.html` | Twitter/X |

### 3.12 YouTube

| Peca | Caminho |
|------|---------|
| Thumbnail | `materials/youtube/thumbnail.html` |

---

## 4. Backlog — Epicos e Stories

| Arquivo | Caminho | Descricao |
|---------|---------|-----------|
| Visual Backlog | `backlog/cortex-visual-backlog.yaml` | 4 epicos completos: DS-PROD, DS-QUALITY, DS-MATURITY, BRAND-APP |
| Stories | `backlog/stories.yaml` | User stories detalhadas com acceptance criteria |

---

## Stack Tecnica

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| React | 19.2.3 | UI Framework |
| Next.js | 16.1.6 | Framework base |
| TypeScript | 5.x | Tipagem |
| Tailwind CSS | 4.x | Estilizacao |
| Radix UI | Latest | Primitivos acessiveis |
| Framer Motion | 12.x | Animacoes |
| Recharts | 2.x | Graficos |
| TanStack Table | 8.x | Data tables |
| Storybook | 10.3 | Documentacao de componentes |
| Lucide React | 0.563 | Icones |

---

## Numeros do Projeto

| Metrica | Valor |
|---------|-------|
| Total de arquivos | 227 |
| Componentes React | 59 |
| Design Tokens | 67 |
| Templates de pagina | 4 |
| Pecas de material | 55 |
| Variantes de logo | 19 |
| Slides do deck | 12 |
| Pecas de ads | 14 |
| Pecas de social | 12 |
