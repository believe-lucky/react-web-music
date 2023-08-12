// vite.config.ts
import { defineConfig } from "file:///D:/%E5%8A%9E%E5%85%AC/learn/%E5%AE%9E%E8%B7%B5/react-web-music/node_modules/vite/dist/node/index.js";
import react from "file:///D:/%E5%8A%9E%E5%85%AC/learn/%E5%AE%9E%E8%B7%B5/react-web-music/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import eslintPlugin from "file:///D:/%E5%8A%9E%E5%85%AC/learn/%E5%AE%9E%E8%B7%B5/react-web-music/node_modules/vite-plugin-eslint/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\\u529E\u516C\\learn\\\u5B9E\u8DF5\\react-web-music";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ["src/*.jsx", "src/**/*.jsx"]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(
          __vite_injected_original_dirname,
          "src/styles/globalVariate.less"
        )}";`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTUyOUVcdTUxNkNcXFxcbGVhcm5cXFxcXHU1QjlFXHU4REY1XFxcXHJlYWN0LXdlYi1tdXNpY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU1MjlFXHU1MTZDXFxcXGxlYXJuXFxcXFx1NUI5RVx1OERGNVxcXFxyZWFjdC13ZWItbXVzaWNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNSU4QSU5RSVFNSU4NSVBQy9sZWFybi8lRTUlQUUlOUUlRTglQjclQjUvcmVhY3Qtd2ViLW11c2ljL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tZXNsaW50XCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBlc2xpbnRQbHVnaW4oe1xyXG4gICAgICBpbmNsdWRlOiBbXCJzcmMvKi5qc3hcIiwgXCJzcmMvKiovKi5qc3hcIl0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIGxlc3M6IHtcclxuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCIke3Jlc29sdmUoXHJcbiAgICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgICBcInNyYy9zdHlsZXMvZ2xvYmFsVmFyaWF0ZS5sZXNzXCJcclxuICAgICAgICApfVwiO2AsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNULFNBQVMsb0JBQW9CO0FBQ25WLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxrQkFBa0I7QUFIekIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLE1BQ1gsU0FBUyxDQUFDLGFBQWEsY0FBYztBQUFBLElBQ3ZDLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQy9CO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osbUJBQW1CO0FBQUEsUUFDbkIsZ0JBQWdCLFlBQVk7QUFBQSxVQUMxQjtBQUFBLFVBQ0E7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
