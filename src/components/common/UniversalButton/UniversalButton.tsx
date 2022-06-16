import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import s from './UniversalButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type UniversalButtonPropsType = Omit<DefaultButtonPropsType, 'type'> & {

}

export const UniversalButton: FC<UniversalButtonPropsType> = ({ className, ...props }) => {
	return (
		<button className={`${s.button} ${className ? className : ''}`} {...props} />
	)
}