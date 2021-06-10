import { defineConfig } from 'vite'
import { minifyHtml } from 'vite-plugin-html'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { default as solidPlugin } from 'vite-plugin-solid'

const DEV = process.env.MODE === 'dev'

export default defineConfig({
  plugins: [solidPlugin(), vanillaExtractPlugin(), !DEV && minifyHtml()],
  build: {
    target: ['es2020'],
    polyfillDynamicImport: false,
  },
})
