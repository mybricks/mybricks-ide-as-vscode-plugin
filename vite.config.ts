import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: './',
  root: path.resolve(__dirname, 'src/webview/pages'),
  build: {
    outDir: path.resolve(__dirname, 'dist/webview'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/webview/pages/main/index.html'),
        sidebar: path.resolve(
          __dirname,
          'src/webview/pages/sidebar/index.html',
        ),
      },
      output: {
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
      },
    },
  },
  resolve: {
    alias: {},
  },
})
