import { ReactNode } from 'react'

export type ButtonPropsType = {
	children: ReactNode
	className?: string
	style?: {}
	onMouseEnter?: () => void
	onMouseLeave?: () => void
}
