import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { ErrorCirclePropsType } from './types'
import style from './ErrorCircle.module.scss'

export const ErrorCircle: FC<ErrorCirclePropsType> = ({ secondaryClassName }): ReturnComponentType => {
	return <span className={secondaryClassName ? secondaryClassName : style.errorCircle}>!</span>
}
