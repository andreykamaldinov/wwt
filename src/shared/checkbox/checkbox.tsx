import type { FC } from 'react'

import { CheckSvg } from '@shared/checkbox/check-svg'
import type { CheckboxProps } from '@shared/checkbox/checkbox.types'
import { cn } from '@shared/class-names/class-names.utils'

export const Checkbox: FC<CheckboxProps> = ({
	label,
	description,
	className,
	...props
}) => {
	return (
		<label
			title={description}
			className={cn(
				'group flex w-fit cursor-pointer items-center gap-4.5 text-base leading-6 text-pretty text-grey-500',
				className
			)}
		>
			<input
				type="checkbox"
				className="peer sr-only"
				{...props}
			/>
			<span
				aria-hidden
				className="ml-1 flex size-5 shrink-0 items-center justify-center rounded-xs border-2 border-grey-500 bg-white text-white transition-colors duration-150 peer-checked:bg-grey-500 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-grey-500 peer-disabled:opacity-50"
			>
				<CheckSvg className="size-4 opacity-0 transition-opacity duration-150 group-has-checked:opacity-100" />
			</span>
			<span>{label}</span>
		</label>
	)
}
