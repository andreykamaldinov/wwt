import type { FilterItem } from '@api/types/Filter'

import type { FilterOptionToggle } from '@filter-modal/filter-modal.types'

export type FilterSectionProps = {
	filterItem: FilterItem
	selectedOptionIds: readonly string[]
	onToggle: FilterOptionToggle
}
