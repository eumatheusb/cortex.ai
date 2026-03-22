'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  ComposedChart,
  type TooltipProps,
} from 'recharts'
import { cn } from '../../../utils'

export interface LineChartSeries {
  dataKey:    string
  name:       string
  color?:     string
  dashed?:    boolean
  showDots?:  boolean
  filled?:    boolean
}

export interface LineChartProps {
  data:          Record<string, unknown>[]
  series:        LineChartSeries[]
  xAxisKey:      string
  showGrid?:     boolean
  showLegend?:   boolean
  showTooltip?:  boolean
  height?:       number
  className?:    string
  formatValue?:  (value: number) => string
  formatLabel?:  (label: string) => string
  curved?:       boolean
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

function LineChartComponent({
  data,
  series,
  xAxisKey,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  height = 400,
  className,
  formatValue,
  formatLabel,
  curved = true,
}: LineChartProps) {
  const hasFilled = series.some((s) => s.filled)
  const ChartContainer = hasFilled ? ComposedChart : RechartsLineChart

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
      className={cn('w-full', className)}
    >
      <ResponsiveContainer width="100%" height={height}>
        <ChartContainer
          data={data}
          margin={{ top: 8, right: 8, left: 8, bottom: 8 }}
        >
          <defs>
            {series.map((s, i) => {
              const color = s.color || CHART_COLORS[i % CHART_COLORS.length]
              return (
                <linearGradient
                  key={`gradient-${s.dataKey}`}
                  id={`gradient-${s.dataKey}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              )
            })}
          </defs>

          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--color-steel)"
              strokeOpacity={0.5}
              vertical={false}
            />
          )}

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

          {showTooltip && (
            <Tooltip
              content={<CustomTooltip formatValue={formatValue} />}
              cursor={{ stroke: 'var(--color-steel)', strokeDasharray: '3 3' }}
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

          {series.map((s, i) => {
            const color = s.color || CHART_COLORS[i % CHART_COLORS.length]

            if (s.filled) {
              return (
                <Area
                  key={s.dataKey}
                  type={curved ? 'monotone' : 'linear'}
                  dataKey={s.dataKey}
                  name={s.name}
                  stroke={color}
                  strokeWidth={2}
                  fill={`url(#gradient-${s.dataKey})`}
                  dot={s.showDots !== false ? { r: 3, fill: color, stroke: 'var(--color-ink)', strokeWidth: 2 } : false}
                  activeDot={{ r: 5, fill: color, stroke: 'var(--color-ink)', strokeWidth: 2 }}
                  animationDuration={800}
                  animationEasing="ease-out"
                />
              )
            }

            return (
              <Line
                key={s.dataKey}
                type={curved ? 'monotone' : 'linear'}
                dataKey={s.dataKey}
                name={s.name}
                stroke={color}
                strokeWidth={2}
                strokeDasharray={s.dashed ? '6 3' : undefined}
                dot={s.showDots !== false ? { r: 3, fill: color, stroke: 'var(--color-ink)', strokeWidth: 2 } : false}
                activeDot={{ r: 5, fill: color, stroke: 'var(--color-ink)', strokeWidth: 2 }}
                animationDuration={800}
                animationEasing="ease-out"
              />
            )
          })}
        </ChartContainer>
      </ResponsiveContainer>
    </motion.div>
  )
}

export { LineChartComponent as LineChart }
