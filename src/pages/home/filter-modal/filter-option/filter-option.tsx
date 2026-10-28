import { type FC, memo, useCallback } from 'react'

import { Checkbox } from '@shared/checkbox/checkbox'

import type { FilterOptionProps } from '@filter-modal/filter-option/filter-option.types'

const FilterOptionView: FC<FilterOptionProps> = ({
	filterId,
	option,
	isSelected,
	onToggle
}) => {
	const handleChange = useCallback((): void => {
		onToggle({ filterId, optionId: option.id })
	}, [filterId, option.id, onToggle])

	return (
		<Checkbox
			name={filterId}
			value={option.id}
			label={option.name}
			description={option.description}
			checked={isSelected}
			onChange={handleChange}
		/>
	)
}

export const FilterOption = memo(FilterOptionView)
