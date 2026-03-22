import { extendTailwindMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-family': [{ font: ['display', 'body', 'mono'] }],
      'bg-color': [
        { bg: ['void', 'ink', 'dusk', 'steel', 'ash', 'mist', 'signal', 'signal-dark', 'signal-light', 'signal-ghost', 'success', 'warning', 'error', 'info'] },
      ],
      'text-color': [
        { text: ['void', 'ink', 'dusk', 'steel', 'ash', 'mist', 'signal', 'signal-dark', 'signal-light', 'success', 'warning', 'error', 'info'] },
      ],
      'border-color': [
        { border: ['void', 'ink', 'dusk', 'steel', 'ash', 'mist', 'signal', 'signal-dark', 'signal-light', 'success', 'warning', 'error', 'info'] },
      ],
      shadow: [{ shadow: ['glow', 'glow-sm', 'card', 'modal', 'sm'] }],
      rounded: [{ rounded: ['sm', 'md', 'lg', 'xl', 'full'] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
