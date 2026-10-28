import type { FilterBase } from '@api/types/Filter/FilterBase'
import type { FilterChooseOption } from '@api/types/Filter/FilterChooseOption'
import type { FilterType } from '@api/types/Filter/FilterType'

export interface FilterChoose extends FilterBase {
	type: FilterType.OPTION
	allowAll?: boolean
	options: FilterChooseOption[]
}
