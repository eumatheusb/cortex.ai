# Cortex — Backlog Completo com Status

> Atualizado em: 2026-03-22
> Fonte: `backlog/stories.yaml` + `backlog/cortex-visual-backlog.yaml`

---

## Legenda de Status

| Status | Significado |
|--------|-------------|
| DONE | Entregue e no repositorio |
| PENDING | Nao iniciado |
| PARTIAL | Parcialmente feito, precisa de complemento |
| BLOCKED | Depende de outra story pendente |

---

## Backlog A — Lancamento da Marca (stories.yaml)

5 stories criticas para o lancamento minimo viavel da marca Cortex.

### Grafo de Dependencias

```
CORTEX-S001 (Tagline) ─────┬──→ CORTEX-S003 (Site)
                            ├──→ CORTEX-S004 (Copies)
                            └──→ CORTEX-S005 (Canais) [indireto]

CORTEX-S002 (Logo) ────────┬──→ CORTEX-S003 (Site)
                            └──→ CORTEX-S005 (Canais)

CORTEX-S004 (Copies) ──────┬──→ CORTEX-S003 (Site)
                            └──→ CORTEX-S005 (Canais)
```

### Sprint 1 (recomendado)

| ID | Story | Prioridade | Esforco | Status | Notas |
|----|-------|-----------|---------|--------|-------|
| CORTEX-S001 | Definir e publicar tagline final | Must | P (< 1 dia) | **PENDING** | Precisa sessao de decisao com owner. Candidata: "4 fornecedores viram 1. Um sistema. Zero fragmentacao." |
| CORTEX-S002 | Executar identidade visual (logo) com designer | Must | G (5-10 dias) | **PARTIAL** | 19 logos SVG gerados por IA existem no repo (brand/logo/), mas nao foram executados por designer profissional. Precisam validacao/execucao real. |

### Sprint 2 (recomendado)

| ID | Story | Prioridade | Esforco | Status | Notas |
|----|-------|-----------|---------|--------|-------|
| CORTEX-S003 | Construir landing page Next.js de producao | Must | G (5-8 dias) | **PARTIAL** | Landing HTML estatica existe (materials/landing-page/), mas precisa ser reconstruida em Next.js com DS components, Core Web Vitals, analytics, formulario funcional. |
| CORTEX-S004 | Produzir copies reais para todos os canais | Must | M (2-3 dias) | **PENDING** | Communication framework tem skeletons, mas nenhum copy final aprovado. Precisa: bio IG, hero site, features site, about, CTA, primeiro ad A/B. |

### Sprint 3 (recomendado)

| ID | Story | Prioridade | Esforco | Status | Notas |
|----|-------|-----------|---------|--------|-------|
| CORTEX-S005 | Configurar presenca digital (dominio, IG Business, WhatsApp Business) | Must | M (2-3 dias) | **PENDING** | Nenhum canal configurado. Precisa: registro dominio, conta IG Business, WhatsApp Business, Pixel Meta. |

---

## Backlog B — Design System (cortex-visual-backlog.yaml)

4 epicos com 62 stories. Muitas ja foram entregues na fase 7 (expansao) do Design System.

---

### Epico DS-PROD: Design System Production Ready (Prioridade ALTA)

