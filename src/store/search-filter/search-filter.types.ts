import type { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

export type FilterOptionRef = {
	filterId: string
	optionId: string
}

export type SearchFilterState = {
	filter: SearchRequestFilter
	applyFilter: (filter: SearchRequestFilter) => void
}
