import { writeFile, readFile } from 'fs/promises'
import { join, resolve } from 'path'
import { build, preview } from 'vite'

const template = async (inject: string) => {
  const raw = await readFile(join(__dirname, 'index.html'), 'utf8')

  return raw.replace(
    '<script type="module" src="./src/entry-client.tsx"></script>',
    inject
  )
}

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

      if (!Array.isArray(bundle) && 'output' in bundle) {
        for (const file of bundle.output) {
          if (file.fileName.includes('style')) {
            style = file.fileName
          } else if (file.fileName.includes('entry-client')) {
            entry = file.fileName
          }
        }
      }

      const html = await template(
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
