import type { FormEvent } from 'react'

import type { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

import type { FilterOptionRef } from '@store/search-filter/search-filter.types'

export type FilterOptionToggle = (option: FilterOptionRef) => void

export type FilterModalProps = {
	onClose: () => void
}

export type FilterDraft = {
	draft: SearchRequestFilter
	toggleDraftOption: FilterOptionToggle
	clearDraft: () => void
}

export type FilterModalState = FilterDraft & {
	isApplyDisabled: boolean
	isConfirmOpen: boolean
	requestApply: (event: FormEvent<HTMLFormElement>) => void
	confirmApply: () => void
	cancelApply: () => void
}
