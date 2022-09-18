import React, { FC, useEffect, useRef, useState } from 'react'
import { ReturnComponentType } from 'types'
import arrowDown from 'assets/icons/arrowDown.png'
import defaultAvatar from 'assets/images/defaultAvatar.png'
import { Popup } from 'components/popup'
import style from './Header.module.scss'

export const Header: FC = (): ReturnComponentType => {

	const [isActivePopup, setIsActivePopup] = useState(false)

	const authorizedUserContainerRef = useRef<HTMLDivElement>(null)
	const popupRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const onOutsideClick = (e: MouseEvent) => {
			const event = e as MouseEvent & { path: Node[] }
			if (popupRef.current &&
				authorizedUserContainerRef.current &&
				!event.path.includes(popupRef.current) &&
				!event.path.includes(authorizedUserContainerRef.current)) {
				setIsActivePopup(false)
			}
		}

		document.body.addEventListener('click', onOutsideClick)

		return () => {
			document.body.removeEventListener('click', onOutsideClick)
		}
	}, [])

	const onToggleIsActivePopupClick = (): void => {
		setIsActivePopup(!isActivePopup)
	}

	return (
		<header className={style.header}>
			<div className={style.container}>
				<h1 className={style.title}>social network</h1>

				<div
					className={style.authorizedUserContainer}
					style={isActivePopup ? { backgroundColor: '#F5F6F8' } : {}}
					ref={authorizedUserContainerRef}
				>
					<div className={style.body} onClick={onToggleIsActivePopupClick}>
						<img className={style.avatar} src={defaultAvatar} alt='avatar' />
						<img className={style.arrowDownIcon} src={arrowDown} alt='arrow down' />
					</div>

					{isActivePopup && <Popup ref={popupRef} />}
				</div>
			</div>
		</header>
	)
}
