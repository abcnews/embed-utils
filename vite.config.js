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
        // Core functions (vanilla JS)
        index: resolve(__dirname, "lib/core/index.ts"),
        // React wrapper
        react: resolve(__dirname, "lib/react/index.tsx"),
        // Svelte wrapper
        svelte: resolve(__dirname, "lib/svelte/index.ts"),
      },
      name: "embed-utils",
      // fileName: (format, entryName) => `${entryName}.${format}.js`,
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
