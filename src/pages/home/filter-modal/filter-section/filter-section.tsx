import { type FC, memo } from 'react'

import { FilterOption } from '@filter-modal/filter-option/filter-option'
import type { FilterSectionProps } from '@filter-modal/filter-section/filter-section.types'

const FilterSectionView: FC<FilterSectionProps> = ({
	filterItem,
	selectedOptionIds,
	onToggle
}) => {
	return (
		<fieldset className="min-w-0 py-8">
			<legend className="float-left w-full text-section-sm font-medium text-balance text-grey-500 md:text-section">
				{filterItem.name}
			</legend>
			<ul className="clear-both grid gap-x-8 gap-y-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
				{filterItem.options.map(option => (
					<li key={option.id}>
						<FilterOption
							filterId={filterItem.id}
							option={option}
							isSelected={selectedOptionIds.includes(option.id)}
							onToggle={onToggle}
						/>
					</li>
				))}
			</ul>
		</fieldset>
	)
}

export const FilterSection = memo(FilterSectionView)
