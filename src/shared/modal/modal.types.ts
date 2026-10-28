import type { ComponentProps } from 'react'

export type ModalProps = Omit<
	ComponentProps<'dialog'>,
	'open' | 'title' | 'children' | 'onCancel' | 'onClose' | 'aria-labelledby'
> & {
	title: string
	onClose: () => void
}
