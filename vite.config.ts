/// <reference types="vitest" />
/// <reference types="vite/client" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

const resolveSrc = (path: string): string =>
	fileURLToPath(new URL(`./src/${path}`, import.meta.url))

export default defineConfig(() => ({
	root: '.',

	resolve: {
		alias: {
			'@api': resolveSrc('shared/api'),
			'@temp': resolveSrc('shared/temp'),
			'@shared': resolveSrc('shared'),
			'@store': resolveSrc('store'),
			'@home': resolveSrc('pages/home'),
			'@filter-modal': resolveSrc('pages/home/filter-modal')
		}
	},

	server: {
		port: 3000,
		host: true,
		strictPort: true,
		hmr: {
			port: 3010
		}
	},

	plugins: [
		react(),
		svgr({
			include: '**/*.svg'
		}),
		tailwindcss()
	],

	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['setupTest.ts'],
		coverage: {
			provider: 'istanbul'
		}
	}
}))
