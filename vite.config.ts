import { defineConfig } from 'vite'
import { minifyHtml } from 'vite-plugin-html'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { default as solidPlugin } from 'vite-plugin-solid'

export default defineConfig(({ mode }) => {
  const DEV = mode !== 'production'

  return {
    plugins: [
      solidPlugin({
        babel: {
          babelrc: false,
        },
      }),
      vanillaExtractPlugin(),
      !DEV && minifyHtml(),
    ],
    build: {
      cssCodeSplit: false,
      target: ['chrome75', 'safari13'],
    },
  }
})
