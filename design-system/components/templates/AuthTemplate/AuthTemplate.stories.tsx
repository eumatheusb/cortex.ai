'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { AuthTemplate } from './AuthTemplate'
import { Button }  from '../../atoms/Button/Button'
import { Input }   from '../../atoms/Input/Input'
import { Label }   from '../../atoms/Label/Label'
import { Badge }   from '../../atoms/Badge/Badge'
import { Mail, Lock, Eye, ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react'

const logo = (
  <span className="font-display font-bold text-2xl tracking-tight text-white">
    Cor<span className="text-signal">tex</span>
  </span>
)

const meta: Meta<typeof AuthTemplate> = {
  title: 'Templates/AuthTemplate',
  component: AuthTemplate,
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof AuthTemplate>

/* ─── Centered Login ───────────────────────────────────────────────── */
export const CenteredLogin: Story = {
  render: () => (
    <AuthTemplate
      logo={logo}
      tagline="O sistema operacional de crescimento para dentistas."
    >
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <h1 className="font-display font-bold text-xl text-white">Bem-vindo de volta</h1>
          <p className="text-sm text-mist mt-1">Acesse sua conta Cortex</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="voce@clinica.com"
              leftIcon={<Mail size={15} />}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Senha</Label>
              <a href="#" className="text-xs text-signal hover:underline">Esqueceu?</a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              leftIcon={<Lock size={15} />}
              rightIcon={<Eye size={15} className="cursor-pointer" />}
            />
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full" rightIcon={<ArrowRight size={16} />}>
          Entrar
        </Button>

        <p className="text-center text-xs text-mist">
          Não tem conta?{' '}
          <a href="#" className="text-signal hover:underline font-medium">
            Fale com a equipe
          </a>
        </p>
      </div>
    </AuthTemplate>
  ),
}

/* ─── Split Login ──────────────────────────────────────────────────── */
export const SplitLogin: Story = {
  render: () => (
    <AuthTemplate
      variant="split"
      logo={logo}
      splitContent={
        <div className="max-w-md">
          <div className="mb-10">{logo}</div>
          <p className="font-display text-3xl font-bold text-white leading-snug mb-6">
            Do lead ao lucro,<br />
            <span className="text-signal">tudo em uma stack.</span>
          </p>
          <p className="text-mist text-base leading-relaxed mb-10">
            CRM próprio, IA proprietária e clínicas reais como laboratório — construído por dentistas, para dentistas.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { icon: <Users size={16} />,     label: 'Leads gerenciados',  value: '1.284' },
              { icon: <DollarSign size={16} />, label: 'Faturamento médio',  value: 'R$48K/mês' },
              { icon: <TrendingUp size={16} />, label: 'Taxa de conversão',  value: '6.8%' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-signal/10 flex items-center justify-center text-signal shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xs text-mist">{stat.label}</p>
                  <p className="text-sm font-semibold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="success" size="sm" dot>Plataforma ativa</Badge>
          </div>
          <h1 className="font-display font-bold text-2xl text-white">Acessar conta</h1>
          <p className="text-sm text-mist mt-1">Entre para continuar no Cortex</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email-split">E-mail</Label>
            <Input
              id="email-split"
              type="email"
              placeholder="voce@clinica.com"
              leftIcon={<Mail size={15} />}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password-split">Senha</Label>
              <a href="#" className="text-xs text-signal hover:underline">Esqueceu?</a>
            </div>
            <Input
              id="password-split"
              type="password"
              placeholder="••••••••"
              leftIcon={<Lock size={15} />}
            />
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full" rightIcon={<ArrowRight size={16} />}>
          Entrar
        </Button>

        <p className="text-center text-xs text-mist">
          Não tem acesso?{' '}
          <a href="#" className="text-signal hover:underline font-medium">
            Solicitar demonstração
          </a>
        </p>
      </div>
    </AuthTemplate>
  ),
}

/* ─── Centered — New Password ──────────────────────────────────────── */
export const NewPassword: Story = {
  render: () => (
    <AuthTemplate logo={logo} tagline="Cortex — Plataforma exclusiva para parceiros.">
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <h1 className="font-display font-bold text-xl text-white">Nova senha</h1>
          <p className="text-sm text-mist mt-1">Crie uma senha segura para sua conta</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="new-password">Nova senha</Label>
            <Input
              id="new-password"
              type="password"
              placeholder="Mínimo 8 caracteres"
              leftIcon={<Lock size={15} />}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="confirm-password">Confirmar senha</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Repita a senha"
              leftIcon={<Lock size={15} />}
            />
          </div>

          {/* Password strength */}
          <div className="space-y-1.5">
            <div className="flex gap-1">
              {[1,2,3,4].map(i => (
                <div key={i} className={`h-1 flex-1 rounded-full ${i <= 3 ? 'bg-signal' : 'bg-steel'}`} />
              ))}
            </div>
            <p className="text-xs text-mist">Força: <span className="text-signal">Boa</span></p>
          </div>
        </div>

        <Button variant="primary" size="lg" className="w-full">
          Salvar nova senha
        </Button>
      </div>
    </AuthTemplate>
  ),
}
