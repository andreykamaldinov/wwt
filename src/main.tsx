import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Home } from '@home/home'

import './i18n'
import './index.css'

const queryClient = new QueryClient()
const rootElement = document.getElementById('root')

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<Home />
			</QueryClientProvider>
		</StrictMode>
	)
}
