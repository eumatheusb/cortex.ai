'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
  DragOverlay,
  useDroppable,
} from '@dnd-kit/core'
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, User } from 'lucide-react'
import { cn } from '../../utils'

export interface KanbanCard {
  id:       string
  title:    string
  subtitle?: string
  value?:   string
  avatar?:  string
  initials?: string
  tags?:    string[]
}

export interface KanbanColumn {
  id:     string
  title:  string
  color?: string
  cards:  KanbanCard[]
}

export interface KanbanBoardProps {
  columns:       KanbanColumn[]
  onCardMove?:   (cardId: string, fromColumn: string, toColumn: string) => void
  loading?:      boolean
  className?:    string
}

function AvatarCircle({ avatar, initials }: { avatar?: string; initials?: string }) {
  if (avatar) {
    return (
      <img
        src={avatar}
        alt=""
        className="h-7 w-7 rounded-full object-cover border border-steel"
      />
    )
  }
  if (initials) {
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-signal/20 text-xs font-semibold text-signal">
        {initials}
      </div>
    )
  }
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-steel text-mist">
      <User size={14} />
    </div>
  )
}

function SortableCard({ card }: { card: KanbanCard }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        'group flex gap-3 rounded-lg border border-steel bg-ink p-3 transition-all',
        'hover:border-signal/30 hover:shadow-glow-sm',
        isDragging && 'opacity-50 shadow-lg'
      )}
      {...attributes}
    >
      <button
        className="mt-0.5 shrink-0 cursor-grab text-ash opacity-0 group-hover:opacity-100 transition-opacity active:cursor-grabbing"
        aria-label="Arrastar card"
        {...listeners}
      >
        <GripVertical size={14} />
      </button>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-medium text-white truncate">{card.title}</h4>
          <AvatarCircle avatar={card.avatar} initials={card.initials} />
        </div>
        {card.subtitle && (
          <p className="mt-0.5 text-xs text-mist truncate">{card.subtitle}</p>
        )}
        <div className="mt-2 flex items-center gap-2">
          {card.value && (
            <span className="font-mono text-xs font-medium text-signal">{card.value}</span>
          )}
          {card.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-steel/60 px-2 py-0.5 text-[10px] font-medium text-mist"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function CardOverlay({ card }: { card: KanbanCard }) {
  return (
    <div className="flex gap-3 rounded-lg border border-signal/40 bg-ink p-3 shadow-lg shadow-signal/10 w-[280px]">
      <div className="mt-0.5 shrink-0 text-ash">
        <GripVertical size={14} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-medium text-white truncate">{card.title}</h4>
          <AvatarCircle avatar={card.avatar} initials={card.initials} />
        </div>
        {card.subtitle && (
          <p className="mt-0.5 text-xs text-mist truncate">{card.subtitle}</p>
        )}
        {card.value && (
          <span className="mt-2 block font-mono text-xs font-medium text-signal">{card.value}</span>
        )}
      </div>
    </div>
  )
}

function DroppableColumn({
  column,
}: {
  column: KanbanColumn
}) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id })
  const cardIds = column.cards.map((c) => c.id)

  return (
    <div
      className={cn(
        'flex w-[300px] shrink-0 flex-col rounded-xl border border-steel bg-dusk/50 overflow-hidden transition-colors',
        isOver && 'border-signal/40 bg-signal/5'
      )}
    >
      {/* Column header */}
      <div className="flex items-center justify-between border-b border-steel px-4 py-3">
        <div className="flex items-center gap-2">
          {column.color && (
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: column.color }}
            />
          )}
          <h3 className="font-display text-sm font-semibold text-white">
            {column.title}
          </h3>
        </div>
        <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-steel px-1.5 font-mono text-xs text-mist">
          {column.cards.length}
        </span>
      </div>

      {/* Cards */}
      <div
        ref={setNodeRef}
        className="flex flex-1 flex-col gap-2 overflow-y-auto p-2 min-h-[100px]"
      >
        <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
          {column.cards.length === 0 ? (
            <div className="flex flex-1 items-center justify-center py-8">
              <p className="text-xs text-ash">Nenhum card</p>
            </div>
          ) : (
            column.cards.map((card) => (
              <SortableCard key={card.id} card={card} />
            ))
          )}
        </SortableContext>
      </div>
    </div>
  )
}

function SkeletonColumn() {
  return (
    <div className="flex w-[300px] shrink-0 flex-col rounded-xl border border-steel bg-dusk/50 overflow-hidden">
      <div className="border-b border-steel px-4 py-3">
        <div className="h-4 w-24 rounded bg-steel animate-pulse" />
      </div>
      <div className="flex flex-col gap-2 p-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-lg border border-steel bg-ink p-3">
            <div className="h-4 w-32 rounded bg-steel animate-pulse mb-2" />
            <div className="h-3 w-20 rounded bg-steel animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  )
}

function KanbanBoard({
  columns: initialColumns,
  onCardMove,
  loading = false,
  className,
}: KanbanBoardProps) {
  const [columns, setColumns] = React.useState(initialColumns)
  const [activeCard, setActiveCard] = React.useState<KanbanCard | null>(null)

  React.useEffect(() => {
    setColumns(initialColumns)
  }, [initialColumns])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor)
  )

  function findCardColumn(cardId: string): string | undefined {
    return columns.find((col) => col.cards.some((c) => c.id === cardId))?.id
  }

  function handleDragStart(event: DragStartEvent) {
    const card = columns
      .flatMap((col) => col.cards)
      .find((c) => c.id === event.active.id)
    setActiveCard(card || null)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveCard(null)

    if (!over) return

    const activeId = String(active.id)
    const overId = String(over.id)

    const fromColumnId = findCardColumn(activeId)
    if (!fromColumnId) return

    // Determine target column
    let toColumnId: string
    const isOverColumn = columns.some((col) => col.id === overId)
    if (isOverColumn) {
      toColumnId = overId
    } else {
      const overColumn = findCardColumn(overId)
      toColumnId = overColumn || fromColumnId
    }

    if (fromColumnId === toColumnId) return

    setColumns((prev) =>
      prev.map((col) => {
        if (col.id === fromColumnId) {
          return { ...col, cards: col.cards.filter((c) => c.id !== activeId) }
        }
        if (col.id === toColumnId) {
          const card = prev
            .find((c) => c.id === fromColumnId)
            ?.cards.find((c) => c.id === activeId)
          if (!card) return col
          return { ...col, cards: [...col.cards, card] }
        }
        return col
      })
    )

    onCardMove?.(activeId, fromColumnId, toColumnId)
  }

  if (loading) {
    return (
      <div className={cn('flex gap-4 overflow-x-auto pb-4', className)}>
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonColumn key={i} />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
      className={cn('flex gap-4 overflow-x-auto pb-4', className)}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {columns.map((column) => (
          <DroppableColumn key={column.id} column={column} />
        ))}

        <DragOverlay>
          {activeCard ? <CardOverlay card={activeCard} /> : null}
        </DragOverlay>
      </DndContext>
    </motion.div>
  )
}

export { KanbanBoard }
