import { type FC, useId } from 'react'
import { useTranslation } from 'react-i18next'

import { usePrefetchFilterItems } from '@api/filter-items/filter-items.query'

import { Button } from '@shared/button/button'
import { ButtonType } from '@shared/button/button-type.enum'
import { useDisclosure } from '@shared/disclosure/disclosure.hook'
import { TranslationsNameSpaces } from '@shared/translation.enum'
import {
	selectSearchFilter,
	useSearchFilterStore
} from '@store/search-filter/search-filter.store'

import { FilterModal } from '@filter-modal/filter-modal'

const JSON_INDENT = 2

export const Home: FC = () => {
	const { t } = useTranslation(TranslationsNameSpaces.HOME)
	const selectedFilterId = useId()

	const filter = useSearchFilterStore(selectSearchFilter)
	const prefetchFilterItems = usePrefetchFilterItems()
	const filterModal = useDisclosure()

	return (
		<main className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col gap-10 px-4 py-12 md:px-8">
			<header className="flex flex-wrap items-center justify-between gap-6">
				<h1 className="text-3xl text-balance text-grey-500 md:text-4xl">
					{t('TITLE')}
				</h1>
				<Button
					buttonType={ButtonType.PRIMARY}
					className="w-46"
					aria-haspopup="dialog"
					onPointerEnter={prefetchFilterItems}
					onFocus={prefetchFilterItems}
					onClick={filterModal.open}
				>
					{t('OPEN_FILTER')}
				</Button>
			</header>

			<section aria-labelledby={selectedFilterId}>
				<h2
					id={selectedFilterId}
					className="mb-4 text-2xl text-grey-500"
				>
					{t('SELECTED_FILTER')}
				</h2>
				<pre className="overflow-x-auto rounded-2xl bg-grey-50 p-6 text-sm leading-6">
					<code>{JSON.stringify(filter, null, JSON_INDENT)}</code>
				</pre>
			</section>

			{filterModal.isOpen && <FilterModal onClose={filterModal.close} />}
		</main>
	)
}
