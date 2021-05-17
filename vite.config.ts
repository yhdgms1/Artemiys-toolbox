import { defineConfig } from 'vite'
import { default as solidPlugin } from 'vite-plugin-solid'
import { linaria as linariaPlugin } from '@artemis69/vite-plugin-linaria-css'

export default defineConfig({
  plugins: [solidPlugin(), linariaPlugin()],
  build: {
    target: ['es2020', 'chrome84', 'firefox74'],
    polyfillDynamicImport: false,
  },
  optimizeDeps: {
    exclude: ['@amoutonbrady/solid-i18n']
  }
})
