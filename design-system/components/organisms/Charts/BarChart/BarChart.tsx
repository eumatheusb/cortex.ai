'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  type TooltipProps,
} from 'recharts'
import { cn } from '../../../utils'

export interface BarChartSeries {
  dataKey:  string
  name:     string
  color?:   string
  stackId?: string
}

export interface BarChartProps {
  data:          Record<string, unknown>[]
  series:        BarChartSeries[]
  xAxisKey:      string
  layout?:       'vertical' | 'horizontal'
  stacked?:      boolean
  showGrid?:     boolean
  showLegend?:   boolean
  showTooltip?:  boolean
  height?:       number
  className?:    string
  formatValue?:  (value: number) => string
  formatLabel?:  (label: string) => string
}

const CHART_COLORS = [
  'var(--color-signal)',
  'var(--color-success)',
  'var(--color-warning)',
  'var(--color-error)',
  '#7B96FB',
  '#A78BFA',
]

function CustomTooltip({
  active,
  payload,
  label,
  formatValue,
}: TooltipProps<number, string> & { formatValue?: (v: number) => string }) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-lg border border-steel bg-ink p-3 shadow-lg">
      <p className="mb-1.5 font-display text-xs font-medium text-mist">{label}</p>
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex items-center gap-2 text-sm">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-mist">{entry.name}:</span>
          <span className="font-mono font-medium text-white">
            {formatValue ? formatValue(entry.value as number) : entry.value}
          </span>
        </div>
      ))}
    </div>
  )
}

function BarChartComponent({
  data,
  series,
  xAxisKey,
  layout = 'vertical',
  stacked = false,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  height = 400,
  className,
  formatValue,
  formatLabel,
}: BarChartProps) {
  const isHorizontal = layout === 'horizontal'
  const stackId = stacked ? 'stack' : undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
      className={cn('w-full', className)}
    >
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          layout={isHorizontal ? 'vertical' : 'horizontal'}
          margin={{ top: 8, right: 8, left: 8, bottom: 8 }}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--color-steel)"
              strokeOpacity={0.5}
              vertical={!isHorizontal}
              horizontal={isHorizontal}
            />
          )}

          {isHorizontal ? (
            <>
              <XAxis
                type="number"
                tick={{ fill: 'var(--color-mist)', fontSize: 12, fontFamily: 'var(--font-mono)' }}
                axisLine={{ stroke: 'var(--color-steel)' }}
                tickLine={false}
                tickFormatter={formatValue}
              />
              <YAxis
                type="category"
                dataKey={xAxisKey}
                tick={{ fill: 'var(--color-mist)', fontSize: 12, fontFamily: 'var(--font-body)' }}
                axisLine={{ stroke: 'var(--color-steel)' }}
                tickLine={false}
                width={100}
                tickFormatter={formatLabel}
              />
            </>
          ) : (
            <>
              <XAxis
                dataKey={xAxisKey}
                tick={{ fill: 'var(--color-mist)', fontSize: 12, fontFamily: 'var(--font-body)' }}
                axisLine={{ stroke: 'var(--color-steel)' }}
                tickLine={false}
                tickFormatter={formatLabel}
              />
              <YAxis
                tick={{ fill: 'var(--color-mist)', fontSize: 12, fontFamily: 'var(--font-mono)' }}
                axisLine={{ stroke: 'var(--color-steel)' }}
                tickLine={false}
                tickFormatter={formatValue}
              />
            </>
          )}

          {showTooltip && (
            <Tooltip
              content={<CustomTooltip formatValue={formatValue} />}
              cursor={{ fill: 'rgba(77, 113, 250, 0.08)' }}
            />
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

          {series.map((s, i) => (
            <Bar
              key={s.dataKey}
              dataKey={s.dataKey}
              name={s.name}
              fill={s.color || CHART_COLORS[i % CHART_COLORS.length]}
              stackId={s.stackId || stackId}
              radius={stacked ? undefined : [4, 4, 0, 0]}
              animationDuration={600}
              animationEasing="ease-out"
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export { BarChartComponent as BarChart }
