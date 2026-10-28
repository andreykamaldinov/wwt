import { useCallback, useState } from 'react'

import type { Disclosure } from '@shared/disclosure/disclosure.types'

export const useDisclosure = (initialState: boolean = false): Disclosure => {
	const [isOpen, setIsOpen] = useState<boolean>(initialState)

	const open = useCallback((): void => {
		setIsOpen(true)
	}, [])

	const close = useCallback((): void => {
		setIsOpen(false)
	}, [])

	return { isOpen, open, close }
}
