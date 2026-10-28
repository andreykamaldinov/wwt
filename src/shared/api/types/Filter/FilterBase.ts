import type { FilterType } from '@api/types/Filter/FilterType'

export interface FilterBase {
	id: string
	name: string
	description?: string
	image?: string
	icon?: string
	type: FilterType
}
