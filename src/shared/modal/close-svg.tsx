import type { FC } from 'react'

import type { SvgProps } from '@shared/svg/svg.types'

export const CloseSvg: FC<SvgProps> = props => {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			aria-hidden
			{...props}
		>
			<path d="M3 3l18 18M21 3L3 21" />
		</svg>
	)
}
