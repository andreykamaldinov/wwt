import type { ComponentProps, ReactNode } from 'react'

export type CheckboxProps = Omit<
	ComponentProps<'input'>,
	'type' | 'children'
> & {
	label: ReactNode
	description?: string | undefined
}
