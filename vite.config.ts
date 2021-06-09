import { defineConfig } from 'vite'
import { default as solidPlugin } from 'vite-plugin-solid'
import { default as linariaPlugin } from 'vite-plugin-linaria'

export default defineConfig({
  plugins: [solidPlugin(), linariaPlugin()],
  build: {
    target: ['es2020', 'chrome84', 'firefox74'],
    polyfillDynamicImport: false,
  },
})
