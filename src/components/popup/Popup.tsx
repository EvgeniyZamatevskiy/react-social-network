import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { ReturnComponentType } from 'types'
import { Select } from 'components/common'
import { ThemeType } from 'store/slices/app/types'
import { selectTheme } from 'store/selectors'
import { useAppDispatch } from 'hooks'
import { setTheme } from 'store/slices/app'
import { getBackgroundColor } from 'utils'
import { Icon20DoorArrowRightOutline } from '@vkontakte/icons'
import { Icon28PaletteOutline } from '@vkontakte/icons'
import style from './Popup.module.scss'

const themes: ThemeType[] = ['light', 'dark']

export const Popup: FC = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const theme = useSelector(selectTheme)

	const [isHover, setIsHover] = useState(false)

	const onThemeChange = (theme: string): void => {
		dispatch(setTheme(theme as ThemeType))
	}

	const onLogOutMouseEnter = (): void => setIsHover(true)

	const onLogOutMouseLeave = (): void => setIsHover(false)

	return (
		<div className={`${style.popup} ${theme === 'dark' && style.dark}`} >
			<div className={style.watercolorContainer}>
				<Icon28PaletteOutline className={style.watercolorIcon} width={17} height={17} fill={'#71AAEB'} />
				Theme: <Select
					options={themes}
					value={theme}
					setValue={onThemeChange}
				/>
			</div>
			<button
				className={style.logOutBtn}
				style={{ backgroundColor: getBackgroundColor(isHover, theme, ' #F5F6F8', '#333333') }}
				onMouseEnter={onLogOutMouseEnter}
				onMouseLeave={onLogOutMouseLeave}
			>
				<Icon20DoorArrowRightOutline className={style.logOutIcon} width={17} height={17} fill={'#71AAEB'} />
				Log out
			</button>
		</div>
	)
}
