import type { FC, PropsWithChildren } from 'react'

import type { ButtonProps } from '@shared/button/button.types'
import { cn } from '@shared/class-names/class-names.utils'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	buttonType,
	type = 'button',
	className,
	children,
	...props
}) => {
	return (
		<button
			type={type}
			className={cn(
				'inline-flex cursor-pointer items-center justify-center text-base leading-6 transition duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed',
				buttonType,
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}
