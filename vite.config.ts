import { defineConfig } from 'vite'
import { minifyHtml } from 'vite-plugin-html'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { default as solidPlugin } from 'vite-plugin-solid'

const DEV = process.env.MODE === 'dev'

export default defineConfig({
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
    target: ['chrome64'], //* never add 'browserlist' in 'package.json'. and do not add something else here. 'require' will appear in browser build
  },
})
