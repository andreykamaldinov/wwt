import type { FC } from 'react'

import { cn } from '@shared/class-names/class-names.utils'
import type { DividerProps } from '@shared/divider/divider.types'

export const Divider: FC<DividerProps> = ({ className, ...props }) => {
	return (
		<hr
			className={cn('border-0 border-t-2 border-grey-200', className)}
			{...props}
		/>
	)
}
