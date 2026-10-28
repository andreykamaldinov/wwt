import { isFilterItem, isRecord } from '@api/filter-items/filter-items.guards'
import { InvalidFilterDataError } from '@api/filter-items/invalid-filter-data.error'
import type { FilterItem } from '@api/types/Filter'

export const parseFilterItems = (payload: unknown): FilterItem[] => {
	if (!isRecord(payload) || !Array.isArray(payload.filterItems)) {
		throw new InvalidFilterDataError(
			'Filter data must contain a filterItems array'
		)
	}

	return payload.filterItems.filter(isFilterItem)
}

export const fetchFilterItems = async (): Promise<FilterItem[]> => {
	const { default: payload } = await import('@temp/filterData.json')

	return parseFilterItems(payload)
}
