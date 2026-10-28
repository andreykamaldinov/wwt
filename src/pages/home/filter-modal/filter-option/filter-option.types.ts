import type { FilterChooseOption } from '@api/types/Filter'

import type { FilterOptionToggle } from '@filter-modal/filter-modal.types'

export type FilterOptionProps = {
	filterId: string
	option: FilterChooseOption
	isSelected: boolean
	onToggle: FilterOptionToggle
}
