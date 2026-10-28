import { FilterType } from '@api/types/Filter'
import type { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import type { FilterOptionRef } from '@store/search-filter/search-filter.types'

const EMPTY_OPTION_IDS: readonly string[] = []

export const getSelectedOptionIds = (
	filter: SearchRequestFilter,
	filterId: string
): readonly string[] => {
	return (
		filter.find(({ id }) => id === filterId)?.optionsIds ?? EMPTY_OPTION_IDS
	)
}

export const toggleOption = (
	filter: SearchRequestFilter,
	{ filterId, optionId }: FilterOptionRef
): SearchRequestFilter => {
	const group = filter.find(({ id }) => id === filterId)

	if (!group) {
		return [
			...filter,
			{ id: filterId, type: FilterType.OPTION, optionsIds: [optionId] }
		]
	}

	const optionsIds: string[] = group.optionsIds.includes(optionId)
		? group.optionsIds.filter(id => id !== optionId)
		: [...group.optionsIds, optionId]

	if (optionsIds.length === 0) {
		return filter.filter(({ id }) => id !== filterId)
	}

	return filter.map(item => (item === group ? { ...item, optionsIds } : item))
}
