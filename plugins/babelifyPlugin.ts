import type { Plugin } from 'vite'
import * as babel from '@babel/core'

export const babelifyPlugin = (): Plugin => {
  return {
    name: 'babelify',
    transform(src, id) {
      if (/\.(js)$/.test(id)) {
        const { code, map } = babel.transform(src, {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  chrome: '74',
                  firefox: '78',
                },
                modules: false,
                loose: true,
              },
            ],
          ],
          plugins: [
            '@babel/plugin-proposal-nullish-coalescing-operator',
            '@babel/plugin-proposal-optional-chaining',
          ],
          compact: false,
          babelrc: false,
        })
        return {
          code,
          map,
        }
      }
    },
  }
}
