import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import style from './Ellipse.module.scss'

export const Ellipse: FC = (): ReturnComponentType => {
	return <span className={style.ellipse}>!</span>
}
