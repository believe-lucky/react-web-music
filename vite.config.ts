import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ["src/*.jsx", "src/**/*.jsx"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    modules: {
      // localsConvention: "camelCase",
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(
          __dirname,
          "src/styles/globalVariate.less"
        )}";`,
      },
    },
  },
});
