import { FilterType } from '@api/types/Filter'
import type { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import {
	getSelectedOptionIds,
	toggleOption
} from '@store/search-filter/search-filter.utils'

const filter: SearchRequestFilter = [
	{ id: 'MEAL_OPTIONS', type: FilterType.OPTION, optionsIds: ['breakfast'] }
]

describe('getSelectedOptionIds', () => {
	it('returns selected options of the filter', () => {
		expect(getSelectedOptionIds(filter, 'MEAL_OPTIONS')).toEqual(['breakfast'])
	})

	it('returns the same empty array for a filter without selection', () => {
		expect(getSelectedOptionIds(filter, 'FACILITIES')).toEqual([])
		expect(getSelectedOptionIds(filter, 'FACILITIES')).toBe(
			getSelectedOptionIds([], 'BED_TYPE')
		)
	})
})

describe('toggleOption', () => {
	it('creates a group for a new filter', () => {
		expect(
			toggleOption(filter, { filterId: 'FACILITIES', optionId: 'pool' })
		).toEqual([
			...filter,
			{ id: 'FACILITIES', type: FilterType.OPTION, optionsIds: ['pool'] }
		])
	})

	it('adds an option to an existing group', () => {
		expect(
			toggleOption(filter, { filterId: 'MEAL_OPTIONS', optionId: 'lunch' })
		).toEqual([
			{
				id: 'MEAL_OPTIONS',
				type: FilterType.OPTION,
				optionsIds: ['breakfast', 'lunch']
			}
		])
	})

	it('removes the group when its last option is unselected', () => {
		expect(
			toggleOption(filter, { filterId: 'MEAL_OPTIONS', optionId: 'breakfast' })
		).toEqual([])
	})

	it('does not mutate the source filter', () => {
		const snapshot = structuredClone(filter)

		toggleOption(filter, { filterId: 'MEAL_OPTIONS', optionId: 'lunch' })

		expect(filter).toEqual(snapshot)
	})
})
