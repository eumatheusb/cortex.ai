'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils'
import { Sidebar, type SidebarProps } from '../../organisms/Sidebar/Sidebar'

export interface DashboardTemplateProps {
  sidebar:       Omit<SidebarProps, 'className'>
  header?:       React.ReactNode
  children:      React.ReactNode
  className?:    string
  contentClass?: string
}

function DashboardTemplate({
  sidebar,
  header,
  children,
  className,
  contentClass,
}: DashboardTemplateProps) {
  return (
    <div className={cn('flex h-screen overflow-hidden bg-void', className)}>
      {/* Sidebar */}
      <Sidebar {...sidebar} />

      {/* Main */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top bar */}
        {header && (
          <header className="shrink-0 h-16 flex items-center px-6 border-b border-steel bg-ink/60 backdrop-blur-sm z-10">
            {header}
          </header>
        )}

        {/* Content */}
        <motion.main
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
          className={cn('flex-1 overflow-y-auto p-6', contentClass)}
        >
          {children}
        </motion.main>
      </div>
    </div>
  )
}

export { DashboardTemplate }
