import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  outDir: 'dist',
  manifest: {
    name: 'Web | IBI Lounge',
    short_name: 'IBI Web',
    description: 'An IBI Lounge Web App',
    theme_color: '#ffffff',
    icons: [
        {
            src: 'assets/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
        },
        {
            src: 'assets/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
        }
    ]
}})

export default defineConfig({
  plugins: [
    vue(),
    vitePWA,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 80
  }
})
