import {
	type FC,
	type MouseEvent,
	type PropsWithChildren,
	type SyntheticEvent,
	useId
} from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '@shared/class-names/class-names.utils'
import { CloseSvg } from '@shared/modal/close-svg'
import { useModalDialog } from '@shared/modal/modal-dialog.hook'
import type { ModalProps } from '@shared/modal/modal.types'
import { TranslationsNameSpaces } from '@shared/translation.enum'

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
	title,
	onClose,
	className,
	children,
	...props
}) => {
	const { t } = useTranslation(TranslationsNameSpaces.MODAL)
	const dialogRef = useModalDialog()
	const titleId = useId()

	const handleCancel = (event: SyntheticEvent<HTMLDialogElement>): void => {
		event.preventDefault()
		onClose()
	}

	const handleBackdropClick = (event: MouseEvent<HTMLDivElement>): void => {
		if (event.target === event.currentTarget) {
			onClose()
		}
	}

	return (
		<dialog
			ref={dialogRef}
			aria-labelledby={titleId}
			onCancel={handleCancel}
			className="fixed inset-0 m-0 size-full max-h-none max-w-none overflow-y-auto overscroll-contain bg-transparent p-0 backdrop:bg-overlay backdrop:backdrop-blur-overlay"
			{...props}
		>
			<div
				className="flex min-h-full flex-col justify-center p-4 md:p-10 xl:p-20"
				onClick={handleBackdropClick}
			>
				<section
					className={cn(
						'mx-auto w-full max-w-7xl rounded-2xl bg-white px-4 animate-in duration-300 ease-out fade-in slide-in-from-bottom-3 motion-reduce:animate-none md:px-8',
						className
					)}
				>
					<header className="relative flex items-center justify-center px-10">
						<h2
							id={titleId}
							className="text-center text-title-sm font-medium text-balance text-grey-500 md:text-title"
						>
							{title}
						</h2>
						<button
							type="button"
							aria-label={t('CLOSE')}
							title={t('CLOSE')}
							className="absolute top-1/2 right-0 inline-flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xs text-grey-500 transition-opacity duration-150 after:absolute after:top-1/2 after:left-1/2 after:size-11 after:-translate-1/2 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-500"
							onClick={onClose}
						>
							<CloseSvg className="size-6" />
						</button>
					</header>
					{children}
				</section>
			</div>
		</dialog>
	)
}
