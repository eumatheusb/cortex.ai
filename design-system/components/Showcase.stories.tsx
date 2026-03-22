import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import type { ColumnDef } from '@tanstack/react-table'

import { Button }                from './atoms/Button/Button'
import { Input }                 from './atoms/Input/Input'
import { Badge }                 from './atoms/Badge/Badge'
import { Avatar, AvatarGroup }   from './atoms/Avatar/Avatar'
import { Spinner }               from './atoms/Spinner/Spinner'
import { Tag }                   from './atoms/Tag/Tag'
import { Tooltip }               from './atoms/Tooltip/Tooltip'
import { Checkbox }              from './atoms/Checkbox/Checkbox'
import { Switch }                from './atoms/Switch/Switch'
import { RadioGroup }            from './atoms/RadioGroup/RadioGroup'
import { Textarea }              from './atoms/Textarea/Textarea'
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard } from './atoms/Skeleton/Skeleton'
import { Progress, CircularProgress } from './atoms/Progress/Progress'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator } from './atoms/Select/Select'
import { Popover, PopoverTrigger, PopoverContent } from './atoms/Popover/Popover'
import { Label }                 from './atoms/Label/Label'
import { CortexLogo }            from './atoms/Logo/Logo'

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './molecules/Card/Card'
import { Alert }                 from './molecules/Alert/Alert'
import { Stat, StatGrid }        from './molecules/Stat/Stat'
import { Breadcrumb }            from './molecules/Breadcrumb/Breadcrumb'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './molecules/Tabs/Tabs'
import { ToastProvider, useToast } from './molecules/Toast/Toast'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut } from './molecules/DropdownMenu/DropdownMenu'
import { FormField, FormSection } from './molecules/FormField/FormField'
import { Pagination }            from './molecules/Pagination/Pagination'

import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, ModalClose } from './organisms/Modal/Modal'
import { PageHeader }            from './organisms/PageHeader/PageHeader'
import { EmptyState }            from './organisms/EmptyState/EmptyState'
import { DataTable }             from './organisms/DataTable/DataTable'
import { Sidebar, type NavItem } from './organisms/Sidebar/Sidebar'

// ── New atom imports (Phase 7) ──
import { Slider }                from './atoms/Slider/Slider'
import { OTPInput }              from './atoms/OTPInput/OTPInput'
import { TimePicker }            from './atoms/TimePicker/TimePicker'
import { DatePicker }            from './atoms/DatePicker/DatePicker'
import { Combobox }              from './atoms/Combobox/Combobox'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './atoms/Accordion/Accordion'

// ── New molecule imports (Phase 7) ──
import { FileUpload }            from './molecules/FileUpload/FileUpload'
import { KPICard, KPIGrid }     from './molecules/KPICard/KPICard'
import { AvatarUpload }          from './molecules/AvatarUpload/AvatarUpload'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerBody, DrawerFooter } from './molecules/Drawer/Drawer'
import { Stepper }               from './molecules/Stepper/Stepper'
import { ConfirmDialog }         from './molecules/ConfirmDialog/ConfirmDialog'
import { NavigationMenu }        from './molecules/NavigationMenu/NavigationMenu'
import { ResizablePanels }       from './molecules/ResizablePanels/ResizablePanels'

// ── New organism imports (Phase 7) ──
import { CommandPalette }        from './organisms/CommandPalette/CommandPalette'
import { NotificationCenter }    from './organisms/NotificationCenter/NotificationCenter'
import { BarChart }              from './organisms/Charts/BarChart/BarChart'
import { LineChart }             from './organisms/Charts/LineChart/LineChart'
import { PieChart as CortexPieChart } from './organisms/Charts/PieChart/PieChart'
import { FunnelChart }           from './organisms/Charts/FunnelChart/FunnelChart'
import { Calendar as CortexCalendar } from './organisms/Calendar/Calendar'
import { Timeline }              from './organisms/Timeline/Timeline'
import { KanbanBoard }           from './organisms/KanbanBoard/KanbanBoard'

import {
  Plus, Download, Search, Mail, Lock, Eye,
  Users, DollarSign, TrendingUp, Target,
  MoreHorizontal, Edit, Trash2, Settings, Copy,
  Info, LayoutDashboard, BarChart3, Zap, Bell,
  Phone, Calendar as CalendarIcon, ArrowLeft, ArrowRight, MapPin,
  FileText, MessageSquare, Clock, Shield, CheckCircle2,
  Activity, PieChart, Filter, ChevronRight, Building2,
  Send, Star, Tag as TagIcon, Hash, Globe, ExternalLink,
  Upload, GripVertical, Command, BellRing,
} from 'lucide-react'

/* ─── tokens ────────────────────────────────────────────────────────────── */
const T = {
  void:    '#090E1A',
  ink:     '#0C1220',
  dusk:    '#1B2845',
  steel:   '#1E2533',
  ash:     '#4A5568',
  mist:    '#94A3B8',
  white:   '#F7F9FC',
  signal:  '#4D71FA',
  success: '#22C55E',
  warning: '#F59E0B',
  error:   '#F43F5E',
}

/* ─── Layout helpers ─────────────────────────────────────────────────────── */
function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, margin: 0 }}>
        {title}
      </p>
      {children}
    </div>
  )
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
      {children}
    </div>
  )
}

function Grid({ cols = 4, children }: { cols?: number; children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 12 }}>
      {children}
    </div>
  )
}

function Divider({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '8px 0' }}>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: T.white, margin: 0, whiteSpace: 'nowrap' }}>
        {label}
      </h2>
      <div style={{ flex: 1, height: 1, background: T.steel }} />
    </div>
  )
}

function Swatch({ name, hex, label }: { name: string; hex: string; label: string }) {
  const isDark = ['#090e1a', '#0c1220'].includes(hex.toLowerCase())
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{
        height: 52, borderRadius: 8, background: hex,
        border: isDark ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(255,255,255,0.08)',
      }} />
      <p style={{ fontSize: 11, fontFamily: 'monospace', color: T.white, margin: 0 }}>{name}</p>
      <p style={{ fontSize: 10, color: T.mist, margin: 0 }}>{hex}</p>
      <p style={{ fontSize: 10, color: T.ash, margin: 0 }}>{label}</p>
    </div>
  )
}

/* ─── Sidebar nav items ──────────────────────────────────────────────────── */
const sidebarItems: NavItem[] = [
  { id: 'dashboard',    label: 'Dashboard',     icon: <LayoutDashboard size={18} /> },
  { id: 'crm',          label: 'CRM / Leads',   icon: <Users size={18} />, badge: 12 },
  { id: 'relatorios',   label: 'Relatórios',    icon: <BarChart3 size={18} /> },
  { id: 'notificacoes', label: 'Notificações',  icon: <Bell size={18} />, badge: 3, badgeVariant: 'error' },
  { id: 'integracoes',  label: 'Integrações',   icon: <Zap size={18} /> },
  { id: 'config',       label: 'Configurações', icon: <Settings size={18} /> },
]

