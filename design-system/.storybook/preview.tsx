import type { Preview } from '@storybook/react'
import '../styles/globals.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'cortex-dark',
      values: [
        { name: 'cortex-dark',  value: '#090E1A' },
        { name: 'cortex-dusk',  value: '#1B2845' },
        { name: 'cortex-light', value: '#F7F9FC' },
      ],
    },
    layout: 'centered',
  },
  initialGlobals: {
    theme: 'cortex-dark',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'cortex-dark', title: 'Dark Mode', icon: 'moon' },
          { value: 'cortex-light', title: 'Light Mode', icon: 'sun' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const selectedTheme: string = context.globals['theme'] ?? 'cortex-dark'
      const isLight = selectedTheme === 'cortex-light'

      document.documentElement.setAttribute('data-theme', selectedTheme)
      document.documentElement.classList.toggle('light', isLight)

      document.body.style.background = isLight ? '#F7F9FC' : '#090E1A'
      document.body.style.color = isLight ? '#0C1220' : '#F7F9FC'

      return <Story />
    },
  ],
}

export default preview
