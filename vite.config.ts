import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { linaria as linariaPlugin } from '@artemis69/vite-plugin-linaria-css';

export default defineConfig({
  plugins: [
    solidPlugin(),
    linariaPlugin()
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
