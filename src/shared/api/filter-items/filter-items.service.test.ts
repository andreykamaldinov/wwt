import { parseFilterItems } from '@api/filter-items/filter-items.service'
import { InvalidFilterDataError } from '@api/filter-items/invalid-filter-data.error'

const validItem = {
	id: 'BED_TYPE',
	name: 'Bed type',
	type: 'OPTION',
	options: [{ id: 'twin-beds', name: 'Twin beds' }]
}

describe('parseFilterItems', () => {
	it('returns valid filter items', () => {
		expect(parseFilterItems({ filterItems: [validItem] })).toEqual([validItem])
	})

	it('skips items of unknown type or with invalid options', () => {
		expect(
			parseFilterItems({
				filterItems: [
					validItem,
					{ ...validItem, type: 'RANGE' },
					{ ...validItem, options: [{ id: 1 }] }
				]
			})
		).toEqual([validItem])
	})

	it('throws on invalid payload', () => {
		expect(() => parseFilterItems(null)).toThrow(InvalidFilterDataError)
		expect(() => parseFilterItems({ filterItems: {} })).toThrow(
			InvalidFilterDataError
		)
	})
})
