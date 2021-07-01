import { defineConfig } from 'vite'
import { minifyHtml } from 'vite-plugin-html'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { babelifyPlugin } from './plugins/babelifyPlugin'
import { default as solidPlugin } from 'vite-plugin-solid'
import { default as terserOptions } from '/.terserrc'

const DEV = process.env.MODE === 'dev'

export default defineConfig({
  plugins: [
    solidPlugin(),
    vanillaExtractPlugin(),
    !DEV && minifyHtml(),
    !DEV && babelifyPlugin(),
  ],
  build: {
    cssCodeSplit: false,
    target: ['es2020'],
    polyfillDynamicImport: false,
    terserOptions,
  },
})
