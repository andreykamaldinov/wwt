import type { FC } from 'react'

import type { SvgProps } from '@shared/svg/svg.types'

export const CheckSvg: FC<SvgProps> = props => {
	return (
		<svg
			viewBox="0 0 16 16"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden
			{...props}
		>
			<path d="M3.5 8.5l3 3 6-7" />
		</svg>
	)
}
