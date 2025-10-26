import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 3000,
  },
  plugins: [
    dyadComponentTagger(),
    react(),
    viteImagemin({
      // Tối ưu hóa JPEG/JPG với chất lượng cao
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      svg: {
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
      mozjpeg: {
        quality: 85, // Chất lượng cao (0-100), 85 giữ được độ nét tốt
        progressive: true, // Progressive loading
      },
      png: {
        quality: 85,
        speed: 4,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
