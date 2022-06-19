import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Nullable } from '../../../../types/Nullable'

export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type UniversalInputPropsType = Omit<DefaultInputPropsType, 'type'> & {
	handleSetValueChange?: (value: string) => void
	handleEnterKeyPress?: () => void
	secondDivClassName?: string
	error?: Nullable<string>
}