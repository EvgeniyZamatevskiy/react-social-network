import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { UniversalButtonPropsType } from './types'
import style from './style/UniversalButton.module.css'

export const UniversalButton: FC<UniversalButtonPropsType> = ({ className, ...props }): ReturnComponentType => {

	const buttonClassName = `${style.button} ${className && className}`

	return (
		<button className={buttonClassName} {...props} />
	)
}