| ID | Story | Pontos | Status | Notas |
|----|-------|--------|--------|-------|
| CORTEX-001 | Light Mode Theme | 13 | **PENDING** | Unico item critico pendente do DS. Todos os 59 componentes precisam de variante light. |
| CORTEX-002 | DatePicker Component | 8 | **DONE** | Entregue na fase 7. Path: design-system/components/atoms/DatePicker/ |
| CORTEX-003 | Combobox/Autocomplete | 8 | **DONE** | Entregue na fase 7. Path: design-system/components/atoms/Combobox/ |
| CORTEX-004 | FileUpload Component | 8 | **DONE** | Entregue na fase 7. Path: design-system/components/molecules/FileUpload/ |
| CORTEX-005 | Slider Component | 5 | **DONE** | Entregue na fase 7. Path: design-system/components/atoms/Slider/ |
| CORTEX-006 | TimePicker Component | 5 | **DONE** | Entregue na fase 7. Path: design-system/components/atoms/TimePicker/ |
| CORTEX-007 | OTP Input Component | 5 | **DONE** | Entregue na fase 7. Path: design-system/components/atoms/OTPInput/ |
| CORTEX-008 | Drawer/Sheet Component | 5 | **DONE** | Entregue na fase 7. Path: design-system/components/molecules/Drawer/ |
| CORTEX-009 | Command Palette (cmdk) | 8 | **DONE** | Entregue na fase 7. Path: design-system/components/organisms/CommandPalette/ |
| CORTEX-010 | Notification Center | 8 | **DONE** | Entregue na fase 7. Path: design-system/components/organisms/NotificationCenter/ |
| CORTEX-011 | Stepper/Wizard | 5 | **DONE** | Entregue na fase 7. Path: design-system/components/molecules/Stepper/ |
| CORTEX-012 | Charts — BarChart | 8 | **DONE** | Entregue na fase 7. Path: design-system/components/organisms/Charts/BarChart/ |
| CORTEX-013 | Charts — LineChart | 5 | **DONE** | Entregue na fase 7. Path: design-system/components/organisms/Charts/LineChart/ |
| CORTEX-014 | Charts — PieChart/Donut | 5 | **DONE** | Entregue na fase 7. Path: design-system/components/organisms/Charts/PieChart/ |
| CORTEX-015 | Charts — FunnelChart | 8 | **DONE** | Entregue na fase 7. Path: design-system/components/organisms/Charts/FunnelChart/ |
| CORTEX-016 | Accordion Component | 3 | **DONE** | Entregue na fase 7. Path: design-system/components/atoms/Accordion/ |
| CORTEX-017 | Resizable Panels | 5 | **DONE** | Entregue na fase 7. Path: design-system/components/molecules/ResizablePanels/ |
| CORTEX-018 | Calendar Component | 13 | **DONE** | Entregue na fase 7. Path: design-system/components/organisms/Calendar/ |
| CORTEX-019 | Timeline Component | 5 | **DONE** | Entregue na fase 7. Path: design-system/components/organisms/Timeline/ |
| CORTEX-020 | Kanban Board | 13 | **DONE** | Entregue na fase 7. Path: design-system/components/organisms/KanbanBoard/ |
| CORTEX-021 | Avatar Upload | 8 | **DONE** | Entregue na fase 7. Path: design-system/components/molecules/AvatarUpload/ |
| CORTEX-022 | KPI Card | 8 | **DONE** | Entregue na fase 7. Path: design-system/components/molecules/KPICard/ |
| CORTEX-023 | NavigationMenu | 8 | **DONE** | Entregue na fase 7. Path: design-system/components/molecules/NavigationMenu/ |
| CORTEX-024 | ConfirmDialog | 3 | **DONE** | Entregue na fase 7. Path: design-system/components/molecules/ConfirmDialog/ |
| CORTEX-025 | Component Registry Sync | 3 | **PENDING** | Registry declara 27 componentes mas existem 59. Precisa sync. |

**Resumo DS-PROD:** 23/25 DONE (92%) — Pendente: Light Mode (13pts) + Registry Sync (3pts)

---

### Epico DS-QUALITY: Design System Quality & DX (Prioridade MEDIA)

