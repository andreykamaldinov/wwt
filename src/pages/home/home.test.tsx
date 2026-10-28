import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { fireEvent, render, screen, within } from '@testing-library/react'

import { FilterType } from '@api/types/Filter'

import { useSearchFilterStore } from '@store/search-filter/search-filter.store'

import { Home } from '@home/home'

const renderApp = () =>
	render(
		<QueryClientProvider client={new QueryClient()}>
			<Home />
		</QueryClientProvider>
	)

const getAppliedFilter = () => {
	const region = screen.getByRole('region', { name: 'Selected filter' })

	return JSON.parse(region.querySelector('code')?.textContent ?? 'null')
}

const openFilterAndSelect = async (optionName: string) => {
	fireEvent.click(screen.getByRole('button', { name: 'Open filter' }))
	fireEvent.click(await screen.findByRole('checkbox', { name: optionName }))
	fireEvent.click(screen.getByRole('button', { name: 'Apply' }))

	return screen.getByRole('alertdialog', {
		name: 'Do you want to apply new filter'
	})
}

describe('Home', () => {
	beforeEach(() => {
		useSearchFilterStore.setState({ filter: [] })
	})

	it('applies the selected options after confirmation', async () => {
		renderApp()

		const confirm = await openFilterAndSelect('Pool')
		fireEvent.click(
			within(confirm).getByRole('button', { name: 'Apply new filter' })
		)

		expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
		expect(getAppliedFilter()).toEqual([
			{ id: 'FACILITIES', type: 'OPTION', optionsIds: ['pool'] }
		])
	})

	it('keeps the previous filter when the user cancels', async () => {
		renderApp()

		const confirm = await openFilterAndSelect('Pool')
		fireEvent.click(
			within(confirm).getByRole('button', { name: 'Use old filter' })
		)

		expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
		expect(getAppliedFilter()).toEqual([])
	})

	it('pre-fills the modal with the applied filter', async () => {
		useSearchFilterStore.setState({
			filter: [
				{ id: 'BED_TYPE', type: FilterType.OPTION, optionsIds: ['double-bed'] }
			]
		})
		renderApp()

		fireEvent.click(screen.getByRole('button', { name: 'Open filter' }))

		expect(
			await screen.findByRole('checkbox', { name: 'Double Bed' })
		).toBeChecked()
		expect(
			screen.getByRole('checkbox', { name: 'Twin beds' })
		).not.toBeChecked()
	})

	it('returns to editing when the confirmation is closed', async () => {
		renderApp()

		const confirm = await openFilterAndSelect('Pool')
		fireEvent.click(within(confirm).getByRole('button', { name: 'Close' }))

		expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
		expect(screen.getByRole('checkbox', { name: 'Pool' })).toBeChecked()
		expect(getAppliedFilter()).toEqual([])
	})

	it('clears the draft with "Clear all parameters"', async () => {
		useSearchFilterStore.setState({
			filter: [
				{ id: 'BED_TYPE', type: FilterType.OPTION, optionsIds: ['double-bed'] }
			]
		})
		renderApp()

		fireEvent.click(screen.getByRole('button', { name: 'Open filter' }))
		const doubleBed = await screen.findByRole('checkbox', {
			name: 'Double Bed'
		})
		fireEvent.click(
			screen.getByRole('button', { name: 'Clear all parameters' })
		)

		expect(doubleBed).not.toBeChecked()
		expect(getAppliedFilter()).toEqual([
			{ id: 'BED_TYPE', type: 'OPTION', optionsIds: ['double-bed'] }
		])
	})

	it('closes the modal without changes on Escape', async () => {
		renderApp()

		fireEvent.click(screen.getByRole('button', { name: 'Open filter' }))
		fireEvent.click(await screen.findByRole('checkbox', { name: 'Pool' }))
		fireEvent(
			screen.getByRole('dialog', { name: 'Filter' }),
			new Event('cancel', { cancelable: true })
		)

		expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
		expect(getAppliedFilter()).toEqual([])
	})
})
