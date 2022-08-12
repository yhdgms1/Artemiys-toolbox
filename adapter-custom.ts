import { join, resolve } from 'path'
import { build, preview } from 'vite'

export default function Adapter() {
  return {
    async start() {
      const server = await preview({
        preview: {
          port: 8080,
          open: true,
        },
      })

      server.printUrls()
    },
    async build(config, builder) {
      await build({
        build: {
          outDir: './dist',
          rollupOptions: {
            input: resolve(join(config.root, 'index.html')),
            output: {
              manualChunks: undefined,
            },
          },
        },
      })
    },
  }
}