| ID | Story | Pontos | Status | Notas |
|----|-------|--------|--------|-------|
| CORTEX-026 | Unit Tests — Atoms (23 componentes) | 13 | **PENDING** | Zero cobertura de testes hoje. Framework: Vitest + Testing Library. |
| CORTEX-027 | Unit Tests — Molecules (17 componentes) | 8 | **PENDING** | Depende de CORTEX-026. |
| CORTEX-028 | Unit Tests — Organisms (15 componentes) | 8 | **PENDING** | Depende de CORTEX-027. |
| CORTEX-029 | Unit Tests — Templates (4 templates) | 5 | **PENDING** | Depende de CORTEX-028. |
| CORTEX-030 | Visual Regression Testing (Chromatic) | 5 | **PENDING** | Chromatic ou Percy. |
| CORTEX-031 | Motion Presets Library | 5 | **PENDING** | Padronizar animacoes: fadeIn, slideUp, stagger, spring. |
| CORTEX-032 | npm Package Build Pipeline | 8 | **PENDING** | tsup ou Rollup. ESM + CJS. Tree-shakeable. |
| CORTEX-033 | Storybook Public Deploy | 3 | **DONE** | Deployado via GitHub Pages: eumatheusb.github.io/cortex.ai/storybook/ |
| CORTEX-034 | Storybook Interaction Testing | 8 | **PENDING** | Play functions com @storybook/test. |
| CORTEX-035 | A11y Audit Automation | 5 | **PENDING** | @storybook/addon-a11y ja esta no package.json. Precisa configurar CI. |

**Resumo DS-QUALITY:** 1/10 DONE (10%) — 68 story points pendentes

---

### Epico DS-MATURITY: Design System Maturity (Prioridade BAIXA)

| ID | Story | Pontos | Status | Notas |
|----|-------|--------|--------|-------|
| CORTEX-036 | Figma Code Connect | 13 | **PENDING** | Mapeamento Figma ↔ codigo para os 59 componentes. |
| CORTEX-037 | Email Templates (React Email) | 8 | **PENDING** | Onboarding, relatorio mensal, alerta, newsletter. |
| CORTEX-038 | Animation Tokens Expansion | 5 | **PENDING** | duration, easing, stagger, spring tokens no DTCG. |
| CORTEX-039 | Responsive/Container Tokens | 3 | **PENDING** | Breakpoint + container query tokens. |
| CORTEX-040 | Changelog & Semantic Versioning | 5 | **PENDING** | changesets ou conventional-changelog. |
| CORTEX-041 | Token Usage Analytics | 5 | **PENDING** | Script de analise de tokens usados vs definidos. |
| CORTEX-042 | Documentation Site (Nextra/Docusaurus) | 13 | **PENDING** | Site dedicado alem do Storybook. |

**Resumo DS-MATURITY:** 0/7 DONE (0%) — 52 story points pendentes

---

### Epico BRAND-APP: Brand Application Cortex (Prioridade ALTA)

#### Sub-epico 4.1 — Digital: Mockups de Produto

| ID | Story | Pontos | Status | Notas |
|----|-------|--------|--------|-------|
| CORTEX-043 | Landing Page Mockup | 8 | **DONE** | materials/landing-page/index.html — completo com 7 secoes, responsivo. |
| CORTEX-044 | Dashboard Mockup | 8 | **DONE** | materials/dashboard/index.html — sidebar, KPIs, tabela, graficos. |
| CORTEX-045 | App Mobile Mockup | 5 | **PENDING** | Frames de iPhone com telas do CRM mobile. |
| CORTEX-046 | OG Image / Social Card | 3 | **DONE** | materials/og-image.html — 1200x630px com tokens Cortex. |
| CORTEX-047 | Favicon Pack Completo | 3 | **DONE** | materials/favicon/ — 7 arquivos (android-chrome, apple-touch, favicon, webmanifest). |

#### Sub-epico 4.2 — Digital: Ads & Social Media

