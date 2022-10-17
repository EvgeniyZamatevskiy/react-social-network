import React, { FC, useEffect, useRef, useState } from 'react'
import { ReturnComponentType } from 'types'
import { Popup } from 'components/popup'
import { useSelector } from 'react-redux'
import { selectIsAuth, selectTheme } from 'store/selectors'
import { getBackgroundColor } from 'utils'
import { Icon12Dropdown } from '@vkontakte/icons'
import { useTheme } from 'hooks'
import style from './Header.module.scss'

export const Header: FC = (): ReturnComponentType => {

  const theme = useSelector(selectTheme)
  const isAuth = useSelector(selectIsAuth)

  const [isActivePopup, setIsActivePopup] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const authorizedUserContainerRef = useRef<HTMLDivElement>(null)

  const isDarkTheme = useTheme('dark')

  const authorizedUserContainerStyle = {
    backgroundColor: getBackgroundColor(isActivePopup, theme, '#F2F3F5', '#3D3D3D')
  }
  const authorizedUserStyle = {
    backgroundColor: getBackgroundColor(isHover, theme, '#F5F6F8', '#333333')
  }

  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      const event = e as MouseEvent & { path: Node[] }

      if (authorizedUserContainerRef.current && !event.path.includes(authorizedUserContainerRef.current)) {
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

    if (!isActivePopup) {
      setIsHover(false)
    } else {
      setIsHover(true)
    }
  }

  const onAuthorizedUserContainerMouseEnter = (): void => {
    if (isActivePopup === false) {
      setIsHover(true)
    }
  }

  const onAuthorizedUserContainerMouseLeave = (): void => {
    setIsHover(false)
  }

  return (
    <header className={`${style.header} ${isDarkTheme && style.darkHeader}`}>
      <div className={style.container}>
        <h1 className={style.title}>social network</h1>
        {isAuth
          && <div
            className={style.authorizedUserContainer}
            style={authorizedUserContainerStyle}
            onMouseEnter={onAuthorizedUserContainerMouseEnter}
            onMouseLeave={onAuthorizedUserContainerMouseLeave}
            ref={authorizedUserContainerRef}
          >
            <div
              className={style.authorizedUser}
              style={authorizedUserStyle}
              onClick={onToggleIsActivePopupClick}
            >
              <Icon12Dropdown className={style.arrowDownIcon} width={24} height={16} fill={'#656565'}/>
            </div>
            {isActivePopup && <Popup setIsActivePopup={setIsActivePopup}/>}
          </div>}
      </div>
    </header>
  )
}
