import { create } from 'zustand'

import type { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import type { SearchFilterState } from '@store/search-filter/search-filter.types'

export const useSearchFilterStore = create<SearchFilterState>()(set => ({
	filter: [],
	applyFilter: (filter: SearchRequestFilter): void => {
		set({ filter })
	}
}))

export const selectSearchFilter = (
	state: SearchFilterState
): SearchRequestFilter => {
	return state.filter
}

export const selectApplyFilter = (
	state: SearchFilterState
): SearchFilterState['applyFilter'] => {
	return state.applyFilter
}
