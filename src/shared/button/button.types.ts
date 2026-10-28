import type { ComponentProps } from 'react'

import type { ButtonType } from '@shared/button/button-type.enum'

export type ButtonProps = Omit<ComponentProps<'button'>, 'children'> & {
	buttonType: ButtonType
}
