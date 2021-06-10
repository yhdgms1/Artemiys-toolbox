import { defineConfig } from 'vite'
import { minifyHtml } from 'vite-plugin-html'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { default as solidPlugin } from 'vite-plugin-solid'
import { default as linariaPlugin } from 'vite-plugin-linaria'
import { default as legacyPlugin } from '@vitejs/plugin-legacy'

const DEV = process.env.MODE === 'dev'

export default defineConfig({
  plugins: [
    solidPlugin(),
    vanillaExtractPlugin(),
    linariaPlugin(),
    legacyPlugin({
      targets: ['chrome 75', 'firefox 78', 'not IE 11'],
    }),
    minifyHtml({}),
  ],
  build: {
    target: ['es2020'],
    polyfillDynamicImport: false,
  },
})
