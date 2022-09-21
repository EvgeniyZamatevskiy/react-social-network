import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from 'store/selectors'
import { ReturnComponentType } from 'types'
import { isDarkTheme } from 'utils'
import style from './AuthLoader.module.scss'

export const AuthLoader: FC = (): ReturnComponentType => {

	const theme = useSelector(selectTheme)

	return (
		<div style={isDarkTheme(theme) ? { color: '#000' } : { color: '#FFF' }}
			className={`${style.laBallClipRotate} ${style.laSm}`}>
			<div></div>
		</div>
	)
}
