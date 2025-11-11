import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "unplugin-dts/vite";
import react from "@vitejs/plugin-react";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "lib/core/index.ts"),
        react: resolve(__dirname, "lib/react/index.tsx"),
        svelte: resolve(__dirname, "lib/svelte/index.ts"),
      },
      name: "embed-utils",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
  plugins: [react(), svelte(), dts({ bundleTypes: true })],
});
