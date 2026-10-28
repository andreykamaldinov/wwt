import type { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import type { FilterOptionToggle } from '@filter-modal/filter-modal.types'

export type FilterSectionListProps = {
	filter: SearchRequestFilter
	onToggle: FilterOptionToggle
}
