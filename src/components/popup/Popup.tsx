import React, { FC, forwardRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { ReturnComponentType } from 'types'
import { PopupPropsType } from './types'
import { Select } from 'components/common'
import { ThemeType } from 'store/slices/app/types'
import { selectTheme } from 'store/selectors'
import { useAppDispatch } from 'hooks'
import { setTheme } from 'store/slices/app'
import { getBackgroundColor } from 'utils'
import watercolor from 'assets/icons/watercolor.png'
import logOut from 'assets/icons/logOut.png'
import style from './Popup.module.scss'

const themes: ThemeType[] = ['light', 'dark']

export const Popup: FC<PopupPropsType> = forwardRef((props, ref): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const theme = useSelector(selectTheme)

	const [isHover, setIsHover] = useState(false)

	const onThemeChange = (theme: string): void => {
		dispatch(setTheme(theme as ThemeType))
	}

	const onLogOutMouseEnter = (): void => setIsHover(true)

	const onLogOutMouseLeave = (): void => setIsHover(false)

	return (
		<div className={`${style.popup} ${theme === 'dark' && style.dark}`} ref={ref}>
			<div className={style.watercolorContainer}>
				<img className={style.watercolorIcon} src={watercolor} alt='watercolor' />
				Theme: <Select
					options={themes}
					value={theme}
					setValue={onThemeChange}
				/>
			</div>
			<button
				className={style.logOutBtn}
				style={{ backgroundColor: getBackgroundColor(isHover, theme) }}
				onMouseEnter={onLogOutMouseEnter}
				onMouseLeave={onLogOutMouseLeave}
			>
				<img className={style.logOutIcon} src={logOut} alt='log out' />
				Log out
			</button>
		</div>
	)
})
