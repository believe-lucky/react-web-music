import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist", // 设置输出目录为 dist
    sourcemap: false, // 关闭生成 Source Map 文件
    rollupOptions: {
      output: {
        entryFileNames: "[name]-[hash].js", // 自定义输出文件名格式
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name]-[hash][extname]", // 自定义静态资源文件名格式
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
