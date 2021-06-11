import * as babel from "@babel/core"

export const babelifyPlugin = () => {
    return {
      name: 'babelify',
      transform(src, id) {
        if (/\.(js)$/.test(id)) {
            const { code, map } = babel.transform(src, {
                presets: [
                    [
                        "@babel/preset-env",
                        {
                          "targets": {
                            "chrome": "75",
                            "firefox": "78"
                          },
                          "modules": false,
                          "loose": true,
                        }
                    ]
                ],
                plugins: [
                    "@babel/plugin-proposal-nullish-coalescing-operator"
                ],
                compact: false
            })
            return {
                code,
                map
            }
        }
      }
    }
}