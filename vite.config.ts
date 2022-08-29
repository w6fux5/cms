import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/j': {
        target: 'http://10.172.161.2:6881',
        // changeOrigin: true,
        rewrite: (path) => path.replace(/^\/j/, ''),
      },
    },
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#fa8c16',
          'success-color': '#3bbf2a',
          'error-color': '#bf2a2a',
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
