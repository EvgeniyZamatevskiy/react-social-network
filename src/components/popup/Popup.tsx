import React, { FC, forwardRef } from 'react'
import { ReturnComponentType } from 'types'
import { PopupPropsType } from './types'
import watercolor from 'assets/icons/watercolor.png'
import logOut from 'assets/icons/logOut.png'
import style from './Popup.module.scss'
import { UniversalSelector } from 'components/common'

export const Popup: FC<PopupPropsType> = forwardRef((props, ref): ReturnComponentType => {
	return (
		<div className={style.popup} ref={ref}>
			<div className={style.watercolorContainer}>
				<img className={style.watercolorIcon} src={watercolor} alt='watercolor' />
				Theme: <UniversalSelector />
				{/* <select className={style.primarySelect}>
					<option className={style.primaryOption} value='Light'>Light</option>
					<option className={style.primaryOption} value='Dark'>Dark</option>
				</select> */}
			</div>
			<button className={style.logOutBtn}>
				<img className={style.logOutIcon} src={logOut} alt='log out' />
				Log out
			</button>
		</div>
	)
})
