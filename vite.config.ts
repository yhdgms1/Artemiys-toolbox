import path from 'node:path'
import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { default as solidPlugin } from 'vite-plugin-solid'
import { VitePWA } from 'vite-plugin-pwa'
import { description } from './package.json'

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
          plugins: [],
        },
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
          description,
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
      rollupOptions: {
        output: {
          manualChunks: id => {
            if (id.includes('graphemer')) return 'graphemer'
            if (id.includes('iuliia')) return 'iuliia'

            return null
          },
        },
      },
    },
    esbuild: {
      charset: 'utf8',
    },
    resolve: {
      alias: {
        '~': path.resolve(process.cwd(), 'src'),
      },
    },
  }
})
