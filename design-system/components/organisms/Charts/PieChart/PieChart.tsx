'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  type TooltipProps,
} from 'recharts'
import { cn } from '../../../utils'

export interface PieChartDataItem {
  name:   string
  value:  number
  color?: string
}

export interface PieChartProps {
  data:          PieChartDataItem[]
  variant?:      'pie' | 'donut'
  showLegend?:   boolean
  showTooltip?:  boolean
  showLabels?:   boolean
  labelPosition?: 'internal' | 'external'
  height?:       number
  className?:    string
  formatValue?:  (value: number) => string
}

const CHART_COLORS = [
  'var(--color-signal)',
  'var(--color-success)',
  'var(--color-warning)',
  'var(--color-error)',
  '#7B96FB',
  '#A78BFA',
  '#F472B6',
  '#34D399',
]

function CustomTooltip({
  active,
  payload,
  formatValue,
}: TooltipProps<number, string> & { formatValue?: (v: number) => string }) {
  if (!active || !payload?.length) return null
  const entry = payload[0]

  return (
    <div className="rounded-lg border border-steel bg-ink p-3 shadow-lg">
      <div className="flex items-center gap-2 text-sm">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: entry.payload?.fill || entry.color }}
        />
        <span className="text-mist">{entry.name}:</span>
        <span className="font-mono font-medium text-white">
          {formatValue ? formatValue(entry.value as number) : entry.value}
        </span>
      </div>
    </div>
  )
}

function renderCustomLabel({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
  labelPosition,
}: {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
  name: string
  labelPosition: 'internal' | 'external'
}) {
  const RADIAN = Math.PI / 180

  if (labelPosition === 'internal') {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    if (percent < 0.05) return null

    return (
      <text
        x={x}
        y={y}
        fill="var(--color-white)"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fontWeight={600}
        fontFamily="var(--font-mono)"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  const radius = outerRadius + 28
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="var(--color-mist)"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={11}
      fontFamily="var(--font-body)"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

function PieChartComponent({
  data,
  variant = 'donut',
  showLegend = true,
  showTooltip = true,
  showLabels = true,
  labelPosition = 'external',
  height = 400,
  className,
  formatValue,
}: PieChartProps) {
  const innerRadius = variant === 'donut' ? '55%' : 0

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
      className={cn('w-full', className)}
    >
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius="80%"
            paddingAngle={2}
            dataKey="value"
            nameKey="name"
            animationDuration={800}
            animationEasing="ease-out"
            label={
              showLabels
                ? (props) => renderCustomLabel({ ...props, labelPosition })
                : false
            }
            labelLine={showLabels && labelPosition === 'external'}
          >
            {data.map((entry, i) => (
              <Cell
                key={entry.name}
                fill={entry.color || CHART_COLORS[i % CHART_COLORS.length]}
                stroke="var(--color-ink)"
                strokeWidth={2}
              />
            ))}
          </Pie>

          {showTooltip && (
            <Tooltip content={<CustomTooltip formatValue={formatValue} />} />
          )}

          {showLegend && (
            <Legend
              wrapperStyle={{ paddingTop: 16, fontSize: 12, fontFamily: 'var(--font-body)' }}
              iconType="circle"
              iconSize={8}
              formatter={(value) => (
                <span style={{ color: 'var(--color-mist)' }}>{value}</span>
              )}
            />
          )}
        </RechartsPieChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export { PieChartComponent as PieChart }
