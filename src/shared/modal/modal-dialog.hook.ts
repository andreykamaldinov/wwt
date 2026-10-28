import { type RefObject, useEffect, useRef } from 'react'

export const useModalDialog = (): RefObject<HTMLDialogElement | null> => {
	const dialogRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		const dialog = dialogRef.current

		if (!dialog) {
			return
		}

		if (!dialog.open) {
			dialog.showModal()
		}

		return (): void => {
			dialog.close()
		}
	}, [])

	return dialogRef
}
