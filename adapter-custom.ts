import { writeFile } from 'fs/promises'
import { join, resolve } from 'path'
import { build, preview } from 'vite'

const template = (inject: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="color-scheme" content="light dark"/>
    <meta property="og:title" content="Artemiy's Toolbox"/>
    <meta name="description" content="Some tools I might need, collected in one place called Artemiy's Toolbox"/>
    <meta property="og:description" content="Some tools I might need, collected in one place called Artemiy's Toolbox"/>
    <link rel="preload" href="/fonts/raleway/1Ptug8zYS_SKggPNyCkIT5lu.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
    <link rel="preload" href="/fonts/raleway/1Ptug8zYS_SKggPNyC0ITw.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fd6c9e">
    <meta name="apple-mobile-web-app-title" content="Artemiy's Toolbox">
    <meta name="application-name" content="Artemiy's Toolbox">
    <meta name="msapplication-TileColor" content="#fd6c9e">
    <meta name="theme-color" content="#fd6c9e">
    <meta property="twitter:card" content="summary_large_image">
    <meta property="og:image" content="https://artemiys-toolbox.pages.dev/og.jpg" />
    <meta property="twitter:image" content="https://artemiys-toolbox.pages.dev/og.jpg">
    ${inject}
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
  </body>
</html>
`

export default function Adapter() {
  return {
    start() {
      preview({
        preview: {
          port: 8080,
          open: true,
        },
      }).then(server => server.printUrls())
    },
    async build(config) {
      const bundle = await build({
        build: {
          outDir: './dist',
          minify: 'terser',
          rollupOptions: {
            input: resolve(join(__dirname, 'src', `entry-client`)),
            output: {},
          },
        },
      })

      let style = ''
      let entry = ''

      if (!Array.isArray(bundle)) {
        for (const file of bundle.output) {
          if (file.fileName.includes('style')) {
            style = file.fileName
          } else if (file.fileName.includes('entry-client')) {
            entry = file.fileName
          }
        }
      }

      const html = template(
        `<script type="module" crossorigin src="${entry}"></script><link rel="stylesheet" href="${style}">`
      )

      await writeFile(
        resolve(join(__dirname, 'dist', 'index.html')),
        html,
        'utf8'
      )
    },
  }
}
