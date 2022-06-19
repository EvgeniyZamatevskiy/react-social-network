import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type UniversalButtonPropsType = Omit<DefaultButtonPropsType, 'type'> & {

}