import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: '/',
    envDir: './home',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                skill: resolve(__dirname, 'skill/index.html'),

            },
        },
    },
});