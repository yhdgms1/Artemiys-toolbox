import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { default as solidPlugin } from 'solid-start/vite'
// import { VitePWA } from 'vite-plugin-pwa'
// less lines of code will be affected (prettier)
const VitePWA = (...args: any[]) => undefined
import pkg from './package.json'
import adapter from './adapter-custom'

export default defineConfig(() => {
  return {
    plugins: [
      vanillaExtractPlugin(),
      solidPlugin({
        babel: {
          babelrc: false,
          browserslistConfigFile: false,
          configFile: false,
          highlightCode: false,
        },
        ssr: false,
        inspect: false,
        adapter: adapter(),
      }),
      VitePWA({
        includeAssets: ['og.jpg', 'robots.txt'],
        manifest: {
          theme_color: '#fd6c9e',
          background_color: '#171717',
          display: 'minimal-ui',
          scope: '/',
          start_url: '.',
          name: "Artemiy's Toolbox",
          short_name: 'Toolbox',
          description: pkg.description,
          id: '/',
          icons: [
            {
              src: '/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
        workbox: {
          cleanupOutdatedCaches: true,
        },
      }),
    ],
    build: {
      cssCodeSplit: false,
      target: ['chrome75', 'safari13'],
      minify: 'terser',
    },
    esbuild: {
      charset: 'utf8',
    },
  }
})
