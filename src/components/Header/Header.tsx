import React, { FC, useEffect, useRef, useState } from 'react'
import { ReturnComponentType } from 'types'
import { Popup } from 'components/popup'
import { useSelector } from 'react-redux'
import { selectTheme } from 'store/selectors'
import { getBackgroundColor } from 'utils'
import { Icon12Dropdown } from '@vkontakte/icons'
import defaultAvatar from 'assets/images/defaultAvatar.png'
import style from './Header.module.scss'

export const Header: FC = (): ReturnComponentType => {

	const theme = useSelector(selectTheme)

	const [isActivePopup, setIsActivePopup] = useState(false)
	const [isHover, setIsHover] = useState(false)

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
		setIsHover(false)
	}

	const onAuthorizedUserContainerMouseEnter = (): void => {
		if (isActivePopup === false) {
			setIsHover(true)
		}
	}

	const onAuthorizedUserContainerMouseLeave = (): void => {
		setIsHover(false)

	}

	const getBackgroundColorTest = (condition: boolean): string => {
		let backgroundColor = ''

		if (condition && theme === 'dark') {
			return backgroundColor = '#3D3D3D'
		}

		if (condition && theme === 'light') {
			return backgroundColor = '#F2F3F5'
		}

		return backgroundColor
	}

	const getBackgroundColorTest2 = (condition: boolean): string => {
		let backgroundColor = ''

		if (condition && theme === 'dark') {
			return backgroundColor = '#333333'
		}

		if (condition && theme === 'light') {
			return backgroundColor = '#F5F6F8'
		}

		return backgroundColor
	}

	return (
		<header className={`${style.header} ${theme === 'dark' && style.dark}`}>
			<div className={style.container}>
				<h1 className={style.title}>social network</h1>
				<div
					className={style.authorizedUserContainer}
					style={{ backgroundColor: getBackgroundColorTest(isActivePopup) }}
					onMouseEnter={onAuthorizedUserContainerMouseEnter}
					onMouseLeave={onAuthorizedUserContainerMouseLeave}
					ref={authorizedUserContainerRef}
				>
					<div
						className={style.body}
						style={{ backgroundColor: getBackgroundColorTest2(isHover) }}
						onClick={onToggleIsActivePopupClick}
					>
						<img className={style.avatar} src={defaultAvatar} alt='avatar' />
						<Icon12Dropdown className={style.arrowDownIcon} width={12} height={8} fill={'#656565'} />
					</div>
					{isActivePopup && <Popup ref={popupRef} />}
				</div>
			</div>
		</header>
	)
}
