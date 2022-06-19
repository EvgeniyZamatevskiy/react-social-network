import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type UniversalInputPropsType = Omit<DefaultInputPropsType, 'type'> & {
	onInputChange?: (value: string) => void
	onEnterKeyPress?: () => void
	secondDivClassName?: string
	error?: string
}