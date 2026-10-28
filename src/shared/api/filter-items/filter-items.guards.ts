import {
	type FilterChooseOption,
	type FilterItem,
	FilterType
} from '@api/types/Filter'

export const isRecord = (value: unknown): value is Record<string, unknown> => {
	return typeof value === 'object' && value !== null
}

const isFilterOption = (value: unknown): value is FilterChooseOption => {
	return (
		isRecord(value) &&
		typeof value.id === 'string' &&
		typeof value.name === 'string'
	)
}

export const isFilterItem = (value: unknown): value is FilterItem => {
	return (
		isRecord(value) &&
		typeof value.id === 'string' &&
		typeof value.name === 'string' &&
		value.type === FilterType.OPTION &&
		Array.isArray(value.options) &&
		value.options.every(isFilterOption)
	)
}