/* ─── DataTable data ─────────────────────────────────────────────────────── */
interface Lead { id: string; name: string; clinic: string; value: number; status: string }
const leads: Lead[] = [
  { id: '1', name: 'Dra. Camila Rocha',   clinic: 'OdontoVida SP', value: 3200, status: 'Fechado'     },
  { id: '2', name: 'Dr. Rodrigo Lima',    clinic: 'Sorriso Total', value: 2800, status: 'Proposta'    },
  { id: '3', name: 'Dra. Fernanda Costa', clinic: 'Clínica Bella', value: 5100, status: 'Qualificado' },
  { id: '4', name: 'Dr. Marcelo Andrade', clinic: 'DenteSã MG',    value: 1900, status: 'Novo'        },
]
const sV: Record<string, any> = { Fechado: 'success', Proposta: 'warning', Qualificado: 'primary', Novo: 'default' }
const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: 'name', header: 'Dentista',
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar name={row.original.name} size="sm" />
        <div>
          <p className="font-medium text-white text-sm">{row.original.name}</p>
          <p className="text-xs text-mist">{row.original.clinic}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'value', header: 'Valor',
    cell: ({ getValue }) => (
      <span className="font-mono text-sm font-medium text-white">
        R${(getValue() as number).toLocaleString('pt-BR')}
      </span>
    ),
  },
  {
    accessorKey: 'status', header: 'Status',
    cell: ({ getValue }) => {
      const s = getValue() as string
      return <Badge variant={sV[s]}>{s}</Badge>
    },
  },
  {
    id: '__actions__', header: '', enableSorting: false,
    cell: () => (
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem><Eye className="h-4 w-4" />Ver</DropdownMenuItem>
            <DropdownMenuItem><Edit className="h-4 w-4" />Editar</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem destructive><Trash2 className="h-4 w-4" />Excluir</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
]

/* ─── Toast demo ─────────────────────────────────────────────────────────── */
function ToastDemo() {
  const { toast } = useToast()
  return (
    <Row>
      <Button variant="secondary" size="sm" onClick={() => toast.success('Lead convertido!', { description: 'Dra. Camila assinou o contrato.' })}>Success</Button>
      <Button variant="secondary" size="sm" onClick={() => toast.error('Erro ao salvar', { description: 'Tente novamente.' })}>Error</Button>
      <Button variant="secondary" size="sm" onClick={() => toast.warning('Limite 80%', { description: 'Você está próximo do limite.' })}>Warning</Button>
      <Button variant="secondary" size="sm" onClick={() => toast.info('Integração ativa', { description: 'Meta Ads conectado.', action: { label: 'Ver', onClick: () => {} } })}>Info</Button>
    </Row>
  )
}

/* ─── Showcase ───────────────────────────────────────────────────────────── */
function Showcase() {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(3)
  const [sidebarActive, setSidebarActive] = React.useState('dashboard')

  const page: React.CSSProperties = { minHeight: '100vh', background: T.void, color: T.white, fontFamily: "'Inter', sans-serif" }
  const hero: React.CSSProperties = { background: T.ink, borderBottom: `1px solid ${T.steel}`, padding: '28px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 48 }
  const content: React.CSSProperties = { maxWidth: 1100, margin: '0 auto', padding: '0 48px 96px', display: 'flex', flexDirection: 'column', gap: 56 }
  const section: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 28 }

  return (
    <ToastProvider>
      <div style={page}>

        {/* Hero */}
        <div style={hero}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <CortexLogo variant="horizontal" theme="dark" mode="static" size={36} />
            <p style={{ fontSize: 13, color: T.mist, marginTop: 0 }}>
              Design System v2.0 — Catalogo completo
            </p>
          </div>
          <Row>
            <Badge variant="success" dot>59 componentes</Badge>
            <Badge variant="primary">WCAG AA</Badge>
            <Badge variant="default">Dark First</Badge>
          </Row>
        </div>

        <div style={content}>

          {/* ── ATOMS ──────────────────────────────────────────── */}
          <div style={section}>
            <Divider label="Atoms" />

            <Block title="Button — variantes">
              <Row>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </Row>
              <Row>
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
                <Button variant="primary" loading>Loading</Button>
                <Button variant="primary" leftIcon={<Plus size={15} />}>Com ícone</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </Row>
            </Block>

            <Block title="Badge">
              <Row>
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="ghost">Ghost</Badge>
                <Badge variant="primary" dot>Com dot</Badge>
                <Badge variant="success" size="sm">Small</Badge>
                <Badge variant="error" size="lg">Large</Badge>
              </Row>
            </Block>

            <Block title="Avatar">
              <Row>
                {([
                  { s: 'xs' as const, n: 'Camila Rocha' },
                  { s: 'sm' as const, n: 'Bruno Costa' },
                  { s: 'md' as const, n: 'Fernanda Lima' },
                  { s: 'lg' as const, n: 'Diego Souza' },
                  { s: 'xl' as const, n: 'Ana Beatriz' },
                ]).map(({ s, n }) => <Avatar key={s} name={n} size={s} />)}
                <div style={{ width: 1, height: 32, background: T.steel }} />
                <Avatar name="Online" size="md" status="online" />
                <Avatar name="Busy"   size="md" status="busy" />
                <Avatar name="Away"   size="md" status="away" />
                <Avatar name="Off"    size="md" status="offline" />
                <div style={{ width: 1, height: 32, background: T.steel }} />
                <AvatarGroup max={3} size="sm" avatars={[
                  { name: 'Ana Lima' }, { name: 'Bruno Costa' },
                  { name: 'Carla Santos' }, { name: 'Diego Rocha' }, { name: 'Eva Mendes' },
                ]} />
              </Row>
            </Block>

            <Block title="Input">
              <Grid cols={4}>
                <Input placeholder="Default" />
                <Input placeholder="Com ícone" leftIcon={<Search size={15} />} />
                <Input placeholder="Erro" state="error" hint="Campo obrigatório" />
                <Input placeholder="Sucesso" state="success" hint="Válido" />
                <Input type="password" placeholder="Senha" leftIcon={<Lock size={15} />} rightIcon={<Eye size={15} />} />
                <Input placeholder="E-mail" leftIcon={<Mail size={15} />} />
                <Input placeholder="Disabled" disabled />
              </Grid>
            </Block>

            <Block title="Checkbox">
              <Row>
                <Checkbox label="Não selecionado" />
                <Checkbox label="Selecionado" checked />
                <Checkbox label="Indeterminado" indeterminate />
                <Checkbox label="Com hint" hint="Informação extra" />
                <Checkbox label="Com erro" error="Obrigatório" />
                <Checkbox label="Desabilitado" disabled />
              </Row>
            </Block>

            <Block title="RadioGroup">
              <RadioGroup
                defaultValue="monthly"
                orientation="horizontal"
                items={[
                  { value: 'monthly', label: 'Mensal' },
                  { value: 'annual',  label: 'Anual', hint: '-20%' },
                  { value: 'custom',  label: 'Custom', disabled: true },
                ]}
              />
            </Block>

            <Block title="Switch">
              <Row>
                <Switch label="Notificações" />
                <Switch label="Modo escuro" defaultChecked />
                <Switch label="Desabilitado" disabled />
                <Switch size="sm" label="Small" />
                <Switch size="lg" label="Large" defaultChecked />
              </Row>
            </Block>

            <Block title="Textarea">
              <Grid cols={3}>
                <Textarea placeholder="Observações do lead..." label="Notas" />
                <Textarea placeholder="Escreva aqui..." label="Com contador" showCount maxLength={200} />
                <Textarea placeholder="Campo com erro" label="Descrição" error="Campo obrigatório." />
              </Grid>
            </Block>

            <Block title="Select">
              <Row>
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Status do lead" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="novo">Novo</SelectItem>
                    <SelectItem value="qualificado">Qualificado</SelectItem>
                    <SelectItem value="proposta">Proposta</SelectItem>
                    <SelectItem value="fechado">Fechado</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Selecione a clínica" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>São Paulo</SelectLabel>
                      <SelectItem value="sp1">OdontoVida SP</SelectItem>
                      <SelectItem value="sp2">Sorriso Total</SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectGroup>
                      <SelectLabel>Minas Gerais</SelectLabel>
                      <SelectItem value="mg1">DenteSã MG</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select disabled>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Desabilitado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">A</SelectItem>
                  </SelectContent>
                </Select>
              </Row>
            </Block>

            <Block title="Skeleton">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <p style={{ fontSize: 10, color: T.ash, margin: 0 }}>Text</p>
                  <SkeletonText lines={3} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <p style={{ fontSize: 10, color: T.ash, margin: 0 }}>Avatars</p>
                  <Row>
                    <SkeletonAvatar size="xs" />
                    <SkeletonAvatar size="sm" />
                    <SkeletonAvatar size="md" />
                    <SkeletonAvatar size="lg" />
                    <SkeletonAvatar size="xl" />
                  </Row>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <p style={{ fontSize: 10, color: T.ash, margin: 0 }}>Card</p>
                  <SkeletonCard lines={2} />
                </div>
              </div>
            </Block>

            <Block title="Progress">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Progress value={75}  label="Leads convertidos"   showValue />
                  <Progress value={45}  variant="success" label="Meta atingida"        showValue />
                  <Progress value={80}  variant="warning" label="Limite de uso"        showValue />
                  <Progress value={30}  variant="error"   label="Cancelamentos"        showValue />
                </div>
                <Row>
                  <CircularProgress value={72}  size="sm" />
                  <CircularProgress value={45}  size="md" variant="success" />
                  <CircularProgress value={88}  size="lg" variant="warning" />
                  <CircularProgress value={30}  size="xl" variant="error" />
                </Row>
              </div>
            </Block>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
              <Block title="Spinner">
                <Row>
                  {(['xs','sm','md','lg','xl'] as const).map(s => <Spinner key={s} size={s} />)}
                </Row>
              </Block>
              <Block title="Tag">
                <Row>
                  <Tag>Default</Tag>
                  <Tag variant="primary">Primary</Tag>
                  <Tag variant="success">Success</Tag>
                  <Tag variant="warning">Warning</Tag>
                  <Tag variant="error" removable onRemove={() => {}}>Removível</Tag>
                </Row>
              </Block>
              <Block title="Tooltip">
                <Row>
                  {(['top','right','bottom'] as const).map(side => (
                    <Tooltip key={side} content={`Tooltip ${side}`} side={side}>
                      <Button variant="outline" size="sm">{side}</Button>
                    </Tooltip>
                  ))}
                </Row>
              </Block>
            </div>

            <Block title="Popover">
              <Row>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="secondary" leftIcon={<Info size={15} />}>Abrir popover</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <p className="text-sm font-medium text-white mb-1">Detalhes do lead</p>
                    <p className="text-xs text-mist">Última interação há 2 dias. Score de qualificação: 87/100.</p>
                  </PopoverContent>
                </Popover>
              </Row>
            </Block>

            <Block title="Label">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Label>Padrão</Label>
                <Label required>Campo obrigatório</Label>
                <Label optional>Campo opcional</Label>
                <Label hint="Será usado para notificações e recuperação de senha.">Com hint</Label>
              </div>
            </Block>

            <Block title="Logo">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <Row>
                  <CortexLogo variant="horizontal" theme="dark" mode="static" size={48} />
                  <CortexLogo variant="icon"       theme="dark" mode="static" size={48} />
                  <CortexLogo variant="wordmark"   theme="dark" mode="static" size={32} />
                </Row>
                <Row>
                  <CortexLogo variant="icon" theme="dark" mode="loader" size={40} />
                  <CortexLogo variant="icon" theme="dark" mode="idle"   size={40} />
                </Row>
              </div>
            </Block>

            <Block title="Slider">
              <div style={{ maxWidth: 400 }}>
                <Slider defaultValue={[40]} max={100} step={1} />
              </div>
            </Block>

            <Block title="OTPInput">
              <OTPInput length={6} />
            </Block>

            <Block title="TimePicker">
              <Row>
                <TimePicker />
              </Row>
            </Block>

            <Block title="DatePicker">
              <Row>
                <DatePicker />
              </Row>
            </Block>

            <Block title="Combobox">
              <div style={{ maxWidth: 300 }}>
                <Combobox
                  options={[
                    { value: 'sp', label: 'Sao Paulo' },
                    { value: 'rj', label: 'Rio de Janeiro' },
                    { value: 'mg', label: 'Minas Gerais' },
                    { value: 'pr', label: 'Parana' },
                  ]}
                  placeholder="Selecione o estado"
                />
              </div>
            </Block>

            <Block title="Accordion">
              <div style={{ maxWidth: 500 }}>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>O que e o Cortex?</AccordionTrigger>
                    <AccordionContent>
                      Sistema operacional de crescimento para dentistas. CRM proprio, IA proprietaria e clinicas reais como laboratorio.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Como funciona a integracao?</AccordionTrigger>
                    <AccordionContent>
                      Conectamos com Meta Ads, Google Ads e outras plataformas para captar e qualificar leads automaticamente.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Qual o preco?</AccordionTrigger>
                    <AccordionContent>
                      Planos a partir de R$497/mes com suporte dedicado e implementacao assistida.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Block>
          </div>

          {/* ── MOLECULES ────────────────────────────────────────── */}
          <div style={section}>
            <Divider label="Molecules" />

            <Block title="Stat">
              <StatGrid cols={4}>
                <Stat label="Leads gerados"  value="1.284"   trend="up"   trendValue="+18%"   trendLabel="este mês"        icon={<Users      size={18} />} />
                <Stat label="Faturamento"    value="R$48.2K" trend="up"   trendValue="+12.4%" trendLabel="vs mês anterior"  variant="signal"  icon={<DollarSign size={18} />} />
                <Stat label="Taxa conversão" value="6.8%"    trend="down" trendValue="-0.3pp" trendLabel="vs semana"        icon={<Target     size={18} />} />
                <Stat label="Ticket médio"   value="R$1.240" trend="up"   trendValue="+R$80"  trendLabel="vs mês anterior"  icon={<TrendingUp size={18} />} />
              </StatGrid>
            </Block>

            <Block title="Tabs">
              <Tabs defaultValue="leads">
                <TabsList>
                  <TabsTrigger value="leads" badge={12}>Leads</TabsTrigger>
                  <TabsTrigger value="clientes">Clientes</TabsTrigger>
                  <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
                </TabsList>
                <TabsContent value="leads">
                  <Card variant="default" padding="md"><p className="text-mist text-sm">Conteúdo de Leads</p></Card>
                </TabsContent>
                <TabsContent value="clientes">
                  <Card variant="default" padding="md"><p className="text-mist text-sm">Conteúdo de Clientes</p></Card>
                </TabsContent>
                <TabsContent value="relatorios">
                  <Card variant="default" padding="md"><p className="text-mist text-sm">Conteúdo de Relatórios</p></Card>
                </TabsContent>
              </Tabs>
            </Block>

            <Block title="Toast">
              <ToastDemo />
            </Block>

            <Block title="Card — variantes">
              <Grid cols={3}>
                {(['default','elevated','bordered','ghost','interactive','signal'] as const).map(v => (
                  <Card key={v} variant={v} padding="md">
                    <p className="text-sm font-semibold text-white capitalize mb-1">{v}</p>
                    <p className="text-xs text-mist">Variante {v}</p>
                  </Card>
                ))}
              </Grid>
            </Block>

            <Block title="Alert">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Alert variant="info"    title="Info">Seu plano renova em 7 dias.</Alert>
                <Alert variant="success" title="Sucesso" dismissible>Lead convertido com sucesso.</Alert>
                <Alert variant="warning" title="Atenção">Limite de leads em 80%.</Alert>
                <Alert variant="error"   title="Erro">Falha ao sincronizar com CRM.</Alert>
              </div>
            </Block>

            <Block title="Breadcrumb">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Breadcrumb items={[{ label: 'CRM' }, { label: 'Leads' }]} />
                <Breadcrumb items={[{ label: 'CRM' }, { label: 'Leads' }, { label: 'Dra. Camila Rocha' }]} />
                <Breadcrumb items={[{ label: 'Config.' }, { label: 'Integrações' }, { label: 'Meta Ads' }]} showHome />
              </div>
            </Block>

            <Block title="DropdownMenu">
              <Row>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Ações do lead</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Eye className="h-4 w-4" />Ver detalhes<DropdownMenuShortcut>⌘V</DropdownMenuShortcut></DropdownMenuItem>
                    <DropdownMenuItem><Edit className="h-4 w-4" />Editar<DropdownMenuShortcut>⌘E</DropdownMenuShortcut></DropdownMenuItem>
                    <DropdownMenuItem><Copy className="h-4 w-4" />Duplicar</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem destructive><Trash2 className="h-4 w-4" />Excluir<DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" leftIcon={<Settings size={15} />}>Configurações</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem><Settings className="h-4 w-4" />Perfil</DropdownMenuItem>
                    <DropdownMenuItem><Users className="h-4 w-4" />Equipe</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem destructive><Trash2 className="h-4 w-4" />Sair</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Row>
            </Block>

            <Block title="FormField">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <FormSection title="Dados do lead" description="Informações básicas para o CRM.">
                  <FormField label="Nome" placeholder="Dr. Rodrigo Lima" required />
                  <FormField label="E-mail" placeholder="rodrigo@clinica.com" leftIcon={<Mail size={15} />} />
                  <FormField label="Clínica" placeholder="Sorriso Total" optional hint="Nome da clínica principal" />
                </FormSection>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, margin: 0 }}>Estados</p>
                  <FormField label="Padrão" placeholder="Digite aqui..." />
                  <FormField label="Com erro" placeholder="Digite aqui..." error="Campo obrigatório." />
                  <FormField label="Desabilitado" placeholder="Sem edição" disabled />
                </div>
              </div>
            </Block>

            <Block title="Pagination">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
                <Pagination currentPage={currentPage} totalPages={12} onPageChange={setCurrentPage} />
                <p style={{ fontSize: 12, color: T.mist, margin: 0 }}>Pagina {currentPage} de 12 — {leads.length * currentPage} registros</p>
              </div>
            </Block>

            <Block title="FileUpload">
              <div style={{ maxWidth: 500 }}>
                <FileUpload accept="image/*,.pdf" maxSize={5 * 1024 * 1024} />
              </div>
            </Block>

            <Block title="KPICard">
              <KPIGrid>
                <KPICard label="Leads gerados" value="1.284" trend="up" trendValue="+18%" icon={<Users size={18} />} />
                <KPICard label="Faturamento" value="R$48.2K" trend="up" trendValue="+12.4%" icon={<DollarSign size={18} />} />
                <KPICard label="Taxa conversao" value="6.8%" trend="down" trendValue="-0.3pp" icon={<Target size={18} />} />
              </KPIGrid>
            </Block>

            <Block title="AvatarUpload">
              <AvatarUpload />
            </Block>

            <Block title="Drawer">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="secondary">Abrir Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Detalhes do lead</DrawerTitle>
                  </DrawerHeader>
                  <DrawerBody>
                    <p className="text-mist text-sm">Conteudo do drawer com informacoes detalhadas do lead.</p>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button variant="primary">Salvar</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Block>

            <Block title="Stepper">
              <Stepper
                steps={[
                  { label: 'Dados basicos', status: 'complete' },
                  { label: 'Contato', status: 'current' },
                  { label: 'Qualificacao', status: 'upcoming' },
                  { label: 'Revisao', status: 'upcoming' },
                ]}
              />
            </Block>

            <Block title="ConfirmDialog">
              <ConfirmDialog
                trigger={<Button variant="destructive" size="sm">Excluir lead</Button>}
                title="Excluir lead?"
                description="Esta acao nao pode ser desfeita. O lead sera removido permanentemente."
                confirmLabel="Excluir"
                variant="destructive"
                onConfirm={() => {}}
              />
            </Block>

            <Block title="NavigationMenu">
              <NavigationMenu
                items={[
                  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
                  { id: 'leads', label: 'Leads', icon: <Users size={16} />, active: true },
                  { id: 'relatorios', label: 'Relatorios', icon: <BarChart3 size={16} /> },
                ]}
              />
            </Block>

            <Block title="ResizablePanels">
              <div style={{ height: 200, border: `1px solid ${T.steel}`, borderRadius: 8, overflow: 'hidden' }}>
                <ResizablePanels
                  panels={[
                    { id: 'left', defaultSize: 30, minSize: 20, children: <div className="p-4 h-full bg-ink"><p className="text-mist text-sm font-medium">Sidebar</p><p className="text-xs text-ash mt-2">Menu, filtros, navegação</p></div> },
                    { id: 'center', defaultSize: 45, minSize: 25, children: <div className="p-4 h-full"><p className="text-mist text-sm font-medium">Conteúdo principal</p><p className="text-xs text-ash mt-2">Lista de leads, tabelas, dados</p></div> },
                    { id: 'right', defaultSize: 25, minSize: 15, children: <div className="p-4 h-full bg-ink"><p className="text-mist text-sm font-medium">Detalhes</p><p className="text-xs text-ash mt-2">Info do lead selecionado</p></div> },
                  ]}
                />
              </div>
            </Block>
          </div>

          {/* ── ORGANISMS ────────────────────────────────────────── */}
          <div style={section}>
            <Divider label="Organisms" />

            <Block title="Sidebar">
              <div style={{ height: 320, display: 'flex', borderRadius: 12, overflow: 'hidden', border: `1px solid ${T.steel}` }}>
                <Sidebar
                  items={sidebarItems}
                  activeId={sidebarActive}
                  onNavigate={(item) => setSidebarActive(item.id)}
                  logo={<span className="font-display font-bold text-white">Cor<span className="text-signal">tex</span></span>}
                  logoCollapsed={<span className="font-display font-bold text-signal">C</span>}
                />
                <div style={{ flex: 1, background: T.void, padding: 24, display: 'flex', alignItems: 'center' }}>
                  <p className="text-mist text-sm">Seção ativa: <span className="text-white font-medium">{sidebarActive}</span></p>
                </div>
              </div>
            </Block>

            <Block title="PageHeader">
              <div style={{ background: T.ink, border: `1px solid ${T.steel}`, borderRadius: 12, padding: 24 }}>
                <PageHeader
                  title="Leads"
                  description="Gerencie todos os leads da sua carteira."
                  badge="284 ativos"
                  breadcrumbs={[{ label: 'CRM' }, { label: 'Leads' }]}
                  actions={
                    <Row>
                      <Button variant="secondary" leftIcon={<Download size={15} />}>Exportar</Button>
                      <Button variant="primary"   leftIcon={<Plus size={15} />}>Novo lead</Button>
                    </Row>
                  }
                />
              </div>
            </Block>

            <Block title="DataTable">
              <DataTable<Lead>
                data={leads}
                columns={columns}
                searchable
                selectable
                searchPlaceholder="Buscar dentista..."
                pageSize={4}
                emptyTitle="Nenhum lead"
                emptyDescription="Sem resultados."
              />
            </Block>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <Block title="Modal">
                <div style={{ background: T.dusk, border: `1px solid ${T.steel}`, borderRadius: 12, padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Button variant="primary" onClick={() => setModalOpen(true)}>Abrir modal</Button>
                </div>
                <Modal open={modalOpen} onOpenChange={setModalOpen} size="md">
                  <ModalHeader><ModalTitle>Novo lead</ModalTitle></ModalHeader>
                  <ModalBody>
                    <div className="flex flex-col gap-4">
                      <Input label="Nome" placeholder="Dr. Fulano de Tal" />
                      <Input label="Clínica" placeholder="Clínica XYZ" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Status inicial" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="novo">Novo</SelectItem>
                          <SelectItem value="qualificado">Qualificado</SelectItem>
                        </SelectContent>
                      </Select>
                      <Textarea label="Observações" placeholder="Notas sobre o lead..." rows={3} />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <ModalClose asChild><Button variant="ghost">Cancelar</Button></ModalClose>
                    <Button variant="primary">Salvar</Button>
                  </ModalFooter>
                </Modal>
              </Block>

              <Block title="EmptyState">
                <div style={{ background: T.dusk, border: `1px solid ${T.steel}`, borderRadius: 12, padding: 24 }}>
                  <EmptyState
                    icon={<Users size={28} />}
                    title="Nenhum lead encontrado"
                    description="Adicione seu primeiro lead."
                    size="sm"
                    actions={[{ label: 'Adicionar lead', variant: 'primary', onClick: () => {} }]}
                  />
                </div>
              </Block>
            </div>
          </div>

          {/* ── TEMPLATES ──────────────────────────────────────── */}
          <div style={section}>
            <Divider label="Templates" />

            {/* ─── Dashboard Template ─────────────────────────────── */}
            <Block title="Dashboard Template">
              <div style={{ border: `1px solid ${T.steel}`, borderRadius: 16, overflow: 'hidden', background: T.void }}>
                {/* Top bar */}
                <div style={{ background: T.ink, borderBottom: `1px solid ${T.steel}`, padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <CortexLogo variant="horizontal" theme="dark" mode="static" size={28} />
                    <div style={{ width: 1, height: 20, background: T.steel }} />
                    <div style={{ display: 'flex', gap: 4 }}>
                      {['Dashboard', 'CRM', 'Relatórios', 'Integrações'].map((n, i) => (
                        <span key={n} style={{ fontSize: 12, color: i === 0 ? T.white : T.mist, padding: '6px 12px', borderRadius: 6, background: i === 0 ? T.dusk : 'transparent', fontWeight: i === 0 ? 600 : 400 }}>{n}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ position: 'relative' }}>
                      <Bell size={16} color={T.mist} />
                      <div style={{ position: 'absolute', top: -2, right: -2, width: 7, height: 7, borderRadius: '50%', background: T.error, border: `2px solid ${T.ink}` }} />
                    </div>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: T.signal, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: T.white }}>MB</div>
                  </div>
                </div>

                <div style={{ display: 'flex' }}>
                  {/* Sidebar */}
                  <div style={{ width: 220, background: T.ink, borderRight: `1px solid ${T.steel}`, padding: '20px 12px', display: 'flex', flexDirection: 'column', gap: 4, flexShrink: 0 }}>
                    {[
                      { icon: LayoutDashboard, label: 'Dashboard',    active: true },
                      { icon: Users,           label: 'CRM / Leads',  badge: 12 },
                      { icon: BarChart3,       label: 'Relatórios' },
                      { icon: Target,          label: 'Campanhas' },
                      { icon: Zap,             label: 'Integrações' },
                      { icon: Bell,            label: 'Notificações', badge: 3 },
                    ].map(({ icon: Icon, label, active, badge }) => (
                      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, background: active ? T.dusk : 'transparent', cursor: 'pointer' }}>
                        <Icon size={16} color={active ? T.signal : T.ash} />
                        <span style={{ fontSize: 13, color: active ? T.white : T.mist, fontWeight: active ? 500 : 400, flex: 1 }}>{label}</span>
                        {badge && <span style={{ fontSize: 10, fontWeight: 600, color: T.white, background: active ? T.signal : T.ash, padding: '1px 7px', borderRadius: 99 }}>{badge}</span>}
                      </div>
                    ))}
                    <div style={{ flex: 1 }} />
                    <div style={{ borderTop: `1px solid ${T.steel}`, paddingTop: 12, marginTop: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8 }}>
                        <Settings size={16} color={T.ash} />
                        <span style={{ fontSize: 13, color: T.mist }}>Configurações</span>
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div style={{ flex: 1, padding: 28, display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {/* Page header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: T.white, margin: 0 }}>Dashboard</h2>
                        <p style={{ fontSize: 13, color: T.mist, marginTop: 4 }}>Visão geral da sua clínica — Março 2026</p>
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 8, border: `1px solid ${T.steel}`, fontSize: 12, color: T.mist, cursor: 'pointer' }}>
                          <CalendarIcon size={13} /> Últimos 30 dias <ChevronRight size={12} style={{ transform: 'rotate(90deg)' }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 8, background: T.signal, fontSize: 12, fontWeight: 600, color: T.white, cursor: 'pointer' }}>
                          <Download size={13} /> Exportar
                        </div>
                      </div>
                    </div>

                    {/* Stats row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                      {[
                        { label: 'Leads gerados',  value: '1.284',   trend: '+18%',    icon: Users,      color: T.signal },
                        { label: 'Faturamento',    value: 'R$48.2K', trend: '+12.4%',   icon: DollarSign, color: T.success },
                        { label: 'Taxa conversão', value: '6.8%',    trend: '-0.3pp',   icon: Target,     color: T.warning },
                        { label: 'Ticket médio',   value: 'R$1.240', trend: '+R$80',    icon: TrendingUp, color: T.signal },
                      ].map(({ label, value, trend, icon: Icon, color }) => (
                        <div key={label} style={{ background: T.ink, border: `1px solid ${T.steel}`, borderRadius: 12, padding: 18 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                            <span style={{ fontSize: 12, color: T.mist }}>{label}</span>
                            <div style={{ width: 32, height: 32, borderRadius: 8, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <Icon size={15} color={color} />
                            </div>
                          </div>
                          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 24, color: T.white, margin: 0 }}>{value}</p>
                          <p style={{ fontSize: 11, color: trend.startsWith('-') ? T.error : T.success, marginTop: 4 }}>{trend} <span style={{ color: T.ash }}>vs mês anterior</span></p>
                        </div>
                      ))}
                    </div>

                    {/* Charts area */}
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
                      {/* Line chart placeholder */}
                      <div style={{ background: T.ink, border: `1px solid ${T.steel}`, borderRadius: 12, padding: 20 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                          <div>
                            <p style={{ fontSize: 14, fontWeight: 600, color: T.white, margin: 0 }}>Leads por semana</p>
                            <p style={{ fontSize: 12, color: T.mist, marginTop: 2 }}>Evolução das últimas 8 semanas</p>
                          </div>
                          <div style={{ display: 'flex', gap: 12, fontSize: 11 }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: T.mist }}><div style={{ width: 8, height: 3, borderRadius: 2, background: T.signal }} /> Gerados</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: T.mist }}><div style={{ width: 8, height: 3, borderRadius: 2, background: T.success }} /> Convertidos</span>
                          </div>
                        </div>
                        {/* Chart bars */}
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 140, paddingTop: 8 }}>
                          {[65, 78, 52, 90, 85, 110, 95, 120].map((h, i) => (
                            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                              <div style={{ width: '100%', display: 'flex', gap: 3 }}>
                                <div style={{ flex: 1, height: h, background: `linear-gradient(180deg, ${T.signal}, ${T.signal}60)`, borderRadius: '4px 4px 2px 2px' }} />
                                <div style={{ flex: 1, height: h * 0.35, background: `linear-gradient(180deg, ${T.success}, ${T.success}60)`, borderRadius: '4px 4px 2px 2px', marginTop: 'auto' }} />
                              </div>
                              <span style={{ fontSize: 9, color: T.ash }}>S{i + 1}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Donut chart placeholder */}
                      <div style={{ background: T.ink, border: `1px solid ${T.steel}`, borderRadius: 12, padding: 20 }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: T.white, margin: '0 0 4px' }}>Funil de leads</p>
                        <p style={{ fontSize: 12, color: T.mist, marginBottom: 20 }}>Distribuição por status</p>
                        {/* Donut */}
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                          <svg viewBox="0 0 100 100" width="120" height="120">
                            <circle cx="50" cy="50" r="38" fill="none" stroke={T.steel} strokeWidth="12" />
                            <circle cx="50" cy="50" r="38" fill="none" stroke={T.signal} strokeWidth="12" strokeDasharray="96 143" strokeDashoffset="0" strokeLinecap="round" />
                            <circle cx="50" cy="50" r="38" fill="none" stroke={T.success} strokeWidth="12" strokeDasharray="48 191" strokeDashoffset="-96" strokeLinecap="round" />
                            <circle cx="50" cy="50" r="38" fill="none" stroke={T.warning} strokeWidth="12" strokeDasharray="36 203" strokeDashoffset="-144" strokeLinecap="round" />
                            <circle cx="50" cy="50" r="38" fill="none" stroke={T.error} strokeWidth="12" strokeDasharray="24 215" strokeDashoffset="-180" strokeLinecap="round" />
                            <text x="50" y="47" textAnchor="middle" fill={T.white} fontSize="16" fontWeight="700" fontFamily="'Space Grotesk', sans-serif">284</text>
                            <text x="50" y="59" textAnchor="middle" fill={T.mist} fontSize="8">total</text>
                          </svg>
                        </div>
                        {/* Legend */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {[
                            { label: 'Novos',        pct: '40%', count: 114, color: T.signal  },
                            { label: 'Qualificados', pct: '20%', count: 57,  color: T.success },
                            { label: 'Proposta',     pct: '15%', count: 43,  color: T.warning },
                            { label: 'Perdidos',     pct: '10%', count: 28,  color: T.error   },
                          ].map(({ label, pct, count, color }) => (
                            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <div style={{ width: 8, height: 8, borderRadius: 2, background: color, flexShrink: 0 }} />
                              <span style={{ fontSize: 12, color: T.mist, flex: 1 }}>{label}</span>
                              <span style={{ fontFamily: 'monospace', fontSize: 11, color: T.white }}>{count}</span>
                              <span style={{ fontFamily: 'monospace', fontSize: 10, color: T.ash, width: 28, textAlign: 'right' }}>{pct}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Recent leads table */}
                    <div style={{ background: T.ink, border: `1px solid ${T.steel}`, borderRadius: 12, overflow: 'hidden' }}>
                      <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.steel}` }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: T.white, margin: 0 }}>Leads recentes</p>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 6, border: `1px solid ${T.steel}`, fontSize: 12, color: T.mist }}>
                            <Filter size={12} /> Filtrar
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 6, border: `1px solid ${T.steel}`, fontSize: 12, color: T.mist }}>
                            <Search size={12} /> Buscar
                          </div>
                        </div>
                      </div>
                      {/* Table */}
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                        <thead>
                          <tr style={{ borderBottom: `1px solid ${T.steel}` }}>
                            {['Dentista', 'Clínica', 'Valor', 'Status', 'Data', ''].map(h => (
                              <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: T.ash, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { name: 'Dra. Camila Rocha',   clinic: 'OdontoVida SP',  value: 'R$3.200', status: 'Fechado',     statusColor: T.success, date: '18 mar' },
                            { name: 'Dr. Rodrigo Lima',    clinic: 'Sorriso Total',  value: 'R$2.800', status: 'Proposta',    statusColor: T.warning, date: '17 mar' },
                            { name: 'Dra. Fernanda Costa', clinic: 'Clínica Bella',  value: 'R$5.100', status: 'Qualificado', statusColor: T.signal,  date: '16 mar' },
                            { name: 'Dr. Marcelo Andrade', clinic: 'DenteSã MG',     value: 'R$1.900', status: 'Novo',        statusColor: T.mist,    date: '15 mar' },
                          ].map((row) => (
                            <tr key={row.name} style={{ borderBottom: `1px solid ${T.steel}` }}>
                              <td style={{ padding: '12px 16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: T.dusk, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, color: T.mist }}>{row.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</div>
                                  <span style={{ color: T.white, fontWeight: 500 }}>{row.name}</span>
                                </div>
                              </td>
                              <td style={{ padding: '12px 16px', color: T.mist }}>{row.clinic}</td>
                              <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontWeight: 600, color: T.white }}>{row.value}</td>
                              <td style={{ padding: '12px 16px' }}>
                                <span style={{ fontSize: 11, fontWeight: 500, color: row.statusColor, background: `${row.statusColor}15`, padding: '3px 10px', borderRadius: 99 }}>{row.status}</span>
                              </td>
                              <td style={{ padding: '12px 16px', color: T.ash, fontSize: 12 }}>{row.date}</td>
                              <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                                <MoreHorizontal size={16} color={T.ash} style={{ cursor: 'pointer' }} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Block>

            {/* ─── Detail Template (Lead Detail + Sidebar) ──────── */}
            <Block title="Detail Template — Lead com Sidebar">
              <div style={{ border: `1px solid ${T.steel}`, borderRadius: 16, overflow: 'hidden', background: T.void }}>
                <div style={{ display: 'flex' }}>
                  {/* Sidebar */}
                  <div style={{ width: 64, background: T.ink, borderRight: `1px solid ${T.steel}`, padding: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <CortexLogo variant="icon" theme="dark" mode="static" size={32} />
                    <div style={{ width: 28, height: 1, background: T.steel, margin: '8px 0' }} />
                    {[LayoutDashboard, Users, BarChart3, Target, Zap, Bell, Settings].map((Icon, i) => (
                      <div key={i} style={{ width: 40, height: 40, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: i === 1 ? T.dusk : 'transparent' }}>
                        <Icon size={18} color={i === 1 ? T.signal : T.ash} />
                      </div>
                    ))}
                  </div>

                  {/* Main area */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Breadcrumb bar */}
                    <div style={{ padding: '14px 28px', borderBottom: `1px solid ${T.steel}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: T.ink }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                        <ArrowLeft size={16} color={T.mist} style={{ cursor: 'pointer' }} />
                        <span style={{ color: T.mist }}>CRM</span>
                        <ChevronRight size={12} color={T.ash} />
                        <span style={{ color: T.mist }}>Leads</span>
                        <ChevronRight size={12} color={T.ash} />
                        <span style={{ color: T.white, fontWeight: 500 }}>Dra. Camila Rocha</span>
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <div style={{ padding: '6px 12px', borderRadius: 8, border: `1px solid ${T.steel}`, fontSize: 12, color: T.mist, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}><Edit size={13} /> Editar</div>
                        <div style={{ padding: '6px 12px', borderRadius: 8, background: T.signal, fontSize: 12, fontWeight: 600, color: T.white, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}><Send size={13} /> Enviar proposta</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flex: 1 }}>
                      {/* Left: lead info */}
                      <div style={{ flex: 1, padding: 28, display: 'flex', flexDirection: 'column', gap: 24 }}>
                        {/* Header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                          <div style={{ width: 56, height: 56, borderRadius: '50%', background: `linear-gradient(135deg, ${T.signal}, ${T.signal}80)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: T.white }}>CR</div>
                          <div>
                            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: T.white, margin: 0 }}>Dra. Camila Rocha</h3>
                            <p style={{ fontSize: 13, color: T.mist, marginTop: 2 }}>OdontoVida SP · Implantodontia</p>
                          </div>
                          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                            <span style={{ fontSize: 11, fontWeight: 500, color: T.success, background: `${T.success}15`, padding: '4px 12px', borderRadius: 99 }}>Fechado</span>
                            <span style={{ fontSize: 11, fontWeight: 500, color: T.signal, background: `${T.signal}15`, padding: '4px 12px', borderRadius: 99, display: 'flex', alignItems: 'center', gap: 4 }}><Star size={11} /> Score 87</span>
                          </div>
                        </div>

                        {/* Info grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                          {[
                            { icon: Mail,     label: 'E-mail',    value: 'camila@odontovida.com.br' },
                            { icon: Phone,    label: 'Telefone',  value: '(11) 99847-3210' },
                            { icon: Building2,label: 'Clínica',   value: 'OdontoVida SP' },
                            { icon: MapPin,   label: 'Cidade',    value: 'São Paulo, SP' },
                            { icon: DollarSign,label:'Ticket',    value: 'R$3.200' },
                            { icon: CalendarIcon, label: 'Entrada',   value: '03 fev 2026' },
                          ].map(({ icon: Icon, label, value }) => (
                            <div key={label} style={{ display: 'flex', gap: 10, padding: 14, background: T.ink, borderRadius: 8, border: `1px solid ${T.steel}` }}>
                              <Icon size={15} color={T.ash} style={{ marginTop: 2 }} />
                              <div>
                                <p style={{ fontSize: 11, color: T.ash, margin: 0 }}>{label}</p>
                                <p style={{ fontSize: 13, color: T.white, margin: '2px 0 0', fontWeight: 500 }}>{value}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Notes */}
                        <div style={{ background: T.ink, border: `1px solid ${T.steel}`, borderRadius: 12, padding: 20 }}>
                          <p style={{ fontSize: 13, fontWeight: 600, color: T.white, margin: '0 0 12px' }}>Notas internas</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {[
                              { date: '18 mar', author: 'Matheus B.', text: 'Contrato assinado. Implementação começa em abril. Pacote implantes + ortho.' },
                              { date: '12 mar', author: 'Matheus B.', text: 'Reunião presencial na clínica. Dra. Camila muito interessada no módulo de relatórios.' },
                              { date: '03 fev', author: 'Sistema',    text: 'Lead gerado via campanha Meta Ads "Implantes SP Q1".' },
                            ].map((note, i) => (
                              <div key={i} style={{ padding: 12, background: T.dusk, borderRadius: 8, borderLeft: `2px solid ${i === 0 ? T.signal : T.steel}` }}>
                                <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                                  <span style={{ fontSize: 11, color: T.signal, fontWeight: 500 }}>{note.author}</span>
                                  <span style={{ fontSize: 11, color: T.ash }}>{note.date}</span>
                                </div>
                                <p style={{ fontSize: 13, color: T.mist, margin: 0, lineHeight: 1.5 }}>{note.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right panel: timeline */}
                      <div style={{ width: 280, borderLeft: `1px solid ${T.steel}`, background: T.ink, padding: 20, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <p style={{ fontSize: 13, fontWeight: 600, color: T.white, margin: 0 }}>Linha do tempo</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                          {[
                            { icon: CheckCircle2, color: T.success, label: 'Contrato assinado',      date: '18 mar', desc: 'R$3.200/mês' },
                            { icon: Send,         color: T.signal,  label: 'Proposta enviada',        date: '14 mar', desc: 'Pacote Premium' },
                            { icon: Phone,        color: T.mist,    label: 'Ligação realizada',       date: '12 mar', desc: '15 min' },
                            { icon: MessageSquare, color: T.mist,   label: 'WhatsApp enviado',        date: '08 mar', desc: 'Follow-up' },
                            { icon: Eye,          color: T.mist,    label: 'Proposta visualizada',    date: '06 mar', desc: '3x aberto' },
                            { icon: Mail,         color: T.mist,    label: 'E-mail de apresentação',  date: '04 fev', desc: 'Aberto 2x' },
                            { icon: Zap,          color: T.signal,  label: 'Lead capturado',          date: '03 fev', desc: 'Meta Ads' },
                          ].map(({ icon: Icon, color, label, date, desc }, i) => (
                            <div key={i} style={{ display: 'flex', gap: 12 }}>
                              {/* Timeline line */}
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 20, flexShrink: 0 }}>
                                <div style={{ width: 24, height: 24, borderRadius: '50%', background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <Icon size={12} color={color} />
                                </div>
                                {i < 6 && <div style={{ width: 1, flex: 1, background: T.steel, minHeight: 20 }} />}
                              </div>
                              <div style={{ paddingBottom: 16 }}>
                                <p style={{ fontSize: 12, color: T.white, fontWeight: 500, margin: 0 }}>{label}</p>
                                <p style={{ fontSize: 11, color: T.ash, margin: '2px 0 0' }}>{date} · {desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Block>

            {/* ─── Auth Template — Centered Login ──────────────────── */}
            <Block title="Auth Template — Centered Login">
              <div style={{ border: `1px solid ${T.steel}`, borderRadius: 16, overflow: 'hidden', background: T.void, padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 520 }}>
                <div style={{ width: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
                  <CortexLogo variant="horizontal" theme="dark" mode="static" size={48} />
                  <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: T.white, margin: 0 }}>Entrar no Cortex</h2>
                    <p style={{ fontSize: 13, color: T.mist, marginTop: 6 }}>Acesse sua central de comando.</p>
                  </div>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 500, color: T.mist, display: 'block', marginBottom: 6 }}>E-mail</label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 8, border: `1px solid ${T.steel}`, background: T.ink }}>
                        <Mail size={15} color={T.ash} />
                        <span style={{ fontSize: 13, color: T.ash }}>voce@clinica.com</span>
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                        <label style={{ fontSize: 12, fontWeight: 500, color: T.mist }}>Senha</label>
                        <span style={{ fontSize: 11, color: T.signal, cursor: 'pointer' }}>Esqueceu a senha?</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 8, border: `1px solid ${T.steel}`, background: T.ink }}>
                        <Lock size={15} color={T.ash} />
                        <span style={{ fontSize: 13, color: T.ash }}>••••••••</span>
                        <Eye size={15} color={T.ash} style={{ marginLeft: 'auto', cursor: 'pointer' }} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
                      <div style={{ width: 16, height: 16, borderRadius: 4, border: `1px solid ${T.steel}`, background: T.ink }} />
                      <span style={{ fontSize: 12, color: T.mist }}>Manter conectado</span>
                    </div>
                    <div style={{ padding: '11px 0', borderRadius: 8, background: T.signal, textAlign: 'center', fontSize: 14, fontWeight: 600, color: T.white, cursor: 'pointer', marginTop: 4 }}>
                      Entrar
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0' }}>
                      <div style={{ flex: 1, height: 1, background: T.steel }} />
                      <span style={{ fontSize: 11, color: T.ash }}>ou continue com</span>
                      <div style={{ flex: 1, height: 1, background: T.steel }} />
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <div style={{ flex: 1, padding: '10px 0', borderRadius: 8, border: `1px solid ${T.steel}`, textAlign: 'center', fontSize: 13, color: T.mist, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                        <Globe size={15} /> Google
                      </div>
                      <div style={{ flex: 1, padding: '10px 0', borderRadius: 8, border: `1px solid ${T.steel}`, textAlign: 'center', fontSize: 13, color: T.mist, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                        <Shield size={15} /> Microsoft
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: 12, color: T.ash, margin: 0 }}>
                    Não tem conta? <span style={{ color: T.signal, cursor: 'pointer' }}>Criar conta</span>
                  </p>
                </div>
              </div>
            </Block>

            {/* ─── Auth Template — Split Login ─────────────────────── */}
            <Block title="Auth Template — Split Login">
              <div style={{ border: `1px solid ${T.steel}`, borderRadius: 16, overflow: 'hidden', background: T.void, display: 'flex', minHeight: 520 }}>
                {/* Left — brand panel */}
                <div style={{ width: '45%', background: `linear-gradient(160deg, ${T.ink}, ${T.dusk})`, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: `1px solid ${T.steel}`, position: 'relative', overflow: 'hidden' }}>
                  {/* Decorative circles */}
                  <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', border: `1px solid ${T.signal}15`, opacity: 0.4 }} />
                  <div style={{ position: 'absolute', bottom: -40, left: -40, width: 150, height: 150, borderRadius: '50%', border: `1px solid ${T.signal}15`, opacity: 0.3 }} />
                  <div>
                    <CortexLogo variant="horizontal" theme="dark" mode="static" size={40} />
                    <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: T.white, margin: '32px 0 12px', lineHeight: 1.2 }}>
                      Controle total<br />da sua clínica.
                    </h2>
                    <p style={{ fontSize: 14, color: T.mist, lineHeight: 1.6, maxWidth: 320 }}>
                      CRM, relatórios e inteligência em um só lugar. Construído por dentistas, para dentistas.
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      { icon: Users,      text: '+1.200 clínicas ativas' },
                      { icon: TrendingUp, text: '18% mais conversões em média' },
                      { icon: Shield,     text: 'Dados protegidos — LGPD compliant' },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: `${T.signal}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Icon size={15} color={T.signal} />
                        </div>
                        <span style={{ fontSize: 13, color: T.mist }}>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — login form */}
                <div style={{ flex: 1, padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 340, display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: T.white, margin: 0 }}>Bem-vindo de volta</h3>
                      <p style={{ fontSize: 13, color: T.mist, marginTop: 6 }}>Entre com suas credenciais para continuar.</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 500, color: T.mist, display: 'block', marginBottom: 6 }}>E-mail</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 8, border: `1px solid ${T.steel}`, background: T.ink }}>
                          <Mail size={15} color={T.ash} />
                          <span style={{ fontSize: 13, color: T.ash }}>voce@clinica.com</span>
                        </div>
                      </div>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                          <label style={{ fontSize: 12, fontWeight: 500, color: T.mist }}>Senha</label>
                          <span style={{ fontSize: 11, color: T.signal, cursor: 'pointer' }}>Esqueceu?</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 8, border: `1px solid ${T.steel}`, background: T.ink }}>
                          <Lock size={15} color={T.ash} />
                          <span style={{ fontSize: 13, color: T.ash }}>••••••••</span>
                          <Eye size={15} color={T.ash} style={{ marginLeft: 'auto' }} />
                        </div>
                      </div>
                      <div style={{ padding: '11px 0', borderRadius: 8, background: T.signal, textAlign: 'center', fontSize: 14, fontWeight: 600, color: T.white, cursor: 'pointer', marginTop: 4 }}>
                        Entrar
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ flex: 1, height: 1, background: T.steel }} />
                      <span style={{ fontSize: 11, color: T.ash }}>ou</span>
                      <div style={{ flex: 1, height: 1, background: T.steel }} />
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <div style={{ flex: 1, padding: '10px 0', borderRadius: 8, border: `1px solid ${T.steel}`, textAlign: 'center', fontSize: 13, color: T.mist, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                        <Globe size={15} /> Google
                      </div>
                      <div style={{ flex: 1, padding: '10px 0', borderRadius: 8, border: `1px solid ${T.steel}`, textAlign: 'center', fontSize: 13, color: T.mist, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                        <Shield size={15} /> Microsoft
                      </div>
                    </div>
                    <p style={{ fontSize: 12, color: T.ash, margin: 0, textAlign: 'center' }}>
                      Primeiro acesso? <span style={{ color: T.signal, cursor: 'pointer' }}>Criar conta</span>
                    </p>
                  </div>
                </div>
              </div>
            </Block>

            {/* ─── Auth Template — Nova Senha ──────────────────────── */}
            <Block title="Auth Template — Nova Senha">
              <div style={{ border: `1px solid ${T.steel}`, borderRadius: 16, overflow: 'hidden', background: T.void, padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 520 }}>
                <div style={{ width: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
                  <CortexLogo variant="icon" theme="dark" mode="static" size={48} />
                  <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: T.white, margin: 0 }}>Criar nova senha</h2>
                    <p style={{ fontSize: 13, color: T.mist, marginTop: 6 }}>Sua nova senha deve ser diferente das anteriores.</p>
                  </div>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 500, color: T.mist, display: 'block', marginBottom: 6 }}>Nova senha</label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 8, border: `1px solid ${T.steel}`, background: T.ink }}>
                        <Lock size={15} color={T.ash} />
                        <span style={{ fontSize: 13, color: T.ash }}>••••••••••</span>
                        <Eye size={15} color={T.ash} style={{ marginLeft: 'auto' }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 500, color: T.mist, display: 'block', marginBottom: 6 }}>Confirmar senha</label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 8, border: `1px solid ${T.signal}40`, background: T.ink }}>
                        <Lock size={15} color={T.signal} />
                        <span style={{ fontSize: 13, color: T.mist }}>••••••••••</span>
                        <CheckCircle2 size={15} color={T.success} style={{ marginLeft: 'auto' }} />
                      </div>
                    </div>
                    {/* Strength indicator */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 16, background: T.ink, borderRadius: 10, border: `1px solid ${T.steel}` }}>
                      <p style={{ fontSize: 12, fontWeight: 500, color: T.mist, margin: 0 }}>Força da senha</p>
                      <div style={{ display: 'flex', gap: 4 }}>
                        {[T.success, T.success, T.success, T.warning].map((c, i) => (
                          <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: c }} />
                        ))}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
                        {[
                          { ok: true,  text: 'Mínimo 8 caracteres' },
                          { ok: true,  text: 'Letras maiúsculas e minúsculas' },
                          { ok: true,  text: 'Pelo menos um número' },
                          { ok: false, text: 'Caractere especial (!@#$)' },
                        ].map(({ ok, text }) => (
                          <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <CheckCircle2 size={13} color={ok ? T.success : T.ash} />
                            <span style={{ fontSize: 12, color: ok ? T.mist : T.ash }}>{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ padding: '11px 0', borderRadius: 8, background: T.signal, textAlign: 'center', fontSize: 14, fontWeight: 600, color: T.white, cursor: 'pointer', marginTop: 4 }}>
                      Redefinir senha
                    </div>
                  </div>
                  <p style={{ fontSize: 12, color: T.ash, margin: 0 }}>
                    <ArrowLeft size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                    <span style={{ color: T.signal, cursor: 'pointer' }}>Voltar ao login</span>
                  </p>
                </div>
              </div>
            </Block>
          </div>

          {/* ── BRAND ──────────────────────────────────────────── */}
          <div style={section}>
            <Divider label="Brand" />

            {/* Logo — variantes e modos */}
            <Block title="Logo — variantes">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {/* Dark theme */}
                <div style={{ background: T.void, border: `1px solid ${T.steel}`, borderRadius: 12, padding: 28 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, margin: '0 0 20px' }}>Dark theme</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <CortexLogo variant="horizontal" theme="dark" mode="static" size={48} />
                      <span style={{ fontFamily: 'monospace', fontSize: 11, color: T.ash }}>horizontal</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <CortexLogo variant="icon" theme="dark" mode="static" size={48} />
                      <span style={{ fontFamily: 'monospace', fontSize: 11, color: T.ash }}>icon</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <CortexLogo variant="wordmark" theme="dark" mode="static" size={32} />
                      <span style={{ fontFamily: 'monospace', fontSize: 11, color: T.ash }}>wordmark</span>
                    </div>
                  </div>
                </div>
                {/* Light theme */}
                <div style={{ background: '#F7F9FC', border: `1px solid #E2E8F0`, borderRadius: 12, padding: 28 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, margin: '0 0 20px' }}>Light theme</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <CortexLogo variant="horizontal" theme="light" mode="static" size={48} />
                      <span style={{ fontFamily: 'monospace', fontSize: 11, color: T.ash }}>horizontal</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <CortexLogo variant="icon" theme="light" mode="static" size={48} />
                      <span style={{ fontFamily: 'monospace', fontSize: 11, color: T.ash }}>icon</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <CortexLogo variant="wordmark" theme="light" mode="static" size={32} />
                      <span style={{ fontFamily: 'monospace', fontSize: 11, color: T.ash }}>wordmark</span>
                    </div>
                  </div>
                </div>
              </div>
            </Block>

            <Block title="Logo — modos de animação">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
                {([
                  { mode: 'reveal'  as const, label: 'Reveal',  desc: 'Splash, onboarding' },
                  { mode: 'idle'    as const, label: 'Idle',    desc: 'Sessão ativa' },
                  { mode: 'loader'  as const, label: 'Loader',  desc: 'Processamento' },
                  { mode: 'static'  as const, label: 'Static',  desc: 'PDF, email, favicon' },
                ]).map(({ mode, label, desc }) => (
                  <div key={mode} style={{ background: T.dusk, borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                    <CortexLogo variant="icon" theme="dark" mode={mode} size={56} />
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: T.white, margin: 0 }}>{label}</p>
                    <p style={{ fontSize: 11, color: T.mist, margin: 0, textAlign: 'center' }}>{desc}</p>
                  </div>
                ))}
              </div>
            </Block>

            {/* Logo — tamanhos */}
            <Block title="Logo — escala de tamanhos">
              <div style={{ background: T.dusk, borderRadius: 12, padding: 28, display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
                {[24, 32, 48, 64, 96].map(s => (
                  <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <CortexLogo variant="horizontal" theme="dark" mode="static" size={s} />
                    <span style={{ fontFamily: 'monospace', fontSize: 10, color: T.ash }}>{s}px</span>
                  </div>
                ))}
              </div>
            </Block>

            {/* Logo — regras de uso */}
            <Block title="Logo — regras de uso">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: T.success, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Fazer</p>
                  <ul style={{ fontSize: 13, color: T.mist, lineHeight: 2, margin: 0, paddingLeft: 16 }}>
                    <li>Mínimo <strong style={{ color: T.white }}>32px</strong> de altura</li>
                    <li>Zona de respiro: <strong style={{ color: T.white }}>50%</strong> da altura do ícone</li>
                    <li>Tema <code style={{ fontFamily: 'monospace', color: T.signal, background: T.void, padding: '1px 6px', borderRadius: 4, fontSize: 11 }}>dark</code> em fundos escuros</li>
                    <li>Tema <code style={{ fontFamily: 'monospace', color: T.signal, background: T.void, padding: '1px 6px', borderRadius: 4, fontSize: 11 }}>light</code> em fundos claros</li>
                    <li><code style={{ fontFamily: 'monospace', color: T.signal, background: T.void, padding: '1px 6px', borderRadius: 4, fontSize: 11 }}>icon</code> para favicon e sidebar colapsada</li>
                    <li><code style={{ fontFamily: 'monospace', color: T.signal, background: T.void, padding: '1px 6px', borderRadius: 4, fontSize: 11 }}>static</code> para contextos sem animação</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(244,63,94,0.06)', border: '1px solid rgba(244,63,94,0.2)', borderRadius: 12, padding: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: T.error, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Não fazer</p>
                  <ul style={{ fontSize: 13, color: T.mist, lineHeight: 2, margin: 0, paddingLeft: 16 }}>
                    <li>Distorcer ou alterar as proporções</li>
                    <li>Usar sobre fundos com padrão complexo</li>
                    <li>Usar cores fora da paleta oficial</li>
                    <li>Separar ícone do wordmark na variante horizontal</li>
                    <li>Reduzir abaixo de 24px</li>
                    <li>Adicionar efeitos (sombra, brilho, outline) ao logo</li>
                  </ul>
                </div>
              </div>
            </Block>

            {/* Logo — uso contextual */}
            <Block title="Logo — uso contextual">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
                {/* Navbar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, margin: 0 }}>Navbar</p>
                  <div style={{ background: T.ink, border: `1px solid ${T.steel}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <CortexLogo variant="horizontal" theme="dark" mode="static" size={28} />
                    <div style={{ display: 'flex', gap: 6 }}>
                      {['CRM', 'Relatórios'].map(n => (
                        <span key={n} style={{ fontSize: 11, color: T.mist, padding: '4px 8px' }}>{n}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Sidebar colapsada */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, margin: 0 }}>Sidebar colapsada</p>
                  <div style={{ background: T.void, border: `1px solid ${T.steel}`, borderRadius: 10, padding: 16, width: 56, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                    <CortexLogo variant="icon" theme="dark" mode="static" size={32} />
                    <div style={{ width: 24, height: 1, background: T.steel }} />
                    {[LayoutDashboard, Users, BarChart3].map((Icon, i) => (
                      <Icon key={i} size={18} color={i === 0 ? T.signal : T.ash} />
                    ))}
                  </div>
                </div>
                {/* Loading screen */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, margin: 0 }}>Loading screen</p>
                  <div style={{ background: T.void, border: `1px solid ${T.steel}`, borderRadius: 10, padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                    <CortexLogo variant="horizontal" theme="dark" mode="loader" size={40} />
                    <p style={{ fontSize: 12, color: T.mist, margin: 0 }}>Carregando...</p>
                  </div>
                </div>
              </div>
            </Block>

            {/* Arquétipo */}
            <Block title="Arquétipo de marca">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div style={{ background: `linear-gradient(135deg, rgba(77,113,250,0.08), transparent)`, border: `1px solid rgba(77,113,250,0.15)`, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 40, color: T.signal }}>65%</span>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: T.white }}>Governante</span>
                  </div>
                  <p style={{ fontSize: 13, color: T.mist, margin: '0 0 16px', lineHeight: 1.6 }}>
                    Controle, clareza, excelência operacional. O Cortex não é um assistente — é a <strong style={{ color: T.white }}>central de comando</strong> da clínica.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      { k: 'Promessa', v: 'Controle, clareza, excelência' },
                      { k: 'Tom', v: 'Firme, direto, autoritativo' },
                      { k: 'Medo', v: 'Caos, perda de controle' },
                      { k: 'Metáfora', v: 'O CEO da clínica' },
                    ].map(({ k, v }) => (
                      <div key={k} style={{ display: 'flex', gap: 8 }}>
                        <span style={{ fontFamily: 'monospace', fontSize: 11, color: T.ash, width: 70, flexShrink: 0 }}>{k}</span>
                        <span style={{ fontSize: 12, color: T.mist }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: `linear-gradient(135deg, rgba(148,163,184,0.06), transparent)`, border: `1px solid rgba(148,163,184,0.12)`, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 40, color: T.mist }}>35%</span>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: T.white }}>Sábio</span>
                  </div>
                  <p style={{ fontSize: 13, color: T.mist, margin: '0 0 16px', lineHeight: 1.6 }}>
                    Inteligência, análise, insight baseado em dados. O <strong style={{ color: T.white }}>consultor estratégico</strong> que transforma números em decisões.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      { k: 'Promessa', v: 'Inteligência, análise, insight' },
                      { k: 'Tom', v: 'Preciso, metodológico, confiável' },
                      { k: 'Medo', v: 'Ignorância, dados incompletos' },
                      { k: 'Metáfora', v: 'O consultor estratégico' },
                    ].map(({ k, v }) => (
                      <div key={k} style={{ display: 'flex', gap: 8 }}>
                        <span style={{ fontFamily: 'monospace', fontSize: 11, color: T.ash, width: 70, flexShrink: 0 }}>{k}</span>
                        <span style={{ fontSize: 12, color: T.mist }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Block>

            {/* Voz da marca */}
            <Block title="Voz da marca — 5 atributos">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { attr: 'Direta',     yes: 'Seu lead perdeu 3 oportunidades esta semana.',                  no: 'Pode ser que talvez alguns leads não tenham sido totalmente aproveitados...' },
                  { attr: 'Confiante',   yes: 'Taxa de conversão caiu 18%. Veja o relatório.',                no: 'Parece que talvez a conversão pode ter diminuído um pouco.' },
                  { attr: 'Pragmática',  yes: '3 leads sem follow-up. Agendar agora?',                        no: 'Identificamos que há leads que podem necessitar de acompanhamento adicional...' },
                  { attr: 'Séria',       yes: 'Relatório de performance — Março 2026',                         no: 'Ei! Olha seus dados mais recentes!' },
                  { attr: 'Acessível',   yes: 'Funil de captação com 34% de aproveitamento.',                 no: 'Pipeline de conversão com NPS normalizado por cohort.' },
                ].map(({ attr, yes, no }) => (
                  <div key={attr} style={{ background: T.dusk, borderRadius: 10, padding: 16, borderLeft: `3px solid ${T.signal}`, display: 'grid', gridTemplateColumns: '100px 1fr 1fr', gap: 16, alignItems: 'start' }}>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: T.white, margin: 0 }}>{attr}</p>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 700, color: T.success, margin: '0 0 4px', letterSpacing: '0.08em' }}>FAZER</p>
                      <p style={{ fontSize: 13, color: T.mist, margin: 0, lineHeight: 1.5 }}>{yes}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 700, color: T.error, margin: '0 0 4px', letterSpacing: '0.08em' }}>EVITAR</p>
                      <p style={{ fontSize: 13, color: T.ash, margin: 0, lineHeight: 1.5, textDecoration: 'line-through', textDecorationColor: 'rgba(244,63,94,0.3)' }}>{no}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Block>

            {/* Posicionamento */}
            <Block title="Posicionamento">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { tag: 'Tagline',       text: 'Controle total da sua clínica.',                                                                                                                                                   italic: true },
                  { tag: 'Elevador (10s)', text: 'Cortex é a plataforma que transforma dados clínicos em decisões. CRM, relatórios e inteligência em um só lugar.',                                                                 italic: false },
                  { tag: 'Pitch (30s)',    text: 'Dentistas perdem oportunidades porque os dados ficam espalhados — WhatsApp, planilha, sistema. O Cortex centraliza tudo: lead, paciente, campanha e resultado. Você vê o que está acontecendo e age imediatamente.', italic: false },
                ].map(({ tag, text, italic }) => (
                  <div key={tag} style={{ background: T.dusk, borderRadius: 10, padding: 20 }}>
                    <p style={{ fontSize: 10, fontWeight: 700, color: T.signal, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{tag}</p>
                    <p style={{ fontSize: tag === 'Tagline' ? 22 : 14, fontFamily: tag === 'Tagline' ? "'Space Grotesk', sans-serif" : undefined, fontWeight: tag === 'Tagline' ? 700 : 400, fontStyle: italic ? 'italic' : undefined, color: T.white, margin: 0, lineHeight: 1.6, maxWidth: 640 }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </Block>

            {/* Frases proibidas vs permitidas */}
            <Block title="Linguagem — guia rápido">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div style={{ background: T.dusk, borderRadius: 12, padding: 20 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: T.success, margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Vocabulário Cortex</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      'Lead (não "contato" ou "prospect")',
                      'Funil (não "pipeline")',
                      'Campanha (não "anúncio" isolado)',
                      'Taxa de conversão (não "conversion rate")',
                      'Relatório (não "report" ou "analytics")',
                      'Clínica (não "empresa" ou "negócio")',
                      'Dentista (não "usuário" ou "cliente")',
                    ].map(t => (
                      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 6, height: 6, borderRadius: 3, background: T.success, flexShrink: 0 }} />
                        <p style={{ fontSize: 12, color: T.mist, margin: 0 }}>{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: T.dusk, borderRadius: 12, padding: 20 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: T.error, margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Evitar</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      'Emojis em contextos profissionais',
                      'Humor forçado ou "engajador"',
                      'Jargão de marketing digital',
                      'Linguagem passivo-agressiva',
                      'Qualificadores desnecessários ("talvez", "provavelmente")',
                      'Anglicismos quando existe equivalente em PT-BR',
                      'Tom infantilizado ou condescendente',
                    ].map(t => (
                      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 6, height: 6, borderRadius: 3, background: T.error, flexShrink: 0 }} />
                        <p style={{ fontSize: 12, color: T.ash, margin: 0, textDecoration: 'line-through', textDecorationColor: 'rgba(244,63,94,0.3)' }}>{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Block>

            {/* Personalidade em contexto */}
            <Block title="Personalidade em contexto">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {[
                  { ctx: 'Dashboard', tone: 'Informativa',   icon: LayoutDashboard, msg: 'Seus leads cresceram 18% esta semana. 4 precisam de follow-up.' },
                  { ctx: 'Erro / Falha', tone: 'Direta',     icon: Target,          msg: 'Falha ao sincronizar campanha. Reconecte o Meta Ads para continuar.' },
                  { ctx: 'Onboarding', tone: 'Acolhedora',    icon: Users,           msg: 'Configure sua primeira clínica. O Cortex cuida do resto.' },
                  { ctx: 'Relatório', tone: 'Analítica',      icon: BarChart3,       msg: 'Faturamento de R$48.200 em março. Meta: R$50.000 — faltam R$1.800.' },
                  { ctx: 'Confirmação', tone: 'Afirmativa',   icon: Zap,             msg: 'Lead convertido. Contrato de R$3.200 registrado no funil.' },
                  { ctx: 'Alerta', tone: 'Urgente',           icon: Bell,            msg: 'Limite de 80% atingido. Faça upgrade para desbloquear mais leads.' },
                ].map(({ ctx, tone, icon: Icon, msg }) => (
                  <div key={ctx} style={{ background: T.dusk, borderRadius: 10, padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Icon size={16} color={T.signal} />
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: T.white }}>{ctx}</span>
                      <span style={{ fontSize: 10, color: T.ash, marginLeft: 'auto', fontStyle: 'italic' }}>{tone}</span>
                    </div>
                    <div style={{ background: T.ink, borderRadius: 8, padding: 12, borderLeft: `2px solid ${T.signal}` }}>
                      <p style={{ fontSize: 13, color: T.mist, margin: 0, lineHeight: 1.5 }}>{msg}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Block>
          </div>

          {/* ── CHARTS & DATA VIZ ────────────────────────────────── */}
          <div style={section}>
            <Divider label="Charts & Data Visualization" />

            <Block title="BarChart — Leads vs Conversões por mês">
              <div style={{ height: 320 }}>
                <BarChart
                  data={[
                    { mes: 'Jan', leads: 120, conversoes: 18, agendamentos: 45 },
                    { mes: 'Fev', leads: 150, conversoes: 24, agendamentos: 58 },
                    { mes: 'Mar', leads: 180, conversoes: 32, agendamentos: 72 },
                    { mes: 'Abr', leads: 140, conversoes: 22, agendamentos: 51 },
                    { mes: 'Mai', leads: 200, conversoes: 38, agendamentos: 85 },
                    { mes: 'Jun', leads: 170, conversoes: 28, agendamentos: 66 },
                    { mes: 'Jul', leads: 195, conversoes: 35, agendamentos: 78 },
                    { mes: 'Ago', leads: 220, conversoes: 42, agendamentos: 92 },
                    { mes: 'Set', leads: 185, conversoes: 30, agendamentos: 70 },
                    { mes: 'Out', leads: 240, conversoes: 48, agendamentos: 98 },
                    { mes: 'Nov', leads: 210, conversoes: 40, agendamentos: 88 },
                    { mes: 'Dez', leads: 260, conversoes: 52, agendamentos: 110 },
                  ]}
                  xAxisKey="mes"
                  series={[
                    { key: 'leads', label: 'Leads', color: '#4D71FA' },
                    { key: 'agendamentos', label: 'Agendamentos', color: '#7B96FB' },
                    { key: 'conversoes', label: 'Conversões', color: '#22C55E' },
                  ]}
                  showLegend
                  showTooltip
                />
              </div>
            </Block>

            <Block title="LineChart — Faturamento mensal (R$)">
              <div style={{ height: 320 }}>
                <LineChart
                  data={[
                    { mes: 'Jan', faturamento: 32000, meta: 40000, ticketMedio: 2800 },
                    { mes: 'Fev', faturamento: 38000, meta: 40000, ticketMedio: 3100 },
                    { mes: 'Mar', faturamento: 42000, meta: 45000, ticketMedio: 3200 },
                    { mes: 'Abr', faturamento: 36000, meta: 45000, ticketMedio: 2900 },
                    { mes: 'Mai', faturamento: 48000, meta: 50000, ticketMedio: 3400 },
                    { mes: 'Jun', faturamento: 52000, meta: 50000, ticketMedio: 3500 },
                    { mes: 'Jul', faturamento: 55000, meta: 55000, ticketMedio: 3600 },
                    { mes: 'Ago', faturamento: 61000, meta: 55000, ticketMedio: 3800 },
                    { mes: 'Set', faturamento: 58000, meta: 60000, ticketMedio: 3700 },
                    { mes: 'Out', faturamento: 67000, meta: 60000, ticketMedio: 3900 },
                    { mes: 'Nov', faturamento: 72000, meta: 65000, ticketMedio: 4100 },
                    { mes: 'Dez', faturamento: 78000, meta: 70000, ticketMedio: 4200 },
                  ]}
                  xAxisKey="mes"
                  series={[
                    { key: 'faturamento', label: 'Faturamento', color: '#4D71FA' },
                    { key: 'meta', label: 'Meta', color: '#4A5568' },
                    { key: 'ticketMedio', label: 'Ticket Médio', color: '#F59E0B' },
                  ]}
                  showLegend
                  showTooltip
                  curved
                  formatValue={(v) => `R$ ${(v / 1000).toFixed(0)}k`}
                />
              </div>
            </Block>

            <Grid cols={2}>
              <Block title="PieChart — Origem dos leads">
                <div style={{ height: 300 }}>
                  <CortexPieChart
                    data={[
                      { name: 'Meta Ads', value: 450, color: '#4D71FA' },
                      { name: 'Google Ads', value: 280, color: '#7B96FB' },
                      { name: 'Indicação', value: 150, color: '#22C55E' },
                      { name: 'Orgânico', value: 90, color: '#F59E0B' },
                      { name: 'WhatsApp', value: 30, color: '#94A3B8' },
                    ]}
                    variant="donut"
                    showLegend
                    showTooltip
                    showLabels
                  />
                </div>
              </Block>

              <Block title="FunnelChart — Pipeline de conversão">
                <div style={{ height: 300 }}>
                  <FunnelChart
                    steps={[
                      { label: 'Leads captados', value: 1000 },
                      { label: 'Contato realizado', value: 650 },
                      { label: 'Agendamento', value: 320 },
                      { label: 'Compareceu', value: 240 },
                      { label: 'Proposta enviada', value: 180 },
                      { label: 'Contrato fechado', value: 120 },
                    ]}
                    showConversion
                    showValues
                    formatValue={(v) => v.toLocaleString('pt-BR')}
                  />
                </div>
              </Block>
            </Grid>
          </div>

          {/* ── ADVANCED ORGANISMS ────────────────────────────────── */}
          <div style={section}>
            <Divider label="Advanced Organisms" />

            <Block title="CommandPalette">
              <CommandPalette
                items={[
                  { id: '1', label: 'Ir para Dashboard', group: 'Navegacao', shortcut: '⌘D' },
                  { id: '2', label: 'Novo lead', group: 'Acoes', shortcut: '⌘N' },
                  { id: '3', label: 'Buscar leads', group: 'Acoes', shortcut: '⌘K' },
                  { id: '4', label: 'Configuracoes', group: 'Navegacao', shortcut: '⌘,' },
                ]}
              />
            </Block>

            <Block title="NotificationCenter">
              <div style={{ maxWidth: 400 }}>
                <NotificationCenter
                  notifications={[
                    { id: '1', title: 'Novo lead capturado', message: 'Dra. Camila Rocha via Meta Ads', category: 'leads', time: '2 min', read: false },
                    { id: '2', title: 'Meta sincronizado', message: 'Campanha "Implantes SP" atualizada', category: 'sistema', time: '15 min', read: false },
                    { id: '3', title: 'Lead convertido', message: 'Dr. Rodrigo Lima assinou contrato', category: 'agenda', time: '1h', read: true },
                  ]}
                />
              </div>
            </Block>

            <Block title="Calendar — Agenda da clínica">
              <div style={{ height: 500, overflow: 'hidden' }}>
                <CortexCalendar
                  events={[
                    { id: '1', title: 'Implante Dra. Camila', start: new Date(), end: new Date(Date.now() + 3600000), category: 'consulta' },
                    { id: '2', title: 'Retorno Dr. Bruno', start: new Date(Date.now() + 7200000), end: new Date(Date.now() + 10800000), category: 'retorno' },
                    { id: '3', title: 'Urgência — dor aguda', start: new Date(Date.now() + 86400000), end: new Date(Date.now() + 86400000 + 1800000), category: 'urgencia' },
                    { id: '4', title: 'Limpeza Ana Lima', start: new Date(Date.now() + 86400000 * 2), end: new Date(Date.now() + 86400000 * 2 + 3600000), category: 'consulta' },
                    { id: '5', title: 'Avaliação ortodontia', start: new Date(Date.now() + 86400000 * 3), end: new Date(Date.now() + 86400000 * 3 + 5400000), category: 'consulta' },
                  ]}
                  view="month"
                />
              </div>
            </Block>

            <Block title="Timeline">
              <Timeline
                items={[
                  { id: '1', title: 'Lead capturado', description: 'Via Meta Ads - Campanha Implantes', type: 'signal', date: '10:30' },
                  { id: '2', title: 'Primeiro contato', description: 'Ligacao realizada - 3min', type: 'default', date: '11:15' },
                  { id: '3', title: 'Proposta enviada', description: 'Plano Premium - R$3.200/mes', type: 'success', date: '14:00' },
                  { id: '4', title: 'Contrato assinado', description: 'Fechamento confirmado', type: 'success', date: '16:45' },
                ]}
              />
            </Block>

            <Block title="KanbanBoard">
              <div style={{ height: 350 }}>
                <KanbanBoard
                  columns={[
                    { id: 'novo', title: 'Novo', color: '#4D71FA', cards: [
                      { id: 'c1', title: 'Dra. Ana Lima', subtitle: 'Clinica Bella - SP', value: 'R$ 4.800', initials: 'AL', tags: ['Implante'] },
                      { id: 'c2', title: 'Dr. Bruno Costa', subtitle: 'Sorriso Total - RJ', value: 'R$ 3.200', initials: 'BC', tags: ['Ortodontia'] },
                    ]},
                    { id: 'qualificado', title: 'Qualificado', color: '#F59E0B', cards: [
                      { id: 'c3', title: 'Dra. Camila Rocha', subtitle: 'OdontoVida - MG', value: 'R$ 8.500', initials: 'CR', tags: ['Protocolo'] },
                    ]},
                    { id: 'proposta', title: 'Proposta', color: '#7B96FB', cards: [
                      { id: 'c4', title: 'Dr. Diego Souza', subtitle: 'DenteSa - PR', value: 'R$ 12.000', initials: 'DS', tags: ['Lentes'] },
                    ]},
                    { id: 'fechado', title: 'Fechado', color: '#22C55E', cards: [
                      { id: 'c5', title: 'Dr. Eduardo Farias', subtitle: 'SmileUp - SP', value: 'R$ 6.400', initials: 'EF', tags: ['Implante'] },
                    ] },
                  ]}
                />
              </div>
            </Block>
          </div>

          {/* ── TOKENS ───────────────────────────────────────────── */}
          <div style={section}>
            <Divider label="Tokens — Cores" />
            <Grid cols={7}>
              {[
                { name: 'void',    hex: T.void,    label: 'Background'  },
                { name: 'ink',     hex: T.ink,     label: 'Secundário'  },
                { name: 'dusk',    hex: T.dusk,    label: 'Superfícies' },
                { name: 'steel',   hex: T.steel,   label: 'Bordas'      },
                { name: 'ash',     hex: T.ash,     label: 'Disabled'    },
                { name: 'mist',    hex: T.mist,    label: 'Labels'      },
                { name: 'white',   hex: T.white,   label: 'Texto'       },
              ].map(c => <Swatch key={c.name} {...c} />)}
            </Grid>
            <Grid cols={6}>
              {[
                { name: 'signal',       hex: T.signal,  label: 'Accent'   },
                { name: 'signal-dark',  hex: '#3558D4', label: 'Hover'    },
                { name: 'signal-light', hex: '#7B96FB', label: 'Light'    },
                { name: 'success',      hex: T.success, label: 'Positivo' },
                { name: 'warning',      hex: T.warning, label: 'Atenção'  },
                { name: 'error',        hex: T.error,   label: 'Erro'     },
              ].map(c => <Swatch key={c.name} {...c} />)}
            </Grid>
          </div>

          <div style={section}>
            <Divider label="Tokens — Tipografia" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, marginBottom: 16 }}>Space Grotesk — Display</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 52, color: T.white, lineHeight: 1.1, margin: 0 }}>O dentista opera</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 52, color: T.signal, lineHeight: 1.1, margin: 0 }}>paciente.</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 24, color: T.mist, marginTop: 8, margin: 0 }}>A Cortex opera o crescimento.</p>
              </div>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, marginBottom: 16 }}>Inter — Body</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: T.white, lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
                  Sistema operacional de crescimento para dentistas. CRM próprio, IA proprietária e clínicas reais como laboratório — construído por dentistas, para dentistas.
                </p>
              </div>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, marginBottom: 16 }}>JetBrains Mono — Números</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 32 }}>
                  <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 36, color: T.white }}>R$48.200</span>
                  <span style={{ fontFamily: 'monospace', fontSize: 22, color: T.signal }}>+18%</span>
                  <span style={{ fontFamily: 'monospace', fontSize: 18, color: T.mist }}>6.8%</span>
                  <span style={{ fontFamily: 'monospace', fontSize: 14, color: T.ash }}>284 leads</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── BRAND APPLICATIONS ──────────────────────────────── */}
          <div style={section}>
            <Divider label="Brand Applications — Materiais Cortex" />
            <p style={{ fontSize: 13, color: T.mist, marginBottom: 16, lineHeight: 1.6 }}>
              53 materiais de marca renderizados visualmente. Veja todos os materiais em <strong style={{ color: T.signal }}>Cortex DS / Brand Applications</strong>.
            </p>

            {/* Landing Page Hero Preview */}
            <div style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, margin: '0 0 8px' }}>Landing Page Hero</p>
              <div style={{ height: 200, background: T.void, border: `1px solid ${T.steel}`, borderRadius: 8, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${T.steel} 0.5px, transparent 0.5px), linear-gradient(90deg, ${T.steel} 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px', opacity: 0.06, pointerEvents: 'none' }} />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 24, color: T.white, lineHeight: 1.15, letterSpacing: '-0.02em', position: 'relative', zIndex: 1, margin: 0 }}>Do lead ao lucro.<br />Um sistema.</h3>
                <p style={{ fontSize: 11, color: T.mist, marginTop: 8, maxWidth: 320, lineHeight: 1.5, position: 'relative', zIndex: 1 }}>Stack completa de crescimento para clinicas odontologicas.</p>
                <div style={{ marginTop: 12, background: T.signal, color: T.white, padding: '6px 16px', borderRadius: 6, fontWeight: 600, fontSize: 10, fontFamily: "'Space Grotesk', sans-serif", boxShadow: '0 0 16px rgba(77,113,250,0.3)', position: 'relative', zIndex: 1 }}>Ver como funciona</div>
              </div>
            </div>

            {/* 3 Ads Preview */}
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, margin: '0 0 8px' }}>Meta Feed Ads</p>
            <Grid cols={3}>
              {/* Awareness */}
              <div style={{ aspectRatio: '1', background: T.void, border: `1px solid ${T.steel}`, borderRadius: 8, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle, ${T.steel} 1px, transparent 1px)`, backgroundSize: '16px 16px', opacity: 0.08, pointerEvents: 'none' }} />
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: 16 }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13, color: T.white, lineHeight: 1.15 }}>Lead nao e resultado.<br /><span style={{ color: T.signal }}>Faturamento</span> e.</div>
                </div>
                <p style={{ position: 'absolute', bottom: 4, fontSize: 8, color: T.ash, margin: 0 }}>Awareness</p>
              </div>
              {/* Consideration */}
              <div style={{ aspectRatio: '1', background: T.void, border: `1px solid ${T.steel}`, borderRadius: 8, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 28, color: T.signal }}>+230%</div>
                  <div style={{ fontSize: 8, color: T.mist, marginTop: 4 }}>crescimento medio em faturamento</div>
                </div>
                <p style={{ position: 'absolute', bottom: 4, fontSize: 8, color: T.ash, margin: 0 }}>Consideration</p>
              </div>
              {/* Conversion */}
              <div style={{ aspectRatio: '1', background: T.void, border: `1px solid ${T.steel}`, borderRadius: 8, overflow: 'hidden', display: 'flex', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: T.steel }} />
                <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 10 }}>
                  <div style={{ fontSize: 8, fontWeight: 600, color: T.ash, marginBottom: 6 }}>Antes</div>
                  {['4 fornecedores', 'Dados fragmentados'].map(t => <div key={t} style={{ fontSize: 7, color: T.ash, textDecoration: 'line-through', opacity: 0.6, marginBottom: 3 }}>{t}</div>)}
                </div>
                <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 10 }}>
                  <div style={{ fontSize: 8, fontWeight: 600, color: T.signal, marginBottom: 6 }}>Cortex</div>
                  {['1 sistema', 'CRM proprio'].map(t => <div key={t} style={{ fontSize: 7, color: T.white, marginBottom: 3 }}>{t}</div>)}
                </div>
                <p style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)', fontSize: 8, color: T.ash, margin: 0 }}>Conversion</p>
              </div>
            </Grid>

            {/* Dashboard Mini Preview */}
            <div style={{ marginTop: 16 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, margin: '0 0 8px' }}>Dashboard CRM Mini</p>
              <div style={{ height: 160, background: T.void, border: `1px solid ${T.steel}`, borderRadius: 8, overflow: 'hidden', display: 'flex' }}>
                {/* Mini sidebar */}
                <div style={{ width: 60, background: T.ink, borderRight: `1px solid ${T.steel}`, padding: 8, display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 8 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={12} height={12} fill="none">
                      <rect width="64" height="64" rx="14" fill={T.dusk} /><path d="M 42.6,42.6 A 15,15 0 1,1 42.6,21.4" stroke={T.signal} strokeWidth="5" strokeLinecap="round" /><circle cx="55" cy="32" r="2.5" fill={T.signal} />
                    </svg>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 7, color: T.white }}>Cortex</span>
                  </div>
                  {['Dashboard', 'Pipeline', 'Contatos'].map((n, i) => (
                    <div key={n} style={{ padding: '2px 4px', borderRadius: 3, fontSize: 6, color: i === 0 ? T.white : T.mist, background: i === 0 ? 'rgba(77,113,250,0.12)' : 'transparent' }}>{n}</div>
                  ))}
                </div>
                {/* Content */}
                <div style={{ flex: 1, padding: 8 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4, marginBottom: 6 }}>
                    {[{ l: 'Leads', v: '1.247' }, { l: 'Conversao', v: '23,4%' }, { l: 'Faturamento', v: 'R$ 487K' }, { l: 'CAC', v: 'R$ 142' }].map(k => (
                      <div key={k.l} style={{ background: T.dusk, border: `1px solid ${T.steel}`, borderRadius: 4, padding: 4 }}>
                        <div style={{ fontSize: 5, color: T.mist }}>{k.l}</div>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: 9, color: T.white, marginTop: 1 }}>{k.v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {[{ w: '100%', bg: T.signal, t: '1.247 leads' }, { w: '72%', bg: '#3558D4', t: '291 qualif.' }, { w: '40%', bg: '#2a4aa0', t: '128 prop.' }, { w: '23%', bg: T.success, t: '58 fechados' }].map(f => (
                      <div key={f.t} style={{ width: f.w, height: 10, borderRadius: 2, background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: 5, color: T.white }}>{f.t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Mockups Teaser */}
            <div style={{ marginTop: 16 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ash, margin: '0 0 8px' }}>Materiais Fisicos (preview)</p>
              <div style={{ display: 'flex', gap: 16, padding: 16, background: T.ink, borderRadius: 8, border: `1px solid ${T.steel}` }}>
                {/* Tshirt mini */}
                <div style={{ textAlign: 'center' }}>
                  <svg width={50} height={60} viewBox="0 0 110 120" fill="none">
                    <path d="M28,8 L15,18 L5,42 L18,46 L24,28 L24,112 L86,112 L86,28 L92,46 L105,42 L95,18 L82,8 C76,4 68,2 55,2 C42,2 34,4 28,8Z" fill="#111" stroke="#333" strokeWidth="1" />
                    <text x="55" y="52" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="8" fill={T.white}>Cor<tspan fill={T.signal}>tex</tspan></text>
                  </svg>
                  <div style={{ fontSize: 7, color: T.white, marginTop: 2 }}>Camiseta</div>
                </div>
                {/* Mug mini */}
                <div style={{ textAlign: 'center' }}>
                  <svg width={40} height={40} viewBox="0 0 80 80" fill="none">
                    <rect x="10" y="10" width="45" height="55" rx="4" fill="#111" stroke="#333" strokeWidth="1" />
                    <path d="M55,22 Q72,22 72,40 Q72,58 55,58" stroke="#333" strokeWidth="2" fill="none" />
                    <text x="32" y="42" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="7" fill={T.signal}>Cortex</text>
                  </svg>
                  <div style={{ fontSize: 7, color: T.white, marginTop: 2 }}>Caneca</div>
                </div>
                {/* Cap mini */}
                <div style={{ textAlign: 'center' }}>
                  <svg width={45} height={35} viewBox="0 0 90 70" fill="none">
                    <ellipse cx="45" cy="52" rx="40" ry="8" fill="#222" stroke="#333" strokeWidth="0.8" />
                    <path d="M10,50 Q10,10 45,8 Q80,10 80,50" fill="#111" stroke="#333" strokeWidth="1" />
                    <circle cx="45" cy="32" r="8" fill="none" stroke={T.signal} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="20,8" />
                    <circle cx="52" cy="32" r="1.5" fill={T.signal} />
                  </svg>
                  <div style={{ fontSize: 7, color: T.white, marginTop: 2 }}>Bone</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 16, padding: 16, background: `linear-gradient(135deg, ${T.ink}, ${T.dusk})`, borderRadius: 12, border: `1px solid ${T.steel}`, textAlign: 'center' }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: T.white, margin: 0 }}>
                Veja todos os materiais em <span style={{ color: T.signal }}>Cortex DS / Brand Applications</span>
              </p>
              <p style={{ fontSize: 12, color: T.mist, margin: '6px 0 0' }}>
                53 materiais: Landing Page, Dashboard, 12 Ads, Social Kit, Deck 12 slides, 15 mockups fisicos
              </p>
            </div>
          </div>

          {/* Footer */}
          <div style={{ borderTop: `1px solid ${T.steel}`, paddingTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: T.white }}>
              Cor<span style={{ color: T.signal }}>tex</span> DS v2.0
            </span>
            <p style={{ fontSize: 12, color: T.mist, margin: 0 }}>
              v2.0 -- 59 componentes -- 53 materiais de marca -- Dark First -- WCAG AA -- Marco 2026
            </p>
          </div>

        </div>
      </div>
    </ToastProvider>
  )
}

const meta: Meta = {
  title: 'Cortex DS / Showcase',
  parameters: { layout: 'fullscreen' },
}
export default meta

export const Completo: StoryObj = {
  render: () => <Showcase />,
}
