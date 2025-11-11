import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "unplugin-dts/vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: {
        // Core functions (vanilla JS)
        index: resolve(__dirname, "lib/core/index.ts"),
        // React wrapper
        // react: resolve(__dirname, "lib/react/index.tsx"),
        // Svelte wrapper
        // svelte: resolve(__dirname, "lib/svelte/index.ts"),
      },
      name: "embed-utils",
      fileName: "embed-utils",
    },
  },
  plugins: [react(), dts({ bundleTypes: true })],
  // rollupOptions:   {
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
