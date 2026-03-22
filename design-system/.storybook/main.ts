import type { StorybookConfig } from '@storybook/nextjs-vite'
import tailwindcss from '@tailwindcss/vite'

const config: StorybookConfig = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  docs: { autodocs: 'tag' },
  viteFinal(config) {
    // @tailwindcss/vite must be unshifted (run first) so it processes
    // globals.css before any other Vite transforms. Using push() risks
    // it running after CSS modules or other transforms, breaking token resolution.
    config.plugins = config.plugins ?? []
    config.plugins.unshift(tailwindcss())
    return config
  },
}

export default config
