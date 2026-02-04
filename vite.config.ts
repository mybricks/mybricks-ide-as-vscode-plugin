import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [
    {
      name: 'treat-less-as-module',
      enforce: 'pre',
      transform(code, id) {
        if (!/\.(js|jsx|ts|tsx)$/.test(id)) return null

        // Pass 1: 将默认导入转换为命名空间导入 (import css from '...' -> import * as css from '...')
        let newCode = code.replace(
          /(import\s+)(\w+)(\s+from\s+)(['"])([^'"]+\.less)\4/g,
          (match, imp, varName, from, quote, path) => {
            if (path.endsWith('.module.less') || path.includes('?')) {
              return match
            }
            return `${imp}* as ${varName}${from}${quote}${path}?module${quote}`
          },
        )

        return newCode.replace(
          /((?:import|export)\s+[\s\S]*?\s+from\s+['"])([^'"]+\.less)(['"])/g,
          (match, prefix, path, suffix) => {
            if (path.endsWith('.module.less') || path.includes('?')) {
              return match
            }
            return `${prefix}${path}?module${suffix}`
          },
        )
      },
    },
  ],
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
    alias: {
      '@': path.resolve(__dirname, 'src/webview'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
