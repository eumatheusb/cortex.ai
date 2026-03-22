'use client'
import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '../../utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { variant?: 'line' | 'pill' }
>(({ className, variant = 'line', ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      variant === 'line'
        ? 'flex border-b border-steel'
        : 'inline-flex items-center rounded-lg bg-dusk p-1 gap-1',
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    variant?: 'line' | 'pill'
    badge?: number
  }
>(({ className, variant = 'line', badge, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium',
      'transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60',
      'disabled:pointer-events-none disabled:opacity-40',
      variant === 'line'
        ? [
            'px-4 py-2.5 text-mist border-b-2 border-transparent -mb-px',
            'hover:text-white',
            'data-[state=active]:text-white data-[state=active]:border-signal',
          ]
        : [
            'px-3.5 py-1.5 text-mist rounded-md',
            'hover:text-white',
            'data-[state=active]:bg-ink data-[state=active]:text-white data-[state=active]:shadow-sm',
          ],
      className,
    )}
    {...props}
  >
    {children}
    {badge !== undefined && (
      <span className="ml-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-signal/20 px-1 text-[10px] font-medium text-signal">
        {badge}
      </span>
    )}
  </TabsPrimitive.Trigger>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 focus-visible:outline-none',
      'data-[state=active]:animate-in data-[state=active]:fade-in-0',
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
