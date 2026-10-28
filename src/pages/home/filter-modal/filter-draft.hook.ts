import { useCallback, useState } from 'react'

import type { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import type { FilterOptionRef } from '@store/search-filter/search-filter.types'
import { toggleOption } from '@store/search-filter/search-filter.utils'

import type { FilterDraft } from '@filter-modal/filter-modal.types'

export const useFilterDraft = (
	initialFilter: SearchRequestFilter
): FilterDraft => {
	const [draft, setDraft] = useState<SearchRequestFilter>(initialFilter)

	const toggleDraftOption = useCallback((option: FilterOptionRef): void => {
		setDraft(current => toggleOption(current, option))
	}, [])

	const clearDraft = useCallback((): void => {
		setDraft([])
	}, [])

	return { draft, toggleDraftOption, clearDraft }
}