| ID | Story | Pontos | Status | Notas |
|----|-------|--------|--------|-------|
| CORTEX-048 | Ad Template — Meta Feed 1080x1080 | 5 | **DONE** | materials/ads/meta-feed/ — 3 variantes (awareness, consideration, conversion). |
| CORTEX-049 | Ad Template — Meta Stories 1080x1920 | 5 | **DONE** | materials/ads/meta-stories/ — 3 variantes (hero, data, system). |
| CORTEX-050 | Ad Template — Carrossel Meta (5 slides) | 8 | **DONE** | materials/ads/carousel/ — 5 slides com narrativa sequencial. |
| CORTEX-051 | Ad Template — Google Display | 8 | **DONE** | materials/ads/google-display/ — 728x90, 300x250, 160x600. |
| CORTEX-052 | YouTube Thumbnail Template | 3 | **DONE** | materials/youtube/thumbnail.html. |
| CORTEX-053 | Social Media Kit | 8 | **DONE** | materials/social/ — 12 pecas (posts, stories, highlights, banners). |
| CORTEX-054 | Email Header/Footer | 5 | **DONE** | materials/email/ — header.html + footer.html. |

#### Sub-epico 4.3 — Digital: Apresentacao

| ID | Story | Pontos | Status | Notas |
|----|-------|--------|--------|-------|
| CORTEX-055 | Deck de Apresentacao | 8 | **DONE** | materials/deck/ — 12 slides completos (cover ate CTA). |
| CORTEX-056 | Business Card | 3 | **DONE** | materials/business-card/ — frente + verso. |
| CORTEX-057 | Certificate Template | 3 | **DONE** | materials/certificate/template.html. |
| CORTEX-058 | Mockups Gallery | 5 | **DONE** | materials/mockups-gallery/index.html — 24 mockups premium. |

#### Sub-epico 4.4 — Fisico & Ambiental (PENDENTE)

| ID | Story | Pontos | Status | Notas |
|----|-------|--------|--------|-------|
| CORTEX-059 | Vestuario (camiseta, polo, jaqueta) | 5 | **PENDING** | Templates de aplicacao em vestuario com logo Cortex. |
| CORTEX-060 | Brindes (caneca, caderno, adesivo, mousepad) | 5 | **PENDING** | Templates de brindes corporativos. |
| CORTEX-061 | Banner de Evento / Backdrop | 3 | **PENDING** | Template para evento presencial / stand. |
| CORTEX-062 | Material de Onboarding (kit boas-vindas) | 3 | **PENDING** | Kit fisico para novos clientes Cortex. |

**Resumo BRAND-APP:** 15/20 DONE (75%) — Pendente: mobile mockup + 4 itens fisicos (21 pts)

---

## Resumo Geral

### Por Epico

| Epico | Done | Pending | Total | % Complete | Story Points Pendentes |
|-------|------|---------|-------|------------|----------------------|
| Lancamento (stories.yaml) | 0 | 5 | 5 | 0% | — (sizing por T-shirt) |
| DS-PROD | 23 | 2 | 25 | 92% | 16 pts |
| DS-QUALITY | 1 | 9 | 10 | 10% | 68 pts |
| DS-MATURITY | 0 | 7 | 7 | 0% | 52 pts |
| BRAND-APP | 15 | 5 | 20 | 75% | 21 pts |
| **TOTAL** | **39** | **28** | **67** | **58%** | **157 pts** |

### Proximos Passos Recomendados (ordem de prioridade)

1. **CORTEX-S001** — Decidir tagline (desbloqueia copies e site)
2. **CORTEX-S002** — Iniciar execucao do logo com designer (leva mais tempo)
3. **CORTEX-001** — Light Mode Theme no DS (13 pts)
4. **CORTEX-025** — Sync Component Registry (3 pts, desbloqueia testes)
5. **CORTEX-S004** — Produzir copies reais (desbloqueia site e canais)
6. **CORTEX-S003** — Reconstruir landing page em Next.js com DS
7. **CORTEX-S005** — Configurar dominio + Instagram + WhatsApp
8. **CORTEX-026-029** — Testes unitarios (34 pts, cobertura 80%)
9. **CORTEX-032** — npm build pipeline (DS instalavel como pacote)
