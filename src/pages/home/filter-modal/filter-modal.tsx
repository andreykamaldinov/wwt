import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/button/button'
import { ButtonType } from '@shared/button/button-type.enum'
import { Divider } from '@shared/divider/divider'
import { Modal } from '@shared/modal/modal'
import { TranslationsNameSpaces } from '@shared/translation.enum'

import { ConfirmApplyModal } from '@filter-modal/confirm-apply-modal/confirm-apply-modal'
import { useFilterModal } from '@filter-modal/filter-modal.hook'
import type { FilterModalProps } from '@filter-modal/filter-modal.types'
import { FilterSectionList } from '@filter-modal/filter-section-list/filter-section-list'

export const FilterModal: FC<FilterModalProps> = ({ onClose }) => {
	const { t } = useTranslation(TranslationsNameSpaces.FILTER_MODAL)
	const {
		draft,
		toggleDraftOption,
		clearDraft,
		isApplyDisabled,
		isConfirmOpen,
		requestApply,
		confirmApply,
		cancelApply
	} = useFilterModal(onClose)

	return (
		<>
			<Modal
				title={t('TITLE')}
				className="pt-8 md:pt-10"
				onClose={onClose}
			>
				<form onSubmit={requestApply}>
					<Divider className="mt-6" />
					<div className="py-8">
						<FilterSectionList
							filter={draft}
							onToggle={toggleDraftOption}
						/>
					</div>
					<Divider />
					<footer className="pt-8 pb-10">
						<div className="relative flex flex-col items-center gap-6">
							<Button
								type="submit"
								buttonType={ButtonType.PRIMARY}
								className="w-46"
								disabled={isApplyDisabled}
							>
								{t('APPLY')}
							</Button>
							<Button
								buttonType={ButtonType.LINK}
								className="md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2"
								onClick={clearDraft}
							>
								{t('CLEAR_ALL')}
							</Button>
						</div>
					</footer>
				</form>
			</Modal>

			{isConfirmOpen && (
				<ConfirmApplyModal
					onConfirm={confirmApply}
					onDiscard={onClose}
					onClose={cancelApply}
				/>
			)}
		</>
	)
}
