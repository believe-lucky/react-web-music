import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // 设置公共的输出目录为 dist
        dir: "dist",
      },
    },
  },
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
  server: {
    proxy: {
      "/ai": {
        target: "https://wenxin.baidu.com/moduleApi/portal/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ai/, ""),
      },
    },
  },
});
