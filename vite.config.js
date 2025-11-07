import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.js"),
      name: "embed-utils",
      fileName: "embed-utils",
    },
  },
  plugins: [],
  // rollupOptions: {
  // make sure to externalize deps that shouldn't be bundled
  // into your library
  // external: ['vue'],
  // output: {
  // Provide global variables to use in the UMD build
  // for externalized deps
  // globals: {
  // vue: 'Vue',
  //     },
  //   },
  // },
  // },
});
