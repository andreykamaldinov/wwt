import { type FormEvent, useCallback } from 'react'

import { useFilterItemsQuery } from '@api/filter-items/filter-items.query'

import { useDisclosure } from '@shared/disclosure/disclosure.hook'
import {
	selectApplyFilter,
	selectSearchFilter,
	useSearchFilterStore
} from '@store/search-filter/search-filter.store'

import { useFilterDraft } from '@filter-modal/filter-draft.hook'
import type { FilterModalState } from '@filter-modal/filter-modal.types'

export const useFilterModal = (onClose: () => void): FilterModalState => {
	const appliedFilter = useSearchFilterStore(selectSearchFilter)
	const applyFilter = useSearchFilterStore(selectApplyFilter)

	const { isSuccess: isFilterLoaded } = useFilterItemsQuery()
	const { draft, toggleDraftOption, clearDraft } = useFilterDraft(appliedFilter)
	const confirmModal = useDisclosure()

	const requestApply = useCallback(
		(event: FormEvent<HTMLFormElement>): void => {
			event.preventDefault()
			confirmModal.open()
		},
		[confirmModal.open]
	)

	const confirmApply = useCallback((): void => {
		applyFilter(draft)
		onClose()
	}, [applyFilter, draft, onClose])

	return {
		draft,
		toggleDraftOption,
		clearDraft,
		isApplyDisabled: !isFilterLoaded,
		isConfirmOpen: confirmModal.isOpen,
		requestApply,
		confirmApply,
		cancelApply: confirmModal.close
	}
}
