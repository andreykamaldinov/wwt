import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useFilterItemsQuery } from '@api/filter-items/filter-items.query'

import { Button } from '@shared/button/button'
import { ButtonType } from '@shared/button/button-type.enum'
import { TranslationsNameSpaces } from '@shared/translation.enum'
import { getSelectedOptionIds } from '@store/search-filter/search-filter.utils'

import type { FilterSectionListProps } from '@filter-modal/filter-section-list/filter-section-list.types'
import { FilterSection } from '@filter-modal/filter-section/filter-section'

export const FilterSectionList: FC<FilterSectionListProps> = ({
	filter,
	onToggle
}) => {
	const { t } = useTranslation(TranslationsNameSpaces.FILTER_SECTION_LIST)
	const {
		data: filterItems,
		isPending,
		isError,
		refetch
	} = useFilterItemsQuery()

	const handleRetry = useCallback((): void => {
		void refetch()
	}, [refetch])

	if (isPending) {
		return (
			<p
				role="status"
				className="py-8 text-center"
			>
				{t('LOADING')}
			</p>
		)
	}

	if (isError) {
		return (
			<div
				role="alert"
				className="flex flex-col items-center gap-4 py-8"
			>
				<p>{t('LOAD_ERROR')}</p>
				<Button
					buttonType={ButtonType.LINK}
					onClick={handleRetry}
				>
					{t('RETRY')}
				</Button>
			</div>
		)
	}

	return (
		<div className="divide-y-2 divide-grey-200">
			{filterItems.map(filterItem => (
				<FilterSection
					key={filterItem.id}
					filterItem={filterItem}
					selectedOptionIds={getSelectedOptionIds(filter, filterItem.id)}
					onToggle={onToggle}
				/>
			))}
		</div>
	)
}
