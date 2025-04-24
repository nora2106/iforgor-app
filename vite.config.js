import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import {VitePWA} from "vite-plugin-pwa";

export default defineConfig({
    plugins: [vue(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
            manifest: {
                name: 'Iforgor App',
                short_name: 'Iforgor',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#42b883',
                icons: [
                    {
                        src: 'icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
