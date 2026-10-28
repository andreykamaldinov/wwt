import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/button/button'
import { ButtonType } from '@shared/button/button-type.enum'
import { Modal } from '@shared/modal/modal'
import { TranslationsNameSpaces } from '@shared/translation.enum'

import type { ConfirmApplyModalProps } from '@filter-modal/confirm-apply-modal/confirm-apply-modal.types'

export const ConfirmApplyModal: FC<ConfirmApplyModalProps> = ({
	onConfirm,
	onDiscard,
	onClose
}) => {
	const { t } = useTranslation(TranslationsNameSpaces.CONFIRM_APPLY_MODAL)

	return (
		<Modal
			role="alertdialog"
			title={t('TITLE')}
			className="py-8 shadow-popup"
			onClose={onClose}
		>
			<div className="mt-16 flex flex-col-reverse items-center gap-4 md:mt-30 md:flex-row md:justify-center md:gap-8">
				<Button
					buttonType={ButtonType.SECONDARY}
					className="w-full md:w-70"
					onClick={onDiscard}
				>
					{t('DISCARD')}
				</Button>
				<Button
					buttonType={ButtonType.PRIMARY}
					className="w-full md:w-70"
					onClick={onConfirm}
				>
					{t('APPLY')}
				</Button>
			</div>
		</Modal>
	)
}
