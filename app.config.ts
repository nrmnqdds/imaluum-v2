import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    preset: "node-server",
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
    compatibilityDate: '2024-11-26'
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 100,
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
            return;
          }
          warn(warning);
        },
      },
    },
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
    // assetsInclude: ["**/*.lottie"]
  },
});
